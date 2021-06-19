
let col, row;
let scl = 50; 
let terrain = [];
let flying = 0;
let xoff, yoff;

function setup(){
    createCanvas(600, 600, WEBGL);
    let w  = 500; 
    let h = 500; 
    col = w / scl;
    row = h / scl; 
    
}


function draw(){
    
    flying -= 10;
    yoff = flying;
    
    // let yoff = 0;
    for(let y = -150; y < height; y++){
        terrain[y] = []; // create nested array
        let xoff = 0;
        for(let x = -150; x < width; x++){
        //   terrain[x][y] = random(-10,10);
          terrain[y][x] = map(noise(yoff,xoff),0,1,-100,100);
          xoff += 0.5;
        }
        yoff += 0.5;
      }
  
    background(0);
    stroke(255);
    noFill();
    rotateX(PI/3);
    translate(1200, -500,-300)


    for(let y = -150; y < row; y++){
        beginShape(TRIANGLE_STRIP);
        for(let x = -150; x < col; x++){
        
            
            vertex(x*scl, y * scl, terrain[x][y]);
            vertex(x*scl, (y+1)*scl,terrain[x][y+1]);
            // vertex(x*scl+scl, y*scl);
            // vertex(x*scl, y*scl);
            
       
            // rect(x*scl, y*scl, scl, scl);
            // rectMode(CORNER);
        }
        endShape();
    }
}