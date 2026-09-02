/*
 * @lc app=leetcode.cn id=LCR 152 lang=javascript
 *
 * [LCR 152] 验证二叉搜索树的后序遍历序列
 */

// @lc code=start
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyTreeOrder = function(postorder) {
  const check = (i, j) => {
    if (i >= j) return true; // empty or single node
    const root = postorder[j];
    // find the split point: first element > root
    let m = i;
    while (postorder[m] < root) m++;
    // verify right part is all > root
    for (let k = m; k < j; k++) {
      if (postorder[k] < root) return false;
    }
    return check(i, m - 1) && check(m, j - 1);
  };
  return check(0, postorder.length - 1);
};
// @lc code=end

// TEST:
function test(postorder, expected) {
  const res = verifyTreeOrder(postorder);
  const pass = res === expected;
  console.log(`${pass ? 'PASS' : 'FAIL'} postorder=[${postorder}] => ${res} (expected ${expected})`);
  return pass;
}

let allPass = true;
allPass &= test([4, 9, 6, 5, 8], false); // 示例1
allPass &= test([4, 6, 5, 9, 8], true);  // 示例2
allPass &= test([1, 3, 2], true);        // 根2 左{1} 右{3}
allPass &= test([1, 2, 3, 4, 5], true);  // 退化为单链右斜树
allPass &= test([5, 4, 3, 2, 1], true);  // 单链左斜树
allPass &= test([1], true);              // 单节点
allPass &= test([], true);               // 空树
allPass &= test([3, 1, 2], false);       // 右子树中出现比根小的值
allPass &= test([1, 6, 3, 2, 5], false); // 中段断裂
allPass &= test([2, 4, 3, 6, 8, 7, 5], true); // 完整均衡树
console.log(allPass ? 'ALL TESTS PASSED' : 'SOME TESTS FAILED');
