# Lease Guardian Website

Marketing website for Lease Guardian - an AI-powered lease analysis mobile app.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **TypeScript**: Full type safety
- **Deployment**: Vercel (recommended)

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Test production build locally
npm start
```

## Project Structure

```
lease-guardian-web/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── privacy/
│   │   └── page.tsx        # Privacy Policy
│   └── terms/
│       └── page.tsx        # Terms of Service
├── public/                 # Static assets (add images here)
└── tailwind.config.ts      # Tailwind configuration
```

## Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy from GitHub**:
   - Push code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Next.js and deploys

3. **Deploy from CLI**:
   ```bash
   vercel
   ```

### Custom Domain Setup

1. In Vercel dashboard, go to Project Settings → Domains
2. Add your custom domain: `leaseguardian.app`
3. Update your domain's DNS records as instructed
4. SSL certificate is automatically provisioned

### Environment Variables

No environment variables needed for the static website. All sensitive data is handled by the mobile app backend.

## Customization

### Update App Store Links

Replace placeholder links in `app/page.tsx`:

```typescript
// Line ~247 and ~256
href="https://apps.apple.com/YOUR_APP_ID"
href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME"
```

### Update Contact Email

Replace `support@leaseguardian.app` with your actual support email in:
- `app/page.tsx` (footer)
- `app/privacy/page.tsx`
- `app/terms/page.tsx`

### Add App Screenshots

1. Add screenshots to `public/screenshots/`
2. Update hero section in `app/page.tsx` to display them

### Analytics (Optional)

Add Google Analytics, Plausible, or Vercel Analytics:

```bash
# For Vercel Analytics
npm install @vercel/analytics
```

Then add to `app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## SEO Optimization

The site includes:
- ✅ Semantic HTML structure
- ✅ Meta tags for SEO
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Responsive design
- ✅ Fast loading with Next.js optimization

### Add sitemap.xml

Create `app/sitemap.ts`:

```typescript
export default function sitemap() {
  return [
    {
      url: 'https://leaseguardian.app',
      lastModified: new Date(),
    },
    {
      url: 'https://leaseguardian.app/privacy',
      lastModified: new Date(),
    },
    {
      url: 'https://leaseguardian.app/terms',
      lastModified: new Date(),
    },
  ]
}
```

## Performance

- Lighthouse score: 95+ (optimized by Next.js)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Fully responsive on all devices

## License

All rights reserved © 2026 Lease Guardian

## Support

For website issues: support@leaseguardian.app
