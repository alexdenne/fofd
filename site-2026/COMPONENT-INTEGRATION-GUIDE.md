# Component Integration Guide

Quick reference for adding JavaScript components to FoFD website pages.

## Files Created

### Core Files
1. `/home/user/fofd/site-2026/js/components.js` (25KB, 781 lines)
   - AudioPlayer class
   - GalleryLightbox class
   - MobileMenu class
   - Auto-initialization logic

2. `/home/user/fofd/site-2026/css/style.css` (Updated, +547 lines)
   - Audio player styles
   - Lightbox modal styles
   - Component responsive styles

### Documentation & Examples
3. `/home/user/fofd/site-2026/component-examples.html`
   - Live demo page with all components
   - Code examples
   - Technical documentation

4. `/home/user/fofd/site-2026/js/README.md`
   - Complete API documentation
   - Configuration options
   - Troubleshooting guide

## Adding Components to Pages

### Step 1: Include Files

Add to the `<head>` section of any page:

```html
<!-- Already included in base template -->
<link rel="stylesheet" href="css/style.css">

<!-- Add before closing </body> tag -->
<script src="js/components.js"></script>
```

### Step 2A: Add Audio Player (e.g., explore.html)

```html
<section id="nature-trail">
  <div class="container">
    <h2>Nature Trail Audio Guide</h2>
    <p>Discover the wildlife and history of Farthing Downs with our multilingual audio guide.</p>

    <!-- Audio Player Component -->
    <div id="nature-trail-player" data-audio-player></div>

    <div class="mt-md">
      <p class="text-light">
        Available in English, French, Hindi, and Polish.
        Follow 29 stops around the Downs to learn about the flora, fauna, and archaeology.
      </p>
    </div>
  </div>
</section>

<!-- JavaScript will auto-initialize -->
```

### Step 2B: Add Gallery Lightbox (e.g., gallery.html)

```html
<section>
  <div class="container">
    <h2>Photo Gallery</h2>

    <!-- Gallery Grid with Lightbox -->
    <div class="gallery">
      <figure class="gallery-item" data-lightbox>
        <img src="photos/sunset-ridge.jpg" alt="Sunset over the ridge">
        <figcaption>Sunset from Farthing Downs ridge - Photo by J. Smith</figcaption>
      </figure>

      <figure class="gallery-item" data-lightbox>
        <img src="photos/wildflowers.jpg" alt="Spring wildflowers">
        <figcaption>Spring wildflower meadow - Photo by M. Jones</figcaption>
      </figure>

      <!-- Add more images... -->
    </div>
  </div>
</section>

<!-- JavaScript will auto-initialize the lightbox -->
```

### Step 2C: Mobile Menu (Already Integrated)

The mobile menu automatically enhances the existing navigation in `index.html`:

```html
<!-- Existing header - no changes needed -->
<header>
  <nav>
    <button class="menu-toggle" aria-label="Toggle menu">☰</button>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="visit.html">Visit</a></li>
      <!-- etc... -->
    </ul>
  </nav>
</header>

<!-- JavaScript auto-detects and enhances -->
```

## Integration Examples by Page

### explore.html - Add Audio Player

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Existing head content -->
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- Existing header -->

  <main>
    <!-- Nature Trail Section -->
    <section id="nature-trail" class="mb-lg">
      <div class="container">
        <h1>Explore the Downs</h1>

        <div class="text-center mb-lg">
          <h2>Nature Trail Audio Guide</h2>
          <p class="text-light">
            Take a self-guided tour with our audio guide, available in 4 languages.
            29 stops covering wildlife, plants, archaeology, and history.
          </p>
        </div>

        <!-- Audio Player -->
        <div id="nature-trail-player" data-audio-player></div>

        <div class="mt-lg">
          <h3>What You'll Discover</h3>
          <div class="card-grid">
            <div class="card">
              <div class="card-content">
                <h4>Wildlife</h4>
                <p>Learn about butterflies, birds, and mammals that call the Downs home.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <h4>Plants</h4>
                <p>Discover rare chalk grassland flowers and ancient trees.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <h4>History</h4>
                <p>Explore Saxon burial mounds and Neolithic trackways.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Other sections... -->
  </main>

  <!-- Existing footer -->

  <!-- Add JavaScript -->
  <script src="js/components.js"></script>
</body>
</html>
```

### gallery.html - Add Lightbox

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Existing head content -->
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- Existing header -->

  <main>
    <section>
      <div class="container">
        <h1>Photo Gallery</h1>
        <p class="text-center text-light mb-lg">
          Click any image to view full size. Photos by FoFD members and visitors.
        </p>

        <!-- Gallery with Lightbox -->
        <div class="gallery">
          <!-- Replace with actual photos -->
          <figure class="gallery-item" data-lightbox>
            <img src="photos/downs-2024-01.jpg" alt="View from the ridge">
            <figcaption>View from the ridge - Spring 2024</figcaption>
          </figure>

          <figure class="gallery-item" data-lightbox>
            <img src="photos/downs-2024-02.jpg" alt="Wildflower meadow">
            <figcaption>Wildflower meadow in bloom</figcaption>
          </figure>

          <!-- Add more photos... -->
        </div>

        <div class="text-center mt-lg">
          <a href="https://github.com/alexdenne/fofd/issues/new?template=photo-submission.yml"
             class="btn btn-primary">
            Share Your Photo
          </a>
        </div>
      </div>
    </section>
  </main>

  <!-- Existing footer -->

  <!-- Add JavaScript -->
  <script src="js/components.js"></script>
</body>
</html>
```

## Advanced Configuration

### Custom Audio Player Setup

If you need custom stop titles or different audio paths:

```html
<div id="custom-audio-player"></div>

<script src="js/components.js"></script>
<script>
  // Custom initialization
  const customPlayer = new AudioPlayer('custom-audio-player', {
    audioBasePath: '/custom/path/to/audio',
    totalStops: 29,
    defaultLanguage: 'en',
    stopTitles: {
      1: 'Welcome to Farthing Downs',
      2: 'The Viewpoint',
      3: 'Chalk Grassland Habitat',
      4: 'Ancient Burial Mounds',
      // ... etc for all 29 stops
    }
  });
</script>
```

### Custom Lightbox Behavior

```html
<div class="my-gallery">
  <img src="photo1.jpg" alt="Photo 1" class="lightbox-photo">
  <img src="photo2.jpg" alt="Photo 2" class="lightbox-photo">
</div>

<script src="js/components.js"></script>
<script>
  // Custom initialization
  const customGallery = new GalleryLightbox('.lightbox-photo', {
    closeOnOverlayClick: false,  // Require close button
    showCounter: false,           // Hide counter
    animationDuration: 500        // Slower animation
  });
</script>
```

## Testing Checklist

Before deploying:

- [ ] Audio player loads and plays MP3 files
- [ ] All 4 languages work (EN/FR/HI/PL)
- [ ] Previous/next navigation works
- [ ] Gallery lightbox opens on image click
- [ ] Lightbox navigation (prev/next) works
- [ ] Lightbox closes with Esc key
- [ ] Mobile menu toggles on mobile devices
- [ ] All components work on mobile
- [ ] Keyboard navigation works for all components
- [ ] No JavaScript console errors
- [ ] Page loads fast (check Network tab)

## Browser Testing

Test in:
- Chrome (desktop & mobile)
- Firefox
- Safari (desktop & mobile)
- Edge

## Accessibility Testing

- [ ] Screen reader announces all controls
- [ ] Tab key navigates through all interactive elements
- [ ] Focus visible on all controls
- [ ] ARIA labels present and correct
- [ ] Color contrast meets WCAG AA standards

## Performance Notes

- **First load**: ~25KB JavaScript + ~23KB CSS (component styles)
- **Images**: Load lazily in lightbox (not all at once)
- **Audio**: Only current track loads (not all 29 stops)
- **No dependencies**: No jQuery, React, etc. = Faster!

## Troubleshooting

### Audio files not found (404 errors)

Check the audio path matches your file structure:
```javascript
audioBasePath: '/site-2005-2025/NatureTrail'  // Must be correct
```

### Components not initializing

1. Check JavaScript console for errors
2. Verify `components.js` loads after DOM content
3. Ensure HTML elements have correct attributes/classes

### Styling issues

1. Confirm `style.css` is loaded
2. Check for CSS conflicts with existing styles
3. Use browser DevTools to inspect elements

## Next Steps

1. **Test the demo**: Open `component-examples.html` in a browser
2. **Add to explore.html**: Integrate audio player for Nature Trail
3. **Add to gallery.html**: Add lightbox to photo gallery
4. **Customize**: Update stop titles and audio paths as needed
5. **Deploy**: Test thoroughly, then push to production

## Questions?

- See `/home/user/fofd/site-2026/js/README.md` for full API docs
- View live examples at `component-examples.html`
- Check browser console for error messages
- Test with browser DevTools open

---

**Ready to integrate?** Start with the demo page to see everything working, then copy the patterns to your actual pages.
