var Node = function(val = null, next = null) {
    this.val = val;
    this.next = next;
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.length = 0;
    this.root = null;
    this.tail = null;
};

MyLinkedList.prototype.size = function() {
    return this.length;
}

MyLinkedList.prototype.getNode = function(index) {
    if (index === 0) return this.root;
    if (index >= this.length) return null;
    let i = 1;
    let node = this.root.next;
    while (i < index) {
        node = node.next;
        i++;
    }
    return node;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    const node = this.getNode(index);
    return node ? node.val : -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    if (this.root) {
        const newNode = new Node(val, this.root);
        this.root = newNode;
    } else {
        const newNode = new Node(val);
        this.root = newNode;
        this.tail = newNode;
    }
    this.length+=1;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
        this.root = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === 0) {
        this.addAtHead(val);
    } else if (index === this.length) {
        this.addAtTail(val);
    } else if (index < 0 || index > this.length) {
        return;
    } else {
        const node = this.getNode(index);
        const prevNode = this.getNode(index - 1);
        prevNode.next = new Node(val, node);
        this.length+=1;
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (!this.root || index >= this.length || index < 0) return;

    if (index === 0) {
        this.root = this.root.next;
    } else {
        const prevNode = this.getNode(index - 1);
        const node = this.getNode(index);
        if (this.tail === node) {
            this.tail = prevNode;
            this.tail.next = null;
        } else {
            prevNode.next = node.next;
            node.next = null;
        }
    }
    this.length-=1;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
