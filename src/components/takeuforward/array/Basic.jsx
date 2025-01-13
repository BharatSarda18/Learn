import React from 'react'

const Basic = () => {


    //Largest Element in an Array
    const largestElementInArray = (array = []) => {
        let largestElementInArrayVar = -Infinity;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > largestElementInArrayVar) {
                largestElementInArrayVar = array[i];
            }
        }
        return largestElementInArrayVar;
    }

    //Check if the array is sorted
    const CheckIfTheArrayIsSorted = (array = []) => {
        for (let i = 1; i < array.length; i++) {
            if (array[i] < array[i - 1]) return false;
        }
        return true;
    }

    // Second Largest Element in an Array without sorting
    const secondLargestElementInAnArrayWithoutSorting = (array = []) => {
        let largestElementInArrayVar = -Infinity;
        let secondlargestElementInArrayVar = -Infinity;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > largestElementInArrayVar) {
                secondlargestElementInArrayVar = largestElementInArrayVar;
                largestElementInArrayVar = array[i];
            }
        }
        return secondlargestElementInArrayVar;
    }

    //Linear Search
    const linearSearch = (array = [], num) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === num) return true;
        }
        return false;
    }

    // Left Rotate the Array by One
    const leftRotateTheArrayByOne = (array = []) => {
        let firstEle = array[0];
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i + 1];
        }
        array[array.length - 1] = firstEle;
        return array;
    }

    let A1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(largestElementInArray(A1));
    console.log(CheckIfTheArrayIsSorted(A1));
    console.log(secondLargestElementInAnArrayWithoutSorting(A1));
    console.log(leftRotateTheArrayByOne(A1));

    return (
        <div>Basic</div>
    )
}

export default Basic