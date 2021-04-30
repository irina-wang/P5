let img;
function preload() {
  jumbo = loadImage('../img/jumbo.jpg');
}

function setup() {
  let cnv = createCanvas(600, 720);
  cnv.parent('canvasDiv');
  background(100);

  let s = 'Click on different location of the screen to change the dot size';
  textSize(50);
  fill(255);
  text(s, 100,100,300); // Text wraps within text box
  
}



  function mouseClicked() {
  for (let i = 0; i < 500; i++) {
    let x = random(width);
    let y = random(height);
    c = jumbo.get(x,y);
    fill(c, 25);
    noStroke();
    ellipse(x, y, mouseY/30, mouseY/30)
  }
}
