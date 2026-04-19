/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (!root) return "null";
    const nodes = [root];
    let end = false;
    let i = 0;
    while (!end) {
        end = true;
        let lastIndex = nodes.length - 1;
        while (i <= lastIndex) {
            const node = nodes[i];
            if (node) {
                end = false;
                nodes.push(node.left);
                nodes.push(node.right);
            }
            i++;
        }
    }
    while (!nodes[nodes.length - 1]) {
        nodes.pop();
    }
    return nodes.map(n => !n ? "null" : n.val).join(",")
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    array = data.split(',').map(v => v === "null" ? null : Number(v))
    if (!array.length || array[0] === null) {
        return null;
    }
    let root = { val: array.shift(), left: null, right: null }
    let q = [root];
    while (array.length) {
        let node = q.shift();
        let val = array.shift();
        if (val || val === 0) {
            node.left = { val, left: null, right: null }
            q.push(node.left);
        }
        val = array.shift();
        if (val || val === 0) {
            node.right = { val, left: null, right: null }
            q.push(node.right);
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


// TEST:

const { arrayToTree } = require("./utils/arrayToTree");
let root = arrayToTree([1, 2, 3, null, null, 4, 5])
let result = serialize(root)
console.log(result)
let node = deserialize(result)
result = serialize(node)
console.log(result)


//

root = arrayToTree([0, 2, 3, null, null, 4, 5, 6, 7])
result = serialize(root)
console.log(result)
// node = deserialize(result)
// result = serialize(node)
// console.log(result)


//

root = arrayToTree([4, -7, -3, null, null, -9, -3, 9, -7, -4, null, 6, null, -6, -6, null, null, 0, 6, 5, null, 9, null, null, -1, -4, null, null, null, -2])
result = serialize(root)
console.log(result)
// node = deserialize(result)
// result = serialize(node)
// console.log(result)

// 
root = arrayToTree([1, 2])
result = serialize(root)
console.log(result)
node = deserialize(result)
result = serialize(node)
console.log(result)


root = arrayToTree([])
result = serialize(root)
console.log(result)
node = deserialize(result)
result = serialize(node)
console.log(result)