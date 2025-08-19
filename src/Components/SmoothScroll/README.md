# Smooth Scroll Components

This directory contains reusable smooth scroll components using Framer Motion for your Munoth Capital project.

## Components

### 1. SmoothScroll
A wrapper component that provides fade-in and slide-up animations.

```jsx
import { SmoothScroll } from './SmoothScroll';

<SmoothScroll>
  <div>Your content here</div>
</SmoothScroll>
```

### 2. StaggeredChildren
Provides staggered animations for lists and grids.

```jsx
import { StaggeredChildren } from './SmoothScroll';

<StaggeredChildren staggerDelay={0.1}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</StaggeredChildren>
```

### 3. FadeIn
Individual element fade-in with directional options.

```jsx
import { FadeIn } from './SmoothScroll';

<FadeIn direction="up" delay={0.2} duration={0.8}>
  <div>Your content</div>
</FadeIn>
```

### 4. ImageLoader
Professional image loading with skeleton states and smooth transitions.

```jsx
import { ImageLoader } from './SmoothScroll';

<ImageLoader 
  src="/path/to/image.jpg" 
  alt="Description"
  fallbackSrc="/fallback.jpg"
  loadingDelay={500}
/>
```

### 5. TextLoader
Skeleton loading for text content with smooth reveal animations.

```jsx
import { TextLoader } from './SmoothScroll';

<TextLoader loading={isLoading} skeletonLines={3}>
  <p>Your text content here</p>
</TextLoader>
```

### 6. PageTransition
Smooth page transitions for route changes.

```jsx
import { PageTransition } from './SmoothScroll';

<PageTransition initialDelay={0.2}>
  <div>Page content</div>
</PageTransition>
```

## Direction Options for FadeIn
- `"up"` - Slides up from bottom
- `"down"` - Slides down from top
- `"left"` - Slides in from right
- `"right"` - Slides in from left
- `"scale"` - Scales up from 0.8

## Usage Examples

### Navigation Bar
```jsx
<motion.div
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  {/* Your navigation content */}
</motion.div>
```

### Document Cards
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  {/* Your document grid */}
</motion.div>
```

### Interactive Elements
```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
  Click me
</motion.button>
```

### Modal Animations
```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.8, y: 50 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  exit={{ opacity: 0, scale: 0.8, y: 50 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
>
  {/* Modal content */}
</motion.div>
```

### Staggered List Items
```jsx
<motion.ul
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }}
>
  {items.map((item, index) => (
    <motion.li
      key={index}
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
      }}
    >
      {item}
    </motion.li>
  ))}
</motion.ul>
```

## Animation Properties

- **initial**: Starting state
- **animate**: Final state
- **whileInView**: State when element comes into view
- **whileHover**: State on hover
- **whileTap**: State when tapped/clicked
- **transition**: Animation timing and easing
- **viewport**: Controls when animations trigger

## Performance Tips

1. Use `viewport={{ once: true }}` for one-time animations
2. Keep animations under 1 second duration
3. Use `ease: "easeOut"` for natural feeling
4. Stagger animations with delays for better UX
