let btn_prev = document.querySelector('.prev')
let btn_next = document.querySelector('.next')
let btn_stop = document.querySelector('.stop')
let btn_play = document.querySelector('.play')
let numb = document.querySelector('.number')
let text = document.querySelector('.txt')
let timer = -1;

let images = document.querySelectorAll('.im')
let imgN = 0
numb.innerHTML = (imgN + 1) + ' / ' + images.length
text.innerHTML = images[imgN].getAttribute('text')

let dotsContainer = document.querySelector('.dots')
for (let i = images.length - 1; i >= 0; i--) {
    dotsContainer.innerHTML += '<div class="dot"></div>'
}
let dots = document.querySelectorAll('.dot')
dots[0].className += ' red'

function sliderMove(n) {
    images[imgN].classList.toggle('shown')
    dots[imgN].classList.toggle('red')

    switch (n) {
        case 'n':
            imgN++
            if (imgN > images.length - 1) {
                imgN = 0
            }
            break
        case 'p':
            imgN--;
            if (imgN < 0) {
                imgN = images.length - 1
            }
            break
        default:
            if (typeof (n) == 'number') {
                imgN = n
            }
    }

    images[imgN].classList.toggle('shown')
    dots[imgN].classList.toggle('red')
    numb.innerHTML = (imgN + 1) + ' / ' + images.length
    text.innerHTML = images[imgN].getAttribute('text')
}

function move() {
    images[imgN].classList.toggle('shown')
    dots[imgN].classList.toggle('red')
    imgN++
    if (imgN > images.length - 1) {
        imgN = 0
    }
    console.log(imgN);
    images[imgN].classList.toggle('shown')
    dots[imgN].classList.toggle('red')
}
btn_prev.onclick = function () {
    sliderMove('p');
}

btn_next.onclick = function () {
    sliderMove('n');
}
btn_stop.onclick = function () {
    clearInterval(timer);
    timer = -1;
}
btn_play.onclick = function () {
    console.log(timer);
    if (timer == -1) {
        timer = setInterval(move, 1000);
    }
}

dots.forEach(function (item, index) {
    item.onclick = function (e) {
        sliderMove(index);
    }
})