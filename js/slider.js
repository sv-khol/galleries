// const but_prev = document.querySelector(".slider__but-prev");
// const but_next = document.querySelector(".slider__but-next");
let slider = document.querySelector(".slider");
let slide_list = document.querySelector(`.slider .slide__list`);
let slides_number = Array.from(
    document.querySelectorAll(".slider .slide__list .slide")
).length;
let slide_index = 0;
// let width = parseInt(
//     window.getComputedStyle(document.querySelector(".slide__list")).width
// );
let gap = 30;
let startX;

function moveSlider() {
    // slider_set.style.transform = `translateX(${
    //     -slide_index * slider.clientWidth
    // }px)`;
    slide_list.style.left = `${
        -slider.clientWidth * slide_index - gap * slide_index
    }px`;
    clear();
    dots[slide_index].classList.add("red");
}

// window.addEventListener("load", moveSlider);
window.addEventListener("resize", moveSlider);

/*=========================================*/

slide_list.style.left = 0;
slide_list.draggable = true;

/*
CLIENT → The Browser window
clientX и clientY = значения (px) положения мыши относительно границ viewport экрана браузера

Tip:
Даже, если вы прокручиваете документ, значения будут всегда одинаковые

PAGE → Весь документ
pageX, pageY = значениям в (px), положения курсора мыши, относительно левого, верхнего угла документа.

Tip:
Если вы прокручиваете документ, например вертикально pageY значение изменяется, потому что это новая 
верхняя позиция курсора мыши внутри вашего элемента.
Также стоит отметить, что:
event.pageY - event.clientY === document.documentElement.scrollTop
( или jQuery's $("html, body").scrollTop() )

SCREEN → Ваш экран
screenX и screenY являются значениями (px) текущей позиции курсора мыши относительно физического дисплея.
*/

slide_list.addEventListener(`dragstart`, (event) => {
    event.currentTarget.style.cursor = "grab";
    startX = event.clientX;
    console.log(event);
});

slide_list.addEventListener(`dragend`, (event) => {
    // console.dir(event);
    if (event.clientX - startX > 0) {
        slide_index--;
    } else {
        slide_index++;
    }
    moveSlider();
});

document.querySelector(".slider").addEventListener("click", (evt) => {
    if (evt.target.classList.contains("slider__but-prev")) {
        if (slide_index == 0) {
            slide_index = slides_number - 1;
        } else {
            slide_index--;
        }
    } else if (evt.target.classList.contains("slider__but-next")) {
        if (slide_index == slides_number - 1) {
            slide_index = 0;
        } else {
            slide_index++;
        }
    } else {
        return;
    }
    moveSlider();
});

slide_list.addEventListener(`touchstart`, (event) => {
    event.currentTarget.style.cursor = "grab";
    startX = event.touches[0].pageX;
});

slide_list.addEventListener(`touchend`, (event) => {
    document.querySelector(".data").innerHTML =
        parseInt(event.changedTouches[0].pageX) +
        "  " +
        startX +
        "  " +
        event.touches[0].pageX;
    if (event.touches[0].pageX - startX > 0) {
        slide_index--;
    } else {
        slide_index++;
    }
    moveSlider();
});

/*=========  добавить элемент на страницу  ===========================================*/

let dotsContainer = document.createElement("div");
dotsContainer.classList.add("dots");
slider.append(dotsContainer);
/* append, prepend, before, after, replaceWith  */

dotsContainer = document.querySelector(".dots");
for (let i = slides_number - 1; i >= 0; i--) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.append(dot);
}
let dots = document.querySelectorAll(".dot");
dots[0].classList.add("red");

function clear() {
    dots.forEach(function (dot) {
        dot.classList.remove("red");
    });
}

dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () {
        console.log("dot", i);
        clear();
        dot.classList.add("red");
        slide_index = i;
        moveSlider();
    });
});
/*=========================================*/

let tasksList2 = document.querySelector(`.slider2 .slide__list`);

let startX2;
let index = 0;

tasksList2.style.transform = "translateX(0)";
tasksList2.draggable = true;

tasksList2.addEventListener(`dragstart`, (event) => {
    event.currentTarget.style.cursor = "grab";
    startX2 = event.clientX;
});

tasksList2.addEventListener(`dragend`, (event) => {
    if (event.clientX - startX2 > 0) {
        index++;
    } else {
        index--;
    }
    tasksList2.style.transform = `translateX(${830 * index}px)`;
});

document.querySelector(".slider2").addEventListener("click", (evt) => {
    console.log("click");
    if (evt.target.classList.contains("slider__but-prev")) {
        if (index == 0) {
            index = slides_number - 1;
        } else {
            index++;
        }
    } else if (evt.target.classList.contains("slider__but-next")) {
        if (index == slides_number - 1) {
            index = 0;
        } else {
            index--;
        }
    } else {
        return;
    }
    tasksList2.style.transform = `translateX(${830 * index}px)`;
});
