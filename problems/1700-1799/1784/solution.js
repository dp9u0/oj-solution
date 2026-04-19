/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  let flag = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "0") {
      flag = true;
    } else if (flag) return false;
  }
  return true;
};

// TEST:
let s, result;
s = "1001";
result = checkOnesSegment(s);
console.log(result);

s = "110"
result = checkOnesSegment(s);
console.log(result);

s = "1"
result = checkOnesSegment(s);
console.log(result)