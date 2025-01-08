import React from 'react';

class node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor(value) {
        this.root = null;
    }

    rContains(value, currentNode = this.root) {
        if (currentNode === null) return false;
        if (value === currentNode.value) return true;
        if (value < currentNode.value) {
            return this.rContains(value, currentNode.left);
        } else {
            return this.rContains(value, currentNode.right);
        }
    }

    rInsert(value) {
        const insertRecursively = (node, value) => {
            if (node === null) return new node(value);

            if (value < node.value) {
                node.left = insertRecursively(node.left, value);
            } else if (value > node.value) {
                node.right = insertRecursively(node.right, value);
            }
            return node;
        }
        this.root = insertRecursively(this.root, value);
    }

    rDelete(value) {

        const findMin = (node) => {
            while (node.left === null) {
                node = node.left;
            }
            return node;
        }

        const deleteRecursively = (node, value) => {
            if (node === null) return null;

            if (value < node.value) {
                node.left = deleteRecursively(node.left, value);
            } else if (value > node.value) {
                node.right = deleteRecursively(node.right, value);
            } else {
                if (node.left === null && node.right === null) return null;
                if (node.left === null) return node.right;
                if (node.right === null) return node.left;

                let successor = findMin(node.right);
                node.value = successor.value;
                node.right = deleteRecursively(node.right, successor.value);
            }
            return node;
        }

        this.root = deleteRecursively(this.root, value);
    }

    // tree travserl

    // 1) BFS Breadth First Search

    BFS() {
        let currentNode = this.root;
        let results = [];
        let queue = [];
        queue.push(currentNode);
        while (queue.length) {
            currentNode = queue.shift();
            results.push(currentNode);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return results;
    }

    // 2) DFS Depth First Search

    //a) preOrder
    DFSPreorder() {
        let results = [];
        const traverse = (currentNode) => {
            results.push(currentNode);
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.right) traverse(currentNode.right);
        }
        traverse(this.root);
    }

    //b) postOrder
    DFSpostOrder() {
        let results = [];
        const traverse = (currentNode) => {
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.right) traverse(currentNode.right);
            results.push(currentNode);
        }
        traverse(this.root);
    }

    //c) inOrder
    DFSinOrder() {
        let results = [];
        const traverse = (currentNode) => {
            if (currentNode.left) traverse(currentNode.left);
            results.push(currentNode);
            if (currentNode.right) traverse(currentNode.right);
        }
        traverse(this.root);
    }


    // Questions

    invertTree(root) {
        if (root === null) return null;
        let temp = root.left;
        root.left = root.right;
        root.right = temp;
        if (root.left) this.invertTree(root.left);
        if (root.right) this.invertTree(root.right);
        return root;
    }
    maxDepth(root) {
        if (root === null) return 0;
        return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
    }

    diameterOfBinaryTree(root) {
        let dia = 0;
        const height = (rootNode) => {
            if (rootNode === null) return 0;
            const leftHeight = height(rootNode.left);
            const rightHeight = height(rootNode.right);
            if (dia < (leftHeight + rightHeight)) {
                dia = leftHeight + rightHeight;
            }
            if (leftHeight > rightHeight) {
                return leftHeight + 1;
            } else {
                return rightHeight + 1;
            }
        }
        height(root)
        return dia;
    }

    isSameTree(p, q) {
        if (!p && !q) return true;
        if (p && q && p.value === q.value) {
            return (
                this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right)
            );
        } else {
            return false;
        }
    }

    isSubtree(root, subRoot) {

        const isSameTree = (s, t) => {
            if (!s && !t) return true;
            if (!s || !t) return false;
            if (s.val !== t.val) return false;
            return this.isSameTree(s.left, t.left) && this.isSameTree(s.right, t.right);
        }
        if (!subRoot) return true;
        if (!root) return false;
        if (this.isSameTree(root, subRoot)) return true;
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    buildTree(preorder, inorder) {

        const inorderIndexMap = new Map();
        inorder.forEach((val, index) => inorderIndexMap.set(val, index));

        let preorderIndex = 0;

        class TreeNode {
            constructor(val, left = null, right = null) {
                this.value = val;
                this.left = left;
                this.right = right;
            }

        }

        function arrayToTree(left, right) {


            if (left > right) return null;

            const rootVal = preorder[preorderIndex++];
            const root = new TreeNode(rootVal);

            const rootIndex = inorderIndexMap.get(rootVal);

            root.left = arrayToTree(left, rootIndex - 1);
            root.right = arrayToTree(rootIndex + 1, right);

            return root;
        }

        return arrayToTree(0, inorder.length - 1);

    }

    levelOrder(root) {
        let queue = [];
        let results = [];
        if (root) queue.push(root);
        while (queue.length) {
            let levelLength = queue.length;
            let res = [];
            for (let i = 0; i < levelLength; i++) {
                let ele = queue.unshift();
                res.push(ele);
                if (ele.left) queue.push(ele.left);
                if (ele.right) queue.push(ele.right);
            }
            results.push(res);
        }
        return results;
    }

    rightSideView(root) {
        const res = [];
        let queue = [];
        if (root) queue.push(root);

        while (queue.length > 0) {
            const levelSize = queue.length;

            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();
                if (i === levelSize - 1) {
                    res.push(node.val);
                }
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }

        }
        return res;
    }

    isValidBST(root) {

        const valid = (node, left, right) => {
            if (!node) {
                return true;
            }
            if (!(left < node.val && node.val < right)) {
                return false;
            }

            return (
                valid(node.left, left, node.val) &&
                valid(node.right, node.val, right)
            );
        }
        return valid(root, -Infinity, Infinity);
    }

    kthSmallest(root, k) {
        const sortedEle=[];
        const fillSortedEle=(node)=>{
            if(node===null) return;
            if(node.left) fillSortedEle(node.left);
            sortedEle.push(node.val);
            if(node.right) fillSortedEle(node.right);
        }
        fillSortedEle(root);
        return sortedEle[k-1];
    }
}

function BinarySearchTree() {
    return (
        <div>BST</div>
    )
}

export default BinarySearchTree