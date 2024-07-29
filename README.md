# Layout instructions

## Step 1. Preparation.
The first step is to install a convenient code editor on your computer and create a project structure: a file index.html, a folder csswith files style.cssand  normalize.css, as well as folders for images and fonts. And that's it, you can start the layout!


## Stage 2. Marking.
At this stage, you need to create the page layout in the file index.html. You don't have to connect the images yet, we'll connect them at the stage of working with graphics.

## Step 3. Basic styling.
At this stage we will add basic styles to the page. Styles for the placement of large blocks can be omitted for now.

## Stage 4. Working with graphics.
The main task of this stage is to export everything necessary from the layout to Figma and connect images in the markup. It is recommended to collect SVG images into a sprite and connect them as the first element in  body. Decorative images can be exported, but there is no need to connect them yet.

## Stage 5. Grids.
We add large structural grids. The layout uses the desktop-first approach, that is, the site is primarily displayed correctly on large screen resolutions.

## Stage 6. Decorative elements.
Everything is ready to finish styling the entire page. We add small grids, connect custom fonts, background images and design the remaining decorative elements that have not been styled before.

## Stage 7. Adaptive grids and decorative elements.
Using media expressions, we add styles to adapt the layout to smaller resolutions.

## Stage 8. Adaptive graphics.
We include adaptive images in the markup and styles for different devices and screens with different pixel densities.

In HTML we use the element picture, with which we connect images for different screen resolutions, for screens with different pixel densities, as well as webp-versions of images for supporting browsers.

In CSS, we include images for screens with double pixel density and for different resolutions using media expressions.

## Step 9. Adding JavaScript.
We add JavaScript code that animates the slider, pop-ups, language switching block, menu, and also connects a polyfill for the tag <picture>, enables smooth scrolling to page anchors and adapts the table.