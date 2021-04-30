function preload() {
    img = loadImage('../img/jumbo.jpg');
  }
  function setup() {
    let cnv = createCanvas(600, 720);
    cnv.parent('canvasDiv');
    background(100);
    
    let s = 'Click to change the stroke orientation and size';
    textSize(50);
    fill(255);
    text(s, 100,100,300); 
    // text(s, 100,100,100); // Text wraps within text box
    

  }

  function mousePressed() {
    // ellipse(mouseX, mouseY, 5, 5);
    img.loadPixels();
    for (x = 0; x < img.width; x = x + 5) {
       for (y = 0; y < img.height; y = y + 5) {
          index = (floor(x) + floor(y) * img.width) * 4;
          red = img.pixels[index]
          blue = img.pixels[index + 1]
          green = img.pixels[index + 2]
          alpha = img.pixels[index + 3]
          //pixel_brightness = (red + blue + green) / 3
          // strokeWeight(9 * Math.random())
          // stroke(red, blue, green, alpha/(5 * Math.random()))
          // line(x + Math.random() * 40, y ,x + 50, y + 50 * Math.random())
          strokeWeight(9 * mouseX/600)
          stroke(red, blue, green, alpha/(5 * Math.random()))
          line(x + mouseX/720 * 40 *  Math.random(), y ,x + 50, y + 50 * mouseY/720 * Math.random())

      }
    }
    return false;
  }