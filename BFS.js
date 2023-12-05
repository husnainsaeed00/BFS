class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;
        while (true) {
            if (value === currentNode.value) return undefined;
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }

    // Utility function to check if the tree is balanced
    isBalanced(node = this.root) {
        if (!node) return true;

        const leftHeight = this.calculateHeight(node.left);
        const rightHeight = this.calculateHeight(node.right);
        const diff = Math.abs(leftHeight - rightHeight);

        return diff <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right);
    }

    calculateHeight(node) {
        if (!node) return 0;
        return Math.max(this.calculateHeight(node.left), this.calculateHeight(node.right)) + 1;
    }

    // Utility function to print tree elements
    printElements() {
        console.log('Level Order:');
        this.printLevelOrder(this.root);
        console.log('\nPreorder:');
        this.printPreorder(this.root);
        console.log('\nInorder:');
        this.printInorder(this.root);
        console.log('\nPostorder:');
        this.printPostorder(this.root);
    }

    printLevelOrder(node) {
        const queue = [];
        queue.push(node);

        while (queue.length > 0) {
            const current = queue.shift();
            console.log(current.value);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }

    printPreorder(node) {
        if (node) {
            console.log(node.value);
            this.printPreorder(node.left);
            this.printPreorder(node.right);
        }
    }

    printInorder(node) {
        if (node) {
            this.printInorder(node.left);
            console.log(node.value);
            this.printInorder(node.right);
        }
    }

    printPostorder(node) {
        if (node) {
            this.printPostorder(node.left);
            this.printPostorder(node.right);
            console.log(node.value);
        }
    }

    // Rebalance the tree
    rebalance() {
        const elements = this.getElementsInOrder();
        this.root = this.buildBalancedTree(elements, 0, elements.length - 1);
    }

    getElementsInOrder() {
        const elements = [];
        this.inOrderTraversal(this.root, elements);
        return elements;
    }

    inOrderTraversal(node, elements) {
        if (node) {
            this.inOrderTraversal(node.left, elements);
            elements.push(node.value);
            this.inOrderTraversal(node.right, elements);
        }
    }

    buildBalancedTree(elements, start, end) {
        if (start > end) return null;

        const mid = Math.floor((start + end) / 2);
        const newNode = new Node(elements[mid]);

        newNode.left = this.buildBalancedTree(elements, start, mid - 1);
        newNode.right = this.buildBalancedTree(elements, mid + 1, end);

        return newNode;
    }
}

// Function to generate random numbers
function generateRandomNumbers(count) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 100));
    }
    return numbers;
}

// Create BST and insert random numbers
const bst = new BinarySearchTree();
const randomNumbers = generateRandomNumbers(10);
randomNumbers.forEach(num => bst.insert(num));

console.log('Is tree balanced initially?', bst.isBalanced());
console.log('Elements before unbalancing:');
bst.printElements();

// Add numbers > 100 to unbalance the tree
bst.insert(110);
bst.insert(120);
bst.insert(130);

console.log('Is tree balanced after adding numbers > 100?', bst.isBalanced());

// Rebalance the tree
bst.rebalance();

console.log('Is tree balanced after rebalancing?', bst.isBalanced());
console.log('Elements after rebalancing:');
bst.printElements();
