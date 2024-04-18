


let currentCount = 1;
let brickArray = ['<div class="brick"></div>'];

function addBrick() {
    if (currentCount <= 14) {
        currentCount++;
        brickArray.push('<div class="brick"></div>');
        document.getElementById("right-container").innerHTML = brickArray;
    }
    // output
    document.getElementById("count").innerHTML = currentCount;
    document.getElementById("count").style.color = "#496989";
}

function removeBrick() {
    if (currentCount >= 1) {
        currentCount--;
        brickArray.pop();
        document.getElementById("right-container").innerHTML = brickArray;
    }
    document.getElementById("count").innerHTML = currentCount;
    document.getElementById("count").style.color = "#E72929";
}




// let currentCount = 1;
// let brickArray = ['<div class="brick"></div>'];

// function addBrick() {
//     ``
//     if (currentCount <= 14) {
//         currentCount++;

//         brickArray.push('<div class="brick"></div>');
//         document.getElementById("right-container").innerHTML = brickArray;
//     }
//     // output
//     document.getElementById("count").innerHTML = currentCount;
//     document.getElementById("count").style.color = "#496989";
// }

// function removeBrick() {
//     if (currentCount >= 1) {
//         currentCount--;

//         brickArray.pop();
//         document.getElementById("right-container").innerHTML = brickArray;
//     }
//     document.getElementById("count").innerHTML = currentCount;
//     document.getElementById("count").style.color = "#E72929";
// }





// function addBrick() {
//     let newBrick = document.createElement('div');
//     newBrick.classList.add('brick');
//     let rightContainer = document.getElementById('right-container');
//     rightContainer.appendChild(newBrick);
// }
// function removeBrick() {
//     let bricks = document.querySelectorAll('.brick');
//     if (bricks.length > 0) {
//         let lastBrick = bricks[bricks.length - 1];
//         lastBrick.parentNode.removeChild(lastBrick);
//     }
// }