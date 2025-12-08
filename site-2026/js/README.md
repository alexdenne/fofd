# FoFD JavaScript Components

Modern, accessible, vanilla JavaScript components for the Friends of Farthing Downs & Happy Valley website.

## Overview

This library provides three main components:

1. **Audio Player** - Nature Trail audio guide with multilingual support
2. **Gallery Lightbox** - Image viewer with navigation
3. **Mobile Menu** - Enhanced responsive navigation

All components are:
- Written in vanilla JavaScript (no dependencies)
- Fully accessible (WCAG 2.1 compliant)
- Mobile responsive
- Keyboard navigable
- Progressive enhancement friendly

## Quick Start

```html
<!-- Include CSS and JS in your HTML -->
<link rel="stylesheet" href="css/style.css">
<script src="js/components.js"></script>

<!-- Components auto-initialize on elements with data attributes -->
<div data-audio-player id="audio-player"></div>
<div class="gallery-item" data-lightbox>...</div>
```

## Components

### 1. Audio Player

A full-featured audio player for the Nature Trail with support for 4 languages (English, French, Hindi, Polish) and 29 stops.

#### Features
- Play/pause controls
- Progress bar with seek functionality
- Time display (current/total)
- Volume control
- Language switcher (EN/FR/HI/PL)
- Previous/next stop navigation
- Keyboard shortcuts (Space, Arrow keys)
- Auto-advance to next stop
- Loading states and error handling
- Mobile responsive

#### HTML Usage

```html
<!-- Auto-initialize with data attribute -->
<div id="nature-trail-player" data-audio-player></div>
```

#### JavaScript Usage

```javascript
// Manual initialization with custom options
const player = new AudioPlayer('nature-trail-player', {
  audioBasePath: '/site-2005-2025/NatureTrail',
  totalStops: 29,
  defaultLanguage: 'en',
  languages: {
    en: {
      name: 'English',
      path: 'NTEnglish/Audio',
      format: 'PostXXEnglish.mp3'
    },
    fr: {
      name: 'Français',
      path: 'NTFrench/Audio',
      format: 'PostXXFrench.mp3'
    },
    hi: {
      name: 'हिन्दी',
      path: 'NTHindi/Audio',
      format: 'PostXXHindi.mp3'
    },
    pl: {
      name: 'Polski',
      path: 'NTPolish/Audio',
      format: 'PostXXPolish.mp3'
    }
  },
  stopTitles: {
    1: 'Introduction',
    2: 'The Viewpoint',
    3: 'Chalk Grassland',
    // ... up to 29
  }
});
```

#### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `audioBasePath` | string | '/site-2005-2025/NatureTrail' | Base path for audio files |
| `totalStops` | number | 29 | Total number of trail stops |
| `defaultLanguage` | string | 'en' | Default language code |
| `languages` | object | See above | Language configuration |
| `stopTitles` | object | Auto-generated | Custom titles for each stop |

#### Keyboard Shortcuts

- **Space** - Play/pause
- **Arrow Left** - Previous stop
- **Arrow Right** - Next stop

### 2. Gallery Lightbox

Click-to-enlarge image gallery with navigation, captions, and keyboard support.

#### Features
- Click image to open lightbox
- Previous/next navigation
- Image counter (e.g., "3 / 12")
- Caption display
- Loading spinner
- Keyboard navigation (Esc, Arrow keys)
- Close on overlay click
- Focus management
- Mobile responsive

#### HTML Usage

```html
<!-- Gallery with lightbox -->
<div class="gallery">
  <figure class="gallery-item" data-lightbox>
    <img src="path/to/image.jpg" alt="Description">
    <figcaption>Optional caption text</figcaption>
  </figure>
  <figure class="gallery-item" data-lightbox>
    <img src="path/to/image2.jpg" alt="Description 2">
    <figcaption>Another caption</figcaption>
  </figure>
  <!-- More items... -->
</div>
```

#### JavaScript Usage

```javascript
// Manual initialization with options
const gallery = new GalleryLightbox('[data-lightbox]', {
  animationDuration: 300,
  closeOnOverlayClick: true,
  showCounter: true,
  keyboardNav: true
});

// You can also use .gallery-item selector
const gallery2 = new GalleryLightbox('.gallery-item');
```

#### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `animationDuration` | number | 300 | Animation duration in ms |
| `closeOnOverlayClick` | boolean | true | Close when clicking overlay |
| `showCounter` | boolean | true | Show image counter |
| `keyboardNav` | boolean | true | Enable keyboard navigation |

#### Keyboard Shortcuts

- **Escape** - Close lightbox
- **Arrow Left** - Previous image
- **Arrow Right** - Next image

### 3. Mobile Menu

Enhanced mobile navigation with improved accessibility and UX.

#### Features
- Hamburger toggle button
- Close on link click
- Close on outside click
- Keyboard support (Esc to close)
- Focus management
- ARIA attributes
- Smooth animations

#### HTML Usage

```html
<header>
  <nav>
    <button class="menu-toggle" aria-label="Toggle menu">☰</button>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

#### JavaScript Usage

```javascript
// Auto-initializes if .menu-toggle and .nav-links exist

// Or manual initialization
const menu = new MobileMenu('.menu-toggle', '.nav-links', {
  activeClass: 'active',
  closeOnLinkClick: true,
  closeOnOutsideClick: true
});
```

#### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `activeClass` | string | 'active' | CSS class for open state |
| `closeOnLinkClick` | boolean | true | Close menu when clicking link |
| `closeOnOutsideClick` | boolean | true | Close when clicking outside |

## Auto-Initialization

Components automatically initialize on page load if they find matching elements:

- **Audio Player**: Elements with `data-audio-player` attribute
- **Gallery Lightbox**: Elements with `data-lightbox` attribute or `.gallery-item` class
- **Mobile Menu**: Elements with `.menu-toggle` and `.nav-links` classes

To disable auto-initialization, remove or modify the `initializeComponents()` function at the bottom of `components.js`.

## Browser Support

Tested and working on:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android)

## Accessibility

All components follow WCAG 2.1 Level AA guidelines:

- Proper ARIA labels and roles
- Keyboard navigation
- Focus management
- Screen reader announcements
- Color contrast compliance
- Reduced motion support

## File Structure

```
site-2026/
├── css/
│   └── style.css          # Includes component styles
├── js/
│   ├── components.js      # All components (this file)
│   └── README.md          # This documentation
├── component-examples.html # Live demo page
└── index.html
```

## Examples

See `component-examples.html` for live demonstrations of all components.

To view the examples:
1. Open `component-examples.html` in a web browser
2. Or serve the site locally: `python -m http.server 8000`
3. Navigate to `http://localhost:8000/component-examples.html`

## Customization

### Styling

All component styles are in `css/style.css` and use CSS custom properties (variables) for easy theming:

```css
:root {
  --color-primary: #4A7C59;
  --color-secondary: #E8A838;
  --space-sm: 1rem;
  /* etc... */
}
```

### Extending Components

Components are ES6 classes and can be extended:

```javascript
class CustomAudioPlayer extends AudioPlayer {
  constructor(containerId, options) {
    super(containerId, options);
    // Add custom functionality
  }

  customMethod() {
    // Your code here
  }
}
```

## Troubleshooting

### Audio player not loading files

- Check that `audioBasePath` points to the correct directory
- Verify audio files exist and are named correctly
- Check browser console for 404 errors
- Ensure file permissions allow reading

### Lightbox images not opening

- Verify images have `data-lightbox` attribute or `.gallery-item` class
- Check that `components.js` is loaded after DOM content
- Ensure CSS is properly linked

### Mobile menu not toggling

- Confirm `.menu-toggle` and `.nav-links` elements exist
- Check that button has correct classes
- Verify JavaScript is loaded without errors

## Performance

- Components are lazy-loaded on interaction
- Images load on-demand in lightbox
- No external dependencies = faster load times
- Minified CSS/JS recommended for production

## License

Part of the Friends of Farthing Downs & Happy Valley website.
Built by volunteers for the community.

## Contributing

To improve these components:
1. Test thoroughly across browsers
2. Maintain accessibility standards
3. Keep code documented
4. Follow existing code style
5. Submit issues/PRs to the main repo

## Version History

- **v1.0.0** (2024-12-08) - Initial release
  - Audio player with 4 language support
  - Gallery lightbox component
  - Mobile menu enhancement

---

**Questions?** Contact the FoFD tech team or open an issue on GitHub.
