# Grid Line Dividers

A lightweight library for adding divider lines to CSS grid layouts. This library automatically adds dividing lines between grid items, adjusting to your grid's gap and layout.

## Examples

See it in action:
[View Demo on CodePen](https://codepen.io/philhoyt/pen/YzmxxxJ)

## Installation

1. Include the CSS file in your HTML:
	```html
	<!-- Development version -->
	<link rel="stylesheet" href="build/grid-lines.css">
	<!-- Production version -->
	<link rel="stylesheet" href="build/grid-lines.min.css">
	```

2. Include the JavaScript file before closing body tag:
	```html
	<!-- Development version -->
	<script src="build/grid-lines.js"></script>
	<!-- Production version -->
	<script src="build/grid-lines.min.js"></script>
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

	// With custom options
	const gridLines = new GridLines({
		containerSelector: '.my-container',
		removeLastItemDivider: true
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
| `removeLastItemDivider` | boolean | false | Remove the divider after the last item in the grid if not last in row |

## Browser Support

Works in all modern browsers that support:
- CSS Grid
- CSS Custom Properties (CSS Variables)
- CSS Pseudo-elements
