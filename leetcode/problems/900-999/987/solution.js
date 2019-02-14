/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  let nodes = [];

  const traversal = (root, x, y) => {
    if (!root) return;
    let data = {
      x: x,
      y: y,
      val: root.val
    };
    nodes.push(data);
    traversal(root.left, x - 1, y - 1);
    traversal(root.right, x + 1, y - 1);
  }
  traversal(root, 0, 0);
  nodes.sort(function (a, b) {
    if (a.x - b.x > 0) return 1;
    else if (a.x - b.x == 0) {
      if (b.y - a.y > 0) return 1;
      else if (a.y - b.y == 0) {
        return a.val - b.val;
      } else return -1;
    } else return -1;
  })

  let results = [];
  let currentIndex = -1;
  let currentX = null;
  for (node of nodes) {
    if (currentX === node.x) {
      results[currentIndex].push([node.val]);
    } else {
      currentIndex++;
      currentX = node.x;
      if (!results[currentIndex]) {
        results[currentIndex] = [node.val];
      } else {
        results[currentIndex].push([node.val]);
      }
    }
  }

  return results;
};

/**
// TEST:
console.log(verticalTraversal({
  val: 0,
  right: {
    val: 1,
    right: {
      val: 3,
      right: {
        val: 5,
        right: null,
        left: null
      },
      left: {
        val: 4,
        right: null,
        left: null
      }
    },
    left: {
      val: 2,
      right: null,
      left: null
    }
  },
  left: null
}))
*/