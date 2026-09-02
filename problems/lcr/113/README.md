# [LCR 113] 课程表 II

## Description


```md
https://leetcode.cn/problems/QA2IGt/description/
* algorithms
* Medium (57.15%)
* Likes:    64
* Dislikes: -
* Testcase Example:  '2\n[[1,0]]'
现在总共有 numCourses 门课需要选，记为 0 到 numCourses-1。
给定一个数组 prerequisites ，它的每一个元素 prerequisites[i] 表示两门课程之间的先修顺序。 例如 prerequisites[i] = [ai, bi] 表示想要学习课程 ai ，需要先完成课程 bi 。
请根据给出的总课程数  numCourses 和表示先修顺序的 prerequisites 得出一个可行的修课序列。
可能会有多个正确的顺序，只要任意返回一种就可以了。如果不可能完成所有课程，返回一个空数组。

示例 1：
输入: numCourses = 2, prerequisites = [[1,0]]
输出: [0,1]
解释: 总共有 2 门课程。要学习课程 1，你需要先完成课程 0。因此，正确的课程顺序为 [0,1]。
示例 2：
输入: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
输出: [0,1,2,3] or [0,2,1,3]
解释: 总共有 4 门课程。要学习课程 3，你应该先完成课程 1 和课程 2。并且课程 1 和课程 2 都应该排在课程 0 之后。因此，一个正确的课程顺序是 [0,1,2,3]。另一个正确的排序是 [0,2,1,3]。
示例 3：
输入: numCourses = 1, prerequisites = []
输出: [0]
解释: 总共 1 门课，直接修第一门课就可。

提示：
1 <= numCourses <= 2000
0 <= prerequisites.length <= numCourses * (numCourses - 1)
prerequisites[i].length == 2
0 <= ai, bi < numCourses
ai != bi
prerequisites 中不存在重复元素

注意：本题与主站 210 题相同：https://leetcode.cn/problems/course-schedule-ii/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

There are `numCourses` courses to take, labeled `0` to `numCourses-1`. `prerequisites[i] = [ai, bi]` means to take course `ai`, you must first complete course `bi`. Derive a valid course order; there may be many correct orders, return any. If completing all courses is impossible, return an empty array.

**Example 1:** `numCourses = 2, prerequisites = [[1,0]]` → `[0,1]`
**Example 2:** `numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]` → `[0,1,2,3]` (or `[0,2,1,3]`)
**Example 3:** `numCourses = 1, prerequisites = []` → `[0]`

**Constraints:** `1 <= numCourses <= 2000`, prerequisites have `ai != bi`, no duplicates.

Note: same as LeetCode 210.

---

## Approach

**Kahn's topological sort (BFS):**

- Build adjacency (prereq → dependent) and an in-degree array (`indeg[a]` = number of unmet prereqs of `a`).
- Enqueue all courses with in-degree 0.
- Repeatedly pop a course into the result order, decrement in-degrees of its dependents, enqueue any that reach 0.
- If the result length < numCourses, a cycle exists → return `[]`.

Complexity: `O(V + E)` time, `O(V + E)` space.
