/*
 * @lc app=leetcode.cn id=LCP 58 lang=javascript
 *
 * [LCP 58] 积木拼接
 */

// @lc code=start
/**
 * 6 片 NxN 积木(可旋转/翻面/贴到任意一面)能否严丝合缝拼成一个 N 边长正方体,
 * 每片恰好覆盖正方体的一个面, 且每片自身中心点落在该面中心。
 *
 * 思路(状态压缩, 参考 AC 解法):
 *  - 立方体边长为 n(=shapes[0] 边长), 内部单位格用三维坐标 (x,y,z)(x,y,z in [0,n-1]),
 *    把坐标压成一个 n^3 位的 bitmask 表示"正方体外表面上被某片覆盖的格集合"。
 *  - 剪枝: 6 片积木的 '1' 总数必须恰等于正方体真实外表面的单位格数
 *          (6 个面各自 n^2 扣除重复计入的棱与角) = 2n^2 + 4(n-1)(n-2)。
 *  - 对每片积木枚举它在立方体上的全部摆放: 2 翻面(turn) x 4 旋转(rotate) x 6 所在面(side) = 48 种,
 *    每种摆放把该片每个 '1' 格映射为正方体某表面格的坐标, 得到 48 个覆盖掩码。
 *  - 集合递推: 第 0 片固定为 2 种翻面(整体可旋转, 省去 4 种旋转搜索);
 *    之后每片任取一种摆放, 若与当前已覆盖集不相交则 OR 合并。最终集合非空即可拼成。
 *  - JS 的 number 位运算只有 32 位, 而 n^3 可达 1000 位, 因此统一用 BigInt 位运算。
 *
 * @param {string[][]} shapes
 * @return {boolean}
 */
var composeCube = function(shapes) {
  const n = shapes[0].length;

  // 总 '1' 数量必须恰等于正方体外表面格数
  let total = 0;
  for (const shape of shapes) {
    for (const row of shape) {
      for (const ch of row) if (ch === '1') total++;
    }
  }
  if (total !== 2 * n * n + 4 * (n - 1) * (n - 2)) return false;

  // 计算一片积木的 48 种摆放掩码
  const cal = (shape) => {
    const res = new Array(48).fill(0n);
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (shape[i][j] !== '1') continue;
        // turn: 0=原样 1=水平翻面
        for (let turn = 0; turn < 2; turn++) {
          const i2 = i;
          const j2 = turn === 0 ? j : n - 1 - j;
          // rotate: 0/90/180/270
          const rots = [
            [i2, j2],
            [j2, n - 1 - i2],
            [n - 1 - i2, n - 1 - j2],
            [n - 1 - j2, i2],
          ];
          for (let rotate = 0; rotate < 4; rotate++) {
            const [x, y] = rots[rotate];
            // side: 立方体 6 个表面
            const sides = [
              [x, y, 0],
              [x, y, n - 1],
              [0, y, x],
              [n - 1, y, x],
              [x, 0, y],
              [x, n - 1, y],
            ];
            for (let side = 0; side < 6; side++) {
              const [x2, y2, z2] = sides[side];
              const idx = turn * 24 + rotate * 6 + side;
              res[idx] |= 1n << BigInt(x2 * n * n + y2 * n + z2);
            }
          }
        }
      }
    }
    return res;
  };

  // 第 0 片固定为 2 种翻面(翻转), 旋转与面已含在摆放枚举中但此处只取 0 与 24
  const first = cal(shapes[0]);
  let dp = new Set([first[0], first[24]]);

  for (let k = 1; k < 6; k++) {
    const masks = cal(shapes[k]);
    const next = new Set();
    for (const st of dp) {
      for (const st2 of masks) {
        if ((st & st2) === 0n) next.add(st | st2);
      }
    }
    dp = next;
    if (dp.size === 0) return false;
  }
  return dp.size > 0;
};
// @lc code=end

// TEST:
const assert = require('assert');

// 官方示例 1 -> true
assert.strictEqual(
  composeCube([
    ['000', '110', '000'],
    ['110', '011', '000'],
    ['110', '011', '110'],
    ['000', '010', '111'],
    ['011', '111', '011'],
    ['011', '010', '000'],
  ]),
  true
);

// 官方示例 2 -> false
assert.strictEqual(
  composeCube([
    ['101', '111', '000'],
    ['000', '010', '111'],
    ['010', '011', '000'],
    ['010', '111', '010'],
    ['101', '111', '010'],
    ['000', '010', '011'],
  ]),
  false
);

// 六片全满 3x3: '1' 总数 54 != 表面格 26, 必然被总格数剪枝否决
assert.strictEqual(
  composeCube([['111', '111', '111'], ['111', '111', '111'], ['111', '111', '111'],
    ['111', '111', '111'], ['111', '111', '111'], ['111', '111', '111']]),
  false
);

console.log('All tests passed!');
