## Website Performance Optimization portfolio project

To get started, check out the repository, inspect the code,

####Part 1: Optimization for PageSpeed Insights score for index.html

- Reduce the size of pizzaria.jpg to 100px width and png file
- Inline css/style.css
- Make js link async
- Add a media query for print.css
- Add a media query for small screen
- Use Web Font Loader to load the Google webfont asynchronously
- Use Gulp to minify js, css, html and images

####Part 2: Optimization for 60 FPS

- Modify updatePositions() with doing calcuations outside of loop.
- Use transform and translateX to optimize instead of style.left in for loop for background pizzas
- Modify from querySelectorAll to faster selectors when accessing DOM elements, such as _getElementById_ and _getElementsByClassName_ to speed up functions
- Calculate the pizza numbers showed in the screen instead of a fix number of 200 to reduce the iteration
- Modify CSS for .mover: Add will-change: transform and backface-visibility: hidden;

####Part 2-B: Optimization for changePizzaSizes slider
- Use percentage of width to simply the whole calculation to reduce the loop janks