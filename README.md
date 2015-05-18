#DOODLE: fractal generator
A web app for defining and rendering line-based fractals using javascript

##How To Use:
Left Textarea: box where code is written
Load Button: loads code into the renderer
Save Button: save code to local storage
Delete Button: delete fractal from cookies

"X" Button: clear/reset fractal
  -must be called after loading
"<" Button: go back an generation
">" Button: render next generation
#: number generation currently displayed


##Code:
Code is divided into two sections: init and loop

###Init
The init section(everything before the "//loop")
called only once before the fractal is rendered

####Kernal Function:
you must define a kernal using the kernal function "kernal([ LIST OF LINES ])"
This function will define the starting lines or "kernal" of the fractal
Multible calls to kernal() will replace the kernal, but leave the origional kernal lines drawn
lines passed into kernal() are of the form [[ startx , starty ],[ endx , endy ]] 
where the coordiate values go from [0,0] (bottom left corner) to [1000,1000] (top right corner)

Standard javascript variable declarations are allowed in the kernal, 
but do not use "var" if you wish these values to be accessable in the loop

The placement of "//clear" at the top of the function will tell the render to clear the canvas
before each generation, getting rid of the old lines

###Loop
The loop section(everything after "//loop")

called once for every line drawn in the previous generation 
(or kernal if it is the first gen.)

####Draw Function:
draws a line to the canvas in a coordinate space based of the line for which...
this iteration of the loop function is being called AKA. current iterations line

first call must provide a start and end coordinate 
susequent calls may provide only the end coordinate and the previous end coor. is used as the start coor.

coordinates are passed as [[ startx , starty ],[ endx , endy ]]
where (0,0) is the start point of the current iterations line
and (1,0) is the end point of the current iterations line 
and (0,1) is the length of the current iterations line
- up being a direction perpendicular to the current iterations line


In order to make sure variables used in your fractal code do not have any naming conflicts with the code which runs the page, prefix all variables with an underscore example) "_height = 10;" 
