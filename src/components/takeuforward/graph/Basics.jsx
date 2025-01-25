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
        if (this.adjanceyList[vertex1] && this.adjanceyList[vertex2]) {
            this.adjanceyList[vertex1].push(vertex2);
            this.adjanceyList[vertex2].push(vertex1);
        }
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjanceyList[vertex1] && this.adjanceyList[vertex2]) {
            this.adjanceyList[vertex1] = this.adjanceyList[vertex1].filter(v => v !== vertex2);
            this.adjanceyList[vertex2] = this.adjanceyList[vertex2].filter(v => v !== vertex1);
        }
    }

    removeVertex(vertex) {
        if (!this.adjanceyList[vertex]) return undefined;
        while (this.adjanceyList[vertex].lengrh) {
            const temp = this.adjanceyList[vertex].pop();
            this.removeEdge(vertex, temp);
        }
        delete this.adjanceyList[vertex];
        return this;
    }

    dfs(graph, start) {
        const stack = [start];
        const visited = new Set();
        while (stack.length) {
            const current = stack.pop();
            if (!visited.has(current)) {
                visited.add(current);
                console.log(current);
                for (let neighbor of graph[current]) {
                    stack.push(neighbor);
                }
            }
        }
    }
    dfsr(graph, start, visited = new Set()) {
        visited.add(start);
        console.log(start);
        for (let neighbor of graph[start]) {
            if (!visited.has(neighbor)) {
                this.dfsr(graph, neighbor, visited);
            }
        }
    }

    bfs(graph, start) {
        const queue = [start];
        const visited = new Set();
        while (queue.length) {
            const current = queue.shift();
            if (!visited.has(current)) {
                visited.add(current);
                console.log(current);
                for (let neighbor of graph[current]) {
                    queue.push(neighbor);
                }
            }
        }
    }

    bfsr(graph, queue, visited = new Set()) {
        // Base case: Stop recursion if the queue is empty
        if (queue.length === 0) return;

        const node = queue.shift(); // Dequeue the first element
        console.log(node); // Process the current node
        visited.add(node);

        // Enqueue all unvisited neighbors
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
                visited.add(neighbor); // Mark as visited when enqueued
            }
        }

        // Recursive call with the updated queue
        this.bfsr(graph, queue, visited);
    }

    countConnectedComponents(graph) {
        const visited = new Set();
        let count = 0;
        const dfs = (element) => {
            visited.add(element);
            for (const neighbor of graph[element]) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }


        }


        for (const element of Object.keys(graph).map(Number)) {
            if (!visited.has(element)) {
                count++;
                dfs(element);
            }
        }

        return count;
    }

    //Find Shortest Path (Unweighted Graph)
    findShortestPath(graph, start, end) {
        const queue = [start];
        const visited = new Set();
        const parent = {};
        visited.add(start); // Add the start node to the visited set
        while (queue.length) {
            const current = queue.shift();
            if (current === end) {
                const path = [];
                let node = end;
                while (node !== undefined) {
                    path.push(node);
                    node = parent[node];
                }
                return path.reverse();
            }

            for (const neighbor of graph[current]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                    parent[neighbor] = current; // Set parent for path reconstruction
                }
            }

        }
        return [];
    }

    detectCycledirected(graph) {
        const visited = new Set();

        const dfs = (node, parent) => {
            visited.add(node);

            // Explore all neighbors
            for (const neighbor of graph[node]) {
                // If the neighbor is not visited and we find a cycle, return true
                if (!visited.has(neighbor)) {
                    if (dfs(neighbor, node)) return true;
                }
                // If the neighbor is visited and it's not the parent, a cycle exists
                else if (neighbor !== parent) {
                    return true;
                }
            }

            return false;
        };

        // Check all nodes in the graph
        for (const node of Object.keys(graph)) {
            if (!visited.has(node)) {
                if (dfs(node, null)) return true;
            }
        }

        return false; // No cycle found
    }
}

const Basics = () => {

    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("B", "D");

    // graph.bfs(graph.adjanceyList, "A");
    // graph.bfsr(graph.adjanceyList, ["A"]);


    // graph.dfs(graph.adjanceyList, "A");
    // graph.dfsr(graph.adjanceyList, "A");



    const newGraph = {
        0: [1],
        1: [0],


    };
    //  const connectedGraph=graph.countConnectedComponents(newGraph);
    // console.log({connectedGraph});

    const graphForSortedPath = {
        A: ["B", "C"],
        B: ["A", "D", "E"],
        C: ["A", "F"],
        D: ["B"],
        E: ["B", "F"],
        F: ["C", "E"]
    };

    // console.log("graphForSortedPath",graph.findShortestPath(graphForSortedPath, "A", "F"));

    const graph1 = {
        0: [1],
        1: [2],
        2: [0]
    };

    //console.log("graphForSortedPath",graph.detectCycleinDirectedGraph(newGraph));
    return (
        <div>Basics</div>
    )
}

export default Basics