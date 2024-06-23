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

// Quick Sort

/* Quick sort is a divide-and-conquer algorithm that sorts an array by choosing a pivot element and partitioning the array into two subarrays, one containing elements smaller than the pivot, and the other containing elements larger than the pivot. The two subarrays are then recursively sorted until the entire array is sorted. */

/* Note: In quick sort algorithm, the pivot is a selected element from the array that is used as a reference point for partitioning the array into two smaller sub-arrays. */

const quickSort = (arr) =>{
    if(arr.length <= 1){
        return arr;
    }

    let pivot = arr[0];
    let leftArr= [];
    let rightArr = [];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            leftArr.push(arr[i]);
        }else{
            rightArr.push(arr[i]);
        }
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort([9,1,5,4,8,3,7,2,6]));



