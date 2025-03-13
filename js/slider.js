// const slider = document.querySelector(".slider__wrap");
// const slider_set = document.querySelector(".slider__cont");
// const but_prev = document.querySelector(".slider__but-prev");
// const but_next = document.querySelector(".slider__but-next");
let slides_number = Array.from(
    document.querySelectorAll(".slide__list .slide")
).length;
let slide_index = 0;

// function moveSlider() {
//     slider_set.style.transform = `translateX(${
//         -slide_index * slider.clientWidth
//     }px)`;
// }

// slider.addEventListener("click", (evt) => {
//     if (evt.target.classList.contains("slider__but-prev")) {
//         if (slide_index == 0) {
//             slide_index = slides_number - 1;
//         } else {
//             slide_index--;
//         }
//     } else if (evt.target.classList.contains("slider__but-next")) {
//         if (slide_index == slides_number - 1) {
//             slide_index = 0;
//         } else {
//             slide_index++;
//         }
//     } else {
//         return;
//     }
//     moveSlider();
// });

// window.addEventListener("load", moveSlider);
// window.addEventListener("resize", moveSlider);
/*=====================================================*/

// slider_set.draggble = true;

// let start_X = 0;

// slider_set.addEventListener(`dragstart`, (event) => {
//     event.currentTarget.style.cursor = "grab";
//     start_X = event.clientX;
// });

// slider_set.addEventListener(`dragend`, (event) => {
//     if (event.clientX - startX > 0) {
//         slide_index++;
//     } else {
//         slide_index--;
//     }
//     moveSlider();
// });

/*=========================================*/

let tasksList = document.querySelector(`.slider .slide__list`);
// let taskElements = tasksList.querySelectorAll(`.tasks__item`);

// let width = 880;
// let gap = 30;
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
        slide_index--;
    } else {
        slide_index++;
    }
    tasksList.style.left = `${-100 * slide_index}vw`;
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
    tasksList.style.left = `${-100 * slide_index}vw`;
});

tasksList.addEventListener(`touchstart`, (event) => {
    event.currentTarget.style.cursor = "grab";
    startX = event.pageX;
});

tasksList.addEventListener(`touchend`, (event) => {
    alert(startX, event.pageX);
    if (event.pageX - startX > 0) {
        slide_index--;
    } else {
        slide_index++;
    }
    tasksList.style.left = `${-100 * slide_index}vw`;
});

/*=========================================*/

let tasksList2 = document.querySelector(`.slider2 .slide__list`);
// let taskElements = tasksList.querySelectorAll(`.tasks__item`);

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
