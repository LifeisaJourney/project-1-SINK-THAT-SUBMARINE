
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


// const submarine = document.createElement('div');

// function createSubmarine() {
//     submarine.classList.add('submarine');
//     // document.querySelector('.sub.hidde').appendChild(submarine);

//     return submarine;
// }



function randomIntegerUpTo(max) {
    return Math.floor(Math.random() * (max + 1));
}

const selectRowOrColumn = Math.floor(Math.random() * 2);

const randomRowGenerator = Math.floor(Math.random() * 6);
const randomColumnGenerator = Math.floor(Math.random() * 6);

newArray = [columns, rows];

const newVar = newArray[selectRowOrColumn];
const abc = newVar[randomRowGenerator]
const def = abc[randomColumnGenerator]
console.log(abc)
console.log(def)

// console.log(newArray);

let submarine = [];
submarine.push(def);

// let boundary = [rows[0][5], rows[0][0], columns[0][5], columns[5][5]]

// if (!boundary.includes(submarine[0])) {
//     console.log(submarine);
// }

if (randomColumnGenerator === 5){
    submarine.push(abc[randomColumnGenerator-1])
} else {
    submarine.push(abc[randomColumnGenerator+1])
}

console.log(submarine)

const guessFeedbackElement = document.querySelector('.guess-feedback');

gameboard.addEventListener('click', function (event) {
    const button = event.target;
    console.log(button);
    
    const clickedIndex = Number(button.getAttribute('data-index'));
    
    console.log(clickedIndex);
    
    if (clickedIndex === Number(submarine[0].dataset.index) || clickedIndex === Number(submarine[1].dataset.index)) {
        guessFeedbackElement.innerHTML = "Hit!";
    } else {
        guessFeedbackElement.innerHTML = "Miss!";
    }
});

console.log(submarine[0].dataset.index,submarine[1].dataset.index);


    // for (let i = 0; i < 36; i++) {
    //       const colorOptionElement = colorOptionElements[i];
    //       colorOptionElement.addEventListener(
    //         'click',
    //         handleOptionClick
    //       );
    //     }


//     event.target.classList.add('shot');
//     console.log(event);
// )
    




// gameboard.addEventListener('click', function (event) {
//     event.target.classList.add('shot');
//     console.log(event);
// })

// let subIndexes = [];

// subIndexes = randomIntegerUpTo(3);



// function getRandomSubmarine() {
    //     let subIndexes = [];
    //     while (subIndexes.length < 4) {
        //         const randomIndex = randomIntegerUpTo(37 - 1);
        //         if (!subIndexes.includes(randomIndex)) {
            //             subIndexes.push(randomIndex);
            //         }
            //     }
            //     const randomSub = [];
            //     for (let i = 0; i < subIndexes.length; i++) {
                //         randomSub.push(
                    //             submarine[subIndexes[i]]
                    //         );
                    //     }
                    //     return randomSub;
// }

// // const colorToGuessElement = document.querySelector('.color-to-guess');
// // const colorOptionElements = document.querySelectorAll('.color-option');

// let submarineHolder;

// // Starts a round of the game.
// function startRound() {
    //   const randomSub = getRandomSubmarine();
    //   // Picking a random "correct" color.
    //   submarineHolder = randomIntegerUpTo(3);
    //   // Setting "color to guess" text.
    // //   const correctColorName = randomSub[submarineHolder].name;
    // //   colorToGuessElement.innerHTML = correctColorName;

    //   for (let i = 0; i < 4; i++) {
        //     const submarine = randomSub[i];
        //     // const colorOptionElement = colorOptionElements[i];
        //     // colorOptionElement.style.backgroundColor = color.hexadecimal;
        //   }
        // }

        // startRound();

        // const guessFeedbackElement = document.querySelector('.guess-feedback');

// function handleOptionClick(event) {
//   const button = event.target;
//   const clickedIndex = Number(button.getAttribute('data-index'));
//   if (clickedIndex === submarineHolder) {
//     guessFeedbackElement.innerHTML = "Hit!";
//   } else {
//     guessFeedbackElement.innerHTML = "Miss!";
//   }
// }

// for (let i = 0; i < rows.length; i++) {
//   const colorOptionElement = colorOptionElements[i];
//   colorOptionElement.addEventListener(
//     'click',
//     handleOptionClick
//   );
// }





// submarine.style.left = `${Math.random() * window.innerWidth}px`;
// submarine.style.top = `${Math.random() * window.innerHeight}px`;
// submarine.setAttribute('class', 'submarine');

// setInterval(function () {
//     submarine.style.left = `${Math.random() * gameboard.innerWidth}px`;
//     submarine.style.top = `${Math.random() * gameboard.innerHeight}px`;
// }, 1000);
//doesnt work with gameboard.


// setTimeout(function () {
//   submarine.parentNode.removeChild(submarine);
//   checkForWinner();     
// }, 500);





// for (let i = 0; i < 4; i++) {
//     createSubmarine();
// }


