import React from 'react';

class node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class linkedList{
    constructor(value){
        const newNode=new node(value);
        this.head=newNode;
        this.tail=newNode;
        this.length=1;
    }

    push(value){
        
    }
}

const SinglyLinkedListBasics = () => {
  return (
    <div>SinglyLinkedListBasics</div>
  )
}

export default SinglyLinkedListBasics