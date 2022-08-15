const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnRgb = document.createElement('button')
const btnGray = document.createElement('button')
const btnSize = document.createElement('button')
const section = document.querySelector('.section');
const buttonsContainer = document.querySelector('.buttons');
const clearBtn = document.querySelector('.clear-btn')



function creatDivs(col , rows) {
    for(let i = 0;i < (col * rows); i++) {
        const div = document.createElement('div') 
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
}
creatDivs(21,21)


function draw() {
    const someItems = container.querySelectorAll('.box')
    someItems.forEach(box => {
        box.addEventListener('mouseover', function () {
            box.style.backgroundColor = "black"
        }) 
    }) 
}

draw()

// Creating new colors

function redColor () {
    const redBtn = document.querySelector('.red')
    redBtn.addEventListener('click', function () {
        const someItems = container.querySelectorAll('.box')
        someItems.forEach(box => [
            box.addEventListener('mouseover', function() {
                box.style.backgroundColor = "red"
            })
        ])
    })
}

redColor()

function blackColor () {
    const blackBtn = document.querySelector('.black')
    blackBtn.addEventListener('click', function () {
        const someItems = container.querySelectorAll('.box')
        someItems.forEach(box => [
            box.addEventListener('mouseover', function() {
                box.style.backgroundColor = "black"
            })
        ])
    })
}

blackColor()

function yellowColor () {
    const yellowBtn = document.querySelector('.yellow')
    yellowBtn.addEventListener('click', function () {
        const someItems = container.querySelectorAll('.box')
        someItems.forEach(box => [
            box.addEventListener('mouseover', function() {
                box.style.backgroundColor = "yellow"
            })
        ])
    })
}

yellowColor()

function greenColor () {
    const greenBtn = document.querySelector('.green')
    greenBtn.addEventListener('click', function () {
        const someItems = container.querySelectorAll('.box')
        someItems.forEach(box => [
            box.addEventListener('mouseover', function() {
                box.style.backgroundColor = "green"
            })
        ])
    })
}

greenColor()

// clear the table 

function clearTable() {
    const boxes = container.querySelectorAll('.box')
    clearBtn.addEventListener('click', function () {
        boxes.forEach(box => {
            box.style.backgroundColor = "rgb(200, 243, 200)"
        })
    })
}

clearTable()