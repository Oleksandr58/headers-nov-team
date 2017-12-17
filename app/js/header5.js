var touches = document.querySelectorAll('.js-touch__btn');
var left = document.querySelector('.js-arrow__left');
var right = document.querySelector('.js-arrow__right');
var number = 0;

for(var i = 0; i < touches.length; i++) {
    touches[i].addEventListener('click', Click(i));
}

function Click(index) {
    return function (e) {
        number = index;
        clearClasses();
        this.classList.add('fifth__touch--active');
    }
}

left.addEventListener('click', function() {
    number--;      

    if (number < 0) {
        number = touches.length - 1;
    }

    clearClasses();
    touches[number].classList.add('fifth__touch--active');  
} );

right.addEventListener('click', function() {
    number++;      

    if (number > touches.length - 1) {
        number = 0;
    }

    clearClasses();
    touches[number].classList.add('fifth__touch--active');  
} );

function clearClasses() {    
    for(var j = 0; j < touches.length; j++) {
        touches[j].classList.remove('fifth__touch--active');
    }
}