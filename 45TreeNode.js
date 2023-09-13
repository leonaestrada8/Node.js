// CÓDIGO ORIGINAL

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let current = this.root;
        if (current === null) {
            this.root = new TreeNode(value);
            return;
        }
        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = new TreeNode(value);
                    return;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = new TreeNode(value);
                    return;
                }
                current = current.right;
            }
        }
    }

    inorderTraversal(node) {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.value);
            this.inorderTraversal(node.right);
        }
    }

    traverse() {
        this.inorderTraversal(this.root);
    }
}

const tree = new BinaryTree();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.traverse();

