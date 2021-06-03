const btnStart = document.querySelector('.main[data-active]');
const btnReset = document.querySelector('.reset');
const btnAdd = document.querySelector('.add');
const panel = document.querySelector('.time div');
const meantime = document.querySelector('.added');

let time = 0;
let idI;
let lap = 1;
const betweenTimeArr = [];

const stoper = ({
    target
}) => {
    if (target.dataset.active ===
        'false') {
        btnStart.textContent = 'Pause';
        const addSec = () => {
            time++;
            panel.textContent = (time / 100).toFixed(2);
        }
        idI = setInterval(addSec, 10);
        target.dataset.active = 'true';
    } else {
        btnStart.textContent = 'Start';
        clearInterval(idI);
        target.dataset.active = 'false';
    }
}

const reset = (e) => {
    panel.textContent = '---'
    time = 0
    btnStart.textContent = 'Start';
    btnStart.dataset.active = 'false';
    meantime.textContent = '';
    clearInterval(idI);
    lap = 1;

}
const addTime = () => {
    betweenTimeArr.push("");
    if (betweenTimeArr.length <= 10) {
        const p = document.createElement('p');
        p.textContent += `${lap}. ${(time / 100).toFixed(2)}`;
        p.textContent.includes('0.00') ? alert('start stoper') : lap++ && meantime.appendChild(p);
    } else alert("You can add only 10 times");
}
btnStart.addEventListener('click', stoper);
btnReset.addEventListener('click', reset);
btnAdd.addEventListener('click', addTime);