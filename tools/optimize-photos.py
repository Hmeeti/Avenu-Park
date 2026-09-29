"""Оптимизация фото блюд для меню Park Avenue.

Как пользоваться:
  1. Положите фото в папку assets/food/. Имя файла = id блюда из data/menu.js,
     например coffee-latte.jpg (подойдут .jpg, .jpeg, .png, .webp).
  2. Один раз установите Pillow:   python -m pip install pillow
  3. Запустите из папки проекта:   python tools/optimize-photos.py

Скрипт для каждого фото:
  - обрезает его по центру до пропорции 4:3;
  - делает <id>-480.webp, <id>-960.webp и <id>.jpg (960 px, JPG-запасной вариант);
  - прописывает "photo": "<id>" у этого блюда в data/menu.js.
Исходник переносится в assets/food/_originals/ (эту папку можно не загружать на сайт).
"""
import json
import re
import shutil
import sys
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit('Нужен Pillow: python -m pip install pillow')

ROOT = Path(__file__).resolve().parent.parent
FOOD = ROOT / 'assets' / 'food'
ORIGINALS = FOOD / '_originals'
MENU = ROOT / 'data' / 'menu.js'
EXTS = {'.jpg', '.jpeg', '.png', '.webp'}
GENERATED = re.compile(r'-(480|960)$')


def load_ids(text):
    start = text.index('window.MENU_DATA = ') + len('window.MENU_DATA = ')
    data = json.loads(text[start:text.rindex(';')])
    return {item['id'] for item in data['items']}


def crop_4x3(img):
    img = ImageOps.exif_transpose(img).convert('RGB')
    return ImageOps.fit(img, (1440, 1080), Image.LANCZOS, centering=(0.5, 0.5))


def set_photo(text, item_id):
    anchor = text.find(f'"id": "{item_id}"')
    if anchor == -1:
        return text
    nxt = text.find('"id": "', anchor + 1)
    end = nxt if nxt != -1 else len(text)
    block = re.sub(r'"photo": (null|"[^"]*")', f'"photo": "{item_id}"', text[anchor:end], count=1)
    return text[:anchor] + block + text[end:]


def main():
    text = MENU.read_text(encoding='utf-8')
    ids = load_ids(text)
    done, unknown = [], []
    for src in sorted(FOOD.iterdir()):
        if not src.is_file() or src.suffix.lower() not in EXTS or GENERATED.search(src.stem):
            continue
        item_id = src.stem.lower()
        if item_id not in ids:
            unknown.append(src.name)
            continue
        ORIGINALS.mkdir(exist_ok=True)
        original = ORIGINALS / src.name
        if original.resolve() != src.resolve():
            shutil.move(str(src), original)
        img = crop_4x3(Image.open(original))
        for width in (480, 960):
            img.resize((width, width * 3 // 4), Image.LANCZOS).save(FOOD / f'{item_id}-{width}.webp', 'WEBP', quality=80, method=6)
        img.resize((960, 720), Image.LANCZOS).save(FOOD / f'{item_id}.jpg', 'JPEG', quality=82, optimize=True, progressive=True)
        text = set_photo(text, item_id)
        done.append(item_id)
    MENU.write_text(text, encoding='utf-8')
    print(f'Готово: {len(done)} фото.', ', '.join(done))
    if unknown:
        print('Не найдено блюдо с таким id (переименуйте файл):', ', '.join(unknown))


if __name__ == '__main__':
    main()
