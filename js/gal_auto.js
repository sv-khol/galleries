indow.onload = function () {
    var btn_prev = document.querySelector('#gallery .buttons .prev');
    var btn_next = document.querySelector('#gallery .buttons .next');
    var btn_stop = document.querySelector('#gallery .buttons .stop');
    var btn_play = document.querySelector('#gallery .buttons .play');
    var images = document.querySelectorAll('#gallery .photos img');
    var i = 0;
    let timer = -1;
    console.log(i);
    console.log(images[i].className);

    function move() {
        images[i].className = '';
        i++;
        if (i > images.length - 1) {
            i = 0;
        }
        //console.log(i);
        images[i].className = 'shown';
    }
    /*timer = setInterval( mobe, 1000); */

    /*  Window setInterval() Method
    setInterval(func|code, delay)
    В отличие от метода setTimeout, setInterval (- clearTimeout) выполняет код много раз, 
    через равные промежутки времени, пока не будет остановлен при 
    помощи clearInterval.
    
    функции setTimeout/setInterval "делают отметку", что необходимо 
    запустить некий код через столько-то миллисекунд, а скрипт 
    продолжает работать своим чередом. механизма работы асинхронности 
    выполнения JavaScript. 
    
    Возвращают обе функции идентификатор созданного таймера.
    code: setInterval('alert("прошла секунда")', 1000)
    func: function sec() {alert("прошла секунда");}
    setInterval(sec, 1000) - использовать функцию
    
    Но более правильным считается объявление функции в явном виде, например так: 
    setInterval(function(){ alert(...) }, 1000)*/


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

    btn_prev.onclick = function () {
        //console.log(images); console.log(i);
        images[i].className = '';
        i--;
        if (i < 0) {
            i = images.length - 1;
        }
        images[i].className = 'shown';
    }

    btn_next.onclick = function () {
        //console.log(i);
        //console.log(images[i].src);
        //console.log(btn_next);
        images[i].className = '';
        i++;
        if (i > images.length - 1) {
            i = 0;
        }
        //console.log(i);
        images[i].className = 'shown';
    }

}