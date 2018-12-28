/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  let res = 0;
  points.forEach(p1 => {
    const map = {};
    points.forEach(p2 => {
      const dist = Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2);
      res += (map[dist] || 0) * 2;
      map[dist] = (map[dist] || 0) + 1;
    });
  });
  return res;
};