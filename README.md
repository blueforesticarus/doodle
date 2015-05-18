# doodle
a little fun with fractals and javascript

##HOW TO USE:

###loop
all code above "//loop" is recursive code
each iteration this code will be called for each line you create
a call to line takes four parameters (x1, y1,x2,y2)
the line function will draw a line from the point one to point two, in a coordinate space such that the current line (of the previous iteration) goes from (0,0) to (1,0)

###init
code before "//loop" is init code
init code is only called when you clear the canvas (reseting the doodle) or load new code with an empty canvas
the kernal function will set the starting lines, calling it multible times will overwrite the previous lines (wont be used for calculating first iteratio) but leave them draw

###flags
the "//clear" flag anywhere in the code will cause the lines of each iterationto be cleared before drawing the next iteration

###running
after changing code in textarea press load button to load you your script
press clear to get rid of current fractal
press render button to render next iteration
 
--unfortunately you cannot zoom in as of yet 
