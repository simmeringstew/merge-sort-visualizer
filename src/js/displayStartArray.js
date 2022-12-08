export default function displayStartArray(array) {
    const initialArray = document.querySelector(".initial-array");
    const squares = initialArray.querySelectorAll(".square");
    for (let i = 0; i < array.length; i++) {
        squares[i].textContent = array[i];
    }
}