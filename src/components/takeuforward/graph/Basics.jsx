import React from 'react';

class Graph {
    constructor() {
        this.adjanceyList = [];
    }

    addVertex(vertex) {
        if (!his.adjanceyList[vertex]) {
            this.adjanceyList[vertex] = [];
            return true;
        }
        return false;
    }

    addEdge(v1, v2) {
        if (this.adjanceyList[v1] && this.adjanceyList[v2]){
            this.adjanceyList[v1].push(v2);
            this.adjanceyList[v2].push(v1);
            return true;
        }
        return false;
    }

    removeEdge(v1,v2){
        if (this.adjanceyList[v1] && this.adjanceyList[v2]){
            this.adjanceyList[v1]=this.adjanceyList[v1].filter(v=>v!==v2);
            this.adjanceyList[v2]=this.adjanceyList[v1].filter(v=>v!==v1);
            return true;
        }
        return false;
    }

    removeVertex(vertex){
      while(this.adjanceyList[vertex].length){
        const ele=this.adjanceyList[vertex].pop();
        this.removeEdge(vertex,ele);
      }
      delete this.adjanceyList[vertex];
      return this;
    }

    dfs(graph){
        const visited=new Set();
        

    }
}

const Basics = () => {
    return (
        <div>Basics</div>
    )
}

export default Basics