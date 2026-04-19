/*
 * @lc app=leetcode id=1507 lang=javascript
 *
 * [1507] Reformat Date
 */

// @lc code=start
/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
  const months = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };
  const parts = date.split(' ');
  const day = parseInt(parts[0]).toString().padStart(2, '0');
  const month = months[parts[1]];
  const year = parts[2];
  return `${year}-${month}-${day}`;
};
// @lc code=end

// TEST:
console.log(reformatDate("20th Oct 2052")); // "2052-10-20"
console.log(reformatDate("6th Jun 1933")); // "1933-06-06"
console.log(reformatDate("26th May 1960")); // "1960-05-26"
console.log(reformatDate("1st Sep 2000")); // "2000-09-01"
