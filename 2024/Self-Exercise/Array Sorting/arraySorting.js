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

// Merge Sort

/* Merge Sort is an out-of-place, stable, and comparison-type sorting algorithm

Out-of-place means that the algorithm requires additional data structures when sorting. This is opposite to in-place sorting algorithms, where the input is simply overwritten and no extra data structures are required.

Stable means that two elements with equal values will appear in the same order in the sorted output as they appear in the unsorted input array.

And finally, a comparison sort is a sorting algorithm that only reads the list of elements through a single abstract comparison operation (usually a “less than” or “equal to”) that determines which of the two elements should occur first in the final sorted output array. */


const mergeSort = (arr) =>{
    // Base case
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    // Recursive calls
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

/* In order to implement Merge Sort, it’s useful to first implement a function responsible for merging two sorted arrays.

Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all the elements in the two input arrays. */

const merge = (left ,right) =>{
    let sortedArr = [];

    while(left.length && right.length){
        // Insert the smallest item into sortedArr
        if(left[0] < right[0]){
            sortedArr.push(left.shift());
        } else{
            sortedArr.push(right.shift());
        }
    }
    
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
}

console.log(mergeSort([9,1,5,4,8,3,7,2,6]));