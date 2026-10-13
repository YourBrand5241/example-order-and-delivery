// Demo site polish: illustrated hero, gallery artwork, product images, map and demo label.
// Shared by all four demo sites; the look is picked from <body data-theme="...">.
(function () {
  "use strict";
  var theme = document.body.getAttribute("data-theme") || "massage";
  var uid = 0;
  function id(p) { uid += 1; return p + uid; }

  // ---------- Illustrated scenes (SVG, viewBox 800 x 500) ----------
  var SCENES = {
    massage: function () {
      var g = id("g"), s = id("s"), l = id("l");
      return '<defs>' +
        '<linearGradient id="' + g + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e6f7f4"/><stop offset="1" stop-color="#9fdcd2"/></linearGradient>' +
        '<radialGradient id="' + s + '" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#5b6b70"/><stop offset="1" stop-color="#1f2b2f"/></radialGradient>' +
        '<linearGradient id="' + l + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fb8a4"/><stop offset="1" stop-color="#3f8c78"/></linearGradient>' +
        '</defs>' +
        '<rect width="800" height="500" fill="url(#' + g + ')"/>' +
        '<circle cx="620" cy="120" r="170" fill="#ffffff" opacity=".35"/>' +
        '<circle cx="140" cy="430" r="200" fill="#0d9488" opacity=".12"/>' +
        // table surface
        '<rect x="0" y="360" width="800" height="140" fill="#cdeee8"/><rect x="0" y="356" width="800" height="8" fill="#b5e3da"/>' +
        // folded towels
        '<rect x="80" y="292" width="230" height="40" rx="18" fill="#ffffff"/><rect x="80" y="312" width="230" height="6" fill="#e3f4f1"/>' +
        '<rect x="92" y="252" width="206" height="42" rx="18" fill="#f6fbfa"/><rect x="92" y="272" width="206" height="6" fill="#d6efea"/>' +
        '<rect x="104" y="212" width="182" height="42" rx="18" fill="#ffffff"/><rect x="104" y="232" width="182" height="6" fill="#bfe6de"/>' +
        '<rect x="80" y="332" width="230" height="30" rx="14" fill="#e9f7f4"/>' +
        // stones
        '<ellipse cx="530" cy="340" rx="120" ry="34" fill="url(#' + s + ')"/>' +
        '<ellipse cx="525" cy="296" rx="96" ry="28" fill="url(#' + s + ')"/>' +
        '<ellipse cx="532" cy="258" rx="74" ry="23" fill="url(#' + s + ')"/>' +
        '<ellipse cx="528" cy="226" rx="52" ry="18" fill="url(#' + s + ')"/>' +
        '<ellipse cx="505" cy="330" rx="40" ry="6" fill="#ffffff" opacity=".18"/><ellipse cx="510" cy="250" rx="28" ry="5" fill="#ffffff" opacity=".18"/>' +
        // oil bottle
        '<rect x="660" y="250" width="70" height="112" rx="16" fill="#c8862f"/><rect x="672" y="262" width="12" height="80" rx="6" fill="#ffffff" opacity=".25"/>' +
        '<rect x="680" y="222" width="30" height="32" rx="6" fill="#2f3b3e"/><rect x="687" y="196" width="16" height="30" rx="8" fill="#2f3b3e"/>' +
        '<rect x="664" y="296" width="62" height="34" rx="6" fill="#fff7ea"/><rect x="674" y="306" width="42" height="5" rx="2" fill="#0d9488"/><rect x="674" y="316" width="30" height="4" rx="2" fill="#9fb6b2"/>' +
        // eucalyptus branch
        '<path d="M340 360 C 360 280, 400 200, 470 130" stroke="#3f7d6c" stroke-width="5" fill="none" stroke-linecap="round"/>' +
        '<g fill="url(#' + l + ')">' +
        '<ellipse cx="352" cy="318" rx="22" ry="14" transform="rotate(-30 352 318)"/><ellipse cx="380" cy="300" rx="22" ry="14" transform="rotate(20 380 300)"/>' +
        '<ellipse cx="372" cy="262" rx="20" ry="13" transform="rotate(-35 372 262)"/><ellipse cx="402" cy="246" rx="20" ry="13" transform="rotate(25 402 246)"/>' +
        '<ellipse cx="404" cy="208" rx="18" ry="12" transform="rotate(-40 404 208)"/><ellipse cx="432" cy="190" rx="18" ry="12" transform="rotate(25 432 190)"/>' +
        '<ellipse cx="444" cy="156" rx="16" ry="11" transform="rotate(-40 444 156)"/><ellipse cx="470" cy="132" rx="15" ry="10" transform="rotate(10 470 132)"/>' +
        '</g>';
    },
    order: function () {
      var g = id("g"), w = id("w"), gl = id("gl");
      var bokeh = '';
      var pts = [[90,80,40],[210,140,22],[330,60,30],[470,110,18],[600,70,36],[720,150,26],[150,230,16],[680,240,20],[400,200,14]];
      pts.forEach(function (p) { bokeh += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + p[2] + '" fill="#fbbf24" opacity=".22"/>'; });
      function bottle(x, h, body, label) {
        var top = 420 - h;
        return '<path d="M' + (x - 34) + ' 420 V' + (top + 120) + ' Q' + (x - 34) + ' ' + (top + 80) + ' ' + (x - 12) + ' ' + (top + 60) + ' V' + top + ' H' + (x + 12) + ' V' + (top + 60) + ' Q' + (x + 34) + ' ' + (top + 80) + ' ' + (x + 34) + ' ' + (top + 120) + ' V420 Z" fill="' + body + '"/>' +
          '<rect x="' + (x - 13) + '" y="' + (top - 6) + '" width="26" height="22" rx="4" fill="#c2410c"/>' +
          '<rect x="' + (x - 26) + '" y="' + (top + 150) + '" width="52" height="64" rx="6" fill="' + label + '"/>' +
          '<rect x="' + (x - 16) + '" y="' + (top + 166) + '" width="32" height="6" rx="3" fill="#7c2d12" opacity=".7"/>' +
          '<rect x="' + (x - 12) + '" y="' + (top + 180) + '" width="24" height="4" rx="2" fill="#7c2d12" opacity=".45"/>' +
          '<rect x="' + (x - 26) + '" y="' + (top + 90) + '" width="8" height="200" rx="4" fill="#ffffff" opacity=".12"/>';
      }
      return '<defs><linearGradient id="' + g + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b2414"/><stop offset="1" stop-color="#7a3b10"/></linearGradient>' +
        '<linearGradient id="' + w + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9f1239"/><stop offset="1" stop-color="#5b0a20"/></linearGradient>' +
        '<linearGradient id="' + gl + '" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffffff" stop-opacity=".35"/><stop offset="1" stop-color="#ffffff" stop-opacity=".08"/></linearGradient></defs>' +
        '<rect width="800" height="500" fill="url(#' + g + ')"/>' + bokeh +
        '<rect x="0" y="420" width="800" height="80" fill="#2a170b"/><rect x="0" y="416" width="800" height="6" fill="#b45309" opacity=".6"/>' +
        bottle(190, 300, '#1f3b2d', '#f5e6c8') + bottle(300, 330, url(w), '#fde68a') + bottle(410, 290, '#3a2a1a', '#fff7ed') +
        // wine glass
        '<path d="M560 230 H660 Q662 300 610 318 Q558 300 560 230 Z" fill="url(#' + gl + ')" stroke="#ffffff" stroke-opacity=".5" stroke-width="2"/>' +
        '<path d="M565 268 H655 Q648 306 610 314 Q572 306 565 268 Z" fill="#9f1239"/>' +
        '<rect x="606" y="316" width="8" height="84" fill="#ffffff" opacity=".45"/><ellipse cx="610" cy="404" rx="40" ry="8" fill="#ffffff" opacity=".45"/>' +
        // tumbler with ice
        '<rect x="680" y="330" width="80" height="86" rx="8" fill="url(#' + gl + ')" stroke="#ffffff" stroke-opacity=".45" stroke-width="2"/>' +
        '<rect x="684" y="360" width="72" height="52" rx="6" fill="#f59e0b" opacity=".75"/>' +
        '<rect x="694" y="350" width="24" height="24" rx="5" fill="#ffffff" opacity=".5" transform="rotate(12 706 362)"/><rect x="722" y="356" width="22" height="22" rx="5" fill="#ffffff" opacity=".45" transform="rotate(-10 733 367)"/>';
      function url(x) { return 'url(#' + x + ')'; }
    },
    dance: function () {
      var g = id("g"), b = id("b"), f = id("f");
      return '<defs><linearGradient id="' + g + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2e1065"/><stop offset="1" stop-color="#9d174d"/></linearGradient>' +
        '<linearGradient id="' + b + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff" stop-opacity=".55"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></linearGradient>' +
        '<radialGradient id="' + f + '" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fbcfe8" stop-opacity=".9"/><stop offset="1" stop-color="#fbcfe8" stop-opacity="0"/></radialGradient></defs>' +
        '<rect width="800" height="500" fill="url(#' + g + ')"/>' +
        '<polygon points="230,0 290,0 420,420 120,420" fill="url(#' + b + ')"/>' +
        '<polygon points="510,0 570,0 690,420 390,420" fill="url(#' + b + ')"/>' +
        '<rect x="0" y="400" width="800" height="100" fill="#4a0d2e"/>' +
        '<ellipse cx="270" cy="420" rx="170" ry="26" fill="url(#' + f + ')"/><ellipse cx="540" cy="420" rx="170" ry="26" fill="url(#' + f + ')"/>' +
        // curtains
        '<path d="M0 0 H120 Q90 120 110 240 Q80 340 100 500 H0 Z" fill="#be123c"/><path d="M30 0 Q60 200 40 500" stroke="#9f1239" stroke-width="10" fill="none"/><path d="M75 0 Q100 220 72 500" stroke="#9f1239" stroke-width="8" fill="none"/>' +
        '<path d="M800 0 H680 Q710 120 690 240 Q720 340 700 500 H800 Z" fill="#be123c"/><path d="M770 0 Q740 200 760 500" stroke="#9f1239" stroke-width="10" fill="none"/><path d="M725 0 Q700 220 728 500" stroke="#9f1239" stroke-width="8" fill="none"/>' +
        '<path d="M0 0 H800 V40 Q700 70 600 40 Q500 70 400 40 Q300 70 200 40 Q100 70 0 40 Z" fill="#9f1239"/>' +
        // ribbons
        '<path d="M170 330 C 260 200, 330 380, 420 250 S 580 160, 640 280" stroke="#f9a8d4" stroke-width="10" fill="none" stroke-linecap="round" opacity=".9"/>' +
        '<path d="M190 360 C 290 260, 360 420, 450 290 S 600 220, 650 320" stroke="#fde68a" stroke-width="6" fill="none" stroke-linecap="round" opacity=".8"/>' +
        // ballet shoes
        '<g transform="translate(330 360)"><path d="M0 30 Q10 0 50 4 Q78 8 80 24 Q78 40 40 42 Q6 44 0 30 Z" fill="#fbcfe8"/><path d="M14 26 Q40 16 66 24" stroke="#f472b6" stroke-width="4" fill="none"/></g>' +
        '<g transform="translate(410 368)"><path d="M0 30 Q10 0 50 4 Q78 8 80 24 Q78 40 40 42 Q6 44 0 30 Z" fill="#f9c6dd"/><path d="M14 26 Q40 16 66 24" stroke="#f472b6" stroke-width="4" fill="none"/></g>' +
        '<path d="M380 380 Q370 340 400 320 Q420 345 450 330" stroke="#f472b6" stroke-width="3" fill="none"/>' +
        // sparkles & notes
        '<g fill="#fde68a"><path d="M560 120 l6 16 16 6 -16 6 -6 16 -6 -16 -16 -6 16 -6z"/><path d="M220 140 l4 11 11 4 -11 4 -4 11 -4 -11 -11 -4 11 -4z"/><path d="M640 200 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3z"/><path d="M330 110 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3z"/></g>' +
        '<text x="470" y="150" font-size="54" fill="#fbcfe8" opacity=".85">♪</text><text x="160" y="250" font-size="44" fill="#fbcfe8" opacity=".7">♫</text>';
    },
    coach: function () {
      var g = id("g"), stripes = '';
      for (var i = 0; i < 8; i++) stripes += '<rect x="' + (i * 100) + '" y="0" width="50" height="500" fill="#ffffff" opacity=".05"/>';
      function cone(x, y) { return '<path d="M' + x + ' ' + y + ' l-22 44 h44 z" fill="#f97316"/><rect x="' + (x - 26) + '" y="' + (y + 42) + '" width="52" height="8" rx="3" fill="#ea580c"/><path d="M' + (x - 9) + ' ' + (y + 18) + ' h18 l4 8 h-26 z" fill="#ffffff" opacity=".85"/>'; }
      var ball = '<g transform="translate(470 300)"><circle r="46" fill="#ffffff"/><path d="M0 -16 L15 -5 L9 13 L-9 13 L-15 -5 Z" fill="#16203a"/><path d="M0 -46 L0 -16 M15 -5 L42 -15 M9 13 L26 38 M-9 13 L-26 38 M-15 -5 L-42 -15" stroke="#16203a" stroke-width="3"/><circle r="46" fill="none" stroke="#cbd5e1" stroke-width="3"/><ellipse cx="-16" cy="-20" rx="14" ry="8" fill="#ffffff" opacity=".7"/></g>' +
        '<ellipse cx="478" cy="352" rx="44" ry="8" fill="#000" opacity=".2"/>';
      return '<defs><linearGradient id="' + g + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#22a35a"/><stop offset="1" stop-color="#15803d"/></linearGradient></defs>' +
        '<rect width="800" height="500" fill="url(#' + g + ')"/>' + stripes +
        '<g stroke="#ffffff" stroke-width="5" fill="none" opacity=".85">' +
        '<rect x="40" y="30" width="720" height="440"/><line x1="400" y1="30" x2="400" y2="470"/><circle cx="400" cy="250" r="80"/>' +
        '<rect x="40" y="140" width="110" height="220"/><rect x="650" y="140" width="110" height="220"/><path d="M150 210 A50 50 0 0 1 150 290"/><path d="M650 210 A50 50 0 0 0 650 290"/></g>' +
        '<circle cx="400" cy="250" r="6" fill="#ffffff"/>' +
        // goal net
        '<g stroke="#ffffff" stroke-width="2" opacity=".7"><rect x="12" y="195" width="28" height="110" fill="#ffffff" fill-opacity=".15"/>' +
        '<line x1="12" y1="215" x2="40" y2="215"/><line x1="12" y1="235" x2="40" y2="235"/><line x1="12" y1="255" x2="40" y2="255"/><line x1="12" y1="275" x2="40" y2="275"/><line x1="12" y1="295" x2="40" y2="295"/></g>' +
        cone(250, 120) + cone(320, 330) + cone(560, 140) + cone(610, 360) + ball +
        '<path d="M280 360 Q360 300 430 312" stroke="#ffffff" stroke-width="3" stroke-dasharray="10 10" fill="none" opacity=".8"/>';
    }
  };

  // Different "camera angles" on the same scene for the gallery and product images
  var CROPS = ["0 0 800 500", "300 120 480 300", "40 160 480 300", "200 40 520 325", "0 200 420 263", "360 180 440 275", "120 60 600 375", "260 0 540 338"];
  var TINTS = ["none", "saturate(1.15)", "hue-rotate(-12deg)", "brightness(1.06)", "hue-rotate(10deg) saturate(1.1)", "contrast(1.05)", "saturate(.9) brightness(1.08)", "hue-rotate(-6deg) contrast(1.08)"];
  function svg(i, cls) {
    var draw = SCENES[theme] || SCENES.massage;
    var k = i % CROPS.length;
    return '<svg class="' + (cls || "") + '" viewBox="' + CROPS[k] + '" preserveAspectRatio="xMidYMid slice" style="filter:' + TINTS[k] + '" aria-hidden="true">' + draw() + '</svg>';
  }

  // ---------- Hero illustration ----------
  document.querySelectorAll("[data-hero-art]").forEach(function (el) {
    el.innerHTML = '<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' + SCENES[theme]() + '</svg>';
  });

  // ---------- Gallery artwork ----------
  document.querySelectorAll(".gallery-tile, .gallery-tile-wide, .masonry-tile, .feed-tile").forEach(function (t, i) {
    var label = t.textContent.replace(/📸/g, "").replace(/ photo/i, "").trim() || "Gallery";
    t.classList.add("art-tile");
    t.innerHTML = svg(i + 1, "art-svg") + '<span class="art-cap">' + label.charAt(0).toUpperCase() + label.slice(1) + '</span>';
  });
  document.querySelectorAll(".page-note").forEach(function (n) {
    if (/placeholder gallery/i.test(n.textContent)) n.textContent = "(Illustrations shown — on a live site these would be the business's own photos.)";
  });

  // ---------- Map ----------
  document.querySelectorAll(".contact-split-map, [data-map]").forEach(function (m) {
    m.classList.add("art-map");
    m.innerHTML = '<svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
      '<rect width="600" height="400" fill="#eef2e6"/>' +
      '<path d="M0 300 Q150 260 300 290 T600 250 V400 H0 Z" fill="#cfe3f0"/>' +
      '<rect x="40" y="40" width="150" height="90" rx="8" fill="#d9e8c9"/><rect x="420" y="60" width="140" height="110" rx="8" fill="#d9e8c9"/>' +
      '<g stroke="#ffffff" stroke-width="16" fill="none" stroke-linecap="round"><path d="M0 180 H600"/><path d="M260 0 V400"/><path d="M0 60 Q200 120 600 20"/></g>' +
      '<g stroke="#f7d38a" stroke-width="8" fill="none" stroke-linecap="round"><path d="M0 180 H600"/></g>' +
      '<g fill="#e4e4dc"><rect x="290" y="200" width="60" height="40" rx="4"/><rect x="360" y="200" width="44" height="40" rx="4"/><rect x="290" y="110" width="80" height="50" rx="4"/><rect x="120" y="200" width="100" height="44" rx="4"/></g>' +
      '<g transform="translate(330 150)"><path d="M0 -60 C-34 -60 -42 -26 -30 -6 L0 40 L30 -6 C42 -26 34 -60 0 -60 Z" fill="var(--brand, #c2410c)"/><circle cy="-34" r="12" fill="#ffffff"/></g>' +
      '<ellipse cx="330" cy="192" rx="22" ry="6" fill="#000" opacity=".15"/></svg>' +
      '<span class="art-cap">Example Street, Belfast</span>';
  });

  // ---------- Product images on menu / booking cards ----------
  var ICONS = [
    [/deep|tissue/i, "💪"], [/sports massage|recovery/i, "🏃"], [/cupping/i, "🫙"], [/needl/i, "📍"], [/massage/i, "💆"],
    [/jug|party jug/i, "🍹"], [/mixer|spirit/i, "🥃"], [/red/i, "🍷"], [/white|rosé|rose/i, "🥂"], [/cocktail/i, "🍸"], [/beer|lager|cider/i, "🍺"], [/snack|crisp/i, "🥨"],
    [/kids|junior|tots/i, "🩰"], [/advanced|ballet/i, "💃"], [/adult/i, "🕺"], [/hip|street/i, "🎧"], [/class/i, "💃"],
    [/1-to-1|one/i, "🎯"], [/group/i, "👟"], [/bronze/i, "🥉"], [/silver/i, "🥈"], [/gold/i, "🥇"], [/party/i, "🎉"]
  ];
  function iconFor(name) { for (var i = 0; i < ICONS.length; i++) if (ICONS[i][0].test(name)) return ICONS[i][1]; return "⭐"; }
  var n = 0;
  function decorate(card) {
    if (card.querySelector(".prod-img")) return;
    var nameEl = card.querySelector(".product-name");
    var name = nameEl ? nameEl.textContent : "";
    var d = document.createElement("div");
    d.className = "prod-img";
    d.innerHTML = svg((n++) + 2, "art-svg") + '<span class="prod-ic">' + iconFor(name) + '</span>';
    card.insertBefore(d, card.firstChild);
  }
  function scan() { document.querySelectorAll(".product-card").forEach(decorate); }
  scan();
  if ("MutationObserver" in window) new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });

  // ---------- Demo label ----------
  var tag = document.createElement("a");
  tag.className = "demo-ribbon";
  tag.href = "https://yourbrand-5241.netlify.app";
  tag.target = "_blank"; tag.rel = "noopener";
  tag.innerHTML = "<b>Demo site</b> by YourBrand ↗";
  document.body.appendChild(tag);

  // ---------- Gentle reveal on scroll ----------
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    var watch = function () { document.querySelectorAll(".product-card:not(.rv), .art-tile:not(.rv), .feature-block:not(.rv), .hero-tile:not(.rv), .split-feature:not(.rv)").forEach(function (el, i) { el.classList.add("rv"); el.style.transitionDelay = (i % 4) * 70 + "ms"; io.observe(el); }); };
    watch();
    if ("MutationObserver" in window) new MutationObserver(watch).observe(document.body, { childList: true, subtree: true });
  }
})();
