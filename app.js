const canvas = document.getElementById("drawing");
const ctx = canvas.getContext("2d");

const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const changeSize = document.querySelector(".size");
const changeColor = document.querySelector("#color");
const clearBtn = document.querySelector("#btn-clear");

// declare
let size = 10;
let codeColor;
let isPress = false;
let x1, x2, y1, y2;

// function update
function updateSize() {
  changeSize.innerText = size;
}

// btn chang size
decreaseBtn.addEventListener("click", function () {
  size -= 1;
  if (size < 1) {
    size = 1;
  }
  updateSize();
});
increaseBtn.addEventListener("click", function () {
  size += 1;
  if (size > 50) {
    size = 50;
  }
  updateSize();
});

// get code color
changeColor.addEventListener("change", function () {
  codeColor = changeColor.value;
});

// function drawLine
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.strokeStyle = codeColor;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
// function drawCircle
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = codeColor;
  ctx.fill();
}

// draw
canvas.addEventListener("mousedown", function (e) {
  isPress = true;
  x1 = e.offsetX;
  y1 = e.offsetY;
  // console.log(x1, y1);
});
canvas.addEventListener("mouseup", function (e) {
  isPress = false;
  x1 = undefined;
  y1 = undefined;
  // console.log(x2, y2);
});
canvas.addEventListener("mousemove", function (e) {
  if (isPress) {
    x2 = e.offsetX;
    y2 = e.offsetY;
    console.log(x1, y1);
    drawLine(x1, y1, x2, y2);
    drawCircle(x2, y2);
    x1 = x2;
    y1 = y2;
  }
});

canvas.addEventListener("click", function (e) {
  console.log(e.offsetX);
  console.log(e.offsetY);
});
//clear
clearBtn.addEventListener("click", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
