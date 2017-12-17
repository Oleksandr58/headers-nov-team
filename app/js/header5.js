var touches = document.querySelectorAll('.js-touch__btn'),
    left = document.querySelector('.js-arrow__left'),
    right = document.querySelector('.js-arrow__right'),    
    active = 'fifth__touch--active',
    number = 0;

for(var i = 0; i < touches.length; i++) {
    touches[i].addEventListener('click', сlick(i));
}

function сlick(index) {
    return function (e) {
        number = index;
        clearClasses();
        this.classList.add(active);
    }
}

left.addEventListener('click', function() {
    number--;      

    if (number < 0) {
        number = touches.length - 1;
    }

    clearClasses();
    touches[number].classList.add(active);  
} );

right.addEventListener('click', function() {
    number++;      

    if (number > touches.length - 1) {
        number = 0;
    }

    clearClasses();
    touches[number].classList.add(active);  
} );

function clearClasses() {    
    for(var j = 0; j < touches.length; j++) {
        touches[j].classList.remove(active);
    }
}