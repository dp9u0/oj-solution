/*
 * @lc app=leetcode.cn id=1628 lang=javascript
 *
 * [1628] 设计带解析函数的表达式树
 */

// @lc code=start
/**
 * This is the interface for the expression tree Node.
 * You should not remove it, and you can define some classes to implement it.
 */

var Node = function () {
  if (this.constructor === Node) {
    throw new Error('Cannot instanciate abstract class');
  }
};

Node.prototype.evaluate = function () {
  throw new Error('Cannot call abstract method')
};

/**
 * This is the TreeBuilder class.
 * You can treat it as the driver code that takes the postinfix input
 * and returns the expression tree representing it as a Node.
 */

const OPS = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => Math.trunc(a / b), // truncate toward zero
};

class NumericNode extends Node {
  constructor(val) {
    super();
    this.val = val;
  }
  evaluate() {
    return this.val;
  }
}

class OperatorNode extends Node {
  constructor(op, left, right) {
    super();
    this.op = op;
    this.left = left;
    this.right = right;
  }
  evaluate() {
    return OPS[this.op](this.left.evaluate(), this.right.evaluate());
  }
}

class TreeBuilder {
  /**
   * @param {string[]} s
   * @return {Node}
   */
  buildTree(postfix) {
    const stack = [];
    for (const t of postfix) {
      if (OPS[t]) {
        const right = stack.pop();
        const left = stack.pop();
        stack.push(new OperatorNode(t, left, right));
      } else {
        stack.push(new NumericNode(parseInt(t)));
      }
    }
    return stack[0];
  }
}

/**
 * Your TreeBuilder object will be instantiated and called as such:
 * var obj = new TreeBuilder();
 * var expTree = obj.buildTree(postfix);
 * var ans = expTree.evaluate();
 */
// @lc code=end

// TEST:
console.log(new TreeBuilder().buildTree(["3","4","+","2","*","7","/"]).evaluate()); // 2
console.log(new TreeBuilder().buildTree(["4","5","7","2","+","-","*"]).evaluate()); // -16
console.log(new TreeBuilder().buildTree(["10"]).evaluate()); // 10
