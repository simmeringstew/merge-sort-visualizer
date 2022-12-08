export default async function showSort(array) {
    for (let i = 0; i < array.length; i++) {
        switch(i) {
            case 0:
                const leftFour = document.querySelector(".left-four");
                await addSquares(array[i], leftFour);
                break;
            case 1:
                const rightFour = document.querySelector(".right-four");
                await addSquares(array[i], rightFour);
                break;
            case 2:
                const leftTwo = document.querySelector(".left-two");
                await addSquares(array[i], leftTwo);
                break;
            case 3:
                const centerLeftTwo = document.querySelector(".center-left-two");
                await addSquares(array[i], centerLeftTwo);
                break;
            case 4:
                const singleOne = document.querySelector(".single-one");
                await addSquares(array[i], singleOne);
                break;
            case 5:
                const singleTwo = document.querySelector(".single-two");
                await addSquares(array[i], singleTwo);
                break;
            case 6:
                const sortedTwoLeft = document.querySelector(".sorted-two-left");
                await addSquares(array[i], sortedTwoLeft);
                break;
            case 7:
                const singleThree = document.querySelector(".single-three");
                await addSquares(array[i], singleThree);
                break;
            case 8:
                const singleFour = document.querySelector(".single-four");
                await addSquares(array[i], singleFour);
                break;
            case 9:
                const sortedTwoCenterLeft = document.querySelector(".sorted-two-center-left");
                await addSquares(array[i], sortedTwoCenterLeft);
                break;
            case 10:
                const sortedLeft = document.querySelector(".sorted-left");
                await addSquares(array[i], sortedLeft);
                break;
            case 11:
                const centerRightTwo = document.querySelector(".center-right-two");
                await addSquares(array[i], centerRightTwo);
                break;
            case 12:
                const rightTwo = document.querySelector(".right-two");
                await addSquares(array[i], rightTwo);
                break;
            case 13:
                const singleFive = document.querySelector(".single-five");
                await addSquares(array[i], singleFive);
                break;
            case 14:
                const singleSix = document.querySelector(".single-six");
                await addSquares(array[i], singleSix);
                break;
            case 15:
                const sortedTwoCenterRight = document.querySelector(".sorted-two-center-right");
                await addSquares(array[i], sortedTwoCenterRight);
                break;
            case 16:
                const singleSeven = document.querySelector(".single-seven");
                await addSquares(array[i], singleSeven);
                break;
            case 17:
                const singleEight = document.querySelector(".single-eight");
                await addSquares(array[i], singleEight);
                break;
            case 18:
                const sortedTwoRight = document.querySelector(".sorted-two-right");
                await addSquares(array[i], sortedTwoRight);
                break;
            case 19:
                const sortedRight = document.querySelector(".sorted-right");
                await addSquares(array[i], sortedRight);
                break;
            case 20:
                const final = document.querySelector(".final");
                await addSquares(array[i], final)
                break;
        }
    }
}

async function addSquares(array, parent) {
    for (let i = 0; i < array.length; i++) {
        const square = makeSquare();
        square.textContent = array[i];
        await sleep(.3);
        parent.appendChild(square);
    }
}

function makeSquare() {
    const square = document.createElement("div");
    square.classList.add("square");
    return square;
}

function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}