/*
 * @lc app=leetcode id=1904 lang=javascript
 *
 * [1904] The Number of Full Rounds You Have Played
 */

// @lc code=start
/**
 * @param {string} loginTime
 * @param {string} logoutTime
 * @return {number}
 */
var numberOfRounds = function(loginTime, logoutTime) {
  const toMin = (t) => {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
  };
  let login = toMin(loginTime);
  let logout = toMin(logoutTime);
  // ceil login to next 15-min mark
  const ceil15 = (m) => Math.ceil(m / 15) * 15;
  const floor15 = (m) => Math.floor(m / 15) * 15;
  if (logout > login) {
    const start = ceil15(login);
    const end = floor15(logout);
    return Math.max(0, (end - start) / 15);
  }
  // cross midnight
  const start1 = ceil15(login);
  const end1 = 24 * 60;
  const start2 = 0;
  const end2 = floor15(logout);
  return (end1 - start1) / 15 + (end2 - start2) / 15;
};
// @lc code=end

// TEST:
console.log(numberOfRounds('09:31', '10:14')); // 1
console.log(numberOfRounds('21:30', '03:00')); // 22
console.log(numberOfRounds('00:00', '23:59')); // 95
console.log(numberOfRounds('00:01', '00:00')); // 95
