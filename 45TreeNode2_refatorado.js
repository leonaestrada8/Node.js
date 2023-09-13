// CÓDIGO REFATORADO

class TreeNode2 {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree2 {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this._insert(this.root, value);
    }

    _insert(node, value) {
        if (node == null) {
            return new TreeNode2(value);
        }
        if (value < node.value) {
            node.left = this._insert(node.left, value);
        } else {
            node.right = this._insert(node.right, value);
        }
        return node;
    }

    inorderTraversal() {
        this._inorderTraversal(this.root);
    }

    _inorderTraversal(node) {
        if (node != null) {
            this._inorderTraversal(node.left);
            console.log(node.value);
            this._inorderTraversal(node.right);
        }
    }
}

const tree = new BinaryTree2();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.inorderTraversal();

