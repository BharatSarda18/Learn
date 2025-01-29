import React from 'react';

class Stack {
    constructor() {
        this.stack = [];
    }
    push(element) {
        this.stack.push(element);
    }
    pop() {
        if (this.stack.length === 0) {
            return 'Underflow';
        }
        return this.stack.pop();
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    printStack() {
        let str = '';
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + ' ';
        }
        return str;
    }
}

const StackUsingArray = () => {
    return (
        <div>StackUsingArray</div>
    )
}

export default StackUsingArray