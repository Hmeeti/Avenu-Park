/* Park Avenue Hotel & Cafe — логика электронного меню. Без фреймворков, ES2020. */
(function () {
  'use strict';

  var MENU = window.MENU_DATA;
  var CFG = window.APP_CONFIG || {};
  var I18N = window.I18N;
  if (!MENU || !I18N) return;

  var LANGS = ['ru', 'kk', 'en'];
  var LANG_CODES = { ru: 'RU', kk: 'KZ', en: 'EN' };
  var THEME_COLORS = { light: '#FFFFFF', dark: '#1E2117' };
  /* Чисто текстовые категории — компактный вид без блока фото */
  var COMPACT = { sides: 1, sauces: 1, extras: 1, tea: 1, crafttea: 1, bread: 1 };
  var TAGS = ['hit', 'new', 'veg', 'spicy', 'halal'];
  var MAX_QTY = 99;
  var SPLIT_MIN = 2;
  var SPLIT_MAX = 20;

  var doc = document;
  var root = doc.documentElement;
  var $ = function (sel, ctx) { return (ctx || doc).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); };
  var reduceMotion = window.matchMedia ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };

  /* ---------- Хранилище (в приватном режиме Safari localStorage может бросать исключения) ---------- */
  var store = {
    get: function (k) {
      try {
        var v = localStorage.getItem('pa_' + k);
        return v == null ? null : JSON.parse(v);
      } catch (e) { return null; }
    },
    set: function (k, v) {
      try { localStorage.setItem('pa_' + k, JSON.stringify(v)); } catch (e) { /* без сохранения */ }
    }
  };

  /* ---------- Состояние ---------- */
  var state = {
    lang: 'ru',
    theme: null,           // 'light' | 'dark' | null — светлая по умолчанию, пока гость не выбрал сам
    group: 'kitchen',
    searchOpen: false,
    query: '',
    bill: { lines: {}, table: '', waiter: '', split: 0 }
  };

  function save() {
    store.set('lang', state.lang);
    store.set('theme', state.theme);
    store.set('group', state.group);
    store.set('bill', state.bill);
  }

  /* ---------- Данные ---------- */
  var cats = MENU.categories.slice().sort(function (a, b) { return a.order - b.order; });
  var catById = {};
  var itemsByCat = {};
  var itemById = {};
  cats.forEach(function (c) { catById[c.id] = c; itemsByCat[c.id] = []; });
  MENU.items.forEach(function (it) {
    itemById[it.id] = it;
    if (itemsByCat[it.category]) itemsByCat[it.category].push(it);
  });
  cats = cats.filter(function (c) { return itemsByCat[c.id].length > 0; });

  /* Поисковая строка по всем языкам: название, состав, категория */
  MENU.items.forEach(function (it) {
    var c = catById[it.category] || { name: {} };
    it._s = norm([
      it.name.ru, it.name.kk, it.name.en,
      it.description.ru, it.description.kk, it.description.en,
      c.name.ru, c.name.kk, c.name.en
    ].filter(Boolean).join(' \u0001 '));
  });

  function waiters() { return Array.isArray(CFG.waiters) ? CFG.waiters.filter(Boolean) : []; }
  function servicePct() {
    var p = Number(CFG.serviceChargePercent);
    return isFinite(p) && p > 0 ? p : 0;
  }

  /* ---------- Утилиты ---------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function norm(s) { return String(s || '').toLowerCase().replace(/ё/g, 'е'); }
  function t(key, vars) {
    var dict = I18N[state.lang] || I18N.ru;
    var s = dict[key] != null ? dict[key] : (I18N.ru[key] != null ? I18N.ru[key] : key);
    if (vars) Object.keys(vars).forEach(function (k) { s = s.split('{' + k + '}').join(vars[k]); });
    return s;
  }
  /* Текст на выбранном языке; если перевода нет — русский */
  function L(obj) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[state.lang] || obj.ru || '';
  }
  function fmtPrice(n) {
    return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0') + '\u00A0' + (CFG.currency || '₸');
  }
  function fmtVol(v) {
    if (!v) return '';
    v = String(v);
    if (state.lang === 'en') v = v.replace(/(\d),(\d)/g, '$1.$2').replace(/\s*л$/, '\u00A0L');
    return v.replace(/ /g, '\u00A0');
  }
  function icon(id, cls) {
    return '<svg class="icon' + (cls ? ' ' + cls : '') + '" aria-hidden="true"><use href="#i-' + id + '"/></svg>';
  }
  function debounce(fn, ms) {
    var timer;
    return function () {
      var args = arguments, self = this;
      clearTimeout(timer);
      timer = setTimeout(function () { fn.apply(self, args); }, ms);
    };
  }

  /* Подсветка совпадений без RegExp — спецсимволы в запросе ничего не ломают */
  function hl(text, words) {
    text = String(text || '');
    if (!words || !words.length) return esc(text);
    var n = norm(text);
    if (n.length !== text.length) return esc(text);
    var ranges = [];
    words.forEach(function (w) {
      var i = 0;
      while (w && (i = n.indexOf(w, i)) !== -1) { ranges.push([i, i + w.length]); i += w.length; }
    });
    if (!ranges.length) return esc(text);
    ranges.sort(function (a, b) { return a[0] - b[0]; });
    var merged = [ranges[0]];
    for (var k = 1; k < ranges.length; k++) {
      var last = merged[merged.length - 1];
      if (ranges[k][0] <= last[1]) last[1] = Math.max(last[1], ranges[k][1]);
      else merged.push(ranges[k]);
    }
    var out = '', pos = 0;
    merged.forEach(function (r) {
      out += esc(text.slice(pos, r[0])) + '<mark>' + esc(text.slice(r[0], r[1])) + '</mark>';
      pos = r[1];
    });
    return out + esc(text.slice(pos));
  }

  /* ---------- Прокрутка ---------- */
  var smoothSupported = 'scrollBehavior' in root.style;
  function scrollToY(y) {
    y = Math.max(0, Math.round(y));
    if (smoothSupported && !reduceMotion.matches) window.scrollTo({ top: y, behavior: 'smooth' });
    else jumpTo(y);
  }
  /* Мгновенный переход без плавной анимации (html { scroll-behavior: smooth }) */
  function jumpTo(y) {
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, Math.max(0, Math.round(y)));
    root.style.scrollBehavior = '';
  }

  /* ---------- Элементы ---------- */
  var el = {
    topbar: $('#topbar'),
    menu: $('#menu'),
    menuNav: $('#menuNav'),
    navRow: $('#navRow'),
    chips: $('#chips'),
    menuList: $('#menuList'),
    results: $('#searchResults'),
    searchRow: $('#searchRow'),
    searchInput: $('#searchInput'),
    searchClear: $('#searchClear'),
    searchOpen: $('#searchOpen'),
    billBar: $('#billBar'),
    toTop: $('#toTop'),
    langToggle: $('#langToggle'),
    langMenu: $('#langMenu'),
    themeBtn: $('#themeBtn'),
    themeColor: $('#themeColor'),
    billTable: $('#billTable')
  };

  function topbarH() { return el.topbar.getBoundingClientRect().height; }
  function stickyH() { return topbarH() + el.menuNav.getBoundingClientRect().height; }
  function menuStartY() { return el.menu.getBoundingClientRect().top + window.pageYOffset - topbarH(); }

  /* ======================================================================
     Язык и тема
     ====================================================================== */
  function applyStatic() {
    root.setAttribute('lang', state.lang);
    doc.title = 'Park Avenue Hotel & Cafe — ' + t('menu');
    $$('[data-i18n]').forEach(function (n) { n.textContent = t(n.getAttribute('data-i18n')); });
    $$('[data-i18n-aria]').forEach(function (n) { n.setAttribute('aria-label', t(n.getAttribute('data-i18n-aria'))); });
    $$('[data-i18n-ph]').forEach(function (n) { n.setAttribute('placeholder', t(n.getAttribute('data-i18n-ph'))); });
    $('#langCode').textContent = LANG_CODES[state.lang];
    el.langToggle.setAttribute('aria-label', t('language') + ': ' + LANG_CODES[state.lang]);
    $$('.lang__opt').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === state.lang)); });
    el.billBar.setAttribute('aria-label', t('bill_open'));
    updateThemeButton();
  }

  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1 || lang === state.lang) return;
    var anchor = captureAnchor();
    state.lang = lang;
    save();
    applyStatic();
    renderConfig();
    renderMenu();
    if (state.query) renderSearch(false);
    renderBillBar();
    rerenderOpenSheets();
    restoreAnchor(anchor);
  }

  /* Запоминаем, какой раздел был у верхнего края, чтобы после смены языка не «прыгать» */
  function captureAnchor() {
    var limit = stickyH();
    var nodes = $$(state.query ? '#searchResults .results__cat, #searchResults .list' : '#menuList .section');
    for (var i = 0; i < nodes.length; i++) {
      var r = nodes[i].getBoundingClientRect();
      if (r.bottom > limit) return { index: i, offset: r.top, selector: state.query };
    }
    return null;
  }
  function restoreAnchor(a) {
    if (!a) return;
    var nodes = $$(a.selector ? '#searchResults .results__cat, #searchResults .list' : '#menuList .section');
    var n = nodes[a.index];
    if (n) jumpTo(n.getBoundingClientRect().top + window.pageYOffset - a.offset);
  }

  function currentTheme() {
    return state.theme || 'light';
  }
  function applyTheme() {
    var th = currentTheme();
    root.setAttribute('data-theme', th);
    el.themeColor.setAttribute('content', THEME_COLORS[th]);
    updateThemeButton();
  }
  function updateThemeButton() {
    el.themeBtn.setAttribute('aria-label', t(currentTheme() === 'dark' ? 'theme_light' : 'theme_dark'));
  }
  function setTheme(th) {
    state.theme = th;
    save();
    applyTheme();
  }

  function openLang() {
    el.langMenu.hidden = false;
    el.langToggle.setAttribute('aria-expanded', 'true');
    var cur = $('.lang__opt[aria-pressed="true"]', el.langMenu);
    if (cur) cur.focus();
  }
  function closeLang(returnFocus) {
    if (el.langMenu.hidden) return;
    el.langMenu.hidden = true;
    el.langToggle.setAttribute('aria-expanded', 'false');
    if (returnFocus) el.langToggle.focus();
  }

  /* ======================================================================
     Данные заведения (приветствие, подвал, заметки)
     ====================================================================== */
  function renderConfig() {
    var w = L(CFG.welcome) || {};
    if (!w.title && CFG.welcome) w = CFG.welcome.ru || {};
    $('#welcomeTitle').textContent = w.title || '';
    $('#welcomeText').textContent = w.text || '';
    $('#welcomeTitle').hidden = !w.title;
    $('#welcomeText').hidden = !w.text;

    var pct = servicePct();
    var facts = [];
    if (CFG.workHours) facts.push('<li>' + icon('clock') + esc(t('daily', { h: CFG.workHours })) + '</li>');
    if (pct) facts.push('<li>' + icon('receipt') + esc(t('service_short', { p: pct })) + '</li>');
    $('#heroFacts').innerHTML = facts.join('');
    $('#heroFacts').hidden = !facts.length;
    $('#serviceNote').textContent = pct ? t('service_note', { p: pct }) : '';

    var allergy = L(CFG.allergyNote);
    $('#menuAllergy').textContent = allergy;
    $('#billAllergy').textContent = allergy;

    var links = [];
    (CFG.phones || []).forEach(function (p) {
      links.push('<li><a class="footer__link" href="tel:' + esc(String(p).replace(/[^\d+]/g, '')) + '">' + icon('phone') + esc(p) + '</a></li>');
    });
    if (CFG.instagram) {
      links.push('<li><a class="footer__link" href="' + esc(CFG.instagram) + '" target="_blank" rel="noopener">' + icon('insta') + esc(CFG.instagramHandle || 'Instagram') + '</a></li>');
    }
    var map = mapUrl();
    if (map) links.push('<li><a class="footer__link" href="' + esc(map) + '" target="_blank" rel="noopener">' + icon('pin') + esc(t('map')) + '</a></li>');
    links.push('<li><button type="button" class="footer__link" data-open="info">' + icon('info') + esc(t('info')) + '</button></li>');
    $('#footerLinks').innerHTML = links.join('');
    $('#footerHours').textContent = CFG.workHours ? t('hours') + ': ' + CFG.workHours : '';
    $('#footerCopy').textContent = '© ' + new Date().getFullYear() + ' ' + (CFG.name || 'Park Avenue Hotel & Cafe');
  }

  function mapUrl() {
    if (CFG.mapUrl) return CFG.mapUrl;
    if (CFG.address) {
      return 'https://www.google.com/maps/search/?api=1&query=' +
        encodeURIComponent([CFG.name, CFG.city, CFG.address].filter(Boolean).join(', '));
    }
    return '';
  }

  /* ======================================================================
     Меню
     ====================================================================== */
  function layoutFor(c) {
    if (COMPACT[c.id]) return 'compact';
    if (c.group === 'kitchen') return 'photo';
    return itemsByCat[c.id].some(function (i) { return i.photo; }) ? 'photo' : 'compact';
  }

  /* Фото блюда. photo: 'coffee-latte' → WebP 480/960 + JPG; 'file.jpg' → только этот файл */
  function mediaHTML(it, eager, sizes) {
    if (!it.photo) return '<div class="ph"></div>';
    return photoHTML(it.photo, L(it.name), eager, sizes);
  }

  function photoHTML(p, altText, eager, sizes) {
    var alt = esc(altText);
    var load = eager ? ' loading="eager" fetchpriority="high"' : ' loading="lazy"';
    var img;
    if (/\.(jpe?g|png|webp)$/i.test(p)) {
      img = '<img class="img" src="./assets/food/' + esc(p) + '" alt="' + alt + '" width="960" height="720"' + load + ' decoding="async">';
    } else {
      var base = './assets/food/' + esc(p);
      img = '<picture><source type="image/webp" srcset="' + base + '-480.webp 480w, ' + base + '-960.webp 960w" sizes="' + sizes + '">' +
        '<img class="img" src="' + base + '.jpg" alt="' + alt + '" width="960" height="720"' + load + ' decoding="async"></picture>';
    }
    return '<div class="ph ph--loading">' + img + '</div>';
  }

  function tagsHTML(it) {
    var tags = (it.tags || []).filter(function (x) { return TAGS.indexOf(x) !== -1; });
    if (!tags.length) return '';
    return '<div class="tags">' + tags.map(function (x) {
      return '<span class="tag tag--' + x + '">' + esc(t('tag_' + x)) + '</span>';
    }).join('') + '</div>';
  }

  function ctrlInner(key, off, label) {
    var q = state.bill.lines[key] || 0;
    if (!q) {
      return '<button type="button" class="add" data-action="add" data-key="' + key + '" aria-label="' + esc(t('add_named', { name: label })) + '"' + (off ? ' disabled' : '') + '>' + icon('plus') + '</button>';
    }
    return '<span class="stepper" role="group" aria-label="' + esc(label) + '">' +
      '<button type="button" class="stepper__btn" data-action="dec" data-key="' + key + '" aria-label="' + esc(t('dec')) + '">' + icon('minus') + '</button>' +
      '<span class="stepper__val">' + q + '</span>' +
      '<button type="button" class="stepper__btn" data-action="inc" data-key="' + key + '" aria-label="' + esc(t('inc')) + '"' + (q >= MAX_QTY || off ? ' disabled' : '') + '>' + icon('plus') + '</button>' +
      '</span>';
  }
  function ctrlHTML(key, off, label) {
    return '<span class="ctrl" data-key="' + key + '" data-label="' + esc(label) + '"' + (off ? ' data-off="1"' : '') + '>' + ctrlInner(key, off, label) + '</span>';
  }

  function priceHTML(it) {
    if (typeof it.price !== 'number') return '';
    var vol = it.volume ? '<span class="price__vol">' + esc(fmtVol(it.volume)) + '</span>' : '';
    return '<span class="price">' + vol + fmtPrice(it.price) + '</span>';
  }

  function variantsHTML(it, off, name) {
    return '<ul class="variants">' + it.variants.map(function (v, i) {
      return '<li class="variant"><span class="variant__label">' + esc(fmtVol(v.label)) + '</span>' +
        '<span class="price">' + fmtPrice(v.price) + '</span>' +
        ctrlHTML(it.id + '|' + i, off, name + ' ' + fmtVol(v.label)) + '</li>';
    }).join('') + '</ul>';
  }

  function itemHTML(it, layout, words, eager) {
    var off = it.available === false;
    var name = L(it.name);
    var desc = L(it.description);
    var hasVariants = Array.isArray(it.variants) && it.variants.length > 0;
    var link = '<h3 class="card__name"><button type="button" class="card__link" data-action="open" data-id="' + esc(it.id) + '">' + hl(name, words) + '</button></h3>';
    var descH = desc ? '<p class="card__desc">' + hl(desc, words) + '</p>' : '';
    var offH = off ? '<span class="card__off">' + esc(t('unavailable')) + '</span>' : '';
    var single = hasVariants ? '' : ctrlHTML(it.id, off || typeof it.price !== 'number', name);

    if (layout === 'compact') {
      return '<li class="row' + (off ? ' is-off' : '') + '">' +
        '<div class="row__main">' + tagsHTML(it) + link + descH + offH + '</div>' +
        (hasVariants ? variantsHTML(it, off, name) : '<div class="row__side">' + priceHTML(it) + single + '</div>') +
        '</li>';
    }
    return '<li class="card' + (off ? ' is-off' : '') + '">' +
      '<div class="card__media">' + mediaHTML(it, eager, '(min-width: 1100px) 128px, (min-width: 600px) 150px, 116px') + '</div>' +
      '<div class="card__body">' + tagsHTML(it) + link + descH +
      (hasVariants
        ? offH + variantsHTML(it, off, name)
        : '<div class="card__foot"><div>' + priceHTML(it) + (offH ? '<br>' + offH : '') + '</div>' + single + '</div>') +
      '</div></li>';
  }

  var sectionEls = [];
  var activeCat = null;

  function renderMenu() {
    var groupCats = cats.filter(function (c) { return c.group === state.group; });
    var eagerLeft = true;
    el.menuList.innerHTML = groupCats.map(function (c) {
      var layout = layoutFor(c);
      var items = itemsByCat[c.id];
      return '<section class="section" id="cat-' + c.id + '" data-cat="' + c.id + '" aria-labelledby="h-' + c.id + '">' +
        '<h2 class="section__title" id="h-' + c.id + '">' + esc(L(c.name)) + '</h2>' +
        '<ul class="list' + (layout === 'compact' ? ' list--compact' : '') + '">' +
        items.map(function (it) {
          var eager = false;
          if (eagerLeft && layout === 'photo' && it.photo) { eager = true; eagerLeft = false; }
          return itemHTML(it, layout, null, eager);
        }).join('') +
        '</ul></section>';
    }).join('');
    sectionEls = $$('.section', el.menuList);

    el.chips.innerHTML = groupCats.map(function (c) {
      return '<a class="chip" href="#cat-' + c.id + '" data-cat="' + c.id + '">' + esc(L(c.name)) + '</a>';
    }).join('');
    $$('.segment__btn').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-group') === state.group)); });

    var keep = activeCat && catById[activeCat] && catById[activeCat].group === state.group ? activeCat : (groupCats[0] && groupCats[0].id);
    activeCat = null;
    if (keep) setActiveChip(keep, false);
    markLoadedImages(el.menuList);
    initScrollSpy();
  }

  function setGroup(g, scroll) {
    if (g === state.group || (g !== 'kitchen' && g !== 'bar')) return;
    state.group = g;
    save();
    activeCat = null;
    renderMenu();
    if (scroll !== false) {
      var y = menuStartY();
      if (window.pageYOffset > y) jumpTo(y);
    }
  }

  function setActiveChip(id, smooth) {
    if (!id || id === activeCat) return;
    activeCat = id;
    var chip = null;
    $$('.chip', el.chips).forEach(function (c) {
      var on = c.getAttribute('data-cat') === id;
      if (on) { c.setAttribute('aria-current', 'true'); chip = c; } else c.removeAttribute('aria-current');
    });
    if (!chip) return;
    var left = chip.offsetLeft - (el.chips.clientWidth - chip.offsetWidth) / 2;
    try {
      el.chips.scrollTo({ left: Math.max(0, left), behavior: smooth === false || reduceMotion.matches ? 'auto' : 'smooth' });
    } catch (e) {
      el.chips.scrollLeft = Math.max(0, left);
    }
  }

  function scrollToCat(id) {
    var sec = doc.getElementById('cat-' + id);
    if (!sec) return;
    setActiveChip(id);
    spyLocked = true;
    clearTimeout(spyUnlockTimer);
    spyUnlockTimer = setTimeout(releaseSpy, 1200);
    scrollToY(sec.getBoundingClientRect().top + window.pageYOffset - stickyH() + 2);
  }

  /* ---------- Scroll-spy через IntersectionObserver ---------- */
  var spyObserver = null;
  var visibleSections = [];
  var spyLocked = false;
  var spyUnlockTimer = null;

  function initScrollSpy() {
    if (spyObserver) spyObserver.disconnect();
    visibleSections = [];
    if (!('IntersectionObserver' in window) || !sectionEls.length) return;
    var top = Math.round(stickyH());
    var bottom = Math.max(0, Math.round(window.innerHeight - top - 60));
    spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var i = visibleSections.indexOf(e.target);
        if (e.isIntersecting && i === -1) visibleSections.push(e.target);
        if (!e.isIntersecting && i !== -1) visibleSections.splice(i, 1);
      });
      updateSpy();
    }, { rootMargin: '-' + top + 'px 0px -' + bottom + 'px 0px', threshold: 0 });
    sectionEls.forEach(function (s) { spyObserver.observe(s); });
  }

  function releaseSpy() {
    spyLocked = false;
    updateSpy();
  }

  function updateSpy() {
    if (spyLocked || state.query || !sectionEls.length) return;
    var active = null;
    var atBottom = window.innerHeight + window.pageYOffset >= root.scrollHeight - 4;
    if (atBottom && window.pageYOffset > 0) {
      active = sectionEls[sectionEls.length - 1];
    } else {
      for (var i = 0; i < sectionEls.length; i++) {
        if (visibleSections.indexOf(sectionEls[i]) !== -1) { active = sectionEls[i]; break; }
      }
    }
    if (!active && window.pageYOffset < menuStartY() + 10) active = sectionEls[0];
    if (active) setActiveChip(active.getAttribute('data-cat'));
  }

  /* ======================================================================
     Поиск
     ====================================================================== */
  function openSearch() {
    if (state.searchOpen) { el.searchInput.focus(); return; }
    state.searchOpen = true;
    el.navRow.hidden = true;
    el.searchRow.hidden = false;
    el.menuNav.classList.add('is-searching');
    el.searchOpen.setAttribute('aria-expanded', 'true');
    el.searchInput.focus();
    var y = menuStartY();
    if (Math.abs(window.pageYOffset - y) > 1 && window.pageYOffset < y) jumpTo(y);
  }

  function closeSearch() {
    state.searchOpen = false;
    state.query = '';
    el.searchInput.value = '';
    el.searchClear.hidden = true;
    el.searchRow.hidden = true;
    el.navRow.hidden = false;
    el.menuNav.classList.remove('is-searching');
    el.searchOpen.setAttribute('aria-expanded', 'false');
    renderSearch(false);
    el.searchOpen.focus();
    initScrollSpy();
  }

  function queryWords() {
    return norm(state.query).trim().split(/\s+/).filter(Boolean);
  }

  function renderSearch(scroll) {
    var words = queryWords();
    if (!words.length) {
      el.results.hidden = true;
      el.results.innerHTML = '';
      el.menuList.hidden = false;
      $('#menuAllergy').hidden = false;
      activeCat = null;
      updateSpy();
      return;
    }
    var found = MENU.items.filter(function (it) {
      return catById[it.category] && words.every(function (w) { return it._s.indexOf(w) !== -1; });
    });
    var html;
    if (!found.length) {
      html = '<div class="empty">' + icon('search') +
        '<h2>' + esc(t('nothing_found')) + '</h2>' +
        '<p>' + esc(t('nothing_found_hint')) + '</p>' +
        '<button type="button" class="btn btn--ghost" data-action="reset-search">' + esc(t('reset_search')) + '</button></div>';
    } else {
      html = '<p class="results__count">' + esc(t('found', { n: found.length })) + '</p>';
      cats.forEach(function (c) {
        var list = found.filter(function (it) { return it.category === c.id; });
        if (!list.length) return;
        var layout = layoutFor(c);
        html += '<h2 class="results__cat">' + esc(L(c.name)) + '<small>' + esc(t(c.group)) + '</small></h2>' +
          '<ul class="list' + (layout === 'compact' ? ' list--compact' : '') + '">' +
          list.map(function (it) { return itemHTML(it, layout, words, false); }).join('') + '</ul>';
      });
    }
    el.results.innerHTML = html;
    el.results.hidden = false;
    el.menuList.hidden = true;
    $('#menuAllergy').hidden = true;
    markLoadedImages(el.results);
    if (scroll !== false) {
      var y = menuStartY();
      if (window.pageYOffset > y) jumpTo(y);
    }
  }

  var onSearchInput = debounce(function () {
    state.query = el.searchInput.value;
    renderSearch(true);
  }, 150);

  /* ======================================================================
     Счёт
     ====================================================================== */
  function lineInfo(key) {
    var parts = String(key).split('|');
    var it = itemById[parts[0]];
    if (!it) return null;
    if (parts.length > 1) {
      var v = Array.isArray(it.variants) ? it.variants[Number(parts[1])] : null;
      if (!v || typeof v.price !== 'number') return null;
      return { it: it, price: Math.round(v.price), label: v.label };
    }
    if (typeof it.price !== 'number') return null;
    return { it: it, price: Math.round(it.price), label: it.volume };
  }

  /* Арифметика только в целых тенге */
  function totals() {
    var sum = 0, count = 0;
    Object.keys(state.bill.lines).forEach(function (k) {
      var info = lineInfo(k);
      if (!info) return;
      var q = state.bill.lines[k];
      sum += info.price * q;
      count += q;
    });
    var pct = servicePct();
    var service = Math.round(sum * pct / 100);
    return { sum: sum, count: count, pct: pct, service: service, total: sum + service };
  }

  function setQty(key, q, animate) {
    if (!lineInfo(key)) return;
    q = Math.max(0, Math.min(MAX_QTY, Math.floor(q) || 0));
    if (q) state.bill.lines[key] = q; else delete state.bill.lines[key];
    save();
    updateCtrls(key, animate);
    renderBillBar(animate);
    if (isOpen('bill')) renderBill();
    if (isOpen('dish')) renderDishInBill();
  }

  function updateCtrls(key, animate) {
    var active = doc.activeElement;
    var activeCtrl = active && active.closest ? active.closest('.ctrl') : null;
    var focusAction = activeCtrl && activeCtrl.getAttribute('data-key') === key ? active.getAttribute('data-action') : null;
    $$('.ctrl[data-key="' + key + '"]').forEach(function (c) {
      var wasActive = c === activeCtrl;
      c.innerHTML = ctrlInner(key, c.getAttribute('data-off') === '1', c.getAttribute('data-label'));
      if (animate) {
        var s = $('.stepper', c);
        if (s) s.classList.add('pop');
      }
      if (wasActive && focusAction) {
        var target = $('[data-action="' + focusAction + '"]:not([disabled])', c) ||
          $('[data-action="inc"]:not([disabled])', c) || $('[data-action="add"]', c) || $('[data-action="dec"]', c);
        if (target) target.focus();
      }
    });
  }
  function updateAllCtrls() {
    $$('.ctrl[data-key]').forEach(function (c) {
      c.innerHTML = ctrlInner(c.getAttribute('data-key'), c.getAttribute('data-off') === '1', c.getAttribute('data-label'));
    });
  }

  function renderBillBar(animate) {
    var tt = totals();
    var has = tt.count > 0;
    el.billBar.hidden = !has;
    doc.body.classList.toggle('has-bill', has);
    if (!has) return;
    $('#billBarCount').textContent = '· ' + t('bill_items', { n: tt.count });
    $('#billBarSum').textContent = fmtPrice(tt.sum);
    if (animate && !reduceMotion.matches) {
      el.billBar.classList.remove('pulse');
      void el.billBar.offsetWidth;
      el.billBar.classList.add('pulse');
    }
  }

  function renderBill() {
    var b = state.bill;
    var keys = Object.keys(b.lines).filter(lineInfo);
    var active = doc.activeElement;
    var focusSel = active && active.closest && active.closest('#billLines, #billSplit') && active.getAttribute('data-action')
      ? '[data-action="' + active.getAttribute('data-action') + '"]' + (active.getAttribute('data-key') ? '[data-key="' + active.getAttribute('data-key') + '"]' : '')
      : null;

    if (el.billTable.value !== b.table) el.billTable.value = b.table;
    var ws = waiters();
    var waiterBtn = $('#waiterBtn');
    waiterBtn.hidden = !ws.length;
    $('#waiterValue').textContent = b.waiter || t('no_waiter');

    $('#billLines').innerHTML = keys.map(function (k) {
      var info = lineInfo(k);
      var q = b.lines[k];
      var name = L(info.it.name);
      var meta = (info.label ? fmtVol(info.label) + ' · ' : '') + fmtPrice(info.price);
      return '<li class="bill-line">' +
        '<div class="bill-line__info"><span class="bill-line__name">' + esc(name) + '</span><span class="bill-line__meta">' + esc(meta) + '</span></div>' +
        '<span class="bill-line__sum">' + fmtPrice(info.price * q) + '</span>' +
        '<span class="ctrl"><span class="stepper stepper--soft" role="group" aria-label="' + esc(t('qty') + ': ' + name) + '">' +
        '<button type="button" class="stepper__btn" data-action="bill-dec" data-key="' + k + '" aria-label="' + esc(t('dec')) + '"' + (q <= 1 ? ' disabled' : '') + '>' + icon('minus') + '</button>' +
        '<span class="stepper__val">' + q + '</span>' +
        '<button type="button" class="stepper__btn" data-action="bill-inc" data-key="' + k + '" aria-label="' + esc(t('inc')) + '"' + (q >= MAX_QTY ? ' disabled' : '') + '>' + icon('plus') + '</button>' +
        '</span></span>' +
        '<button type="button" class="icon-btn icon-btn--sm bill-line__del" data-action="bill-remove" data-key="' + k + '" aria-label="' + esc(t('remove') + ': ' + name) + '">' + icon('trash') + '</button>' +
        '</li>';
    }).join('');

    var empty = keys.length === 0;
    $('#billEmpty').hidden = !empty;
    $('#billSummary').hidden = empty;

    var tt = totals();
    var rows = '<dt>' + esc(t('subtotal')) + '</dt><dd>' + fmtPrice(tt.sum) + '</dd>';
    if (tt.pct) rows += '<dt>' + esc(t('service', { p: tt.pct })) + '</dt><dd>' + fmtPrice(tt.service) + '</dd>';
    rows += '<dt class="is-total">' + esc(t('total')) + '</dt><dd class="is-total">' + fmtPrice(tt.total) + '</dd>';
    $('#billTotals').innerHTML = rows;

    var on = b.split >= SPLIT_MIN;
    var split = '<div class="split__head"><button type="button" class="split__toggle" role="switch" aria-checked="' + on + '" data-action="split-toggle">' +
      icon('users') + '<span>' + esc(t('split')) + '</span><span class="split__switch" aria-hidden="true"></span></button></div>';
    if (on) {
      var per = Math.ceil(tt.total / b.split / 10) * 10;
      split += '<div class="split__body"><span class="split__label">' + esc(t('guests')) + '</span>' +
        '<span class="stepper stepper--soft" role="group" aria-label="' + esc(t('guests')) + '">' +
        '<button type="button" class="stepper__btn" data-action="split-dec" aria-label="' + esc(t('dec')) + '"' + (b.split <= SPLIT_MIN ? ' disabled' : '') + '>' + icon('minus') + '</button>' +
        '<span class="stepper__val">' + b.split + '</span>' +
        '<button type="button" class="stepper__btn" data-action="split-inc" aria-label="' + esc(t('inc')) + '"' + (b.split >= SPLIT_MAX ? ' disabled' : '') + '>' + icon('plus') + '</button>' +
        '</span></div>' +
        '<p class="split__result" aria-live="polite">' + esc(t('per_person')) + ': <span>' + fmtPrice(per) + '</span></p>' +
        (per * b.split !== tt.total ? '<p class="split__hint">' + esc(t('rounded')).replace(/ ₸/, '\u00A0₸') + '</p>' : '');
    }
    $('#billSplit').innerHTML = split;

    $('#billClear').disabled = empty && !b.table && !b.waiter && !on;

    if (focusSel) {
      var target = $(focusSel + ':not([disabled])', $('#sheet-bill'));
      if (target) target.focus();
      else $('#sheet-bill .sheet__panel').focus();
    }
  }

  function clearBill() {
    state.bill = { lines: {}, table: '', waiter: '', split: 0 };
    save();
    updateAllCtrls();
    renderBillBar();
    if (isOpen('bill')) renderBill();
  }

  function renderWaiters() {
    var ws = waiters();
    var list = [''].concat(ws);
    $('#waiterBody').innerHTML = list.map(function (name) {
      var sel = (state.bill.waiter || '') === name;
      return '<button type="button" class="choice" data-action="pick-waiter" data-name="' + esc(name) + '" aria-pressed="' + sel + '">' +
        '<span>' + esc(name || t('no_waiter')) + '</span>' + icon('check') + '</button>';
    }).join('');
  }

  /* ======================================================================
     Карточка блюда (bottom-sheet)
     ====================================================================== */
  var dish = null; // { id, v, q }

  function openDish(id, opener) {
    if (!itemById[id]) return;
    dish = { id: id, v: 0, q: 1 };
    renderDish();
    openSheet('dish', opener);
  }

  function dishKey() {
    var it = itemById[dish.id];
    return Array.isArray(it.variants) && it.variants.length ? it.id + '|' + dish.v : it.id;
  }

  function renderDish() {
    var it = itemById[dish.id];
    var c = catById[it.category];
    var off = it.available === false;
    var desc = L(it.description);
    var hasVariants = Array.isArray(it.variants) && it.variants.length > 0;
    $('#dishTitle').textContent = L(it.name);

    var html = '';
    var shots = it.photo ? [it.photo].concat(it.gallery || []) : [];
    var sizes = '(min-width: 600px) 560px, 100vw';
    if (shots.length > 1) {
      var name = L(it.name);
      html += '<div class="dish__media dish__gallery">' +
        '<div class="gallery" tabindex="0" role="group" aria-label="' + esc(t('photos')) + '">' +
        shots.map(function (p, i) {
          var label = t('photo_n', { n: i + 1, total: shots.length });
          return '<div class="gallery__slide" role="group" aria-label="' + esc(label) + '">' +
            photoHTML(p, i ? name + ' — ' + label : name, i === 0, sizes) + '</div>';
        }).join('') +
        '</div><div class="gallery__dots">' +
        shots.map(function (p, i) {
          return '<button type="button" class="gallery__dot" data-action="gallery-go" data-i="' + i + '" aria-label="' +
            esc(t('photo_n', { n: i + 1, total: shots.length })) + '" aria-current="' + (i === 0) + '"></button>';
        }).join('') +
        '</div></div>';
    } else if (it.photo) {
      html += '<div class="dish__media">' + mediaHTML(it, true, sizes) + '</div>';
    }
    html += '<p class="dish__cat">' + esc(L(c.name)) + '</p>' + tagsHTML(it);
    if (desc) html += '<p class="dish__desc">' + esc(desc) + '</p>';

    var facts = '';
    if (it.weight) facts += '<dt>' + esc(t('weight')) + '</dt><dd>' + esc(it.weight) + '</dd>';
    if (!hasVariants && it.volume) facts += '<dt>' + esc(t('volume')) + '</dt><dd>' + esc(fmtVol(it.volume)) + '</dd>';
    var nu = it.nutrition;
    if (nu && typeof nu === 'object') {
      var parts = [];
      if (nu.kcal != null) parts.push(nu.kcal + ' ' + t('kcal'));
      if (nu.protein != null) parts.push(t('protein') + ' ' + nu.protein);
      if (nu.fat != null) parts.push(t('fat') + ' ' + nu.fat);
      if (nu.carbs != null) parts.push(t('carbs') + ' ' + nu.carbs);
      if (parts.length) facts += '<dt>' + esc(t('nutrition')) + '</dt><dd>' + esc(parts.join(' · ')) + '</dd>';
    }
    var allergens = (it.allergens || []).map(L).filter(Boolean);
    if (allergens.length) facts += '<dt>' + esc(t('allergens')) + '</dt><dd>' + esc(allergens.join(', ')) + '</dd>';
    if (facts) html += '<dl class="dish__facts">' + facts + '</dl>';
    if (off) html += '<p class="dish__off">' + esc(t('unavailable')) + '</p>';

    if (hasVariants) {
      html += '<div class="dish__variants" role="group" aria-label="' + esc(t('volume')) + '">' + it.variants.map(function (v, i) {
        return '<button type="button" class="dish__variant" data-action="dish-variant" data-v="' + i + '" aria-pressed="' + (i === dish.v) + '">' +
          '<span class="dish__variant-label">' + esc(fmtVol(v.label)) + '</span><span class="price">' + fmtPrice(v.price) + '</span></button>';
      }).join('') + '</div>';
    } else if (typeof it.price === 'number') {
      html += '<p class="price dish__price">' + fmtPrice(it.price) + '</p>';
    }
    $('#dishBody').innerHTML = html;
    markLoadedImages($('#dishBody'));
    var strip = $('#dishBody .gallery');
    if (strip) strip.addEventListener('scroll', syncGalleryDots, { passive: true });
    renderDishFoot();
  }

  function syncGalleryDots() {
    var strip = $('#dishBody .gallery');
    if (!strip || !strip.clientWidth) return;
    var i = Math.round(strip.scrollLeft / strip.clientWidth);
    $$('.gallery__dot', $('#dishBody')).forEach(function (d, k) { d.setAttribute('aria-current', String(k === i)); });
  }

  function renderDishFoot() {
    var it = itemById[dish.id];
    var info = lineInfo(dishKey());
    var off = it.available === false || !info;
    var foot;
    if (off) {
      foot = '<div class="dish__buy"><button type="button" class="btn btn--primary btn--block" disabled>' + esc(t('unavailable')) + '</button></div>';
    } else {
      foot = '<div class="dish__buy">' +
        '<span class="stepper stepper--soft stepper--lg" role="group" aria-label="' + esc(t('qty')) + '">' +
        '<button type="button" class="stepper__btn" data-action="dish-dec" aria-label="' + esc(t('dec')) + '"' + (dish.q <= 1 ? ' disabled' : '') + '>' + icon('minus') + '</button>' +
        '<span class="stepper__val" aria-live="polite">' + dish.q + '</span>' +
        '<button type="button" class="stepper__btn" data-action="dish-inc" aria-label="' + esc(t('inc')) + '"' + (dish.q >= MAX_QTY ? ' disabled' : '') + '>' + icon('plus') + '</button>' +
        '</span>' +
        '<button type="button" class="btn btn--primary" data-action="dish-add">' + esc(t('add_to_bill', { price: fmtPrice(info.price * dish.q) })) + '</button>' +
        '</div>';
    }
    var active = doc.activeElement;
    var focusAction = active && active.closest && active.closest('#dishFoot') ? active.getAttribute('data-action') : null;
    $('#dishFoot').innerHTML = foot + '<p class="dish__inbill" id="dishInBill"></p>';
    renderDishInBill();
    if (focusAction) {
      var target = $('#dishFoot [data-action="' + focusAction + '"]:not([disabled])') || $('#dishFoot [data-action="dish-add"]');
      if (target) target.focus();
    }
  }

  function renderDishInBill() {
    var n = $('#dishInBill');
    if (!n || !dish) return;
    var q = state.bill.lines[dishKey()] || 0;
    n.textContent = q ? t('in_bill', { n: q }) : '';
  }

  /* ======================================================================
     Разделы и информация
     ====================================================================== */
  function renderSections() {
    $('#sectionsBody').innerHTML = ['kitchen', 'bar'].map(function (g) {
      var list = cats.filter(function (c) { return c.group === g; });
      return '<h3 class="sections__group">' + esc(t(g)) + '</h3><ul class="sections__list">' + list.map(function (c) {
        var cur = !state.query && c.id === activeCat && c.group === state.group;
        return '<li><button type="button" class="sections__btn" data-action="goto" data-cat="' + c.id + '"' + (cur ? ' aria-current="true"' : '') + '>' +
          '<span>' + esc(L(c.name)) + '</span><span class="sections__count">' + itemsByCat[c.id].length + '</span>' + icon('chevron') + '</button></li>';
      }).join('') + '</ul>';
    }).join('');
  }

  function renderInfo() {
    var items = [];
    function add(ic, label, valueHTML) { items.push('<li class="info__item">' + icon(ic) + '<div><span class="info__label">' + esc(label) + '</span><span class="info__value">' + valueHTML + '</span></div></li>'); }
    if (CFG.workHours) add('clock', t('hours'), esc(t('daily', { h: CFG.workHours })));
    if (CFG.breakfastHours) add('cup', t('breakfast'), esc(CFG.breakfastHours));
    if (CFG.checkIn) add('key', t('checkin'), esc(CFG.checkIn));
    if (CFG.checkOut) add('key', t('checkout'), esc(CFG.checkOut));
    var wifi = CFG.wifi || {};
    if (wifi.name) add('wifi', t('wifi') + ' · ' + t('wifi_name'), esc(wifi.name));
    if (wifi.password) add('wifi', t('wifi') + ' · ' + t('wifi_pass'), esc(wifi.password));
    var pct = servicePct();
    if (pct) add('receipt', t('bill'), esc(t('service_note', { p: pct })));
    (CFG.phones || []).forEach(function (p) {
      add('phone', t('phone'), '<a href="tel:' + esc(String(p).replace(/[^\d+]/g, '')) + '">' + esc(p) + '</a>');
    });
    if (CFG.instagram) add('insta', t('instagram'), '<a href="' + esc(CFG.instagram) + '" target="_blank" rel="noopener">' + esc(CFG.instagramHandle || CFG.instagram) + '</a>');
    var map = mapUrl();
    if (CFG.address || map) {
      var addr = [CFG.city, CFG.address].filter(Boolean).join(', ');
      add('pin', t('address'), (addr ? esc(addr) + (map ? '<br>' : '') : '') + (map ? '<a href="' + esc(map) + '" target="_blank" rel="noopener">' + esc(t('map')) + '</a>' : ''));
    }

    var html = items.length ? '<ul class="info__list">' + items.join('') + '</ul>' : '';
    var rules = CFG.rules ? (CFG.rules[state.lang] && CFG.rules[state.lang].items && CFG.rules[state.lang].items.length ? CFG.rules[state.lang] : CFG.rules.ru) : null;
    if (rules && (rules.title || (rules.items && rules.items.length) || rules.note)) {
      html += '<div class="info__rules">' +
        (rules.title ? '<h3>' + esc(rules.title) + '</h3>' : '') +
        (rules.items && rules.items.length ? '<ul>' + rules.items.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul>' : '') +
        (rules.note ? '<p>' + esc(rules.note) + '</p>' : '') + '</div>';
    }
    var allergy = L(CFG.allergyNote);
    if (allergy) html += '<p class="info__allergy">' + esc(allergy) + '</p>';
    $('#infoBody').innerHTML = html;
  }

  var sheetRenderers = {
    dish: function () { if (dish) renderDish(); },
    bill: renderBill,
    sections: renderSections,
    info: renderInfo,
    waiter: renderWaiters
  };
  function rerenderOpenSheets() {
    Object.keys(sheetRenderers).forEach(function (name) { if (isOpen(name)) sheetRenderers[name](); });
  }

  /* ======================================================================
     Bottom-sheet: открытие/закрытие, блокировка фона, «Назад», свайп, фокус
     ====================================================================== */
  var stack = [];
  var lockY = 0;

  function isOpen(name) {
    var s = doc.getElementById('sheet-' + name);
    return !!s && stack.indexOf(s) !== -1;
  }

  /* iOS: position: fixed на body + восстановление scrollY. Липкие шапки компенсируем сдвигом,
     чтобы под затемнением ничего не «прыгало». */
  function lockScroll() {
    lockY = window.pageYOffset;
    var stickies = [el.topbar, el.menuNav];
    var before = stickies.map(function (s) { return s.getBoundingClientRect().top; });
    var sbw = window.innerWidth - root.clientWidth;
    doc.body.style.top = -lockY + 'px';
    if (sbw > 0) doc.body.style.paddingRight = sbw + 'px';
    doc.body.classList.add('is-locked');
    stickies.forEach(function (s, i) {
      var d = before[i] - s.getBoundingClientRect().top;
      if (Math.abs(d) > 0.5) s.style.transform = 'translateY(' + d + 'px)';
    });
  }
  function unlockScroll() {
    doc.body.classList.remove('is-locked');
    doc.body.style.top = '';
    doc.body.style.paddingRight = '';
    el.topbar.style.transform = '';
    el.menuNav.style.transform = '';
    jumpTo(lockY);
  }

  function openSheet(name, opener, focusEl) {
    var s = doc.getElementById('sheet-' + name);
    if (!s || stack.indexOf(s) !== -1) return;
    closeLang(false);
    s._opener = opener || doc.activeElement;
    s._after = null;
    if (!stack.length) lockScroll();
    stack.push(s);
    clearTimeout(s._hideTimer);
    s.hidden = false;
    void s.offsetWidth;
    s.classList.add('is-open');
    var body = $('.sheet__body', s);
    if (body) body.scrollTop = 0;
    var panel = $('.sheet__panel', s);
    var f = focusEl || panel;
    try { f.focus({ preventScroll: true }); } catch (e) { f.focus(); }
    s._pushed = false;
    try {
      history.pushState({ paSheet: s.id }, '');
      s._pushed = true;
    } catch (e) { /* без истории — закрытие только кнопками */ }
  }

  function closeTop(cb) {
    var s = stack[stack.length - 1];
    if (!s) { if (cb) cb(); return; }
    s._after = cb || null;
    if (s._pushed && history.state && history.state.paSheet === s.id) {
      history.back();
      /* Страховка: если popstate не пришёл (редкие webview) — закрываем сами */
      clearTimeout(s._backTimer);
      s._backTimer = setTimeout(function () {
        if (stack[stack.length - 1] === s) { s._pushed = false; doCloseTop(); }
      }, 600);
    } else {
      doCloseTop();
    }
  }

  function doCloseTop() {
    var s = stack.pop();
    if (!s) return;
    clearTimeout(s._backTimer);
    s.classList.remove('is-open');
    $('.sheet__panel', s).style.transform = '';
    s._hideTimer = setTimeout(function () { if (!s.classList.contains('is-open')) s.hidden = true; }, 260);
    if (!stack.length) unlockScroll();
    var op = s._opener;
    s._opener = null;
    if (op && doc.body.contains(op) && typeof op.focus === 'function') {
      try { op.focus({ preventScroll: true }); } catch (e) { op.focus(); }
    }
    var cb = s._after;
    s._after = null;
    if (cb) cb();
  }

  window.addEventListener('popstate', function () {
    if (stack.length) doCloseTop();
  });

  function initSwipe(s) {
    var panel = $('.sheet__panel', s);
    var body = $('.sheet__body', s);
    var y0 = null, dy = 0, dragging = false;
    panel.addEventListener('touchstart', function (e) {
      if (e.touches.length !== 1) { y0 = null; return; }
      if (body && body.contains(e.target) && body.scrollTop > 0) { y0 = null; return; }
      if (e.target.closest && e.target.closest('input')) { y0 = null; return; }
      y0 = e.touches[0].clientY;
      dy = 0;
      dragging = false;
    }, { passive: true });
    panel.addEventListener('touchmove', function (e) {
      if (y0 === null) return;
      dy = e.touches[0].clientY - y0;
      if (!dragging) {
        if (dy > 10) { dragging = true; panel.classList.add('is-dragging'); }
        else if (dy < -6) { y0 = null; return; }
      }
      if (dragging) panel.style.transform = 'translateY(' + Math.max(0, dy) + 'px)';
    }, { passive: true });
    function end() {
      if (y0 === null) return;
      y0 = null;
      if (!dragging) return;
      dragging = false;
      panel.classList.remove('is-dragging');
      panel.style.transform = '';
      if (dy > 90) closeTop();
    }
    panel.addEventListener('touchend', end);
    panel.addEventListener('touchcancel', end);
  }

  function focusables(container) {
    return $$('button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])', container)
      .filter(function (n) { return n.offsetWidth > 0 || n.offsetHeight > 0; });
  }

  /* ======================================================================
     Фото: плавное появление и заглушка при ошибке
     ====================================================================== */
  function onImgLoad(img) {
    img.classList.add('is-loaded');
    var ph = img.closest('.ph');
    if (ph) ph.classList.add('is-done');
  }
  function markLoadedImages(ctx) {
    $$('img.img', ctx).forEach(function (img) {
      if (img.complete && img.naturalWidth) onImgLoad(img);
    });
  }
  doc.addEventListener('load', function (e) {
    var tg = e.target;
    if (tg && tg.tagName === 'IMG' && tg.classList.contains('img')) onImgLoad(tg);
  }, true);
  doc.addEventListener('error', function (e) {
    var tg = e.target;
    if (!tg || tg.tagName !== 'IMG' || !tg.classList.contains('img')) return;
    var ph = tg.closest('.ph');
    var node = tg.closest('picture') || tg;
    if (node.parentNode) node.parentNode.removeChild(node);
    if (ph) ph.classList.add('is-done');
  }, true);

  /* ======================================================================
     События
     ====================================================================== */
  function onClick(e) {
    var tg = e.target;
    if (!tg || !tg.closest) return;

    if (!el.langMenu.hidden && !tg.closest('#lang')) closeLang(false);

    var closeBtn = tg.closest('[data-close]');
    if (closeBtn) { closeTop(); return; }

    var chip = tg.closest('.chip');
    if (chip) { e.preventDefault(); scrollToCat(chip.getAttribute('data-cat')); return; }

    var link = tg.closest('a[href="#menu"], a[href="#top"]');
    if (link && !link.classList.contains('skip-link')) {
      e.preventDefault();
      scrollToY(link.getAttribute('href') === '#top' ? 0 : menuStartY());
      return;
    }

    var opener = tg.closest('[data-open]');
    if (opener) {
      var name = opener.getAttribute('data-open');
      if (sheetRenderers[name]) sheetRenderers[name]();
      openSheet(name, opener);
      return;
    }

    var seg = tg.closest('.segment__btn');
    if (seg) { setGroup(seg.getAttribute('data-group')); return; }

    var langOpt = tg.closest('.lang__opt');
    if (langOpt) { closeLang(true); setLang(langOpt.getAttribute('data-lang')); return; }

    var a = tg.closest('[data-action]');
    if (!a || a.disabled) return;
    var key = a.getAttribute('data-key');
    var q = key ? (state.bill.lines[key] || 0) : 0;

    switch (a.getAttribute('data-action')) {
      case 'open': openDish(a.getAttribute('data-id'), a); break;
      case 'add': setQty(key, 1, true); break;
      case 'inc': setQty(key, q + 1, true); break;
      case 'dec': setQty(key, q - 1); break;
      case 'bill-inc': setQty(key, q + 1); break;
      case 'bill-dec': if (q > 1) setQty(key, q - 1); break;
      case 'bill-remove': setQty(key, 0); break;
      case 'split-toggle':
        state.bill.split = state.bill.split >= SPLIT_MIN ? 0 : SPLIT_MIN;
        save(); renderBill();
        break;
      case 'split-inc':
        state.bill.split = Math.min(SPLIT_MAX, state.bill.split + 1);
        save(); renderBill();
        break;
      case 'split-dec':
        state.bill.split = Math.max(SPLIT_MIN, state.bill.split - 1);
        save(); renderBill();
        break;
      case 'pick-waiter':
        state.bill.waiter = a.getAttribute('data-name') || '';
        save();
        closeTop(function () { if (isOpen('bill')) renderBill(); });
        break;
      case 'goto': {
        var catId = a.getAttribute('data-cat');
        closeTop(function () {
          if (state.searchOpen) closeSearch();
          var c = catById[catId];
          if (c && c.group !== state.group) setGroup(c.group, false);
          scrollToCat(catId);
        });
        break;
      }
      case 'reset-search':
        el.searchInput.value = '';
        state.query = '';
        el.searchClear.hidden = true;
        renderSearch(false);
        el.searchInput.focus();
        break;
      case 'dish-variant':
        dish.v = Number(a.getAttribute('data-v')) || 0;
        $$('.dish__variant', $('#dishBody')).forEach(function (b) {
          b.setAttribute('aria-pressed', String(Number(b.getAttribute('data-v')) === dish.v));
        });
        renderDishFoot();
        break;
      case 'gallery-go': {
        var strip = $('#dishBody .gallery');
        if (strip) strip.scrollTo({ left: strip.clientWidth * (Number(a.getAttribute('data-i')) || 0), behavior: reduceMotion.matches ? 'auto' : 'smooth' });
        break;
      }
      case 'dish-inc': dish.q = Math.min(MAX_QTY, dish.q + 1); renderDishFoot(); break;
      case 'dish-dec': dish.q = Math.max(1, dish.q - 1); renderDishFoot(); break;
      case 'dish-add': {
        var k = dishKey();
        var add = dish.q;
        closeTop(function () { setQty(k, (state.bill.lines[k] || 0) + add, true); });
        break;
      }
    }
  }

  function bindEvents() {
    doc.addEventListener('click', onClick);

    el.langToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (el.langMenu.hidden) openLang(); else closeLang(true);
    });
    el.themeBtn.addEventListener('click', function () {
      setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    });
    el.searchOpen.addEventListener('click', openSearch);
    $('#searchCancel').addEventListener('click', closeSearch);
    el.searchInput.addEventListener('input', function () {
      el.searchClear.hidden = !el.searchInput.value;
      onSearchInput();
    });
    el.searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') el.searchInput.blur();
    });
    el.searchClear.addEventListener('click', function () {
      el.searchInput.value = '';
      el.searchClear.hidden = true;
      state.query = '';
      renderSearch(false);
      el.searchInput.focus();
    });

    el.billTable.addEventListener('input', function () {
      var v = el.billTable.value.replace(/\D/g, '').slice(0, 4);
      if (v !== el.billTable.value) el.billTable.value = v;
      state.bill.table = v;
      save();
      $('#billClear').disabled = false;
    });
    $('#billClear').addEventListener('click', function (e) {
      openSheet('confirm', e.currentTarget, $('#sheet-confirm [data-close].btn'));
    });
    $('#confirmYes').addEventListener('click', function () {
      clearBill();
      closeTop();
    });

    el.toTop.addEventListener('click', function () { scrollToY(0); });

    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' || e.key === 'Esc') {
        if (!el.langMenu.hidden) { closeLang(true); return; }
        if (stack.length) { e.preventDefault(); closeTop(); return; }
        if (state.searchOpen && doc.activeElement === el.searchInput) closeSearch();
        return;
      }
      if (e.key === 'Tab' && stack.length) {
        var panel = $('.sheet__panel', stack[stack.length - 1]);
        var f = focusables(panel);
        if (!f.length) { e.preventDefault(); panel.focus(); return; }
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && (doc.activeElement === first || doc.activeElement === panel)) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && doc.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    /* Фокус не должен «уходить» из открытой панели */
    doc.addEventListener('focusin', function (e) {
      if (!stack.length) return;
      var top = stack[stack.length - 1];
      if (!top.contains(e.target)) {
        var panel = $('.sheet__panel', top);
        try { panel.focus({ preventScroll: true }); } catch (err) { panel.focus(); }
      }
    });

    $$('.sheet').forEach(function (s) { if (!s.classList.contains('sheet--center')) initSwipe(s); });

    /* Единственный scroll-слушатель (passive): снятие блокировки scroll-spy и конец страницы */
    var ticking = false;
    var idleTimer = null;
    window.addEventListener('scroll', function () {
      if (stack.length) return;
      if (spyLocked) {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(function () { clearTimeout(spyUnlockTimer); releaseSpy(); }, 140);
      }
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () { ticking = false; updateSpy(); });
    }, { passive: true });

    var onResize = debounce(function () {
      root.style.setProperty('--sticky-h', Math.round(stickyH()) + 'px');
      initScrollSpy();
    }, 150);
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    if ('ResizeObserver' in window) {
      new ResizeObserver(onResize).observe(el.menuNav);
    }
  }

  function initObservers() {
    if (!('IntersectionObserver' in window)) {
      el.topbar.classList.add('is-compact');
      return;
    }
    /* Компактная шапка — когда большой логотип ушёл под верхнюю панель */
    new IntersectionObserver(function (entries) {
      el.topbar.classList.toggle('is-compact', !entries[0].isIntersecting);
    }, { rootMargin: '-' + Math.round(topbarH()) + 'px 0px 0px 0px' }).observe($('.hero__logo'));

    /* Кнопка «Наверх» — после ~600 px прокрутки */
    new IntersectionObserver(function (entries) {
      var e = entries[0];
      el.toTop.hidden = e.isIntersecting || e.boundingClientRect.top > 0;
    }).observe($('#topSentinel'));
  }

  /* ---------- Загрузка сохранённого состояния ---------- */
  function loadState() {
    var lang = store.get('lang');
    if (LANGS.indexOf(lang) !== -1) state.lang = lang;
    var th = store.get('theme');
    if (th === 'light' || th === 'dark') state.theme = th;
    var g = store.get('group');
    if (g === 'kitchen' || g === 'bar') state.group = g;

    var b = store.get('bill');
    if (b && typeof b === 'object') {
      var lines = {};
      if (b.lines && typeof b.lines === 'object') {
        Object.keys(b.lines).forEach(function (k) {
          var q = Math.floor(Number(b.lines[k]));
          if (lineInfo(k) && q >= 1) lines[k] = Math.min(MAX_QTY, q);
        });
      }
      var split = Math.floor(Number(b.split)) || 0;
      state.bill = {
        lines: lines,
        table: String(b.table || '').replace(/\D/g, '').slice(0, 4),
        waiter: waiters().indexOf(b.waiter) !== -1 ? b.waiter : '',
        split: split >= SPLIT_MIN ? Math.min(SPLIT_MAX, split) : 0
      };
    }
  }

  function init() {
    /* Панели добавляют записи в историю; без этого браузер при «Назад» сам крутит страницу */
    try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; } catch (e) { /* нет поддержки */ }
    loadState();
    applyTheme();
    applyStatic();
    renderConfig();
    renderMenu();
    renderBillBar();
    bindEvents();
    initObservers();
    root.classList.add('is-ready');
    root.style.setProperty('--sticky-h', Math.round(stickyH()) + 'px');
  }

  init();
})();
