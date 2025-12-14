# Assets

All media files for the project.

---

## Structure

```
assets/
├── images/          # Logos, banners, photos
├── generated/       # AI-generated images
├── screenshots/     # App screenshots
└── notes/           # Text notes and documentation
```

---

## Usage

Reference in code:
```typescript
// In React component
import logo from "@assets/images/logo.png";

<img src={logo} alt="Logo" />
```

---

## Guidelines

- Use **WebP** format for web images
- Use **PNG** for logos with transparency
- Use **JPG** for photos
- Keep file sizes under 500KB
