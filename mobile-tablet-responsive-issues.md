# Mobile and Tablet Responsive Issues Report

Site inspected locally in the in-app Browser at `http://127.0.0.1:8080/index.html`.

Tested viewports:
- Mobile portrait: `390 x 844`
- Small mobile portrait: `375 x 667`
- Tablet portrait: `768 x 1024`

## Summary

The main responsive problems are in the Programme V3 tabs/cards, featured speaker cards, executive article cards, and team cards. On mobile, several grids still render as two columns, which makes cards too narrow. This causes headings, names, roles, and article titles to wrap poorly, sometimes breaking words or single names across multiple lines. Large image blocks and fixed-height cards also dominate the viewport.

The floating `Download Programme` and back-to-top buttons cover card content on both mobile and tablet while scrolling.

## High Priority Issues

### 1. Speaker cards stay two columns on mobile

Observed issue:
- At mobile width, the featured speaker grid renders two cards per row.
- Each card becomes too narrow.
- Speaker names and roles wrap badly. Example: `Willson Chivhanga` and role labels break into stacked fragments.
- Portrait/media areas are very tall relative to the available width.

Likely source:
- `index.html:369` has an inline `grid-template-columns:repeat(4,minmax(0,1fr))`.
- `assets/css/006_home_speaker_profile_styles.css:2` explicitly forces `#csi-awards-exp-speakers .speakers-grid` to `repeat(2, minmax(0, 1fr))` at `max-width:768px` and also at `max-width:480px`.
- Later shared responsive rules try to force `.speakers-grid` to one column, but the more specific section rule wins.

Recommended fix:
- Make speaker cards `1fr` on phone widths.
- Keep two columns only for tablet widths where card width remains comfortable.

### 2. Executive article cards stay two columns on mobile

Observed issue:
- The Insights / Executive Articles grid also remains two columns on mobile.
- Long article titles become tall, cramped, and hard to scan.
- Text and card actions feel squeezed into narrow columns.

Likely source:
- `index.html:435` has an inline three-column grid.
- `assets/css/007_home_styles_02.css:2` forces `#csi-indaba-insights-v2 .insights-grid` to two columns at both `max-width:768px` and `max-width:480px`.

Recommended fix:
- Use one column below mobile breakpoint, likely `max-width:640px` or `max-width:600px`.
- Use two columns for tablet only.

### 3. Team cards are too large and remain two columns in the tested mobile view

Observed issue:
- Team cards show as two columns in the tested mobile browser view.
- The cards use large portrait imagery and feel oversized in the viewport.
- Names and job titles sit over images, so narrow cards make text harder to read.

Likely source:
- `index.html:521` uses an inline three-column grid.
- Each team card uses inline `height:420px` at `index.html:522` and following cards.
- `assets/css/008_home_styles_03.css:2` keeps the team grid at two columns up to `768px`, then switches to one column only at `480px`.

Recommended fix:
- Use one column on phones and two columns on tablets.
- Replace fixed `height:420px` with responsive sizing such as `aspect-ratio` plus a capped `min-height`/`max-height`.

### 4. Programme V3 tabs are clipped/cramped on mobile

Observed issue:
- The Programme V3 tab row is cramped on mobile.
- Only some tabs are visible at once; the row looks clipped rather than intentionally scrollable.
- The active tab and adjacent tabs compete with the floating download button lower on the screen.

Likely source:
- `index.html:266` defines the tab group.
- `assets/css/005_home_programme_v3_styles_03.css:650-660` changes `.csi-programme-v3-nav` to flex/wrap at mobile sizes.
- Other Programme V3 rules also create horizontal scrolling behavior, so the nav behavior is inconsistent.

Recommended fix:
- Choose one mobile pattern: either a wrapped two-row tab group or a clear horizontal scroll strip.
- If horizontal scrolling is used, add visible affordance, consistent tab widths, and avoid clipped final tabs.

### 5. Floating buttons cover card content

Observed issue:
- The `Download Programme` pill and back-to-top button cover speaker, insight, team, and footer content while scrolling.
- On mobile it overlaps lower card text/actions.
- On tablet it covers the right side of cards and the footer.

Likely source:
- Floating controls are fixed to the bottom-right in the home Programme V3 styles.

Recommended fix:
- On mobile, reduce the button footprint, stack it lower, or hide/minimize the text label after initial scroll.
- Add bottom padding to sections or offset the floating controls so they do not sit over interactive card content.

## Medium Priority Issues

### 6. Image/media blocks are too dominant

Observed issue:
- Speaker portrait blocks and team portraits take up most of the mobile viewport.
- At tablet size, the two-column speaker layout is usable, but the image blocks are still very tall.

Likely source:
- Speaker card media has large fixed/proportional height behavior.
- Team cards use fixed `420px` height.

Recommended fix:
- Use responsive `aspect-ratio`, such as `4 / 5` for portraits.
- Cap media height on tablet and phone.

### 7. Over-broad responsive hardening can conflict with section-specific rules

Observed issue:
- The CSS contains generic responsive rules for all `[style*="grid-template-columns"]`, plus repeated section-specific grid overrides.
- This makes it hard to predict which rule wins.

Likely source:
- Shared rules in `assets/css/005_home_programme_v3_styles_03.css:609-637`.
- More specific one-line overrides in:
  - `assets/css/006_home_speaker_profile_styles.css:2`
  - `assets/css/007_home_styles_02.css:2`
  - `assets/css/008_home_styles_03.css:2`

Recommended fix:
- Replace broad `[style*="grid-template-columns"]` rules with named section selectors.
- Keep each section's responsive behavior in one place.
- Avoid inline grid templates when the layout needs responsive control.

### 8. Iframe shell creates a separate scrolling surface

Observed issue:
- The page is rendered inside `#clientFrame`, and the iframe has its own full-height scrolling surface.
- This creates a mobile experience with a persistent iframe scrollbar and can make section jumps / hash scrolling less reliable.

Likely source:
- `index.html:2` defines `<iframe id="clientFrame">`.
- `assets/css/001_site_shell_site_iframe_shell.css` sets the iframe to `100vh / 100svh / 100dvh`.
- `assets/js/060_site_shell_site_iframe_router.js` injects template HTML into `frame.srcdoc`.

Recommended fix:
- Prefer rendering the active template into a normal container instead of an iframe, if possible.
- If the iframe must stay, test hash scrolling and fixed elements inside the iframe separately on real mobile browsers.

## Priority Fix Order

1. Set speaker and insight grids to one column on phone widths.
2. Make team cards one column on phone widths and remove fixed `420px` mobile height.
3. Resolve Programme V3 tab behavior into one consistent mobile pattern.
4. Reposition or minimize floating buttons on small screens.
5. Consolidate responsive CSS so section-specific rules do not fight shared hardening rules.

