/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let bannedSet = new Set(banned);
  let words = paragraph.replace(/[!\?\'\,\;\.]/g, ' ').toLowerCase().split(' ');
  // console.log(words)
  let map = {};
  words.forEach(word => {
    if (!bannedSet.has(word) && word) {
      map[word] = (map[word] || 0) + 1;
    }
  });
  let maxKey = '',
    maxCount = 0;
  for (const key in map) {
    if (maxCount < map[key]) {
      maxKey = key;
      maxCount = map[key];
    }
  }
  return maxKey
};

//TEST:
let result = mostCommonWord("Bob. hIt, baLl", ["bob", "hit"]);
console.log(result)