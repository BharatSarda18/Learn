import React from 'react'

const Questions = () => {
    // const isBalanced = (string = '') => {
    //     const bracketMap = {
    //         ')': '(',
    //         '}': '{',
    //         ']': '['
    //     };
    //     let stack = [];

    //     for (const char of string) {
    //         if (bracketMap[char]) {
    //             // Check if the top of the stack matches the current closing bracket
    //             const topElement = stack.length > 0 ? stack.pop() : '#';
    //             if (bracketMap[char] !== topElement) {
    //                 return false;
    //             }
    //         } else {
    //             // Push open brackets onto the stack
    //             stack.push(char);
    //         }
    //     }
    //     return string.length === 0;

    // }

    function isBalanced(s) {

        // Declare a stack to store the opening brackets
        let st = [];
        for (let i = 0; i < s.length; i++) {

            // Check if the character is an opening bracket
            if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
                st.push(s[i]);
            } else {
                // If it's a closing bracket, check if the stack is non-empty
                // and if the top of the stack is a matching opening bracket
                if (st.length > 0 &&
                    ((st[st.length - 1] === '(' && s[i] === ')') ||
                        (st[st.length - 1] === '{' && s[i] === '}') ||
                        (st[st.length - 1] === '[' && s[i] === ']'))) {

                    // Pop the matching opening bracket
                    st.pop();
                } else {

                    // Unmatched closing bracket
                    return false;
                }
            }
        }

        // If stack is empty, return true (balanced), otherwise false
        return st.length === 0;
    }

    const result = isBalanced("([])");
    console.log({ result });


    const nextGreaterElement = (array = []) => {
        let result = [];
        let stack = [];
        for (let i = array.length - 1; i >= 0; i--) {
            while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
                stack.pop();
            }
            if (stack.length > 0) {
                result[i] = stack[stack.length - 1];
            }

            stack.push(arr[i]);
        }

        return result;
    }
    return (
        <div>Questions</div>
    )
}

export default Questions