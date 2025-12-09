/**
 * Friends of Farthing Downs & Happy Valley
 * JavaScript Components
 *
 * Vanilla JavaScript components for:
 * - Audio Player (Nature Trail with multilingual support)
 * - Gallery Lightbox
 * - Mobile Menu
 *
 * No dependencies required. Progressive enhancement.
 */

// ============================================================================
// AUDIO PLAYER COMPONENT
// ============================================================================

class AudioPlayer {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error(`AudioPlayer: Container #${containerId} not found`);
      return;
    }

    // Configuration
    this.config = {
      audioBasePath: options.audioBasePath || '/site-2005-2025/NatureTrail',
      totalStops: options.totalStops || 29,
      languages: options.languages || {
        en: { name: 'English', path: 'NTEnglish/Audio', format: 'PostXXEnglish.mp3' },
        fr: { name: 'Français', path: 'NTFrench/Audio', format: 'PostXXFrench.mp3' },
        hi: { name: 'हिन्दी', path: 'NTHindi/Audio', format: 'PostXXHindi.mp3' },
        pl: { name: 'Polski', path: 'NTPolish/Audio', format: 'PostXXPolish.mp3' }
      },
      defaultLanguage: options.defaultLanguage || 'en',
      stopTitles: options.stopTitles || this.generateDefaultTitles()
    };

    // State
    this.currentStop = 1;
    this.currentLanguage = this.config.defaultLanguage;
    this.audio = new Audio();
    this.isPlaying = false;
    this.isDragging = false;

    // Initialize
    this.render();
    this.attachEventListeners();
    this.loadStop(this.currentStop);
  }

  generateDefaultTitles() {
    const titles = [];
    for (let i = 1; i <= this.config.totalStops; i++) {
      titles[i] = `Stop ${i}`;
    }
    return titles;
  }

  render() {
    this.container.innerHTML = `
      <div class="audio-player" role="region" aria-label="Nature Trail Audio Player">
        <!-- Header -->
        <div class="audio-player-header">
          <h3 class="audio-player-title">Nature Trail Audio Guide</h3>
          <div class="audio-player-language">
            <label for="audio-lang-select" class="audio-lang-label">Language:</label>
            <select id="audio-lang-select" class="audio-lang-select" aria-label="Select audio language">
              ${Object.entries(this.config.languages).map(([code, lang]) =>
                `<option value="${code}" ${code === this.currentLanguage ? 'selected' : ''}>${lang.name}</option>`
              ).join('')}
            </select>
          </div>
        </div>

        <!-- Stop Selector -->
        <div class="audio-player-stop">
          <label for="audio-stop-select" class="audio-stop-label">Stop:</label>
          <select id="audio-stop-select" class="audio-stop-select" aria-label="Select trail stop">
            ${Array.from({ length: this.config.totalStops }, (_, i) => i + 1).map(stop =>
              `<option value="${stop}">${this.config.stopTitles[stop] || `Stop ${stop}`}</option>`
            ).join('')}
          </select>
          <div class="audio-stop-nav">
            <button class="audio-nav-btn audio-prev-btn" aria-label="Previous stop" title="Previous stop">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <button class="audio-nav-btn audio-next-btn" aria-label="Next stop" title="Next stop">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Player Controls -->
        <div class="audio-player-controls">
          <button class="audio-play-btn" aria-label="Play" title="Play">
            <svg class="audio-play-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <svg class="audio-pause-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="display: none;">
              <path d="M6 4h4v16H6zM14 4h4v16h-4z"/>
            </svg>
          </button>

          <div class="audio-progress-container">
            <div class="audio-time audio-time-current">0:00</div>
            <div class="audio-progress-wrapper">
              <input
                type="range"
                class="audio-progress-bar"
                min="0"
                max="100"
                value="0"
                step="0.1"
                aria-label="Audio progress"
              >
              <div class="audio-progress-fill"></div>
            </div>
            <div class="audio-time audio-time-total">0:00</div>
          </div>

          <div class="audio-volume-container">
            <button class="audio-volume-btn" aria-label="Mute/Unmute" title="Volume">
              <svg class="audio-volume-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
              </svg>
              <svg class="audio-mute-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: none;">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <line x1="23" y1="9" x2="17" y2="15"/>
                <line x1="17" y1="9" x2="23" y2="15"/>
              </svg>
            </button>
            <input
              type="range"
              class="audio-volume-slider"
              min="0"
              max="100"
              value="80"
              step="1"
              aria-label="Volume control"
            >
          </div>
        </div>

        <!-- Loading/Error State -->
        <div class="audio-player-status" role="status" aria-live="polite"></div>
      </div>
    `;
  }

  attachEventListeners() {
    // Play/Pause button
    const playBtn = this.container.querySelector('.audio-play-btn');
    playBtn.addEventListener('click', () => this.togglePlay());

    // Stop navigation
    const prevBtn = this.container.querySelector('.audio-prev-btn');
    const nextBtn = this.container.querySelector('.audio-next-btn');
    prevBtn.addEventListener('click', () => this.previousStop());
    nextBtn.addEventListener('click', () => this.nextStop());

    // Stop selector
    const stopSelect = this.container.querySelector('#audio-stop-select');
    stopSelect.addEventListener('change', (e) => {
      this.currentStop = parseInt(e.target.value);
      this.loadStop(this.currentStop);
    });

    // Language selector
    const langSelect = this.container.querySelector('#audio-lang-select');
    langSelect.addEventListener('change', (e) => {
      this.currentLanguage = e.target.value;
      this.loadStop(this.currentStop);
    });

    // Progress bar
    const progressBar = this.container.querySelector('.audio-progress-bar');
    progressBar.addEventListener('input', (e) => {
      this.isDragging = true;
      this.updateProgressFill(e.target.value);
    });
    progressBar.addEventListener('change', (e) => {
      this.seek(e.target.value);
      this.isDragging = false;
    });

    // Volume controls
    const volumeBtn = this.container.querySelector('.audio-volume-btn');
    const volumeSlider = this.container.querySelector('.audio-volume-slider');
    volumeBtn.addEventListener('click', () => this.toggleMute());
    volumeSlider.addEventListener('input', (e) => this.setVolume(e.target.value));

    // Audio element events
    this.audio.addEventListener('loadstart', () => this.showStatus('Loading...'));
    this.audio.addEventListener('canplay', () => this.hideStatus());
    this.audio.addEventListener('error', () => this.showStatus('Error loading audio. Please try another stop.', 'error'));
    this.audio.addEventListener('timeupdate', () => this.updateProgress());
    this.audio.addEventListener('durationchange', () => this.updateDuration());
    this.audio.addEventListener('ended', () => this.onEnded());
    this.audio.addEventListener('play', () => this.updatePlayButton(true));
    this.audio.addEventListener('pause', () => this.updatePlayButton(false));

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

      switch(e.key) {
        case ' ':
          e.preventDefault();
          this.togglePlay();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          this.previousStop();
          break;
        case 'ArrowRight':
          e.preventDefault();
          this.nextStop();
          break;
      }
    });

    // Set initial volume
    this.setVolume(80);
  }

  loadStop(stopNumber) {
    this.currentStop = stopNumber;

    const lang = this.config.languages[this.currentLanguage];
    const stopStr = stopNumber.toString().padStart(2, '0');
    const fileName = lang.format.replace('XX', stopStr);
    const audioUrl = `${this.config.audioBasePath}/${lang.path}/${fileName}`;

    // Update UI
    const stopSelect = this.container.querySelector('#audio-stop-select');
    stopSelect.value = stopNumber;

    // Update navigation button states
    this.updateNavButtons();

    // Load audio
    const wasPlaying = this.isPlaying;
    this.audio.src = audioUrl;

    if (wasPlaying) {
      this.play();
    }
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlaying = true;
        })
        .catch(error => {
          console.error('Playback failed:', error);
          this.showStatus('Playback failed. Please try again.', 'error');
        });
    }
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
  }

  previousStop() {
    if (this.currentStop > 1) {
      this.loadStop(this.currentStop - 1);
    }
  }

  nextStop() {
    if (this.currentStop < this.config.totalStops) {
      this.loadStop(this.currentStop + 1);
    }
  }

  seek(percent) {
    const time = (percent / 100) * this.audio.duration;
    if (!isNaN(time)) {
      this.audio.currentTime = time;
    }
  }

  setVolume(value) {
    const volume = value / 100;
    this.audio.volume = volume;
    this.updateVolumeIcon(volume);
  }

  toggleMute() {
    this.audio.muted = !this.audio.muted;
    this.updateVolumeIcon(this.audio.muted ? 0 : this.audio.volume);
  }

  updateProgress() {
    if (this.isDragging) return;

    const percent = (this.audio.currentTime / this.audio.duration) * 100;
    const progressBar = this.container.querySelector('.audio-progress-bar');
    progressBar.value = percent || 0;
    this.updateProgressFill(percent || 0);

    const currentTime = this.container.querySelector('.audio-time-current');
    currentTime.textContent = this.formatTime(this.audio.currentTime);
  }

  updateDuration() {
    const totalTime = this.container.querySelector('.audio-time-total');
    totalTime.textContent = this.formatTime(this.audio.duration);
  }

  updateProgressFill(percent) {
    const progressFill = this.container.querySelector('.audio-progress-fill');
    progressFill.style.width = `${percent}%`;
  }

  updatePlayButton(isPlaying) {
    const playIcon = this.container.querySelector('.audio-play-icon');
    const pauseIcon = this.container.querySelector('.audio-pause-icon');
    const playBtn = this.container.querySelector('.audio-play-btn');

    if (isPlaying) {
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
      playBtn.setAttribute('aria-label', 'Pause');
      playBtn.setAttribute('title', 'Pause');
    } else {
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
      playBtn.setAttribute('aria-label', 'Play');
      playBtn.setAttribute('title', 'Play');
    }
  }

  updateVolumeIcon(volume) {
    const volumeIcon = this.container.querySelector('.audio-volume-icon');
    const muteIcon = this.container.querySelector('.audio-mute-icon');

    if (volume === 0) {
      volumeIcon.style.display = 'none';
      muteIcon.style.display = 'block';
    } else {
      volumeIcon.style.display = 'block';
      muteIcon.style.display = 'none';
    }
  }

  updateNavButtons() {
    const prevBtn = this.container.querySelector('.audio-prev-btn');
    const nextBtn = this.container.querySelector('.audio-next-btn');

    prevBtn.disabled = this.currentStop === 1;
    nextBtn.disabled = this.currentStop === this.config.totalStops;
  }

  onEnded() {
    this.isPlaying = false;
    if (this.currentStop < this.config.totalStops) {
      // Auto-advance to next stop
      setTimeout(() => this.nextStop(), 1000);
    }
  }

  showStatus(message, type = 'info') {
    const status = this.container.querySelector('.audio-player-status');
    status.textContent = message;
    status.className = `audio-player-status audio-status-${type}`;
    status.style.display = 'block';
  }

  hideStatus() {
    const status = this.container.querySelector('.audio-player-status');
    status.style.display = 'none';
  }

  formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
}

// ============================================================================
// GALLERY LIGHTBOX COMPONENT
// ============================================================================

class GalleryLightbox {
  constructor(selector, options = {}) {
    this.galleryItems = document.querySelectorAll(selector);
    if (this.galleryItems.length === 0) {
      console.warn(`GalleryLightbox: No elements found matching "${selector}"`);
      return;
    }

    this.config = {
      animationDuration: options.animationDuration || 300,
      closeOnOverlayClick: options.closeOnOverlayClick !== false,
      showCounter: options.showCounter !== false,
      keyboardNav: options.keyboardNav !== false
    };

    this.currentIndex = 0;
    this.images = [];
    this.isOpen = false;

    this.initialize();
  }

  initialize() {
    // Collect image data
    this.galleryItems.forEach((item, index) => {
      const img = item.querySelector('img');
      const caption = item.querySelector('figcaption')?.textContent ||
                     img.getAttribute('alt') || '';

      this.images.push({
        src: img.src,
        alt: img.alt || '',
        caption: caption,
        element: item
      });

      // Make items clickable
      item.style.cursor = 'pointer';
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      item.setAttribute('aria-label', `View image: ${caption || img.alt}`);

      // Click handler
      item.addEventListener('click', (e) => {
        e.preventDefault();
        this.open(index);
      });

      // Keyboard handler
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.open(index);
        }
      });
    });

    // Create lightbox modal
    this.createLightbox();
  }

  createLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Image lightbox');

    lightbox.innerHTML = `
      <div class="lightbox-overlay"></div>
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close lightbox" title="Close (Esc)">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <button class="lightbox-nav lightbox-prev" aria-label="Previous image" title="Previous (←)">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <button class="lightbox-nav lightbox-next" aria-label="Next image" title="Next (→)">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        <div class="lightbox-image-container">
          <img class="lightbox-image" src="" alt="" />
          <div class="lightbox-loader">
            <div class="lightbox-spinner"></div>
          </div>
        </div>

        <div class="lightbox-caption"></div>
        <div class="lightbox-counter" aria-live="polite"></div>
      </div>
    `;

    document.body.appendChild(lightbox);
    this.lightbox = lightbox;

    // Attach event listeners
    this.attachLightboxEvents();
  }

  attachLightboxEvents() {
    // Close button
    const closeBtn = this.lightbox.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', () => this.close());

    // Navigation buttons
    const prevBtn = this.lightbox.querySelector('.lightbox-prev');
    const nextBtn = this.lightbox.querySelector('.lightbox-next');
    prevBtn.addEventListener('click', () => this.previous());
    nextBtn.addEventListener('click', () => this.next());

    // Overlay click
    if (this.config.closeOnOverlayClick) {
      const overlay = this.lightbox.querySelector('.lightbox-overlay');
      overlay.addEventListener('click', () => this.close());
    }

    // Keyboard navigation
    if (this.config.keyboardNav) {
      document.addEventListener('keydown', (e) => {
        if (!this.isOpen) return;

        switch(e.key) {
          case 'Escape':
            this.close();
            break;
          case 'ArrowLeft':
            e.preventDefault();
            this.previous();
            break;
          case 'ArrowRight':
            e.preventDefault();
            this.next();
            break;
        }
      });
    }

    // Image load event
    const img = this.lightbox.querySelector('.lightbox-image');
    img.addEventListener('load', () => this.hideLoader());
    img.addEventListener('error', () => this.showError());
  }

  open(index) {
    this.currentIndex = index;
    this.isOpen = true;

    // Show lightbox
    this.lightbox.classList.add('lightbox-active');
    document.body.style.overflow = 'hidden';

    // Load image
    this.loadImage(index);

    // Set focus to close button for accessibility
    setTimeout(() => {
      this.lightbox.querySelector('.lightbox-close').focus();
    }, 100);
  }

  close() {
    this.isOpen = false;
    this.lightbox.classList.remove('lightbox-active');
    document.body.style.overflow = '';

    // Return focus to the gallery item
    if (this.images[this.currentIndex]) {
      this.images[this.currentIndex].element.focus();
    }
  }

  previous() {
    const newIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
    this.loadImage(newIndex);
  }

  next() {
    const newIndex = this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
    this.loadImage(newIndex);
  }

  loadImage(index) {
    this.currentIndex = index;
    const imageData = this.images[index];

    // Show loader
    this.showLoader();

    // Update image
    const img = this.lightbox.querySelector('.lightbox-image');
    img.src = imageData.src;
    img.alt = imageData.alt;

    // Update caption
    const caption = this.lightbox.querySelector('.lightbox-caption');
    caption.textContent = imageData.caption;
    caption.style.display = imageData.caption ? 'block' : 'none';

    // Update counter
    if (this.config.showCounter) {
      const counter = this.lightbox.querySelector('.lightbox-counter');
      counter.textContent = `${index + 1} / ${this.images.length}`;
    }

    // Update navigation button states
    this.updateNavButtons();
  }

  updateNavButtons() {
    const prevBtn = this.lightbox.querySelector('.lightbox-prev');
    const nextBtn = this.lightbox.querySelector('.lightbox-next');

    // Hide nav buttons if only one image
    if (this.images.length <= 1) {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'block';
      nextBtn.style.display = 'block';
    }
  }

  showLoader() {
    const loader = this.lightbox.querySelector('.lightbox-loader');
    loader.style.display = 'flex';
  }

  hideLoader() {
    const loader = this.lightbox.querySelector('.lightbox-loader');
    loader.style.display = 'none';
  }

  showError() {
    this.hideLoader();
    const caption = this.lightbox.querySelector('.lightbox-caption');
    caption.textContent = 'Error loading image';
    caption.style.display = 'block';
  }
}

// ============================================================================
// MOBILE MENU ENHANCEMENT
// ============================================================================

class MobileMenu {
  constructor(toggleSelector, menuSelector, options = {}) {
    this.toggle = document.querySelector(toggleSelector);
    this.menu = document.querySelector(menuSelector);

    if (!this.toggle || !this.menu) {
      console.warn('MobileMenu: Toggle or menu element not found');
      return;
    }

    this.config = {
      activeClass: options.activeClass || 'active',
      closeOnLinkClick: options.closeOnLinkClick !== false,
      closeOnOutsideClick: options.closeOnOutsideClick !== false
    };

    this.isOpen = false;
    this.initialize();
  }

  initialize() {
    // Toggle click handler
    this.toggle.addEventListener('click', () => this.toggleMenu());

    // Close on link click
    if (this.config.closeOnLinkClick) {
      const links = this.menu.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', () => {
          if (this.isOpen) {
            this.close();
          }
        });
      });
    }

    // Close on outside click
    if (this.config.closeOnOutsideClick) {
      document.addEventListener('click', (e) => {
        if (this.isOpen &&
            !this.menu.contains(e.target) &&
            !this.toggle.contains(e.target)) {
          this.close();
        }
      });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
        this.toggle.focus();
      }
    });
  }

  toggleMenu() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.isOpen = true;
    this.menu.classList.add(this.config.activeClass);
    this.toggle.setAttribute('aria-expanded', 'true');

    // Focus first link
    const firstLink = this.menu.querySelector('a');
    if (firstLink) {
      setTimeout(() => firstLink.focus(), 100);
    }
  }

  close() {
    this.isOpen = false;
    this.menu.classList.remove(this.config.activeClass);
    this.toggle.setAttribute('aria-expanded', 'false');
  }
}

// ============================================================================
// AUTO-INITIALIZATION (Optional)
// ============================================================================

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeComponents);
} else {
  initializeComponents();
}

function initializeComponents() {
  // Auto-initialize audio player if container exists
  const audioContainer = document.querySelector('[data-audio-player]');
  if (audioContainer) {
    const containerId = audioContainer.id || 'audio-player';
    audioContainer.id = containerId;
    new AudioPlayer(containerId);
  }

  // Auto-initialize gallery lightbox
  const galleryItems = document.querySelectorAll('[data-lightbox], .gallery-item');
  if (galleryItems.length > 0) {
    new GalleryLightbox('[data-lightbox], .gallery-item');
  }

  // Auto-initialize mobile menu if it exists
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    new MobileMenu('.menu-toggle', '.nav-links');
  }
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AudioPlayer, GalleryLightbox, MobileMenu };
}
