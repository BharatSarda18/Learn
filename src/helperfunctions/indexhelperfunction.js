export const twoSum = (array = [], targetSum) => {
    let mapping = {};
    for (let i = 0; i < array.length; i++) {
        const complement = targetSum - array[i];
        if (mapping.hasOwnProperty(complement)) {
            return [mapping[complement], i]; // Return the indices
        }
        mapping[array[i]] = i;

    }
    return [];
}