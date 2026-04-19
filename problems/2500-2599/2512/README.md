# [2512] Reward Top K Students

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reward-top-k-students/description/)

* algorithms
* Medium (46.98%)
* Likes:    366
* Dislikes: 92
* Testcase Example:  '["smart","brilliant","studious"]\n' +

```md
'["not"]\n' +
'["this student is studious","the student is smart"]\n' +
'[1,2]\n' +
'2'
You are given two string arrays positive_feedback and negative_feedback, containing the words denoting positive and negative feedback, respectively. Note that no word is both positive and negative.
Initially every student has 0 points. Each positive word in a feedback report increases the points of a student by 3, whereas each negative word decreases the points by 1.
You are given n feedback reports, represented by a 0-indexed string array reportand a 0-indexed integer array student_id, where student_id[i] represents the ID of the student who has received the feedback report report[i]. The ID of each student is unique.
Given an integer k, return the top k students after ranking them in non-increasing order by their points. In case more than one student has the same points, the one with the lower ID ranks higher.

Example 1:

Input: positive_feedback = ['smart','brilliant','studious'], negative_feedback = ['not'], report = ['this student is studious','the student is smart'], student_id = [1,2], k = 2
Output: [1,2]
Explanation:
Both the students have 1 positive feedback and 3 points but since student 1 has a lower ID he ranks higher.

Example 2:

Input: positive_feedback = ['smart','brilliant','studious'], negative_feedback = ['not'], report = ['this student is not studious','the student is smart'], student_id = [1,2], k = 2
Output: [2,1]
Explanation:
- The student with ID 1 has 1 positive feedback and 1 negative feedback, so he has 3-1=2 points.
- The student with ID 2 has 1 positive feedback, so he has 3 points.
Since student 2 has more points, [2,1] is returned.


Constraints:

1 <= positive_feedback.length, negative_feedback.length <= 104
1 <= positive_feedback[i].length, negative_feedback[j].length <= 100
Both positive_feedback[i] and negative_feedback[j] consists of lowercase English letters.
No word is present in both positive_feedback and negative_feedback.
n == report.length == student_id.length
1 <= n <= 104
report[i] consists of lowercase English letters and spaces &#39; &#39;.
There is a single space between consecutive words of report[i].
1 <= report[i].length <= 100
1 <= student_id[i] <= 109
All the values of student_id[i] are unique.
1 <= k <= n


```

## 翻译

给定正/负面反馈词表，每个报告计分（正面词+3，负面词-1）。返回分数最高的前k个学生ID（同分按ID升序）。

## 解题思路

Set存正/负面词，对每个报告split后计算分数。按(-score, id)排序取前k个。

## Solution

[SourceCode](./solution.js)
