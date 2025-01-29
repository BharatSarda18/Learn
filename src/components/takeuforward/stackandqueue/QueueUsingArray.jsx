import React from 'react';

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(value) {
        this.queue.push(value);
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }
    
    printQueue() {
        console.log(this.queue);
    }

}

const QueueUsingArray = () => {
  return (
    <div>QueueUsingArray</div>
  )
}

export default QueueUsingArray