let btn_prev_2 = document.querySelector('.prev_2')
let btn_next_2 = document.querySelector('.next_2')

let items_2 = document.querySelectorAll('.gal2__item')
let counter = 0
let gap = 25;
items_2.forEach(function (item, index) {
    item.style.left = index * (400 + 25) + 'px';
})

let dotsContainer_2 = document.querySelector('.dots_2')
for (let i = items_2.length - 1; i >= 0; i--) {
    dotsContainer_2.innerHTML += '<div class="dot"></div>'
}
let dots_2 = document.querySelectorAll('.dots_2 .dot')
dots_2[counter].className += ' red'

function sliderMove_2(n) {
    let x = 0
    dots[counter].classList.toggle('red')

    switch (n) {
        case 'n':
            if (counter < (items_2.length - 1)) {
                counter++
                x = -425
            }
            break
        case 'p':
            if (counter > 0) {
                counter--;
                x = 425
            }
            break
        default:
            if (typeof (n) == 'number') {
                counter = n
            }
    }
    items_2.forEach(function (item, index) {
        item.style.left = parseInt(item.style.left) + x + 'px';
    })
    dots[counter].classList.toggle('red')
}

btn_prev_2.onclick = function () {
    if (counter > 0) {
        items_2.forEach(function (item, index) {
            // console.log(Number(item.style.left)) намбер не дает преобраз в число, если есть др символы!!!!
            item.style.left = parseInt(item.style.left) + 425 + 'px';
        })
        dots[counter].classList.toggle('red')
        counter--
        dots_2[counter].className += ' red'
    }
}

btn_next_2.onclick = function () {
    sliderMove_2('n');
}

dots_2.forEach(function (item, index) {
    item.onclick = function (e) {
        sliderMove(index);
    }
})