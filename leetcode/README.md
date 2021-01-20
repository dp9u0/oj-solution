
# [LeetCode](https://leetcode.com/problemset/all) Solutions With Javascript

## How To Use

安装 leetcode-cli并配置

```bash
npm install -g leetcode-cli

vim ~/.lc/config.json
{
  "autologin": {
        "enable": true
    },
    "code": {
        "editor": "vscode",
        "lang": "javascript"
    },
    "color": {
        "enable": true,
        "theme": "default"
    },
    "file": {
        "show": "${fid}",
        "submission": "${fid}"
    }
}
```

使用命令行开始提交保存题目!!

```bash
npm run start 18 # start problem 18
npm run test # test by testcase
npm run push # push for all test
npm run ok [tr] # finished and set topic 'tree'
```

### Tips

如果碰到leetcode 登录失败 可以创建文件 `~/.lc/leetcode/user.json` ,填入内容:

```js
{
  "login": "[username]",
  "loginCSRF": "",
  "sessionCSRF": "[copied from csrftoken]",
  "sessionId": "[copied from LEETCODE_SESSION]"
}
```

## 分类

* [arr] : array
* [bt] : backtracking
* [bs] : binary_search
* [bit] : bit_manipulation
* [bfs] : breadth_first_search
* [dfs] : depth_first_search
* [des] : design
* [dc] : divide_and_conquer
* [dp] : dynamic_programming
* [ds] : data structure
* [grd] : greed
* [grf] : graph
* [hsh] : hash
* [hp] : heap
* [ll] : linked_list
* [lgc] : if else switch
* [math] : math
* [q] : quque
* [stk] : stack
* [str] : string
* [tr] : tree
* [tp] : two_pointers

## Problems

| Seq  | Title                                                                                                                  | S      | L      | Tags        |      |
| ---- | ---------------------------------------------------------------------------------------------------------------------- | ------ | ------ | ----------- | ---- |
| 1    | [Two Sum](./problems/000-099/1/README.md)                                                                              | :o:    | Easy   | [hsh]       |      |
| 2    | [Add Two Numbers](./problems/000-099/2/README.md)                                                                      | :o:    | Medium | [ll]        | ~    |
| 3    | [Longest Substring Without Repeating](./problems/000-099/3/README.md)                                                  | :o:    | Medium | [tp]        | ~    |
| 4    | [Median of Two Sorted Arrays](./problems/000-099/4/README.md)                                                          | :o:    | Hard   | [bs]        | :+1: |
| 5    | [Longest Palindromic Substring](./problems/000-099/5/README.md)                                                        | :o:    | Medium | [dp]        | ~    |
| 6    | [ZigZag Conversion](./problems/000-099/6/README.md)                                                                    | :o:    | Medium | [str]       |      |
| 7    | [Reverse Integer](./problems/000-099/7/README.md)                                                                      | :o:    | Easy   | [u]         | ~    |
| 8    | [String to Integer (atoi)](./problems/000-099/8/README.md)                                                             | :o:    | Medium | [str]       | ~    |
| 9    | [Palindrome Number](./problems/000-099/9/README.md)                                                                    | :o:    | Easy   | [u]         | ~    |
| 10   | [Regular Expression Matching](./problems/000-099/10/README.md)                                                         | :o:    | Hard   | [dp]        | :+1: |
| 11   | [Container With Most Water](./problems/000-099/11/README.md)                                                           | :o:    | Medium | [tp]        | :+1: |
| 12   | [Integer to Roman](./problems/000-099/12/README.md)                                                                    | :o:    | Medium | [hsh]       |      |
| 13   | [Roman to Integer](./problems/000-099/13/README.md)                                                                    | :o:    | Easy   | [hsh]       |      |
| 14   | [Longest Common Prefix](./problems/000-099/14/README.md)                                                               | :o:    | Easy   | [str]       |      |
| 15   | [3Sum](./problems/000-099/15/README.md)                                                                                | :o:    | Medium | [tp]        |      |
| 16   | [3Sum Closest](./problems/000-099/16/README.md)                                                                        | :o:    | Medium | [tp]        |      |
| 17   | [Letter Combinations of a Phone Number](./problems/000-099/17/README.md)                                               | :o:    | Medium | [str]       |      |
| 18   | [4Sum](./problems/000-099/18/README.md)                                                                                | :o:    | Medium | [tp]        |      |
| 19   | [Remove Nth Node From End of List](./problems/000-099/19/README.md)                                                    | :o:    | Medium | [ll],[tp]   | :+1: |
| 20   | [Valid Parentheses](./problems/000-099/20/README.md)                                                                   | :o:    | Easy   | [stk]       | :+1: |
| 21   | [Merge Two Sorted Lists](./problems/000-099/21/README.md)                                                              | :o:    | Easy   | [ll]        | :+1: |
| 22   | [Generate Parentheses](./problems/000-099/22/README.md)                                                                | :o:    | Medium | [bt]        |      |
| 23   | [Merge k Sorted Lists](./problems/000-099/23/README.md)                                                                | :o:    | Hard   | [dc],[ll]   |      |
| 24   | [Swap Nodes in Pairs](./problems/000-099/24/README.md)                                                                 | :o:    | Medium | [ll],[tp]   |      |
| 25   | [Reverse Nodes in k-Group](./problems/000-099/25/README.md)                                                            | :o:    | Hard   | [ll],[tp]   |      |
| 26   | [Remove Duplicates from Sorted Array](./problems/000-099/26/README.md)                                                 | :o:    | Easy   | [tp]        |      |
| 27   | [Remove Element](./problems/000-099/27/README.md)                                                                      | :o:    | Easy   | [tp]        |      |
| 28   | [Implement strStr()](./problems/000-099/28/README.md)                                                                  | :o:    | Easy   | [str]       |      |
| 29   | [Divide Two Integers](./problems/000-099/29/README.md)                                                                 | :o:    | Medium | [math]      |      |
| 30   | [Substring with Concatenation of All Words](./problems/000-099/30/README.md)                                           | :o:    | Hard   | [str]       |      |
| 31   | [Next Permutation](./problems/000-099/31/README.md)                                                                    | :o:    | Medium | [tp]        |      |
| 32   | [Longest Valid Parentheses](./problems/000-099/32/README.md)                                                           | :o:    | Hard   | [stk]       |      |
| 33   | [Search in Rotated Sorted Array](./problems/000-099/33/README.md)                                                      | :o:    | Medium | [bs]        |      |
| 34   | [Find First and Last Position of Element in Sorted Array](./problems/000-099/34/README.md)                             | :o:    | Medium | [bs]        |      |
| 35   | [Search Insert Position](./problems/000-099/35/README.md)                                                              | :o:    | Easy   | [bs]        |      |
| 36   | [Valid Sudoku](./problems/000-099/36/README.md)                                                                        | :o:    | Medium | [arr]       |      |
| 37   | [Sudoku Solver](./problems/000-099/37/README.md)                                                                       | :o:    | Hard   | [dfs],[bt]  | ~    |
| 38   | [Count and Say](./problems/000-099/38/README.md)                                                                       | :o:    | Easy   | [str]       |      |
| 39   | [Combination Sum](./problems/000-099/39/README.md)                                                                     | :o:    | Medium | [bt]        | ~    |
| 40   | [Combination Sum II](./problems/000-099/40/README.md)                                                                  | :o:    | Medium | [bt]        | ~    |
| 41   | [First Missing Positive](./problems/000-099/41/README.md)                                                              | :o:    | Hard   | [arr]       | :+1: |
| 42   | [Trapping Rain Water](./problems/000-099/42/README.md)                                                                 | :o:    | Hard   | [tp]        |      |
| 43   | [Multiply Strings](./problems/000-099/43/README.md)                                                                    | :o:    | Medium | [math]      | :+1: |
| 44   | [Wildcard Matching](./problems/000-099/44/README.md)                                                                   | :o:    | Hard   | [dp]        | ~    |
| 45   | [Jump Game II](./problems/000-099/45/README.md)                                                                        | :o:    | Hard   | [grd]       | :+1: |
| 46   | [Permutations](./problems/000-099/46/README.md)                                                                        | :o:    | Medium | [bt]        |      |
| 47   | [Permutations II](./problems/000-099/47/README.md)                                                                     | :o:    | Medium | [bt]        |      |
| 48   | [Rotate Image](./problems/000-099/48/README.md)                                                                        | :o:    | Medium | [arr]       |      |
| 49   | [Group Anagrams](./problems/000-099/49/README.md)                                                                      | :o:    | Medium | [hsh]       |      |
| 50   | [Pow(x, n)](./problems/000-099/50/README.md)                                                                           | :o:    | Medium | [bs],[dc]   |      |
| 51   | [N-Queens](./problems/000-099/51/README.md)                                                                            | :o:    | Hard   | [bt]        |      |
| 52   | [N-Queens II](./problems/000-099/52/README.md)                                                                         | :o:    | Hard   | [bt]        |      |
| 53   | [Maximum Subarray](./problems/000-099/53/README.md)                                                                    | :o:    | Easy   | [dp]        |      |
| 54   | [Spiral Matrix](./problems/000-099/54/README.md)                                                                       | :o:    | Medium | [arr]       |      |
| 55   | [Jump Game](./problems/000-099/55/README.md)                                                                           | :o:    | Medium | [grd]       | :+1: |
| 56   | [Merge Intervals](./problems/000-099/56/README.md)                                                                     | :o:    | Medium | [arr]       |      |
| 57   | [Insert Interval](./problems/000-099/57/README.md)                                                                     | :o:    | Hard   | [arr]       |      |
| 58   | [Length of Last Word](./problems/000-099/58/README.md)                                                                 | :o:    | Easy   | [arr]       |      |
| 59   | [Spiral Matrix II](./problems/000-099/59/README.md)                                                                    | :o:    | Medium | [arr]       |      |
| 60   | [Permutation Sequence](./problems/000-099/60/README.md)                                                                | :o:    | Medium | [bt]        |      |
| 61   | [Rotate List](./problems/000-099/61/README.md)                                                                         | :o:    | Medium | [ll]        |      |
| 62   | [Unique Paths](./problems/000-099/62/README.md)                                                                        | :o:    | Medium | [dp]        |      |
| 63   | [Unique Paths II](./problems/000-099/63/README.md)                                                                     | :o:    | Medium | [dp]        |      |
| 64   | [Minimum Path Sum](./problems/000-099/64/README.md)                                                                    | :o:    | Medium | [dp]        |      |
| 65   | [Valid Number](./problems/000-099/65/README.md)                                                                        | :o:    | Hard   | [str]       | :-1: |
| 66   | [Plus One](./problems/000-099/66/README.md)                                                                            | :o:    | Easy   | [math]      |      |
| 67   | [Add Binary](./problems/000-099/67/README.md)                                                                          | :o:    | Easy   | [math]      |      |
| 68   | [Text Justification](./problems/000-099/68/README.md)                                                                  | :o:    | Hard   | [arr]       | :+1: |
| 69   | [Sqrt(x)](./problems/000-099/69/README.md)                                                                             | :o:    | Easy   | [math]      |      |
| 70   | [Climbing Stairs](./problems/000-099/70/README.md)                                                                     | :o:    | Easy   | [dp]        | :+1: |
| 71   | [Simplify Path](./problems/000-099/71/README.md)                                                                       | :o:    | Medium | [stk]       |      |
| 72   | [Edit Distance](./problems/000-099/72/README.md)                                                                       | :o:    | Hard   | [dp]        |      |
| 73   | [Set Matrix Zeroes](./problems/000-099/73/README.md)                                                                   | :o:    | Medium | [arr]       |      |
| 74   | [Search a 2D Matrix](./problems/000-099/74/README.md)                                                                  | :o:    | Medium | [bs]        |      |
| 75   | [Sort Colors](./problems/000-099/75/README.md)                                                                         | :o:    | Medium | [tp]        |      |
| 76   | [Minimum Window Substring](./problems/000-099/76/README.md)                                                            | :o:    | Hard   | [tp],[hsh]  |      |
| 77   | [Combinations](./problems/000-099/77/README.md)                                                                        | :o:    | Medium | [bt]        |      |
| 78   | [Subsets](./problems/000-099/78/README.md)                                                                             | :o:    | Medium | [bt]        |      |
| 79   | [Word Search](./problems/000-099/79/README.md)                                                                         | :o:    | Medium | [bt]        | :+1: |
| 80   | [Remove Duplicates from Sorted Array II](./problems/000-099/80/README.md)                                              | :o:    | Medium | [tp]        |      |
| 81   | [Search in Rotated Sorted Array II](./problems/000-099/81/README.md)                                                   | :o:    | Medium | [bs]        |      |
| 82   | [Remove Duplicates from Sorted List II](./problems/000-099/82/README.md)                                               | :o:    | Medium | [ll]        |      |
| 83   | [Remove Duplicates from Sorted List](./problems/000-099/83/README.md)                                                  | :o:    | Easy   | [ll]        |      |
| 84   | [Largest Rectangle in Histogram](./problems/000-099/84/README.md)                                                      | :o:    | Hard   | [stk]       |      |
| 85   | [Maximal Rectangle](./problems/000-099/85/README.md)                                                                   | :o:    | Hard   | [stk]       |      |
| 86   | [Partition List](./problems/000-099/86/README.md)                                                                      | :o:    | Medium | [ll]        | :+1: |
| 87   | [Scramble String](./problems/000-099/87/README.md)                                                                     | :o:    | Hard   | [string]    |      |
| 88   | [Merge Sorted Array](./problems/000-099/88/README.md)                                                                  | :o:    | Easy   | [tp]        |      |
| 89   | [Gray Code](./problems/000-099/89/README.md)                                                                           | :o:    | Medium | [bit]       | :+1: |
| 90   | [Subsets II](./problems/000-099/90/README.md)                                                                          | :o:    | Medium | [hsh]       |      |
| 91   | [Decode Ways](./problems/000-099/91/README.md)                                                                         | :o:    | Medium | [dp]        | :+1: |
| 92   | [Reverse Linked List II](./problems/000-099/92/README.md)                                                              | :o:    | Medium | [ll]        | :+1: |
| 93   | [Restore IP Addresses](./problems/000-099/93/README.md)                                                                | :o:    | Medium | [bt]        |      |
| 94   | [Binary Tree Inorder Traversal](./problems/000-099/94/README.md)                                                       | :o:    | Medium | [tr],[stk]  |      |
| 95   | [Unique Binary Search Trees II](./problems/000-099/95/README.md)                                                       | :o:    | Medium | [dp]        |      |
| 96   | [Unique Binary Search Trees](./problems/000-099/96/README.md)                                                          | :o:    | Medium | [dp]        |      |
| 97   | [Interleaving String](./problems/000-099/97/README.md)                                                                 | :o:    | Hard   | [dp]        |      |
| 98   | [Validate Binary Search Tree](./problems/000-099/98/README.md)                                                         | :o:    | Medium | [tr]        | :+1: |
| 99   | [Recover Binary Search Tree](./problems/000-099/99/README.md)                                                          | :o:    | Hard   | [tr]        | :+1: |
| 100  | [Same Tree](./problems/100-199/100/README.md)                                                                          | :o:    | Easy   | [tr]        |      |
| 101  | [Symmetric Tree](./problems/100-199/101/README.md)                                                                     | :o:    | Easy   | [bfs]       |      |
| 102  | [Binary Tree Level Order Traversal](./problems/100-199/102/README.md)                                                  | :o:    | Medium | [tr]        |      |
| 103  | [Binary Tree Zigzag Level Order Traversal](./problems/100-199/103/README.md)                                           | :o:    | Medium | [tr]        |      |
| 104  | [Maximum Depth of Binary Tree](./problems/100-199/104/README.md)                                                       | :o:    | Easy   | [tr]        |      |
| 105  | [Construct Binary Tree from Preorder and Inorder Traversal](./problems/100-199/105/README.md)                          | :o:    | Medium | [tr]        |      |
| 106  | [Construct Binary Tree from Inorder and Postorder Traversal](./problems/100-199/106/README.md)                         | :o:    | Medium | [tr]        |      |
| 107  | [Binary Tree Level Order Traversal II](./problems/100-199/107/README.md)                                               | :o:    | Easy   | [tr]        |      |
| 108  | [Convert Sorted Array to Binary Search Tree](./problems/100-199/108/README.md)                                         | :o:    | Easy   | [tr]        |      |
| 109  | [Convert Sorted List to Binary Search Tree](./problems/100-199/109/README.md)                                          | :o:    | Medium | [ll]        |      |
| 110  | [Balanced Binary Tree](./problems/100-199/110/README.md)                                                               | :o:    | Easy   | [tr]        |      |
| 111  | [Minimum Depth of Binary Tree](./problems/100-199/111/README.md)                                                       | :o:    | Easy   | [tr]        |      |
| 112  | [Path Sum](./problems/100-199/112/README.md)                                                                           | :o:    | Easy   | [tr]        |      |
| 113  | [Path Sum II](./problems/100-199/113/README.md)                                                                        | :o:    | Medium | [bt]        |      |
| 114  | [Flatten Binary Tree to Linked List](./problems/100-199/114/README.md)                                                 | :o:    | Medium | [tr]        | :+1: |
| 115  | [Distinct Subsequences](./problems/100-199/115/README.md)                                                              | :o:    | Hard   | [dp]        |      |
| 116  | [Populating Next Right Pointers in Each Node](./problems/100-199/116/README.md)                                        | :o:    | Medium | [tr]        |      |
| 117  | [Populating Next Right Pointers in Each Node II](./problems/100-199/117/README.md)                                     | :o:    | Medium | [tr]        |      |
| 118  | [Pascal's Triangle](./problems/100-199/118/README.md)                                                                  | :o:    | Easy   | [arr]       |      |
| 119  | [Pascal's Triangle II](./problems/100-199/119/README.md)                                                               | :o:    | Easy   | [arr]       |      |
| 120  | [Triangle](./problems/100-199/120/README.md)                                                                           | :o:    | Medium | [dp]        |      |
| 121  | [Best Time to Buy and Sell Stock](./problems/100-199/121/README.md)                                                    | :o:    | Easy   | [dp]        |      |
| 122  | [Best Time to Buy and Sell Stock II](./problems/100-199/122/README.md)                                                 | :o:    | Easy   | [arr]       |      |
| 123  | [Best Time to Buy and Sell Stock III](./problems/100-199/123/README.md)                                                | :o:    | Hard   | [dp]        |      |
| 124  | [Binary Tree Maximum Path Sum](./problems/100-199/124/README.md)                                                       | :o:    | Hard   | [tr]        |      |
| 125  | [Valid Palindrome](./problems/100-199/125/README.md)                                                                   | :o:    | Easy   | [str]       |      |
| 126  | [Word Ladder II](./problems/100-199/126/README.md)                                                                     | :o:    | Hard   | [bt],[grf]  |      |
| 127  | [Word Ladder](./problems/100-199/127/README.md)                                                                        | :o:    | Medium | [str]       |      |
| 128  | [Longest Consecutive Sequence](./problems/100-199/128/README.md)                                                       | :o:    | Hard   | [arr],[dp]  | :+1: |
| 129  | [Sum Root to Leaf Numbers](./problems/100-199/129/README.md)                                                           | :o:    | Medium | [tr]        |      |
| 130  | [Surrounded Regions](./problems/100-199/130/README.md)                                                                 | :o:    | Medium | [arr]       |      |
| 131  | [Palindrome Partitioning](./problems/100-199/131/README.md)                                                            | :o:    | Medium | [bt]        |      |
| 132  | [Palindrome Partitioning II](./problems/100-199/132/README.md)                                                         | :o:    | Hard   | [dp]        |      |
| 133  | [Clone Graph](./problems/100-199/133/README.md)                                                                        | :o:    | Medium | [hsh]       |      |
| 134  | [Gas Station](./problems/100-199/134/README.md)                                                                        | :o:    | Medium | [arr]       |      |
| 135  | [Candy](./problems/100-199/135/README.md)                                                                              | :o:    | Hard   | [greed]     |      |
| 136  | [Single Number](./problems/100-199/136/README.md)                                                                      | :o:    | Easy   | [bit]       | :+1: |
| 137  | [Single Number II](./problems/100-199/137/README.md)                                                                   | :o:    | Medium | [bit]       | :+1: |
| 138  | [Copy List with Random Pointer](./problems/100-199/138/README.md)                                                      | :o:    | Medium | [ll]        |      |
| 139  | [Word Break](./problems/100-199/139/README.md)                                                                         | :o:    | Medium | [dp]        |      |
| 140  | [Word Break II](./problems/100-199/140/README.md)                                                                      | :o:    | Hard   | [bt]        |      |
| 141  | [Linked List Cycle](./problems/100-199/141/README.md)                                                                  | :o:    | Easy   | [tp]        | :+1: |
| 142  | [Linked List Cycle II](./problems/100-199/142/README.md)                                                               | :o:    | Medium | [tp]        | :+1: |
| 143  | [Reorder List](./problems/100-199/143/README.md)                                                                       | :o:    | Medium | [ll]        |      |
| 144  | [Binary Tree Preorder Traversal](./problems/100-199/144/README.md)                                                     | :o:    | Medium | [tr],[stk]  |      |
| 145  | [Binary Tree Postorder Traversal](./problems/100-199/145/README.md)                                                    | :o:    | Hard   | [tr],[stk]  | :+1: |
| 146  | [LRU Cache](./problems/100-199/146/README.md)                                                                          | :o:    | Hard   | [ll]        | :+1: |
| 147  | [Insertion Sort List](./problems/100-199/147/README.md)                                                                | :o:    | Medium | [ll]        |      |
| 148  | [Sort List](./problems/100-199/148/README.md)                                                                          | :o:    | Medium | [sort]      | :+1: |
| 149  | [Max Points on a Line](./problems/100-199/149/README.md)                                                               | :o:    | Hard   | [math]      |      |
| 150  | [Evaluate Reverse Polish Notation](./problems/100-199/150/README.md)                                                   | :o:    | Medium | [stack]     | :+1: |
| 151  | [Reverse Words in a String](./problems/100-199/151/README.md)                                                          | :o:    | Medium | [str]       |      |
| 152  | [Maximum Product Subarray](./problems/100-199/152/README.md)                                                           | :o:    | Medium | [dp]        |      |
| 153  | [Find Minimum in Rotated Sorted Array](./problems/100-199/153/README.md)                                               | :o:    | Medium | [bs]        | :+1: |
| 154  | [Find Minimum in Rotated Sorted Array II](./problems/100-199/154/README.md)                                            | :o:    | Hard   | [bs]        | :+1: |
| 155  | [Min Stack](./problems/100-199/155/README.md)                                                                          | :o:    | Easy   | [des]       |      |
| 156  | [Binary Tree Upside Down](./problems/100-199/156/README.md)                                                            | :lock: | Medium |             |      |
| 157  | [Read N Characters Given Read4](./problems/100-199/157/README.md)                                                      | :lock: | Easy   |             |      |
| 158  | [Read N Characters Given Read4 II - Call multiple times](./problems/100-199/158/README.md)                             | :lock: | Hard   |             |      |
| 159  | [Longest Substring with At Most Two Distinct Characters](./problems/100-199/159/README.md)                             | :lock: | Hard   |             |      |
| 160  | [Intersection of Two Linked Lists](./problems/100-199/160/README.md)                                                   | :o:    | Easy   | [ll]        |      |
| 161  | [One Edit Distance](./problems/100-199/161/README.md)                                                                  | :lock: | Medium |             |      |
| 162  | [Find Peak Element](./problems/100-199/162/README.md)                                                                  | :o:    | Medium | [bs]        | :+1: |
| 163  | [Missing Ranges](./problems/100-199/163/README.md)                                                                     | :lock: | Medium |             |      |
| 164  | [Maximum Gap](./problems/100-199/164/README.md)                                                                        | :o:    | Hard   | [arr]       |      |
| 165  | [Compare Version Numbers](./problems/100-199/165/README.md)                                                            | :o:    | Medium | [str]       |      |
| 166  | [Fraction to Recurring Decimal](./problems/100-199/166/README.md)                                                      | :o:    | Medium | [math]      |      |
| 167  | [Two Sum II - Input array is sorted](./problems/100-199/167/README.md)                                                 | :o:    | Easy   | [tp]        |      |
| 168  | [Excel Sheet Column Title](./problems/100-199/168/README.md)                                                           | :o:    | Easy   | [arr]       |      |
| 169  | [Majority Element](./problems/100-199/169/README.md)                                                                   | :o:    | Easy   | [arr]       | :+1: |
| 170  | [Two Sum III - Data structure design](./problems/100-199/170/README.md)                                                | :lock: | Easy   |             |      |
| 171  | [Excel Sheet Column Number](./problems/100-199/171/README.md)                                                          | :o:    | Easy   | [arr]       |      |
| 172  | [Factorial Trailing Zeroes](./problems/100-199/172/README.md)                                                          | :o:    | Easy   | [math]      | :+1: |
| 173  | [Binary Search Tree Iterator](./problems/100-199/173/README.md)                                                        | :o:    | Medium | [tr]        | :+1: |
| 174  | [Dungeon Game](./problems/100-199/174/README.md)                                                                       | :o:    | Hard   | [dp]        |      |
| 175  | [Combine Two Tables](./problems/100-199/175/README.md)                                                                 | :soon: | Easy   | [sql]       |      |
| 176  | [Second Highest Salary](./problems/100-199/176/README.md)                                                              | :soon: | Easy   | [sql]       |      |
| 177  | [Nth Highest Salary](./problems/100-199/177/README.md)                                                                 | :soon: | Medium | [sql]       |      |
| 178  | [Rank Scores](./problems/100-199/178/README.md)                                                                        | :soon: | Medium | [sql]       |      |
| 179  | [Largest Number](./problems/100-199/179/README.md)                                                                     | :o:    | Medium | [sort]      |      |
| 180  | [Consecutive Numbers](./problems/100-199/180/README.md)                                                                | :soon: | Medium | [sql]       |      |
| 181  | [Employees Earning More Than Their Managers](./problems/100-199/181/README.md)                                         | :soon: | Easy   | [sql]       |      |
| 182  | [Duplicate Emails](./problems/100-199/182/README.md)                                                                   | :soon: | Easy   | [sql]       |      |
| 183  | [Customers Who Never Order](./problems/100-199/183/README.md)                                                          | :soon: | Easy   | [sql]       |      |
| 184  | [Department Highest Salary](./problems/100-199/184/README.md)                                                          | :soon: | Medium | [sql]       |      |
| 185  | [Department Top Three Salaries](./problems/100-199/185/README.md)                                                      | :soon: | Hard   | [sql]       |      |
| 186  | [Reverse Words in a String II](./problems/100-199/186/README.md)                                                       | :lock: | Medium |             |      |
| 187  | [Repeated DNA Sequences](./problems/100-199/187/README.md)                                                             | :o:    | Medium | [hsh]       |      |
| 188  | [Best Time to Buy and Sell Stock IV](./problems/100-199/188/README.md)                                                 | :o:    | Hard   | [dp]        | :+1: |
| 189  | [Rotate Array](./problems/100-199/189/README.md)                                                                       | :o:    | Easy   | [ll]        |      |
| 190  | [Reverse Bits](./problems/100-199/190/README.md)                                                                       | :o:    | Easy   | [bit]       | :+1: |
| 191  | [Number of 1 Bits](./problems/100-199/191/README.md)                                                                   | :o:    | Easy   | [bit]       |      |
| 192  | [Word Frequency](./problems/100-199/192/README.md)                                                                     | :soon: | Medium | [shell]     |      |
| 193  | [Valid Phone Numbers](./problems/100-199/193/README.md)                                                                | :soon: | Easy   | [shell]     |      |
| 194  | [Transpose File](./problems/100-199/194/README.md)                                                                     | :soon: | Medium | [shell]     |      |
| 195  | [Tenth Line](./problems/100-199/195/README.md)                                                                         | :soon: | Easy   | [shell]     |      |
| 196  | [Delete Duplicate Emails](./problems/100-199/196/README.md)                                                            | :soon: | Easy   | [sql]       |      |
| 197  | [Rising Temperature](./problems/100-199/197/README.md)                                                                 | :soon: | Easy   | [sql]       |      |
| 198  | [House Robber](./problems/100-199/198/README.md)                                                                       | :o:    | Easy   | [dp]        |      |
| 199  | [Binary Tree Right Side View](./problems/100-199/199/README.md)                                                        | :o:    | Medium | [tr]        |      |
| 200  | [Number of Islands](./problems/200-299/200/README.md)                                                                  | :o:    | Medium | [dfs]       |      |
| 201  | [Bitwise AND of Numbers Range](./problems/200-299/201/README.md)                                                       | :o:    | Medium | [bit]       |      |
| 202  | [Happy Number](./problems/200-299/202/README.md)                                                                       | :o:    | Easy   | [math]      |      |
| 203  | [Remove Linked List Elements](./problems/200-299/203/README.md)                                                        | :o:    | Easy   | [ll]        |      |
| 204  | [Count Primes](./problems/200-299/204/README.md)                                                                       | :o:    | Easy   | [math]      | :+1: |
| 205  | [Isomorphic Strings](./problems/200-299/205/README.md)                                                                 | :o:    | Easy   | [hsh]       |      |
| 206  | [Reverse Linked List](./problems/200-299/206/README.md)                                                                | :o:    | Easy   | [ll]        |      |
| 207  | [Course Schedule](./problems/200-299/207/README.md)                                                                    | :o:    | Medium | [grf],[dfs] |      |
| 208  | [Implement Trie (Prefix Tree)](./problems/200-299/208/README.md)                                                       | :o:    | Medium | [tr]        |      |
| 209  | [Minimum Size Subarray Sum](./problems/200-299/209/README.md)                                                          | :o:    | Medium | [tp]        |      |
| 210  | [Course Schedule II](./problems/200-299/210/README.md)                                                                 | :o:    | Medium | [grf]       |      |
| 211  | [Add and Search Word - Data structure design](./problems/200-299/211/README.md)                                        | :o:    | Medium | [tr]        |      |
| 212  | [Word Search II](./problems/200-299/212/README.md)                                                                     | :o:    | Hard   | [dfs]       |      |
| 213  | [House Robber II](./problems/200-299/213/README.md)                                                                    | :o:    | Medium | [dp]        |      |
| 214  | [Shortest Palindrome](./problems/200-299/214/README.md)                                                                | :o:    | Hard   | [str]       |      |
| 215  | [Kth Largest Element in an Array](./problems/200-299/215/README.md)                                                    | :o:    | Medium | [arr]       | :+1: |
| 216  | [Combination Sum III](./problems/200-299/216/README.md)                                                                | :o:    | Medium | [bt]        |      |
| 217  | [Contains Duplicate](./problems/200-299/217/README.md)                                                                 | :o:    | Easy   | [hsh]       |      |
| 218  | [The Skyline Problem](./problems/200-299/218/README.md)                                                                | :o:    | Hard   | [arr]       |      |
| 219  | [Contains Duplicate II](./problems/200-299/219/README.md)                                                              | :o:    | Easy   | [hsh]       | :+1: |
| 220  | [Contains Duplicate III](./problems/200-299/220/README.md)                                                             | :o:    | Medium | [tp]        |      |
| 221  | [Maximal Square](./problems/200-299/221/README.md)                                                                     | :o:    | Medium | [ar]        |      |
| 222  | [Count Complete Tree Nodes](./problems/200-299/222/README.md)                                                          | :o:    | Medium | [tr]        |      |
| 223  | [Rectangle Area](./problems/200-299/223/README.md)                                                                     | :o:    | Medium | [math]      |      |
| 224  | [Basic Calculator](./problems/200-299/224/README.md)                                                                   | :o:    | Hard   | [stk]       |      |
| 225  | [Implement Stack using Queues](./problems/200-299/225/README.md)                                                       | :o:    | Easy   | [des]       |      |
| 226  | [Invert Binary Tree](./problems/200-299/226/README.md)                                                                 | :o:    | Easy   | [tr],[dc]   |      |
| 227  | [Basic Calculator II](./problems/200-299/227/README.md)                                                                | :o:    | Medium | [stk]       |      |
| 228  | [Summary Ranges](./problems/200-299/228/README.md)                                                                     | :o:    | Medium | [arr]       |      |
| 229  | [Majority Element II](./problems/200-299/229/README.md)                                                                | :o:    | Medium | [arr] [hsh] |      |
| 230  | [Kth Smallest Element in a BST](./problems/200-299/230/README.md)                                                      | :o:    | Medium | [tr]        |      |
| 231  | [Power of Two](./problems/200-299/231/README.md)                                                                       | :o:    | Easy   | [bit]       |      |
| 232  | [Implement Queue using Stacks](./problems/200-299/232/README.md)                                                       | :o:    | Easy   | [des]       |      |
| 233  | [Number of Digit One](./problems/200-299/233/README.md)                                                                | :o:    | Hard   | [math]      | :-1: |
| 234  | [Palindrome Linked List](./problems/200-299/234/README.md)                                                             | :o:    | Easy   | [ll],[tp]   |      |
| 235  | [Lowest Common Ancestor of a Binary Search Tree](./problems/200-299/235/README.md)                                     | :o:    | Easy   | [tr]        |      |
| 236  | [Lowest Common Ancestor of a Binary Tree](./problems/200-299/236/README.md)                                            | :o:    | Medium | [tr]        |      |
| 237  | [Delete Node in a Linked List](./problems/200-299/237/README.md)                                                       | :o:    | Easy   | [ll]        | :-1: |
| 238  | [Product of Array Except Self](./problems/200-299/238/README.md)                                                       | :o:    | Medium | [arr]       |      |
| 239  | [Sliding Window Maximum](./problems/200-299/239/README.md)                                                             | :o:    | Hard   | [queue]     | :+1: |
| 240  | [Search a 2D Matrix II](./problems/200-299/240/README.md)                                                              |        | Medium |             |      |
| 241  | [Different Ways to Add Parentheses](./problems/200-299/241/README.md)                                                  | :o:    | Medium | [dc]        |      |
| 242  | [Valid Anagram](./problems/200-299/242/README.md)                                                                      | :o:    | Easy   | [hsh]       |      |
| 243  | [Shortest Word Distance](./problems/200-299/243/README.md)                                                             | :lock: | Easy   |             |      |
| 244  | [Shortest Word Distance II](./problems/200-299/244/README.md)                                                          | :lock: | Medium |             |      |
| 245  | [Shortest Word Distance III](./problems/200-299/245/README.md)                                                         | :lock: | Medium |             |      |
| 246  | [Strobogrammatic Number](./problems/200-299/246/README.md)                                                             | :lock: | Easy   |             |      |
| 247  | [Strobogrammatic Number II](./problems/200-299/247/README.md)                                                          | :lock: | Medium |             |      |
| 248  | [Strobogrammatic Number III](./problems/200-299/248/README.md)                                                         | :lock: | Hard   |             |      |
| 249  | [Group Shifted Strings](./problems/200-299/249/README.md)                                                              | :lock: | Medium |             |      |
| 250  | [Count Univalue Subtrees](./problems/200-299/250/README.md)                                                            | :lock: | Medium |             |      |
| 251  | [Flatten 2D Vector](./problems/200-299/251/README.md)                                                                  | :lock: | Medium |             |      |
| 252  | [Meeting Rooms](./problems/200-299/252/README.md)                                                                      | :lock: | Easy   |             |      |
| 253  | [Meeting Rooms II](./problems/200-299/253/README.md)                                                                   | :lock: | Medium |             |      |
| 254  | [Factor Combinations](./problems/200-299/254/README.md)                                                                | :lock: | Medium |             |      |
| 255  | [Verify Preorder Sequence in Binary Search Tree](./problems/200-299/255/README.md)                                     | :lock: | Medium |             |      |
| 256  | [Paint House](./problems/200-299/256/README.md)                                                                        | :lock: | Easy   |             |      |
| 257  | [Binary Tree Paths](./problems/200-299/257/README.md)                                                                  | :o:    | Easy   | [tr]        |      |
| 258  | [Add Digits](./problems/200-299/258/README.md)                                                                         | :o:    | Easy   | [math]      |      |
| 259  | [3Sum Smaller](./problems/200-299/259/README.md)                                                                       | :lock: | Medium |             |      |
| 260  | [Single Number III](./problems/200-299/260/README.md)                                                                  | :o:    | Medium | [bit]       |      |
| 261  | [Graph Valid Tree](./problems/200-299/261/README.md)                                                                   | :lock: | Medium |             |      |
| 262  | [Trips and Users](./problems/200-299/262/README.md)                                                                    | :soon: | Hard   | [sql]       |      |
| 263  | [Ugly Number](./problems/200-299/263/README.md)                                                                        | :o:    | Easy   | [math]      |      |
| 264  | [Ugly Number II](./problems/200-299/264/README.md)                                                                     |        | Medium |             |      |
| 265  | [Paint House II](./problems/200-299/265/README.md)                                                                     | :lock: | Hard   |             |      |
| 266  | [Palindrome Permutation](./problems/200-299/266/README.md)                                                             | :lock: | Easy   |             |      |
| 267  | [Palindrome Permutation II](./problems/200-299/267/README.md)                                                          | :lock: | Medium |             |      |
| 268  | [Missing Number](./problems/200-299/268/README.md)                                                                     | :o:    | Easy   | [math]      |      |
| 269  | [Alien Dictionary](./problems/200-299/269/README.md)                                                                   | :lock: | Hard   |             |      |
| 270  | [Closest Binary Search Tree Value](./problems/200-299/270/README.md)                                                   | :lock: | Easy   |             |      |
| 271  | [Encode and Decode Strings](./problems/200-299/271/README.md)                                                          | :lock: | Medium |             |      |
| 272  | [Closest Binary Search Tree Value II](./problems/200-299/272/README.md)                                                | :lock: | Hard   |             |      |
| 273  | [Integer to English Words](./problems/200-299/273/README.md)                                                           |        | Hard   |             |      |
| 274  | [H-Index](./problems/200-299/274/README.md)                                                                            |        | Medium |             |      |
| 275  | [H-Index II](./problems/200-299/275/README.md)                                                                         |        | Medium |             |      |
| 276  | [Paint Fence](./problems/200-299/276/README.md)                                                                        | :lock: | Easy   |             |      |
| 277  | [Find the Celebrity](./problems/200-299/277/README.md)                                                                 | :lock: | Medium |             |      |
| 278  | [First Bad Version](./problems/200-299/278/README.md)                                                                  | :o:    | Easy   | [bs]        |      |
| 279  | [Perfect Squares](./problems/200-299/279/README.md)                                                                    |        | Medium |             |      |
| 280  | [Wiggle Sort](./problems/200-299/280/README.md)                                                                        | :lock: | Medium |             |      |
| 281  | [Zigzag Iterator](./problems/200-299/281/README.md)                                                                    | :lock: | Medium |             |      |
| 282  | [Expression Add Operators](./problems/200-299/282/README.md)                                                           |        | Hard   |             |      |
| 283  | [Move Zeroes](./problems/200-299/283/README.md)                                                                        | :o:    | Easy   | [arr]       |      |
| 284  | [Peeking Iterator](./problems/200-299/284/README.md)                                                                   |        | Medium |             |      |
| 285  | [Inorder Successor in BST](./problems/200-299/285/README.md)                                                           | :lock: | Medium |             |      |
| 286  | [Walls and Gates](./problems/200-299/286/README.md)                                                                    | :lock: | Medium |             |      |
| 287  | [Find the Duplicate Number](./problems/200-299/287/README.md)                                                          | :o:    | Medium | [tp]        | :+1: |
| 288  | [Unique Word Abbreviation](./problems/200-299/288/README.md)                                                           | :lock: | Medium |             |      |
| 289  | [Game of Life](./problems/200-299/289/README.md)                                                                       |        | Medium |             |      |
| 290  | [Word Pattern](./problems/200-299/290/README.md)                                                                       | :o:    | Easy   | [hsh]       |      |
| 291  | [Word Pattern II](./problems/200-299/291/README.md)                                                                    | :lock: | Hard   |             |      |
| 292  | [Nim Game](./problems/200-299/292/README.md)                                                                           | :o:    | Easy   | [math]      |      |
| 293  | [Flip Game](./problems/200-299/293/README.md)                                                                          | :lock: | Easy   |             |      |
| 294  | [Flip Game II](./problems/200-299/294/README.md)                                                                       | :lock: | Medium |             |      |
| 295  | [Find Median from Data Stream](./problems/200-299/295/README.md)                                                       |        | Hard   |             |      |
| 296  | [Best Meeting Point](./problems/200-299/296/README.md)                                                                 | :lock: | Hard   |             |      |
| 297  | [Serialize and Deserialize Binary Tree](./problems/200-299/297/README.md)                                              | :o:    | Hard   | [tr]        | :+1: |
| 298  | [Binary Tree Longest Consecutive Sequence](./problems/200-299/298/README.md)                                           | :lock: | Medium |             |      |
| 299  | [Bulls and Cows](./problems/200-299/299/README.md)                                                                     | :o:    | Easy   | [hsh]       |      |
| 300  | [Longest Increasing Subsequence](./problems/300-399/300/README.md)                                                     | :o:    | Medium | [dp]        | :+1: |
| 301  | [Remove Invalid Parentheses](./problems/300-399/301/README.md)                                                         |        | Hard   |             |      |
| 302  | [Smallest Rectangle Enclosing Black Pixels](./problems/300-399/302/README.md)                                          | :lock: | Hard   |             |      |
| 303  | [Range Sum Query - Immutable](./problems/300-399/303/README.md)                                                        | :o:    | Easy   | [dp]        | :+1: |
| 304  | [Range Sum Query 2D - Immutable](./problems/300-399/304/README.md)                                                     |        | Medium |             |      |
| 305  | [Number of Islands II](./problems/300-399/305/README.md)                                                               | :lock: | Hard   |             |      |
| 306  | [Additive Number](./problems/300-399/306/README.md)                                                                    |        | Medium |             |      |
| 307  | [Range Sum Query - Mutable](./problems/300-399/307/README.md)                                                          |        | Medium |             |      |
| 308  | [Range Sum Query 2D - Mutable](./problems/300-399/308/README.md)                                                       | :lock: | Hard   |             |      |
| 309  | [Best Time to Buy and Sell Stock with Cooldown](./problems/300-399/309/README.md)                                      |        | Medium |             |      |
| 310  | [Minimum Height Trees](./problems/300-399/310/README.md)                                                               |        | Medium |             |      |
| 311  | [Sparse Matrix Multiplication](./problems/300-399/311/README.md)                                                       | :lock: | Medium |             |      |
| 312  | [Burst Balloons](./problems/300-399/312/README.md)                                                                     |        | Hard   |             |      |
| 313  | [Super Ugly Number](./problems/300-399/313/README.md)                                                                  |        | Medium |             |      |
| 314  | [Binary Tree Vertical Order Traversal](./problems/300-399/314/README.md)                                               | :lock: | Medium |             |      |
| 315  | [Count of Smaller Numbers After Self](./problems/300-399/315/README.md)                                                |        | Hard   |             |      |
| 316  | [Remove Duplicate Letters](./problems/300-399/316/README.md)                                                           |        | Hard   |             |      |
| 317  | [Shortest Distance from All Buildings](./problems/300-399/317/README.md)                                               | :lock: | Hard   |             |      |
| 318  | [Maximum Product of Word Lengths](./problems/300-399/318/README.md)                                                    |        | Medium |             |      |
| 319  | [Bulb Switcher](./problems/300-399/319/README.md)                                                                      |        | Medium |             |      |
| 320  | [Generalized Abbreviation](./problems/300-399/320/README.md)                                                           | :lock: | Medium |             |      |
| 321  | [Create Maximum Number](./problems/300-399/321/README.md)                                                              |        | Hard   |             |      |
| 322  | [Coin Change](./problems/300-399/322/README.md)                                                                        | :o:    | Medium | [dp]        | :+1: |
| 323  | [Number of Connected Components in an Undirected Graph](./problems/300-399/323/README.md)                              | :lock: | Medium |             |      |
| 324  | [Wiggle Sort II](./problems/300-399/324/README.md)                                                                     |        | Medium |             |      |
| 325  | [Maximum Size Subarray Sum Equals k](./problems/300-399/325/README.md)                                                 | :lock: | Medium |             |      |
| 326  | [Power of Three](./problems/300-399/326/README.md)                                                                     | :o:    | Easy   | [math]      |      |
| 327  | [Count of Range Sum](./problems/300-399/327/README.md)                                                                 |        | Hard   |             |      |
| 328  | [Odd Even Linked List](./problems/300-399/328/README.md)                                                               | :o:    | Medium | [ll]        |      |
| 329  | [Longest Increasing Path in a Matrix](./problems/300-399/329/README.md)                                                |        | Hard   |             |      |
| 330  | [Patching Array](./problems/300-399/330/README.md)                                                                     |        | Hard   |             |      |
| 331  | [Verify Preorder Serialization of a Binary Tree](./problems/300-399/331/README.md)                                     |        | Medium |             |      |
| 332  | [Reconstruct Itinerary](./problems/300-399/332/README.md)                                                              |        | Medium |             |      |
| 333  | [Largest BST Subtree](./problems/300-399/333/README.md)                                                                | :lock: | Medium |             |      |
| 334  | [Increasing Triplet Subsequence](./problems/300-399/334/README.md)                                                     |        | Medium |             |      |
| 335  | [Self Crossing](./problems/300-399/335/README.md)                                                                      |        | Hard   |             |      |
| 336  | [Palindrome Pairs](./problems/300-399/336/README.md)                                                                   |        | Hard   |             |      |
| 337  | [House Robber III](./problems/300-399/337/README.md)                                                                   |        | Medium |             |      |
| 338  | [Counting Bits](./problems/300-399/338/README.md)                                                                      |        | Medium |             |      |
| 339  | [Nested List Weight Sum](./problems/300-399/339/README.md)                                                             | :lock: | Easy   |             |      |
| 340  | [Longest Substring with At Most K Distinct Characters](./problems/300-399/340/README.md)                               | :lock: | Hard   |             |      |
| 341  | [Flatten Nested List Iterator](./problems/300-399/341/README.md)                                                       |        | Medium |             |      |
| 342  | [Power of Four](./problems/300-399/342/README.md)                                                                      | :o:    | Easy   | [bit]       | :+1: |
| 343  | [Integer Break](./problems/300-399/343/README.md)                                                                      |        | Medium |             |      |
| 344  | [Reverse String](./problems/300-399/344/README.md)                                                                     | :o:    | Easy   | [str]       |      |
| 345  | [Reverse Vowels of a String](./problems/300-399/345/README.md)                                                         | :o:    | Easy   | [tp]        |      |
| 346  | [Moving Average from Data Stream](./problems/300-399/346/README.md)                                                    | :lock: | Easy   |             |      |
| 347  | [Top K Frequent Elements](./problems/300-399/347/README.md)                                                            | :o:    | Medium | [hp]        | :+1: |
| 348  | [Design Tic-Tac-Toe](./problems/300-399/348/README.md)                                                                 | :lock: | Medium |             |      |
| 349  | [Intersection of Two Arrays](./problems/300-399/349/README.md)                                                         | :o:    | Easy   | [hsh]       |      |
| 350  | [Intersection of Two Arrays II](./problems/300-399/350/README.md)                                                      | :o:    | Easy   | [hsh]       |      |
| 351  | [Android Unlock Patterns](./problems/300-399/351/README.md)                                                            | :lock: | Medium |             |      |
| 352  | [Data Stream as Disjoint Intervals](./problems/300-399/352/README.md)                                                  |        | Hard   |             |      |
| 353  | [Design Snake Game](./problems/300-399/353/README.md)                                                                  | :lock: | Medium |             |      |
| 354  | [Russian Doll Envelopes](./problems/300-399/354/README.md)                                                             |        | Hard   |             |      |
| 355  | [Design Twitter](./problems/300-399/355/README.md)                                                                     |        | Medium |             |      |
| 356  | [Line Reflection](./problems/300-399/356/README.md)                                                                    | :lock: | Medium |             |      |
| 357  | [Count Numbers with Unique Digits](./problems/300-399/357/README.md)                                                   |        | Medium |             |      |
| 358  | [Rearrange String k Distance Apart](./problems/300-399/358/README.md)                                                  | :lock: | Hard   |             |      |
| 359  | [Logger Rate Limiter](./problems/300-399/359/README.md)                                                                | :lock: | Easy   |             |      |
| 360  | [Sort Transformed Array](./problems/300-399/360/README.md)                                                             | :lock: | Medium |             |      |
| 361  | [Bomb Enemy](./problems/300-399/361/README.md)                                                                         | :lock: | Medium |             |      |
| 362  | [Design Hit Counter](./problems/300-399/362/README.md)                                                                 | :lock: | Medium |             |      |
| 363  | [Max Sum of Rectangle No Larger Than K](./problems/300-399/363/README.md)                                              |        | Hard   |             |      |
| 364  | [Nested List Weight Sum II](./problems/300-399/364/README.md)                                                          | :lock: | Medium |             |      |
| 365  | [Water and Jug Problem](./problems/300-399/365/README.md)                                                              |        | Medium |             |      |
| 366  | [Find Leaves of Binary Tree](./problems/300-399/366/README.md)                                                         | :lock: | Medium |             |      |
| 367  | [Valid Perfect Square](./problems/300-399/367/README.md)                                                               | :o:    | Easy   | [math]      |      |
| 368  | [Largest Divisible Subset](./problems/300-399/368/README.md)                                                           |        | Medium |             |      |
| 369  | [Plus One Linked List](./problems/300-399/369/README.md)                                                               | :lock: | Medium |             |      |
| 370  | [Range Addition](./problems/300-399/370/README.md)                                                                     | :lock: | Medium |             |      |
| 371  | [Sum of Two Integers](./problems/300-399/371/README.md)                                                                | :o:    | Easy   | [bit]       |      |
| 372  | [Super Pow](./problems/300-399/372/README.md)                                                                          |        | Medium |             |      |
| 373  | [Find K Pairs with Smallest Sums](./problems/300-399/373/README.md)                                                    |        | Medium |             |      |
| 374  | [Guess Number Higher or Lower](./problems/300-399/374/README.md)                                                       | :o:    | Easy   | [bs]        |      |
| 375  | [Guess Number Higher or Lower II](./problems/300-399/375/README.md)                                                    |        | Medium |             |      |
| 376  | [Wiggle Subsequence](./problems/300-399/376/README.md)                                                                 |        | Medium |             |      |
| 377  | [Combination Sum IV](./problems/300-399/377/README.md)                                                                 |        | Medium |             |      |
| 378  | [Kth Smallest Element in a Sorted Matrix](./problems/300-399/378/README.md)                                            |        | Medium |             |      |
| 379  | [Design Phone Directory](./problems/300-399/379/README.md)                                                             | :lock: | Medium |             |      |
| 380  | [Insert Delete GetRandom O(1)](./problems/300-399/380/README.md)                                                       |        | Medium |             |      |
| 381  | [Insert Delete GetRandom O(1) - Duplicates allowed](./problems/300-399/381/README.md)                                  |        | Hard   |             |      |
| 382  | [Linked List Random Node](./problems/300-399/382/README.md)                                                            |        | Medium |             |      |
| 383  | [Ransom Note](./problems/300-399/383/README.md)                                                                        | :o:    | Easy   | [hsh]       |      |
| 384  | [Shuffle an Array](./problems/300-399/384/README.md)                                                                   |        | Medium |             |      |
| 385  | [Mini Parser](./problems/300-399/385/README.md)                                                                        |        | Medium |             |      |
| 386  | [Lexicographical Numbers](./problems/300-399/386/README.md)                                                            |   