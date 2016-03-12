## Website Performance Optimization portfolio project

####Part 1: Optimization for PageSpeed Insights score for index.html
To get started:
1. Check out the repository
2. To inspect the site on your phone, you can run a local server
  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

3. Open a browser and visit localhost:8080
4. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```
5. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)
Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

Changes for the optimization:
- Reduce the size of pizzaria.jpg to 100px width and png file
- Inline css/style.css
- Make js link async
- Add a media query for print.css
- Add a media query for small screen
- Use Web Font Loader to load the Google webfont asynchronously
- Use Gulp to minify js, css, html and images

####Part 2-A: Optimization for 60 FPS
Changes:
- Modify updatePositions() with doing calcuations outside of loop.
- Use transform and translateX to optimize instead of style.left in for loop for background pizzas
- Modify from querySelectorAll to faster selectors when accessing DOM elements, such as _getElementById_ and _getElementsByClassName_ to speed up functions
- Calculate the pizza numbers showed in the screen instead of a fix number of 200 to reduce the iteration
- Modify CSS for .mover: Add will-change: transform and backface-visibility: hidden;

####Part 2-B: Optimization for changePizzaSizes slider
Changes:
- Use percentage of width to simply the whole calculation to reduce the loop janks