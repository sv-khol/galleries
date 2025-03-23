let slider = document.querySelector(".slider");
let slide_list = document.querySelector(`.slider .slide__list`);
let slides_number = Array.from(
    document.querySelectorAll(".slider .slide__list .slide")
).length;
let slide_index = 1;
// let width = parseInt(
//     window.getComputedStyle(document.querySelector(".slide__list")).width
// );
let gap = 30;
let flag = false;

moveSliderSilent();

let startX = 0;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/*=============== ADD DOP SLIDES ======================================*/
const dop0 = Array.from(
    document.querySelectorAll(".slider .slide__list .slide")
)[0].cloneNode(true);
slide_list.append(dop0);

const dopn = Array.from(
    document.querySelectorAll(".slider .slide__list .slide")
)[slides_number - 1].cloneNode(true);
slide_list.prepend(dopn);

/*=========  добавить элемент на страницу DOTS  ===========================================*/

let dotsContainer = document.createElement("div");
dotsContainer.classList.add("dots");
slider.append(dotsContainer);

dotsContainer = document.querySelector(".dots");
for (let i = slides_number - 1; i >= 0; i--) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.append(dot);
}
let dots = document.querySelectorAll(".dot");

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

dots[0].classList.add("red");

/*=======================================*/
function moveSlider() {
    slide_list.classList.add("tr");
    slide_list.style.left = `${
        -slider.clientWidth * slide_index - gap * slide_index
    }px`;
}

function moveSliderSilent() {
    slide_list.classList.remove("tr");
    slide_list.style.left = `${
        -slider.clientWidth * slide_index - gap * slide_index
    }px`;
}

// window.addEventListener("load", moveSliderSilent);
window.addEventListener("resize", moveSlider);

/*============== CLICK BUTTONS ===========================*/

document.querySelector(".slider").addEventListener("click", (evt) => {
    if (!flag) {
        if (evt.target.classList.contains("slider__but-prev")) {
            if (slide_index == 1) {
                (async () => {
                    slide_index--;
                    moveSlider();
                    slide_index = slides_number;
                    flag = true;
                    console.log("==", slide_index, flag);
                    clear();
                    dots[slide_index - 1].classList.add("red");

                    await sleep(2000);

                    flag = false;
                    moveSliderSilent();
                })();
            } else {
                slide_index--;
                moveSlider();
                clear();
                dots[slide_index - 1].classList.add("red");
            }
        } else if (evt.target.classList.contains("slider__but-next")) {
            if (slide_index == slides_number) {
                (async () => {
                    slide_index++;
                    moveSlider();
                    console.log("==", slide_index);

                    slide_index = 1;
                    flag = true;
                    console.log("==", slide_index, flag);
                    clear();
                    dots[slide_index - 1].classList.add("red");

                    await sleep(2000);

                    flag = false;
                    moveSliderSilent();
                })();
            } else {
                slide_index++;
                moveSlider();
                clear();
                dots[slide_index - 1].classList.add("red");
            }
        } else {
            return;
        }
    }
});

/*============== DRAG ===========================*/

slide_list.draggable = true;

slide_list.addEventListener(`dragstart`, (event) => {
    event.currentTarget.style.cursor = "grab";
    startX = event.clientX;
});

slide_list.addEventListener(`dragend`, (event) => {
    // console.dir(event);
    if (!flag) {
        if (event.clientX - startX > 0) {
            if (slide_index == 1) {
                (async () => {
                    slide_index--;
                    moveSlider();
                    slide_index = slides_number;
                    clear();
                    dots[slide_index - 1].classList.add("red");

                    await sleep(2000);

                    moveSliderSilent();
                    console.log("Проснулись! Больше ждать не нужно.");
                })();
            } else {
                slide_index--;
                moveSlider();
                clear();
                dots[slide_index - 1].classList.add("red");
            }
        } else {
            if (slide_index == slides_number) {
                (async () => {
                    slide_index++;
                    moveSlider();
                    slide_index = 1;
                    clear();
                    dots[slide_index - 1].classList.add("red");
                    flag = true;

                    // Задержка в 2 секунды перед переходом на реальный №1
                    await sleep(2000);

                    flag = false;
                    moveSliderSilent();
                    console.log("Проснулись! Больше ждать не нужно.");
                })();
            } else {
                slide_index++;
                moveSlider();
                clear();
                dots[slide_index - 1].classList.add("red");
            }
        }
    }
});

/*=============== TOUCH ==========================*/
slider.addEventListener(`touchstart`, (event) => {
    event.currentTarget.style.cursor = "grab";
    startX = event.changedTouches[0].clientX;
});

slider.addEventListener(`touchend`, (event) => {
    if (
        !event.target.classList.contains("slider__but-next") &&
        !event.target.classList.contains("slider__but-prev")
    ) {
        alert("тач");
        alert(event.changedTouches[0].clientX);
        alert(startX);
        if (event.changedTouches[0].clientX - startX < 0) {
            slide_index++;
        } else {
            slide_index--;
        }
    }
    moveSlider();
    clear();
    dots[slide_index - 1].classList.add("red");
});
