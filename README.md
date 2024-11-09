# Grid Lines

A lightweight library for adding divider lines to CSS grid layouts. This library automatically adds dividing lines between grid items, adjusting to your grid's gap and layout.

## Installation

1. Include the CSS file in your HTML:
	```html
	<link rel="stylesheet" href="grid-lines.css">
	```

2. Include the JavaScript file before closing body tag:
	```html
	<script src="grid-lines.js"></script>
	```

## Usage

1. Add the `gl-container` class to your grid container:
	```html
	<div class="gl-container">
		<div>Item 1</div>
		<div>Item 2</div>
		<div>Item 3</div>
	</div>
	```

2. Style your grid container with CSS Grid:
	```css
	.gl-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 4rem;
	}
	```

3. Initialize GridLines:
	```javascript
	// With default options (uses .gl-container)
	const gridLines = new GridLines();

	// Or with a custom container selector
	const gridLines = new GridLines({
		containerSelector: '.my-custom-container'
	});
	```

## Customization

You can customize the line appearance using CSS custom properties:

```css
:root {
	--gl-line-width: 2px;     /* Change line width */
	--gl-line-color: #cccccc; /* Change line color */
}
```

Or target specific containers:

```css
.my-container {
	--gl-line-width: 3px;
	--gl-line-color: red;
}
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `containerSelector` | string | '.gl-container' | CSS selector for grid containers |

## Browser Support

Works in all modern browsers that support:
- CSS Grid
- CSS Custom Properties (CSS Variables)
- CSS Pseudo-elements