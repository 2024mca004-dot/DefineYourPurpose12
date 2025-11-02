# Design Guidelines: Personal Branding & Business Listing Marketplace Platform

## Design Approach

**Selected Approach:** Design System with Professional SaaS Inspiration

Drawing from Stripe's clarity, Linear's precision, and enterprise platforms like HubSpot, this design prioritizes trust, professionalism, and conversion optimization. The platform balances personal branding with marketplace functionality, requiring clear information hierarchy and strong credibility signals.

**Core Design Principles:**
- Professional Authority: Establish trust through clean, confident design
- Information Clarity: Multiple complex sections organized with clear hierarchy
- Conversion Focus: Strategic CTAs and lead generation touchpoints
- Scalable Structure: Accommodate growing business listings and content

## Typography System

**Font Stack:**
- Primary: Inter (clean, professional, excellent readability)
- Secondary: Poppins (headings, emphasis, personality)

**Type Scale:**
- Hero Headline: 4xl to 6xl (text-4xl md:text-5xl lg:text-6xl)
- Section Headings: 3xl to 4xl (text-3xl md:text-4xl)
- Subsection Titles: 2xl to 3xl (text-2xl md:text-3xl)
- Card Titles: xl to 2xl (text-xl md:text-2xl)
- Body Large: lg (text-lg)
- Body Standard: base (text-base)
- Body Small: sm (text-sm)
- Captions/Meta: xs (text-xs)

**Font Weights:**
- Bold (font-bold): Hero headlines, primary CTAs
- Semibold (font-semibold): Section headings, card titles
- Medium (font-medium): Subheadings, navigation
- Regular (font-normal): Body text, descriptions

## Layout System

**Spacing Primitives:**
Primary units: 4, 6, 8, 12, 16, 20, 24
- Micro spacing: p-4, gap-4
- Component spacing: p-6, p-8, gap-6
- Section spacing: py-16, py-20, py-24
- Large breaks: py-32

**Container Strategy:**
- Max-width container: max-w-7xl mx-auto px-6 lg:px-8
- Content sections: max-w-6xl
- Text content: max-w-3xl
- Full-width sections with inner constraints

**Grid Systems:**
- Company Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Feature Highlights: grid-cols-1 lg:grid-cols-2
- Business Listings: grid-cols-1 md:grid-cols-2 xl:grid-cols-3
- Blog Posts: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

## Component Library

### Navigation
**Desktop Header:**
- Fixed position, subtle backdrop blur
- Logo left, navigation center, CTA button right
- Navigation links: font-medium, appropriate spacing (gap-8)
- Primary CTA: "Partner With Us" button (prominent, semibold)
- Secondary action: "List Your Company" link

**Mobile Header:**
- Hamburger menu (right-aligned)
- Slide-out overlay navigation
- Stacked links with generous touch targets (py-4)

### Hero Section
**Layout:** Asymmetric two-column (60/40 split)
- Left: Headline + tagline + dual CTAs
- Right: Professional headshot or brand imagery

**Content Structure:**
- Eyebrow: "SAP S/4 HANA Mentor | Founder | Motivational Speaker" (text-sm, font-semibold, tracking-wide, uppercase)
- Headline: "Prashun Shetty" (text-5xl lg:text-6xl, font-bold)
- Tagline: "Transforming Skills, Technology & Education" (text-xl lg:text-2xl)
- Dual CTAs: Primary "Explore Companies" + Secondary "Read SAP Insights"
- Trust indicators: Achievement badges/stats below CTAs

### Company Showcase Cards
**Card Structure:**
- Company logo (h-16 to h-20)
- Company name (text-2xl, font-semibold)
- Tagline (text-base)
- 2-3 sentence description (text-sm)
- Dual CTAs: "Visit Website" (primary) + "Collaborate" (secondary)
- Subtle elevation with border treatment

**Three Featured Companies:**
1. TagSkills Edtech
2. Invayas Technologies  
3. Frillory Design House

Each card: Consistent height, generous padding (p-8), rounded corners (rounded-2xl)

### Business Listing Marketplace

**Filter Bar:**
- Horizontal pill filters: "All", "EdTech", "SAP Partner", "Training", "Recruitment"
- Active state clearly differentiated
- Sticky positioning on scroll

**Listing Cards:**
- Company banner image (aspect-ratio-16/9)
- Logo overlay (positioned bottom-left on banner)
- Company name + category badge
- Brief description (2-3 lines, text-sm)
- Pricing tier display
- "View Profile" CTA
- Contact form trigger

**Company Profile Page:**
- Full-width banner
- Company details section (grid layout)
- Lead generation form (sidebar or dedicated section)
- Featured offerings/services
- Contact information

### Lead Generation Forms

**Contact Form Components:**
- Generous input spacing (gap-6)
- Labels above inputs (text-sm, font-medium)
- Input fields: py-3 px-4, rounded-lg
- Textarea: min-h-32
- Helper text below fields (text-xs)
- Submit button: Full-width on mobile, inline on desktop

**Form Variations:**
1. Partnership Inquiry (4-5 fields)
2. Company Listing Interest (6-7 fields)
3. Newsletter Subscription (email + name)

### SAP Thought Hub (Blog)

**Blog Grid:**
- Featured post (larger, top position)
- Standard posts (3-column grid)

**Post Card:**
- Featured image (aspect-ratio-16/9, rounded-xl)
- Category badge (small pill, absolute top-left)
- Published date (text-xs)
- Title (text-xl, font-semibold, 2-line clamp)
- Excerpt (text-sm, 3-line clamp)
- Read time estimate
- "Read More" link with arrow

**Article Page:**
- Hero image (full-width, h-96)
- Max-width prose container (max-w-3xl)
- Generous line-height (leading-relaxed)
- Headings with clear hierarchy
- Code blocks for technical content
- Share buttons (sticky sidebar on desktop)

### Subscription/Pricing Section

**Pricing Cards:**
- Three tiers arranged horizontally
- Featured tier: Elevated treatment, "Most Popular" badge
- Tier structure:
  - Plan name (text-2xl, font-bold)
  - Pricing (text-4xl, font-bold + /month)
  - Feature list (checkmark icons, text-sm)
  - CTA button (full-width)
- Card padding: p-8
- Border treatment differentiates tiers

### Footer

**Multi-Column Layout:**
- Column 1: Brand + brief description + social links
- Column 2: Quick Links (About, Companies, Blog)
- Column 3: Resources (SAP Insights, Partnership Info)
- Column 4: Newsletter signup (compact form)
- Bottom bar: Copyright + Legal links

Social links: Icon-only, horizontal row, gap-4

## Images

**Hero Section:**
- Professional headshot of Prashun Shetty or composite image showing leadership/speaking engagement
- Placement: Right side of hero (40% width)
- Treatment: Subtle gradient overlay or geometric framing

**Company Logos:**
- High-resolution logos for TagSkills, Invayas Technologies, Frillory Design House
- Consistent sizing within cards

**Business Listings:**
- Banner images for each listed company (16:9 ratio)
- Placeholder images for companies without custom banners

**Blog Posts:**
- Featured images for each article (SAP-related, technology themes)
- Illustrations for complex topics preferred over stock photos

**About Section:**
- Timeline milestone images
- Speaking engagement photos
- Office/team photos

## Accessibility & Polish

- Form inputs: Clear focus states (ring-2 treatment)
- Interactive elements: Minimum 44x44px touch targets
- Link styling: Underline on hover for text links
- Skip navigation link
- Semantic HTML structure
- ARIA labels for icon-only buttons
- Keyboard navigation support throughout

## Animation Strategy

**Minimal, Purposeful Motion:**
- Entrance: Fade-in on scroll for cards (subtle, once)
- Navigation: Smooth scroll for anchor links
- Hovers: Scale transform (scale-105) for cards
- Loading states: Skeleton screens for data fetching
- No decorative animations in business sections