class GridLines {
	constructor(options = {}) {
		this.options = {
			containerSelector: '.gl-container',
			removeLastItemDivider: false,
			...options
		};
		
		// Initialize
		this.init();
		
		let resizeTimeout;
		window.addEventListener('resize', () => {
			if (resizeTimeout) {
				cancelAnimationFrame(resizeTimeout);
			}
			resizeTimeout = requestAnimationFrame(() => this.adjustGridLines());
		});
		
		// Trigger a resize event after initialization to solve for the initial grid size
		window.dispatchEvent(new Event('resize'));
	}
	
	init() {
		this.adjustGridLines();
	}
	
	adjustGridLines() {
		const containers = document.querySelectorAll(this.options.containerSelector);
		
		containers.forEach((container) => {
			const computedStyle = getComputedStyle(container);
			const gapValue = parseInt(computedStyle.gap);
			const columnsCount = computedStyle.gridTemplateColumns.split(" ").length;
			const halfGapValue = gapValue / 2;
			
			const items = Array.from(container.children);
			items.forEach((item) => {
				if (!item.classList.contains("gl-item")) {
					item.classList.add("gl-item");
				}
			});
			
			const rowCount = Math.ceil(items.length / columnsCount);
			
			container.style.padding = `${halfGapValue}px`;
			container.style.setProperty("--gl-gap", `${gapValue}px`);
			container.style.setProperty("--gl-half-gap", `${halfGapValue}px`);
			
			items.forEach((item, i) => {
				const isLastInRow = (i + 1) % columnsCount === 0;
				const isLastRow = i >= (rowCount - 1) * columnsCount;
				const isLastItem = i === items.length - 1;
				
				item.classList.remove("gl-last-in-row", "gl-last-row");
				if (isLastInRow || (isLastItem && this.options.removeLastItemDivider)) {
					item.classList.add("gl-last-in-row");
				}
				if (isLastRow) item.classList.add("gl-last-row");
			});
		});
	}
}