/*
 * @lc app=leetcode id=2512 lang=javascript
 *
 * [2512] Reward Top K Students
 */

// @lc code=start
/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {number[]} student_id
 * @param {number} k
 * @return {number[]}
 */
var topStudents = function(positive_feedback, negative_feedback, report, student_id, k) {
  const pos = new Set(positive_feedback);
  const neg = new Set(negative_feedback);
  const scores = report.map((r, i) => {
    let score = 0;
    for (const w of r.split(' ')) {
      if (pos.has(w)) score += 3;
      else if (neg.has(w)) score -= 1;
    }
    return { id: student_id[i], score };
  });
  scores.sort((a, b) => a.score !== b.score ? b.score - a.score : a.id - b.id);
  return scores.slice(0, k).map(s => s.id);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(topStudents(['smart', 'brilliant', 'studious'], ['not'], ['this student is studious', 'the student is smart'], [1, 2], 2))); // [1,2]
console.log(JSON.stringify(topStudents(['smart', 'brilliant', 'studious'], ['not'], ['this student is not studious', 'the student is smart'], [1, 2], 2))); // [2,1]
console.log(JSON.stringify(topStudents(['good'], ['bad'], ['good good bad', 'bad bad', 'good'], [1, 2, 3], 2))); // [1,3]
console.log(JSON.stringify(topStudents(['a'], ['b'], ['a b a b', 'a a', 'b b'], [10, 20, 30], 3))); // [20,10,30]
