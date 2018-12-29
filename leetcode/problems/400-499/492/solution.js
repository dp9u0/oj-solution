/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  for (let L = Math.ceil(Math.sqrt(area)); L <= area; L++) {
    let W = ~~(area / L);
    if (L * W === area) {
      return [L, W]
    }
  }
};