/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
  let sn = ~~(minutesToTest / minutesToDie) + 1;
  return Math.ceil(Math.log(buckets) / Math.log(sn));
};