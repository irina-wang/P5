let img;
let canva_w;
let canva_h;

function preload() {
  img = loadImage('../img/jumbo.jpg');
}

function setup() {
  let cnv = createCanvas(600, 720);
  cnv.parent('canvasDiv');
  d = pixelDensity(1);
  img.loadPixels();
  loadPixels();
}

function draw() {
  for (let x = 0; x < img.width; x = x+2) {
    for (let y = 0; y < img.height; y = y+2) {
      let loc = (y  * img.width + x )*4;
      let r, g, b;
      r = img.pixels[loc];
      g = img.pixels[loc + 1];
      b = img.pixels[loc + 2];
      a = img.pixels[loc + 3];
  
      let pixloc = (y * img.width+ x ) * 4;
      pixels[pixloc] = r;
      pixels[pixloc + 1] = g;
      pixels[pixloc + 2] = b;
      pixels[pixloc + 3] = a;
    }
  }
  updatePixels();
}


