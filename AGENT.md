# AGENTS.md — Mandis Digital Frontend Development Guidelines

## 1. Project Overview

This project is the official frontend website for **Mandis Digital**, a modern digital marketing agency.

The website must communicate:

* Premium digital marketing expertise
* Creativity
* Technology
* Business growth
* Trust
* Performance
* Innovation
* Professionalism

The website is **frontend-only**.

There is:

* No backend
* No database
* No authentication
* No Redux requirement
* No REST API requirement
* No server-side business logic

The website should function as a polished, production-quality **static marketing website**.

The primary objective is:

> Build a visually exceptional, fast, responsive, accessible, and conversion-focused digital marketing agency website.

---

# 2. Core Development Philosophy

Follow this priority:

```text
Visual Quality
↓
User Experience
↓
Conversion
↓
Performance
↓
Accessibility
↓
Maintainability
↓
Code Simplicity
```

The website should feel like a premium digital agency rather than a generic template.

Avoid:

* Generic layouts
* Template-like sections
* Excessive gradients
* Random animations
* Unnecessary complexity
* Poor typography
* Stock-looking visual design
* Repetitive cards
* Excessive rounded containers
* Animation for the sake of animation

Every design decision should have a purpose.

---

# 3. Golden Rule

Before creating new frontend code:

```text
SEARCH
   ↓
UNDERSTAND
   ↓
REUSE
   ↓
EXTEND
   ↓
ONLY THEN CREATE
```

Before changing existing code:

```text
TRACE THE COMPONENT
        ↓
CHECK DEPENDENCIES
        ↓
MAKE THE SMALLEST SAFE CHANGE
        ↓
VERIFY RESPONSIVE BEHAVIOR
        ↓
TEST
```

Do not create duplicate components when an existing component can be extended with props or variants.

---

# 4. Technology

Use the project's existing technology stack.

Preferred stack:

* React
* TypeScript
* Vite
* Tailwind CSS
* CSS Modules or project-approved CSS
* Framer Motion when animation complexity justifies it
* Lucide React or another consistent icon library

Do not introduce additional libraries without a clear reason.

Before installing a dependency, ask:

> Can this functionality be implemented cleanly using the existing stack?

If yes, do not add another dependency.

---

# 5. Frontend-Only Architecture

This project is a static marketing website.

Do NOT create:

* API services
* Axios clients
* Redux stores
* Authentication systems
* Database models
* Backend logic
* JWT handling
* Server-side business logic

Content can be represented through:

* TypeScript constants
* Static JSON
* Component props
* Local configuration objects

Example:

```ts
const services = [
  {
    title: "Search Engine Optimization",
    description: "...",
    icon: Search,
  },
  {
    title: "Performance Marketing",
    description: "...",
    icon: BarChart3,
  },
];
```

Prefer data-driven rendering when sections contain repeated content.

---

# 6. Recommended Project Structure

Use a clean and practical structure.

```text
src/
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── components/
│   ├── common/
│   │   ├── Button/
│   │   ├── Container/
│   │   ├── SectionHeading/
│   │   └── MagneticButton/
│   │
│   ├── layout/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   └── PageTransition/
│   │
│   ├── effects/
│   │   ├── CursorGlow/
│   │   ├── TextReveal/
│   │   ├── MagneticElement/
│   │   ├── Marquee/
│   │   └── ScrollProgress/
│   │
│   └── sections/
│       ├── Hero/
│       ├── About/
│       ├── Services/
│       ├── Work/
│       ├── Process/
│       ├── Testimonials/
│       ├── FAQ/
│       └── CTA/
│
├── data/
│   ├── services.ts
│   ├── projects.ts
│   ├── testimonials.ts
│   └── faq.ts
│
├── hooks/
│   ├── useScrollProgress.ts
│   ├── useMediaQuery.ts
│   └── useReducedMotion.ts
│
├── pages/
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── Work.tsx
│   ├── About.tsx
│   └── Contact.tsx
│
├── styles/
│   ├── globals.css
│   └── animations.css
│
├── App.tsx
└── main.tsx
```

Do not blindly create every folder.

Only create structures that are actually required.

---

# 7. Component Architecture

Every component should have one clear responsibility.

Good:

```text
Hero
├── HeroContent
├── HeroVisual
├── HeroStats
└── HeroCTA
```

Bad:

```text
HomePage.tsx
```

containing:

* Navbar
* Hero
* Services
* Testimonials
* Footer
* Animation logic
* 1000+ lines of JSX

Pages should compose sections.

---

# 8. Reusability

Reusable components should solve real repeated problems.

Good reusable components:

```text
Button
SectionHeading
Container
ServiceCard
ProjectCard
TestimonialCard
Badge
Marquee
FAQItem
AnimatedText
```

Avoid theoretical abstractions such as:

```text
UniversalMarketingComponent
DynamicEverything
GenericSectionManager
```

Practical reuse is more important than maximum abstraction.

---

# 9. Design Direction

Mandis Digital should have a distinctive visual identity.

The design should communicate:

```text
Modern
+
Bold
+
Strategic
+
Creative
+
Technical
+
Premium
```

Avoid making the website look like a generic SaaS dashboard.

The visual language should be closer to:

* Premium creative agencies
* Modern technology brands
* High-end design studios
* Performance-focused marketing companies

---

# 10. Typography

Typography is one of the most important elements of the design.

Use a professional modern font system.

Recommended characteristics:

### Headings

* Large
* Bold
* Tight line-height
* Strong visual hierarchy
* Occasional oversized typography

### Body

* Highly readable
* Comfortable line-height
* Moderate font weight
* Clear contrast

Example hierarchy:

```text
Hero heading
64–96px desktop

Section heading
48–72px desktop

Card heading
20–28px

Body
16–18px
```

Do not use huge typography everywhere.

Create hierarchy through contrast.

---

# 11. Color System

Create a consistent design-token system.

Example:

```css
:root {
  --background: ...;
  --foreground: ...;
  --primary: ...;
  --secondary: ...;
  --muted: ...;
  --border: ...;
  --surface: ...;
}
```

Do not randomly choose colors throughout individual components.

All colors should come from the design system.

The brand palette should feel intentional and recognizable.

---

# 12. Spacing System

Maintain consistent spacing.

Prefer a spacing scale rather than arbitrary values.

For example:

```text
8
12
16
24
32
48
64
80
96
120
160
```

Large sections should have generous whitespace.

Do not overcrowd the page.

---

# 13. Hero Section

The hero section is the most important visual area.

It should immediately communicate:

1. What Mandis Digital does
2. Who it helps
3. Why it is different
4. What action the visitor should take

The hero should include a strong CTA.

Example structure:

```text
Small brand statement

BIG HEADLINE

Supporting statement

[ Start a Project ] [ Explore Our Work ]

Visual / abstract marketing visualization

Trust / metric indicators
```

The hero should have the strongest visual impact on the website.

---

# 14. Marketing Content

The website should be conversion-focused.

Content should communicate outcomes rather than simply listing services.

Prefer:

> Turn attention into measurable business growth.

Instead of:

> We provide digital marketing services.

Prefer:

> Grow your visibility, generate qualified leads, and build a brand people remember.

Instead of:

> SEO, social media, PPC.

Use services to communicate business value.

---

# 15. Services Section

Potential services may include:

* SEO
* Search Engine Marketing
* Social Media Marketing
* Performance Marketing
* Content Marketing
* Web Development
* Branding
* Email Marketing
* Analytics
* Conversion Rate Optimization

Only include services that are actually part of the Mandis Digital offering.

Each service should communicate:

```text
Service
↓
Problem
↓
Solution
↓
Business Outcome
```

Avoid making every service card visually identical.

Use subtle variations while maintaining consistency.

---

# 16. Case Studies / Work

The portfolio should feel premium.

Each project should communicate:

```text
Client / Brand
Industry
Challenge
Strategy
Execution
Result
```

Use visual storytelling.

Do not create fake numerical results unless explicitly provided.

If placeholder content is necessary, clearly structure it as sample content.

---

# 17. Animation Philosophy

Animation is a core part of the Mandis Digital experience.

However:

> Animation should enhance the experience, not distract from the message.

Animations must feel:

* Smooth
* Intentional
* Premium
* Natural
* Responsive
* Fast

Avoid:

* Constant bouncing
* Excessive spinning
* Random transforms
* Long blocking animations
* Flashing elements
* Animation on every single element

---

# 18. Animation Hierarchy

Use animation at different levels.

### Level 1 — Micro interactions

Examples:

* Button hover
* Icon movement
* Link underline
* Card hover
* Image scale
* Cursor interaction

Duration:

```text
150–300ms
```

### Level 2 — Section entrance

Examples:

* Fade-up
* Slide-up
* Text reveal
* Staggered cards

Duration:

```text
500–900ms
```

### Level 3 — Hero animation

Examples:

* Floating visual elements
* Animated gradients
* Parallax
* Text reveal
* Background movement

Use carefully.

### Level 4 — Scroll storytelling

Examples:

* Sticky sections
* Horizontal scrolling
* Progressive reveals
* Image transformations
* Scroll-linked typography

Only use these when they improve storytelling.

---

# 19. Framer Motion

If Framer Motion is installed, use it for complex animations.

Good use cases:

```text
AnimatePresence
motion.div
motion.section
variants
staggerChildren
useScroll
useTransform
```

Create reusable animation variants.

Example:

```ts
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
```

Do not duplicate the same animation configuration across dozens of components.

---

# 20. Scroll Animations

Use scroll-triggered animation strategically.

Recommended:

```text
Hero
↓
Text reveal
↓
Service cards stagger
↓
Case study image reveal
↓
Process timeline
↓
Testimonials
↓
CTA
```

Animations should normally trigger when content enters the viewport.

Do not replay distracting animations continuously.

---

# 21. Reduced Motion

Respect accessibility preferences.

Support:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}
```

Complex animation systems should also detect reduced-motion preferences when appropriate.

Animation must never make the website unusable.

---

# 22. Hover Effects

Interactive elements should have clear feedback.

Good effects:

```text
Button
→ subtle movement

Card
→ slight lift + image scale

Link
→ animated underline

Image
→ subtle zoom

Icon
→ directional movement
```

Avoid:

```text
Huge rotation
Extreme scaling
Fast shaking
Aggressive distortion
```

Keep interactions refined.

---

# 23. Magnetic Buttons

Magnetic interactions may be used for major CTAs.

Example:

```text
Cursor approaches button
        ↓
Button subtly follows cursor
        ↓
Cursor leaves
        ↓
Button returns smoothly
```

Use magnetic effects sparingly.

Do not use them on every button.

Do not use magnetic interactions on touch devices unless they degrade gracefully.

---

# 24. Custom Cursor

A custom cursor may be used on desktop.

Possible states:

```text
Default
Hover link
Hover button
Hover project
Drag
View
```

The cursor should remain subtle.

Never allow a custom cursor to replace native accessibility behavior.

Disable or simplify it for:

* Mobile
* Touch devices
* Reduced motion users

---

# 25. Marquee / Infinite Scrolling

Use marquees when useful for:

* Services
* Technologies
* Client industries
* Marketing keywords
* Brand statements

Example:

```text
SEO • PERFORMANCE • CONTENT • BRANDING • WEB • SEO • PERFORMANCE
```

Marquee animation must:

* Be smooth
* Avoid excessive speed
* Pause when appropriate
* Remain readable
* Support reduced motion

---

# 26. Background Effects

Premium visual effects can include:

* Noise texture
* Grain
* Soft gradients
* Grid patterns
* Glow
* Blur
* Mesh gradients
* Floating shapes
* Abstract geometry

Use effects carefully.

The background should support the content.

Do not allow decorative effects to reduce readability.

---

# 27. Glassmorphism

Glass effects may be used selectively.

Example:

```css
backdrop-filter: blur(...);
background: rgba(...);
border: 1px solid rgba(...);
```

Do not put every component inside a glass card.

Overuse makes the design look generic.

---

# 28. Gradients

Gradients should be part of the visual identity.

Prefer:

* Controlled gradients
* Large atmospheric gradients
* Subtle glow
* Gradient typography for emphasis

Avoid:

* Rainbow gradients
* Excessive neon
* Random gradient backgrounds

Use gradients with intention.

---

# 29. Images

Images should be optimized.

Prefer:

* WebP
* AVIF
* Responsive image sizes
* Lazy loading below the fold
* Proper width/height attributes

Avoid enormous unoptimized images.

Do not use low-quality stock images simply to fill space.

When appropriate, use:

* Abstract visuals
* Campaign screenshots
* Website previews
* Brand assets
* Marketing dashboards
* Product imagery
* Original agency visuals

---

# 30. Icons

Use one consistent icon system.

Recommended:

```text
Lucide
```

Do not mix multiple unrelated icon styles.

Icons should support the content, not become decoration everywhere.

---

# 31. Responsive Design

The website must work properly on:

```text
Mobile
Tablet
Laptop
Desktop
Large screens
```

Do not treat mobile as an afterthought.

Every section must be checked at:

```text
320px
375px
768px
1024px
1280px
1440px+
```

Responsive behavior should include:

* Typography scaling
* Spacing changes
* Navigation transformation
* Grid changes
* Image scaling
* Animation simplification
* Horizontal overflow prevention

---

# 32. Mobile Navigation

Desktop:

```text
Logo
Services
Work
About
Insights
Contact
CTA
```

Mobile:

```text
Logo
Menu
```

The mobile menu should have a polished animation.

Example:

```text
Menu icon
↓
Full-screen / drawer navigation
↓
Staggered navigation links
↓
CTA
```

Ensure the menu can be closed with:

* Close button
* Escape key
* Appropriate navigation interaction

---

# 33. Accessibility

Accessibility is mandatory.

Use:

* Semantic HTML
* Proper heading hierarchy
* `<button>` for actions
* `<a>` for navigation
* Accessible labels
* Keyboard navigation
* Visible focus states
* Sufficient color contrast
* Alt text for meaningful images

Never use:

```html
<div onClick={...}>
```

when a button is appropriate.

---

# 34. SEO

Even though the site is static, SEO fundamentals are important.

Each page should have:

* Meaningful `<title>`
* Meta description
* Proper heading structure
* Semantic HTML
* Descriptive URLs
* Image alt text
* Open Graph metadata where appropriate

Use keywords naturally.

Do not keyword-stuff content.

---

# 35. Performance

Performance is a priority.

Avoid:

* Huge JavaScript bundles
* Unnecessary dependencies
* Excessive animation libraries
* Large images
* Blocking resources
* Unnecessary re-renders

Use:

* Lazy loading
* Code splitting where appropriate
* Optimized images
* CSS transforms for animation
* GPU-friendly properties
* Efficient event listeners

Prefer animating:

```text
transform
opacity
```

Avoid repeatedly animating expensive layout properties such as:

```text
width
height
top
left
margin
```

when transform can achieve the same result.

---

# 36. Animation Performance

Animations should generally use:

```css
transform
opacity
```

Avoid expensive scroll handlers.

Prefer:

* Intersection Observer
* Framer Motion scroll utilities
* requestAnimationFrame where genuinely necessary

Do not attach expensive calculations to every scroll event.

---

# 37. Avoid Layout Shift

Images should reserve their required space.

Avoid content jumping during page load.

Use:

```html
width
height
```

or aspect-ratio containers.

Fonts should also be loaded carefully to reduce layout shifts.

---

# 38. Buttons

Create a reusable Button component.

Example:

```tsx
<Button variant="primary">
  Start a Project
</Button>
```

Possible variants:

```text
primary
secondary
outline
ghost
dark
light
```

Do not create separate components such as:

```text
HeroButton
FooterButton
ContactButton
```

unless their behavior is genuinely different.

---

# 39. Cards

Cards should have consistent foundations.

Use shared patterns for:

* Radius
* Border
* Shadow
* Padding
* Hover behavior

But do not force every section into cards.

Sometimes strong typography and whitespace are better.

---

# 40. Navigation

The navbar should feel premium and intentional.

Possible behavior:

```text
Initial state
↓
Transparent / integrated with hero

Scroll
↓
Compact navigation
↓
Background / blur
↓
Subtle shadow or border
```

The transition should be smooth.

Do not make the navbar excessively large.

---

# 41. CTA Strategy

Use clear calls to action.

Primary CTA examples:

```text
Start a Project
Let's Talk
Grow Your Business
Book a Strategy Call
Get Started
```

Secondary CTA:

```text
View Our Work
Explore Services
```

Do not use weak generic CTAs everywhere.

CTA hierarchy must be obvious.

---

# 42. Conversion-Focused Sections

Recommended homepage flow:

```text
Navbar
↓
Hero
↓
Trust / Metrics
↓
Services
↓
Why Mandis Digital
↓
Featured Work
↓
Process
↓
Results / Testimonials
↓
Industries / Expertise
↓
FAQ
↓
Final CTA
↓
Footer
```

Adjust the structure when the actual content requires it.

Do not add sections merely to make the page longer.

---

# 43. Social Proof

Social proof can include:

* Client logos
* Testimonials
* Project results
* Certifications
* Years of experience
* Campaign metrics
* Industries served

Never fabricate:

* Client names
* Reviews
* Revenue
* Conversion rates
* Campaign results
* Certifications

Use only verified/project-provided information.

---

# 44. Content Data

Repeated content should be stored in data files.

Example:

```ts
export const services = [
  {
    id: "seo",
    title: "SEO",
    description: "...",
  },
];
```

Then render:

```tsx
{services.map((service) => (
  <ServiceCard
    key={service.id}
    {...service}
  />
))}
```

Avoid repeating identical JSX structures manually.

---

# 45. TypeScript

TypeScript should be used properly.

Avoid:

```ts
any
```

unless there is a genuinely unavoidable reason.

Define interfaces/types for:

* Services
* Projects
* Testimonials
* FAQs
* Navigation items
* Component props

Example:

```ts
interface Service {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}
```

---

# 46. State Management

Do not introduce Redux.

Most state should be local React state.

Use:

```text
useState
useReducer
useContext
```

only when actually needed.

Examples of local state:

* Mobile menu
* FAQ accordion
* Hover state
* Modal
* Active navigation item
* Animation state

Do not create global state for simple UI behavior.

---

# 47. Custom Hooks

Create hooks when logic is genuinely reusable.

Good:

```text
useMediaQuery()
useReducedMotion()
useScrollProgress()
useIsMobile()
```

Avoid:

```text
useEverything()
useMarketingWebsite()
useGlobalUIManager()
```

Hooks should have one clear responsibility.

---

# 48. Constants

Avoid scattering repeated strings.

Use constants for:

* Navigation items
* Social links
* Contact details
* Service categories
* Animation configuration
* Breakpoints where appropriate

Example:

```ts
export const NAV_ITEMS = [
  {
    label: "Services",
    href: "#services",
  },
];
```

---

# 49. External Links

Social media and external links should:

* Use correct URLs
* Open in a new tab when appropriate
* Use `rel="noopener noreferrer"` when opening a new tab
* Have accessible labels

Never invent URLs.

Use placeholders only when clearly marked as placeholders.

---

# 50. Forms

If a contact form is included but there is no backend:

Do not pretend that form submissions are actually stored.

Use one of:

* `mailto:`
* External form provider
* Clearly configured static form endpoint
* Demo-only behavior clearly indicated

Do not implement fake success messages that imply a real submission occurred.

---

# 51. Error Handling

Static websites should still handle UI failures gracefully.

Examples:

* Broken images
* Missing content
* Invalid external links
* Failed form submission
* Animation initialization failure

Decorative animation should never prevent the main content from rendering.

---

# 52. Progressive Enhancement

Core content must remain accessible even if:

* JavaScript fails
* Animation is disabled
* Reduced motion is enabled
* Slow network is present
* A visual effect fails

The website should still communicate:

```text
Who Mandis Digital is
What Mandis Digital does
Why visitors should care
How to contact Mandis Digital
```

---

# 53. Do Not Over-Engineer

Do not build complex infrastructure for a static website.

Avoid unnecessary:

* State managers
* API layers
* Service layers
* Abstraction layers
* Custom frameworks
* Complex animation engines
* Configuration systems

The goal is:

> Maximum visual impact with minimum unnecessary complexity.

---

# 54. File Size

Avoid giant files.

If a component becomes difficult to understand, extract:

* Child components
* Animation variants
* Data
* Constants
* Hooks

But do not split every tiny element into its own file.

The goal is readability.

---

# 55. Naming

Use clear names.

Good:

```text
ServiceCard
ProjectCard
HeroSection
SectionHeading
MobileMenu
AnimatedHeading
```

Bad:

```text
Box1
SectionThing
MagicComponent
TestComponent
NewCard
```

Names should explain the purpose of the component.

---

# 56. CSS Rules

Avoid excessive inline styles.

Prefer:

* Tailwind utility classes
* CSS modules
* Global design tokens
* Reusable CSS classes

Do not duplicate large blocks of CSS.

Use CSS variables for design tokens.

---

# 57. Z-Index

Avoid random z-index values.

Do not create:

```css
z-index: 999999;
```

unless there is a specific reason.

Maintain a logical stacking system.

Example:

```text
base
content
header
dropdown
modal
cursor
```

---

# 58. Dark / Light Sections

If the design uses contrasting sections, transitions should feel intentional.

For example:

```text
Light Hero
↓
Dark Services
↓
Light Work
↓
Dark CTA
```

Do not alternate backgrounds randomly.

Color transitions should support the storytelling structure.

---

# 59. Visual Rhythm

The page should have visual rhythm.

Combine:

* Large typography
* Dense information
* Whitespace
* Images
* Motion
* Grid layouts
* Full-width sections
* Compact sections

Avoid making every section look identical.

---

# 60. Advanced Visual Effects

Advanced effects are encouraged when appropriate.

Potential effects:

```text
Parallax
Text splitting
Character reveal
Word reveal
Image masking
Scroll-linked transformations
Gradient animation
Noise overlay
Magnetic buttons
Cursor interactions
Horizontal scrolling
Sticky storytelling
Card stacking
3D-like perspective
Glow effects
Marquee
Clip-path reveals
```

However:

> Never sacrifice usability or performance for visual effects.

---

# 61. Text Animation

Text animations should remain readable.

Good:

```text
Fade
Slide
Mask reveal
Word stagger
Character stagger
Blur → sharp
```

Avoid:

```text
Random character movement
Excessive bouncing
Unreadable distortion
Rapid flashing
```

The final text should settle quickly.

---

# 62. Image Reveal

Premium image reveals can use:

```text
Clip-path
Scale
Opacity
Mask
Slide
Parallax
```

Example:

```text
Image container
↓
Mask expands
↓
Image reveals
↓
Subtle hover movement
```

Keep the effect smooth and lightweight.

---

# 63. Scroll Progress

A subtle page scroll indicator may be used.

Example:

```text
──────────────────────
██████████░░░░░░░░░░░
```

Keep it visually subtle.

Do not allow it to interfere with navigation.

---

# 64. Loading Experience

If a loading screen is used, keep it short.

Avoid:

```text
10-second intro
```

Prefer:

```text
Brand mark
↓
Simple reveal
↓
Website
```

Do not delay meaningful content unnecessarily.

---

# 65. SEO Content Structure

Homepage should establish strong topical relevance around:

```text
Digital Marketing
Digital Marketing Agency
SEO
Performance Marketing
Social Media Marketing
Web Development
Brand Growth
Lead Generation
```

Use location-specific keywords only when genuinely relevant to Mandis Digital's target market.

Avoid keyword stuffing.

---

# 66. Footer

The footer should contain:

* Mandis Digital branding
* Navigation
* Services
* Contact information
* Social links
* Legal links if required
* Copyright

The footer should feel like a designed section, not an afterthought.

---

# 67. Browser Compatibility

Verify the website in modern:

* Chrome
* Firefox
* Safari
* Edge

Pay particular attention to:

* `backdrop-filter`
* CSS animations
* sticky positioning
* viewport behavior
* mobile Safari
* font rendering

Provide graceful fallbacks when appropriate.

---

# 68. Mobile Performance

Mobile performance is especially important.

On mobile:

* Reduce decorative animations
* Reduce particle counts
* Disable custom cursor
* Simplify parallax
* Reduce blur-heavy effects
* Avoid unnecessary video backgrounds
* Avoid expensive scroll calculations

The mobile experience should feel intentionally designed rather than simply compressed.

---

# 69. Accessibility + Animation

Animation must never:

* Prevent navigation
* Hide important information
* Trap focus
* Make text unreadable
* Cause excessive motion
* Prevent keyboard interaction

Always maintain functional accessibility.

---

# 70. Testing Checklist

Before completing a section, verify:

```text
□ Desktop layout
□ Tablet layout
□ Mobile layout
□ Keyboard navigation
□ Hover states
□ Focus states
□ Reduced motion
□ Broken image behavior
□ Text overflow
□ Horizontal overflow
□ Animation performance
□ CTA functionality
□ External links
□ Typography
□ Color contrast
□ Section spacing
```

---

# 71. Visual QA

Before considering the website complete, inspect the page visually.

Check for:

* Uneven spacing
* Misaligned sections
* Inconsistent typography
* Excessive empty space
* Crowded areas
* Broken responsive layouts
* Animation glitches
* Unexpected horizontal scrolling
* Poor mobile navigation
* Inconsistent button sizes
* Inconsistent border radius
* Weak visual hierarchy

Fix visual inconsistencies before adding more features.

---

# 72. Code Quality Checklist

Before completing a feature:

```text
□ Component has one clear responsibility
□ Existing components were checked first
□ No unnecessary duplicate component
□ No unnecessary dependency
□ TypeScript types are defined
□ No unnecessary any
□ Repeated content is data-driven
□ Animations are reusable where appropriate
□ Responsive behavior is implemented
□ Accessibility is maintained
□ Performance has been considered
□ SEO structure is correct
□ No console errors
□ No unused imports
□ No dead code
```

---

# 73. Animation Quality Checklist

Before completing an animated section:

```text
□ Animation has a purpose
□ Timing feels natural
□ No excessive movement
□ No layout shift
□ Transform/opacity preferred
□ Reduced motion supported
□ Mobile behavior considered
□ Animation does not block content
□ Scroll performance is smooth
□ Hover interactions are subtle
□ Animation is reusable when repeated
```

---

# 74. Content Integrity

Never fabricate business information.

Do not invent:

* Client names
* Testimonials
* Certifications
* Awards
* Revenue figures
* Campaign statistics
* Years of experience
* Team members
* Partnerships
* Case-study results

If information is unavailable, use neutral placeholder content that is clearly identifiable during development.

---

# 75. Brand Consistency

Every page should feel like the same brand.

Maintain consistency in:

```text
Typography
Color
Buttons
Spacing
Motion
Icons
Border radius
Photography
Illustration
Voice
```

Do not allow individual pages to develop completely different visual styles.

---

# 76. Avoid Generic AI Design

The website must not look like an automatically generated template.

Avoid predictable patterns such as:

```text
Gradient background
+
Three identical cards
+
Huge centered heading
+
Random blobs
+
Generic testimonials
```

Instead, build a distinctive visual system.

Use intentional:

* Composition
* Typography
* Motion
* Grid
* Whitespace
* Imagery
* Brand personality

The final result should look designed, not generated.

---

# 77. User Experience Principle

Always ask:

> Does this make the visitor's experience better?

If the answer is no, remove it.

This applies to:

* Animation
* Sections
* Cards
* Buttons
* Decorative elements
* Popups
* Effects
* Content

More features do not automatically create a better website.

---

# 78. Development Workflow

For every task:

### Step 1

Inspect the existing project.

### Step 2

Understand:

* Current architecture
* Existing components
* Existing styling
* Existing animations
* Existing dependencies

### Step 3

Reuse existing code.

### Step 4

Design the component structure.

### Step 5

Implement responsive layout.

### Step 6

Implement visual styling.

### Step 7

Add animation.

### Step 8

Optimize animation and assets.

### Step 9

Test accessibility.

### Step 10

Test mobile and desktop.

### Step 11

Perform visual QA.

### Step 12

Remove unnecessary code.

---

# 79. Priority When Requirements Conflict

When priorities conflict, use:

```text
1. Functionality
2. Accessibility
3. User experience
4. Responsive behavior
5. Performance
6. Visual quality
7. Animation
8. Code elegance
```

Never sacrifice accessibility or usability for animation.

Never sacrifice performance for decorative effects.

---

# 80. Final Golden Rule

Before writing new code:

```text
SEARCH
↓
UNDERSTAND
↓
REUSE
↓
EXTEND
↓
CREATE ONLY IF NECESSARY
```

For design:

```text
MESSAGE
↓
HIERARCHY
↓
LAYOUT
↓
TYPOGRAPHY
↓
VISUAL SYSTEM
↓
MOTION
↓
POLISH
```

For animation:

```text
PURPOSE
↓
SUBTLE MOTION
↓
PERFORMANCE
↓
ACCESSIBILITY
↓
POLISH
```

The ultimate goal is:

> **Build Mandis Digital as a premium, memorable, conversion-focused digital agency website that feels handcrafted, performs exceptionally, and uses advanced motion design without sacrificing usability.**
