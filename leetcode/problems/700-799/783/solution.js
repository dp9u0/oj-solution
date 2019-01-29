/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
  let solver = solve(root);
  return solver.minDifference;
};

function solve(node) {
  if (!node) {
    return null;
  }
  let min = node.val;
  let max = node.val;
  let diffL = Infinity;
  let diffR = Infinity;
  let minDifference = Infinity;
  let minDifferenceL = Infinity;
  let minDifferenceR = Infinity;
  let solverL = solve(node.left)
  if (solverL) {
    diffL = node.val - solverL.max;
    minDifferenceL = solverL.minDifference;
    min = solverL.min;
  }
  let solverR = solve(node.right)
  if (solverR) {
    diffR = solverR.min - node.val;
    minDifferenceR = solverR.minDifference;
    max = solverR.max;
  }
  minDifference = Math.min(minDifference, diffL, diffR, minDifferenceL, minDifferenceR);
  return {
    minDifference,
    min,
    max
  };
}

/**
// TEST:

let root = {
  val: 334,
  right: {
    val: 507,
    right: {
      val: 678,
      right: null,
      left: null
    },
    left: null
  },
  left: {
    val: 277,
    right: {
      val: 285,
      right: null,
      left: null
    },
    left: null
  }
}

minDiffInBST(root);
*/