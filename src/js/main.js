// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import displayStartArray from './displayStartArray';
import showSort from './showSort';

const startArray = [6, 2, 8, 5, 3, 1, 7, 4];

const sortedArray = [];

window.onload = () => {
    displayStartArray(startArray, sortedArray);
    mergeSort(startArray);
}

function mergeSort(array) {
    const halfwayPoint = Math.floor(array.length / 2);

    if (array.length <= 1) {
        return array;
    }

    const leftSide = array.splice(0, halfwayPoint);
    sortedArray.push([...leftSide]);
    sortedArray.push([...array]);
    return merge(mergeSort(leftSide), mergeSort(array));
}

function merge(left, right) {
    let sorted = [];

    while(left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            sorted.push(left.shift());
        }
        else {
            sorted.push(right.shift());
        }
    }

    sortedArray.push([...sorted, ...left, ...right]);

    return [...sorted, ...left, ...right];
}

const sortButton = document.querySelector(".sort-button");
sortButton.addEventListener("click", () => {
    showSort(sortedArray);
},{once:true});