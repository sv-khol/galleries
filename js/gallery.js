let btn_prev = document.querySelector('.prev')
let btn_next = document.querySelector('.next')
let numb = document.querySelector('.number')
let text = document.querySelector('.txt')

let images = document.querySelectorAll('.im')
let imgN = 0
numb.innerHTML = (imgN + 1) + ' / ' + images.length
text.innerHTML = images[imgN].getAttribute('text')

let dotsContainer = document.querySelector('.dots')
for (let i = 0; i < images.length; i++) {
    dotsContainer.innerHTML += '<div class="dot"></div>'
}
let dots = document.querySelectorAll('.dot')
dots[imgN].classList.add('red')

btn_prev.onclick = function () {
    images[imgN].classList.remove('shown')
    dots[imgN].classList.remove('red')
    imgN--
    if (imgN < 0) {
        imgN = images.length - 1
    }
    images[imgN].classList.add('shown')
    dots[imgN].classList.add('red')
    numb.innerHTML = (imgN + 1) + ' / ' + images.length
    text.innerHTML = images[imgN].getAttribute('text')
}

btn_next.onclick = function () {
    images[imgN].classList.remove('shown')
    dots[imgN].classList.remove('red')
    imgN++
    if (imgN > images.length - 1) {
        imgN = 0
    }
    images[imgN].classList.add('shown')
    dots[imgN].classList.add('red')
    numb.innerHTML = (imgN + 1) + ' / ' + images.length
    text.innerHTML = images[imgN].getAttribute('text')
}

dots.forEach(function (item, index) {
    item.onclick = function (e) {
        images[imgN].classList.remove('shown')
        dots[imgN].classList.remove('red')
        imgN = index
        images[imgN].classList.add('shown')
        dots[imgN].classList.add('red')
        numb.innerHTML = (imgN + 1) + ' / ' + images.length
        text.innerHTML = images[imgN].getAttribute('text')
    }
});