/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.head = null;
  this.length = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index >= this.length) return -1;
  let p = this.head,
    i = 0;
  while (i++ !== index) {
    p = p.next;
  }
  return p.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.head = {
    val: val,
    next: this.head
  };
  this.length++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (this.length === 0) {
    this.addAtHead(val);
    return;
  }
  let p = this.head;
  while (p.next) {
    p = p.next;
  }
  p.next = {
    val: val,
    next: null
  };
  this.length++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.length) return;
  if (index === this.length) {
    this.addAtTail(val);
    return;
  }
  if (index === 0) {
    this.addAtHead(val);
    return;
  }
  let i = 0,
    p = this.head;
  while (i++ < index - 1) {
    p = p.next;
  }
  let prev = p,
    next = p ? p.next : null;
  prev.next = {
    val: val,
    next: next
  };
  this.length++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.length) return;
  let i = 0,
    p = this.head;
  while (i++ < index - 1) {
    p = p.next;
  }
  let prev = p,
    next = p.next.next;
  prev.next = next;
  this.length--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */