/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
  const R = M.length;
  const C = M[0].length;
  let arr = new Array(R);
  for (let i = 0; i < R; i++) {
    arr[i] = new Array(C).fill(0);
  }
  for (let r = 0; r < R; ++r) {
    for (let c = 0; c < C; ++c) {
      let count = 0;
      for (let nr = r - 1; nr <= r + 1; ++nr) {
        for (let nc = c - 1; nc <= c + 1; ++nc) {
          if (0 <= nr && nr < R && 0 <= nc && nc < C) {
            arr[r][c] += M[nr][nc];
            count++;
          }
        }
      }
      arr[r][c] = Math.floor(arr[r][c] / count);
    }
  }
  return arr;
};