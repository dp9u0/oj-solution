/*
 * @lc app=leetcode id=2456 lang=javascript
 *
 * [2456] Most Popular Video Creator
 */

// @lc code=start
/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator = function(creators, ids, views) {
  const map = new Map();

  for (let i = 0; i < creators.length; i++) {
    const c = creators[i];
    if (!map.has(c)) {
      map.set(c, { total: 0, maxViews: -1, maxId: '' });
    }
    const info = map.get(c);
    info.total += views[i];
    if (views[i] > info.maxViews || (views[i] === info.maxViews && ids[i] < info.maxId)) {
      info.maxViews = views[i];
      info.maxId = ids[i];
    }
  }

  let maxTotal = 0;
  for (const info of map.values()) {
    if (info.total > maxTotal) maxTotal = info.total;
  }

  const result = [];
  for (const [creator, info] of map) {
    if (info.total === maxTotal) {
      result.push([creator, info.maxId]);
    }
  }

  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(mostPopularCreator(
  ['alice', 'bob', 'alice', 'chris'],
  ['one', 'two', 'three', 'four'],
  [5, 10, 5, 4]
))); // [["alice","one"],["bob","two"]]

console.log(JSON.stringify(mostPopularCreator(
  ['alice', 'alice', 'alice'],
  ['a', 'b', 'c'],
  [1, 2, 2]
))); // [["alice","b"]]
