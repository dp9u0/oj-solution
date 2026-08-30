/*
 * @lc app=leetcode id=864 lang=javascript
 *
 * [864] Shortest Path to Get All Keys
 */

// @lc code=start
/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let sx = 0;
  let sy = 0;
  let keyCount = 0;

  // 扫描网格:定位起点,统计钥匙总数
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const ch = grid[i][j];
      if (ch === '@') {
        sx = i;
        sy = j;
      } else if (ch >= 'a' && ch <= 'f') {
        keyCount++;
      }
    }
  }

  const allKeys = (1 << keyCount) - 1;

  // visited[x][y][keys]:位置 + 持有钥匙集合 的状态是否访问过
  const visited = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => new Array(1 << keyCount).fill(false))
  );

  const queue = [[sx, sy, 0]];
  visited[sx][sy][0] = true;
  let steps = 0;

  while (queue.length > 0) {
    const size = queue.length;
    for (let s = 0; s < size; s++) {
      const [x, y, keys] = queue.shift();

      for (const [dx, dy] of dirs) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
        const ch = grid[nx][ny];
        if (ch === '#') continue;

        // 锁:没有对应钥匙则无法通行
        if (ch >= 'A' && ch <= 'F') {
          const bit = 1 << (ch.charCodeAt(0) - 'A'.charCodeAt(0));
          if ((keys & bit) === 0) continue;
        }

        // 钥匙:更新持有集合
        let nKeys = keys;
        if (ch >= 'a' && ch <= 'f') {
          nKeys = keys | (1 << (ch.charCodeAt(0) - 'a'.charCodeAt(0)));
          if (nKeys === allKeys) return steps + 1;
        }

        if (!visited[nx][ny][nKeys]) {
          visited[nx][ny][nKeys] = true;
          queue.push([nx, ny, nKeys]);
        }
      }
    }
    steps++;
  }

  return -1;
};
// @lc code=end

// TEST:
console.log(shortestPathAllKeys(['@.a..', '###.#', 'b.A.B']) === 8); // 示例1
console.log(shortestPathAllKeys(['@..aA', '..B#.', '....b']) === 6); // 示例2
console.log(shortestPathAllKeys(['@Aa']) === -1); // 示例3:起点被锁挡住,拿不到钥匙
console.log(shortestPathAllKeys(['@aA']) === 1); // 单把钥匙,走一步即得
console.log(shortestPathAllKeys(['@AaB', '###b']) === -1); // 起点四周被锁和墙封死
console.log(shortestPathAllKeys(['@.a', '.##', '.Ab']) === 8); // 拿 a 后须回头开 A 锁取 b
console.log(shortestPathAllKeys(['@aAbBcC']) === 5); // 一条直线依次拾取 3 把钥匙,5 步
