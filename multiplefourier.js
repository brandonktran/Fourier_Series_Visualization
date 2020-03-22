let time = 0;
let color = ["purple", "green", "#e83c38"];
let traced = [[],[],[]];
let circle_number = 3;
let increment = 0.01;

function setup() {
  let canvas = createCanvas(1000, 400);
  canvas.parent("canvasContainer")
}

function draw() {
  background("#ebeded");
  multiple(200,200);

}

function multiple(tx,ty) {
  translate(tx, ty);

  for (let j = 0; j < circle_number; j++) {
    let x = 0;
    let y = 0;
    for (i = 0; i <= j; i++) {

      let last_x = x;
      let last_y = y;

      // let n=i;
      // let A =1000*8*Math.sin((Math.PI*n/2)**2)/(Math.PI*n)**2
      let n = 2 * i + 1;
      let A = 80 * 4 / (n * Math.PI);
      // let n=i+1;
      // let A = 150 * 2 / (n * Math.PI)*(-1)^(n+1);

      stroke("black");
      strokeWeight(0.5);
      noFill();
      ellipse(last_x, last_y, 2 * A);

      x += A * Math.cos(n * time);
      y += A * Math.sin(n * time);
      stroke("black");
      strokeWeight(2);
      line(last_x, last_y, x, y);

      last_x = x;
      last_y = y;
    }


    stroke(color[j]);
    fill(color[j]);
    circle(x, y, 5);

    traced[j].unshift(y);

    beginShape();
    for (i = 0; i < traced[j].length; i++) {
      noFill();
      stroke(color[j]);
      vertex(i + 200, traced[j][i]);
    }
    endShape();


    stroke(color[j]);
    strokeWeight(2);
    line(x, y, 200, traced[j][0]);

    stroke(color[j]);
    fill(color[j]);
    circle(200, traced[0], 5);


    if (traced[j].length > 700) {
      traced[j].pop();
    }
    time += increment;

  }
}
