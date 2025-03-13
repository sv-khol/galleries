const slider = document.querySelector(".slider__wrap");
const slider_set = document.querySelector(".slider__cont");
const but_prev = document.querySelector(".slider__but-prev");
const but_next = document.querySelector(".slider__but-next");
let slides_number = Array.from(slider.querySelectorAll(".slide")).length;
let slide_index = 0;

function moveSlider() {
    slider_set.style.transform = `translateX(${
        -slide_index * slider.clientWidth
    }px)`;
}

slider.addEventListener("click", (evt) => {
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

window.addEventListener("load", moveSlider);
window.addEventListener("resize", moveSlider);
/*=====================================================*/

slider_set.draggble = true;
slider_set.style.left = 0;

let start_X = 0;

slider_set.addEventListener(`dragstart`, (event) => {
    event.currentTarget.style.cursor = "grab";
    start_X = event.clientX;
});

slider_set.addEventListener(`dragend`, (event) => {
    if (event.clientX - startX > 0) {
        slider_set.style.left = parseInt(slider_set.style.left) + 500 + "px";
        slide_index++;
    } else {
        slider_set.style.left = parseInt(slider_set.style.left) - 500 + "px";
        slide_index--;
    }
});

/*=========================================*/

let tasksList = document.querySelector(`.tasks__list`);
// let taskElements = tasksList.querySelectorAll(`.tasks__item`);

let width = 880;
let gap = 30;
let startX;

tasksList.style.left = 0;
tasksList.draggable = true;
// taskElements.forEach((item) => {
//     item.draggable = true;
// });

tasksList.addEventListener(`dragstart`, (event) => {
    event.currentTarget.style.cursor = "grab";
    startX = event.clientX;
});

tasksList.addEventListener(`dragend`, (event) => {
    if (event.clientX - startX > 0) {
        tasksList.style.left =
            parseInt(tasksList.style.left) + (width + gap) + "px";
    } else {
        tasksList.style.left =
            parseInt(tasksList.style.left) - (width + gap) + "px";
    }
});

document.querySelector(".frame").addEventListener("click", (evt) => {
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
    tasksList.style.left = -(width + gap) * slide_index + "px";
});
