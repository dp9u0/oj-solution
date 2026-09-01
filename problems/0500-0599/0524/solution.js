/*
 * @lc app=leetcode id=524 lang=javascript
 *
 * [524] Longest Word in Dictionary through Deleting
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  const isSubsequence = (word) => {
    let i = 0;
    for (let j = 0; j < s.length && i < word.length; j++) {
      if (s[j] === word[i]) i++;
    }
    return i === word.length;
  };

  let best = "";
  for (const word of dictionary) {
    if (!isSubsequence(word)) continue;
    if (
      word.length > best.length ||
      (word.length === best.length && word < best)
    ) {
      best = word;
    }
  }
  return best;
};
// @lc code=end

// TEST:
console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"])); // "apple"
console.log(findLongestWord("abpcplea", ["a", "b", "c"])); // "a"
console.log(findLongestWord("abce", ["abe", "abc"])); // "abc" (等长取字典序最小)
console.log(findLongestWord("xyz", ["a", "b", "c"])); // "" (无匹配)
console.log(findLongestWord("bab", ["ba", "ab", "a", "b"])); // "ab" (ba 不是子序列, ab 是)
console.log(findLongestWord("a", ["a", "aa", "aaa"])); // "a" (超过 s 长度的单词不算)
