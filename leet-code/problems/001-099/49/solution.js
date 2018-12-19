/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103]; //26个字母
  let hasing = {};
  for (const str of strs) {
    let key = 1;
    for (let index = 0; index < str.length; index++) {
      key *= prime[(str.charCodeAt(index) - 'a'.charCodeAt())];
    }
    if (!hasing[key]) {
      hasing[key] = [];
    }
    hasing[key].push(str);
  }
  let results = []
  for (const key in hasing) {
    results.push(hasing[key]);
  }
  return results;
};

let strs;

strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));