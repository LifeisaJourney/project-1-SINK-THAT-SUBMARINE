const box0 = document.querySelector('.box0');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');
const box7 = document.querySelector('.box7');
const box8 = document.querySelector('.box8');
const box9 = document.querySelector('.box9');
const box10 = document.querySelector('.box10');
const box11 = document.querySelector('.box11');
const box12 = document.querySelector('.box12');
const box14 = document.querySelector('.box14');
const box15 = document.querySelector('.box15');
const box16 = document.querySelector('.box16');
const box17 = document.querySelector('.box17');
const box18 = document.querySelector('.box18');
const box19 = document.querySelector('.box19');
const box20 = document.querySelector('.box20');
const box21 = document.querySelector('.box21');
const box22 = document.querySelector('.box22');
const box23 = document.querySelector('.box23');
const box24 = document.querySelector('.box24');
const box25 = document.querySelector('.box25');
const box26 = document.querySelector('.box26');
const box27 = document.querySelector('.box27');
const box28 = document.querySelector('.box28');
const box29 = document.querySelector('.box29');
const box30 = document.querySelector('.box30');
const box31 = document.querySelector('.box31');
const box32 = document.querySelector('.box32');
const box33 = document.querySelector('.box33');
const box34 = document.querySelector('.box34');
const box35 = document.querySelector('.box35');
const gameboard = document.querySelector('.gameboard');
const boxSelector = document.querySelectorAll('.box');

let submarine = 0;
for (let i = 0; i < boxSelector.length; i++) {
  const randomLocationGenerator = Math.floor(Math.random() * (boxSelector.length + 1));
  submarine = randomLocationGenerator;
}

const guessFeedbackElement = document.querySelector('.guess-feedback');
gameboard.addEventListener('click', function (event) {
  const button = event.target;
  const clickedIndex = Number(button.getAttribute('data-index'));
  if (clickedIndex === submarine) {
    guessFeedbackElement.innerHTML = "HIT!";
    button.classList.add('shot');
    alert('WINNER!');
  } else {
    guessFeedbackElement.innerHTML = "MISS!";
  }
});
