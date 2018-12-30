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
var getMinimumDifference = function (root) {
  // console.log(root)
  let solver = solve(root);
  return solver.minDifference;
};
const MAX_INT = ~0 >>> 0;

function solve(node) {
  if (!node) {
    return null;
  }
  let min = node.val;
  let max = node.val;
  let diffL = MAX_INT;
  let diffR = MAX_INT;
  let minDifference = MAX_INT;
  let minDifferenceL = MAX_INT;
  let minDifferenceR = MAX_INT;
  let solverL = solve(node.left)
  if (solverL) {
    // console.log(solverL)
    diffL = node.val - solverL.max;
    minDifferenceL = solverL.minDifference;
    min = solverL.min;
  }
  let solverR = solve(node.right)
  if (solverR) {
    // console.log(solverR)
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
let root;
root = {
  val: 5,
  right: {
    val: 7,
    right: null,
    left: null
  },
  left: {
    val: 4,
    right: null,
    left: null
  }
}

// getMinimumDifference(root);

root = {
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

getMinimumDifference(root);
*/