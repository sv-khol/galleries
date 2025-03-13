let list = document.querySelector('.drag__flex')
list.style.left = 0
let visible = document.querySelector('.drag__visible')
let items = document.querySelectorAll('.drag__item')
let num_items = items.length
let pos = document.querySelector('.pos')
let mpos = document.querySelector('.mouse')
let data_start = document.querySelector('.data_start')

visible.onmousedown = function (event) {
    event = event || window.event;
    let list_start = parseInt(list.style.left)
    let mouse_start = event.clientX;
    data_start.innerHTML = list_start + '   ' + mouse_start;


    console.log('======= STARTlist:', list_start, '    mouseSTART: ', mouse_start)

    function moveAt(mouseX, list_start, mouse_start) {
        if ((mouseX <= visible.offsetLeft) || (mouseX >= (visible.offsetLeft + visible.offsetWidth - 1))) {
            visible.removeEventListener('mousemove', onMouseMove);
            visible.onmouseup = null;
            return;
        }
        let left = (list_start - mouse_start + mouseX)
        // if ((left <= 10) && (left >= -(visible.offsetLeft + visible.offsetWidth + 10))) {
        //     list.style.left = left + 'px';
        // } else {
        //     list.style.left = 0
        // }

        if (left >= 30) {
            list.style.left = 0
        } else if (left <= -(6 * (document.body.offsetWidth) / 4 - visible.offsetWidth + 30 * 6)) {
            list.style.left = -(6 * (document.body.offsetWidth) / 4 - visible.offsetWidth + 30 * 6) + 'px';
        } else {
            list.style.left = left + 'px';
        }
        pos.style.width = mouseX
        console.log('current:', visible.offsetLeft, visible.offsetWidth, visible.offsetLeft + visible.offsetWidth)
        data_start.innerHTML = list.style.left + '     ' + mouseX + '     ' + (mouse_start - mouseX);
    }

    function onMouseMove(event) {
        event = event || window.event;
        moveAt(event.clientX, list_start, mouse_start);
    }

    visible.addEventListener('mousemove', onMouseMove);

    visible.onmouseup = function () {
        visible.removeEventListener('mousemove', onMouseMove);
        visible.onmouseup = null;
    };

}

visible.onmousemove = function (event) {
    event = event || window.event;
    mpos.innerHTML = event.clientX;
}

visible.ondragstart = function () {
    return false;
};


pos.onclick = function () {

}
// visible.onclick = function (event) {
//     console.log("Размер элемента:" + this.offsetWidth + "x" + this.offsetHeight);
//     console.log("положение элемента:" + this.offsetLeft + "x" + this.offsetTop);

//     console.log(this.getBoundingClientRect());
//     list.style.left = event.clientX - this.offsetLeft + 'px';
//     list.style.top = event.clientY - this.offsetTop + 'px';

// };