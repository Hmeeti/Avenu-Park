"""Оптимизация фото блюд для меню Park Avenue.

Как пользоваться:
  1. Положите фото в папку assets/food/. Имя файла = id блюда из data/menu.js,
     например coffee-latte.jpg (подойдут .jpg, .jpeg, .png, .webp).
     Дополнительные ракурсы для галереи в карточке блюда: coffee-latte-2.jpg, coffee-latte-3.jpg …
  2. Один раз установите Pillow:   python -m pip install pillow
  3. Запустите из папки проекта:   python tools/optimize-photos.py

Скрипт для каждого фото:
  - обрезает его по центру до пропорции 4:3;
  - делает <имя>-480.webp, <имя>-960.webp и <имя>.jpg (960 px, JPG-запасной вариант);
  - прописывает в data/menu.js "photo": "<id>" и "gallery": ["<id>-2", …] по готовым файлам.
Исходник переносится в assets/food/_originals/ (эту папку можно не загружать на сайт).
Повторный запуск безопасен: готовые <имя>.jpg размером 960×720 не обрабатываются повторно.
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
EXTRA = re.compile(r'^(.+)-(\d+)$')


def load_ids(text):
    start = text.index('window.MENU_DATA = ') + len('window.MENU_DATA = ')
    data = json.loads(text[start:text.rindex(';')])
    return {item['id'] for item in data['items']}


def owner(stem, ids):
    """id блюда, к которому относится файл, и признак «доп. ракурс»."""
    if stem in ids:
        return stem, False
    m = EXTRA.match(stem)
    if m and m.group(1) in ids:
        return m.group(1), True
    return None, False


def crop_4x3(img):
    img = ImageOps.exif_transpose(img).convert('RGB')
    return ImageOps.fit(img, (1440, 1080), Image.LANCZOS, centering=(0.5, 0.5))


def set_media(text, item_id, photo, gallery):
    anchor = text.find(f'"id": "{item_id}"')
    if anchor == -1:
        return text
    nxt = text.find('"id": "', anchor + 1)
    end = nxt if nxt != -1 else len(text)
    block = re.sub(r'\n\s*"gallery": \[[^\]]*\],?', '', text[anchor:end], count=1)
    m = re.search(r'( *)"photo": (null|"[^"]*"),', block)
    if not m:
        return text
    line = f'{m.group(1)}"photo": {json.dumps(photo)},'
    if gallery:
        line += f'\n{m.group(1)}"gallery": {json.dumps(gallery, ensure_ascii=False)},'
    block = block[:m.start()] + line + block[m.end():]
    return text[:anchor] + block + text[end:]


def main():
    text = MENU.read_text(encoding='utf-8')
    ids = load_ids(text)
    done, unknown = [], []
    for src in sorted(FOOD.iterdir()):
        if not src.is_file() or src.suffix.lower() not in EXTS or GENERATED.search(src.stem):
            continue
        name = src.stem.lower()
        item_id, _ = owner(name, ids)
        if not item_id:
            unknown.append(src.name)
            continue
        if src.suffix.lower() == '.jpg' and (FOOD / f'{name}-960.webp').exists():
            with Image.open(src) as probe:
                if probe.size == (960, 720):
                    continue
        ORIGINALS.mkdir(exist_ok=True)
        original = ORIGINALS / src.name
        if original.resolve() != src.resolve():
            shutil.move(str(src), original)
        img = crop_4x3(Image.open(original))
        for width in (480, 960):
            img.resize((width, width * 3 // 4), Image.LANCZOS).save(FOOD / f'{name}-{width}.webp', 'WEBP', quality=80, method=6)
        img.resize((960, 720), Image.LANCZOS).save(FOOD / f'{name}.jpg', 'JPEG', quality=80, optimize=True, progressive=True)
        done.append(name)

    media = {}
    for f in FOOD.glob('*-960.webp'):
        name = f.name[:-len('-960.webp')]
        item_id, extra = owner(name, ids)
        if item_id and (FOOD / f'{name}.jpg').exists() and (FOOD / f'{name}-480.webp').exists():
            entry = media.setdefault(item_id, {'photo': None, 'gallery': []})
            if extra:
                entry['gallery'].append(name)
            else:
                entry['photo'] = name
    for item_id, entry in media.items():
        if entry['photo']:
            gallery = sorted(entry['gallery'], key=lambda s: int(s.rsplit('-', 1)[1]))
            text = set_media(text, item_id, entry['photo'], gallery)
    MENU.write_text(text, encoding='utf-8')
    print(f'Обработано: {len(done)} фото. Блюд с фото в меню: {sum(1 for e in media.values() if e["photo"])}.')
    if unknown:
        print('Не найдено блюдо с таким id (переименуйте файл):', ', '.join(unknown))


if __name__ == '__main__':
    main()
