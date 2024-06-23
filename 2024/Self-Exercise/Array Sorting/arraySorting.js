// Bubble sorting
/* Bubble sort algorithm is a simple sorting technique that compares two adjacent elements in an array and
 swaps them if they are in the wrong order. It keeps repeating this process until the array is sorted. */

 const bubbleSort = (arr) =>{
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i + 1]){ // compare adjacent elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
 }

console.log(bubbleSort([9,1,5,4,8,3,7,2,6]));
