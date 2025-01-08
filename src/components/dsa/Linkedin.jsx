import React from 'react'

class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  // methods of liknedlist
  push(value) {
    const newNode = new node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }

  unshift(value) {
    const newNode = new node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) this.unshift(value);
    if (index === this.length) this.push(value);

    const newNode = new node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) this.shift();
    if (index === this.length) this.pop();

    const before = this.get(index - 1);
    const temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return true;
  }

  reverseList(head) {
    // let previous = null;
    // let current = head;
    // while (current !== null) {
    //   let next = current.next;
    //   current.next = previous;
    //   previous = current;
    //   current = next;
    // }
    // return previous;


      // Initialize three pointers: curr, prev and next
      let curr = head;
      let prev = null;
      let next;
  
      // Traverse all the nodes of Linked List
      while (curr !== null) {
          // Store next
          next = curr.next;
  
          // Reverse current node's next pointer
          curr.next = prev;
  
          // Move pointers one position ahead
          prev = curr;
          curr = next;
      }
  
      // Return the head of reversed linked list
      return prev;
  }
}

const Linkedin = () => {
  const myLinkedList = new LinkedList(1);
  myLinkedList.push(2);
  myLinkedList.push(3);
  myLinkedList.push(4);
  console.log( myLinkedList);
  const myReverseLinkedList = myLinkedList.reverseList(myLinkedList.head);
  console.log(myReverseLinkedList);
  // Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

  return (
    <div>Linkedin</div>
  )
}

export default Linkedin