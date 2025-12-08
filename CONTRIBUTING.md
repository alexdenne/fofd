# How to Contribute

Love Farthing Downs or Happy Valley? You can help make this website better!

## Share a Photo (Easiest way!)

Taken a nice photo at the Downs? Here's how to share it:

### Step 1: Click this link
👉 **[Share a Photo](https://github.com/alexdenne/fofd/issues/new?template=photo-submission.yml)**

### Step 2: Fill in the form
- **What's in your photo?** - Give it a short title like "Fox at sunset"
- **Your photo** - Drag your photo into the box (or click to upload)
- **Where was it taken?** - Pick from the list
- **How should we credit you?** - Your name (or "Anonymous")

### Step 3: Click "Submit new issue"

That's it! We'll review it and add it to the gallery.

---

## Report a Wildlife Sighting

Spotted something interesting? Let us know!

👉 **[Report a Sighting](https://github.com/alexdenne/fofd/issues/new?template=wildlife-sighting.yml)**

You don't need a photo - just tell us what you saw, where, and when.

---

## Fix Something on the Website

Notice a typo? Got a suggestion? There are two ways to help:

### Easy way: Open an issue
Just tell us what's wrong:
1. Go to [Issues](https://github.com/alexdenne/fofd/issues)
2. Click "New Issue"
3. Describe the problem
4. Submit!

### Technical way: Submit a Pull Request

If you know a bit of HTML/CSS:

1. **Fork** this repository (click the Fork button at the top)
2. **Make your changes** in your fork
3. **Submit a Pull Request** back to us

All the website files are in the `/site` folder:
```
/site
├── index.html      ← Home page
├── visit.html      ← Visitor information
├── explore.html    ← Nature trail, wildlife, history
├── join.html       ← Membership & donations
├── gallery.html    ← Community photos
├── about.html      ← About the Friends
├── css/
│   └── style.css   ← All the styling
├── images/         ← Website images
└── gallery/        ← Community photo submissions
```

---

## Add a Photo to the Gallery (Technical)

If you want to add your photo directly:

1. Fork the repository
2. Add your image to `/site/gallery/` (please keep it under 500KB)
3. Open `/site/gallery.html`
4. Find the gallery section and add:

```html
<figure class="gallery-item">
  <img src="gallery/your-image.jpg" alt="Description of the photo">
  <figcaption>Title - Photo by Your Name</figcaption>
</figure>
```

5. Submit a Pull Request

---

## Questions?

- 💬 Join our [Facebook Group](https://www.facebook.com/groups/129749737166432)
- 📧 Email us: hello@farthingdowns.org.uk

---

## Code of Conduct

Be kind. Be helpful. Respect nature and each other. 🌿
