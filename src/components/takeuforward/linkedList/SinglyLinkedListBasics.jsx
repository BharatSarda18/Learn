import React from 'react';

class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor(value) {
    const newNode = new node(value);
    this.head = newNode;
    this.tail = newNode;
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

  addTwoNumbers(l1, l2) {
    let h1 = l1.head;
    let h2 = l2.head;
    let carry = 0;
    let dummyHead = new node(0);
    let current = dummyHead;
    while (h1 !== null || h2 !== null || carry !== 0) {
      const val1 = h1 !== null ? h1.value : 0;
      const val2 = h2 !== null ? h2.value : 0;

      let sum = val1 + val2 + carry;
      carry = Math.floor(sum / 10);

      current.next = new node(sum % 10);
      current = current.next;

      if (h1 !== null) h1 = h1.next;
      if (h2 !== null) h2 = h2.next;
    }
    return dummyHead.next;

  }

  oddEvenList(head) {
    if (head === null || head.next === null) {
      return head;
    }

    let oddPointer = head;
    let evenPointer = head.next;
    const evenHead = evenPointer;

    while (evenPointer !== null && evenPointer.next !== null) {
      oddPointer.next = evenPointer.next;
      oddPointer = oddPointer.next;
      evenPointer.next = oddPointer.next;
      evenPointer = evenPointer.next;
    }

    oddPointer.next = evenHead;
    return head;
  }
}

const SinglyLinkedListBasics = () => {

  // const ll = new linkedList(2);
  // ll.push(4);
  // ll.push(3);
  // const ll2 = new linkedList(5);
  // ll2.push(6);
  // ll2.push(4);

  // const newAddedLL = ll.addTwoNumbers(ll, ll2);
  // console.log({ newAddedLL });

  const oddEvenLL=new linkedList(1);
  oddEvenLL.push(2);
  oddEvenLL.push(3);
  oddEvenLL.push(4);
  oddEvenLL.push(5);
 // oddEvenLL.push(6);
  const oddEvenLL2=oddEvenLL.oddEvenList(oddEvenLL.head);
  console.log({ oddEvenLL2 });
  return (
    <div>SinglyLinkedListBasics</div>
  )
}

export default SinglyLinkedListBasics