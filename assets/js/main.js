
// 1 задание

zad1.onclick = function () {

    zad1.style.visibility = 'hidden';
}

// 2 задание

zad2.onclick = function () {

    text.style.visibility = 'hidden';
}

// 3 задание

zad3.addEventListener('click', textHideAndShow)
let status = false;

function textHideAndShow() {
    if (status == false) {
        text2.style.visibility = 'hidden';
        status = true;
    } else {
        text2.style.visibility = 'visible';
        status = false;
    }
}

// 4 задание

document.addEventListener('click', (event) => {
    ball.style.left = `${event.clientX - 25}px`;
    ball.style.top = `${event.clientY - 25}px`;
});