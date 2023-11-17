let index = 0;
setInterval(function () {
  applyHoverEffect();
}, 1000); // 10 seconds

function applyHoverEffect() {
  let boxes = document.querySelectorAll(".box");
  if (index < boxes.length) {
    boxes[index].classList.add("hovered");
    setTimeout(function () {
      boxes[index].classList.remove("hovered");
      index++;
    }, 200); // Remove the hover effect after 1 second
  } else {
    // Reset index to start over
    index = 0;
  }
}
let index2 = 0;
setInterval(function () {
  applyHoverEffect2();
}, 1000); // 10 seconds

function applyHoverEffect2() {
  let boxes = document.querySelectorAll(".sbox");
  if (index2 < boxes.length) {
    boxes[index2].classList.add("hovered");
    setTimeout(function () {
      boxes[index2].classList.remove("hovered");
      index2++;
    }, 200); // Remove the hover effect after 1 second
  } else {
    // Reset index2 to start over
    index2 = 0;
  }
}

let index3 = 0;
setInterval(function () {
  applyHoverEffect3();
}, 1000); // 10 seconds

function applyHoverEffect3() {
  let boxes = document.querySelectorAll(".single-box");
  if (index3 < boxes.length) {
    boxes[index3].classList.add("hovered");
    setTimeout(function () {
      boxes[index3].classList.remove("hovered");
      index3++;
    }, 300); // Remove the hover effect after 1 second
  } else {
    // Reset index3 to start over
    index3 = 0;
  }
}
