import React from 'react';

class node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(value){
        const newNode=new node(value);
        this.first=newNode;
        this.last=newNode;
        this.length=1;
    }

    Enqueue(value){
        const newNode=new node(value);
        if(this.length===0){
            this.first=newNode;
            this.last=newNode;
        }else{
            this.last.next=newNode;
            this.last=newNode;
        }
        this.length++;
        return this;
    }

    Dequeue(){
        if(this.length===0) return undefined;

        let temp=this.first;
        if(this.length===1){
            this.first=null;
            this.last=null;
        }else{
            this.first=this.first.next;
            temp.next=null;
        }
        this.length--;
        return temp;
    }
}

const Queue = () => {
  return (
    <div>Queue</div>
  )
}

export default Queue