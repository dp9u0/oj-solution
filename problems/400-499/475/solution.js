/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
  houses.sort((a, b) => a - b);
  heaters.sort((a, b) => a - b);
  var n = houses.length;
  var m = heaters.length;
  var minimum = 0;
  var j = 0;
  for (var i = 0; i < n; i++) {
    {
      while ((j < m - 1) && (Math.abs(heaters[j] - houses[i]) >= Math.abs(heaters[j + 1] - houses[i]))) {
        j++;
      }
      minimum = Math.max(minimum, Math.abs(heaters[j] - houses[i]));
    }
  }
  return minimum;
};