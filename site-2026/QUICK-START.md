# Quick Start - FoFD Components

5-minute guide to using the JavaScript components.

## 1. View the Demo

Open in your browser:
```bash
/home/user/fofd/site-2026/component-examples.html
```

Or start a local server:
```bash
cd /home/user/fofd/site-2026
python3 -m http.server 8000
# Visit: http://localhost:8000/component-examples.html
```

## 2. Add to Your Page

### Include Files
```html
<head>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- Your content -->

  <script src="js/components.js"></script>
</body>
```

### Audio Player
```html
<div id="audio-player" data-audio-player></div>
```

### Gallery Lightbox
```html
<figure class="gallery-item" data-lightbox>
  <img src="photo.jpg" alt="Description">
  <figcaption>Caption</figcaption>
</figure>
```

### Mobile Menu
Already works! Just ensure you have:
```html
<button class="menu-toggle">☰</button>
<ul class="nav-links">...</ul>
```

## 3. Test

Open your page and verify:
- [ ] Audio player appears and plays
- [ ] Clicking images opens lightbox
- [ ] Mobile menu toggles (resize window)
- [ ] Keyboard shortcuts work (Space, Arrows, Esc)

## Need Help?

1. **Full docs**: `js/README.md`
2. **Integration guide**: `COMPONENT-INTEGRATION-GUIDE.md`
3. **Technical report**: `TECHNICAL-DELIVERABLES-REPORT.md`
4. **Live demo**: `component-examples.html`

## Common Issues

**Audio not playing?**
- Check file paths in browser console
- Verify audio files exist at `/site-2005-2025/NatureTrail/`

**Lightbox not opening?**
- Add `data-lightbox` attribute to images
- Check JavaScript console for errors

**Mobile menu not working?**
- Verify `.menu-toggle` and `.nav-links` classes exist
- Check that JavaScript loads after HTML

## File Structure

```
site-2026/
├── css/
│   └── style.css              ← Includes all styles
├── js/
│   ├── components.js          ← All components
│   └── README.md              ← API docs
├── component-examples.html    ← Live demo
├── QUICK-START.md            ← This file
└── COMPONENT-INTEGRATION-GUIDE.md  ← Detailed guide
```

## Keyboard Shortcuts

**Audio Player:**
- Space = Play/pause
- Left Arrow = Previous stop
- Right Arrow = Next stop

**Lightbox:**
- Esc = Close
- Left Arrow = Previous image
- Right Arrow = Next image

**Mobile Menu:**
- Esc = Close menu

---

**Ready?** Start with the demo page, then add to your site!
