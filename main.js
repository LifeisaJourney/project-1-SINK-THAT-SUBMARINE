
const box0 = document.querySelector('.box0')
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')
const box5 = document.querySelector('.box5')
const box6 = document.querySelector('.box6')
const box7 = document.querySelector('.box7')
const box8 = document.querySelector('.box8')
const box9 = document.querySelector('.box9')
const box10 = document.querySelector('.box10')
const box11 = document.querySelector('.box11')
const box12 = document.querySelector('.box12')
const box13 = document.querySelector('.box13')
const box14 = document.querySelector('.box14')
const box15 = document.querySelector('.box15')
const box16 = document.querySelector('.box16')
const box17 = document.querySelector('.box17')
const box18 = document.querySelector('.box18')
const box19 = document.querySelector('.box19')
const box20 = document.querySelector('.box20')
const box21 = document.querySelector('.box21')
const box22 = document.querySelector('.box22')
const box23 = document.querySelector('.box23')
const box24 = document.querySelector('.box24')
const box25 = document.querySelector('.box25')
const box26 = document.querySelector('.box26')
const box27 = document.querySelector('.box27')
const box28 = document.querySelector('.box28')
const box29 = document.querySelector('.box29')
const box30 = document.querySelector('.box30')
const box31 = document.querySelector('.box31')
const box32 = document.querySelector('.box32')
const box33 = document.querySelector('.box33')
const box34 = document.querySelector('.box34')
const box35 = document.querySelector('.box35')

const rows = [
  [box0, box1, box2, box3, box4, box5],
  [box6, box7, box8, box9, box10, box11],
  [box12, box13, box14, box15, box16, box17],
  [box18, box19, box20, box21, box22, box23],
  [box24, box25, box26, box27, box28, box29],
  [box30, box31, box32, box33, box34, box35],
]

const columns = [
  [box0, box6, box12, box18, box24, box30],
  [box1, box7, box13, box19, box25, box31],
  [box2, box8, box14, box20, box26, box32],
  [box3, box9, box15, box21, box27, box33],
  [box4, box10, box16, box22, box28, box34],
  [box5, box11, box17, box23, box29, box35],
]


const gameboard = document.querySelector('.gameboard')
const boxSelector = document.querySelectorAll('.box');


const selectRowOrColumn = Math.floor(Math.random() * 2);
const randomRowGenerator = Math.floor(Math.random() * 6);
const randomColumnGenerator = Math.floor(Math.random() * 6);

newArray = [columns, rows];
const newArraySelection = newArray[selectRowOrColumn];
const aSpecificRow = newArraySelection[randomRowGenerator]
const aSpecificBox = aSpecificRow[randomColumnGenerator]

let submarine = 0;

for (let i = 0; i < boxSelector.length; i++) {
  const randomLocationGenerator = Math.floor(Math.random() * (boxSelector.length + 1));
  submarine = randomLocationGenerator;
}
console.log(submarine);


// submarine.push(aSpecificBox);


// if (randomColumnGenerator === 5) {
//   submarine.push(aSpecificRow[randomColumnGenerator - 1])
// } else {
//   submarine.push(aSpecificRow[randomColumnGenerator + 1])
// }
// console.log(submarine)


//location of the submarine
// let onePartOfSub = Number(submarine[0].dataset.index);
// let secPartOfSub = Number(submarine[1].dataset.index);


const guessFeedbackElement = document.querySelector('.guess-feedback');
gameboard.addEventListener('click', function (event) {
  const button = event.target;
  // console.log(button);

  const clickedIndex = Number(button.getAttribute('data-index'));
  console.log(clickedIndex);
  if (clickedIndex === submarine) {
    guessFeedbackElement.innerHTML = "HIT!";
    console.log("HIT!");
    alert('WINNER!');

    // )
  } else {
    guessFeedbackElement.innerHTML = "MISS!";
    console.log("MISS!");
  }











  // if (clickedIndex === Number(submarine[0].dataset.index) || clickedIndex === Number(submarine[1].dataset.index)) {
  //   guessFeedbackElement.innerHTML = "Hit!";
  //   button.classList.add('shot');
  // } else {
  //   guessFeedbackElement.innerHTML = "Miss!";
  //   for (let i = 0; i < 6; i++) {
  //     let shortCutObject = columns[0][i].dataset.index;
  //     console.log(shortCutObject);
  //     console.log(typeof shortCutObject);
  //     //this holds columns[0][i].dataset.index in the for loop
  //     if (onePartOfSub.includes(Number(columns[0][i].dataset.index)) && secPartOfSub.includes(Number(columns[0][i].dataset.index))) {
  //       // Number(submarine[1].dataset.index) += 1;
  //       // Number(submarine[0].dataset.index) += 1;
  //       console.log(Number(submarine[0].dataset.index), Number(submarine[1].dataset.index));
  //     }
  //   }
  // }
});

// function myReSetFunction() {
//   document.getElementById(".reset").reset();

// }
            // console.log(submarine[0], submarine[1]);
// //returns div class with box number
// console.log(submarine[0].dataset.index, submarine[1].dataset.index);
// //returns string of values like 5 11 but "5" and "11"
// // console.log(typeof submarine[0].dataset.index, submarine[1].dataset.index);
// // string 11
// console.log(onePartOfSub, secPartOfSub);
// // returns number of values like 5 and 11
// // console.log(typeof onePartOfSub, secPartOfSub);
// //number 11
// console.log('str', Number((columns[0][1]).dataset.index));
// // string number

// console.log(columns[0])
    //array

