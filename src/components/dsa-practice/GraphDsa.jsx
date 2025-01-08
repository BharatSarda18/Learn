import React from 'react';

class Graph {
    constructor() {
        this.adjanceyList = {};
    }
    addVertex(vertex) {
        if (!this.adjanceyList[vertex]) {
            this.adjanceyList[vertex] = [];
            return true;
        }
        return false;
    }
    addEdge(vertex1, vertex2) {
        if (this.adjanceyList[vertex1]&&this.adjanceyList[vertex2]) {
            this.adjanceyList[vertex1].push(vertex2);
            this.adjanceyList[vertex2].push(vertex1);
            return true;
        }
        return false;
    }
    removeEdge(vertex1, vertex2) {
        if (this.adjanceyList[vertex1]&&this.adjanceyList[vertex2]) {
            this.adjanceyList[vertex1]=this.adjanceyList[vertex1].filter(vertex2);
            this.adjanceyList[vertex2]=this.adjanceyList[vertex2].filter(vertex1);
            return true;
        }
        return false;  
    }
    removeVertex(vertex) {
        if (!this.adjanceyList[vertex]) return undefined;
        while(this.adjanceyList[vertex].length){
            const temp=this.adjanceyList[vertex].pop();
            this.removeEdge(vertex,temp);
        }
        delete this.adjanceyList[vertex];
        return this;
    }

    DFS(){
        
    }
}


const GraphDsa = () => {
    return (
        <div>GraphDsa</div>
    )
}

export default GraphDsa;