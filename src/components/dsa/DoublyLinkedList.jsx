import React from 'react';

class node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) undefined;

        let temp = this.tail;
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }

    unshift(value) {
        const newNode = new node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
          newNode.next=this.head;
          this.head.prev=newNode;
          this.head=newNode;
        }
        this.length++;
        return this;
    }

    shift(){
        if(this.length===0) return undefined;

        let temp = this.head;
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
           this.head=this.head.next;
           this.head.prev=null;
           temp.next=null;
        }
        this.length--;
        return temp;
    }

    get(index){
        if(index<0||index>this.length) return undefined;
        let temp=this.head;
        for(let i=0;i<index;i++){
            temp=temp.next;
        }
        return temp;
    }

    set(index,value){
        if(index<0||index>this.length) return undefined;
        const temp=this.get(index);
        if(temp){
            temp.value=value;
            return true;
        }
        return false;
    }

    insert(index,value){
        if(index<0||index>this.length) return undefined;
        if(index===0) this.unshift(value);
        if(index===this.length) this.push(value);

        const newNode= new node(value);
        const before =this.get(index-1);
        const after=before.next;
        before.next=newNode;
        newNode.next=newNode;
        newNode.next=after;
        newNode.prev=before;
        this.length++;
        return true;
    }

    remove(index){
        if(index<0||index>this.length) return false;
        if(index===0) return this.shift();
        if(index===this.length-1) return this.pop();
        
        const temp=this.get(index);
        temp.prev.next=temp.next;
        temp.next.prev=temp.prev;
        temp.next=null;
        temp.prev=null;
        this.length--;
        return temp;
    }
}

const DoublyLinkedList = () => {
    return (
        <div>DoublyLinkedList</div>
    )
}

export default DoublyLinkedList