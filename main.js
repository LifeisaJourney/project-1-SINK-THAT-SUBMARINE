let submarine = 0;
const gameboard = document.querySelector('.gameboard');

for (let i = 0; i < 36; i++) {
  let boxNumbers = document.createElement('div');
  boxNumbers.classList.add(`box`, `box_${i}`);
  gameboard.appendChild(boxNumbers);
  boxNumbers.setAttribute(`data-index`, `${i}`);
  let texts = document.createTextNode(`${i + 1}`);
  boxNumbers.appendChild(texts);
}
const boxSelector = document.querySelectorAll('.box');

const randomLocationGenerator = Math.floor(Math.random() * (boxSelector.length + 1));
submarine = randomLocationGenerator;



function chooseDirectionIndex(length) {
  return Math.floor(Math.random() * length);
}

function move() {
  if (submarine > 0 && submarine < 5) {
    submarine += leftDownRight[chooseDirectionIndex(leftDownRight.length)];
  } else if (submarine > 30 && submarine < 35) {
    submarine += leftUpRight[chooseDirectionIndex(leftUpRight.length)];
  } else if (submarine % 6 === 0 && submarine !== 0 && submarine !== 30) {
    submarine += rightDownUp[chooseDirectionIndex(rightDownUp.length)];
  } else if (submarine % 6 === 5 && submarine !== 5 && submarine !== 35) {
    submarine += leftDownUp[chooseDirectionIndex(leftDownUp.length)];
  } else if (submarine === 0) {

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
