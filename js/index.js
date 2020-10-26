document.querySelectorAll('.calculator .digits button').forEach(button=>button.addEventListener('click', digitPressed));
function digitPressed(ev) {
    const btn = ev.target;
    const display = document.querySelector('.display');
    display.value += btn.innerText;
}
document.querySelectorAll('.calculator .operators button').forEach(button=>button.addEventListener('click', operatorPressed));
function operatorPressed(ev) {
    const btn = ev.target;
    const display = document.querySelector('.display');
    display.value += btn.innerText;
}
document.querySelector('.calculator .eq').addEventListener('click', eqPressed);
function eqPressed() {
    const display = document.querySelector('.display');
    if (eval(display.value) === Infinity) {
        display.value = 'Dividing by 0 isn`t allowed';
    }
    if (eval(display.value) === undefined) {
        display.value = '0';
    }
    display.value = eval(display.value);
}
document.querySelector('.calculator .clear').addEventListener('click', clearPressed);
function clearPressed() {
    const display = document.querySelector('.display');
    display.value = '';
}
document.querySelector('.calculator .back').addEventListener('click', backPressed);
function backPressed() {
    const display = document.querySelector('.display');
    display.value = display.value.substring(0, display.value.length - 1);
}
document.querySelector('.calculator .percent').addEventListener('click', percentPressed);
function percentPressed() {
    const display = document.querySelector('.display');
    display.value *= 0.01;
}
document.querySelector('.calculator .opposite').addEventListener('click', oppositePressed);
function oppositePressed() {
    const display = document.querySelector('.display');
    display.value = -parseFloat(display.value);
}

// document.querySelector('.calculator .ip').addEventListener('click',ipPressed);
// function ipPressed() {
//     const display = document.querySelector('.display');
//     if (eval(display.value) === 0){
//         display.value = ''; 
//     }
//     display.value = display.value + Math.PI.toFixed(10);
// }
