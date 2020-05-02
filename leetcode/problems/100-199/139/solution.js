/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let sLength = s.length;
  let dp = new Array(sLength + 1).fill(false);
  dp[0] = true;
  let set = new Set(wordDict);
  for (let end = 1; end <= sLength; end++) {
    for (let start = 0; start < end; start++) {
      let word = s.slice(start, end);
      if (dp[start] && set.has(word)) {
        dp[end] = true;
        break;
      }
    }
  }
  return dp[sLength];
};

/**
 * 
 * @param {string} s 
 * @param {number} index 
 * @param {string[]} wordDict 
 */
const backtrace = (s, index, wordDict) => {
  if (index === s.length) { return true; }
  for (let i = 0; i < wordDict.length; i++) {
    const word = wordDict[i];
    const end = index + word.length;
    if (s.slice(index, end) === word) {
      let result = backtrace(s, end, wordDict);
      if (result) return true;
    }
  }
  return false;
}

// TEST:
let s = "leetcode", wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict))

s = "applepenapple", wordDict = ["apple", "pen"]
console.log(wordBreak(s, wordDict))

s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
console.log(wordBreak(s, wordDict));

s = "bb", wordDict = ["a", "b", "bbb", "bbbb"]
console.log(wordBreak(s, wordDict))

s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
  wordDict = ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]
console.log(wordBreak(s, wordDict))
