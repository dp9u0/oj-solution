/*
 * @lc app=leetcode.cn id=LCP 60 lang=javascript
 *
 * [LCP 60] 力扣泡泡龙
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 击破一个至多只有一个子节点的节点 v：
 *   - v 为叶子：从所在层删去。
 *   - v 只有一个子节点 c：v 被删除，c 的整棵子树整体上移一层。
 * 求"击破一次或不做任何操作"后所有层和的最大值。
 *
 * 思路(DFS 序 + 每层区间的前缀和, 参考官方题解)：
 *  - 用 DFS 序把每一层的节点按访问顺序排成数组。由于任一子树中的节点 DFS 区间连续,
 *    故"子树 c 落在某一层 d 的节点"必是该层数组里的一个连续区间 [L, R]。
 *  - 击破 v(子节点 c) 后, 层和的变化只发生在 c 子树覆盖的深度窗口内：
 *        对窗口内深度 d:  newSum[d] = levelSum[d] - colSum(d) + colSum(d+1)
 *    其中 colSum(t) 是"子树 c 内位于全局深度 t 的节点值之和"：
 *    子树里原在 d+1 层的节点上移进 d 层(+), 原在 d 层的节点继续上移出 d 层(-), v 自身被删。
 *  - 逐层枚举每个可击破节点, 用区间前缀和 O(1) 求 colSum, 并配合两种剪枝：
 *      a) 若当前区间已覆盖整层, 则该层(及更深处)击破后不会产生新的更大的层和, 提前结束;
 *      b) 若某区间之前已被同等处理过(端点标记相同), 更深结果必然重复, 提前结束。
 *
 * @param {TreeNode} root
 * @return {number}
 */
var getMaxLayerSum = function(root) {
  // levelInfos[d] 为深度 d 的节点数组, 下标 0 是哨兵(值为 0, 便于前缀和)
  // 每个元素: { pref: 该位置(含)之前的层内前缀和, use: 占用标记(端点), pl: 左子区间起点, pr: 右子区间终点 }
  const levelInfos = [];
  const removeNodes = []; // 可击破节点: { pos: 在所属层的下标, level: 深度 }

  // 迭代 DFS(Euler), 模拟递归访问顺序: 进入时登记节点, 退出时补上右指针
  {
    const ensure = (level) => {
      while (levelInfos.length <= level) {
        levelInfos.push([{ pref: 0, use: -1, pl: -1, pr: -1 }]);
      }
    };
    const stack = [{ node: root, level: 0, phase: 0 }];
    while (stack.length) {
      const f = stack.pop();
      const { node, level, phase } = f;
      if (phase === 0) {
        ensure(level);
        ensure(level + 1);
        const arr = levelInfos[level];
        const pos = arr.length;
        node.pos = pos;
        arr.push({ pref: arr[pos - 1].pref + node.val, use: -1, pl: levelInfos[level + 1].length, pr: -1 });
        // 退出帧(处理子节点后再补 pr)
        stack.push({ node, level, phase: 1 });
        // 先压右再压左, 保证左子树先被访问
        if (node.right) stack.push({ node: node.right, level: level + 1, phase: 0 });
        if (node.left) stack.push({ node: node.left, level: level + 1, phase: 0 });
      } else {
        const childCount = (node.left ? 1 : 0) + (node.right ? 1 : 0);
        const arr = levelInfos[level];
        arr[node.pos].pr = levelInfos[level + 1].length - 1;
        if (childCount !== 2) removeNodes.push({ pos: node.pos, level });
      }
    }
  }

  const height = levelInfos.length - 1; // 去掉末尾可能存在的空层(哨兵层)
  let res = -Infinity;
  // 不击破任何节点的基准答案
  for (let d = 0; d < height; d++) {
    const total = levelInfos[d][levelInfos[d].length - 1].pref;
    if (total > res) res = total;
  }

  // 依次尝试击破每个可击破节点
  removeNodes.forEach((rn, idx) => {
    let level = rn.level;
    let left = rn.pos;
    let right = rn.pos;
    // 击破节点自身从它的层中被删去的值
    let lost = levelInfos[level][left].pref - levelInfos[level][left - 1].pref;

    for (; level < height; level++) {
      if (left > right) break;
      const lvl = levelInfos[level];
      // 剪枝 a: 该层节点全在要上移的子树里 → 该层会被清空, 其下各层也只是平移, 无新收益
      if (right - left + 1 === lvl.length - 1) break;
      const tL = lvl[left];
      const tR = lvl[right];
      // 剪枝 b: 该区间之前已被处理过(端点标记一致) → 更深处结果相同, 无需重复
      if (tL.use !== -1 && tL.use === tR.use) break;
      tL.use = tR.use = idx;

      // 下一层中与当前区间对应的"子区间"节点和(它们会补进本层)
      let add = 0;
      if (tL.pl <= tR.pr) {
        const nl = levelInfos[level + 1];
        add = nl[tR.pr].pref - nl[tL.pl - 1].pref;
      }
      const total = lvl[lvl.length - 1].pref;
      const newSum = total - lost + add;
      if (newSum > res) res = newSum;

      left = tL.pl;
      right = tR.pr;
      lost = add;
    }
  });

  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToTree } = require('./utils/arrayToTree');

// 官方示例
assert.strictEqual(getMaxLayerSum(arrayToTree([6, 0, 3, null, 8])), 11);
assert.strictEqual(getMaxLayerSum(arrayToTree([5, 6, 2, 4, null, null, 1, 3, 5])), 9);
assert.strictEqual(getMaxLayerSum(arrayToTree([-5, 1, 7])), 8);

// ---- 暴力对拍: 每次击破都重新从数组建树并物理替换指针 ----
function bruteMax(arr) {
  const childCount = (n) => (n.left ? 1 : 0) + (n.right ? 1 : 0);
  // 建树, 返回 { root, nodes: 按 BFS 顺序的节点表 }
  const build = () => {
    const rt = { val: arr[0], left: null, right: null };
    const nodes = [rt];
    const q = [rt];
    let i = 1;
    while (i < arr.length) {
      const nd = q.shift();
      const lv = arr[i++];
      if (lv !== null && lv !== undefined) {
        nd.left = { val: lv, left: null, right: null };
        nodes.push(nd.left);
        q.push(nd.left);
      }
      if (i < arr.length) {
        const rv = arr[i++];
        if (rv !== null && rv !== undefined) {
          nd.right = { val: rv, left: null, right: null };
          nodes.push(nd.right);
          q.push(nd.right);
        }
      }
    }
    return { root: rt, nodes };
  };
  // 求某棵树的最大层和(BFS 逐层累加)
  const maxLayer = (rt) => {
    if (!rt) return -Infinity;
    let best = -Infinity;
    let cur = [rt];
    while (cur.length) {
      const sum = cur.reduce((s, n) => s + n.val, 0);
      if (sum > best) best = sum;
      const next = [];
      for (const n of cur) { if (n.left) next.push(n.left); if (n.right) next.push(n.right); }
      cur = next;
    }
    return best;
  };
  // 给一棵树补上 parent 指针
  const setParent = (rt) => {
    rt.parent = null;
    const st = [rt];
    while (st.length) {
      const nd = st.pop();
      if (nd.left) { nd.left.parent = nd; st.push(nd.left); }
      if (nd.right) { nd.right.parent = nd; st.push(nd.right); }
    }
  };

  let best = -Infinity;
  const { root, nodes } = build();
  best = maxLayer(root);
  for (let k = 0; k < nodes.length; k++) {
    const fresh = build();
    const v = fresh.nodes[k];
    if (childCount(v) > 1) continue; // 不可击破
    setParent(fresh.root);
    const repl = v.left || v.right || null;
    if (v.parent === null) {
      fresh.root = repl; // 击破的是根
    } else if (v.parent.left === v) {
      v.parent.left = repl;
    } else {
      v.parent.right = repl;
    }
    const cand = maxLayer(fresh.root);
    if (cand > best) best = cand;
  }
  return best;
}

// 构造随机"层序"数组(可含负值, 可含缺位子树)
function randomTreeArray(maxNodes) {
  const n = 2 + Math.floor(Math.random() * maxNodes);
  const arr = [Math.floor(Math.random() * 21) - 10];
  const q = [0];
  let idx = 0;
  while (q.length && arr.length < n) {
    const pos = q.shift();
    idx = pos; // unused
    // 左
    if (arr.length < n && Math.random() < 0.7) {
      const v = Math.floor(Math.random() * 21) - 10;
      arr.push(v);
      q.push(arr.length - 1);
    } else {
      arr.push(null);
    }
    if (arr.length < n && Math.random() < 0.7) {
      const v = Math.floor(Math.random() * 21) - 10;
      arr.push(v);
      q.push(arr.length - 1);
    } else {
      arr.push(null);
    }
  }
  // 去掉尾部多余 null
  while (arr.length && arr[arr.length - 1] === null) arr.pop();
  return arr;
}

for (let t = 0; t < 2000; t++) {
  const arr = randomTreeArray(10);
  const got = getMaxLayerSum(arrayToTree(arr.slice())); // arrayToTree 会消费入参数组
  const exp = bruteMax(arr);
  assert.strictEqual(got, exp, `mismatch on [${arr}] got=${got} exp=${exp}`);
}

console.log('All tests passed!');
