let line = document.querySelector('.line');
let next = document.querySelector('.slider-left');
let previous = document.querySelector('.slider-right');
let left = 0;

function sliderLeft() {
   left -= 10;

   if (left < -2000) {
    left = -10;
   }
   line.style.left = left + 'px';
 
}

function sliderRight() {
    left += 10;

    if (left > 0) {
     left = -1990;
    }
    line.style.left = left + 'px';
}


next.onclick = function() {
    let timer = setInterval(sliderLeft, 10);
    setTimeout(function() {
        clearInterval(timer)
    }, 500);
};


previous.onclick = function() {
    let timer = setInterval(sliderRight, 10);
    setTimeout(function() {
        clearInterval(timer)
    }, 500);
};
// function slider() {
//     var left = 0;

//     this.nextOne = function() {
//         left -= 500;
//         if (left < -2000) {
//             left = 0;
//         }
//         line.style.left = left + 'px';

//     }

//     this.previousOne = function() {
//         left += 100;
//         if (left == 0) {
//             left = -2000;
//         }
//         line.style.left = left + 'px';

//     }
// }
// var timerId;

// timerId = setInterval(sliderLeft, 10);
// setTimeout(clearInterval(timerId), 500);
// console.log(timerId);
