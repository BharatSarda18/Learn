import React from 'react'

const Easy = () => {

    // Maximum Consecutive Ones
    const maximumConsecutiveOnes = (array = []) => {
        let maxOne = 0;
        let maxiConsecutiveOnes = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] === 1) {
                maxOne = maxOne + 1;
            } else {
                maxOne = 0;
            }
            if (maxOne > maxiConsecutiveOnes) {
                maxiConsecutiveOnes = maxOne;
            }
        }
        return maxiConsecutiveOnes;
    }

    //Move all Zeros to the end of the array
    const moveAllZerosTotheEndofTheArray = (array = []) => {
        let i = 0;
        let j = 1;
        while (j < array.length) {
            if (array[i] === 0) {
                if (array[j] === 0) {
                    j++;
                } else {
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                    i++;
                    j++;
                }
            } else {
                i++;
                j++;
            }
        }
        return array;
    }

    //Rotate array by K elements
    const rotateArrayByKElements = (array = [], k, type) => {
        let n = array.length;
        if (k > n) k = k % n;
        let tempArray = [];
        if (type === "right") {
            for (let i = n - k; i < n; i++) {
                tempArray[i - (n - k)] = array[i];
            }
            for (let i = n - 1; i >= k; i--) {
                array[i] = array[i - k];
            }
            for (let i = k - 1; i >= 0; i--) {
                array[i] = tempArray[i];
            }
            return array;
        } else {

        }
    }

    //Remove Duplicates in-place from Sorted Array
    const removeDuplicates = (nums = []) => {
        let i = 0;
        let j = 1;

        while (j < nums.length) {
            if (nums[i] === nums[j]) {
                // If the current element is equal to the next
                j++;
            } else {
                // If the current element is unique
                i++;
                nums[i] = nums[j];
            }
        }

        // Replace remaining elements with '_'
        for (let k = i + 1; k < nums.length; k++) {
            nums[k] = "_";
        }

        return nums;
    }

    //Find the missing number in an array
    const findMissing = (nums = []) => {
        let n = nums.length;
        let sum = (n * (n + 1)) / 2;
        let sumOfEle = 0;
        for (let i = 0; i < nums.length; i++) {
            sumOfEle += nums[i];
        }
        return sum - sumOfEle;
    }

    //Find the number that appears once, and the other numbers twice

    const singleNumber = (nums = []) => {
        let frequencey = {};
        for (let ele of nums) {
            frequencey[ele] = (frequencey[ele] || 0) + 1;
        }
        for (let [key, value] of Object.entries(frequencey)) {
            if (value === 1) {
                return Number(key); // Convert key back to a number
            }
        }
    }

    //Union of Two Sorted Arrays
    const union = (arr1 = [], arr2 = []) => {

        const set = new Set();
        const union = [];

        for (let num of arr1) {
            set.add(num);
        }

        for (let num of arr2) {
            set.add(num);
        }

        for (let num of set) {
            union.push(num);
        }

        return union;
    }

    // Two Sum 
    const twoSum=(array=[],k)=>{
        let fre={};
        for(let index in array){
            let remaining=k-array[index];
            if(fre.hasOwnProperty(remaining)){
                return [Number(fre[remaining]),Number(index)];
            }
            fre[array[index]]=index;
        }
    } 

    console.log(maximumConsecutiveOnes([1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1]))

    //[1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1]
    console.log(moveAllZerosTotheEndofTheArray([1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1]));
    console.log(rotateArrayByKElements([1, 2, 3, 4, 5, 6, 7], 2, "right"));
    console.log(removeDuplicates([1, 1, 2]));
    console.log(singleNumber([1, 1, 2]));
    console.log(union([1, 2, 3, 4, 5], [2, 3, 4, 4, 5]));
    console.log(twoSum([1, 2, 3],5));
    return (
        <div>Easy</div>
    )
}

export default Easy