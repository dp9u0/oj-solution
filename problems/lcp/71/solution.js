/*
 * @lc app=leetcode.cn id=LCP 71 lang=javascript
 *
 * [LCP 71] 集水器
 */

// @lc code=start
/**
 * 物理模型:
 *  - 每个方格被对角线隔板(若有)切成若干三角空间。隔板透气(空气可穿)、水不可穿。
 *  - 初始全浸水, 竖直向上取出后, 水向下流、空气从上方进入; 只有被隔板密封、
 *    空气到不了、水也排不出的密闭空间才最终留水。每个完整方格蓄水量为 2。
 *
 * 建图(灵神解法思路, 两遍并查集):
 *  - 把网格四周各加一圈 padding, 每个真实格子 (r,c) 对应 4 个"边邻接区":
 *      up(0) right(1) down(2) left(3) —— 每区为对角/边切出的一个小三角空间。
 *  - 相邻格子共享边: 本格 right(1) <-> 右邻格 left(3) 恒连; 本格 down(2) <-> 下邻格 up(0) 恒连。
 *  - 同格内(由隔板决定):
 *      '.': 0-1-2-3 全连通(整格为一大腔)。
 *      'l'(\ 左上→右下): 分成右上三角{up,right} 与 左下三角{down,left}: 连 0-1、2-3, 断 1-2、3-0。
 *      'r'(/ 左下→右上): 分成左上三角{up,left} 与 右下三角{right,down}: 连 3-0、1-2, 断 0-1、2-3。
 *  - 虚拟水源 id=size-1 表示"外界/空气": 网格最外圈朝外的边区并入水源。
 *
 * 判定留水:
 *  第一遍 dsuAll 全量合并(每行连向更高行): 某区 find==水源 ⇒ 该区连通外界(开放, 会被排空)。
 *  第二遍 dsuRow 自下而上逐行合并(本行暂不连向更高行): 逐行统计该行每区,
 *    若 dsuAll.find==水源 且 dsuRow.find!=水源 ⇒ 该区虽属开放水域, 但自下而上的抬升过程中
 *    与上方的通道被水/结构封住, 水不会流走 ⇒ 留水 cnt++。
 *  每格 2 个区, 故蓄水量 = cnt / 2。
 *
 * @param {string[]} shape
 * @return {number}
 */
var reservoir = function(shape) {
  const row = shape.length;
  const column = shape[0].length;
  const row2 = row + 2;
  const column2 = column + 2;
  const size = row2 * column2 * 4 + 1;

  // row 从下往上考虑更符合习惯
  shape.reverse();

  // ---- 并查集辅助 ----
  const find = (parent, x) => {
    if (parent[x] !== x) parent[x] = find(parent, parent[x]);
    return parent[x];
  };
  const merge = (parent, x, y) => {
    parent[find(parent, x)] = find(parent, y);
  };

  // 四周外圈朝外的边区并入虚拟水源 size-1
  const mergeWater = (parent) => {
    for (let r = 1; r < row2 - 1; r++) {
      merge(parent, r * column2 * 4 + 1, size - 1);                   // 最左列格子的 right 区
      merge(parent, r * column2 * 4 + (column2 - 1) * 4 + 3, size - 1); // 最右列格子的 left 区
    }
    for (let c = 1; c < column2 - 1; c++) {
      merge(parent, c * 4, size - 1);                                 // 最下行(底)格子的 up 区
      merge(parent, (row2 - 1) * column2 * 4 + c * 4 + 2, size - 1);  // 最上行(顶)格子的 down 区
    }
  };

  // 合并一行内部及与相邻行/列的关系
  //   cell (rIndex,c): idx = rIndex*column2*4 + c*4; 区内 0=up,1=right,2=down,3=left
  //   mergeUp: 是否把本行 up 区连向更高一行
  const mergeRow = (mergeUp, rIndex, parent) => {
    for (let c = 1; c < column2 - 1; c++) {
      const idx = rIndex * column2 * 4 + c * 4;
      const cell = shape[rIndex - 1][c - 1];
      if (mergeUp) merge(parent, idx, idx + column2 * 4 + 2); // up <-> 上一格 down
      if (cell !== 'r') merge(parent, idx, idx + 1);          // up <-> right
      merge(parent, idx + 1, idx + 7);                        // right <-> 右邻格 left
      if (cell !== 'l') merge(parent, idx + 1, idx + 2);      // right <-> down
      merge(parent, idx + 2, idx - column2 * 4);              // down <-> 下邻格 up
      if (cell !== 'r') merge(parent, idx + 2, idx + 3);      // down <-> left
      merge(parent, idx + 3, idx - 3);                        // left <-> 左邻格 right
      if (cell !== 'l') merge(parent, idx + 3, idx);          // left <-> up
    }
  };

  const mergeAll = (parent) => {
    mergeWater(parent);
    for (let r = 1; r < row2 - 1; r++) {
      mergeRow(true, r, parent);
    }
  };

  // ---- 统计 ----
  const parentAll = new Array(size);
  const parentRow = new Array(size);
  for (let i = 0; i < size; i++) {
    parentAll[i] = i;
    parentRow[i] = i;
  }

  mergeAll(parentAll); // 全量: 哪些区连通外界

  let cnt = 0;
  mergeWater(parentRow);

  for (let r = 1; r < row2 - 1; r++) {
    mergeRow(false, r, parentRow); // 从低往高连接一行, 暂不连上方

    for (let c = 1; c < column2 - 1; c++) {
      for (let i = 0; i < 4; i++) {
        const idx = r * column2 * 4 + c * 4 + i;
        if (find(parentAll, idx) === find(parentAll, size - 1) &&
            find(parentRow, idx) !== find(parentRow, size - 1)) {
          cnt++; // 开放水域中、当下被下方封住不会流走的水区
        }
      }
    }
  }

  return Math.floor(cnt / 2);
};
// @lc code=end

// TEST:
const assert = require('assert');

// 官方示例
assert.strictEqual(reservoir(['....rl', 'l.lr.r', '.l..r.', '..lr..']), 18);
assert.strictEqual(reservoir(['.rlrlrlrl', 'll..rl..r', '.llrrllrr', '..lr..lr.']), 18);
assert.strictEqual(reservoir(['rlrr', 'llrl', 'llr.']), 6);
assert.strictEqual(reservoir(['...rl...', '..r..l..', '.r.rl.l.', 'r.r..l.l', 'l.l..rl.', '.l.lr.r.', '..l..r..', '...lr...']), 30);

// 边界: 无隔板整片开放 -> 水全流出, 蓄水 0
assert.strictEqual(reservoir(['...', '...', '...']), 0);
assert.strictEqual(reservoir(['...']), 0);
assert.strictEqual(reservoir(['r']), 0);
assert.strictEqual(reservoir(['.']), 0);

console.log('All tests passed!');
