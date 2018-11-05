let a = document.getElementById('slider__ul');
let slider = document.getElementById('slider');
let amount = document.querySelectorAll('.slide').length;
let cloneSlider = a.cloneNode(true);
let moving = 0;
let pop = document.querySelector('.but-right');
let pip = document.querySelector('.but-left');
let slidesNav = document.querySelector('.pushForD');
let listPN = null;



// Создание навигации по слайдам
function createNavigation () {
    if(amount == 1) {
        return;
    }

    let clone = slidesNav.cloneNode(true);
    for(let i = 0; i < amount - 1; i++) {
        clone = slidesNav.cloneNode(true);
        document.querySelector('.container').appendChild(clone);
    }
}

function toSlideLeft() {
    
}

createNavigation ();
listPN =  document.querySelectorAll('.pushForD');

// Навигация по слайдам
listPN[0].onclick = function() {
//   let b = document.querySelectorAll('.slide');
//   console.log(b[0]);
  console.log(getComputedStyle(a).left);
  
  
}

// listPN[1].onclick = function() {
    
// }

// listPN[2].onclick = function() {
    
// }

// listPN[3].onclick = function() {
    
// }

// listPN[4].onclick = function() {
    
// }

// listPN[5].onclick = function() {
    
// }

// listPN[6].onclick = function() {
    
// }

// listPN[7].onclick = function() {
    
// }

// listPN[8].onclick = function() {
    
// }

// listPN[9].onclick = function() {
    
// }
// Листание вперед
pop.onclick = function() {
    if(moving <= (amount * 500 - 500) * -1) {
        var removedSlide = a.removeChild(a.firstElementChild);
        moving += 500;
        a.style.left = moving + 'px';
        a.appendChild(removedSlide);
    }
    
    let timerID = setInterval(
        function() {
            moving -= 10;
            a.style.left = moving + 'px';
        }, 10);
    setTimeout(function() {
        clearInterval(timerID);
    }, 500);
        
};

// Листание назад
pip.onclick = function() {
    if(moving >= 0) {
        var removedSlide = a.removeChild(a.lastElementChild);
        a.insertBefore(removedSlide, a.firstElementChild);
        moving -= 500;
        a.style.left = moving + 'px';
        
    }
    
    let timerID = setInterval(
        function() {
            moving += 10;
            a.style.left = moving + 'px';
        }, 10);
    setTimeout(function() {
        clearInterval(timerID);
    }, 500);

}







