/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  let results = [];
  let children = [root];
  while (children.length) {
    let currents = children;
    let result = []
    children = [];
    while (currents.length) {
      let current = currents.shift();
      result.push(current.val)
      children = [...children, ...current.children];
    }
    results.push(result);
  }
  return results;
};


/**
// TEST:
console.log(levelOrder({
  "$id": "1",
  "children": [{
    "$id": "2",
    "children": [{
      "$id": "5",
      "children": [],
      "val": 5
    }, {
      "$id": "6",
      "children": [],
      "val": 6
    }],
    "val": 3
  }, {
    "$id": "3",
    "children": [],
    "val": 2
  }, {
    "$id": "4",
    "children": [],
    "val": 4
  }],
  "val": 1
}))
*/