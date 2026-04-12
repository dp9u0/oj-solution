# [1472] Design Browser History

## Description

[LeetCode Problem Description](https://leetcode.com/problems/design-browser-history/description/)

* algorithms
* Medium (78.30%)
* Likes:    4144
* Dislikes: 271
* Testcase Example:  '["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]\n' +

```md
'[["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]'
You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.
Implement the BrowserHistory class:

BrowserHistory(string homepage) Initializes the object with the homepageof the browser.
void visit(string url)Visitsurl from the current page. It clears up all the forward history.
string back(int steps)Move steps back in history. If you can only return x steps in the history and steps > x, you willreturn only x steps. Return the current urlafter moving back in history at most steps.
string forward(int steps)Move steps forward in history. If you can only forward x steps in the history and steps > x, you willforward onlyx steps. Return the current urlafter forwarding in history at most steps.


Example:

Input:
['BrowserHistory','visit','visit','visit','back','back','forward','visit','forward','back','back']
[['leetcode.com'],['google.com'],['facebook.com'],['youtube.com'],[1],[1],[1],['linkedin.com'],[2],[2],[7]]
Output:
[null,null,null,null,'facebook.com','google.com','facebook.com',null,'linkedin.com','google.com','leetcode.com']
Explanation:
BrowserHistory browserHistory = new BrowserHistory('leetcode.com');
browserHistory.visit('google.com');       // You are in 'leetcode.com'. Visit 'google.com'
browserHistory.visit('facebook.com');     // You are in 'google.com'. Visit 'facebook.com'
browserHistory.visit('youtube.com');      // You are in 'facebook.com'. Visit 'youtube.com'
browserHistory.back(1);                   // You are in 'youtube.com', move back to 'facebook.com' return 'facebook.com'
browserHistory.back(1);                   // You are in 'facebook.com', move back to 'google.com' return 'google.com'
browserHistory.forward(1);                // You are in 'google.com', move forward to 'facebook.com' return 'facebook.com'
browserHistory.visit('linkedin.com');     // You are in 'facebook.com'. Visit 'linkedin.com'
browserHistory.forward(2);                // You are in 'linkedin.com', you cannot move forward any steps.
browserHistory.back(2);                   // You are in 'linkedin.com', move back two steps to 'facebook.com' then to 'google.com'. return 'google.com'
browserHistory.back(7);                   // You are in 'google.com', you can move back only one step to 'leetcode.com'. return 'leetcode.com'


Constraints:

1 <= homepage.length <= 20
1 <= url.length <= 20
1 <= steps <= 100
homepage and url consist of &#39;.&#39; or lower case English letters.
At most 5000calls will be made to visit, back, and forward.


```

## 翻译

实现一个浏览器历史记录管理器，支持三个操作：
- `visit(url)`：访问新页面，清除所有前进历史
- `back(steps)`：后退 steps 步，返回当前页面 URL
- `forward(steps)`：前进 steps 步，返回当前页面 URL

## Approach

用数组存储历史记录 + 指针维护当前位置。visit 时将新 URL 放在当前位置的下一个位置并截断后续记录。back/forward 直接移动指针，注意边界。

所有操作 O(1) 或 O(1) 摊销。

## Solution

[SourceCode](./solution.js)
