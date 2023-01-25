
/***********************************************************************************
 * Exercise challenge : Coloring Game
 * ---------------------------------------------------------------------------------
 * @author Melissa Kouadio <angemelisk@gmail.com>
 * @description : Build a Todo List
 * @typeof {string|Array}
 * @typeof {number}
 * @typeof {function}
 * **********************************************************************************/ 

/******************************************************************************
 * @function randomColor
 * @description: random hexadecimal color
 * @returns {string}
 ******************************************************************************/
function randomColor() {

    let maxVal = 0xFFFFFF; 
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0); 
    return `#${randColor.toUpperCase()}`
}


document.querySelector('.add-box').addEventListener('click', () => { // add box on click
    let div = document.createElement('div')
    document.querySelector('.boxes').appendChild(div)
    div.className = 'box'
    div.style.backgroundColor = randomColor()
    div.style.border = "1px solid black"
})