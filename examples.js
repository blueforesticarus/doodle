//PRESETS


presets = [];

presets.push([
"crab",

`
//clear
dir=-1;
kernal([[[400,500],[600,500]]]);

//loop
draw([0,0],[1/2,1/2]);
draw([1,0]);
dir*=-1;
`   
]);

presets.push([
"dragon",

`
//clear
dir=-1;
kernal([[[300, 500], [700, 500]]]);

//loop
draw([0,0],[1/2,dir*1/2]);
draw([1,0]);
dir*=-1;
`
]);

presets.push([
"spiral",

`
//clear
dir=-1;
kernal([
    [[400,500],[600,500]],
    [[600,500],[400,500]],
]);

//loop
draw([0,0],[1/2,1/2]);
draw([1,1]);
dir*=-1;
`
]);

presets.push([

"snowflake",

`
kernal([ [[0,500],[1000,500]] ]);

//loop
draw([0, 0], [1 / 3, 0]);
draw([1 / 2, Math.sqrt(3) / 6]);
draw([2 / 3, 0]);
draw([1, 0]);
`
]);


presets.push([

"sierpinski",

`
h= 300*Math.sqrt(3);

//draw other sides
kernal([
   [[800,150],[500,h+150]],
   [[500,h+150],[200,150]]
]);

//overwrite kernel to prevent redundancy
kernal([ [[200,150],[800,150]]]);

//loop
draw([1/2, 0], [1 / 4, Math.sqrt(3) / 4]);
draw([3/ 4, Math.sqrt(3) / 4],[1/2, 0]);
draw([1 / 4, Math.sqrt(3) / 4],[3/ 4, Math.sqrt(3) / 4]);
`
]);

presets.push([

"circuit",

`
//clear
kernal([ [[0,500],[1000,500]] ]);

//loop
draw([0, 0], [1 / 3, 0]);
draw([1/3,1/3]);
draw([2 / 3, 1/3]);
draw([1/3,-1/3],[2 / 3, -1/3]);
draw([2 / 3, 0]);
draw([1, 0]);
`
]);


presets.push([

"smoke",

`
//clear
h= 300*Math.sqrt(3);

//draw other sides
kernal([
   [[800,150],[500,h+150]],
   [[500,h+150],[200,150]]
]);

//overwrite kernel to prevent redundancy
kernal([ [[200,150],[800,150]]]);

//loop
if(l%3==0){
    draw([0, 0], [1/2, -1/10]);
    draw([1/4, 0]);
    draw([0, 0]);

    draw([1/4, 0], [1/2, -1/10]);
    draw([3/4, 3/5]);
    draw([1/4, 0]);

    draw([1/2, -1/10],[1,0]);
    draw([3/4, 3/5]);
    draw([1/2, -1/10]);

    draw([1/4, 0], [3/4, 3/5]);
    draw([1/2,4/5]);
    draw([1/4, 0]);
}
`
]);

/*
trees:


start = 1/3;
offset = 1/20;
stop = 2/3;
spread = 1/4;
s_ = 1;
l_ = 1;
f_ = -.999;


kernal([ [[500,200],[500,800]]]);

//loop
draw([start-offset,0], [stop-offset,s_*spread]);
draw([start+offset,0], [stop+offset,-1*s_*spread]);

draw([start,0], [l_,0]);
s_*=f_;


start = 1/4;
stop = 2/3;
spread = 1/3;

kernal([ [[500,200],[500,800]]]);

//loop
draw([start,0], [stop,spread]);
draw([start,0], [stop,-spread]);
draw([start,0], [1,0]);



kernal([
   [[500,100],[500,500]],
]);

//loop
draw([1/2, 0], [1, 1/2]);
draw([1/4, 0], [1, -1/4]);
draw([3/5, 0], [1, 1/4]);

kernal([
   [[500,100],[500,500]],
]);

//loop
draw([1/2, 0], [1, 1/2]);
draw([1/4, 0], [1, -1/4]);

kernal([
   [[500,100],[500,500]],
]);

//loop
draw([1/3, 0], [1, 1/4]);
draw([1/3, 0], [1, -1/4]);

kernal([
   [[500,100],[500,500]],
]);

a1= Math.random()/2;
b1= Math.random()/2;
c1= Math.random()/2;
d1= Math.random()/2;

//loop
draw([a1, 0], [1, c1]);
draw([b1, 0], [1, -d1]);

spiral

kernal([
   [[200,300],[200,700]]
]);


//loop
if(l==0){
draw([0, -1/10], [.95, .01]);
draw([0, 0], [0,1]);
}
if(l==1){
draw([1, 0], [1,1]);
}
if(l==2){
draw([1, 0], [1,1]);
}

*/

/*
jewl:

        //clear
    dir=-1;
    kernal([
[[400,500],[600,500]],
[[500,400],[500,600]],
[[600,500],[400,500]],
[[600,500],[400,500]]
]);

    //loop
    draw([0,0],[1/2,1/2]);
    draw([1,0]);
    dir*=-1;

eye:

        //clear
    dir=-1;
    kernal([
[[400,400],[600,400]],
[[600,400],[600,600]],
[[600,600],[400,600]],
[[400,600],[400,400]]
]);

    //loop
    draw([0,0],[1/2,1/2]);
    draw([1,0]);
    dir*=-1;


    spider:

        //clear
    dir=-1;
    kernal([[[400,300],[600,300]],[[600,700],[400,700]]]);

    //loop
    draw([0,0],[1/2,1/2]);
    draw([1,0]);
    dir*=-1;
*/