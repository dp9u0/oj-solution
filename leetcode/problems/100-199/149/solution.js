/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  let length = points.length;
  if (length <= 1) return length;
  let max = 0;
  let map = {};
  let map2 = {};
  for (let i = 0; i < length; i++) {
    const [x, y] = points[i];
    let key = `${x}_${y}`;
    map2[key] = (map2[key] || 0) + 1
  }
  for (let i = 0; i < length; i++) {
    const [x1, y1] = points[i];
    for (let j = i + 1; j < length; j++) {
      const [x2, y2] = points[j];
      let d = x2 - x1;
      const k = d === 0 ? 'H' : (10000000 * (y2 - y1) / (x2 - x1)); // 解决斜率过低
      const b = d === 0 ? x1 : (y1 * k - x1);
      let kMap = map[k];
      if (!kMap) {
        map[k] = kMap = {};
      }
      let kb = kMap[b];
      if (!kb) {
        let key1 = `${x1}_${y1}`;
        kMap[b] = kb = { count: map2[key1] }
        kb.points = {};
        kb.points[key1] = true;
      }
      let key2 = `${x2}_${y2}`;
      if (!kb.points[key2]) {
        kb.points[key2] = true;
        kb.count += map2[key2];
      }
      max = Math.max(kb.count, max);
    }
  }
  return max;
};


// TEST:
console.log(maxPoints([[1, 1], [2, 2], [3, 3]]))
console.log(maxPoints([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]))
console.log(maxPoints([[0, 0]]))
console.log(maxPoints([[0, 0], [0, 0]]))
console.log(maxPoints([[0, 0], [1, 1], [1, -1]]))
console.log(maxPoints([[0, 0], [94911151, 94911150], [94911152, 94911151]]))