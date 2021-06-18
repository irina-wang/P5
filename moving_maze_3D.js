

let angle = 0;
let w = 24;
let ma;
let maxD;

function setup(){
    createCanvas(500, 500,WEBGL);
    ma = atan(1/sqrt(2));
    maxD = dist(0, 0, 200, 200);
}   


function draw(){
    background(100);
    ortho(-400,400,-400,400,0,1000);
    translate(0, 0);

    rectMode(CENTER);
    rotateX(-QUARTER_PI);
    rotateY(ma);
    
    // let offset = 0;
    for(let z = 0; z < height; z += w){
        for(let x = 0; x < width; x += w){
            push();
            let d = dist(x,z, width/2, height/2);
            let offset = map(d, 0, maxD, -HALF_PI, HALF_PI);
            let a = angle + offset;
            let h = floor(map(sin(a),-1,1,50,300));
        
            // fill(255);
            translate(x - width/2, 0, z-height/2);
            normalMaterial();
            box(w-2,h,w-2);
            // rect(x-width/2+w/2,0,w-5,h);
            
            pop();
            
        }
        // offset += 0.2;
    }
   
    
    angle += 0.15;
   
}