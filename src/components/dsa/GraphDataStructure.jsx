import React from 'react';

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v != vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v != vertex1);
      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    while (this.adjacencyList[vertex].length) {
      const temp = this.adjacencyList[vertex].pop();
      this.removeEdge(temp, vertex);
    }
    delete this.adjacencyList[vertex];
    return this;
  }


  // 10 base questions of graph

  // 1) Represent a Graph Using Adjacency List

  // 2) Depth-First Search (DFS)

  dfsRecursive(graph, start, visited = []) {
    if (visited.includes(start)) return;
    console.log(start, "===>"); // Process the node
    visited.push(start);
    for (const neighbor of graph[start]) {
      this.dfsRecursive(graph, neighbor, visited);
    }
  }

  dfsIterative(graph, start) {
    let visited = [];
    const stack = [start];

    while (stack.length) {
      const node = stack.pop();
      if (!visited.includes(node)) {
        visited.push(node);
        console.log(node, "i===>");
        for (const neighbor of graph[node]) {
          stack.push(neighbor);
        }
      }
    }
  }

  bfs(graph, start) {
    const queue = [start];
    const visited = new Set();

    while (queue.length) {
      const node = queue.shift();

      if (!visited.has(node)) {
        console.log(node); // Process the node
        visited.add(node);

        for (const neighbor of graph[node]) {
          queue.push(neighbor);
        }
      }
    }
  }


}

const GraphDataStructure = () => {

  const graph = { A: ["B", "C"], B: ["A", "D"], C: ["A"], D: ["B"] };
  const myGraph = new Graph();
  myGraph.addVertex("A");
  myGraph.addVertex("B");
  myGraph.addVertex("C");
  myGraph.addVertex("D");
  myGraph.addVertex("E");
  myGraph.addVertex("F");
  myGraph.addVertex("G");
  myGraph.addEdge("A", "D");
  myGraph.addEdge("A", "E");
  myGraph.addEdge("A", "C");
  myGraph.addEdge("F", "C");
  myGraph.addEdge("E", "C");
  myGraph.addEdge("B", "C");
  myGraph.addEdge("G", "C");
  myGraph.addEdge("B", "F");
  console.log(myGraph, "myGraph");
  myGraph.dfsRecursive(graph, "A");
  myGraph.dfsIterative(graph, "A")
  return (
    <div>Graph</div>
  )
}

export default GraphDataStructure;