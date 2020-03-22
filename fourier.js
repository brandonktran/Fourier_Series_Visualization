let time=0;
let color ="#e83c38";
let traced = [];
let circle_number=4;
let increment = 200;

function setup() {
  let canvas = createCanvas(1000, 400);
  canvas.parent("canvasContainer")
}

function draw() {
  background("#ebeded");
  translate(200,200);

  let x = 0;
  let y = 0;

  for (i = 0; i < circle_number; i++) {

    let last_x= x;
    let last_y =y;

    // let n=i;
    // let A =1000*8*Math.sin((Math.PI*n/2)**2)/(Math.PI*n)**2
    let n=2*i+1;
    let A = 80 * 4 / (n * Math.PI);
    // let n=i;
    // let A = 150 * 2 / (n * Math.PI)*(-1)^(n+1);
    stroke(color);
    strokeWeight(0.5);
    noFill();
    ellipse(last_x, last_y, 2 * A);

    x += A * Math.cos(n * time);
    y += A * Math.sin(n * time);
    stroke(color);
    strokeWeight(2);
    line(last_x, last_y, x, y);

    last_x= x;
    last_y=y;
  }


  stroke(color);
  fill(color);
  circle(x,y,5);

  traced.push(y);

  beginShape();
  for (i=0; i<traced.length;i++) {
    noFill();
    stroke(color);
    vertex(i+200, traced[traced.length-i]);
  }
  endShape();


  stroke(color);
  strokeWeight(2);
  line(x, y, 200, traced[traced.length - 1]);

  stroke(color);
  fill(color);
  circle(200, traced[traced.length - 1], 5);



  if (traced.length>700) {
    traced.shift();
  }

  time += 10/increment;
}
