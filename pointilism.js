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
  for (let x = 0; x < img.width; x = x+0.5) {
    for (let y = 0; y < img.height; y = y+0.5) {
      let loc = (y  * img.width + x )*4;
      let r, g, b;
      r = img.pixels[loc];
      g = img.pixels[loc + 1];
      b = img.pixels[loc + 2];
      a = img.pixels[loc + 3];
  
      let pixloc = (y * img.width+ x ) * 4;
      let randr = random(-50, 50)
      let randg = random(-50, 50)
      let randb = random(-50, 50)
      pixels[pixloc] = randr + r;
      pixels[pixloc + 1] = randg + g;
      pixels[pixloc + 2] = randb+ b;
      pixels[pixloc + 3] = a;
    }
  }
  updatePixels();
}


