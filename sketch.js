function preload() {
  img = loadImage("img.jpeg");
  // img = loadImage("img2.png");
}

const plt = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,\"^`'. "
const plt2 = "@%#*+=-:. "
function setup() {
  noCanvas();
  // createCanvas(360, 360);
  background(0);
  // image(img, 0, 0, width, height);
  
  const w = width/img.width;
  const itv = 7;
  img.loadPixels();
  
  for (let j=0; j < img.width; j+=itv) {
    let row = "";
    for (let i=0; i < img.width; i+=itv) {
      const pixelIndex = (i + j * img.height) * 4;
      //first cell of each pixels

      const r = img.pixels[pixelIndex + 0];
      const g = img.pixels[pixelIndex + 1];
      const b = img.pixels[pixelIndex + 2];
      const a = img.pixels[pixelIndex + 3];
      
      let avr = (r+g+b)/3
      if(a ==0) {
        avr = 255;
      }
      
      noStroke();
      fill(255);
      textSize(w*itv);
      
      let chr = plt[floor(map(avr,0,256, 0, plt.length))];
      textAlign(CENTER, CENTER);
      text(chr, i*w, j*w);
      if(chr == ' ') row+= "&nbsp;";  //빈공간 불침범스페이스로
      else row+=chr;
    }
    createDiv(row);
    console.log(row);
  }
}
