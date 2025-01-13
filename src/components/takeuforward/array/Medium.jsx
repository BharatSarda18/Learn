import React from 'react'

const Medium = () => {

    //Search in a sorted 2D matrix
    const SearchInASortedMatrix = (matrix = [], target) => {
        let m = matrix[0].length;  // Number of columns
        let n = matrix.length; // Number of rows
        let i = 0;
        let j = m * n - 1;
        while (i <= j ) {   
            const mid = Math.floor((left + right) / 2);
            const midValue = matrix[Math.floor(mid / m)][mid % m];
            if (midValue === target) {
                return true;
            } else if (midValue < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }     
        }
        return false;
    }
    return (
        <div>Medium</div>
    )
}

export default Medium