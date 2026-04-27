# Team and Events UI Measurements

Source file: `src/pages/Team.tsx`

## Spacing Measurements

- **Heading to content below (cards grid):**
  - Tailwind class: `mt-10`
  - Pixel value: `40px`
  - Applied on: section cards grid container (`div` with `grid`)

- **Between boxes/cards (horizontal and vertical):**
  - Tailwind class: `gap-5`
  - Pixel value: `20px`
  - Applied on: section cards grid container

- **Above and below section divider line** (e.g., between Leadership and Executive Board):
  - Divider element: `div` with `border-t border-border` (no own margin/padding)
  - Spacing is created by section container padding:
    - Tailwind class: `py-16` -> `64px` top + `64px` bottom (default/mobile)
    - Tailwind class: `lg:py-20` -> `80px` top + `80px` bottom (large screens)
  - Effective visual spacing around divider:
    - Default/mobile: `64px` above + `64px` below = `128px` total
    - Large (`lg+`): `80px` above + `80px` below = `160px` total

## Events Page Measurement (Adapt-a-Thon DOM Target)

Source context: `src/pages/Events.tsx`

- **DOM target:**
  - Path: `div#root > div.flex min-h-.creen flex-col bg-background > main#main > div > div[0] > section#adapt-a-thon > div.container-wide py-16 lg:py-20 > article.grid gap-12 > div`
  - Element content starts with: `FOUNDATIONAL PROGRAMMING Adapt-a-Thon ...`
  - React component context: `SiteLayout`

- **Captured viewport measurement:**
  - `top: -70px`
  - `left: 24px`
  - `width: 830px`
  - `height: 726px`

- **Mapped layout tokens and expected spacing behavior:**
  - Horizontal container alignment comes from `container-wide` (`px-6` default = `24px`, `lg:px-8` = `32px`)
  - Section vertical padding comes from `py-16 lg:py-20` (`64px` / `80px`)
  - Inner article spacing comes from `grid gap-12` (`48px` gap between grid items)

- **Notes:**
  - Negative `top` indicates the element was measured while scrolled past the top of the viewport; this is a viewport-relative capture value, not document flow spacing.

## Events Page Measurements (Mini Make-a-Thon)

Source context: `src/pages/Events.tsx`

- **DOM target (text column container):**
  - Path: `div#root > div.flex min-h-.creen flex-col bg-background > main#main > div > div[1] > section#mini-make-a-thon > div.container-wide py-16 lg:py-20 > article.grid gap-12 lg:grid-col.-2 lg:item.-.tart > div > div`
  - Captured viewport box: `top: 188px`, `left: 24px`, `width: 830px`, `height: 809px`
  - Horizontal alignment token: `container-wide` -> `px-6` (`24px`) default, `lg:px-8` (`32px`) on large screens

- **Section and layout spacing:**
  - Section wrapper: `py-16 lg:py-20` -> `64px` vertical padding default, `80px` on large screens
  - Mini section article container: `grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-x-12 lg:gap-y-6`
    - Default gap: `24px`
    - Large-screen horizontal gap: `48px`
    - Large-screen vertical gap: `24px`
    - Two-column split starts at `lg`
  - Paragraph-to-next-block spacing parity target:
    - Adapt-a-Thon uses `mt-6` between intro copy and `AdaptAThonPhases` card -> `24px`
    - Mini Make-a-Thon now matches with `24px` vertical spacing between the text block container and the stats grid (via `gap-y-6`)

- **Eyebrow, heading, and intro text:**
  - Eyebrow (`.eyebrow`):
    - Font size: `text-xs` -> `12px`
    - Tracking: `tracking-[0.2em]`
    - Icon gap: `gap-2` -> `8px`
    - Icon size: `h-3.5 w-3.5` -> `14px x 14px`
  - Heading (`.display mt-3 text-balance`):
    - Top margin from eyebrow: `mt-3` -> `12px`
    - Font size scale: `text-4xl` (`36px`) / `sm:text-5xl` (`48px`) / `lg:text-6xl` (`60px`)
    - Line-height: `leading-[1.05]`
  - Intro paragraph (`mt-5 text-lg leading-relaxed`):
    - Top margin from heading: `mt-5` -> `20px`
    - Font size: `text-lg` -> `18px`
    - Line-height: `leading-relaxed` (~`1.625`)

- **Body text and media spacing:**
  - Supplemental paragraph: `mt-4 text-base leading-relaxed`
    - Margin above: `16px`
    - Font size: `16px`
  - Mobile inline media block: `relative mt-6 lg:hidden`
    - Margin above intro: `24px`
  - Main lower image block: `mt-8 ...`
    - Margin above stats cards: `32px`
    - Margin below image to upcoming card: also `32px` (`mt-8` on upcoming card), matching top and bottom spacing around image

- **Stats cards (Mini Make-a-Thon):**
  - Stats grid: `grid gap-4 sm:grid-cols-3`
    - Horizontal/vertical gap: `16px`
    - 3 columns at `sm` and up
  - Card container: `h-[102px] rounded-xl border border-border bg-card p-4 shadow-card`
    - Height: `102px`
    - Corner radius: `rounded-xl` -> `12px`
    - Padding: `p-4` -> `16px`
    - Border width: `1px`
  - Stat value text: `text-2xl` -> `24px`
  - Stat label text: `mt-1 text-xs uppercase tracking-wider`
    - Top margin from value: `4px`
    - Font size: `12px`

- **Images and corner radii:**
  - Image frame block: `overflow-hidden rounded-2xl border ...`
    - Corner radius: `rounded-2xl` -> `16px`
    - Border width: `1px`
  - Mobile hero image: `aspect-[16/9] w-full object-cover`
  - Desktop-side image in two-column layout: `aspect-[4/3] w-full rounded-2xl object-cover`
  - Accent glow behind image: `absolute -inset-3 rounded-[1.75rem] ... blur-2xl`
    - Outset around image: `12px`
    - Glow corner radius: `1.75rem` (`28px`)

- **Upcoming card below image:**
  - Container: `mt-8 rounded-2xl ... p-5`
    - Top margin from image: `32px`
    - Corner radius: `16px`
    - Padding: `20px`
  - Title spacing:
    - Eyebrow to title: `mt-2` -> `8px`
    - Title to metadata row: `mt-3` -> `12px`
  - Metadata row gaps: `gap-x-6 gap-y-2`
    - Horizontal chip gap: `24px`
    - Vertical chip gap: `8px`
