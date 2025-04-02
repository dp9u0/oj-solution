
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
* [sd] : slide window
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
| 240  | [Search a 2D Matrix II](./problems/200-299/240/README.md)                                                              | :o:    | Medium | [arr]       |      |
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
| 264  | [Ugly Number II](./problems/200-299/264/README.md)                                                                     | :o:    | Medium | [dp]        |      |
| 265  | [Paint House II](./problems/200-299/265/README.md)                                                                     | :lock: | Hard   |             |      |
| 266  | [Palindrome Permutation](./problems/200-299/266/README.md)                                                             | :lock: | Easy   |             |      |
| 267  | [Palindrome Permutation II](./problems/200-299/267/README.md)                                                          | :lock: | Medium |             |      |
| 268  | [Missing Number](./problems/200-299/268/README.md)                                                                     | :o:    | Easy   | [math]      |      |
| 269  | [Alien Dictionary](./problems/200-299/269/README.md)                                                                   | :lock: | Hard   |             |      |
| 270  | [Closest Binary Search Tree Value](./problems/200-299/270/README.md)                                                   | :lock: | Easy   |             |      |
| 271  | [Encode and Decode Strings](./problems/200-299/271/README.md)                                                          | :lock: | Medium |             |      |
| 272  | [Closest Binary Search Tree Value II](./problems/200-299/272/README.md)                                                | :lock: | Hard   |             |      |
| 273  | [Integer to English Words](./problems/200-299/273/README.md)                                                           | :o:    | Hard   | [math]      |      |
| 274 | [H-Index](./problems/200-299/274/README.md) | :o: | Medium | [none] |   |
| 275 | [H-Index II](./problems/200-299/275/README.md) | :o: | Medium | [none] |   |
| 276  | [Paint Fence](./problems/200-299/276/README.md)                                                                        | :lock: | Easy   |             |      |
| 277  | [Find the Celebrity](./problems/200-299/277/README.md)                                                                 | :lock: | Medium |             |      |
| 278  | [First Bad Version](./problems/200-299/278/README.md)                                                                  | :o:    | Easy   | [bs]        |      |
| 279  | [Perfect Squares](./problems/200-299/279/README.md)                                                                    | :o:    | Medium | [math]      |      |
| 280  | [Wiggle Sort](./problems/200-299/280/README.md)                                                                        | :lock: | Medium |             |      |
| 281  | [Zigzag Iterator](./problems/200-299/281/README.md)                                                                    | :lock: | Medium |             |      |
| 282 | [Expression Add Operators](./problems/200-299/282/README.md) | :o: | Hard | [none] |   |
| 283  | [Move Zeroes](./problems/200-299/283/README.md)                                                                        | :o:    | Easy   | [arr]       |      |
| 284 | [Peeking Iterator](./problems/200-299/284/README.md) | :o: | Medium | [none] |   |
| 285  | [Inorder Successor in BST](./problems/200-299/285/README.md)                                                           | :lock: | Medium |             |      |
| 286  | [Walls and Gates](./problems/200-299/286/README.md)                                                                    | :lock: | Medium |             |      |
| 287  | [Find the Duplicate Number](./problems/200-299/287/README.md)                                                          | :o:    | Medium | [tp]        | :+1: |
| 288  | [Unique Word Abbreviation](./problems/200-299/288/README.md)                                                           | :lock: | Medium |             |      |
| 289  | [Game of Life](./problems/200-299/289/README.md)                                                                       | :o:    | Medium | [arr]       |      |
| 290  | [Word Pattern](./problems/200-299/290/README.md)                                                                       | :o:    | Easy   | [hsh]       |      |
| 291  | [Word Pattern II](./problems/200-299/291/README.md)                                                                    | :lock: | Hard   |             |      |
| 292  | [Nim Game](./problems/200-299/292/README.md)                                                                           | :o:    | Easy   | [math]      |      |
| 293  | [Flip Game](./problems/200-299/293/README.md)                                                                          | :lock: | Easy   |             |      |
| 294  | [Flip Game II](./problems/200-299/294/README.md)                                                                       | :lock: | Medium |             |      |
| 295 | [Find Median from Data Stream](./problems/200-299/295/README.md) | :o: | Hard | [heap] |   |
| 296  | [Best Meeting Point](./problems/200-299/296/README.md)                                                                 | :lock: | Hard   |             |      |
| 297  | [Serialize and Deserialize Binary Tree](./problems/200-299/297/README.md)                                              | :o:    | Hard   | [tr]        | :+1: |
| 298  | [Binary Tree Longest Consecutive Sequence](./problems/200-299/298/README.md)                                           | :lock: | Medium |             |      |
| 299  | [Bulls and Cows](./problems/200-299/299/README.md)                                                                     | :o:    | Easy   | [hsh]       |      |
| 300  | [Longest Increasing Subsequence](./problems/300-399/300/README.md)                                                     | :o:    | Medium | [dp]        | :+1: |
| 301 | [Remove Invalid Parentheses](./problems/300-399/301/README.md) | :o: | Hard | [none] |   |
| 302  | [Smallest Rectangle Enclosing Black Pixels](./problems/300-399/302/README.md)                                          | :lock: | Hard   |             |      |
| 303  | [Range Sum Query - Immutable](./problems/300-399/303/README.md)                                                        | :o:    | Easy   | [dp]        | :+1: |
| 304 | [Range Sum Query 2D - Immutable](./problems/300-399/304/README.md) | :o: | Medium | [none] |   |
| 305  | [Number of Islands II](./problems/300-399/305/README.md)                                                               | :lock: | Hard   |             |      |
| 306 | [Additive Number](./problems/300-399/306/README.md) | :o: | Medium | [none] |   |
| 307 | [Range Sum Query - Mutable](./problems/300-399/307/README.md) | :o: | Medium | [none] |   |
| 308  | [Range Sum Query 2D - Mutable](./problems/300-399/308/README.md)                                                       | :lock: | Hard   |             |      |
| 309 | [Best Time to Buy and Sell Stock with Cooldown](./problems/300-399/309/README.md) | :o: | Medium | [none] |   |
| 310 | [Minimum Height Trees](./problems/300-399/310/README.md) | :o: | Medium | [none] |   |
| 311  | [Sparse Matrix Multiplication](./problems/300-399/311/README.md)                                                       | :lock: | Medium |             |      |
| 312 | [Burst Balloons](./problems/300-399/312/README.md) | :o: | Hard | [none] |   |
| 313 | [Super Ugly Number](./problems/300-399/313/README.md) | :o: | Medium | [none] |   |
| 314  | [Binary Tree Vertical Order Traversal](./problems/300-399/314/README.md)                                               | :lock: | Medium |             |      |
| 315  | [Count of Smaller Numbers After Self](./problems/300-399/315/README.md)                                                | :o:    | Hard   | [tr],[arr]  | :+1: |
| 316 | [Remove Duplicate Letters](./problems/300-399/316/README.md) | :o: | Medium | [none] |   |
| 317  | [Shortest Distance from All Buildings](./problems/300-399/317/README.md)                                               | :lock: | Hard   |             |      |
| 318 | [Maximum Product of Word Lengths](./problems/300-399/318/README.md) | :o: | Medium | [none] |   |
| 319 | [Bulb Switcher](./problems/300-399/319/README.md) | :o: | Medium | [math] |   |
| 320  | [Generalized Abbreviation](./problems/300-399/320/README.md)                                                           | :lock: | Medium |             |      |
| 321 | [Create Maximum Number](./problems/300-399/321/README.md) | :o: | Hard | [none] |   |
| 322  | [Coin Change](./problems/300-399/322/README.md)                                                                        | :o:    | Medium | [dp]        | :+1: |
| 323  | [Number of Connected Components in an Undirected Graph](./problems/300-399/323/README.md)                              | :lock: | Medium |             |      |
| 324 | [Wiggle Sort II](./problems/300-399/324/README.md) | :o: | Medium | [none] |   |
| 325  | [Maximum Size Subarray Sum Equals k](./problems/300-399/325/README.md)                                                 | :lock: | Medium |             |      |
| 326  | [Power of Three](./problems/300-399/326/README.md)                                                                     | :o:    | Easy   | [math]      |      |
| 327 | [Count of Range Sum](./problems/300-399/327/README.md) | :o: | Hard | [arr] |   |
| 328  | [Odd Even Linked List](./problems/300-399/328/README.md)                                                               | :o:    | Medium | [ll]        |      |
| 329  | [Longest Increasing Path in a Matrix](./problems/300-399/329/README.md)                                                | :o:    | Hard   | [dfs]       | :+1: |
| 330  | [Patching Array](./problems/300-399/330/README.md)                                                                     |        | Hard   |             |      |
| 331  | [Verify Preorder Serialization of a Binary Tree](./problems/300-399/331/README.md)                                     |        | Medium |             |      |
| 332  | [Reconstruct Itinerary](./problems/300-399/332/README.md)                                                              |        | Medium |             |      |
| 333  | [Largest BST Subtree](./problems/300-399/333/README.md)                                                                | :lock: | Medium |             |      |
| 334  | [Increasing Triplet Subsequence](./problems/300-399/334/README.md)                                                     |        | Medium |             |      |
| 335  | [Self Crossing](./problems/300-399/335/README.md)                                                                      |        | Hard   |             |      |
| 336  | [Palindrome Pairs](./problems/300-399/336/README.md)                                                                   |        | Hard   |             |      |
| 337  | [House Robber III](./problems/300-399/337/README.md)                                                                   | :o:    | Medium | [tr]        |      |
| 338  | [Counting Bits](./problems/300-399/338/README.md)                                                                      | :o:    | Medium | [bit]       |      |
| 339  | [Nested List Weight Sum](./problems/300-399/339/README.md)                                                             | :lock: | Easy   |             |      |
| 340  | [Longest Substring with At Most K Distinct Characters](./problems/300-399/340/README.md)                               | :lock: | Hard   |             |      |
| 341  | [Flatten Nested List Iterator](./problems/300-399/341/README.md)                                                       |        | Medium |             |      |
| 342  | [Power of Four](./problems/300-399/342/README.md)                                                                      | :o:    | Easy   | [bit]       | :+1: |
| 343  | [Integer Break](./problems/300-399/343/README.md)                                                                      | :o:    | Medium | [dp]        |      |
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
| 354  | [Russian Doll Envelopes](./problems/300-399/354/README.md)                                                             | :o:    | Hard   | [dp]        |      |
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
| 386  | [Lexicographical Numbers](./problems/300-399/386/README.md)                                                            |        | Medium |             |      |
| 387  | [First Unique Character in a String](./problems/300-399/387/README.md)                                                 | :o:    | Easy   | [hsh]       |      |
| 388  | [Longest Absolute File Path](./problems/300-399/388/README.md)                                                         |        | Medium |             |      |
| 389  | [Find the Difference](./problems/300-399/389/README.md)                                                                | :o:    | Easy   | [hsh]       |      |
| 390  | [Elimination Game](./problems/300-399/390/README.md)                                                                   |        | Medium |             |      |
| 391  | [Perfect Rectangle](./problems/300-399/391/README.md)                                                                  |        | Hard   |             |      |
| 392  | [Is Subsequence](./problems/300-399/392/README.md)                                                                     | :o:    | Easy   | [tp]        |      |
| 393  | [UTF-8 Validation](./problems/300-399/393/README.md)                                                                   |        | Medium |             |      |
| 394  | [Decode String](./problems/300-399/394/README.md)                                                                      | :o:    | Medium | [stk]       | :+1: |
| 395  | [Longest Substring with At Least K Repeating Characters](./problems/300-399/395/README.md)                             |        | Medium |             |      |
| 396  | [Rotate Function](./problems/300-399/396/README.md)                                                                    |        | Medium |             |      |
| 397  | [Integer Replacement](./problems/300-399/397/README.md)                                                                |        | Medium |             |      |
| 398  | [Random Pick Index](./problems/300-399/398/README.md)                                                                  |        | Medium |             |      |
| 399  | [Evaluate Division](./problems/300-399/399/README.md)                                                                  |        | Medium |             |      |
| 400  | [Nth Digit](./problems/400-499/400/README.md)                                                                          | :o:    | Easy   | [math]      |      |
| 401  | [Binary Watch](./problems/400-499/401/README.md)                                                                       | :o:    | Easy   | [math]      |      |
| 402  | [Remove K Digits](./problems/400-499/402/README.md)                                                                    |        | Medium |             |      |
| 403  | [Frog Jump](./problems/400-499/403/README.md)                                                                          |        | Hard   |             |      |
| 404  | [Sum of Left Leaves](./problems/400-499/404/README.md)                                                                 | :o:    | Easy   | [tr]        |      |
| 405  | [Convert a Number to Hexadecimal](./problems/400-499/405/README.md)                                                    | :o:    | Easy   | [bit]       |      |
| 406  | [Queue Reconstruction by Height](./problems/400-499/406/README.md)                                                     |        | Medium |             |      |
| 407  | [Trapping Rain Water II](./problems/400-499/407/README.md)                                                             |        | Hard   |             |      |
| 408  | [Valid Word Abbreviation](./problems/400-499/408/README.md)                                                            | :lock: | Easy   |             |      |
| 409  | [Longest Palindrome](./problems/400-499/409/README.md)                                                                 | :o:    | Easy   | [hsh]       |      |
| 410  | [Split Array Largest Sum](./problems/400-499/410/README.md)                                                            |        | Hard   |             |      |
| 411  | [Minimum Unique Word Abbreviation](./problems/400-499/411/README.md)                                                   | :lock: | Hard   |             |      |
| 412  | [Fizz Buzz](./problems/400-499/412/README.md)                                                                          | :o:    | Easy   | [math]      |      |
| 413  | [Arithmetic Slices](./problems/400-499/413/README.md)                                                                  |        | Medium |             |      |
| 414  | [Third Maximum Number](./problems/400-499/414/README.md)                                                               | :o:    | Easy   | [arr]       |      |
| 415  | [Add Strings](./problems/400-499/415/README.md)                                                                        | :o:    | Easy   | [math]      |      |
| 416  | [Partition Equal Subset Sum](./problems/400-499/416/README.md)                                                         | :o:    | Medium | [[dp]]      |      |
| 417  | [Pacific Atlantic Water Flow](./problems/400-499/417/README.md)                                                        |        | Medium |             |      |
| 418  | [Sentence Screen Fitting](./problems/400-499/418/README.md)                                                            | :lock: | Medium |             |      |
| 419  | [Battleships in a Board](./problems/400-499/419/README.md)                                                             |        | Medium |             |      |
| 420  | [Strong Password Checker](./problems/400-499/420/README.md)                                                            |        | Hard   |             |      |
| 421  | [Maximum XOR of Two Numbers in an Array](./problems/400-499/421/README.md)                                             |        | Medium |             |      |
| 422  | [Valid Word Square](./problems/400-499/422/README.md)                                                                  | :lock: | Easy   |             |      |
| 423  | [Reconstruct Original Digits from English](./problems/400-499/423/README.md)                                           |        | Medium |             |      |
| 424  | [Longest Repeating Character Replacement](./problems/400-499/424/README.md)                                            |        | Medium |             |      |
| 425  | [Word Squares](./problems/400-499/425/README.md)                                                                       | :lock: | Hard   |             |      |
| 426  | [Convert Binary Search Tree to Sorted Doubly Linked List](./problems/400-499/426/README.md)                            | :lock: | Medium |             |      |
| 427  | [Construct Quad Tree](./problems/400-499/427/README.md)                                                                | :o:    | Easy   | [tr]        |      |
| 428  | [Serialize and Deserialize N-ary Tree](./problems/400-499/428/README.md)                                               | :lock: | Hard   |             |      |
| 429  | [N-ary Tree Level Order Traversal](./problems/400-499/429/README.md)                                                   | :o:    | Easy   | [tr],[bfs]  |      |
| 430  | [Flatten a Multilevel Doubly Linked List](./problems/400-499/430/README.md)                                            |        | Medium |             |      |
| 431  | [Encode N-ary Tree to Binary Tree](./problems/400-499/431/README.md)                                                   | :lock: | Hard   |             |      |
| 432  | [All O`one Data Structure](./problems/400-499/432/README.md)                                                           |        | Hard   |             |      |
| 433  | [Minimum Genetic Mutation](./problems/400-499/433/README.md)                                                           |        | Medium |             |      |
| 434  | [Number of Segments in a String](./problems/400-499/434/README.md)                                                     | :o:    | Easy   | [str]       |      |
| 435  | [Non-overlapping Intervals](./problems/400-499/435/README.md)                                                          |        | Medium |             |      |
| 436  | [Find Right Interval](./problems/400-499/436/README.md)                                                                |        | Medium |             |      |
| 437  | [Path Sum III](./problems/400-499/437/README.md)                                                                       | :o:    | Easy   | [tr]        |      |
| 438  | [Find All Anagrams in a String](./problems/400-499/438/README.md)                                                      | :o:    | Easy   | [hsh]       | :+1: |
| 439  | [Ternary Expression Parser](./problems/400-499/439/README.md)                                                          | :lock: | Medium |             |      |
| 440  | [K-th Smallest in Lexicographical Order](./problems/400-499/440/README.md)                                             |        | Hard   |             |      |
| 441  | [Arranging Coins](./problems/400-499/441/README.md)                                                                    | :o:    | Easy   | [math]      |      |
| 442  | [Find All Duplicates in an Array](./problems/400-499/442/README.md)                                                    | :o:    | Medium | [arr]       |      |
| 443  | [String Compression](./problems/400-499/443/README.md)                                                                 | :o:    | Easy   | [arr]       |      |
| 444  | [Sequence Reconstruction](./problems/400-499/444/README.md)                                                            | :lock: | Medium |             |      |
| 445  | [Add Two Numbers II](./problems/400-499/445/README.md)                                                                 | :o:    | Medium | [ll]        |      |
| 446  | [Arithmetic Slices II - Subsequence](./problems/400-499/446/README.md)                                                 |        | Hard   |             |      |
| 447  | [Number of Boomerangs](./problems/400-499/447/README.md)                                                               | :o:    | Easy   | [hsh]       |      |
| 448  | [Find All Numbers Disappeared in an Array](./problems/400-499/448/README.md)                                           | :o:    | Easy   | [arr]       |      |
| 449  | [Serialize and Deserialize BST](./problems/400-499/449/README.md)                                                      |        | Medium |             |      |
| 450  | [Delete Node in a BST](./problems/400-499/450/README.md)                                                               |        | Medium |             |      |
| 451  | [Sort Characters By Frequency](./problems/400-499/451/README.md)                                                       |        | Medium |             |      |
| 452  | [Minimum Number of Arrows to Burst Balloons](./problems/400-499/452/README.md)                                         |        | Medium |             |      |
| 453  | [Minimum Moves to Equal Array Elements](./problems/400-499/453/README.md)                                              | :o:    | Easy   | [math]      |      |
| 454  | [4Sum II](./problems/400-499/454/README.md)                                                                            |        | Medium |             |      |
| 455  | [Assign Cookies](./problems/400-499/455/README.md)                                                                     | :o:    | Easy   | [grd]       | :+1: |
| 456  | [132 Pattern](./problems/400-499/456/README.md)                                                                        |        | Medium |             |      |
| 457  | [Circular Array Loop](./problems/400-499/457/README.md)                                                                |        | Medium |             |      |
| 458  | [Poor Pigs](./problems/400-499/458/README.md)                                                                          | :o:    | Easy   | [math]      | :+1: |
| 459  | [Repeated Substring Pattern](./problems/400-499/459/README.md)                                                         | :o:    | Easy   | [string]    | :+1: |
| 460  | [LFU Cache](./problems/400-499/460/README.md)                                                                          | :o:    | Hard   | [ll],[hsh]  | :+1: |
| 461  | [Hamming Distance](./problems/400-499/461/README.md)                                                                   | :o:    | Easy   | [bit]       |      |
| 462  | [Minimum Moves to Equal Array Elements II](./problems/400-499/462/README.md)                                           |        | Medium |             |      |
| 463  | [Island Perimeter](./problems/400-499/463/README.md)                                                                   | :o:    | Easy   | [arr]       | ~    |
| 464  | [Can I Win](./problems/400-499/464/README.md)                                                                          |        | Medium |             |      |
| 465  | [Optimal Account Balancing](./problems/400-499/465/README.md)                                                          | :lock: | Hard   |             |      |
| 466  | [Count The Repetitions](./problems/400-499/466/README.md)                                                              |        | Hard   |             |      |
| 467  | [Unique Substrings in Wraparound String](./problems/400-499/467/README.md)                                             |        | Medium |             |      |
| 468  | [Validate IP Address](./problems/400-499/468/README.md)                                                                |        | Medium |             |      |
| 469  | [Convex Polygon](./problems/400-499/469/README.md)                                                                     | :lock: | Medium |             |      |
| 470  | [Implement Rand10() Using Rand7()](./problems/400-499/470/README.md)                                                   |        | Medium |             |      |
| 471  | [Encode String with Shortest Length](./problems/400-499/471/README.md)                                                 | :lock: | Hard   |             |      |
| 472  | [Concatenated Words](./problems/400-499/472/README.md)                                                                 |        | Hard   |             |      |
| 473  | [Matchsticks to Square](./problems/400-499/473/README.md)                                                              |        | Medium |             |      |
| 474  | [Ones and Zeroes](./problems/400-499/474/README.md)                                                                    |        | Medium |             |      |
| 475  | [Heaters](./problems/400-499/475/README.md)                                                                            | :o:    | Easy   | [arr]       |      |
| 476  | [Number Complement](./problems/400-499/476/README.md)                                                                  | :o:    | Easy   | [bit]       |      |
| 477  | [Total Hamming Distance](./problems/400-499/477/README.md)                                                             |        | Medium |             |      |
| 478  | [Generate Random Point in a Circle](./problems/400-499/478/README.md)                                                  |        | Medium |             |      |
| 479  | [Largest Palindrome Product](./problems/400-499/479/README.md)                                                         | :o:    | Easy   | [math]      | :-1: |
| 480  | [Sliding Window Median](./problems/400-499/480/README.md)                                                              |        | Hard   |             |      |
| 481  | [Magical String](./problems/400-499/481/README.md)                                                                     |        | Medium |             |      |
| 482  | [License Key Formatting](./problems/400-499/482/README.md)                                                             |        | Easy   |             |      |
| 483  | [Smallest Good Base](./problems/400-499/483/README.md)                                                                 |        | Hard   |             |      |
| 484  | [Find Permutation](./problems/400-499/484/README.md)                                                                   | :lock: | Medium |             |      |
| 485  | [Max Consecutive Ones](./problems/400-499/485/README.md)                                                               | :o:    | Easy   | [arr]       |      |
| 486  | [Predict the Winner](./problems/400-499/486/README.md)                                                                 |        | Medium |             |      |
| 487  | [Max Consecutive Ones II](./problems/400-499/487/README.md)                                                            | :lock: | Medium |             |      |
| 488  | [Zuma Game](./problems/400-499/488/README.md)                                                                          |        | Hard   |             |      |
| 489  | [Robot Room Cleaner](./problems/400-499/489/README.md)                                                                 | :lock: | Hard   |             |      |
| 490  | [The Maze](./problems/400-499/490/README.md)                                                                           | :lock: | Medium |             |      |
| 491  | [Increasing Subsequences](./problems/400-499/491/README.md)                                                            |        | Medium |             |      |
| 492  | [Construct the Rectangle](./problems/400-499/492/README.md)                                                            | :o:    | Easy   | [math]      |      |
| 493  | [Reverse Pairs](./problems/400-499/493/README.md)                                                                      |        | Hard   |             |      |
| 494  | [Target Sum](./problems/400-499/494/README.md)                                                                         |        | Medium |             |      |
| 495  | [Teemo Attacking](./problems/400-499/495/README.md)                                                                    | :o:    | Easy   | [arr]       |      |
| 496  | [Next Greater Element I](./problems/400-499/496/README.md)                                                             | :o:    | Easy   | [stk],[hsh] | :+1: |
| 497  | [Random Point in Non-overlapping Rectangles](./problems/400-499/497/README.md)                                         |        | Medium |             |      |
| 498  | [Diagonal Traverse](./problems/400-499/498/README.md)                                                                  |        | Medium |             |      |
| 499  | [The Maze III](./problems/400-499/499/README.md)                                                                       | :lock: | Hard   |             |      |
| 500  | [Keyboard Row](./problems/500-599/500/README.md)                                                                       | :o:    | Easy   | [string]    | :+1: |
| 501  | [Find Mode in Binary Search Tree](./problems/500-599/501/README.md)                                                    | :o:    | Easy   | [tr]        | ~    |
| 502  | [IPO](./problems/500-599/502/README.md)                                                                                |        | Hard   |             |      |
| 503  | [Next Greater Element II](./problems/500-599/503/README.md)                                                            |        | Medium |             |      |
| 504  | [Base 7](./problems/500-599/504/README.md)                                                                             | :o:    | Easy   | [math]      |      |
| 505  | [The Maze II](./problems/500-599/505/README.md)                                                                        | :lock: | Medium |             |      |
| 506  | [Relative Ranks](./problems/500-599/506/README.md)                                                                     | :o:    | Easy   | [map]       |      |
| 507  | [Perfect Number](./problems/500-599/507/README.md)                                                                     | :o:    | Easy   | [math]      |      |
| 508  | [Most Frequent Subtree Sum](./problems/500-599/508/README.md)                                                          |        | Medium |             |      |
| 509  | [Fibonacci Number](./problems/500-599/509/README.md)                                                                   | :o:    | Level  | [math]      |      |
| 513  | [Find Bottom Left Tree Value](./problems/500-599/513/README.md)                                                        |        | Medium |             |      |
| 514  | [Freedom Trail](./problems/500-599/514/README.md)                                                                      |        | Hard   |             |      |
| 515  | [Find Largest Value in Each Tree Row](./problems/500-599/515/README.md)                                                |        | Medium |             |      |
| 516  | [Longest Palindromic Subsequence](./problems/500-599/516/README.md)                                                    |        | Medium |             |      |
| 517  | [Super Washing Machines](./problems/500-599/517/README.md)                                                             |        | Hard   |             |      |
| 518  | [Coin Change 2](./problems/500-599/518/README.md)                                                                      |        | Medium |             |      |
| 519  | [Random Flip Matrix](./problems/500-599/519/README.md)                                                                 |        | Medium |             |      |
| 520  | [Detect Capital](./problems/500-599/520/README.md)                                                                     | :o:    | Easy   | [str]       |      |
| 521  | [Longest Uncommon Subsequence I](./problems/500-599/521/README.md)                                                     | :o:    | Easy   | [str]       | :-1: |
| 522  | [Longest Uncommon Subsequence II](./problems/500-599/522/README.md)                                                    |        | Medium |             |      |
| 523  | [Continuous Subarray Sum](./problems/500-599/523/README.md)                                                            |        | Medium |             |      |
| 524  | [Longest Word in Dictionary through Deleting](./problems/500-599/524/README.md)                                        |        | Medium |             |      |
| 525  | [Contiguous Array](./problems/500-599/525/README.md)                                                                   |        | Medium |             |      |
| 526  | [Beautiful Arrangement](./problems/500-599/526/README.md)                                                              |        | Medium |             |      |
| 527  | [Word Abbreviation](./problems/500-599/527/README.md)                                                                  | :lock: | Hard   |             |      |
| 528  | [Random Pick with Weight](./problems/500-599/528/README.md)                                                            |        | Medium |             |      |
| 529  | [Minesweeper](./problems/500-599/529/README.md)                                                                        |        | Medium |             |      |
| 530  | [Minimum Absolute Difference in BST](./problems/500-599/530/README.md)                                                 | :o:    | Easy   | [tr]        |      |
| 531  | [Lonely Pixel I](./problems/500-599/531/README.md)                                                                     | :lock: | Medium |             |      |
| 532  | [K-diff Pairs in an Array](./problems/500-599/532/README.md)                                                           | :o:    | Easy   | [hsh]       |      |
| 533  | [Lonely Pixel II](./problems/500-599/533/README.md)                                                                    | :lock: | Medium |             |      |
| 535  | [Encode and Decode TinyURL](./problems/500-599/535/README.md)                                                          | :o:    | Medium | [hsh]       |      |
| 536  | [Construct Binary Tree from String](./problems/500-599/536/README.md)                                                  | :lock: | Medium |             |      |
| 537  | [Complex Number Multiplication](./problems/500-599/537/README.md)                                                      | :o:    | Medium | [string]    |      |
| 538  | [Convert BST to Greater Tree](./problems/500-599/538/README.md)                                                        | :o:    | Easy   | [tr]        |      |
| 539  | [Minimum Time Difference](./problems/500-599/539/README.md)                                                            |        | Medium |             |      |
| 540  | [Single Element in a Sorted Array](./problems/500-599/540/README.md)                                                   |        | Medium |             |      |
| 541  | [Reverse String II](./problems/500-599/541/README.md)                                                                  | :o:    | Easy   | [str]       |      |
| 542  | [01 Matrix](./problems/500-599/542/README.md)                                                                          |        | Medium |             |      |
| 543  | [Diameter of Binary Tree](./problems/500-599/543/README.md)                                                            | :o:    | Easy   | [tr]        |      |
| 544  | [Output Contest Matches](./problems/500-599/544/README.md)                                                             | :lock: | Medium |             |      |
| 545  | [Boundary of Binary Tree](./problems/500-599/545/README.md)                                                            | :lock: | Medium |             |      |
| 546  | [Remove Boxes](./problems/500-599/546/README.md)                                                                       |        | Hard   |             |      |
| 547  | [Friend Circles](./problems/500-599/547/README.md)                                                                     | :o:    | Medium | [ds]        |      |
| 548  | [Split Array with Equal Sum](./problems/500-599/548/README.md)                                                         | :lock: | Medium |             |      |
| 549  | [Binary Tree Longest Consecutive Sequence II](./problems/500-599/549/README.md)                                        | :lock: | Medium |             |      |
| 551  | [Student Attendance Record I](./problems/500-599/551/README.md)                                                        | :o:    | Easy   | [str]       | :-1: |
| 552  | [Student Attendance Record II](./problems/500-599/552/README.md)                                                       |        | Hard   |             |      |
| 553  | [Optimal Division](./problems/500-599/553/README.md)                                                                   |        | Medium |             |      |
| 554  | [Brick Wall](./problems/500-599/554/README.md)                                                                         |        | Medium |             |      |
| 555  | [Split Concatenated Strings](./problems/500-599/555/README.md)                                                         | :lock: | Medium |             |      |
| 556  | [Next Greater Element III](./problems/500-599/556/README.md)                                                           |        | Medium |             |      |
| 557  | [Reverse Words in a String III](./problems/500-599/557/README.md)                                                      | :o:    | Easy   | [str]       |      |
| 558  | [Quad Tree Intersection](./problems/500-599/558/README.md)                                                             | :o:    | Easy   | [tr]        |      |
| 559  | [Maximum Depth of N-ary Tree](./problems/500-599/559/README.md)                                                        |        | Easy   |             |      |
| 560  | [Subarray Sum Equals K](./problems/500-599/560/README.md)                                                              |        | Medium |             |      |
| 561  | [Array Partition I](./problems/500-599/561/README.md)                                                                  | :o:    | Easy   | [arr]       |      |
| 562  | [Longest Line of Consecutive One in Matrix](./problems/500-599/562/README.md)                                          | :lock: | Medium |             |      |
| 563  | [Binary Tree Tilt](./problems/500-599/563/README.md)                                                                   | :o:    | Easy   | [tr]        |      |
| 564  | [Find the Closest Palindrome](./problems/500-599/564/README.md)                                                        |        | Hard   |             |      |
| 565  | [Array Nesting](./problems/500-599/565/README.md)                                                                      |        | Medium |             |      |
| 566  | [Reshape the Matrix](./problems/500-599/566/README.md)                                                                 | :o:    | Easy   | [arr]       | :+1: |
| 567  | [Permutation in String](./problems/500-599/567/README.md)                                                              |        | Medium |             |      |
| 568  | [Maximum Vacation Days](./problems/500-599/568/README.md)                                                              | :lock: | Hard   |             |      |
| 569  | [Median Employee Salary](./problems/500-599/569/README.md)                                                             | :lock: | Hard   |             |      |
| 570  | [Managers with at Least 5 Direct Reports](./problems/500-599/570/README.md)                                            | :lock: | Medium |             |      |
| 571  | [Find Median Given Frequency of Numbers](./problems/500-599/571/README.md)                                             | :lock: | Hard   |             |      |
| 572  | [Subtree of Another Tree](./problems/500-599/572/README.md)                                                            | :o:    | Easy   | [tr]        |      |
| 573  | [Squirrel Simulation](./problems/500-599/573/README.md)                                                                | :lock: | Medium |             |      |
| 574  | [Winning Candidate](./problems/500-599/574/README.md)                                                                  | :lock: | Medium |             |      |
| 575  | [Distribute Candies](./problems/500-599/575/README.md)                                                                 | :o:    | Easy   | [hsh]       |      |
| 576  | [Out of Boundary Paths](./problems/500-599/576/README.md)                                                              |        | Medium |             |      |
| 577  | [Employee Bonus](./problems/500-599/577/README.md)                                                                     | :lock: | Easy   |             |      |
| 578  | [Get Highest Answer Rate Question](./problems/500-599/578/README.md)                                                   | :lock: | Medium |             |      |
| 579  | [Find Cumulative Salary of an Employee](./problems/500-599/579/README.md)                                              | :lock: | Hard   |             |      |
| 580  | [Count Student Number in Departments](./problems/500-599/580/README.md)                                                | :lock: | Medium |             |      |
| 581  | [Shortest Unsorted Continuous Subarray](./problems/500-599/581/README.md)                                              | :o:    | Easy   | [arr]       |      |
| 582  | [Kill Process](./problems/500-599/582/README.md)                                                                       | :lock: | Medium |             |      |
| 583  | [Delete Operation for Two Strings](./problems/500-599/583/README.md)                                                   |        | Medium |             |      |
| 584  | [Find Customer Referee](./problems/500-599/584/README.md)                                                              | :lock: | Easy   |             |      |
| 585  | [Investments in 2016](./problems/500-599/585/README.md)                                                                | :lock: | Medium |             |      |
| 586  | [Customer Placing the Largest Number of Orders](./problems/500-599/586/README.md)                                      | :lock: | Easy   |             |      |
| 587  | [Erect the Fence](./problems/500-599/587/README.md)                                                                    |        | Hard   |             |      |
| 588  | [Design In-Memory File System](./problems/500-599/588/README.md)                                                       | :lock: | Hard   |             |      |
| 589  | [N-ary Tree Preorder Traversal](./problems/500-599/589/README.md)                                                      | :o:    | Easy   | [tr]        |      |
| 590  | [N-ary Tree Postorder Traversal](./problems/500-599/590/README.md)                                                     | :o:    | Easy   | [tr]        |      |
| 591  | [Tag Validator](./problems/500-599/591/README.md)                                                                      |        | Hard   |             |      |
| 592  | [Fraction Addition and Subtraction](./problems/500-599/592/README.md)                                                  |        | Medium |             |      |
| 593  | [Valid Square](./problems/500-599/593/README.md)                                                                       |        | Medium |             |      |
| 594  | [Longest Harmonious Subsequence](./problems/500-599/594/README.md)                                                     | :o:    | Easy   | [hsh]       |      |
| 595  | [Big Countries](./problems/500-599/595/README.md)                                                                      | :soon: | Easy   | [sql]       |      |
| 596  | [Classes More Than 5 Students](./problems/500-599/596/README.md)                                                       | :soon: | Easy   | [sql]       |      |
| 597  | [Friend Requests I: Overall Acceptance Rate](./problems/500-599/597/README.md)                                         | :lock: | Easy   |             |      |
| 598  | [Range Addition II](./problems/500-599/598/README.md)                                                                  | :o:    | Easy   | [math]      | :-1: |
| 599  | [Minimum Index Sum of Two Lists](./problems/500-599/599/README.md)                                                     | :o:    | Easy   | [hsh]       |      |
| 600  | [Non-negative Integers without Consecutive Ones](./problems/600-699/600/README.md)                                     |        | Hard   |             |      |
| 601  | [Human Traffic of Stadium](./problems/600-699/601/README.md)                                                           | :soon: | Hard   | [sql]       |      |
| 602  | [Friend Requests II: Who Has the Most Friends](./problems/600-699/602/README.md)                                       | :lock: | Medium |             |      |
| 603  | [Consecutive Available Seats](./problems/600-699/603/README.md)                                                        | :lock: | Easy   |             |      |
| 604  | [Design Compressed String Iterator](./problems/600-699/604/README.md)                                                  | :lock: | Easy   |             |      |
| 605  | [Can Place Flowers](./problems/600-699/605/README.md)                                                                  | :o:    | Easy   | [arr]       |      |
| 606  | [Construct String from Binary Tree](./problems/600-699/606/README.md)                                                  | :o:    | Easy   | [tr]        |      |
| 607  | [Sales Person](./problems/600-699/607/README.md)                                                                       | :lock: | Easy   |             |      |
| 608  | [Tree Node](./problems/600-699/608/README.md)                                                                          | :lock: | Medium |             |      |
| 609  | [Find Duplicate File in System](./problems/600-699/609/README.md)                                                      |        | Medium |             |      |
| 610  | [Triangle Judgement](./problems/600-699/610/README.md)                                                                 | :lock: | Easy   |             |      |
| 611  | [Valid Triangle Number](./problems/600-699/611/README.md)                                                              |        | Medium |             |      |
| 612  | [Shortest Distance in a Plane](./problems/600-699/612/README.md)                                                       | :lock: | Medium |             |      |
| 613  | [Shortest Distance in a Line](./problems/600-699/613/README.md)                                                        | :lock: | Easy   |             |      |
| 614  | [Second Degree Follower](./problems/600-699/614/README.md)                                                             | :lock: | Medium |             |      |
| 615  | [Average Salary: Departments VS Company](./problems/600-699/615/README.md)                                             | :lock: | Hard   |             |      |
| 616  | [Add Bold Tag in String](./problems/600-699/616/README.md)                                                             | :lock: | Medium |             |      |
| 617  | [Merge Two Binary Trees](./problems/600-699/617/README.md)                                                             | :o:    | Easy   | [tr]        |      |
| 618  | [Students Report By Geography](./problems/600-699/618/README.md)                                                       | :lock: | Hard   |             |      |
| 619  | [Biggest Single Number](./problems/600-699/619/README.md)                                                              | :lock: | Easy   |             |      |
| 620  | [Not Boring Movies](./problems/600-699/620/README.md)                                                                  | :soon: | Easy   | [sql]       |      |
| 621  | [Task Scheduler](./problems/600-699/621/README.md)                                                                     |        | Medium |             |      |
| 622  | [Design Circular Queue](./problems/600-699/622/README.md)                                                              |        | Medium |             |      |
| 623  | [Add One Row to Tree](./problems/600-699/623/README.md)                                                                |        | Medium |             |      |
| 624  | [Maximum Distance in Arrays](./problems/600-699/624/README.md)                                                         | :lock: | Easy   |             |      |
| 625  | [Minimum Factorization](./problems/600-699/625/README.md)                                                              | :lock: | Medium |             |      |
| 626  | [Exchange Seats](./problems/600-699/626/README.md)                                                                     | :soon: | Medium | [sql]       |      |
| 627  | [Swap Salary](./problems/600-699/627/README.md)                                                                        | :soon: | Easy   | [sql]       |      |
| 628  | [Maximum Product of Three Numbers](./problems/600-699/628/README.md)                                                   | :o:    | Easy   | [math]      |      |
| 629  | [K Inverse Pairs Array](./problems/600-699/629/README.md)                                                              |        | Hard   |             |      |
| 630  | [Course Schedule III](./problems/600-699/630/README.md)                                                                |        | Hard   |             |      |
| 631  | [Design Excel Sum Formula](./problems/600-699/631/README.md)                                                           | :lock: | Hard   |             |      |
| 632  | [Smallest Range](./problems/600-699/632/README.md)                                                                     |        | Hard   |             |      |
| 633  | [Sum of Square Numbers](./problems/600-699/633/README.md)                                                              | :o:    | Easy   | [math]      |      |
| 634  | [Find the Derangement of An Array](./problems/600-699/634/README.md)                                                   | :lock: | Medium |             |      |
| 635  | [Design Log Storage System](./problems/600-699/635/README.md)                                                          | :lock: | Medium |             |      |
| 636  | [Exclusive Time of Functions](./problems/600-699/636/README.md)                                                        |        | Medium |             |      |
| 637  | [Average of Levels in Binary Tree](./problems/600-699/637/README.md)                                                   | :o:    | Easy   | [tr]        |      |
| 638  | [Shopping Offers](./problems/600-699/638/README.md)                                                                    |        | Medium |             |      |
| 639  | [Decode Ways II](./problems/600-699/639/README.md)                                                                     |        | Hard   |             |      |
| 640  | [Solve the Equation](./problems/600-699/640/README.md)                                                                 |        | Medium |             |      |
| 641  | [Design Circular Deque](./problems/600-699/641/README.md)                                                              |        | Medium |             |      |
| 642  | [Design Search Autocomplete System](./problems/600-699/642/README.md)                                                  | :lock: | Hard   |             |      |
| 643  | [Maximum Average Subarray I](./problems/600-699/643/README.md)                                                         | :o:    | Easy   | [arr]       |      |
| 644  | [Maximum Average Subarray II](./problems/600-699/644/README.md)                                                        | :lock: | Hard   |             |      |
| 645  | [Set Mismatch](./problems/600-699/645/README.md)                                                                       | :o:    | Easy   | [arr]       |      |
| 646  | [Maximum Length of Pair Chain](./problems/600-699/646/README.md)                                                       |        | Medium |             |      |
| 647  | [Palindromic Substrings](./problems/600-699/647/README.md)                                                             | :o:    | Medium | [arr]       |      |
| 648  | [Replace Words](./problems/600-699/648/README.md)                                                                      |        | Medium |             |      |
| 649  | [Dota2 Senate](./problems/600-699/649/README.md)                                                                       |        | Medium |             |      |
| 650  | [2 Keys Keyboard](./problems/600-699/650/README.md)                                                                    |        | Medium |             |      |
| 651  | [4 Keys Keyboard](./problems/600-699/651/README.md)                                                                    | :lock: | Medium |             |      |
| 652  | [Find Duplicate Subtrees](./problems/600-699/652/README.md)                                                            |        | Medium |             |      |
| 653  | [Two Sum IV - Input is a BST](./problems/600-699/653/README.md)                                                        | :o:    | Easy   | [tr]        |      |
| 654  | [Maximum Binary Tree](./problems/600-699/654/README.md)                                                                |        | Medium |             |      |
| 655  | [Print Binary Tree](./problems/600-699/655/README.md)                                                                  | :o:    | Medium | [tr]        |      |
| 656  | [Coin Path](./problems/600-699/656/README.md)                                                                          | :lock: | Hard   |             |      |
| 657  | [Robot Return to Origin](./problems/600-699/657/README.md)                                                             | :o:    | Easy   | [arr]       |      |
| 658  | [Find K Closest Elements](./problems/600-699/658/README.md)                                                            |        | Medium |             |      |
| 659  | [Split Array into Consecutive Subsequences](./problems/600-699/659/README.md)                                          |        | Medium |             |      |
| 660  | [Remove 9](./problems/600-699/660/README.md)                                                                           | :lock: | Hard   |             |      |
| 661  | [Image Smoother](./problems/600-699/661/README.md)                                                                     | :o:    | Easy   | [arr]       |      |
| 662  | [Maximum Width of Binary Tree](./problems/600-699/662/README.md)                                                       | :o:    | Medium | [dfs]       |      |
| 663  | [Equal Tree Partition](./problems/600-699/663/README.md)                                                               | :lock: | Medium |             |      |
| 664  | [Strange Printer](./problems/600-699/664/README.md)                                                                    |        | Hard   |             |      |
| 665  | [Non-decreasing Array](./problems/600-699/665/README.md)                                                               | :o:    | Easy   | [arr]       |      |
| 666  | [Path Sum IV](./problems/600-699/666/README.md)                                                                        | :lock: | Medium |             |      |
| 667  | [Beautiful Arrangement II](./problems/600-699/667/README.md)                                                           |        | Medium |             |      |
| 668  | [Kth Smallest Number in Multiplication Table](./problems/600-699/668/README.md)                                        |        | Hard   |             |      |
| 669  | [Trim a Binary Search Tree](./problems/600-699/669/README.md)                                                          | :o:    | Easy   | [tr]        |      |
| 670  | [Maximum Swap](./problems/600-699/670/README.md)                                                                       |        | Medium |             |      |
| 671  | [Second Minimum Node In a Binary Tree](./problems/600-699/671/README.md)                                               | :o:    | Easy   | [tr]        |      |
| 672  | [Bulb Switcher II](./problems/600-699/672/README.md)                                                                   |        | Medium |             |      |
| 673  | [Number of Longest Increasing Subsequence](./problems/600-699/673/README.md)                                           |        | Medium |             |      |
| 674  | [Longest Continuous Increasing Subsequence](./problems/600-699/674/README.md)                                          | :o:    | Easy   | [arr]       |      |
| 675  | [Cut Off Trees for Golf Event](./problems/600-699/675/README.md)                                                       |        | Hard   |             |      |
| 676  | [Implement Magic Dictionary](./problems/600-699/676/README.md)                                                         |        | Medium |             |      |
| 677  | [Map Sum Pairs](./problems/600-699/677/README.md)                                                                      |        | Medium |             |      |
| 678  | [Valid Parenthesis String](./problems/600-699/678/README.md)                                                           |        | Medium |             |      |
| 679  | [24 Game](./problems/600-699/679/README.md)                                                                            |        | Hard   |             |      |
| 680  | [Valid Palindrome II](./problems/600-699/680/README.md)                                                                | :o:    | Easy   | [arr]       |      |
| 681  | [Next Closest Time](./problems/600-699/681/README.md)                                                                  | :lock: | Medium |             |      |
| 682  | [Baseball Game](./problems/600-699/682/README.md)                                                                      | :o:    | Easy   | [stk]       |      |
| 683  | [K Empty Slots](./problems/600-699/683/README.md)                                                                      | :lock: | Hard   |             |      |
| 684  | [Redundant Connection](./problems/600-699/684/README.md)                                                               |        | Medium |             |      |
| 685  | [Redundant Connection II](./problems/600-699/685/README.md)                                                            |        | Hard   |             |      |
| 686  | [Repeated String Match](./problems/600-699/686/README.md)                                                              | :o:    | Easy   | [str]       |      |
| 687  | [Longest Univalue Path](./problems/600-699/687/README.md)                                                              | :o:    | Easy   | [tr]        |      |
| 688  | [Knight Probability in Chessboard](./problems/600-699/688/README.md)                                                   |        | Medium |             |      |
| 689  | [Maximum Sum of 3 Non-Overlapping Subarrays](./problems/600-699/689/README.md)                                         |        | Hard   |             |      |
| 690  | [Employee Importance](./problems/600-699/690/README.md)                                                                | :o:    | Easy   | [hsh]       |      |
| 691  | [Stickers to Spell Word](./problems/600-699/691/README.md)                                                             |        | Hard   |             |      |
| 692  | [Top K Frequent Words](./problems/600-699/692/README.md)                                                               |        | Medium |             |      |
| 693  | [Binary Number with Alternating Bits](./problems/600-699/693/README.md)                                                | :o:    | Easy   | [bit]       |      |
| 694  | [Number of Distinct Islands](./problems/600-699/694/README.md)                                                         | :lock: | Medium |             |      |
| 695  | [Max Area of Island](./problems/600-699/695/README.md)                                                                 | :o:    | Medium | [dfs]       |      |
| 696  | [Count Binary Substrings](./problems/600-699/696/README.md)                                                            | :o:    | Easy   | [arr]       | :+1: |
| 697  | [Degree of an Array](./problems/600-699/697/README.md)                                                                 | :o:    | Easy   | [hsh]       |      |
| 698  | [Partition to K Equal Sum Subsets](./problems/600-699/698/README.md)                                                   |        | Medium |             |      |
| 699  | [Falling Squares](./problems/600-699/699/README.md)                                                                    |        | Hard   |             |      |
| 700  | [Search in a Binary Search Tree](./problems/700-799/700/README.md)                                                     | :o:    | Easy   | [tr]        |      |
| 701  | [Insert into a Binary Search Tree](./problems/700-799/701/README.md)                                                   |        | Medium |             |      |
| 702  | [Search in a Sorted Array of Unknown Size](./problems/700-799/702/README.md)                                           | :lock: | Medium |             |      |
| 703  | [Kth Largest Element in a Stream](./problems/700-799/703/README.md)                                                    | :o:    | Easy   | [des]       |      |
| 704  | [Binary Search](./problems/700-799/704/README.md)                                                                      | :o:    | Easy   | [bs]        |      |
| 705  | [Design HashSet](./problems/700-799/705/README.md)                                                                     | :o:    | Easy   | [hsh]       |      |
| 706  | [Design HashMap](./problems/700-799/706/README.md)                                                                     | :o:    | Easy   | [hsh]       |      |
| 707  | [Design Linked List](./problems/700-799/707/README.md)                                                                 | :o:    | Easy   | [ll]        |      |
| 708  | [Insert into a Cyclic Sorted List](./problems/700-799/708/README.md)                                                   | :lock: | Medium |             |      |
| 709  | [To Lower Case](./problems/700-799/709/README.md)                                                                      | :o:    | Easy   | [str]       |      |
| 710  | [Random Pick with Blacklist](./problems/700-799/710/README.md)                                                         |        | Hard   |             |      |
| 711  | [Number of Distinct Islands II](./problems/700-799/711/README.md)                                                      | :lock: | Hard   |             |      |
| 712  | [Minimum ASCII Delete Sum for Two Strings](./problems/700-799/712/README.md)                                           |        | Medium |             |      |
| 713  | [Subarray Product Less Than K](./problems/700-799/713/README.md)                                                       |        | Medium |             |      |
| 714  | [Best Time to Buy and Sell Stock with Transaction Fee](./problems/700-799/714/README.md)                               |        | Medium |             |      |
| 715  | [Range Module](./problems/700-799/715/README.md)                                                                       |        | Hard   |             |      |
| 716  | [Max Stack](./problems/700-799/716/README.md)                                                                          | :lock: | Easy   |             |      |
| 717  | [1-bit and 2-bit Characters](./problems/700-799/717/README.md)                                                         | :o:    | Easy   | [str]       |      |
| 718  | [Maximum Length of Repeated Subarray](./problems/700-799/718/README.md)                                                |        | Medium |             |      |
| 719  | [Find K-th Smallest Pair Distance](./problems/700-799/719/README.md)                                                   |        | Hard   |             |      |
| 720  | [Longest Word in Dictionary](./problems/700-799/720/README.md)                                                         | :o:    | Easy   | [hsh]       |      |
| 721  | [Accounts Merge](./problems/700-799/721/README.md)                                                                     | :o:    | Medium | [ds]        | :+1: |
| 722  | [Remove Comments](./problems/700-799/722/README.md)                                                                    |        | Medium |             |      |
| 723  | [Candy Crush](./problems/700-799/723/README.md)                                                                        | :lock: | Medium |             |      |
| 724  | [Find Pivot Index](./problems/700-799/724/README.md)                                                                   | :o:    | Easy   | [arr]       |      |
| 725  | [Split Linked List in Parts](./problems/700-799/725/README.md)                                                         |        | Medium |             |      |
| 726  | [Number of Atoms](./problems/700-799/726/README.md)                                                                    |        | Hard   |             |      |
| 727  | [Minimum Window Subsequence](./problems/700-799/727/README.md)                                                         | :lock: | Hard   |             |      |
| 728  | [Self Dividing Numbers](./problems/700-799/728/README.md)                                                              | :o:    | Easy   | [math]      |      |
| 729  | [My Calendar I](./problems/700-799/729/README.md)                                                                      |        | Medium |             |      |
| 730  | [Count Different Palindromic Subsequences](./problems/700-799/730/README.md)                                           |        | Hard   |             |      |
| 731  | [My Calendar II](./problems/700-799/731/README.md)                                                                     |        | Medium |             |      |
| 732  | [My Calendar III](./problems/700-799/732/README.md)                                                                    |        | Hard   |             |      |
| 733  | [Flood Fill](./problems/700-799/733/README.md)                                                                         | :o:    | Easy   | [bfs]       |      |
| 734  | [Sentence Similarity](./problems/700-799/734/README.md)                                                                | :lock: | Easy   |             |      |
| 735  | [Asteroid Collision](./problems/700-799/735/README.md)                                                                 |        | Medium |             |      |
| 736  | [Parse Lisp Expression](./problems/700-799/736/README.md)                                                              |        | Hard   |             |      |
| 737  | [Sentence Similarity II](./problems/700-799/737/README.md)                                                             | :lock: | Medium |             |      |
| 738  | [Monotone Increasing Digits](./problems/700-799/738/README.md)                                                         |        | Medium |             |      |
| 739  | [Daily Temperatures](./problems/700-799/739/README.md)                                                                 | :o:    | Medium | [stack]     | :+1: |
| 740  | [Delete and Earn](./problems/700-799/740/README.md)                                                                    |        | Medium |             |      |
| 741  | [Cherry Pickup](./problems/700-799/741/README.md)                                                                      |        | Hard   |             |      |
| 742  | [Closest Leaf in a Binary Tree](./problems/700-799/742/README.md)                                                      | :lock: | Medium |             |      |
| 743  | [Network Delay Time](./problems/700-799/743/README.md)                                                                 | :o:    | Easy   | [gph]       |      |
| 744  | [Find Smallest Letter Greater Than Target](./problems/700-799/744/README.md)                                           | :o:    | Easy   | [arr]       |      |
| 745  | [Prefix and Suffix Search](./problems/700-799/745/README.md)                                                           |        | Hard   |             |      |
| 746  | [Min Cost Climbing Stairs](./problems/700-799/746/README.md)                                                           | :o:    | Easy   | [dp]        | :+1: |
| 747  | [Largest Number At Least Twice of Others](./problems/700-799/747/README.md)                                            | :o:    | Easy   | [tp]        |      |
| 748  | [Shortest Completing Word](./problems/700-799/748/README.md)                                                           | :o:    | Easy   | [str]       | :+1: |
| 749  | [Contain Virus](./problems/700-799/749/README.md)                                                                      |        | Hard   |             |      |
| 750  | [Number Of Corner Rectangles](./problems/700-799/750/README.md)                                                        | :lock: | Medium |             |      |
| 751  | [IP to CIDR](./problems/700-799/751/README.md)                                                                         | :lock: | Easy   |             |      |
| 752  | [Open the Lock](./problems/700-799/752/README.md)                                                                      |        | Medium |             |      |
| 753  | [Cracking the Safe](./problems/700-799/753/README.md)                                                                  |        | Hard   |             |      |
| 754  | [Reach a Number](./problems/700-799/754/README.md)                                                                     | :o:    | Easy   | [math]      |      |
| 755  | [Pour Water](./problems/700-799/755/README.md)                                                                         | :lock: | Medium |             |      |
| 756  | [Pyramid Transition Matrix](./problems/700-799/756/README.md)                                                          |        | Medium |             |      |
| 757  | [Set Intersection Size At Least Two](./problems/700-799/757/README.md)                                                 |        | Hard   |             |      |
| 758  | [Bold Words in String](./problems/700-799/758/README.md)                                                               | :lock: | Easy   |             |      |
| 759  | [Employee Free Time](./problems/700-799/759/README.md)                                                                 | :lock: | Hard   |             |      |
| 760  | [Find Anagram Mappings](./problems/700-799/760/README.md)                                                              | :lock: | Easy   |             |      |
| 761  | [Special Binary String](./problems/700-799/761/README.md)                                                              |        | Hard   |             |      |
| 762  | [Prime Number of Set Bits in Binary Representation](./problems/700-799/762/README.md)                                  | :o:    | Easy   | [bit]       |      |
| 763  | [Partition Labels](./problems/700-799/763/README.md)                                                                   | :o:    | Medium | [arr]       |      |
| 764  | [Largest Plus Sign](./problems/700-799/764/README.md)                                                                  |        | Medium |             |      |
| 765  | [Couples Holding Hands](./problems/700-799/765/README.md)                                                              |        | Hard   |             |      |
| 766  | [Toeplitz Matrix](./problems/700-799/766/README.md)                                                                    | :o:    | Easy   | [arr]       |      |
| 767  | [Reorganize String](./problems/700-799/767/README.md)                                                                  |        | Medium |             |      |
| 768  | [Max Chunks To Make Sorted II](./problems/700-799/768/README.md)                                                       |        | Hard   |             |      |
| 769  | [Max Chunks To Make Sorted](./problems/700-799/769/README.md)                                                          |        | Medium |             |      |
| 770  | [Basic Calculator IV](./problems/700-799/770/README.md)                                                                |        | Hard   |             |      |
| 771  | [Jewels and Stones](./problems/700-799/771/README.md)                                                                  | :o:    | Easy   | [hsh]       |      |
| 772  | [Basic Calculator III](./problems/700-799/772/README.md)                                                               | :lock: | Hard   |             |      |
| 773  | [Sliding Puzzle](./problems/700-799/773/README.md)                                                                     |        | Hard   |             |      |
| 774  | [Minimize Max Distance to Gas Station](./problems/700-799/774/README.md)                                               | :lock: | Hard   |             |      |
| 775  | [Global and Local Inversions](./problems/700-799/775/README.md)                                                        |        | Medium |             |      |
| 776  | [Split BST](./problems/700-799/776/README.md)                                                                          | :lock: | Medium |             |      |
| 777  | [Swap Adjacent in LR String](./problems/700-799/777/README.md)                                                         |        | Medium |             |      |
| 778  | [Swim in Rising Water](./problems/700-799/778/README.md)                                                               |        | Hard   |             |      |
| 779  | [K-th Symbol in Grammar](./problems/700-799/779/README.md)                                                             |        | Medium |             |      |
| 780  | [Reaching Points](./problems/700-799/780/README.md)                                                                    |        | Hard   |             |      |
| 781  | [Rabbits in Forest](./problems/700-799/781/README.md)                                                                  |        | Medium |             |      |
| 782  | [Transform to Chessboard](./problems/700-799/782/README.md)                                                            |        | Hard   |             |      |
| 783  | [Minimum Distance Between BST Nodes](./problems/700-799/783/README.md)                                                 | :o:    | Easy   | [tr]        | 530  |
| 784  | [Letter Case Permutation](./problems/700-799/784/README.md)                                                            | :o:    | Easy   | [bt]        |      |
| 785  | [Is Graph Bipartite?](./problems/700-799/785/README.md)                                                                |        | Medium |             |      |
| 786  | [K-th Smallest Prime Fraction](./problems/700-799/786/README.md)                                                       |        | Hard   |             |      |
| 787  | [Cheapest Flights Within K Stops](./problems/700-799/787/README.md)                                                    |        | Medium |             |      |
| 788  | [Rotated Digits](./problems/700-799/788/README.md)                                                                     | :o:    | Easy   | [dp]        | :+1: |
| 789  | [Escape The Ghosts](./problems/700-799/789/README.md)                                                                  |        | Medium |             |      |
| 790  | [Domino and Tromino Tiling](./problems/700-799/790/README.md)                                                          |        | Medium |             |      |
| 791  | [Custom Sort String](./problems/700-799/791/README.md)                                                                 |        | Medium |             |      |
| 792  | [Number of Matching Subsequences](./problems/700-799/792/README.md)                                                    |        | Medium |             |      |
| 793  | [Preimage Size of Factorial Zeroes Function](./problems/700-799/793/README.md)                                         |        | Hard   |             |      |
| 794  | [Valid Tic-Tac-Toe State](./problems/700-799/794/README.md)                                                            |        | Medium |             |      |
| 795  | [Number of Subarrays with Bounded Maximum](./problems/700-799/795/README.md)                                           |        | Medium |             |      |
| 796  | [Rotate String](./problems/700-799/796/README.md)                                                                      | :o:    | Easy   | [str]       | :+1: |
| 797  | [All Paths From Source to Target](./problems/700-799/797/README.md)                                                    |        | Medium |             |      |
| 798  | [Smallest Rotation with Highest Score](./problems/700-799/798/README.md)                                               |        | Hard   |             |      |
| 799  | [Champagne Tower](./problems/700-799/799/README.md)                                                                    |        | Medium |             |      |
| 800  | [Similar RGB Color](./problems/800-899/800/README.md)                                                                  | :lock: | Easy   |             |      |
| 801  | [Minimum Swaps To Make Sequences Increasing](./problems/800-899/801/README.md)                                         |        | Medium |             |      |
| 802  | [Find Eventual Safe States](./problems/800-899/802/README.md)                                                          |        | Medium |             |      |
| 803  | [Bricks Falling When Hit](./problems/800-899/803/README.md)                                                            |        | Hard   |             |      |
| 804  | [Unique Morse Code Words](./problems/800-899/804/README.md)                                                            | :o:    | Easy   | [str]       |      |
| 805  | [Split Array With Same Average](./problems/800-899/805/README.md)                                                      |        | Hard   |             |      |
| 806  | [Number of Lines To Write String](./problems/800-899/806/README.md)                                                    | :o:    | Easy   | [str]       |      |
| 807  | [Max Increase to Keep City Skyline](./problems/800-899/807/README.md)                                                  |        | Medium |             |      |
| 808  | [Soup Servings](./problems/800-899/808/README.md)                                                                      |        | Medium |             |      |
| 809  | [Expressive Words](./problems/800-899/809/README.md)                                                                   |        | Medium |             |      |
| 810  | [Chalkboard XOR Game](./problems/800-899/810/README.md)                                                                |        | Hard   |             |      |
| 811  | [Subdomain Visit Count](./problems/800-899/811/README.md)                                                              | :o:    | Easy   | [str]       |      |
| 812  | [Largest Triangle Area](./problems/800-899/812/README.md)                                                              | :o:    | Easy   | [math]      | :-1: |
| 813  | [Largest Sum of Averages](./problems/800-899/813/README.md)                                                            |        | Medium |             |      |
| 814  | [Binary Tree Pruning](./problems/800-899/814/README.md)                                                                |        | Medium |             |      |
| 815  | [Bus Routes](./problems/800-899/815/README.md)                                                                         |        | Hard   |             |      |
| 816  | [Ambiguous Coordinates](./problems/800-899/816/README.md)                                                              |        | Medium |             |      |
| 817  | [Linked List Components](./problems/800-899/817/README.md)                                                             |        | Medium |             |      |
| 818  | [Race Car](./problems/800-899/818/README.md)                                                                           |        | Hard   |             |      |
| 819  | [Most Common Word](./problems/800-899/819/README.md)                                                                   | :o:    | Easy   | [str]       |      |
| 820  | [Short Encoding of Words](./problems/800-899/820/README.md)                                                            |        | Medium |             |      |
| 821  | [Shortest Distance to a Character](./problems/800-899/821/README.md)                                                   | :o:    | Easy   | [arr]       |      |
| 822  | [Card Flipping Game](./problems/800-899/822/README.md)                                                                 |        | Medium |             |      |
| 823  | [Binary Trees With Factors](./problems/800-899/823/README.md)                                                          |        | Medium |             |      |
| 824  | [Goat Latin](./problems/800-899/824/README.md)                                                                         | :o:    | Easy   | [str]       |      |
| 825  | [Friends Of Appropriate Ages](./problems/800-899/825/README.md)                                                        |        | Medium |             |      |
| 826  | [Most Profit Assigning Work](./problems/800-899/826/README.md)                                                         |        | Medium |             |      |
| 827  | [Making A Large Island](./problems/800-899/827/README.md)                                                              |        | Hard   |             |      |
| 828  | [Unique Letter String](./problems/800-899/828/README.md)                                                               |        | Hard   |             |      |
| 829  | [Consecutive Numbers Sum](./problems/800-899/829/README.md)                                                            |        | Hard   |             |      |
| 830  | [Positions of Large Groups](./problems/800-899/830/README.md)                                                          | :o:    | Easy   | [arr]       |      |
| 831  | [Masking Personal Information](./problems/800-899/831/README.md)                                                       |        | Medium |             |      |
| 832  | [Flipping an Image](./problems/800-899/832/README.md)                                                                  | :o:    | Easy   | [arr]       |      |
| 833  | [Find And Replace in String](./problems/800-899/833/README.md)                                                         |        | Medium |             |      |
| 834  | [Sum of Distances in Tree](./problems/800-899/834/README.md)                                                           |        | Hard   |             |      |
| 835  | [Image Overlap](./problems/800-899/835/README.md)                                                                      |        | Medium |             |      |
| 836  | [Rectangle Overlap](./problems/800-899/836/README.md)                                                                  | :o:    | Easy   | [math]      |      |
| 837  | [New 21 Game](./problems/800-899/837/README.md)                                                                        |        | Medium |             |      |
| 838  | [Push Dominoes](./problems/800-899/838/README.md)                                                                      |        | Medium |             |      |
| 839  | [Similar String Groups](./problems/800-899/839/README.md)                                                              |        | Hard   |             |      |
| 840  | [Magic Squares In Grid](./problems/800-899/840/README.md)                                                              | :o:    | Easy   | [arr]       |      |
| 841  | [Keys and Rooms](./problems/800-899/841/README.md)                                                                     |        | Medium |             |      |
| 842  | [Split Array into Fibonacci Sequence](./problems/800-899/842/README.md)                                                |        | Medium |             |      |
| 843  | [Guess the Word](./problems/800-899/843/README.md)                                                                     |        | Hard   |             |      |
| 844  | [Backspace String Compare](./problems/800-899/844/README.md)                                                           | :o:    | Easy   | [str]       |      |
| 845  | [Longest Mountain in Array](./problems/800-899/845/README.md)                                                          |        | Medium |             |      |
| 846  | [Hand of Straights](./problems/800-899/846/README.md)                                                                  |        | Medium |             |      |
| 847  | [Shortest Path Visiting All Nodes](./problems/800-899/847/README.md)                                                   |        | Hard   |             |      |
| 848  | [Shifting Letters](./problems/800-899/848/README.md)                                                                   |        | Medium |             |      |
| 849  | [Maximize Distance to Closest Person](./problems/800-899/849/README.md)                                                | :o:    | Easy   | [arr]       |      |
| 850  | [Rectangle Area II](./problems/800-899/850/README.md)                                                                  |        | Hard   |             |      |
| 851  | [Loud and Rich](./problems/800-899/851/README.md)                                                                      |        | Medium |             |      |
| 852  | [Peak Index in a Mountain Array](./problems/800-899/852/README.md)                                                     | :o:    | Easy   | [bs]        |      |
| 853  | [Car Fleet](./problems/800-899/853/README.md)                                                                          |        | Medium |             |      |
| 854  | [K-Similar Strings](./problems/800-899/854/README.md)                                                                  |        | Hard   |             |      |
| 855  | [Exam Room](./problems/800-899/855/README.md)                                                                          |        | Medium |             |      |
| 856  | [Score of Parentheses](./problems/800-899/856/README.md)                                                               |        | Medium |             |      |
| 857  | [Minimum Cost to Hire K Workers](./problems/800-899/857/README.md)                                                     |        | Hard   |             |      |
| 858  | [Mirror Reflection](./problems/800-899/858/README.md)                                                                  |        | Medium |             |      |
| 859  | [Buddy Strings](./problems/800-899/859/README.md)                                                                      | :o:    | Easy   | [str]       |      |
| 860  | [Lemonade Change](./problems/800-899/860/README.md)                                                                    | :o:    | Easy   | [arr]       |      |
| 861  | [Score After Flipping Matrix](./problems/800-899/861/README.md)                                                        |        | Medium |             |      |
| 862  | [Shortest Subarray with Sum at Least K](./problems/800-899/862/README.md)                                              |        | Hard   |             |      |
| 863  | [All Nodes Distance K in Binary Tree](./problems/800-899/863/README.md)                                                |        | Medium |             |      |
| 864  | [Shortest Path to Get All Keys](./problems/800-899/864/README.md)                                                      |        | Hard   |             |      |
| 865  | [Smallest Subtree with all the Deepest Nodes](./problems/800-899/865/README.md)                                        |        | Medium |             |      |
| 866  | [Prime Palindrome](./problems/800-899/866/README.md)                                                                   |        | Medium |             |      |
| 867  | [Transpose Matrix](./problems/800-899/867/README.md)                                                                   | :o:    | Easy   | [arr]       |      |
| 868  | [Binary Gap](./problems/800-899/868/README.md)                                                                         | :o:    | Easy   | [bit]       |      |
| 869  | [Reordered Power of 2](./problems/800-899/869/README.md)                                                               |        | Medium |             |      |
| 870  | [Advantage Shuffle](./problems/800-899/870/README.md)                                                                  |        | Medium |             |      |
| 871  | [Minimum Number of Refueling Stops](./problems/800-899/871/README.md)                                                  |        | Hard   |             |      |
| 872  | [Leaf-Similar Trees](./problems/800-899/872/README.md)                                                                 | :o:    | Easy   | [tr]        |      |
| 873  | [Length of Longest Fibonacci Subsequence](./problems/800-899/873/README.md)                                            |        | Medium |             |      |
| 874  | [Walking Robot Simulation](./problems/800-899/874/README.md)                                                           | :o:    | Easy   | [math]      |      |
| 875  | [Koko Eating Bananas](./problems/800-899/875/README.md)                                                                |        | Medium |             |      |
| 876  | [Middle of the Linked List](./problems/800-899/876/README.md)                                                          | :o:    | Easy   | [tp],[ll]   |      |
| 877  | [Stone Game](./problems/800-899/877/README.md)                                                                         |        | Medium |             |      |
| 878  | [Nth Magical Number](./problems/800-899/878/README.md)                                                                 |        | Hard   |             |      |
| 879  | [Profitable Schemes](./problems/800-899/879/README.md)                                                                 |        | Hard   |             |      |
| 880  | [Decoded String at Index](./problems/800-899/880/README.md)                                                            |        | Medium |             |      |
| 881  | [Boats to Save People](./problems/800-899/881/README.md)                                                               |        | Medium |             |      |
| 882  | [Reachable Nodes In Subdivided Graph](./problems/800-899/882/README.md)                                                |        | Hard   |             |      |
| 883  | [Projection Area of 3D Shapes](./problems/800-899/883/README.md)                                                       | :o:    | Easy   | [arr]       |      |
| 884  | [Uncommon Words from Two Sentences](./problems/800-899/884/README.md)                                                  | :o:    | Easy   | [hsh]       |      |
| 885  | [Spiral Matrix III](./problems/800-899/885/README.md)                                                                  |        | Medium |             |      |
| 886  | [Possible Bipartition](./problems/800-899/886/README.md)                                                               |        | Medium |             |      |
| 887  | [Super Egg Drop](./problems/800-899/887/README.md)                                                                     | :o:    | Hard   | [dp]        |      |
| 888  | [Fair Candy Swap](./problems/800-899/888/README.md)                                                                    | :o:    | Easy   | [hsh]       |      |
| 889  | [Construct Binary Tree from Preorder and Postorder Traversal](./problems/800-899/889/README.md)                        |        | Medium |             |      |
| 890  | [Find and Replace Pattern](./problems/800-899/890/README.md)                                                           |        | Medium |             |      |
| 891  | [Sum of Subsequence Widths](./problems/800-899/891/README.md)                                                          |        | Hard   |             |      |
| 892  | [Surface Area of 3D Shapes](./problems/800-899/892/README.md)                                                          | :o:    | Easy   | [arr]       |      |
| 893  | [Groups of Special-Equivalent Strings](./problems/800-899/893/README.md)                                               | :o:    | Easy   | [hsh]       |      |
| 894  | [All Possible Full Binary Trees](./problems/800-899/894/README.md)                                                     |        | Medium |             |      |
| 895  | [Maximum Frequency Stack](./problems/800-899/895/README.md)                                                            |        | Hard   |             |      |
| 896  | [Monotonic Array](./problems/800-899/896/README.md)                                                                    | :o:    | Easy   | [arr]       |      |
| 897  | [Increasing Order Search Tree](./problems/800-899/897/README.md)                                                       | :o:    | Easy   | [tr]        |      |
| 898  | [Bitwise ORs of Subarrays](./problems/800-899/898/README.md)                                                           |        | Medium |             |      |
| 899  | [Orderly Queue](./problems/800-899/899/README.md)                                                                      |        | Hard   |             |      |
| 900  | [RLE Iterator](./problems/900-999/900/README.md)                                                                       |        | Medium |             |      |
| 901  | [Online Stock Span](./problems/900-999/901/README.md)                                                                  |        | Medium |             |      |
| 902  | [Numbers At Most N Given Digit Set](./problems/900-999/902/README.md)                                                  |        | Hard   |             |      |
| 903  | [Valid Permutations for DI Sequence](./problems/900-999/903/README.md)                                                 |        | Hard   |             |      |
| 904  | [Fruit Into Baskets](./problems/900-999/904/README.md)                                                                 |        | Medium |             |      |
| 905  | [Sort Array By Parity](./problems/900-999/905/README.md)                                                               | :o:    | Easy   | [tp],[arr]  |      |
| 906  | [Super Palindromes](./problems/900-999/906/README.md)                                                                  |        | Hard   |             |      |
| 907  | [Sum of Subarray Minimums](./problems/900-999/907/README.md)                                                           |        | Medium |             |      |
| 908  | [Smallest Range I](./problems/900-999/908/README.md)                                                                   | :o:    | Easy   | [math]      | :-1: |
| 909  | [Snakes and Ladders](./problems/900-999/909/README.md)                                                                 |        | Medium |             |      |
| 910  | [Smallest Range II](./problems/900-999/910/README.md)                                                                  |        | Medium |             |      |
| 911  | [Online Election](./problems/900-999/911/README.md)                                                                    |        | Medium |             |      |
| 912  | [Sort an Array](./problems/900-999/912/README.md)                                                                      | :o:    | Medium | [arr]       |      |
| 913  | [Cat and Mouse](./problems/900-999/913/README.md)                                                                      |        | Hard   |             |      |
| 914  | [X of a Kind in a Deck of Cards](./problems/900-999/914/README.md)                                                     | :o:    | Easy   | [hsh]       | :+1: |
| 915  | [Partition Array into Disjoint Intervals](./problems/900-999/915/README.md)                                            |        | Medium |             |      |
| 916  | [Word Subsets](./problems/900-999/916/README.md)                                                                       |        | Medium |             |      |
| 917  | [Reverse Only Letters](./problems/900-999/917/README.md)                                                               | :o:    | Easy   | [tp]        |      |
| 918  | [Maximum Sum Circular Subarray](./problems/900-999/918/README.md)                                                      |        | Medium |             |      |
| 919  | [Complete Binary Tree Inserter](./problems/900-999/919/README.md)                                                      |        | Medium |             |      |
| 920  | [Number of Music Playlists](./problems/900-999/920/README.md)                                                          |        | Hard   |             |      |
| 921  | [Minimum Add to Make Parentheses Valid](./problems/900-999/921/README.md)                                              |        | Medium |             |      |
| 922  | [Sort Array By Parity II](./problems/900-999/922/README.md)                                                            | :o:    | Easy   | [tp]        |      |
| 923  | [3Sum With Multiplicity](./problems/900-999/923/README.md)                                                             |        | Medium |             |      |
| 924  | [Minimize Malware Spread](./problems/900-999/924/README.md)                                                            |        | Hard   |             |      |
| 925  | [Long Pressed Name](./problems/900-999/925/README.md)                                                                  | :o:    | Easy   | [tp]        |      |
| 926  | [Flip String to Monotone Increasing](./problems/900-999/926/README.md)                                                 |        | Medium |             |      |
| 927  | [Three Equal Parts](./problems/900-999/927/README.md)                                                                  |        | Hard   |             |      |
| 928  | [Minimize Malware Spread II](./problems/900-999/928/README.md)                                                         |        | Hard   |             |      |
| 929  | [Unique Email Addresses](./problems/900-999/929/README.md)                                                             | :o:    | Easy   | [str]       |      |
| 930  | [Binary Subarrays With Sum](./problems/900-999/930/README.md)                                                          |        | Medium |             |      |
| 931  | [Minimum Falling Path Sum](./problems/900-999/931/README.md)                                                           |        | Medium |             |      |
| 932  | [Beautiful Array](./problems/900-999/932/README.md)                                                                    |        | Medium |             |      |
| 933  | [Number of Recent Calls](./problems/900-999/933/README.md)                                                             | :o:    | Easy   | [des]       |      |
| 934  | [Shortest Bridge](./problems/900-999/934/README.md)                                                                    |        | Medium |             |      |
| 935  | [Knight Dialer](./problems/900-999/935/README.md)                                                                      |        | Medium |             |      |
| 936  | [Stamping The Sequence](./problems/900-999/936/README.md)                                                              |        | Hard   |             |      |
| 937  | [Reorder Log Files](./problems/900-999/937/README.md)                                                                  | :o:    | Easy   | [str]       | :-1: |
| 938  | [Range Sum of BST](./problems/900-999/938/README.md)                                                                   | :o:    | Medium | [tr]        |      |
| 939  | [Minimum Area Rectangle](./problems/900-999/939/README.md)                                                             |        | Medium |             |      |
| 940  | [Distinct Subsequences II](./problems/900-999/940/README.md)                                                           |        | Hard   |             |      |
| 941  | [Valid Mountain Array](./problems/900-999/941/README.md)                                                               | :o:    | Easy   | [tp]        |      |
| 942  | [DI String Match](./problems/900-999/942/README.md)                                                                    | :o:    | Easy   | [tp]        |      |
| 943  | [Find the Shortest Superstring](./problems/900-999/943/README.md)                                                      |        | Hard   |             |      |
| 944  | [Delete Columns to Make Sorted](./problems/900-999/944/README.md)                                                      | :o:    | Easy   | [str]       |      |
| 945  | [Minimum Increment to Make Array Unique](./problems/900-999/945/README.md)                                             |        | Medium |             |      |
| 946  | [Validate Stack Sequences](./problems/900-999/946/README.md)                                                           |        | Medium |             |      |
| 947  | [Most Stones Removed with Same Row or Column](./problems/900-999/947/README.md)                                        |        | Medium |             |      |
| 948  | [Bag of Tokens](./problems/900-999/948/README.md)                                                                      |        | Medium |             |      |
| 949  | [Largest Time for Given Digits](./problems/900-999/949/README.md)                                                      | :o:    | Easy   | [lgc]       | :-1: |
| 950  | [Reveal Cards In Increasing Order](./problems/900-999/950/README.md)                                                   |        | Medium |             |      |
| 951  | [Flip Equivalent Binary Trees](./problems/900-999/951/README.md)                                                       |        | Medium |             |      |
| 952  | [Largest Component Size by Common Factor](./problems/900-999/952/README.md)                                            |        | Hard   |             |      |
| 953  | [Verifying an Alien Dictionary](./problems/900-999/953/README.md)                                                      | :o:    | Easy   | [hsh]       |      |
| 954  | [Array of Doubled Pairs](./problems/900-999/954/README.md)                                                             |        | Medium |             |      |
| 955  | [Delete Columns to Make Sorted II](./problems/900-999/955/README.md)                                                   |        | Medium |             |      |
| 956  | [Tallest Billboard](./problems/900-999/956/README.md)                                                                  | :o:    | Hard   | [hsh]       |      |
| 957  | [Prison Cells After N Days](./problems/900-999/957/README.md)                                                          |        | Medium |             |      |
| 958  | [Check Completeness of a Binary Tree](./problems/900-999/958/README.md)                                                |        | Medium |             |      |
| 959  | [Regions Cut By Slashes](./problems/900-999/959/README.md)                                                             |        | Medium |             |      |
| 960  | [Delete Columns to Make Sorted III](./problems/900-999/960/README.md)                                                  |        | Hard   |             |      |
| 961  | [N-Repeated Element in Size 2N Array](./problems/900-999/961/README.md)                                                | :o:    | Easy   | [hsh]       |      |
| 962  | [Maximum Width Ramp](./problems/900-999/962/README.md)                                                                 |        | Medium |             |      |
| 963  | [Minimum Area Rectangle II](./problems/900-999/963/README.md)                                                          |        | Medium |             |      |
| 964  | [Least Operators to Express Number](./problems/900-999/964/README.md)                                                  |        | Hard   |             |      |
| 965  | [Univalued Binary Tree](./problems/900-999/965/README.md)                                                              | :o:    | Easy   | [tr]        |      |
| 966  | [Vowel Spellchecker](./problems/900-999/966/README.md)                                                                 |        | Medium |             |      |
| 967  | [Numbers With Same Consecutive Differences](./problems/900-999/967/README.md)                                          | :o:    | Medium | [bt]        |      |
| 968  | [Binary Tree Cameras](./problems/900-999/968/README.md)                                                                | :o:    | Hard   | [tr]        |      |
| 969  | [Pancake Sorting](./problems/900-999/969/README.md)                                                                    | :o:    | Medium | [arr]       |      |
| 970  | [Powerful Integers](./problems/900-999/970/README.md)                                                                  | :o:    | Easy   | [math]      |      |
| 971  | [Flip Binary Tree To Match Preorder Traversal](./problems/900-999/971/README.md)                                       | :o:    | Medium | [tr]        | :+1: |
| 972  | [Equal Rational Numbers](./problems/900-999/972/README.md)                                                             |        | Hard   |             |      |
| 973  | [K Closest Points to Origin](./problems/900-999/973/README.md)                                                         | :o:    | Easy   | [sort]      |      |
| 974  | [Subarray Sums Divisible by K](./problems/900-999/974/README.md)                                                       | :o:    | Medium | [arr]       | :+1: |
| 975  | [Odd Even Jump](./problems/900-999/975/README.md)                                                                      |        | Hard   |             |      |
| 976  | [Largest Perimeter Triangle](./problems/900-999/976/README.md)                                                         | :o:    | Easy   | [math]      |      |
| 977  | [Squares of a Sorted Array](./problems/900-999/977/README.md)                                                          | :o:    | Easy   | [tp]        |      |
| 978  | [Longest Turbulent Subarray](./problems/900-999/978/README.md)                                                         | :o:    | Medium | [lgc]       |      |
| 979  | [Distribute Coins in Binary Tree](./problems/900-999/979/README.md)                                                    | :o:    | Medium | [tr]        | :+1: |
| 980  | [Unique Paths III](./problems/900-999/980/README.md)                                                                   |        | Hard   |             |      |
| 981  | [Time Based Key-Value Store](./problems/900-999/981/README.md)                                                         | :o:    | Medium | [des]       |      |
| 982  | [Triples with Bitwise AND Equal To Zero](./problems/900-999/982/README.md)                                             |        | Hard   |             |      |
| 983  | [Minimum Cost For Tickets](./problems/900-999/983/README.md)                                                           | :o:    | Medium | [dp]        |      |
| 984  | [String Without AAA or BBB](./problems/900-999/984/README.md)                                                          | :o:    | Easy   | [grd]       | :+1: |
| 985  | [Sum of Even Numbers After Queries](./problems/900-999/985/README.md)                                                  | :o:    | Easy   | [math]      |      |
| 986  | [Interval List Intersections](./problems/900-999/986/README.md)                                                        | :o:    | Medium | [tp]        |      |
| 987  | [Vertical Order Traversal of a Binary Tree](./problems/900-999/987/README.md)                                          | :o:    | Medium | [tr]        |      |
| 988  | [Smallest String Starting From Leaf](./problems/900-999/988/README.md)                                                 | :o:    | Medium | [tr]        |      |
| 989  | [Add to Array-Form of Integer](./problems/900-999/989/README.md)                                                       | :o:    | Easy   | [math]      |      |
| 990  | [Satisfiability of Equality Equations](./problems/900-999/990/README.md)                                               | :o:    | Medium | [hsh]       |      |
| 991  | [Broken Calculator](./problems/900-999/991/README.md)                                                                  | :o:    | Medium | [math]      |      |
| 992  | [Subarrays with K Different Integers](./problems/900-999/992/README.md)                                                |        | Hard   |             |      |
| 993  | [Cousins in Binary Tree](./problems/900-999/993/README.md)                                                             | :o:    | Easy   | [tr]        |      |
| 994  | [Rotting Oranges](./problems/900-999/994/README.md)                                                                    | :o:    | Medium | [arr]       |      |
| 995  | [Minimum Number of K Consecutive Bit Flips](./problems/900-999/995/README.md)                                          |        | Hard   |             |      |
| 996  | [Number of Squareful Arrays](./problems/900-999/996/README.md)                                                         |        | Hard   |             |      |
| 997  | [Find the Town Judge](./problems/900-999/997/README.md)                                                                | :o:    | Easy   | [hsh]       |      |
| 998  | [Maximum Binary Tree II](./problems/900-999/998/README.md)                                                             |        | Medium |             |      |
| 999  | [Available Captures for Rook](./problems/900-999/999/README.md)                                                        | :o:    | Easy   | [arr]       |      |
| 1000 | [Minimum Cost to Merge Stones](./problems/1000-1099/1000/README.md)                                                    |        | Hard   |             |      |
| 1001 | [Grid Illumination](./problems/1000-1099/1001/README.md)                                                               |        | Hard   |             |      |
| 1002 | [Find Common Characters](./problems/1000-1099/1002/README.md)                                                          | :o:    | Easy   | [[hsh]]     |      |
| 1003 | [Check If Word Is Valid After Substitutions](./problems/1000-1099/1003/README.md)                                      |        | Medium |             |      |
| 1004 | [Max Consecutive Ones III](./problems/1000-1099/1004/README.md)                                                        |        | Medium |             |      |
| 1005 | [Maximize Sum Of Array After K Negations](./problems/1000-1099/1005/README.md) | :o: | Easy | [arr] |   |
| 1006 | [Clumsy Factorial](./problems/1000-1099/1006/README.md)                                                                |        | Medium |             |      |
| 1007 | [Minimum Domino Rotations For Equal Row](./problems/1000-1099/1007/README.md)                                          |        | Medium |             |      |
| 1008 | [Construct Binary Search Tree from Preorder Traversal](./problems/1000-1099/1008/README.md)                            |        | Medium |             |      |
| 1009 | [Complement of Base 10 Integer](./problems/1000-1099/1009/README.md) | :o: | Easy | [none] |   |
| 1010 | [Pairs of Songs With Total Durations Divisible by 60](./problems/1000-1099/1010/README.md)                             |        | Easy   |             |      |
| 1011 | [Capacity To Ship Packages Within D Days](./problems/1000-1099/1011/README.md)                                         |        | Medium |             |      |
| 1012 | [Numbers With Repeated Digits](./problems/1000-1099/1012/README.md)                                                    |        | Hard   |             |      |
| 1013 | [Partition Array Into Three Parts With Equal Sum](./problems/1000-1099/1013/README.md)                                 | :o:    | Easy   | [math]      |      |
| 1014 | [Best Sightseeing Pair](./problems/1000-1099/1014/README.md)                                                           |        | Medium |             |      |
| 1015 | [Smallest Integer Divisible by K](./problems/1000-1099/1015/README.md)                                                 |        | Medium |             |      |
| 1016 | [Binary String With Substrings Representing 1 To N](./problems/1000-1099/1016/README.md)                               |        | Medium |             |      |
| 1017 | [Convert to Base -2](./problems/1000-1099/1017/README.md)                                                              |        | Medium |             |      |
| 1018 | [Binary Prefix Divisible By 5](./problems/1000-1099/1018/README.md)                                                    | :o:    | Easy   | [math]      |      |
| 1019 | [Next Greater Node In Linked List](./problems/1000-1099/1019/README.md)                                                |        | Medium |             |      |
| 1020 | [Number of Enclaves](./problems/1000-1099/1020/README.md)                                                              |        | Medium |             |      |
| 1021 | [Remove Outermost Parentheses](./problems/1000-1099/1021/README.md) | :o: | Easy | [none] |   |
| 1022 | [Sum of Root To Leaf Binary Numbers](./problems/1000-1099/1022/README.md) | :o: | Easy | [tr] |   |
| 1023 | [Camelcase Matching](./problems/1000-1099/1023/README.md)                                                              |        | Medium |             |      |
| 1024 | [Video Stitching](./problems/1000-1099/1024/README.md)                                                                 |        | Medium |             |      |
| 1025 | [Divisor Game](./problems/1000-1099/1025/README.md)                                                                    | :o:    | Easy   | [math]      |      |
| 1026 | [Maximum Difference Between Node and Ancestor](./problems/1000-1099/1026/README.md)                                    |        | Medium |             |      |
| 1027 | [Longest Arithmetic Sequence](./problems/1000-1099/1027/README.md)                                                     |        | Medium |             |      |
| 1028 | [Recover a Tree From Preorder Traversal](./problems/1000-1099/1028/README.md)                                          | :o:    | Hard   | [tr]        |      |
| 1029 | [Two City Scheduling](./problems/1000-1099/1029/README.md)                                                             |        | Easy   |             |      |
| 1030 | [Matrix Cells in Distance Order](./problems/1000-1099/1030/README.md)                                                  |        | Easy   |             |      |
| 1031 | [Maximum Sum of Two Non-Overlapping Subarrays](./problems/1000-1099/1031/README.md)                                    |        | Medium |             |      |
| 1032 | [Stream of Characters](./problems/1000-1099/1032/README.md)                                                            |        | Hard   |             |      |
| 1033 | [Moving Stones Until Consecutive](./problems/1000-1099/1033/README.md)                                                 |        | Easy   |             |      |
| 1034 | [Coloring A Border](./problems/1000-1099/1034/README.md)                                                               |        | Medium |             |      |
| 1035 | [Uncrossed Lines](./problems/1000-1099/1035/README.md)                                                                 |        | Medium |             |      |
| 1036 | [Escape a Large Maze](./problems/1000-1099/1036/README.md)                                                             |        | Hard   |             |      |
| 1037 | [Valid Boomerang](./problems/1000-1099/1037/README.md)                                                                 |        | Easy   |             |      |
| 1038 | [Binary Search Tree to Greater Sum Tree](./problems/1000-1099/1038/README.md)                                          | :o:    | Medium | [[tr]]      |      |
| 1039 | [Minimum Score Triangulation of Polygon](./problems/1000-1099/1039/README.md)                                          |        | Medium |             |      |
| 1040 | [Moving Stones Until Consecutive II](./problems/1000-1099/1040/README.md)                                              |        | Medium |             |      |
| 1041 | [Robot Bounded In Circle](./problems/1000-1099/1041/README.md)                                                         |        | Medium |             |      |
| 1042 | [Flower Planting With No Adjacent](./problems/1000-1099/1042/README.md)                                                |        | Easy   |             |      |
| 1043 | [Partition Array for Maximum Sum](./problems/1000-1099/1043/README.md)                                                 |        | Medium |             |      |
| 1044 | [Longest Duplicate Substring](./problems/1000-1099/1044/README.md)                                                     |        | Hard   |             |      |
| 1045 | [Customers Who Bought All Products](./problems/1000-1099/1045/README.md)                                               | :lock: | Medium |             |      |
| 1046 | [Last Stone Weight](./problems/1000-1099/1046/README.md)                                                               | :o:    | Easy   | [hp]        |      |
| 1047 | [Remove All Adjacent Duplicates In String](./problems/1000-1099/1047/README.md)                                        |        | Easy   |             |      |
| 1048 | [Longest String Chain](./problems/1000-1099/1048/README.md)                                                            |        | Medium |             |      |
| 1049 | [Last Stone Weight II](./problems/1000-1099/1049/README.md)                                                            |        | Medium |             |      |
| 1050 | [Actors and Directors Who Cooperated At Least Three Times](./problems/1000-1099/1050/README.md)                        | :lock: | Easy   |             |      |
| 1051 | [Height Checker](./problems/1000-1099/1051/README.md) | :o: | Easy | [arr] |   |
| 1052 | [Grumpy Bookstore Owner](./problems/1000-1099/1052/README.md)                                                          |        | Medium |             |      |
| 1053 | [Previous Permutation With One Swap](./problems/1000-1099/1053/README.md)                                              |        | Medium |             |      |
| 1054 | [Distant Barcodes](./problems/1000-1099/1054/README.md)                                                                |        | Medium |             |      |
| 1055 | [Shortest Way to Form String](./problems/1000-1099/1055/README.md)                                                     | :lock: | Medium |             |      |
| 1056 | [Confusing Number](./problems/1000-1099/1056/README.md)                                                                | :lock: | Easy   |             |      |
| 1057 | [Campus Bikes](./problems/1000-1099/1057/README.md)                                                                    | :lock: | Medium |             |      |
| 1058 | [Minimize Rounding Error to Meet Target](./problems/1000-1099/1058/README.md)                                          | :lock: | Medium |             |      |
| 1059 | [All Paths from Source Lead to Destination](./problems/1000-1099/1059/README.md)                                       | :lock: | Medium |             |      |
| 1060 | [Missing Element in Sorted Array](./problems/1000-1099/1060/README.md)                                                 | :lock: | Medium |             |      |
| 1061 | [Lexicographically Smallest Equivalent String](./problems/1000-1099/1061/README.md)                                    | :lock: | Medium |             |      |
| 1062 | [Longest Repeating Substring](./problems/1000-1099/1062/README.md)                                                     | :lock: | Medium |             |      |
| 1063 | [Number of Valid Subarrays](./problems/1000-1099/1063/README.md)                                                       | :lock: | Hard   |             |      |
| 1064 | [Fixed Point](./problems/1000-1099/1064/README.md)                                                                     | :lock: | Easy   |             |      |
| 1065 | [Index Pairs of a String](./problems/1000-1099/1065/README.md)                                                         | :lock: | Easy   |             |      |
| 1066 | [Campus Bikes II](./problems/1000-1099/1066/README.md)                                                                 | :lock: | Medium |             |      |
| 1067 | [Digit Count in Range](./problems/1000-1099/1067/README.md)                                                            | :lock: | Hard   |             |      |
| 1068 | [Product Sales Analysis I](./problems/1000-1099/1068/README.md)                                                        | :lock: | Easy   |             |      |
| 1069 | [Product Sales Analysis II](./problems/1000-1099/1069/README.md)                                                       | :lock: | Easy   |             |      |
| 1070 | [Product Sales Analysis III](./problems/1000-1099/1070/README.md)                                                      | :lock: | Medium |             |      |
| 1071 | [Greatest Common Divisor of Strings](./problems/1000-1099/1071/README.md)                                              | :o:    | Easy   | [str]       |      |
| 1072 | [Flip Columns For Maximum Number of Equal Rows](./problems/1000-1099/1072/README.md)                                   |        | Medium |             |      |
| 1073 | [Adding Two Negabinary Numbers](./problems/1000-1099/1073/README.md)                                                   |        | Medium |             |      |
| 1074 | [Number of Submatrices That Sum to Target](./problems/1000-1099/1074/README.md)                                        |        | Hard   |             |      |
| 1075 | [Project Employees I](./problems/1000-1099/1075/README.md)                                                             | :lock: | Easy   |             |      |
| 1076 | [Project Employees II](./problems/1000-1099/1076/README.md)                                                            | :lock: | Easy   |             |      |
| 1077 | [Project Employees III](./problems/1000-1099/1077/README.md)                                                           | :lock: | Medium |             |      |
| 1078 | [Occurrences After Bigram](./problems/1000-1099/1078/README.md)                                                        |        | Easy   |             |      |
| 1079 | [Letter Tile Possibilities](./problems/1000-1099/1079/README.md)                                                       |        | Medium |             |      |
| 1080 | [Insufficient Nodes in Root to Leaf Paths](./problems/1000-1099/1080/README.md)                                        |        | Medium |             |      |
| 1081 | [Smallest Subsequence of Distinct Characters](./problems/1000-1099/1081/README.md)                                     |        | Medium |             |      |
| 1082 | [Sales Analysis I](./problems/1000-1099/1082/README.md)                                                                | :lock: | Easy   |             |      |
| 1083 | [Sales Analysis II](./problems/1000-1099/1083/README.md)                                                               | :lock: | Easy   |             |      |
| 1084 | [Sales Analysis III](./problems/1000-1099/1084/README.md)                                                              | :lock: | Easy   |             |      |
| 1085 | [Sum of Digits in the Minimum Number](./problems/1000-1099/1085/README.md)                                             | :lock: | Easy   |             |      |
| 1086 | [High Five](./problems/1000-1099/1086/README.md)                                                                       | :lock: | Easy   |             |      |
| 1087 | [Brace Expansion](./problems/1000-1099/1087/README.md)                                                                 | :lock: | Medium |             |      |
| 1088 | [Confusing Number II](./problems/1000-1099/1088/README.md)                                                             | :lock: | Hard   |             |      |
| 1089 | [Duplicate Zeros](./problems/1000-1099/1089/README.md)                                                                 |        | Easy   |             |      |
| 1090 | [Largest Values From Labels](./problems/1000-1099/1090/README.md)                                                      |        | Medium |             |      |
| 1091 | [Shortest Path in Binary Matrix](./problems/1000-1099/1091/README.md)                                                  |        | Medium |             |      |
| 1092 | [Shortest Common Supersequence](./problems/1000-1099/1092/README.md)                                                   |        | Hard   |             |      |
| 1093 | [Statistics from a Large Sample](./problems/1000-1099/1093/README.md)                                                  |        | Medium |             |      |
| 1094 | [Car Pooling](./problems/1000-1099/1094/README.md)                                                                     |        | Medium |             |      |
| 1095 | [Find in Mountain Array](./problems/1000-1099/1095/README.md)                                                          | :o:    | Hard   | [bs]        | :+1: |
| 1096 | [Brace Expansion II](./problems/1000-1099/1096/README.md)                                                              |        | Hard   |             |      |
| 1097 | [Game Play Analysis V](./problems/1000-1099/1097/README.md)                                                            | :lock: | Hard   |             |      |
| 1098 | [Unpopular Books](./problems/1000-1099/1098/README.md)                                                                 | :lock: | Medium |             |      |
| 1099 | [Two Sum Less Than K](./problems/1000-1099/1099/README.md)                                                             | :lock: | Easy   |             |      |
| 1100 | [Find K-Length Substrings With No Repeated Characters](./problems/1100-1199/1100/README.md)                            | :lock: | Medium |             |      |
| 1101 | [The Earliest Moment When Everyone Become Friends](./problems/1100-1199/1101/README.md)                                | :lock: | Medium |             |      |
| 1102 | [Path With Maximum Minimum Value](./problems/1100-1199/1102/README.md)                                                 | :lock: | Medium |             |      |
| 1103 | [Distribute Candies to People](./problems/1100-1199/1103/README.md)                                                    | :o:    | Easy   | [math]      |      |
| 1104 | [Path In Zigzag Labelled Binary Tree](./problems/1100-1199/1104/README.md)                                             |        | Medium |             |      |
| 1105 | [Filling Bookcase Shelves](./problems/1100-1199/1105/README.md)                                                        |        | Medium |             |      |
| 1106 | [Parsing A Boolean Expression](./problems/1100-1199/1106/README.md)                                                    |        | Hard   |             |      |
| 1107 | [New Users Daily Count](./problems/1100-1199/1107/README.md)                                                           | :lock: | Medium |             |      |
| 1108 | [Defanging an IP Address](./problems/1100-1199/1108/README.md)                                                         | :o:    | Easy   | [str]       |      |
| 1109 | [Corporate Flight Bookings](./problems/1100-1199/1109/README.md)                                                       |        | Medium |             |      |
| 1110 | [Delete Nodes And Return Forest](./problems/1100-1199/1110/README.md)                                                  |        | Medium |             |      |
| 1111 | [Maximum Nesting Depth of Two Valid Parentheses Strings](./problems/1100-1199/1111/README.md)                          |        | Medium |             |      |
| 1112 | [Highest Grade For Each Student](./problems/1100-1199/1112/README.md)                                                  | :lock: | Medium |             |      |
| 1113 | [Reported Posts](./problems/1100-1199/1113/README.md)                                                                  | :lock: | Easy   |             |      |
| 1114 | [Print in Order](./problems/1100-1199/1114/README.md)                                                                  | :soon: | Easy   |             |      |
| 1115 | [Print FooBar Alternately](./problems/1100-1199/1115/README.md)                                                        | :soon: | Easy   |             |      |
| 1116 | [Print Zero Even Odd](./problems/1100-1199/1116/README.md)                                                             | :soon: | Medium |             |      |
| 1117 | [Building H2O](./problems/1100-1199/1117/README.md)                                                                    | :soon: | Medium |             |      |
| 1118 | [Number of Days in a Month](./problems/1100-1199/1118/README.md)                                                       | :lock: | Easy   |             |      |
| 1119 | [Remove Vowels from a String](./problems/1100-1199/1119/README.md)                                                     | :lock: | Easy   |             |      |
| 1120 | [Maximum Average Subtree](./problems/1100-1199/1120/README.md)                                                         | :lock: | Medium |             |      |
| 1121 | [Divide Array Into Increasing Sequences](./problems/1100-1199/1121/README.md)                                          | :lock: | Hard   |             |      |
| 1122 | [Relative Sort Array](./problems/1100-1199/1122/README.md)                                                             | :o:    | Easy   | [arr]       |      |
| 1123 | [Lowest Common Ancestor of Deepest Leaves](./problems/1100-1199/1123/README.md)                                        |        | Medium |             |      |
| 1124 | [Longest Well-Performing Interval](./problems/1100-1199/1124/README.md)                                                |        | Medium |             |      |
| 1125 | [Smallest Sufficient Team](./problems/1100-1199/1125/README.md)                                                        |        | Hard   |             |      |
| 1126 | [Active Businesses](./problems/1100-1199/1126/README.md)                                                               | :lock: | Medium |             |      |
| 1127 | [User Purchase Platform](./problems/1100-1199/1127/README.md)                                                          | :lock: | Hard   |             |      |
| 1128 | [Number of Equivalent Domino Pairs](./problems/1100-1199/1128/README.md)                                               | :o:    | Easy   | [arr]       |      |
| 1129 | [Shortest Path with Alternating Colors](./problems/1100-1199/1129/README.md)                                           |        | Medium |             |      |
| 1130 | [Minimum Cost Tree From Leaf Values](./problems/1100-1199/1130/README.md)                                              |        | Medium |             |      |
| 1131 | [Maximum of Absolute Value Expression](./problems/1100-1199/1131/README.md)                                            |        | Medium |             |      |
| 1132 | [Reported Posts II](./problems/1100-1199/1132/README.md)                                                               | :lock: | Medium |             |      |
| 1133 | [Largest Unique Number](./problems/1100-1199/1133/README.md)                                                           | :lock: | Easy   |             |      |
| 1134 | [Armstrong Number](./problems/1100-1199/1134/README.md)                                                                | :lock: | Easy   |             |      |
| 1135 | [Connecting Cities With Minimum Cost](./problems/1100-1199/1135/README.md)                                             | :lock: | Medium |             |      |
| 1136 | [Parallel Courses](./problems/1100-1199/1136/README.md)                                                                | :lock: | Hard   |             |      |
| 1137 | [N-th Tribonacci Number](./problems/1100-1199/1137/README.md)                                                          | :o:    | Easy   | [math]      |      |
| 1138 | [Alphabet Board Path](./problems/1100-1199/1138/README.md)                                                             |        | Medium |             |      |
| 1139 | [Largest 1-Bordered Square](./problems/1100-1199/1139/README.md)                                                       |        | Medium |             |      |
| 1140 | [Stone Game II](./problems/1100-1199/1140/README.md)                                                                   |        | Medium |             |      |
| 1141 | [User Activity for the Past 30 Days I](./problems/1100-1199/1141/README.md)                                            | :lock: | Easy   |             |      |
| 1142 | [User Activity for the Past 30 Days II](./problems/1100-1199/1142/README.md)                                           | :lock: | Easy   |             |      |
| 1143 | [Longest Common Subsequence](./problems/1100-1199/1143/README.md)                                                      |        | Medium |             |      |
| 1144 | [Decrease Elements To Make Array Zigzag](./problems/1100-1199/1144/README.md)                                          |        | Medium |             |      |
| 1145 | [Binary Tree Coloring Game](./problems/1100-1199/1145/README.md)                                                       |        | Medium |             |      |
| 1146 | [Snapshot Array](./problems/1100-1199/1146/README.md)                                                                  |        | Medium |             |      |
| 1147 | [Longest Chunked Palindrome Decomposition](./problems/1100-1199/1147/README.md)                                        |        | Hard   |             |      |
| 1148 | [Article Views I](./problems/1100-1199/1148/README.md)                                                                 | :lock: | Easy   |             |      |
| 1149 | [Article Views II](./problems/1100-1199/1149/README.md)                                                                | :lock: | Medium |             |      |
| 1150 | [Check If a Number Is Majority Element in a Sorted Array](./problems/1100-1199/1150/README.md)                         | :lock: | Easy   |             |      |
| 1151 | [Minimum Swaps to Group All 1's Together](./problems/1100-1199/1151/README.md)                                         | :lock: | Medium |             |      |
| 1152 | [Analyze User Website Visit Pattern](./problems/1100-1199/1152/README.md)                                              | :lock: | Medium |             |      |
| 1153 | [String Transforms Into Another String](./problems/1100-1199/1153/README.md)                                           | :lock: | Hard   |             |      |
| 1154 | [Day of the Year](./problems/1100-1199/1154/README.md)                                                                 |        | Easy   |             |      |
| 1155 | [Number of Dice Rolls With Target Sum](./problems/1100-1199/1155/README.md)                                            |        | Medium |             |      |
| 1156 | [Swap For Longest Repeated Character Substring](./problems/1100-1199/1156/README.md)                                   |        | Medium |             |      |
| 1157 | [Online Majority Element In Subarray](./problems/1100-1199/1157/README.md)                                             |        | Hard   |             |      |
| 1158 | [Market Analysis I](./problems/1100-1199/1158/README.md)                                                               | :lock: | Medium |             |      |
| 1159 | [Market Analysis II](./problems/1100-1199/1159/README.md)                                                              | :lock: | Hard   |             |      |
| 1160 | [Find Words That Can Be Formed by Characters](./problems/1100-1199/1160/README.md)                                     | :o:    | Easy   | [hsh]       | :+1: |
| 1161 | [Maximum Level Sum of a Binary Tree](./problems/1100-1199/1161/README.md)                                              |        | Medium |             |      |
| 1162 | [As Far from Land as Possible](./problems/1100-1199/1162/README.md)                                                    |        | Medium |             |      |
| 1163 | [Last Substring in Lexicographical Order](./problems/1100-1199/1163/README.md)                                         |        | Hard   |             |      |
| 1164 | [Product Price at a Given Date](./problems/1100-1199/1164/README.md)                                                   | :lock: | Medium |             |      |
| 1165 | [Single-Row Keyboard](./problems/1100-1199/1165/README.md)                                                             | :lock: | Easy   |             |      |
| 1166 | [Design File System](./problems/1100-1199/1166/README.md)                                                              | :lock: | Medium |             |      |
| 1167 | [Minimum Cost to Connect Sticks](./problems/1100-1199/1167/README.md)                                                  | :lock: | Medium |             |      |
| 1168 | [Optimize Water Distribution in a Village](./problems/1100-1199/1168/README.md)                                        | :lock: | Hard   |             |      |
| 1169 | [Invalid Transactions](./problems/1100-1199/1169/README.md)                                                            |        | Medium |             |      |
| 1170 | [Compare Strings by Frequency of the Smallest Character](./problems/1100-1199/1170/README.md)                          |        | Easy   |             |      |
| 1171 | [Remove Zero Sum Consecutive Nodes from Linked List](./problems/1100-1199/1171/README.md)                              |        | Medium |             |      |
| 1172 | [Dinner Plate Stacks](./problems/1100-1199/1172/README.md)                                                             |        | Hard   |             |      |
| 1173 | [Immediate Food Delivery I](./problems/1100-1199/1173/README.md)                                                       | :lock: | Easy   |             |      |
| 1174 | [Immediate Food Delivery II](./problems/1100-1199/1174/README.md)                                                      | :lock: | Medium |             |      |
| 1175 | [Prime Arrangements](./problems/1100-1199/1175/README.md)                                                              |        | Easy   |             |      |
| 1176 | [Diet Plan Performance](./problems/1100-1199/1176/README.md)                                                           | :lock: | Easy   |             |      |
| 1177 | [Can Make Palindrome from Substring](./problems/1100-1199/1177/README.md)                                              |        | Medium |             |      |
| 1178 | [Number of Valid Words for Each Puzzle](./problems/1100-1199/1178/README.md)                                           |        | Hard   |             |      |
| 1179 | [Reformat Department Table](./problems/1100-1199/1179/README.md)                                                       | :soon: | Easy   |             |      |
| 1180 | [Count Substrings with Only One Distinct Letter](./problems/1100-1199/1180/README.md)                                  | :lock: | Easy   |             |      |
| 1181 | [Before and After Puzzle](./problems/1100-1199/1181/README.md)                                                         | :lock: | Medium |             |      |
| 1182 | [Shortest Distance to Target Color](./problems/1100-1199/1182/README.md)                                               | :lock: | Medium |             |      |
| 1183 | [Maximum Number of Ones](./problems/1100-1199/1183/README.md)                                                          | :lock: | Hard   |             |      |
| 1184 | [Distance Between Bus Stops](./problems/1100-1199/1184/README.md)                                                      |        | Easy   |             |      |
| 1185 | [Day of the Week](./problems/1100-1199/1185/README.md)                                                                 |        | Easy   |             |      |
| 1186 | [Maximum Subarray Sum with One Deletion](./problems/1100-1199/1186/README.md)                                          |        | Medium |             |      |
| 1187 | [Make Array Strictly Increasing](./problems/1100-1199/1187/README.md)                                                  |        | Hard   |             |      |
| 1189 | [Maximum Number of Balloons](./problems/1100-1199/1189/README.md)                                                      |        | Easy   |             |      |
| 1190 | [Reverse Substrings Between Each Pair of Parentheses](./problems/1100-1199/1190/README.md)                             |        | Medium |             |      |
| 1191 | [K-Concatenation Maximum Sum](./problems/1100-1199/1191/README.md)                                                     |        | Medium |             |      |
| 1192 | [Critical Connections in a Network](./problems/1100-1199/1192/README.md)                                               |        | Hard   |             |      |
| 1193 | [Monthly Transactions I](./problems/1100-1199/1193/README.md)                                                          | :lock: | Medium |             |      |
| 1194 | [Tournament Winners](./problems/1100-1199/1194/README.md)                                                              | :lock: | Hard   |             |      |
| 1196 | [How Many Apples Can You Put into the Basket](./problems/1100-1199/1196/README.md)                                     | :lock: | Easy   |             |      |
| 1197 | [Minimum Knight Moves](./problems/1100-1199/1197/README.md)                                                            | :lock: | Medium |             |      |
| 1198 | [Find Smallest Common Element in All Rows](./problems/1100-1199/1198/README.md)                                        | :lock: | Medium |             |      |
| 1199 | [Minimum Time to Build Blocks](./problems/1100-1199/1199/README.md)                                                    | :lock: | Hard   |             |      |
| 1200 | [Minimum Absolute Difference](./problems/1200-1299/1200/README.md)                                                     |        | Easy   |             |      |
| 1201 | [Ugly Number III](./problems/1200-1299/1201/README.md)                                                                 |        | Medium |             |      |
| 1202 | [Smallest String With Swaps](./problems/1200-1299/1202/README.md)                                                      |        | Medium |             |      |
| 1203 | [Sort Items by Groups Respecting Dependencies](./problems/1200-1299/1203/README.md)                                    |        | Hard   |             |      |
| 1204 | [Last Person to Fit in the Elevator](./problems/1200-1299/1204/README.md)                                              | :lock: | Medium |             |      |
| 1205 | [Monthly Transactions II](./problems/1200-1299/1205/README.md)                                                         | :lock: | Medium |             |      |
| 1206 | [Design Skiplist](./problems/1200-1299/1206/README.md)                                                                 |        | Hard   |             |      |
| 1207 | [Unique Number of Occurrences](./problems/1200-1299/1207/README.md)                                                    | :o:    | Easy   | [hsh]       |      |
| 1208 | [Get Equal Substrings Within Budget](./problems/1200-1299/1208/README.md)                                              | :o:    | Medium | [arr],[sd]  |      |
| 1209 | [Remove All Adjacent Duplicates in String II](./problems/1200-1299/1209/README.md)                                     |        | Medium |             |      |
| 1210 | [Minimum Moves to Reach Target with Rotations](./problems/1200-1299/1210/README.md)                                    |        | Hard   |             |      |
| 1211 | [Queries Quality and Percentage](./problems/1200-1299/1211/README.md)                                                  | :lock: | Easy   |             |      |
| 1212 | [Team Scores in Football Tournament](./problems/1200-1299/1212/README.md)                                              | :lock: | Medium |             |      |
| 1213 | [Intersection of Three Sorted Arrays](./problems/1200-1299/1213/README.md)                                             | :lock: | Easy   |             |      |
| 1214 | [Two Sum BSTs](./problems/1200-1299/1214/README.md)                                                                    | :lock: | Medium |             |      |
| 1215 | [Stepping Numbers](./problems/1200-1299/1215/README.md)                                                                | :lock: | Medium |             |      |
| 1216 | [Valid Palindrome III](./problems/1200-1299/1216/README.md)                                                            | :lock: | Hard   |             |      |
| 1217 | [Play with Chips](./problems/1200-1299/1217/README.md)                                                                 |        | Easy   |             |      |
| 1218 | [Longest Arithmetic Subsequence of Given Difference](./problems/1200-1299/1218/README.md)                              |        | Medium |             |      |
| 1219 | [Path with Maximum Gold](./problems/1200-1299/1219/README.md)                                                          |        | Medium |             |      |
| 1220 | [Count Vowels Permutation](./problems/1200-1299/1220/README.md)                                                        |        | Hard   |             |      |
| 1221 | [Split a String in Balanced Strings](./problems/1200-1299/1221/README.md)                                              |        | Easy   |             |      |
| 1222 | [Queens That Can Attack the King](./problems/1200-1299/1222/README.md)                                                 |        | Medium |             |      |
| 1223 | [Dice Roll Simulation](./problems/1200-1299/1223/README.md)                                                            |        | Medium |             |      |
| 1224 | [Maximum Equal Frequency](./problems/1200-1299/1224/README.md)                                                         |        | Hard   |             |      |
| 1225 | [Report Contiguous Dates](./problems/1200-1299/1225/README.md)                                                         | :lock: | Hard   |             |      |
| 1226 | [1226](./problems/1200-1299/1226/README.md)                                                                            |        | Easy   |             |      |
| 1227 | [Airplane Seat Assignment Probability](./problems/1200-1299/1227/README.md)                                            |        | Medium |             |      |
| 1228 | [Missing Number In Arithmetic Progression](./problems/1200-1299/1228/README.md)                                        | :lock: | Easy   |             |      |
| 1229 | [Meeting Scheduler](./problems/1200-1299/1229/README.md)                                                               | :lock: | Medium |             |      |
| 1230 | [Toss Strange Coins](./problems/1200-1299/1230/README.md)                                                              | :lock: | Medium |             |      |
| 1231 | [Divide Chocolate](./problems/1200-1299/1231/README.md)                                                                | :lock: | Hard   |             |      |
| 1232 | [Check If It Is a Straight Line](./problems/1200-1299/1232/README.md)                                                  | :o:    | Easy   | [math]      |      |
| 1233 | [Remove Sub-Folders from the Filesystem](./problems/1200-1299/1233/README.md)                                          |        | Medium |             |      |
| 1234 | [Replace the Substring for Balanced String](./problems/1200-1299/1234/README.md)                                       |        | Medium |             |      |
| 1235 | [Maximum Profit in Job Scheduling](./problems/1200-1299/1235/README.md)                                                |        | Hard   |             |      |
| 1236 | [Web Crawler](./problems/1200-1299/1236/README.md)                                                                     | :lock: | Medium |             |      |
| 1237 | [Find Positive Integer Solution for a Given Equation](./problems/1200-1299/1237/README.md)                             |        | Easy   |             |      |
| 1238 | [Circular Permutation in Binary Representation](./problems/1200-1299/1238/README.md)                                   |        | Medium |             |      |
| 1239 | [Maximum Length of a Concatenated String with Unique Characters](./problems/1200-1299/1239/README.md)                  |        | Medium |             |      |
| 1240 | [Tiling a Rectangle with the Fewest Squares](./problems/1200-1299/1240/README.md)                                      |        | Hard   |             |      |
| 1241 | [Number of Comments per Post](./problems/1200-1299/1241/README.md)                                                     | :lock: | Easy   |             |      |
| 1242 | [1242](./problems/1200-1299/1242/README.md)                                                                            |        | Easy   |             |      |
| 1243 | [Array Transformation](./problems/1200-1299/1243/README.md)                                                            | :lock: | Easy   |             |      |
| 1244 | [Design A Leaderboard](./problems/1200-1299/1244/README.md)                                                            | :lock: | Medium |             |      |
| 1245 | [Tree Diameter](./problems/1200-1299/1245/README.md)                                                                   | :lock: | Medium |             |      |
| 1246 | [Palindrome Removal](./problems/1200-1299/1246/README.md)                                                              | :lock: | Hard   |             |      |
| 1247 | [Minimum Swaps to Make Strings Equal](./problems/1200-1299/1247/README.md)                                             |        | Medium |             |      |
| 1248 | [Count Number of Nice Subarrays](./problems/1200-1299/1248/README.md)                                                  |        | Medium |             |      |
| 1249 | [Minimum Remove to Make Valid Parentheses](./problems/1200-1299/1249/README.md)                                        |        | Medium |             |      |
| 1250 | [Check If It Is a Good Array](./problems/1200-1299/1250/README.md)                                                     |        | Hard   |             |      |
| 1251 | [Average Selling Price](./problems/1200-1299/1251/README.md)                                                           | :lock: | Easy   |             |      |
| 1252 | [Cells with Odd Values in a Matrix](./problems/1200-1299/1252/README.md)                                               |        | Easy   |             |      |
| 1253 | [Reconstruct a 2-Row Binary Matrix](./problems/1200-1299/1253/README.md)                                               |        | Medium |             |      |
| 1254 | [Number of Closed Islands](./problems/1200-1299/1254/README.md)                                                        |        | Medium |             |      |
| 1255 | [Maximum Score Words Formed by Letters](./problems/1200-1299/1255/README.md)                                           |        | Hard   |             |      |
| 1256 | [Encode Number](./problems/1200-1299/1256/README.md)                                                                   | :lock: | Medium |             |      |
| 1257 | [Smallest Common Region](./problems/1200-1299/1257/README.md)                                                          | :lock: | Medium |             |      |
| 1258 | [Synonymous Sentences](./problems/1200-1299/1258/README.md)                                                            | :lock: | Medium |             |      |
| 1259 | [Handshakes That Don't Cross](./problems/1200-1299/1259/README.md)                                                     | :lock: | Hard   |             |      |
| 1260 | [Shift 2D Grid](./problems/1200-1299/1260/README.md)                                                                   |        | Easy   |             |      |
| 1261 | [Find Elements in a Contaminated Binary Tree](./problems/1200-1299/1261/README.md)                                     |        | Medium |             |      |
| 1262 | [Greatest Sum Divisible by Three](./problems/1200-1299/1262/README.md)                                                 |        | Medium |             |      |
| 1263 | [Minimum Moves to Move a Box to Their Target Location](./problems/1200-1299/1263/README.md)                            |        | Hard   |             |      |
| 1264 | [Page Recommendations](./problems/1200-1299/1264/README.md)                                                            | :lock: | Medium |             |      |
| 1265 | [Print Immutable Linked List in Reverse](./problems/1200-1299/1265/README.md)                                          | :lock: | Medium |             |      |
| 1266 | [Minimum Time Visiting All Points](./problems/1200-1299/1266/README.md)                                                |        | Easy   |             |      |
| 1267 | [Count Servers that Communicate](./problems/1200-1299/1267/README.md)                                                  |        | Medium |             |      |
| 1268 | [Search Suggestions System](./problems/1200-1299/1268/README.md)                                                       |        | Medium |             |      |
| 1269 | [Number of Ways to Stay in the Same Place After Some Steps](./problems/1200-1299/1269/README.md)                       |        | Hard   |             |      |
| 1270 | [All People Report to the Given Manager](./problems/1200-1299/1270/README.md)                                          | :lock: | Medium |             |      |
| 1271 | [Hexspeak](./problems/1200-1299/1271/README.md)                                                                        | :lock: | Easy   |             |      |
| 1272 | [Remove Interval](./problems/1200-1299/1272/README.md)                                                                 | :lock: | Medium |             |      |
| 1273 | [Delete Tree Nodes](./problems/1200-1299/1273/README.md)                                                               | :lock: | Medium |             |      |
| 1274 | [Number of Ships in a Rectangle](./problems/1200-1299/1274/README.md)                                                  | :lock: | Hard   |             |      |
| 1275 | [Find Winner on a Tic Tac Toe Game](./problems/1200-1299/1275/README.md)                                               |        | Easy   |             |      |
| 1276 | [Number of Burgers with No Waste of Ingredients](./problems/1200-1299/1276/README.md)                                  |        | Medium |             |      |
| 1277 | [Count Square Submatrices with All Ones](./problems/1200-1299/1277/README.md)                                          |        | Medium |             |      |
| 1278 | [Palindrome Partitioning III](./problems/1200-1299/1278/README.md)                                                     |        | Hard   |             |      |
| 1279 | [1279](./problems/1200-1299/1279/README.md)                                                                            |        | Easy   |             |      |
| 1280 | [Students and Examinations](./problems/1200-1299/1280/README.md)                                                       | :lock: | Easy   |             |      |
| 1281 | [Subtract the Product and Sum of Digits of an Integer](./problems/1200-1299/1281/README.md)                            |        | Easy   |             |      |
| 1282 | [Group the People Given the Group Size They Belong To](./problems/1200-1299/1282/README.md)                            |        | Medium |             |      |
| 1283 | [Find the Smallest Divisor Given a Threshold](./problems/1200-1299/1283/README.md)                                     |        | Medium |             |      |
| 1284 | [Minimum Number of Flips to Convert Binary Matrix to Zero Matrix](./problems/1200-1299/1284/README.md)                 |        | Hard   |             |      |
| 1285 | [Find the Start and End Number of Continuous Ranges](./problems/1200-1299/1285/README.md)                              | :lock: | Medium |             |      |
| 1286 | [Iterator for Combination](./problems/1200-1299/1286/README.md)                                                        |        | Medium |             |      |
| 1287 | [Element Appearing More Than 25% In Sorted Array](./problems/1200-1299/1287/README.md)                                 |        | Easy   |             |      |
| 1288 | [Remove Covered Intervals](./problems/1200-1299/1288/README.md)                                                        |        | Medium |             |      |
| 1289 | [Minimum Falling Path Sum II](./problems/1200-1299/1289/README.md)                                                     |        | Hard   |             |      |
| 1290 | [Convert Binary Number in a Linked List to Integer](./problems/1200-1299/1290/README.md)                               |        | Easy   |             |      |
| 1291 | [Sequential Digits](./problems/1200-1299/1291/README.md)                                                               |        | Medium |             |      |
| 1292 | [Maximum Side Length of a Square with Sum Less than or Equal to Threshold](./problems/1200-1299/1292/README.md)        |        | Medium |             |      |
| 1293 | [Shortest Path in a Grid with Obstacles Elimination](./problems/1200-1299/1293/README.md)                              |        | Hard   |             |      |
| 1294 | [Weather Type in Each Country](./problems/1200-1299/1294/README.md)                                                    | :lock: | Easy   |             |      |
| 1295 | [Find Numbers with Even Number of Digits](./problems/1200-1299/1295/README.md)                                         |        | Easy   |             |      |
| 1296 | [Divide Array in Sets of K Consecutive Numbers](./problems/1200-1299/1296/README.md)                                   |        | Medium |             |      |
| 1297 | [Maximum Number of Occurrences of a Substring](./problems/1200-1299/1297/README.md)                                    |        | Medium |             |      |
| 1298 | [Maximum Candies You Can Get from Boxes](./problems/1200-1299/1298/README.md)                                          |        | Hard   |             |      |
| 1299 | [Replace Elements with Greatest Element on Right Side](./problems/1200-1299/1299/README.md)                            |        | Easy   |             |      |
| 1300 | [Sum of Mutated Array Closest to Target](./problems/1300-1399/1300/README.md)                                          |        | Medium |             |      |
| 1301 | [Number of Paths with Max Score](./problems/1300-1399/1301/README.md)                                                  |        | Hard   |             |      |
| 1302 | [Deepest Leaves Sum](./problems/1300-1399/1302/README.md)                                                              |        | Medium |             |      |
| 1303 | [Find the Team Size](./problems/1300-1399/1303/README.md)                                                              | :lock: | Easy   |             |      |
| 1304 | [Find N Unique Integers Sum up to Zero](./problems/1300-1399/1304/README.md)                                           |        | Easy   |             |      |
| 1305 | [All Elements in Two Binary Search Trees](./problems/1300-1399/1305/README.md)                                         |        | Medium |             |      |
| 1306 | [Jump Game III](./problems/1300-1399/1306/README.md)                                                                   |        | Medium |             |      |
| 1307 | [Verbal Arithmetic Puzzle](./problems/1300-1399/1307/README.md)                                                        |        | Hard   |             |      |
| 1308 | [Running Total for Different Genders](./problems/1300-1399/1308/README.md)                                             | :lock: | Medium |             |      |
| 1309 | [Decrypt String from Alphabet to Integer Mapping](./problems/1300-1399/1309/README.md)                                 |        | Easy   |             |      |
| 1310 | [XOR Queries of a Subarray](./problems/1300-1399/1310/README.md)                                                       |        | Medium |             |      |
| 1311 | [Get Watched Videos by Your Friends](./problems/1300-1399/1311/README.md)                                              |        | Medium |             |      |
| 1312 | [Minimum Insertion Steps to Make a String Palindrome](./problems/1300-1399/1312/README.md)                             |        | Hard   |             |      |
| 1313 | [Decompress Run-Length Encoded List](./problems/1300-1399/1313/README.md)                                              | :o:    | Easy   | [arr]       |      |
| 1314 | [Matrix Block Sum](./problems/1300-1399/1314/README.md)                                                                |        | Medium |             |      |
| 1315 | [Sum of Nodes with Even-Valued Grandparent](./problems/1300-1399/1315/README.md)                                       |        | Medium |             |      |
| 1316 | [Distinct Echo Substrings](./problems/1300-1399/1316/README.md)                                                        |        | Hard   |             |      |
| 1317 | [Convert Integer to the Sum of Two No-Zero Integers](./problems/1300-1399/1317/README.md)                              |        | Easy   |             |      |
| 1318 | [Minimum Flips to Make a OR b Equal to c](./problems/1300-1399/1318/README.md)                                         |        | Medium |             |      |
| 1319 | [Number of Operations to Make Network Connected](./problems/1300-1399/1319/README.md)                                  |        | Medium |             |      |
| 1320 | [Minimum Distance to Type a Word Using Two Fingers](./problems/1300-1399/1320/README.md)                               |        | Hard   |             |      |
| 1321 | [Restaurant Growth](./problems/1300-1399/1321/README.md)                                                               | :lock: | Medium |             |      |
| 1322 | [Ads Performance](./problems/1300-1399/1322/README.md)                                                                 | :lock: | Easy   |             |      |
| 1323 | [Maximum 69 Number](./problems/1300-1399/1323/README.md)                                                               |        | Easy   |             |      |
| 1324 | [Print Words Vertically](./problems/1300-1399/1324/README.md)                                                          |        | Medium |             |      |
| 1325 | [Delete Leaves With a Given Value](./problems/1300-1399/1325/README.md)                                                |        | Medium |             |      |
| 1326 | [Minimum Number of Taps to Open to Water a Garden](./problems/1300-1399/1326/README.md)                                |        | Hard   |             |      |
| 1327 | [List the Products Ordered in a Period](./problems/1300-1399/1327/README.md)                                           | :lock: | Easy   |             |      |
| 1328 | [Break a Palindrome](./problems/1300-1399/1328/README.md)                                                              |        | Medium |             |      |
| 1329 | [Sort the Matrix Diagonally](./problems/1300-1399/1329/README.md)                                                      |        | Medium |             |      |
| 1330 | [Reverse Subarray To Maximize Array Value](./problems/1300-1399/1330/README.md)                                        |        | Hard   |             |      |
| 1331 | [Rank Transform of an Array](./problems/1300-1399/1331/README.md)                                                      |        | Easy   |             |      |
| 1332 | [Remove Palindromic Subsequences](./problems/1300-1399/1332/README.md)                                                 |        | Easy   |             |      |
| 1333 | [Filter Restaurants by Vegan-Friendly, Price and Distance](./problems/1300-1399/1333/README.md)                        |        | Medium |             |      |
| 1334 | [Find the City With the Smallest Number of Neighbors at a Threshold Distance](./problems/1300-1399/1334/README.md)     |        | Medium |             |      |
| 1335 | [Minimum Difficulty of a Job Schedule](./problems/1300-1399/1335/README.md)                                            |        | Hard   |             |      |
| 1336 | [Number of Transactions per Visit](./problems/1300-1399/1336/README.md)                                                | :lock: | Hard   |             |      |
| 1337 | [The K Weakest Rows in a Matrix](./problems/1300-1399/1337/README.md)                                                  |        | Easy   |             |      |
| 1338 | [Reduce Array Size to The Half](./problems/1300-1399/1338/README.md)                                                   |        | Medium |             |      |
| 1339 | [Maximum Product of Splitted Binary Tree](./problems/1300-1399/1339/README.md)                                         |        | Medium |             |      |
| 1340 | [Jump Game V](./problems/1300-1399/1340/README.md)                                                                     |        | Hard   |             |      |
| 1341 | [Movie Rating](./problems/1300-1399/1341/README.md)                                                                    | :lock: | Medium |             |      |
| 1342 | [Number of Steps to Reduce a Number to Zero](./problems/1300-1399/1342/README.md)                                      |        | Easy   |             |      |
| 1343 | [Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold](./problems/1300-1399/1343/README.md)   |        | Medium |             |      |
| 1344 | [Angle Between Hands of a Clock](./problems/1300-1399/1344/README.md)                                                  |        | Medium |             |      |
| 1345 | [Jump Game IV](./problems/1300-1399/1345/README.md)                                                                    |        | Hard   |             |      |
| 1346 | [Check If N and Its Double Exist](./problems/1300-1399/1346/README.md)                                                 |        | Easy   |             |      |
| 1347 | [Minimum Number of Steps to Make Two Strings Anagram](./problems/1300-1399/1347/README.md)                             |        | Medium |             |      |
| 1348 | [Tweet Counts Per Frequency](./problems/1300-1399/1348/README.md)                                                      |        | Medium |             |      |
| 1349 | [Maximum Students Taking Exam](./problems/1300-1399/1349/README.md)                                                    |        | Hard   |             |      |
| 1350 | [Students With Invalid Departments](./problems/1300-1399/1350/README.md)                                               | :lock: | Easy   |             |      |
| 1351 | [Count Negative Numbers in a Sorted Matrix](./problems/1300-1399/1351/README.md)                                       |        | Easy   |             |      |
| 1352 | [Product of the Last K Numbers](./problems/1300-1399/1352/README.md)                                                   |        | Medium |             |      |
| 1353 | [Maximum Number of Events That Can Be Attended](./problems/1300-1399/1353/README.md)                                   |        | Medium |             |      |
| 1354 | [Construct Target Array With Multiple Sums](./problems/1300-1399/1354/README.md)                                       |        | Hard   |             |      |
| 1355 | [Activity Participants](./problems/1300-1399/1355/README.md)                                                           | :lock: | Medium |             |      |
| 1356 | [Sort Integers by The Number of 1 Bits](./problems/1300-1399/1356/README.md)                                           |        | Easy   |             |      |
| 1357 | [Apply Discount Every n Orders](./problems/1300-1399/1357/README.md)                                                   |        | Medium |             |      |
| 1358 | [Number of Substrings Containing All Three Characters](./problems/1300-1399/1358/README.md)                            |        | Medium |             |      |
| 1359 | [Count All Valid Pickup and Delivery Options](./problems/1300-1399/1359/README.md)                                     |        | Hard   |             |      |
| 1360 | [Number of Days Between Two Dates](./problems/1300-1399/1360/README.md)                                                |        | Easy   |             |      |
| 1361 | [Validate Binary Tree Nodes](./problems/1300-1399/1361/README.md)                                                      |        | Medium |             |      |
| 1362 | [Closest Divisors](./problems/1300-1399/1362/README.md)                                                                |        | Medium |             |      |
| 1363 | [Largest Multiple of Three](./problems/1300-1399/1363/README.md)                                                       |        | Hard   |             |      |
| 1364 | [Number of Trusted Contacts of a Customer](./problems/1300-1399/1364/README.md)                                        | :lock: | Medium |             |      |
| 1365 | [How Many Numbers Are Smaller Than the Current Number](./problems/1300-1399/1365/README.md)                            | :o:    | Easy   | [arr]       | :+1: |
| 1366 | [Rank Teams by Votes](./problems/1300-1399/1366/README.md)                                                             |        | Medium |             |      |
| 1367 | [Linked List in Binary Tree](./problems/1300-1399/1367/README.md)                                                      |        | Medium |             |      |
| 1368 | [Minimum Cost to Make at Least One Valid Path in a Grid](./problems/1300-1399/1368/README.md)                          |        | Hard   |             |      |
| 1369 | [Get the Second Most Recent Activity](./problems/1300-1399/1369/README.md)                                             | :lock: | Hard   |             |      |
| 1370 | [Increasing Decreasing String](./problems/1300-1399/1370/README.md)                                                    |        | Easy   |             |      |
| 1371 | [Find the Longest Substring Containing Vowels in Even Counts](./problems/1300-1399/1371/README.md)                     |        | Medium |             |      |
| 1372 | [Longest ZigZag Path in a Binary Tree](./problems/1300-1399/1372/README.md)                                            |        | Medium |             |      |
| 1373 | [Maximum Sum BST in Binary Tree](./problems/1300-1399/1373/README.md)                                                  |        | Hard   |             |      |
| 1374 | [Generate a String With Characters That Have Odd Counts](./problems/1300-1399/1374/README.md)                          |        | Easy   |             |      |
| 1375 | [Bulb Switcher III](./problems/1300-1399/1375/README.md)                                                               |        | Medium |             |      |
| 1376 | [Time Needed to Inform All Employees](./problems/1300-1399/1376/README.md)                                             |        | Medium |             |      |
| 1377 | [Frog Position After T Seconds](./problems/1300-1399/1377/README.md)                                                   |        | Hard   |             |      |
| 1378 | [Replace Employee ID With The Unique Identifier](./problems/1300-1399/1378/README.md)                                  | :lock: | Easy   |             |      |
| 1379 | [Find a Corresponding Node of a Binary Tree in a Clone of That Tree](./problems/1300-1399/1379/README.md)              |        | Medium |             |      |
| 1380 | [Lucky Numbers in a Matrix](./problems/1300-1399/1380/README.md)                                                       |        | Easy   |             |      |
| 1381 | [Design a Stack With Increment Operation](./problems/1300-1399/1381/README.md)                                         |        | Medium |             |      |
| 1382 | [Balance a Binary Search Tree](./problems/1300-1399/1382/README.md)                                                    |        | Medium |             |      |
| 1383 | [Maximum Performance of a Team](./problems/1300-1399/1383/README.md)                                                   |        | Hard   |             |      |
| 1384 | [Total Sales Amount by Year](./problems/1300-1399/1384/README.md)                                                      | :lock: | Hard   |             |      |
| 1385 | [Find the Distance Value Between Two Arrays](./problems/1300-1399/1385/README.md)                                      |        | Easy   |             |      |
| 1386 | [Cinema Seat Allocation](./problems/1300-1399/1386/README.md)                                                          |        | Medium |             |      |
| 1387 | [Sort Integers by The Power Value](./problems/1300-1399/1387/README.md)                                                |        | Medium |             |      |
| 1388 | [Pizza With 3n Slices](./problems/1300-1399/1388/README.md)                                                            |        | Hard   |             |      |
| 1389 | [Create Target Array in the Given Order](./problems/1300-1399/1389/README.md)                                          |        | Easy   |             |      |
| 1390 | [Four Divisors](./problems/1300-1399/1390/README.md)                                                                   |        | Medium |             |      |
| 1391 | [Check if There is a Valid Path in a Grid](./problems/1300-1399/1391/README.md)                                        |        | Medium |             |      |
| 1392 | [Longest Happy Prefix](./problems/1300-1399/1392/README.md)                                                            |        | Hard   |             |      |
| 1393 | [Capital Gain/Loss](./problems/1300-1399/1393/README.md)                                                               | :lock: | Medium |             |      |
| 1394 | [Find Lucky Integer in an Array](./problems/1300-1399/1394/README.md)                                                  |        | Easy   |             |      |
| 1395 | [Count Number of Teams](./problems/1300-1399/1395/README.md)                                                           |        | Medium |             |      |
| 1396 | [Design Underground System](./problems/1300-1399/1396/README.md)                                                       |        | Medium |             |      |
| 1397 | [Find All Good Strings](./problems/1300-1399/1397/README.md)                                                           |        | Hard   |             |      |
| 1398 | [Customers Who Bought Products A and B but Not C](./problems/1300-1399/1398/README.md)                                 | :lock: | Medium |             |      |
| 1399 | [Count Largest Group](./problems/1300-1399/1399/README.md)                                                             |        | Easy   |             |      |
| 1400 | [Construct K Palindrome Strings](./problems/1400-1499/1400/README.md)                                                  |        | Medium |             |      |
| 1401 | [Circle and Rectangle Overlapping](./problems/1400-1499/1401/README.md)                                                |        | Medium |             |      |
| 1402 | [Reducing Dishes](./problems/1400-1499/1402/README.md)                                                                 | :o:    | Hard   | [math]      |      |
| 1403 | [Minimum Subsequence in Non-Increasing Order](./problems/1400-1499/1403/README.md)                                     |        | Easy   |             |      |
| 1404 | [Number of Steps to Reduce a Number in Binary Representation to One](./problems/1400-1499/1404/README.md)              |        | Medium |             |      |
| 1405 | [Longest Happy String](./problems/1400-1499/1405/README.md)                                                            |        | Medium |             |      |
| 1406 | [Stone Game III](./problems/1400-1499/1406/README.md)                                                                  |        | Hard   |             |      |
| 1407 | [Top Travellers](./problems/1400-1499/1407/README.md)                                                                  | :lock: | Easy   |             |      |
| 1408 | [String Matching in an Array](./problems/1400-1499/1408/README.md)                                                     |        | Easy   |             |      |
| 1409 | [Queries on a Permutation With Key](./problems/1400-1499/1409/README.md)                                               |        | Medium |             |      |
| 1410 | [HTML Entity Parser](./problems/1400-1499/1410/README.md)                                                              |        | Medium |             |      |
| 1411 | [Number of Ways to Paint N × 3 Grid](./problems/1400-1499/1411/README.md)                                              |        | Hard   |             |      |
| 1412 | [Find the Quiet Students in All Exams](./problems/1400-1499/1412/README.md)                                            | :lock: | Hard   |             |      |
| 1413 | [Minimum Value to Get Positive Step by Step Sum](./problems/1400-1499/1413/README.md)                                  |        | Easy   |             |      |
| 1414 | [Find the Minimum Number of Fibonacci Numbers Whose Sum Is K](./problems/1400-1499/1414/README.md)                     |        | Medium |             |      |
| 1415 | [The k-th Lexicographical String of All Happy Strings of Length n](./problems/1400-1499/1415/README.md)                |        | Medium |             |      |
| 1416 | [Restore The Array](./problems/1400-1499/1416/README.md)                                                               |        | Hard   |             |      |
| 1417 | [Reformat The String](./problems/1400-1499/1417/README.md)                                                             |        | Easy   |             |      |
| 1418 | [Display Table of Food Orders in a Restaurant](./problems/1400-1499/1418/README.md)                                    |        | Medium |             |      |
| 1419 | [Minimum Number of Frogs Croaking](./problems/1400-1499/1419/README.md)                                                |        | Medium |             |      |
| 1420 | [Build Array Where You Can Find The Maximum Exactly K Comparisons](./problems/1400-1499/1420/README.md)                |        | Hard   |             |      |
| 1421 | [NPV Queries](./problems/1400-1499/1421/README.md)                                                                     | :lock: | Medium |             |      |
| 1422 | [Maximum Score After Splitting a String](./problems/1400-1499/1422/README.md)                                          |        | Easy   |             |      |
| 1423 | [Maximum Points You Can Obtain from Cards](./problems/1400-1499/1423/README.md)                                        |        | Medium |             |      |
| 1424 | [Diagonal Traverse II](./problems/1400-1499/1424/README.md)                                                            |        | Medium |             |      |
| 1425 | [Constrained Subsequence Sum](./problems/1400-1499/1425/README.md)                                                     |        | Hard   |             |      |
| 1426 | [Counting Elements](./problems/1400-1499/1426/README.md)                                                               | :lock: | Easy   |             |      |
| 1427 | [Perform String Shifts](./problems/1400-1499/1427/README.md)                                                           | :lock: | Easy   |             |      |
| 1428 | [Leftmost Column with at Least a One](./problems/1400-1499/1428/README.md)                                             | :lock: | Medium |             |      |
| 1429 | [First Unique Number](./problems/1400-1499/1429/README.md)                                                             | :lock: | Medium |             |      |
| 1430 | [Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree](./problems/1400-1499/1430/README.md) | :lock: | Medium |             |      |
| 1431 | [Kids With the Greatest Number of Candies](./problems/1400-1499/1431/README.md)                                        | :o:    | Easy   | [math]      |      |
| 1432 | [Max Difference You Can Get From Changing an Integer](./problems/1400-1499/1432/README.md)                             |        | Medium |             |      |
| 1433 | [Check If a String Can Break Another String](./problems/1400-1499/1433/README.md)                                      |        | Medium |             |      |
| 1434 | [Number of Ways to Wear Different Hats to Each Other](./problems/1400-1499/1434/README.md)                             |        | Hard   |             |      |
| 1435 | [Create a Session Bar Chart](./problems/1400-1499/1435/README.md)                                                      | :lock: | Easy   |             |      |
| 1436 | [Destination City](./problems/1400-1499/1436/README.md)                                                                |        | Easy   |             |      |
| 1437 | [Check If All 1's Are at Least Length K Places Away](./problems/1400-1499/1437/README.md)                              |        | Medium |             |      |
| 1438 | [Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](./problems/1400-1499/1438/README.md)      |        | Medium |             |      |
| 1439 | [Find the Kth Smallest Sum of a Matrix With Sorted Rows](./problems/1400-1499/1439/README.md)                          |        | Hard   |             |      |
| 1440 | [Evaluate Boolean Expression](./problems/1400-1499/1440/README.md)                                                     | :lock: | Medium |             |      |
| 1441 | [Build an Array With Stack Operations](./problems/1400-1499/1441/README.md)                                            |        | Easy   |             |      |
| 1442 | [Count Triplets That Can Form Two Arrays of Equal XOR](./problems/1400-1499/1442/README.md)                            |        | Medium |             |      |
| 1443 | [Minimum Time to Collect All Apples in a Tree](./problems/1400-1499/1443/README.md)                                    |        | Medium |             |      |
| 1444 | [Number of Ways of Cutting a Pizza](./problems/1400-1499/1444/README.md)                                               |        | Hard   |             |      |
| 1445 | [Apples & Oranges](./problems/1400-1499/1445/README.md)                                                                | :lock: | Medium |             |      |
| 1446 | [Consecutive Characters](./problems/1400-1499/1446/README.md)                                                          |        | Easy   |             |      |
| 1447 | [Simplified Fractions](./problems/1400-1499/1447/README.md)                                                            |        | Medium |             |      |
| 1448 | [Count Good Nodes in Binary Tree](./problems/1400-1499/1448/README.md)                                                 |        | Medium |             |      |
| 1449 | [Form Largest Integer With Digits That Add up to Target](./problems/1400-1499/1449/README.md)                          |        | Hard   |             |      |
| 1450 | [Number of Students Doing Homework at a Given Time](./problems/1400-1499/1450/README.md)                               |        | Easy   |             |      |
| 1451 | [Rearrange Words in a Sentence](./problems/1400-1499/1451/README.md)                                                   |        | Medium |             |      |
| 1452 | [People Whose List of Favorite Companies Is Not a Subset of Another List](./problems/1400-1499/1452/README.md)         |        | Medium |             |      |
| 1453 | [Maximum Number of Darts Inside of a Circular Dartboard](./problems/1400-1499/1453/README.md)                          |        | Hard   |             |      |
| 1454 | [Active Users](./problems/1400-1499/1454/README.md)                                                                    | :lock: | Medium |             |      |
| 1455 | [Check If a Word Occurs As a Prefix of Any Word in a Sentence](./problems/1400-1499/1455/README.md)                    |        | Easy   |             |      |
| 1456 | [Maximum Number of Vowels in a Substring of Given Length](./problems/1400-1499/1456/README.md)                         |        | Medium |             |      |
| 1457 | [Pseudo-Palindromic Paths in a Binary Tree](./problems/1400-1499/1457/README.md)                                       |        | Medium |             |      |
| 1458 | [Max Dot Product of Two Subsequences](./problems/1400-1499/1458/README.md)                                             |        | Hard   |             |      |
| 1459 | [Rectangles Area](./problems/1400-1499/1459/README.md)                                                                 | :lock: | Medium |             |      |
| 1460 | [Make Two Arrays Equal by Reversing Sub-arrays](./problems/1400-1499/1460/README.md)                                   |        | Easy   |             |      |
| 1461 | [Check If a String Contains All Binary Codes of Size K](./problems/1400-1499/1461/README.md)                           |        | Medium |             |      |
| 1462 | [Course Schedule IV](./problems/1400-1499/1462/README.md)                                                              |        | Medium |             |      |
| 1463 | [Cherry Pickup II](./problems/1400-1499/1463/README.md)                                                                |        | Hard   |             |      |
| 1464 | [Maximum Product of Two Elements in an Array](./problems/1400-1499/1464/README.md)                                     |        | Easy   |             |      |
| 1465 | [Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts](./problems/1400-1499/1465/README.md)              |        | Medium |             |      |
| 1466 | [Reorder Routes to Make All Paths Lead to the City Zero](./problems/1400-1499/1466/README.md)                          |        | Medium |             |      |
| 1467 | [Probability of a Two Boxes Having The Same Number of Distinct Balls](./problems/1400-1499/1467/README.md)             |        | Hard   |             |      |
| 1468 | [Calculate Salaries](./problems/1400-1499/1468/README.md)                                                              | :lock: | Medium |             |      |
| 1469 | [Find All The Lonely Nodes](./problems/1400-1499/1469/README.md)                                                       | :lock: | Easy   |             |      |
| 1470 | [Shuffle the Array](./problems/1400-1499/1470/README.md)                                                               | :o:    | Easy   | [arr]       |      |
| 1471 | [The k Strongest Values in an Array](./problems/1400-1499/1471/README.md)                                              |        | Medium |             |      |
| 1472 | [Design Browser History](./problems/1400-1499/1472/README.md)                                                          |        | Medium |             |      |
| 1473 | [Paint House III](./problems/1400-1499/1473/README.md)                                                                 |        | Hard   |             |      |
| 1474 | [Delete N Nodes After M Nodes of a Linked List](./problems/1400-1499/1474/README.md)                                   | :lock: | Easy   |             |      |
| 1475 | [Final Prices With a Special Discount in a Shop](./problems/1400-1499/1475/README.md)                                  |        | Easy   |             |      |
| 1476 | [Subrectangle Queries](./problems/1400-1499/1476/README.md)                                                            |        | Medium |             |      |
| 1477 | [Find Two Non-overlapping Sub-arrays Each With Target Sum](./problems/1400-1499/1477/README.md)                        |        | Medium |             |      |
| 1478 | [Allocate Mailboxes](./problems/1400-1499/1478/README.md)                                                              |        | Hard   |             |      |
| 1479 | [Sales by Day of the Week](./problems/1400-1499/1479/README.md)                                                        | :lock: | Hard   |             |      |
| 1480 | [Running Sum of 1d Array](./problems/1400-1499/1480/README.md)                                                         | :o:    | Easy   | [arr]       |      |
| 1481 | [Least Number of Unique Integers after K Removals](./problems/1400-1499/1481/README.md)                                |        | Medium |             |      |
| 1482 | [Minimum Number of Days to Make m Bouquets](./problems/1400-1499/1482/README.md)                                       |        | Medium |             |      |
| 1483 | [1483](./problems/1400-1499/1483/README.md)                                                                            |        | Easy   |             |      |
| 1484 | [Group Sold Products By The Date](./problems/1400-1499/1484/README.md)                                                 | :lock: | Easy   |             |      |
| 1485 | [Clone Binary Tree With Random Pointer](./problems/1400-1499/1485/README.md)                                           | :lock: | Medium |             |      |
| 1486 | [XOR Operation in an Array](./problems/1400-1499/1486/README.md)                                                       |        | Easy   |             |      |
| 1487 | [Making File Names Unique](./problems/1400-1499/1487/README.md)                                                        |        | Medium |             |      |
| 1488 | [Avoid Flood in The City](./problems/1400-1499/1488/README.md)                                                         |        | Medium |             |      |
| 1489 | [Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree](./problems/1400-1499/1489/README.md)                |        | Hard   |             |      |
| 1490 | [Clone N-ary Tree](./problems/1400-1499/1490/README.md)                                                                | :lock: | Medium |             |      |
| 1491 | [Average Salary Excluding the Minimum and Maximum Salary](./problems/1400-1499/1491/README.md)                         |        | Easy   |             |      |
| 1492 | [The kth Factor of n](./problems/1400-1499/1492/README.md)                                                             |        | Medium |             |      |
| 1493 | [Longest Subarray of 1's After Deleting One Element](./problems/1400-1499/1493/README.md)                              |        | Medium |             |      |
| 1494 | [Parallel Courses II](./problems/1400-1499/1494/README.md)                                                             |        | Hard   |             |      |
| 1495 | [Friendly Movies Streamed Last Month](./problems/1400-1499/1495/README.md)                                             | :lock: | Easy   |             |      |
| 1496 | [Path Crossing](./problems/1400-1499/1496/README.md)                                                                   |        | Easy   |             |      |
| 1497 | [Check If Array Pairs Are Divisible by k](./problems/1400-1499/1497/README.md)                                         |        | Medium |             |      |
| 1498 | [Number of Subsequences That Satisfy the Given Sum Condition](./problems/1400-1499/1498/README.md)                     |        | Medium |             |      |
| 1499 | [Max Value of Equation](./problems/1400-1499/1499/README.md)                                                           |        | Hard   |             |      |
| 1500 | [Design a File Sharing System](./problems/1500-1599/1500/README.md)                                                    | :lock: | Medium |             |      |
| 1501 | [Countries You Can Safely Invest In](./problems/1500-1599/1501/README.md)                                              | :lock: | Medium |             |      |
| 1502 | [Can Make Arithmetic Progression From Sequence](./problems/1500-1599/1502/README.md)                                   |        | Easy   |             |      |
| 1503 | [Last Moment Before All Ants Fall Out of a Plank](./problems/1500-1599/1503/README.md)                                 |        | Medium |             |      |
| 1504 | [Count Submatrices With All Ones](./problems/1500-1599/1504/README.md)                                                 |        | Medium |             |      |
| 1505 | [Minimum Possible Integer After at Most K Adjacent Swaps On Digits](./problems/1500-1599/1505/README.md)               |        | Hard   |             |      |
| 1506 | [Find Root of N-Ary Tree](./problems/1500-1599/1506/README.md)                                                         | :lock: | Medium |             |      |
| 1507 | [1507](./problems/1500-1599/1507/README.md)                                                                            |        | Easy   |             |      |
| 1508 | [Range Sum of Sorted Subarray Sums](./problems/1500-1599/1508/README.md)                                               |        | Medium |             |      |
| 1509 | [Minimum Difference Between Largest and Smallest Value in Three Moves](./problems/1500-1599/1509/README.md)            |        | Medium |             |      |
| 1510 | [Stone Game IV](./problems/1500-1599/1510/README.md)                                                                   |        | Hard   |             |      |
| 1511 | [Customer Order Frequency](./problems/1500-1599/1511/README.md)                                                        | :lock: | Easy   |             |      |
| 1512 | [Number of Good Pairs](./problems/1500-1599/1512/README.md)                                                            | :o:    | Easy   | [arr]       |      |
| 1513 | [Number of Substrings With Only 1s](./problems/1500-1599/1513/README.md)                                               |        | Medium |             |      |
| 1514 | [1514](./problems/1500-1599/1514/README.md)                                                                            |        | Easy   |             |      |
| 1515 | [Best Position for a Service Centre](./problems/1500-1599/1515/README.md)                                              |        | Hard   |             |      |
| 1516 | [Move Sub-Tree of N-Ary Tree](./problems/1500-1599/1516/README.md)                                                     | :lock: | Hard   |             |      |
| 1517 | [Find Users With Valid E-Mails](./problems/1500-1599/1517/README.md)                                                   | :lock: | Easy   |             |      |
| 1518 | [Water Bottles](./problems/1500-1599/1518/README.md)                                                                   |        | Easy   |             |      |
| 1519 | [Number of Nodes in the Sub-Tree With the Same Label](./problems/1500-1599/1519/README.md)                             |        | Medium |             |      |
| 1520 | [Maximum Number of Non-Overlapping Substrings](./problems/1500-1599/1520/README.md)                                    |        | Hard   |             |      |
| 1521 | [Find a Value of a Mysterious Function Closest to Target](./problems/1500-1599/1521/README.md)                         |        | Hard   |             |      |
| 1522 | [Diameter of N-Ary Tree](./problems/1500-1599/1522/README.md)                                                          | :lock: | Medium |             |      |
| 1523 | [Count Odd Numbers in an Interval Range](./problems/1500-1599/1523/README.md)                                          |        | Easy   |             |      |
| 1524 | [Number of Sub-arrays With Odd Sum](./problems/1500-1599/1524/README.md)                                               |        | Medium |             |      |
| 1525 | [Number of Good Ways to Split a String](./problems/1500-1599/1525/README.md)                                           |        | Medium |             |      |
| 1526 | [Minimum Number of Increments on Subarrays to Form a Target Array](./problems/1500-1599/1526/README.md)                |        | Hard   |             |      |
| 1527 | [Patients With a Condition](./problems/1500-1599/1527/README.md)                                                       | :lock: | Easy   |             |      |
| 1528 | [Shuffle String](./problems/1500-1599/1528/README.md)                                                                  |        | Easy   |             |      |
| 1529 | [Bulb Switcher IV](./problems/1500-1599/1529/README.md)                                                                |        | Medium |             |      |
| 1530 | [Number of Good Leaf Nodes Pairs](./problems/1500-1599/1530/README.md)                                                 |        | Medium |             |      |
| 1531 | [String Compression II](./problems/1500-1599/1531/README.md)                                                           |        | Hard   |             |      |
| 1532 | [The Most Recent Three Orders](./problems/1500-1599/1532/README.md)                                                    | :lock: | Medium |             |      |
| 1533 | [Find the Index of the Large Integer](./problems/1500-1599/1533/README.md)                                             | :lock: | Medium |             |      |
| 1534 | [Count Good Triplets](./problems/1500-1599/1534/README.md)                                                             | :o:    | Easy   | [arr]       |      |
| 1535 | [Find the Winner of an Array Game](./problems/1500-1599/1535/README.md)                                                |        | Medium |             |      |
| 1536 | [Minimum Swaps to Arrange a Binary Grid](./problems/1500-1599/1536/README.md)                                          |        | Medium |             |      |
| 1537 | [Get the Maximum Score](./problems/1500-1599/1537/README.md)                                                           |        | Hard   |             |      |
| 1538 | [Guess the Majority in a Hidden Array](./problems/1500-1599/1538/README.md)                                            | :lock: | Medium |             |      |
| 1539 | [Kth Missing Positive Number](./problems/1500-1599/1539/README.md)                                                     |        | Easy   |             |      |
| 1540 | [Can Convert String in K Moves](./problems/1500-1599/1540/README.md)                                                   |        | Medium |             |      |
| 1541 | [Minimum Insertions to Balance a Parentheses String](./problems/1500-1599/1541/README.md)                              |        | Medium |             |      |
| 1542 | [Find Longest Awesome Substring](./problems/1500-1599/1542/README.md)                                                  |        | Hard   |             |      |
| 1543 | [Fix Product Name Format](./problems/1500-1599/1543/README.md)                                                         | :lock: | Easy   |             |      |
| 1544 | [Make The String Great](./problems/1500-1599/1544/README.md)                                                           |        | Easy   |             |      |
| 1545 | [Find Kth Bit in Nth Binary String](./problems/1500-1599/1545/README.md)                                               |        | Medium |             |      |
| 1546 | [Maximum Number of Non-Overlapping Subarrays With Sum Equals Target](./problems/1500-1599/1546/README.md)              |        | Medium |             |      |
| 1547 | [Minimum Cost to Cut a Stick](./problems/1500-1599/1547/README.md)                                                     |        | Hard   |             |      |
| 1548 | [The Most Similar Path in a Graph](./problems/1500-1599/1548/README.md)                                                | :lock: | Hard   |             |      |
| 1549 | [The Most Recent Orders for Each Product](./problems/1500-1599/1549/README.md)                                         | :lock: | Medium |             |      |
| 1550 | [1550](./problems/1500-1599/1550/README.md)                                                                            |        | Easy   |             |      |
| 1551 | [Minimum Operations to Make Array Equal](./problems/1500-1599/1551/README.md)                                          |        | Medium |             |      |
| 1552 | [Magnetic Force Between Two Balls](./problems/1500-1599/1552/README.md)                                                |        | Medium |             |      |
| 1553 | [Minimum Number of Days to Eat N Oranges](./problems/1500-1599/1553/README.md)                                         |        | Hard   |             |      |
| 1554 | [Strings Differ by One Character](./problems/1500-1599/1554/README.md)                                                 | :lock: | Medium |             |      |
| 1555 | [Bank Account Summary](./problems/1500-1599/1555/README.md)                                                            | :lock: | Medium |             |      |
| 1556 | [Thousand Separator](./problems/1500-1599/1556/README.md)                                                              |        | Easy   |             |      |
| 1557 | [Minimum Number of Vertices to Reach All Nodes](./problems/1500-1599/1557/README.md)                                   |        | Medium |             |      |
| 1558 | [Minimum Numbers of Function Calls to Make Target Array](./problems/1500-1599/1558/README.md)                          |        | Medium |             |      |
| 1559 | [Detect Cycles in 2D Grid](./problems/1500-1599/1559/README.md)                                                        |        | Hard   |             |      |
| 1560 | [Most Visited Sector in  a Circular Track](./problems/1500-1599/1560/README.md)                                        |        | Easy   |             |      |
| 1561 | [Maximum Number of Coins You Can Get](./problems/1500-1599/1561/README.md)                                             |        | Medium |             |      |
| 1562 | [Find Latest Group of Size M](./problems/1500-1599/1562/README.md)                                                     |        | Medium |             |      |
| 1563 | [Stone Game V](./problems/1500-1599/1563/README.md)                                                                    |        | Hard   |             |      |
| 1564 | [Put Boxes Into the Warehouse I](./problems/1500-1599/1564/README.md)                                                  | :lock: | Medium |             |      |
| 1565 | [Unique Orders and Customers Per Month](./problems/1500-1599/1565/README.md)                                           | :lock: | Easy   |             |      |
| 1566 | [Detect Pattern of Length M Repeated K or More Times](./problems/1500-1599/1566/README.md)                             |        | Easy   |             |      |
| 1567 | [Maximum Length of Subarray With Positive Product](./problems/1500-1599/1567/README.md)                                |        | Medium |             |      |
| 1568 | [Minimum Number of Days to Disconnect Island](./problems/1500-1599/1568/README.md)                                     |        | Hard   |             |      |
| 1569 | [Number of Ways to Reorder Array to Get Same BST](./problems/1500-1599/1569/README.md)                                 |        | Hard   |             |      |
| 1570 | [Dot Product of Two Sparse Vectors](./problems/1500-1599/1570/README.md)                                               | :lock: | Medium |             |      |
| 1571 | [Warehouse Manager](./problems/1500-1599/1571/README.md)                                                               | :lock: | Easy   |             |      |
| 1572 | [Matrix Diagonal Sum](./problems/1500-1599/1572/README.md)                                                             |        | Easy   |             |      |
| 1573 | [Number of Ways to Split a String](./problems/1500-1599/1573/README.md)                                                |        | Medium |             |      |
| 1574 | [Shortest Subarray to be Removed to Make Array Sorted](./problems/1500-1599/1574/README.md)                            |        | Medium |             |      |
| 1575 | [Count All Possible Routes](./problems/1500-1599/1575/README.md)                                                       |        | Hard   |             |      |
| 1576 | [Replace All ?'s to Avoid Consecutive Repeating Characters](./problems/1500-1599/1576/README.md)                       |        | Easy   |             |      |
| 1577 | [Number of Ways Where Square of Number Is Equal to Product of Two Numbers](./problems/1500-1599/1577/README.md)        |        | Medium |             |      |
| 1578 | [Minimum Deletion Cost to Avoid Repeating Letters](./problems/1500-1599/1578/README.md)                                |        | Medium |             |      |
| 1579 | [Remove Max Number of Edges to Keep Graph Fully Traversable](./problems/1500-1599/1579/README.md)                      |        | Hard   |             |      |
| 1580 | [Put Boxes Into the Warehouse II](./problems/1500-1599/1580/README.md)                                                 | :lock: | Medium |             |      |
| 1581 | [Customer Who Visited but Did Not Make Any Transactions](./problems/1500-1599/1581/README.md)                          | :lock: | Easy   |             |      |
| 1582 | [Special Positions in a Binary Matrix](./problems/1500-1599/1582/README.md)                                            |        | Easy   |             |      |
| 1583 | [Count Unhappy Friends](./problems/1500-1599/1583/README.md)                                                           |        | Medium |             |      |
| 1584 | [Min Cost to Connect All Points](./problems/1500-1599/1584/README.md)                                                  |        | Medium |             |      |
| 1585 | [Check If String Is Transformable With Substring Sort Operations](./problems/1500-1599/1585/README.md)                 |        | Hard   |             |      |
| 1586 | [Binary Search Tree Iterator II](./problems/1500-1599/1586/README.md)                                                  | :lock: | Medium |             |      |
| 1587 | [Bank Account Summary II](./problems/1500-1599/1587/README.md)                                                         | :lock: | Easy   |             |      |
| 1588 | [Sum of All Odd Length Subarrays](./problems/1500-1599/1588/README.md)                                                 |        | Easy   |             |      |
| 1589 | [Maximum Sum Obtained of Any Permutation](./problems/1500-1599/1589/README.md)                                         |        | Medium |             |      |
| 1590 | [Make Sum Divisible by P](./problems/1500-1599/1590/README.md)                                                         |        | Medium |             |      |
| 1591 | [Strange Printer II](./problems/1500-1599/1591/README.md)                                                              |        | Hard   |             |      |
| 1592 | [Rearrange Spaces Between Words](./problems/1500-1599/1592/README.md)                                                  |        | Easy   |             |      |
| 1593 | [Split a String Into the Max Number of Unique Substrings](./problems/1500-1599/1593/README.md)                         |        | Medium |             |      |
| 1594 | [Maximum Non Negative Product in a Matrix](./problems/1500-1599/1594/README.md)                                        |        | Medium |             |      |
| 1595 | [Minimum Cost to Connect Two Groups of Points](./problems/1500-1599/1595/README.md)                                    |        | Hard   |             |      |
| 1596 | [The Most Frequently Ordered Products for Each Customer](./problems/1500-1599/1596/README.md)                          | :lock: | Medium |             |      |
| 1597 | [Build Binary Expression Tree From Infix Expression](./problems/1500-1599/1597/README.md)                              | :lock: | Hard   |             |      |
| 1598 | [Crawler Log Folder](./problems/1500-1599/1598/README.md)                                                              |        | Easy   |             |      |
| 1599 | [Maximum Profit of Operating a Centennial Wheel](./problems/1500-1599/1599/README.md)                                  |        | Medium |             |      |
| 1600 | [Throne Inheritance](./problems/1600-1699/1600/README.md)                                                              |        | Medium |             |      |
| 1601 | [Maximum Number of Achievable Transfer Requests](./problems/1600-1699/1601/README.md)                                  |        | Hard   |             |      |
| 1602 | [Find Nearest Right Node in Binary Tree](./problems/1600-1699/1602/README.md)                                          | :lock: | Medium |             |      |
| 1603 | [Design Parking System](./problems/1600-1699/1603/README.md)                                                           |        | Easy   |             |      |
| 1604 | [Alert Using Same Key-Card Three or More Times in a One Hour Period](./problems/1600-1699/1604/README.md)              |        | Medium |             |      |
| 1605 | [Find Valid Matrix Given Row and Column Sums](./problems/1600-1699/1605/README.md)                                     |        | Medium |             |      |
| 1606 | [Find Servers That Handled Most Number of Requests](./problems/1600-1699/1606/README.md)                               |        | Hard   |             |      |
| 1607 | [Sellers With No Sales](./problems/1600-1699/1607/README.md)                                                           | :lock: | Easy   |             |      |
| 1608 | [Special Array With X Elements Greater Than or Equal X](./problems/1600-1699/1608/README.md)                           |        | Easy   |             |      |
| 1609 | [Even Odd Tree](./problems/1600-1699/1609/README.md)                                                                   |        | Medium |             |      |
| 1610 | [Maximum Number of Visible Points](./problems/1600-1699/1610/README.md)                                                |        | Hard   |             |      |
| 1611 | [Minimum One Bit Operations to Make Integers Zero](./problems/1600-1699/1611/README.md)                                |        | Hard   |             |      |
| 1612 | [Check If Two Expression Trees are Equivalent](./problems/1600-1699/1612/README.md)                                    | :lock: | Medium |             |      |
| 1613 | [Find the Missing IDs](./problems/1600-1699/1613/README.md)                                                            | :lock: | Medium |             |      |
| 1614 | [Maximum Nesting Depth of the Parentheses](./problems/1600-1699/1614/README.md)                                        |        | Easy   |             |      |
| 1615 | [Maximal Network Rank](./problems/1600-1699/1615/README.md)                                                            |        | Medium |             |      |
| 1616 | [Split Two Strings to Make Palindrome](./problems/1600-1699/1616/README.md)                                            |        | Medium |             |      |
| 1617 | [Count Subtrees With Max Distance Between Cities](./problems/1600-1699/1617/README.md)                                 |        | Hard   |             |      |
| 1618 | [1618](./problems/1600-1699/1618/README.md)                                                                            |        | Easy   |             |      |
| 1619 | [1619](./problems/1600-1699/1619/README.md)                                                                            |        | Easy   |             |      |
| 1620 | [Coordinate With Maximum Network Quality](./problems/1600-1699/1620/README.md)                                         |        | Medium |             |      |
| 1621 | [Number of Sets of K Non-Overlapping Line Segments](./problems/1600-1699/1621/README.md)                               |        | Medium |             |      |
| 1622 | [Fancy Sequence](./problems/1600-1699/1622/README.md)                                                                  |        | Hard   |             |      |
| 1623 | [All Valid Triplets That Can Represent a Country](./problems/1600-1699/1623/README.md)                                 | :lock: | Easy   |             |      |
| 1624 | [Largest Substring Between Two Equal Characters](./problems/1600-1699/1624/README.md)                                  |        | Easy   |             |      |
| 1625 | [Lexicographically Smallest String After Applying Operations](./problems/1600-1699/1625/README.md)                     |        | Medium |             |      |
| 1626 | [Best Team With No Conflicts](./problems/1600-1699/1626/README.md)                                                     |        | Medium |             |      |
| 1627 | [1627](./problems/1600-1699/1627/README.md)                                                                            |        | Easy   |             |      |
| 1628 | [Design an Expression Tree With Evaluate Function](./problems/1600-1699/1628/README.md)                                | :lock: | Medium |             |      |
| 1629 | [Slowest Key](./problems/1600-1699/1629/README.md)                                                                     |        | Easy   |             |      |
| 1630 | [Arithmetic Subarrays](./problems/1600-1699/1630/README.md)                                                            |        | Medium |             |      |
| 1631 | [Path With Minimum Effort](./problems/1600-1699/1631/README.md)                                                        |        | Medium |             |      |
| 1632 | [1632](./problems/1600-1699/1632/README.md)                                                                            |        | Easy   |             |      |
| 1633 | [Percentage of Users Attended a Contest](./problems/1600-1699/1633/README.md)                                          | :lock: | Easy   |             |      |
| 1634 | [Add Two Polynomials Represented as Linked Lists](./problems/1600-1699/1634/README.md)                                 | :lock: | Medium |             |      |
| 1635 | [Hopper Company Queries I](./problems/1600-1699/1635/README.md)                                                        | :lock: | Hard   |             |      |
| 1636 | [Sort Array by Increasing Frequency](./problems/1600-1699/1636/README.md)                                              |        | Easy   |             |      |
| 1637 | [Widest Vertical Area Between Two Points Containing No Points](./problems/1600-1699/1637/README.md)                    |        | Medium |             |      |
| 1638 | [Count Substrings That Differ by One Character](./problems/1600-1699/1638/README.md)                                   |        | Medium |             |      |
| 1639 | [Number of Ways to Form a Target String Given a Dictionary](./problems/1600-1699/1639/README.md)                       |        | Hard   |             |      |
| 1640 | [Check Array Formation Through Concatenation](./problems/1600-1699/1640/README.md)                                     |        | Easy   |             |      |
| 1641 | [Count Sorted Vowel Strings](./problems/1600-1699/1641/README.md)                                                      |        | Medium |             |      |
| 1642 | [Furthest Building You Can Reach](./problems/1600-1699/1642/README.md)                                                 |        | Medium |             |      |
| 1643 | [1643](./problems/1600-1699/1643/README.md)                                                                            |        | Easy   |             |      |
| 1644 | [Lowest Common Ancestor of a Binary Tree II](./problems/1600-1699/1644/README.md)                                      | :lock: | Medium |             |      |
| 1645 | [Hopper Company Queries II](./problems/1600-1699/1645/README.md)                                                       | :lock: | Hard   |             |      |
| 1646 | [Get Maximum in Generated Array](./problems/1600-1699/1646/README.md)                                                  |        | Easy   |             |      |
| 1647 | [Minimum Deletions to Make Character Frequencies Unique](./problems/1600-1699/1647/README.md)                          |        | Medium |             |      |
| 1648 | [Sell Diminishing-Valued Colored Balls](./problems/1600-1699/1648/README.md)                                           |        | Medium |             |      |
| 1649 | [Create Sorted Array through Instructions](./problems/1600-1699/1649/README.md)                                        |        | Hard   |             |      |
| 1650 | [Lowest Common Ancestor of a Binary Tree III](./problems/1600-1699/1650/README.md)                                     | :lock: | Medium |             |      |
| 1651 | [Hopper Company Queries III](./problems/1600-1699/1651/README.md)                                                      | :lock: | Hard   |             |      |
| 1652 | [Defuse the Bomb](./problems/1600-1699/1652/README.md)                                                                 |        | Easy   |             |      |
| 1653 | [Minimum Deletions to Make String Balanced](./problems/1600-1699/1653/README.md)                                       |        | Medium |             |      |
| 1654 | [Minimum Jumps to Reach Home](./problems/1600-1699/1654/README.md)                                                     |        | Medium |             |      |
| 1655 | [Distribute Repeating Integers](./problems/1600-1699/1655/README.md)                                                   |        | Hard   |             |      |
| 1656 | [Design an Ordered Stream](./problems/1600-1699/1656/README.md)                                                        |        | Easy   |             |      |
| 1657 | [Determine if Two Strings Are Close](./problems/1600-1699/1657/README.md)                                              |        | Medium |             |      |
| 1658 | [Minimum Operations to Reduce X to Zero](./problems/1600-1699/1658/README.md)                                          |        | Medium |             |      |
| 1659 | [Maximize Grid Happiness](./problems/1600-1699/1659/README.md)                                                         |        | Hard   |             |      |
| 1660 | [Correct a Binary Tree](./problems/1600-1699/1660/README.md)                                                           | :lock: | Medium |             |      |
| 1661 | [Average Time of Process per Machine](./problems/1600-1699/1661/README.md)                                             | :lock: | Easy   |             |      |
| 1662 | [Check If Two String Arrays are Equivalent](./problems/1600-1699/1662/README.md)                                       |        | Easy   |             |      |
| 1663 | [Smallest String With A Given Numeric Value](./problems/1600-1699/1663/README.md)                                      |        | Medium |             |      |
| 1664 | [Ways to Make a Fair Array](./problems/1600-1699/1664/README.md)                                                       |        | Medium |             |      |
| 1665 | [Minimum Initial Energy to Finish Tasks](./problems/1600-1699/1665/README.md)                                          |        | Hard   |             |      |
| 1666 | [Change the Root of a Binary Tree](./problems/1600-1699/1666/README.md)                                                | :lock: | Medium |             |      |
| 1667 | [Fix Names in a Table](./problems/1600-1699/1667/README.md)                                                            | :lock: | Easy   |             |      |
| 1668 | [Maximum Repeating Substring](./problems/1600-1699/1668/README.md)                                                     |        | Easy   |             |      |
| 1669 | [Merge In Between Linked Lists](./problems/1600-1699/1669/README.md)                                                   |        | Medium |             |      |
| 1670 | [Design Front Middle Back Queue](./problems/1600-1699/1670/README.md)                                                  |        | Medium |             |      |
| 1671 | [Minimum Number of Removals to Make Mountain Array](./problems/1600-1699/1671/README.md)                               |        | Hard   |             |      |
| 1672 | [Richest Customer Wealth](./problems/1600-1699/1672/README.md)                                                         |        | Easy   |             |      |
| 1673 | [Find the Most Competitive Subsequence](./problems/1600-1699/1673/README.md)                                           |        | Medium |             |      |
| 1674 | [Minimum Moves to Make Array Complementary](./problems/1600-1699/1674/README.md)                                       |        | Medium |             |      |
| 1675 | [Minimize Deviation in Array](./problems/1600-1699/1675/README.md)                                                     |        | Hard   |             |      |
| 1676 | [Lowest Common Ancestor of a Binary Tree IV](./problems/1600-1699/1676/README.md)                                      | :lock: | Medium |             |      |
| 1677 | [Product's Worth Over Invoices](./problems/1600-1699/1677/README.md)                                                   | :lock: | Easy   |             |      |
| 1678 | [Goal Parser Interpretation](./problems/1600-1699/1678/README.md)                                                      | :o:    | Easy   | [str]       |      |
| 1679 | [Max Number of K-Sum Pairs](./problems/1600-1699/1679/README.md)                                                       |        | Medium |             |      |
| 1680 | [Concatenation of Consecutive Binary Numbers](./problems/1600-1699/1680/README.md)                                     |        | Medium |             |      |
| 1681 | [Minimum Incompatibility](./problems/1600-1699/1681/README.md)                                                         |        | Hard   |             |      |
| 1682 | [Longest Palindromic Subsequence II](./problems/1600-1699/1682/README.md)                                              | :lock: | Medium |             |      |
| 1683 | [Invalid Tweets](./problems/1600-1699/1683/README.md)                                                                  | :lock: | Easy   |             |      |
| 1684 | [Count the Number of Consistent Strings](./problems/1600-1699/1684/README.md)                                          |        | Easy   |             |      |
| 1685 | [Sum of Absolute Differences in a Sorted Array](./problems/1600-1699/1685/README.md)                                   |        | Medium |             |      |
| 1686 | [Stone Game VI](./problems/1600-1699/1686/README.md)                                                                   |        | Medium |             |      |
| 1687 | [Delivering Boxes from Storage to Ports](./problems/1600-1699/1687/README.md)                                          |        | Hard   |             |      |
| 1688 | [Count of Matches in Tournament](./problems/1600-1699/1688/README.md)                                                  |        | Easy   |             |      |
| 1689 | [Partitioning Into Minimum Number Of Deci-Binary Numbers](./problems/1600-1699/1689/README.md)                         |        | Medium |             |      |
| 1690 | [Stone Game VII](./problems/1600-1699/1690/README.md)                                                                  |        | Medium |             |      |
| 1691 | [1691](./problems/1600-1699/1691/README.md)                                                                            |        | Easy   |             |      |
| 1692 | [Count Ways to Distribute Candies](./problems/1600-1699/1692/README.md)                                                | :lock: | Hard   |             |      |
| 1693 | [Daily Leads and Partners](./problems/1600-1699/1693/README.md)                                                        | :lock: | Easy   |             |      |
| 1694 | [Reformat Phone Number](./problems/1600-1699/1694/README.md)                                                           |        | Easy   |             |      |
| 1695 | [Maximum Erasure Value](./problems/1600-1699/1695/README.md)                                                           |        | Medium |             |      |
| 1696 | [Jump Game VI](./problems/1600-1699/1696/README.md)                                                                    |        | Medium |             |      |
| 1697 | [Checking Existence of Edge Length Limited Paths](./problems/1600-1699/1697/README.md)                                 |        | Hard   |             |      |
| 1698 | [Number of Distinct Substrings in a String](./problems/1600-1699/1698/README.md)                                       | :lock: | Medium |             |      |
| 1699 | [Number of Calls Between Two Persons](./problems/1600-1699/1699/README.md)                                             | :lock: | Medium |             |      |
| 1700 | [Number of Students Unable to Eat Lunch](./problems/1700-1799/1700/README.md)                                          |        | Easy   |             |      |
| 1701 | [Average Waiting Time](./problems/1700-1799/1701/README.md)                                                            |        | Medium |             |      |
| 1702 | [Maximum Binary String After Change](./problems/1700-1799/1702/README.md)                                              |        | Medium |             |      |
| 1703 | [Minimum Adjacent Swaps for K Consecutive Ones](./problems/1700-1799/1703/README.md)                                   |        | Hard   |             |      |
| 1704 | [Determine if String Halves Are Alike](./problems/1700-1799/1704/README.md)                                            |        | Easy   |             |      |
| 1705 | [Maximum Number of Eaten Apples](./problems/1700-1799/1705/README.md)                                                  |        | Medium |             |      |
| 1706 | [1706](./problems/1700-1799/1706/README.md)                                                                            |        | Easy   |             |      |
| 1707 | [Maximum XOR With an Element From Array](./problems/1700-1799/1707/README.md)                                          |        | Hard   |             |      |
| 1708 | [Largest Subarray Length K](./problems/1700-1799/1708/README.md)                                                       | :lock: | Easy   |             |      |
| 1709 | [Biggest Window Between Visits](./problems/1700-1799/1709/README.md)                                                   | :lock: | Medium |             |      |
| 1710 | [Maximum Units on a Truck](./problems/1700-1799/1710/README.md)                                                        |        | Easy   |             |      |
| 1711 | [Count Good Meals](./problems/1700-1799/1711/README.md)                                                                |        | Medium |             |      |
| 1712 | [Ways to Split Array Into Three Subarrays](./problems/1700-1799/1712/README.md)                                        |        | Medium |             |      |
| 1713 | [Minimum Operations to Make a Subsequence](./problems/1700-1799/1713/README.md)                                        |        | Hard   |             |      |
| 1714 | [Sum Of Special Evenly-Spaced Elements In Array](./problems/1700-1799/1714/README.md)                                  | :lock: | Hard   |             |      |
| 1715 | [Count Apples and Oranges](./problems/1700-1799/1715/README.md)                                                        | :lock: | Medium |             |      |
| 1716 | [Calculate Money in Leetcode Bank](./problems/1700-1799/1716/README.md)                                                |        | Easy   |             |      |
| 1717 | [Maximum Score From Removing Substrings](./problems/1700-1799/1717/README.md)                                          |        | Medium |             |      |
| 1718 | [Construct the Lexicographically Largest Valid Sequence](./problems/1700-1799/1718/README.md)                          |        | Medium |             |      |
| 1719 | [Number Of Ways To Reconstruct A Tree](./problems/1700-1799/1719/README.md)                                            |        | Hard   |             |      |
| 1720 | [Decode XORed Array](./problems/1700-1799/1720/README.md)                                                              | :o:    | Easy   | [math]      | :+1: |
| 1721 | [1721](./problems/1700-1799/1721/README.md)                                                                            |        | Easy   |             |      |
| 1722 | [Minimize Hamming Distance After Swap Operations](./problems/1700-1799/1722/README.md)                                 |        | Medium |             |      |
| 1723 | [Find Minimum Time to Finish All Jobs](./problems/1700-1799/1723/README.md)                                            |        | Hard   |             |      |
| 1724 | [Checking Existence of Edge Length Limited Paths II](./problems/1700-1799/1724/README.md)                              | :lock: | Hard   |             |      |
| 1784 | [Check if Binary String Has at Most One Segment of Ones](./problems/1700-1799/1784/README.md)                          | :o:    | Easy   | [arr]       |      |
| 1785 | [Minimum Elements to Add to Form a Given Sum](./problems/1700-1799/1785/README.md)                                     |        | Medium |             |      |
| 1786 | [Number of Restricted Paths From First to Last Node](./problems/1700-1799/1786/README.md)                              |        | Medium |             |      |
| 1787 | [Make the XOR of All Segments Equal to Zero](./problems/1700-1799/1787/README.md)                                      |        | Hard   |             |      |
| 1788 | [Maximize the Beauty of the Garden](./problems/1700-1799/1788/README.md)                                               | :lock: | Hard   |             |      |
| 1789 | [Primary Department for Each Employee](./problems/1700-1799/1789/README.md)                                            | :lock: | Easy   |             |      |
| 1790 | [Check if One String Swap Can Make Strings Equal](./problems/1700-1799/1790/README.md)                                 |        | Easy   |             |      |
| 1791 | [Find Center of Star Graph](./problems/1700-1799/1791/README.md)                                                       |        | Easy   |             |      |
| 1792 | [Maximum Average Pass Ratio](./problems/1700-1799/1792/README.md)                                                      |        | Medium |             |      |
| 1793 | [Maximum Score of a Good Subarray](./problems/1700-1799/1793/README.md)                                                |        | Hard   |             |      |
| 1794 | [Count Pairs of Equal Substrings With Minimum Difference](./problems/1700-1799/1794/README.md)                         | :lock: | Medium |             |      |
| 1795 | [Rearrange Products Table](./problems/1700-1799/1795/README.md)                                                        | :lock: | Easy   |             |      |
| 1796 | [Second Largest Digit in a String](./problems/1700-1799/1796/README.md)                                                |        | Easy   |             |      |
| 1797 | [Design Authentication Manager](./problems/1700-1799/1797/README.md)                                                   |        | Medium |             |      |
| 1798 | [Maximum Number of Consecutive Values You Can Make](./problems/1700-1799/1798/README.md)                               |        | Medium |             |      |
| 1799 | [Maximize Score After N Operations](./problems/1700-1799/1799/README.md)                                               |        | Hard   |             |      |
| 1800 | [Maximum Ascending Subarray Sum](./problems/1800-1899/1800/README.md)                                                  |        | Easy   |             |      |
| 1801 | [Number of Orders in the Backlog](./problems/1800-1899/1801/README.md)                                                 |        | Medium |             |      |
| 1802 | [Maximum Value at a Given Index in a Bounded Array](./problems/1800-1899/1802/README.md)                               |        | Medium |             |      |
| 1803 | [Count Pairs With XOR in a Range](./problems/1800-1899/1803/README.md)                                                 |        | Hard   |             |      |
| 1804 | [Implement Trie II (Prefix Tree)](./problems/1800-1899/1804/README.md)                                                 | :lock: | Medium |             |      |
| 1805 | [Number of Different Integers in a String](./problems/1800-1899/1805/README.md)                                        |        | Easy   |             |      |
| 1806 | [Minimum Number of Operations to Reinitialize a Permutation](./problems/1800-1899/1806/README.md)                      |        | Medium |             |      |
| 1807 | [Evaluate the Bracket Pairs of a String](./problems/1800-1899/1807/README.md)                                          |        | Medium |             |      |
| 1808 | [Maximize Number of Nice Divisors](./problems/1800-1899/1808/README.md)                                                |        | Hard   |             |      |
| 1809 | [Ad-Free Sessions](./problems/1800-1899/1809/README.md)                                                                | :lock: | Easy   |             |      |
| 1810 | [Minimum Path Cost in a Hidden Grid](./problems/1800-1899/1810/README.md)                                              | :lock: | Medium |             |      |
| 1811 | [Find Interview Candidates](./problems/1800-1899/1811/README.md)                                                       | :lock: | Medium |             |      |
| 1812 | [Determine Color of a Chessboard Square](./problems/1800-1899/1812/README.md)                                          |        | Easy   |             |      |
| 1813 | [Sentence Similarity III](./problems/1800-1899/1813/README.md)                                                         |        | Medium |             |      |
| 1814 | [Count Nice Pairs in an Array](./problems/1800-1899/1814/README.md)                                                    |        | Medium |             |      |
| 1815 | [Maximum Number of Groups Getting Fresh Donuts](./problems/1800-1899/1815/README.md)                                   |        | Hard   |             |      |
| 1816 | [Truncate Sentence](./problems/1800-1899/1816/README.md)                                                               |        | Easy   |             |      |
| 1817 | [Finding the Users Active Minutes](./problems/1800-1899/1817/README.md)                                                |        | Medium |             |      |
| 1818 | [Minimum Absolute Sum Difference](./problems/1800-1899/1818/README.md)                                                 |        | Medium |             |      |
| 1819 | [Number of Different Subsequences GCDs](./problems/1800-1899/1819/README.md)                                           |        | Hard   |             |      |
| 1820 | [Maximum Number of Accepted Invitations](./problems/1800-1899/1820/README.md)                                          | :lock: | Medium |             |      |
| 1821 | [Find Customers With Positive Revenue this Year](./problems/1800-1899/1821/README.md)                                  | :lock: | Easy   |             |      |
| 1822 | [Sign of the Product of an Array](./problems/1800-1899/1822/README.md)                                                 |        | Easy   |             |      |
| 1823 | [Find the Winner of the Circular Game](./problems/1800-1899/1823/README.md)                                            |        | Medium |             |      |
| 1824 | [Minimum Sideway Jumps](./problems/1800-1899/1824/README.md)                                                           |        | Medium |             |      |
| 1825 | [Finding MK Average](./problems/1800-1899/1825/README.md)                                                              |        | Hard   |             |      |
| 1826 | [Faulty Sensor](./problems/1800-1899/1826/README.md)                                                                   | :lock: | Easy   |             |      |
| 1827 | [Minimum Operations to Make the Array Increasing](./problems/1800-1899/1827/README.md)                                 |        | Easy   |             |      |
| 1828 | [Queries on Number of Points Inside a Circle](./problems/1800-1899/1828/README.md)                                     |        | Medium |             |      |
| 1829 | [Maximum XOR for Each Query](./problems/1800-1899/1829/README.md)                                                      |        | Medium |             |      |
| 1830 | [Minimum Number of Operations to Make String Sorted](./problems/1800-1899/1830/README.md)                              |        | Hard   |             |      |
| 1831 | [Maximum Transaction Each Day](./problems/1800-1899/1831/README.md)                                                    | :lock: | Medium |             |      |
| 1832 | [Check if the Sentence Is Pangram](./problems/1800-1899/1832/README.md)                                                |        | Easy   |             |      |
| 1833 | [Maximum Ice Cream Bars](./problems/1800-1899/1833/README.md)                                                          |        | Medium |             |      |
| 1834 | [Single-Threaded CPU](./problems/1800-1899/1834/README.md)                                                             |        | Medium |             |      |
| 1835 | [Find XOR Sum of All Pairs Bitwise AND](./problems/1800-1899/1835/README.md)                                           |        | Hard   |             |      |
| 1836 | [Remove Duplicates From an Unsorted Linked List](./problems/1800-1899/1836/README.md)                                  | :lock: | Medium |             |      |
| 1837 | [Sum of Digits in Base K](./problems/1800-1899/1837/README.md)                                                         |        | Easy   |             |      |
| 1838 | [Frequency of the Most Frequent Element](./problems/1800-1899/1838/README.md)                                          |        | Medium |             |      |
| 1839 | [Longest Substring Of All Vowels in Order](./problems/1800-1899/1839/README.md)                                        |        | Medium |             |      |
| 1840 | [Maximum Building Height](./problems/1800-1899/1840/README.md)                                                         |        | Hard   |             |      |
| 1841 | [League Statistics](./problems/1800-1899/1841/README.md)                                                               | :lock: | Medium |             |      |
| 1842 | [Next Palindrome Using Same Digits](./problems/1800-1899/1842/README.md)                                               | :lock: | Hard   |             |      |
| 1843 | [Suspicious Bank Accounts](./problems/1800-1899/1843/README.md)                                                        | :lock: | Medium |             |      |
| 1844 | [Replace All Digits with Characters](./problems/1800-1899/1844/README.md)                                              |        | Easy   |             |      |
| 1845 | [Seat Reservation Manager](./problems/1800-1899/1845/README.md)                                                        |        | Medium |             |      |
| 1846 | [Maximum Element After Decreasing and Rearranging](./problems/1800-1899/1846/README.md)                                |        | Medium |             |      |
| 1847 | [Closest Room](./problems/1800-1899/1847/README.md)                                                                    |        | Hard   |             |      |
| 1848 | [Minimum Distance to the Target Element](./problems/1800-1899/1848/README.md)                                          |        | Easy   |             |      |
| 1849 | [Splitting a String Into Descending Consecutive Values](./problems/1800-1899/1849/README.md)                           |        | Medium |             |      |
| 1850 | [Minimum Adjacent Swaps to Reach the Kth Smallest Number](./problems/1800-1899/1850/README.md)                         |        | Medium |             |      |
| 1851 | [Minimum Interval to Include Each Query](./problems/1800-1899/1851/README.md)                                          |        | Hard   |             |      |
| 1852 | [Distinct Numbers in Each Subarray](./problems/1800-1899/1852/README.md)                                               | :lock: | Medium |             |      |
| 1853 | [Convert Date Format](./problems/1800-1899/1853/README.md)                                                             | :lock: | Easy   |             |      |
| 1854 | [Maximum Population Year](./problems/1800-1899/1854/README.md)                                                         |        | Easy   |             |      |
| 1855 | [Maximum Distance Between a Pair of Values](./problems/1800-1899/1855/README.md)                                       |        | Medium |             |      |
| 1856 | [Maximum Subarray Min-Product](./problems/1800-1899/1856/README.md)                                                    |        | Medium |             |      |
| 1857 | [Largest Color Value in a Directed Graph](./problems/1800-1899/1857/README.md)                                         |        | Hard   |             |      |
| 1858 | [Longest Word With All Prefixes](./problems/1800-1899/1858/README.md)                                                  | :lock: | Medium |             |      |
| 1859 | [Sorting the Sentence](./problems/1800-1899/1859/README.md)                                                            |        | Easy   |             |      |
| 1860 | [Incremental Memory Leak](./problems/1800-1899/1860/README.md)                                                         |        | Medium |             |      |
| 1861 | [Rotating the Box](./problems/1800-1899/1861/README.md)                                                                |        | Medium |             |      |
| 1862 | [1862](./problems/1800-1899/1862/README.md)                                                                            |        | Easy   |             |      |
| 1863 | [Sum of All Subset XOR Totals](./problems/1800-1899/1863/README.md)                                                    |        | Easy   |             |      |
| 1864 | [Minimum Number of Swaps to Make the Binary String Alternating](./problems/1800-1899/1864/README.md)                   |        | Medium |             |      |
| 1865 | [Finding Pairs With a Certain Sum](./problems/1800-1899/1865/README.md)                                                |        | Medium |             |      |
| 1866 | [Number of Ways to Rearrange Sticks With K Sticks Visible](./problems/1800-1899/1866/README.md)                        |        | Hard   |             |      |
| 1867 | [Orders With Maximum Quantity Above Average](./problems/1800-1899/1867/README.md)                                      | :lock: | Medium |             |      |
| 1868 | [Product of Two Run-Length Encoded Arrays](./problems/1800-1899/1868/README.md)                                        | :lock: | Medium |             |      |
| 1869 | [Longer Contiguous Segments of Ones than Zeros](./problems/1800-1899/1869/README.md)                                   |        | Easy   |             |      |
| 1870 | [Minimum Speed to Arrive on Time](./problems/1800-1899/1870/README.md)                                                 |        | Medium |             |      |
| 1871 | [Jump Game VII](./problems/1800-1899/1871/README.md)                                                                   |        | Medium |             |      |
| 1872 | [Stone Game VIII](./problems/1800-1899/1872/README.md)                                                                 |        | Hard   |             |      |
| 1873 | [Calculate Special Bonus](./problems/1800-1899/1873/README.md)                                                         | :lock: | Easy   |             |      |
| 1874 | [Minimize Product Sum of Two Arrays](./problems/1800-1899/1874/README.md)                                              | :lock: | Medium |             |      |
| 1875 | [Group Employees of the Same Salary](./problems/1800-1899/1875/README.md)                                              | :lock: | Medium |             |      |
| 1876 | [Substrings of Size Three with Distinct Characters](./problems/1800-1899/1876/README.md)                               |        | Easy   |             |      |
| 1877 | [Minimize Maximum Pair Sum in Array](./problems/1800-1899/1877/README.md)                                              |        | Medium |             |      |
| 1878 | [Get Biggest Three Rhombus Sums in a Grid](./problems/1800-1899/1878/README.md)                                        |        | Medium |             |      |
| 1879 | [Minimum XOR Sum of Two Arrays](./problems/1800-1899/1879/README.md)                                                   |        | Hard   |             |      |
| 1880 | [Check if Word Equals Summation of Two Words](./problems/1800-1899/1880/README.md)                                     |        | Easy   |             |      |
| 1881 | [Maximum Value after Insertion](./problems/1800-1899/1881/README.md)                                                   |        | Medium |             |      |
| 1882 | [Process Tasks Using Servers](./problems/1800-1899/1882/README.md)                                                     |        | Medium |             |      |
| 1883 | [Minimum Skips to Arrive at Meeting On Time](./problems/1800-1899/1883/README.md)                                      |        | Hard   |             |      |
| 1884 | [Egg Drop With 2 Eggs and N Floors](./problems/1800-1899/1884/README.md)                                               |        | Medium |             |      |
| 1885 | [Count Pairs in Two Arrays](./problems/1800-1899/1885/README.md)                                                       | :lock: | Medium |             |      |
| 1886 | [Determine Whether Matrix Can Be Obtained By Rotation](./problems/1800-1899/1886/README.md)                            |        | Easy   |             |      |
| 1887 | [Reduction Operations to Make the Array Elements Equal](./problems/1800-1899/1887/README.md)                           |        | Medium |             |      |
| 1888 | [Minimum Number of Flips to Make the Binary String Alternating](./problems/1800-1899/1888/README.md)                   |        | Medium |             |      |
| 1889 | [Minimum Space Wasted From Packaging](./problems/1800-1899/1889/README.md)                                             |        | Hard   |             |      |
| 1890 | [The Latest Login in 2020](./problems/1800-1899/1890/README.md)                                                        | :lock: | Easy   |             |      |
| 1891 | [Cutting Ribbons](./problems/1800-1899/1891/README.md)                                                                 | :lock: | Medium |             |      |
| 1892 | [Page Recommendations II](./problems/1800-1899/1892/README.md)                                                         | :lock: | Hard   |             |      |
| 1893 | [Check if All the Integers in a Range Are Covered](./problems/1800-1899/1893/README.md)                                |        | Easy   |             |      |
| 1894 | [Find the Student that Will Replace the Chalk](./problems/1800-1899/1894/README.md)                                    |        | Medium |             |      |
| 1895 | [1895](./problems/1800-1899/1895/README.md)                                                                            |        | Easy   |             |      |
| 1896 | [Minimum Cost to Change the Final Value of Expression](./problems/1800-1899/1896/README.md)                            |        | Hard   |             |      |
| 1897 | [Redistribute Characters to Make All Strings Equal](./problems/1800-1899/1897/README.md)                               |        | Easy   |             |      |
| 1898 | [Maximum Number of Removable Characters](./problems/1800-1899/1898/README.md)                                          |        | Medium |             |      |
| 1899 | [Merge Triplets to Form Target Triplet](./problems/1800-1899/1899/README.md)                                           |        | Medium |             |      |
| 1900 | [The Earliest and Latest Rounds Where Players Compete](./problems/1900-1999/1900/README.md)                            |        | Hard   |             |      |
| 1901 | [Find a Peak Element II](./problems/1900-1999/1901/README.md)                                                          |        | Medium |             |      |
| 1902 | [Depth of BST Given Insertion Order](./problems/1900-1999/1902/README.md)                                              | :lock: | Medium |             |      |
| 1903 | [Largest Odd Number in String](./problems/1900-1999/1903/README.md)                                                    |        | Easy   |             |      |
| 1904 | [The Number of Full Rounds You Have Played](./problems/1900-1999/1904/README.md)                                       |        | Medium |             |      |
| 1905 | [Count Sub Islands](./problems/1900-1999/1905/README.md)                                                               |        | Medium |             |      |
| 1906 | [Minimum Absolute Difference Queries](./problems/1900-1999/1906/README.md)                                             |        | Medium |             |      |
| 1907 | [Count Salary Categories](./problems/1900-1999/1907/README.md)                                                         | :lock: | Medium |             |      |
| 1908 | [Game of Nim](./problems/1900-1999/1908/README.md)                                                                     | :lock: | Medium |             |      |
| 1909 | [Remove One Element to Make the Array Strictly Increasing](./problems/1900-1999/1909/README.md)                        |        | Easy   |             |      |
| 1910 | [Remove All Occurrences of a Substring](./problems/1900-1999/1910/README.md)                                           |        | Medium |             |      |
| 1911 | [Maximum Alternating Subsequence Sum](./problems/1900-1999/1911/README.md)                                             |        | Medium |             |      |
| 1912 | [Design Movie Rental System](./problems/1900-1999/1912/README.md)                                                      |        | Hard   |             |      |
| 1913 | [Maximum Product Difference Between Two Pairs](./problems/1900-1999/1913/README.md)                                    |        | Easy   |             |      |
| 1914 | [Cyclically Rotating a Grid](./problems/1900-1999/1914/README.md)                                                      |        | Medium |             |      |
| 1915 | [Number of Wonderful Substrings](./problems/1900-1999/1915/README.md)                                                  |        | Medium |             |      |
| 1916 | [1916](./problems/1900-1999/1916/README.md)                                                                            |        | Easy   |             |      |
| 1917 | [Leetcodify Friends Recommendations](./problems/1900-1999/1917/README.md)                                              | :lock: | Hard   |             |      |
| 1918 | [Kth Smallest Subarray Sum](./problems/1900-1999/1918/README.md)                                                       | :lock: | Medium |             |      |
| 1919 | [Leetcodify Similar Friends](./problems/1900-1999/1919/README.md)                                                      | :lock: | Hard   |             |      |
| 1920 | [Build Array from Permutation](./problems/1900-1999/1920/README.md)                                                    |        | Easy   |             |      |
| 1921 | [Eliminate Maximum Number of Monsters](./problems/1900-1999/1921/README.md)                                            |        | Medium |             |      |
| 1922 | [Count Good Numbers](./problems/1900-1999/1922/README.md)                                                              |        | Medium |             |      |
| 1923 | [Longest Common Subpath](./problems/1900-1999/1923/README.md)                                                          |        | Hard   |             |      |
| 1924 | [Erect the Fence II](./problems/1900-1999/1924/README.md)                                                              | :lock: | Hard   |             |      |
| 1925 | [Count Square Sum Triples](./problems/1900-1999/1925/README.md)                                                        |        | Easy   |             |      |
| 1926 | [Nearest Exit from Entrance in Maze](./problems/1900-1999/1926/README.md)                                              |        | Medium |             |      |
| 1927 | [Sum Game](./problems/1900-1999/1927/README.md)                                                                        |        | Medium |             |      |
| 1928 | [Minimum Cost to Reach Destination in Time](./problems/1900-1999/1928/README.md)                                       |        | Hard   |             |      |
| 1929 | [Concatenation of Array](./problems/1900-1999/1929/README.md)                                                          |        | Easy   |             |      |
| 1930 | [Unique Length-3 Palindromic Subsequences](./problems/1900-1999/1930/README.md)                                        |        | Medium |             |      |
| 1931 | [Painting a Grid With Three Different Colors](./problems/1900-1999/1931/README.md)                                     |        | Hard   |             |      |
| 1932 | [Merge BSTs to Create Single BST](./problems/1900-1999/1932/README.md)                                                 |        | Hard   |             |      |
| 1933 | [Check if String Is Decomposable Into Value-Equal Substrings](./problems/1900-1999/1933/README.md)                     | :lock: | Easy   |             |      |
| 1934 | [Confirmation Rate](./problems/1900-1999/1934/README.md)                                                               | :lock: | Medium |             |      |
| 1935 | [1935](./problems/1900-1999/1935/README.md)                                                                            |        | Easy   |             |      |
| 1936 | [Add Minimum Number of Rungs](./problems/1900-1999/1936/README.md)                                                     |        | Medium |             |      |
| 1937 | [Maximum Number of Points with Cost](./problems/1900-1999/1937/README.md)                                              |        | Medium |             |      |
| 1938 | [Maximum Genetic Difference Query](./problems/1900-1999/1938/README.md)                                                |        | Hard   |             |      |
| 1939 | [Users That Actively Request Confirmation Messages](./problems/1900-1999/1939/README.md)                               | :lock: | Easy   |             |      |
| 1940 | [Longest Common Subsequence Between Sorted Arrays](./problems/1900-1999/1940/README.md)                                | :lock: | Medium |             |      |
| 1941 | [Check if All Characters Have Equal Number of Occurrences](./problems/1900-1999/1941/README.md)                        |        | Easy   |             |      |
| 1942 | [The Number of the Smallest Unoccupied Chair](./problems/1900-1999/1942/README.md)                                     |        | Medium |             |      |
| 1943 | [Describe the Painting](./problems/1900-1999/1943/README.md)                                                           |        | Medium |             |      |
| 1944 | [1944](./problems/1900-1999/1944/README.md)                                                                            |        | Easy   |             |      |
| 1945 | [Sum of Digits of String After Convert](./problems/1900-1999/1945/README.md)                                           |        | Easy   |             |      |
| 1946 | [Largest Number After Mutating Substring](./problems/1900-1999/1946/README.md)                                         |        | Medium |             |      |
| 1947 | [Maximum Compatibility Score Sum](./problems/1900-1999/1947/README.md)                                                 |        | Medium |             |      |
| 1948 | [Delete Duplicate Folders in System](./problems/1900-1999/1948/README.md)                                              |        | Hard   |             |      |
| 1949 | [Strong Friendship](./problems/1900-1999/1949/README.md)                                                               | :lock: | Medium |             |      |
| 1950 | [Maximum of Minimum Values in All Subarrays](./problems/1900-1999/1950/README.md)                                      | :lock: | Medium |             |      |
| 1951 | [All the Pairs With the Maximum Number of Common Followers](./problems/1900-1999/1951/README.md)                       | :lock: | Medium |             |      |
| 1952 | [Three Divisors](./problems/1900-1999/1952/README.md)                                                                  |        | Easy   |             |      |
| 1953 | [Maximum Number of Weeks for Which You Can Work](./problems/1900-1999/1953/README.md)                                  |        | Medium |             |      |
| 1954 | [1954](./problems/1900-1999/1954/README.md)                                                                            |        | Easy   |             |      |
| 1955 | [Count Number of Special Subsequences](./problems/1900-1999/1955/README.md)                                            |        | Hard   |             |      |
| 1956 | [Minimum Time For K Virus Variants to Spread](./problems/1900-1999/1956/README.md)                                     | :lock: | Hard   |             |      |
| 1957 | [1957](./problems/1900-1999/1957/README.md)                                                                            |        | Easy   |             |      |
| 1958 | [Check if Move is Legal](./problems/1900-1999/1958/README.md)                                                          |        | Medium |             |      |
| 1959 | [Minimum Total Space Wasted With K Resizing Operations](./problems/1900-1999/1959/README.md)                           |        | Medium |             |      |
| 1960 | [1960](./problems/1900-1999/1960/README.md)                                                                            |        | Easy   |             |      |
| 1961 | [Check If String Is a Prefix of Array](./problems/1900-1999/1961/README.md)                                            |        | Easy   |             |      |
| 1962 | [Remove Stones to Minimize the Total](./problems/1900-1999/1962/README.md)                                             |        | Medium |             |      |
| 1963 | [Minimum Number of Swaps to Make the String Balanced](./problems/1900-1999/1963/README.md)                             |        | Medium |             |      |
| 1964 | [Find the Longest Valid Obstacle Course at Each Position](./problems/1900-1999/1964/README.md)                         |        | Hard   |             |      |
| 1965 | [Employees With Missing Information](./problems/1900-1999/1965/README.md)                                              | :lock: | Easy   |             |      |
| 1966 | [Binary Searchable Numbers in an Unsorted Array](./problems/1900-1999/1966/README.md)                                  | :lock: | Medium |             |      |
| 1967 | [Number of Strings That Appear as Substrings in Word](./problems/1900-1999/1967/README.md)                             |        | Easy   |             |      |
| 1968 | [Array With Elements Not Equal to Average of Neighbors](./problems/1900-1999/1968/README.md)                           |        | Medium |             |      |
| 1969 | [Minimum Non-Zero Product of the Array Elements](./problems/1900-1999/1969/README.md)                                  |        | Medium |             |      |
| 1970 | [Last Day Where You Can Still Cross](./problems/1900-1999/1970/README.md)                                              |        | Hard   |             |      |
| 1971 | [Find if Path Exists in Graph](./problems/1900-1999/1971/README.md)                                                    |        | Easy   |             |      |
| 1972 | [First and Last Call On the Same Day](./problems/1900-1999/1972/README.md)                                             | :lock: | Hard   |             |      |
| 1973 | [Count Nodes Equal to Sum of Descendants](./problems/1900-1999/1973/README.md)                                         | :lock: | Medium |             |      |
| 1974 | [Minimum Time to Type Word Using Special Typewriter](./problems/1900-1999/1974/README.md)                              |        | Easy   |             |      |
| 1975 | [Maximum Matrix Sum](./problems/1900-1999/1975/README.md)                                                              |        | Medium |             |      |
| 1976 | [Number of Ways to Arrive at Destination](./problems/1900-1999/1976/README.md)                                         |        | Medium |             |      |
| 1977 | [Number of Ways to Separate Numbers](./problems/1900-1999/1977/README.md)                                              |        | Hard   |             |      |
| 1978 | [Employees Whose Manager Left the Company](./problems/1900-1999/1978/README.md)                                        | :lock: | Easy   |             |      |
| 1979 | [Find Greatest Common Divisor of Array](./problems/1900-1999/1979/README.md)                                           |        | Easy   |             |      |
| 1980 | [Find Unique Binary String](./problems/1900-1999/1980/README.md)                                                       |        | Medium |             |      |
| 1981 | [Minimize the Difference Between Target and Chosen Elements](./problems/1900-1999/1981/README.md)                      |        | Medium |             |      |
| 1982 | [Find Array Given Subset Sums](./problems/1900-1999/1982/README.md)                                                    |        | Hard   |             |      |
| 1983 | [1983](./problems/1900-1999/1983/README.md)                                                                            |        | Easy   |             |      |
| 1984 | [Minimum Difference Between Highest and Lowest of K Scores](./problems/1900-1999/1984/README.md)                       |        | Easy   |             |      |
| 1985 | [Find the Kth Largest Integer in the Array](./problems/1900-1999/1985/README.md)                                       |        | Medium |             |      |
| 1986 | [Minimum Number of Work Sessions to Finish the Tasks](./problems/1900-1999/1986/README.md)                             |        | Medium |             |      |
| 1987 | [Number of Unique Good Subsequences](./problems/1900-1999/1987/README.md)                                              |        | Hard   |             |      |
| 1988 | [Find Cutoff Score for Each School](./problems/1900-1999/1988/README.md)                                               | :lock: | Medium |             |      |
| 1989 | [Maximum Number of People That Can Be Caught in Tag](./problems/1900-1999/1989/README.md)                              | :lock: | Medium |             |      |
| 1990 | [Count the Number of Experiments](./problems/1900-1999/1990/README.md)                                                 | :lock: | Medium |             |      |
| 1991 | [Find the Middle Index in Array](./problems/1900-1999/1991/README.md)                                                  |        | Easy   |             |      |
| 1992 | [Find All Groups of Farmland](./problems/1900-1999/1992/README.md)                                                     |        | Medium |             |      |
| 1993 | [Operations on Tree](./problems/1900-1999/1993/README.md)                                                              |        | Medium |             |      |
| 1994 | [The Number of Good Subsets](./problems/1900-1999/1994/README.md)                                                      |        | Hard   |             |      |
| 1995 | [Count Special Quadruplets](./problems/1900-1999/1995/README.md)                                                       |        | Easy   |             |      |
| 1996 | [The Number of Weak Characters in the Game](./problems/1900-1999/1996/README.md)                                       |        | Medium |             |      |
| 1997 | [First Day Where You Have Been in All the Rooms](./problems/1900-1999/1997/README.md)                                  |        | Medium |             |      |
| 1998 | [GCD Sort of an Array](./problems/1900-1999/1998/README.md)                                                            |        | Hard   |             |      |
| 1999 | [Smallest Greater Multiple Made of Two Digits](./problems/1900-1999/1999/README.md)                                    | :lock: | Medium |             |      |
| 2000 | [Reverse Prefix of Word](./problems/2000-2099/2000/README.md)                                                          |        | Easy   |             |      |
| 2001 | [Number of Pairs of Interchangeable Rectangles](./problems/2000-2099/2001/README.md)                                   |        | Medium |             |      |
| 2002 | [Maximum Product of the Length of Two Palindromic Subsequences](./problems/2000-2099/2002/README.md)                   |        | Medium |             |      |
| 2003 | [Smallest Missing Genetic Value in Each Subtree](./problems/2000-2099/2003/README.md)                                  |        | Hard   |             |      |
| 2004 | [The Number of Seniors and Juniors to Join the Company](./problems/2000-2099/2004/README.md)                           | :lock: | Hard   |             |      |
| 2005 | [Subtree Removal Game with Fibonacci Tree](./problems/2000-2099/2005/README.md)                                        | :lock: | Hard   |             |      |
| 2006 | [Count Number of Pairs With Absolute Difference K](./problems/2000-2099/2006/README.md)                                |        | Easy   |             |      |
| 2007 | [Find Original Array From Doubled Array](./problems/2000-2099/2007/README.md)                                          |        | Medium |             |      |
| 2008 | [Maximum Earnings From Taxi](./problems/2000-2099/2008/README.md)                                                      |        | Medium |             |      |
| 2009 | [Minimum Number of Operations to Make Array Continuous](./problems/2000-2099/2009/README.md)                           |        | Hard   |             |      |
| 2010 | [The Number of Seniors and Juniors to Join the Company II](./problems/2000-2099/2010/README.md)                        | :lock: | Hard   |             |      |
| 2011 | [Final Value of Variable After Performing Operations](./problems/2000-2099/2011/README.md)                             |        | Easy   |             |      |
| 2012 | [Sum of Beauty in the Array](./problems/2000-2099/2012/README.md)                                                      |        | Medium |             |      |
| 2013 | [Detect Squares](./problems/2000-2099/2013/README.md)                                                                  |        | Medium |             |      |
| 2014 | [Longest Subsequence Repeated k Times](./problems/2000-2099/2014/README.md)                                            |        | Hard   |             |      |
| 2015 | [Average Height of Buildings in Each Segment](./problems/2000-2099/2015/README.md)                                     | :lock: | Medium |             |      |
| 2016 | [Maximum Difference Between Increasing Elements](./problems/2000-2099/2016/README.md)                                  |        | Easy   |             |      |
| 2017 | [Grid Game](./problems/2000-2099/2017/README.md)                                                                       |        | Medium |             |      |
| 2018 | [Check if Word Can Be Placed In Crossword](./problems/2000-2099/2018/README.md)                                        |        | Medium |             |      |
| 2019 | [The Score of Students Solving Math Expression](./problems/2000-2099/2019/README.md)                                   |        | Hard   |             |      |
| 2020 | [Number of Accounts That Did Not Stream](./problems/2000-2099/2020/README.md)                                          | :lock: | Medium |             |      |
| 2021 | [Brightest Position on Street](./problems/2000-2099/2021/README.md)                                                    | :lock: | Medium |             |      |
| 2022 | [Convert 1D Array Into 2D Array](./problems/2000-2099/2022/README.md)                                                  |        | Easy   |             |      |
| 2023 | [Number of Pairs of Strings With Concatenation Equal to Target](./problems/2000-2099/2023/README.md)                   |        | Medium |             |      |
| 2024 | [Maximize the Confusion of an Exam](./problems/2000-2099/2024/README.md)                                               |        | Medium |             |      |
| 2025 | [Maximum Number of Ways to Partition an Array](./problems/2000-2099/2025/README.md)                                    |        | Hard   |             |      |
| 2026 | [Low-Quality Problems](./problems/2000-2099/2026/README.md)                                                            | :lock: | Easy   |             |      |
| 2027 | [Minimum Moves to Convert String](./problems/2000-2099/2027/README.md)                                                 |        | Easy   |             |      |
| 2028 | [Find Missing Observations](./problems/2000-2099/2028/README.md)                                                       |        | Medium |             |      |
| 2029 | [Stone Game IX](./problems/2000-2099/2029/README.md)                                                                   |        | Medium |             |      |
| 2030 | [Smallest K-Length Subsequence With Occurrences of a Letter](./problems/2000-2099/2030/README.md)                      |        | Hard   |             |      |
| 2031 | [2031](./problems/2000-2099/2031/README.md)                                                                            |        | Easy   |             |      |
| 2032 | [Two Out of Three](./problems/2000-2099/2032/README.md)                                                                |        | Easy   |             |      |
| 2033 | [Minimum Operations to Make a Uni-Value Grid](./problems/2000-2099/2033/README.md)                                     |        | Medium |             |      |
| 2034 | [Stock Price Fluctuation](./problems/2000-2099/2034/README.md)                                                         |        | Medium |             |      |
| 2035 | [Partition Array Into Two Arrays to Minimize Sum Difference](./problems/2000-2099/2035/README.md)                      |        | Hard   |             |      |
| 2036 | [2036](./problems/2000-2099/2036/README.md)                                                                            |        | Easy   |             |      |
| 2037 | [Minimum Number of Moves to Seat Everyone](./problems/2000-2099/2037/README.md)                                        |        | Easy   |             |      |
| 2038 | [Remove Colored Pieces if Both Neighbors are the Same Color](./problems/2000-2099/2038/README.md)                      |        | Medium |             |      |
| 2039 | [The Time When the Network Becomes Idle](./problems/2000-2099/2039/README.md)                                          |        | Medium |             |      |
| 2040 | [Kth Smallest Product of Two Sorted Arrays](./problems/2000-2099/2040/README.md)                                       |        | Hard   |             |      |
| 2041 | [Accepted Candidates From the Interviews](./problems/2000-2099/2041/README.md)                                         | :lock: | Medium |             |      |
| 2042 | [Check if Numbers Are Ascending in a Sentence](./problems/2000-2099/2042/README.md)                                    |        | Easy   |             |      |
| 2043 | [Simple Bank System](./problems/2000-2099/2043/README.md)                                                              |        | Medium |             |      |
| 2044 | [Count Number of Maximum Bitwise-OR Subsets](./problems/2000-2099/2044/README.md)                                      |        | Medium |             |      |
| 2045 | [Second Minimum Time to Reach Destination](./problems/2000-2099/2045/README.md)                                        |        | Hard   |             |      |
| 2046 | [Sort Linked List Already Sorted Using Absolute Values](./problems/2000-2099/2046/README.md)                           | :lock: | Medium |             |      |
| 2047 | [Number of Valid Words in a Sentence](./problems/2000-2099/2047/README.md)                                             |        | Easy   |             |      |
| 2048 | [Next Greater Numerically Balanced Number](./problems/2000-2099/2048/README.md)                                        |        | Medium |             |      |
| 2049 | [Count Nodes With the Highest Score](./problems/2000-2099/2049/README.md)                                              |        | Medium |             |      |
| 2050 | [Parallel Courses III](./problems/2000-2099/2050/README.md)                                                            |        | Hard   |             |      |
| 2051 | [The Category of Each Member in the Store](./problems/2000-2099/2051/README.md)                                        | :lock: | Medium |             |      |
| 2052 | [Minimum Cost to Separate Sentence Into Rows](./problems/2000-2099/2052/README.md)                                     | :lock: | Medium |             |      |
| 2053 | [Kth Distinct String in an Array](./problems/2000-2099/2053/README.md)                                                 |        | Easy   |             |      |
| 2054 | [Two Best Non-Overlapping Events](./problems/2000-2099/2054/README.md)                                                 |        | Medium |             |      |
| 2055 | [Plates Between Candles](./problems/2000-2099/2055/README.md)                                                          |        | Medium |             |      |
| 2056 | [Number of Valid Move Combinations On Chessboard](./problems/2000-2099/2056/README.md)                                 |        | Hard   |             |      |
| 2057 | [Smallest Index With Equal Value](./problems/2000-2099/2057/README.md)                                                 |        | Easy   |             |      |
| 2058 | [Find the Minimum and Maximum Number of Nodes Between Critical Points](./problems/2000-2099/2058/README.md)            |        | Medium |             |      |
| 2059 | [Minimum Operations to Convert Number](./problems/2000-2099/2059/README.md)                                            |        | Medium |             |      |
| 2060 | [Check if an Original String Exists Given Two Encoded Strings](./problems/2000-2099/2060/README.md)                    |        | Hard   |             |      |
| 2061 | [Number of Spaces Cleaning Robot Cleaned](./problems/2000-2099/2061/README.md)                                         | :lock: | Medium |             |      |
| 2062 | [Count Vowel Substrings of a String](./problems/2000-2099/2062/README.md)                                              |        | Easy   |             |      |
| 2063 | [Vowels of All Substrings](./problems/2000-2099/2063/README.md)                                                        |        | Medium |             |      |
| 2064 | [Minimized Maximum of Products Distributed to Any Store](./problems/2000-2099/2064/README.md)                          |        | Medium |             |      |
| 2065 | [Maximum Path Quality of a Graph](./problems/2000-2099/2065/README.md)                                                 |        | Hard   |             |      |
| 2066 | [Account Balance](./problems/2000-2099/2066/README.md)                                                                 | :lock: | Medium |             |      |
| 2067 | [Number of Equal Count Substrings](./problems/2000-2099/2067/README.md)                                                | :lock: | Medium |             |      |
| 2068 | [Check Whether Two Strings are Almost Equivalent](./problems/2000-2099/2068/README.md)                                 |        | Easy   |             |      |
| 2069 | [Walking Robot Simulation II](./problems/2000-2099/2069/README.md)                                                     |        | Medium |             |      |
| 2070 | [Most Beautiful Item for Each Query](./problems/2000-2099/2070/README.md)                                              |        | Medium |             |      |
| 2071 | [Maximum Number of Tasks You Can Assign](./problems/2000-2099/2071/README.md)                                          |        | Hard   |             |      |
| 2072 | [The Winner University](./problems/2000-2099/2072/README.md)                                                           | :lock: | Easy   |             |      |
| 2073 | [Time Needed to Buy Tickets](./problems/2000-2099/2073/README.md)                                                      |        | Easy   |             |      |
| 2074 | [Reverse Nodes in Even Length Groups](./problems/2000-2099/2074/README.md)                                             |        | Medium |             |      |
| 2075 | [Decode the Slanted Ciphertext](./problems/2000-2099/2075/README.md)                                                   |        | Medium |             |      |
| 2076 | [Process Restricted Friend Requests](./problems/2000-2099/2076/README.md)                                              |        | Hard   |             |      |
| 2077 | [Paths in Maze That Lead to Same Room](./problems/2000-2099/2077/README.md)                                            | :lock: | Medium |             |      |
| 2078 | [Two Furthest Houses With Different Colors](./problems/2000-2099/2078/README.md)                                       |        | Easy   |             |      |
| 2079 | [2079](./problems/2000-2099/2079/README.md)                                                                            |        | Easy   |             |      |
| 2080 | [2080](./problems/2000-2099/2080/README.md)                                                                            |        | Easy   |             |      |
| 2081 | [Sum of k-Mirror Numbers](./problems/2000-2099/2081/README.md)                                                         |        | Hard   |             |      |
| 2082 | [The Number of Rich Customers](./problems/2000-2099/2082/README.md)                                                    | :lock: | Easy   |             |      |
| 2083 | [Substrings That Begin and End With the Same Letter](./problems/2000-2099/2083/README.md)                              | :lock: | Medium |             |      |
| 2084 | [Drop Type 1 Orders for Customers With Type 0 Orders](./problems/2000-2099/2084/README.md)                             | :lock: | Medium |             |      |
| 2085 | [Count Common Words With One Occurrence](./problems/2000-2099/2085/README.md)                                          |        | Easy   |             |      |
| 2086 | [Minimum Number of Food Buckets to Feed the Hamsters](./problems/2000-2099/2086/README.md)                             |        | Medium |             |      |
| 2087 | [Minimum Cost Homecoming of a Robot in a Grid](./problems/2000-2099/2087/README.md)                                    |        | Medium |             |      |
| 2088 | [Count Fertile Pyramids in a Land](./problems/2000-2099/2088/README.md)                                                |        | Hard   |             |      |
| 2089 | [Find Target Indices After Sorting Array](./problems/2000-2099/2089/README.md)                                         |        | Easy   |             |      |
| 2090 | [K Radius Subarray Averages](./problems/2000-2099/2090/README.md)                                                      |        | Medium |             |      |
| 2091 | [Removing Minimum and Maximum From Array](./problems/2000-2099/2091/README.md)                                         |        | Medium |             |      |
| 2092 | [Find All People With Secret](./problems/2000-2099/2092/README.md)                                                     |        | Hard   |             |      |
| 2093 | [Minimum Cost to Reach City With Discounts](./problems/2000-2099/2093/README.md)                                       | :lock: | Medium |             |      |
| 2094 | [Finding 3-Digit Even Numbers](./problems/2000-2099/2094/README.md)                                                    |        | Easy   |             |      |
| 2095 | [Delete the Middle Node of a Linked List](./problems/2000-2099/2095/README.md)                                         |        | Medium |             |      |
| 2096 | [Step-By-Step Directions From a Binary Tree Node to Another](./problems/2000-2099/2096/README.md)                      |        | Medium |             |      |
| 2097 | [Valid Arrangement of Pairs](./problems/2000-2099/2097/README.md)                                                      |        | Hard   |             |      |
| 2098 | [Subsequence of Size K With the Largest Even Sum](./problems/2000-2099/2098/README.md)                                 | :lock: | Medium |             |      |
| 2099 | [Find Subsequence of Length K With the Largest Sum](./problems/2000-2099/2099/README.md)                               |        | Easy   |             |      |
| 2100 | [Find Good Days to Rob the Bank](./problems/2100-2199/2100/README.md)                                                  |        | Medium |             |      |
| 2101 | [Detonate the Maximum Bombs](./problems/2100-2199/2101/README.md)                                                      |        | Medium |             |      |
| 2102 | [Sequentially Ordinal Rank Tracker](./problems/2100-2199/2102/README.md)                                               |        | Hard   |             |      |
| 2103 | [Rings and Rods](./problems/2100-2199/2103/README.md)                                                                  |        | Easy   |             |      |
| 2104 | [Sum of Subarray Ranges](./problems/2100-2199/2104/README.md)                                                          |        | Medium |             |      |
| 2105 | [Watering Plants II](./problems/2100-2199/2105/README.md)                                                              |        | Medium |             |      |
| 2106 | [Maximum Fruits Harvested After at Most K Steps](./problems/2100-2199/2106/README.md)                                  |        | Hard   |             |      |
| 2107 | [Number of Unique Flavors After Sharing K Candies](./problems/2100-2199/2107/README.md)                                | :lock: | Medium |             |      |
| 2108 | [Find First Palindromic String in the Array](./problems/2100-2199/2108/README.md)                                      |        | Easy   |             |      |
| 2109 | [Adding Spaces to a String](./problems/2100-2199/2109/README.md)                                                       |        | Medium |             |      |
| 2110 | [Number of Smooth Descent Periods of a Stock](./problems/2100-2199/2110/README.md)                                     |        | Medium |             |      |
| 2111 | [Minimum Operations to Make the Array K-Increasing](./problems/2100-2199/2111/README.md)                               |        | Hard   |             |      |
| 2112 | [The Airport With the Most Traffic](./problems/2100-2199/2112/README.md)                                               | :lock: | Medium |             |      |
| 2113 | [Elements in Array After Removing and Replacing Elements](./problems/2100-2199/2113/README.md)                         | :lock: | Medium |             |      |
| 2114 | [Maximum Number of Words Found in Sentences](./problems/2100-2199/2114/README.md)                                      |        | Easy   |             |      |
| 2115 | [Find All Possible Recipes from Given Supplies](./problems/2100-2199/2115/README.md)                                   |        | Medium |             |      |
| 2116 | [Check if a Parentheses String Can Be Valid](./problems/2100-2199/2116/README.md)                                      |        | Medium |             |      |
| 2117 | [Abbreviating the Product of a Range](./problems/2100-2199/2117/README.md)                                             |        | Hard   |             |      |
| 2118 | [Build the Equation](./problems/2100-2199/2118/README.md)                                                              | :lock: | Hard   |             |      |
| 2119 | [A Number After a Double Reversal](./problems/2100-2199/2119/README.md)                                                |        | Easy   |             |      |
| 2120 | [Execution of All Suffix Instructions Staying in a Grid](./problems/2100-2199/2120/README.md)                          |        | Medium |             |      |
| 2121 | [Intervals Between Identical Elements](./problems/2100-2199/2121/README.md)                                            |        | Medium |             |      |
| 2122 | [Recover the Original Array](./problems/2100-2199/2122/README.md)                                                      |        | Hard   |             |      |
| 2123 | [Minimum Operations to Remove Adjacent Ones in Matrix](./problems/2100-2199/2123/README.md)                            | :lock: | Hard   |             |      |
| 2124 | [Check if All A's Appears Before All B's](./problems/2100-2199/2124/README.md)                                         |        | Easy   |             |      |
| 2125 | [Number of Laser Beams in a Bank](./problems/2100-2199/2125/README.md)                                                 |        | Medium |             |      |
| 2126 | [Destroying Asteroids](./problems/2100-2199/2126/README.md)                                                            |        | Medium |             |      |
| 2127 | [Maximum Employees to Be Invited to a Meeting](./problems/2100-2199/2127/README.md)                                    |        | Hard   |             |      |
| 2128 | [Remove All Ones With Row and Column Flips](./problems/2100-2199/2128/README.md)                                       | :lock: | Medium |             |      |
| 2129 | [Capitalize the Title](./problems/2100-2199/2129/README.md)                                                            |        | Easy   |             |      |
| 2130 | [Maximum Twin Sum of a Linked List](./problems/2100-2199/2130/README.md)                                               |        | Medium |             |      |
| 2131 | [Longest Palindrome by Concatenating Two Letter Words](./problems/2100-2199/2131/README.md)                            |        | Medium |             |      |
| 2132 | [Stamping the Grid](./problems/2100-2199/2132/README.md)                                                               |        | Hard   |             |      |
| 2133 | [Check if Every Row and Column Contains All Numbers](./problems/2100-2199/2133/README.md)                              |        | Easy   |             |      |
| 2134 | [Minimum Swaps to Group All 1's Together II](./problems/2100-2199/2134/README.md)                                      |        | Medium |             |      |
| 2135 | [Count Words Obtained After Adding a Letter](./problems/2100-2199/2135/README.md)                                      |        | Medium |             |      |
| 2136 | [Earliest Possible Day of Full Bloom](./problems/2100-2199/2136/README.md)                                             |        | Hard   |             |      |
| 2137 | [Pour Water Between Buckets to Make Water Levels Equal](./problems/2100-2199/2137/README.md)                           | :lock: | Medium |             |      |
| 2138 | [Divide a String Into Groups of Size k](./problems/2100-2199/2138/README.md)                                           |        | Easy   |             |      |
| 2139 | [2139](./problems/2100-2199/2139/README.md)                                                                            |        | Easy   |             |      |
| 2140 | [Solving Questions With Brainpower](./problems/2100-2199/2140/README.md)                                               |        | Medium |             |      |
| 2141 | [Maximum Running Time of N Computers](./problems/2100-2199/2141/README.md)                                             |        | Hard   |             |      |
| 2142 | [The Number of Passengers in Each Bus I](./problems/2100-2199/2142/README.md)                                          | :lock: | Medium |             |      |
| 2143 | [Choose Numbers From Two Arrays in Range](./problems/2100-2199/2143/README.md)                                         | :lock: | Hard   |             |      |
| 2144 | [Minimum Cost of Buying Candies With Discount](./problems/2100-2199/2144/README.md)                                    |        | Easy   |             |      |
| 2145 | [Count the Hidden Sequences](./problems/2100-2199/2145/README.md)                                                      |        | Medium |             |      |
| 2146 | [K Highest Ranked Items Within a Price Range](./problems/2100-2199/2146/README.md)                                     |        | Medium |             |      |
| 2147 | [Number of Ways to Divide a Long Corridor](./problems/2100-2199/2147/README.md)                                        |        | Hard   |             |      |
| 2148 | [Count Elements With Strictly Smaller and Greater Elements ](./problems/2100-2199/2148/README.md)                      |        | Easy   |             |      |
| 2149 | [Rearrange Array Elements by Sign](./problems/2100-2199/2149/README.md)                                                |        | Medium |             |      |
| 2150 | [Find All Lonely Numbers in the Array](./problems/2100-2199/2150/README.md)                                            |        | Medium |             |      |
| 2151 | [Maximum Good People Based on Statements](./problems/2100-2199/2151/README.md)                                         |        | Hard   |             |      |
| 2152 | [Minimum Number of Lines to Cover Points](./problems/2100-2199/2152/README.md)                                         | :lock: | Medium |             |      |
| 2153 | [The Number of Passengers in Each Bus II](./problems/2100-2199/2153/README.md)                                         | :lock: | Hard   |             |      |
| 2154 | [Keep Multiplying Found Values by Two](./problems/2100-2199/2154/README.md)                                            |        | Easy   |             |      |
| 2155 | [All Divisions With the Highest Score of a Binary Array](./problems/2100-2199/2155/README.md)                          |        | Medium |             |      |
| 2156 | [Find Substring With Given Hash Value](./problems/2100-2199/2156/README.md)                                            |        | Hard   |             |      |
| 2157 | [Groups of Strings](./problems/2100-2199/2157/README.md)                                                               |        | Hard   |             |      |
| 2158 | [Amount of New Area Painted Each Day](./problems/2100-2199/2158/README.md)                                             | :lock: | Hard   |             |      |
| 2159 | [Order Two Columns Independently](./problems/2100-2199/2159/README.md)                                                 | :lock: | Medium |             |      |
| 2160 | [Minimum Sum of Four Digit Number After Splitting Digits](./problems/2100-2199/2160/README.md)                         |        | Easy   |             |      |
| 2161 | [Partition Array According to Given Pivot](./problems/2100-2199/2161/README.md)                                        |        | Medium |             |      |
| 2162 | [Minimum Cost to Set Cooking Time](./problems/2100-2199/2162/README.md)                                                |        | Medium |             |      |
| 2163 | [Minimum Difference in Sums After Removal of Elements](./problems/2100-2199/2163/README.md)                            |        | Hard   |             |      |
| 2164 | [Sort Even and Odd Indices Independently](./problems/2100-2199/2164/README.md)                                         |        | Easy   |             |      |
| 2165 | [Smallest Value of the Rearranged Number](./problems/2100-2199/2165/README.md)                                         |        | Medium |             |      |
| 2166 | [Design Bitset](./problems/2100-2199/2166/README.md)                                                                   |        | Medium |             |      |
| 2167 | [Minimum Time to Remove All Cars Containing Illegal Goods](./problems/2100-2199/2167/README.md)                        |        | Hard   |             |      |
| 2168 | [Unique Substrings With Equal Digit Frequency](./problems/2100-2199/2168/README.md)                                    | :lock: | Medium |             |      |
| 2169 | [Count Operations to Obtain Zero](./problems/2100-2199/2169/README.md)                                                 |        | Easy   |             |      |
| 2170 | [Minimum Operations to Make the Array Alternating](./problems/2100-2199/2170/README.md)                                |        | Medium |             |      |
| 2171 | [Removing Minimum Number of Magic Beans](./problems/2100-2199/2171/README.md)                                          |        | Medium |             |      |
| 2172 | [Maximum AND Sum of Array](./problems/2100-2199/2172/README.md)                                                        |        | Hard   |             |      |
| 2173 | [Longest Winning Streak](./problems/2100-2199/2173/README.md)                                                          | :lock: | Hard   |             |      |
| 2174 | [Remove All Ones With Row and Column Flips II](./problems/2100-2199/2174/README.md)                                    | :lock: | Medium |             |      |
| 2175 | [The Change in Global Rankings](./problems/2100-2199/2175/README.md)                                                   | :lock: | Medium |             |      |
| 2176 | [Count Equal and Divisible Pairs in an Array](./problems/2100-2199/2176/README.md)                                     |        | Easy   |             |      |
| 2177 | [Find Three Consecutive Integers That Sum to a Given Number](./problems/2100-2199/2177/README.md)                      |        | Medium |             |      |
| 2178 | [Maximum Split of Positive Even Integers](./problems/2100-2199/2178/README.md)                                         |        | Medium |             |      |
| 2179 | [Count Good Triplets in an Array](./problems/2100-2199/2179/README.md)                                                 |        | Hard   |             |      |
| 2180 | [Count Integers With Even Digit Sum](./problems/2100-2199/2180/README.md)                                              |        | Easy   |             |      |
| 2181 | [Merge Nodes in Between Zeros](./problems/2100-2199/2181/README.md)                                                    |        | Medium |             |      |
| 2182 | [Construct String With Repeat Limit](./problems/2100-2199/2182/README.md)                                              |        | Medium |             |      |
| 2183 | [Count Array Pairs Divisible by K](./problems/2100-2199/2183/README.md)                                                |        | Hard   |             |      |
| 2184 | [Number of Ways to Build Sturdy Brick Wall](./problems/2100-2199/2184/README.md)                                       | :lock: | Medium |             |      |
| 2185 | [Counting Words With a Given Prefix](./problems/2100-2199/2185/README.md)                                              |        | Easy   |             |      |
| 2186 | [Minimum Number of Steps to Make Two Strings Anagram II](./problems/2100-2199/2186/README.md)                          |        | Medium |             |      |
| 2187 | [Minimum Time to Complete Trips](./problems/2100-2199/2187/README.md)                                                  |        | Medium |             |      |
| 2188 | [Minimum Time to Finish the Race](./problems/2100-2199/2188/README.md)                                                 |        | Hard   |             |      |
| 2189 | [2189](./problems/2100-2199/2189/README.md)                                                                            |        | Easy   |             |      |
| 2190 | [Most Frequent Number Following Key In an Array](./problems/2100-2199/2190/README.md)                                  |        | Easy   |             |      |
| 2191 | [2191](./problems/2100-2199/2191/README.md)                                                                            |        | Easy   |             |      |
| 2192 | [2192](./problems/2100-2199/2192/README.md)                                                                            |        | Easy   |             |      |
| 2193 | [2193](./problems/2100-2199/2193/README.md)                                                                            |        | Easy   |             |      |
| 2194 | [Cells in a Range on an Excel Sheet](./problems/2100-2199/2194/README.md)                                              |        | Easy   |             |      |
| 2195 | [Append K Integers With Minimal Sum](./problems/2100-2199/2195/README.md)                                              |        | Medium |             |      |
| 2196 | [Create Binary Tree From Descriptions](./problems/2100-2199/2196/README.md)                                            |        | Medium |             |      |
| 2197 | [Replace Non-Coprime Numbers in Array](./problems/2100-2199/2197/README.md)                                            |        | Hard   |             |      |
| 2198 | [2198](./problems/2100-2199/2198/README.md)                                                                            |        | Easy   |             |      |
| 2199 | [Finding the Topic of Each Post](./problems/2100-2199/2199/README.md)                                                  | :lock: | Hard   |             |      |
| 2200 | [Find All K-Distant Indices in an Array](./problems/2200-2299/2200/README.md)                                          |        | Easy   |             |      |
| 2201 | [2201](./problems/2200-2299/2201/README.md)                                                                            |        | Easy   |             |      |
| 2202 | [2202](./problems/2200-2299/2202/README.md)                                                                            |        | Easy   |             |      |
| 2203 | [Minimum Weighted Subgraph With the Required Paths](./problems/2200-2299/2203/README.md)                               |        | Hard   |             |      |
| 2204 | [2204](./problems/2200-2299/2204/README.md)                                                                            |        | Easy   |             |      |
| 2205 | [The Number of Users That Are Eligible for Discount](./problems/2200-2299/2205/README.md)                              | :lock: | Easy   |             |      |
| 2206 | [Divide Array Into Equal Pairs](./problems/2200-2299/2206/README.md)                                                   |        | Easy   |             |      |
| 2207 | [Maximize Number of Subsequences in a String](./problems/2200-2299/2207/README.md)                                     |        | Medium |             |      |
| 2208 | [Minimum Operations to Halve Array Sum](./problems/2200-2299/2208/README.md)                                           |        | Medium |             |      |
| 2209 | [Minimum White Tiles After Covering With Carpets](./problems/2200-2299/2209/README.md)                                 |        | Hard   |             |      |
| 2210 | [Count Hills and Valleys in an Array](./problems/2200-2299/2210/README.md)                                             |        | Easy   |             |      |
| 2211 | [Count Collisions on a Road](./problems/2200-2299/2211/README.md)                                                      |        | Medium |             |      |
| 2212 | [Maximum Points in an Archery Competition](./problems/2200-2299/2212/README.md)                                        |        | Medium |             |      |
| 2213 | [Longest Substring of One Repeating Character](./problems/2200-2299/2213/README.md)                                    |        | Hard   |             |      |
| 2214 | [Minimum Health to Beat Game](./problems/2200-2299/2214/README.md)                                                     | :lock: | Medium |             |      |
| 2215 | [2215](./problems/2200-2299/2215/README.md)                                                                            |        | Easy   |             |      |
| 2216 | [2216](./problems/2200-2299/2216/README.md)                                                                            |        | Easy   |             |      |
| 2217 | [2217](./problems/2200-2299/2217/README.md)                                                                            |        | Easy   |             |      |
| 2218 | [2218](./problems/2200-2299/2218/README.md)                                                                            |        | Easy   |             |      |
| 2219 | [Maximum Sum Score of Array](./problems/2200-2299/2219/README.md)                                                      | :lock: | Medium |             |      |
| 2220 | [Minimum Bit Flips to Convert Number](./problems/2200-2299/2220/README.md)                                             |        | Easy   |             |      |
| 2221 | [Find Triangular Sum of an Array](./problems/2200-2299/2221/README.md)                                                 |        | Medium |             |      |
| 2222 | [Number of Ways to Select Buildings](./problems/2200-2299/2222/README.md)                                              |        | Medium |             |      |
| 2223 | [Sum of Scores of Built Strings](./problems/2200-2299/2223/README.md)                                                  |        | Hard   |             |      |
| 2224 | [Minimum Number of Operations to Convert Time](./problems/2200-2299/2224/README.md)                                    |        | Easy   |             |      |
| 2225 | [2225](./problems/2200-2299/2225/README.md)                                                                            |        | Easy   |             |      |
| 2226 | [2226](./problems/2200-2299/2226/README.md)                                                                            |        | Easy   |             |      |
| 2227 | [2227](./problems/2200-2299/2227/README.md)                                                                            |        | Easy   |             |      |
| 2228 | [Users With Two Purchases Within Seven Days](./problems/2200-2299/2228/README.md)                                      | :lock: | Medium |             |      |
| 2229 | [2229](./problems/2200-2299/2229/README.md)                                                                            |        | Easy   |             |      |
| 2230 | [The Users That Are Eligible for Discount](./problems/2200-2299/2230/README.md)                                        | :lock: | Easy   |             |      |
| 2231 | [Largest Number After Digit Swaps by Parity](./problems/2200-2299/2231/README.md)                                      |        | Easy   |             |      |
| 2232 | [Minimize Result by Adding Parentheses to Expression](./problems/2200-2299/2232/README.md)                             |        | Medium |             |      |
| 2233 | [Maximum Product After K Increments](./problems/2200-2299/2233/README.md)                                              |        | Medium |             |      |
| 2234 | [Maximum Total Beauty of the Gardens](./problems/2200-2299/2234/README.md)                                             |        | Hard   |             |      |
| 2235 | [Add Two Integers](./problems/2200-2299/2235/README.md)                                                                |        | Easy   |             |      |
| 2236 | [Root Equals Sum of Children](./problems/2200-2299/2236/README.md)                                                     |        | Easy   |             |      |
| 2237 | [Count Positions on Street With Required Brightness](./problems/2200-2299/2237/README.md)                              | :lock: | Medium |             |      |
| 2238 | [Number of Times a Driver Was a Passenger](./problems/2200-2299/2238/README.md)                                        | :lock: | Medium |             |      |
| 2239 | [Find Closest Number to Zero](./problems/2200-2299/2239/README.md)                                                     |        | Easy   |             |      |
| 2240 | [Number of Ways to Buy Pens and Pencils](./problems/2200-2299/2240/README.md)                                          |        | Medium |             |      |
| 2241 | [Design an ATM Machine](./problems/2200-2299/2241/README.md)                                                           |        | Medium |             |      |
| 2242 | [Maximum Score of a Node Sequence](./problems/2200-2299/2242/README.md)                                                |        | Hard   |             |      |
| 2243 | [Calculate Digit Sum of a String](./problems/2200-2299/2243/README.md)                                                 |        | Easy   |             |      |
| 2244 | [Minimum Rounds to Complete All Tasks](./problems/2200-2299/2244/README.md)                                            |        | Medium |             |      |
| 2245 | [Maximum Trailing Zeros in a Cornered Path](./problems/2200-2299/2245/README.md)                                       |        | Medium |             |      |
| 2246 | [Longest Path With Different Adjacent Characters](./problems/2200-2299/2246/README.md)                                 |        | Hard   |             |      |
| 2247 | [2247](./problems/2200-2299/2247/README.md)                                                                            |        | Easy   |             |      |
| 2248 | [Intersection of Multiple Arrays](./problems/2200-2299/2248/README.md)                                                 |        | Easy   |             |      |
| 2249 | [Count Lattice Points Inside a Circle](./problems/2200-2299/2249/README.md)                                            |        | Medium |             |      |
| 2250 | [Count Number of Rectangles Containing Each Point](./problems/2200-2299/2250/README.md)                                |        | Medium |             |      |
| 2251 | [Number of Flowers in Full Bloom](./problems/2200-2299/2251/README.md)                                                 |        | Hard   |             |      |
| 2252 | [Dynamic Pivoting of a Table](./problems/2200-2299/2252/README.md)                                                     | :lock: | Hard   |             |      |
| 2253 | [Dynamic Unpivoting of a Table](./problems/2200-2299/2253/README.md)                                                   | :lock: | Hard   |             |      |
| 2254 | [Design Video Sharing Platform](./problems/2200-2299/2254/README.md)                                                   | :lock: | Hard   |             |      |
| 2255 | [Count Prefixes of a Given String](./problems/2200-2299/2255/README.md)                                                |        | Easy   |             |      |
| 2256 | [Minimum Average Difference](./problems/2200-2299/2256/README.md)                                                      |        | Medium |             |      |
| 2257 | [Count Unguarded Cells in the Grid](./problems/2200-2299/2257/README.md)                                               |        | Medium |             |      |
| 2258 | [Escape the Spreading Fire](./problems/2200-2299/2258/README.md)                                                       |        | Hard   |             |      |
| 2259 | [Remove Digit From Number to Maximize Result](./problems/2200-2299/2259/README.md)                                     |        | Easy   |             |      |
| 2260 | [Minimum Consecutive Cards to Pick Up](./problems/2200-2299/2260/README.md)                                            |        | Medium |             |      |
| 2261 | [K Divisible Elements Subarrays](./problems/2200-2299/2261/README.md)                                                  |        | Medium |             |      |
| 2262 | [Total Appeal of A String](./problems/2200-2299/2262/README.md)                                                        |        | Hard   |             |      |
| 2263 | [2263](./problems/2200-2299/2263/README.md)                                                                            |        | Easy   |             |      |
| 2264 | [Largest 3-Same-Digit Number in String](./problems/2200-2299/2264/README.md)                                           |        | Easy   |             |      |
| 2265 | [Count Nodes Equal to Average of Subtree](./problems/2200-2299/2265/README.md)                                         |        | Medium |             |      |
| 2266 | [Count Number of Texts](./problems/2200-2299/2266/README.md)                                                           |        | Medium |             |      |
| 2267 | [ Check if There Is a Valid Parentheses String Path](./problems/2200-2299/2267/README.md)                              |        | Hard   |             |      |
| 2268 | [Minimum Number of Keypresses](./problems/2200-2299/2268/README.md)                                                    | :lock: | Medium |             |      |
| 2269 | [2269](./problems/2200-2299/2269/README.md)                                                                            |        | Easy   |             |      |
| 2270 | [Number of Ways to Split Array](./problems/2200-2299/2270/README.md)                                                   |        | Medium |             |      |
| 2271 | [Maximum White Tiles Covered by a Carpet](./problems/2200-2299/2271/README.md)                                         |        | Medium |             |      |
| 2272 | [Substring With Largest Variance](./problems/2200-2299/2272/README.md)                                                 |        | Hard   |             |      |
| 2273 | [2273](./problems/2200-2299/2273/README.md)                                                                            |        | Easy   |             |      |
| 2274 | [Maximum Consecutive Floors Without Special Floors](./problems/2200-2299/2274/README.md)                               |        | Medium |             |      |
| 2275 | [Largest Combination With Bitwise AND Greater Than Zero](./problems/2200-2299/2275/README.md)                          |        | Medium |             |      |
| 2276 | [Count Integers in Intervals](./problems/2200-2299/2276/README.md)                                                     |        | Hard   |             |      |
| 2277 | [Closest Node to Path in Tree](./problems/2200-2299/2277/README.md)                                                    | :lock: | Hard   |             |      |
| 2278 | [Percentage of Letter in String](./problems/2200-2299/2278/README.md)                                                  |        | Easy   |             |      |
| 2279 | [Maximum Bags With Full Capacity of Rocks](./problems/2200-2299/2279/README.md)                                        |        | Medium |             |      |
| 2280 | [Minimum Lines to Represent a Line Chart](./problems/2200-2299/2280/README.md)                                         |        | Medium |             |      |
| 2281 | [Sum of Total Strength of Wizards](./problems/2200-2299/2281/README.md)                                                |        | Hard   |             |      |
| 2282 | [Number of People That Can Be Seen in a Grid](./problems/2200-2299/2282/README.md)                                     | :lock: | Medium |             |      |
| 2283 | [Check if Number Has Equal Digit Count and Digit Value](./problems/2200-2299/2283/README.md)                           |        | Easy   |             |      |
| 2284 | [Sender With Largest Word Count](./problems/2200-2299/2284/README.md)                                                  |        | Medium |             |      |
| 2285 | [Maximum Total Importance of Roads](./problems/2200-2299/2285/README.md)                                               |        | Medium |             |      |
| 2286 | [Booking Concert Tickets in Groups](./problems/2200-2299/2286/README.md)                                               |        | Hard   |             |      |
| 2287 | [Rearrange Characters to Make Target String](./problems/2200-2299/2287/README.md)                                      |        | Easy   |             |      |
| 2288 | [Apply Discount to Prices](./problems/2200-2299/2288/README.md)                                                        |        | Medium |             |      |
| 2289 | [Steps to Make Array Non-decreasing](./problems/2200-2299/2289/README.md)                                              |        | Medium |             |      |
| 2290 | [Minimum Obstacle Removal to Reach Corner](./problems/2200-2299/2290/README.md)                                        |        | Hard   |             |      |
| 2291 | [Maximum Profit From Trading Stocks](./problems/2200-2299/2291/README.md)                                              | :lock: | Medium |             |      |
| 2292 | [Products With Three or More Orders in Two Consecutive Years](./problems/2200-2299/2292/README.md)                     | :lock: | Medium |             |      |
| 2293 | [Min Max Game](./problems/2200-2299/2293/README.md)                                                                    |        | Easy   |             |      |
| 2294 | [Partition Array Such That Maximum Difference Is K](./problems/2200-2299/2294/README.md)                               |        | Medium |             |      |
| 2295 | [Replace Elements in an Array](./problems/2200-2299/2295/README.md)                                                    |        | Medium |             |      |
| 2296 | [Design a Text Editor](./problems/2200-2299/2296/README.md)                                                            |        | Hard   |             |      |
| 2297 | [2297](./problems/2200-2299/2297/README.md)                                                                            |        | Easy   |             |      |
| 2298 | [Tasks Count in the Weekend](./problems/2200-2299/2298/README.md)                                                      | :lock: | Medium |             |      |
| 2299 | [Strong Password Checker II](./problems/2200-2299/2299/README.md)                                                      |        | Easy   |             |      |
| 2300 | [Successful Pairs of Spells and Potions](./problems/2300-2399/2300/README.md)                                          |        | Medium |             |      |
| 2301 | [Match Substring After Replacement](./problems/2300-2399/2301/README.md)                                               |        | Hard   |             |      |
| 2302 | [Count Subarrays With Score Less Than K](./problems/2300-2399/2302/README.md)                                          |        | Hard   |             |      |
| 2303 | [2303](./problems/2300-2399/2303/README.md)                                                                            |        | Easy   |             |      |
| 2304 | [2304](./problems/2300-2399/2304/README.md)                                                                            |        | Easy   |             |      |
| 2305 | [2305](./problems/2300-2399/2305/README.md)                                                                            |        | Easy   |             |      |
| 2306 | [Naming a Company](./problems/2300-2399/2306/README.md)                                                                |        | Hard   |             |      |
| 2307 | [2307](./problems/2300-2399/2307/README.md)                                                                            |        | Easy   |             |      |
| 2308 | [Arrange Table by Gender](./problems/2300-2399/2308/README.md)                                                         | :lock: | Medium |             |      |
| 2309 | [2309](./problems/2300-2399/2309/README.md)                                                                            |        | Easy   |             |      |
| 2310 | [2310](./problems/2300-2399/2310/README.md)                                                                            |        | Easy   |             |      |
| 2311 | [Longest Binary Subsequence Less Than or Equal to K](./problems/2300-2399/2311/README.md)                              |        | Medium |             |      |
| 2312 | [2312](./problems/2300-2399/2312/README.md)                                                                            |        | Easy   |             |      |
| 2313 | [Minimum Flips in Binary Tree to Get Result](./problems/2300-2399/2313/README.md)                                      | :lock: | Hard   |             |      |
| 2314 | [The First Day of the Maximum Recorded Degree in Each City](./problems/2300-2399/2314/README.md)                       | :lock: | Medium |             |      |
| 2315 | [Count Asterisks](./problems/2300-2399/2315/README.md)                                                                 |        | Easy   |             |      |
| 2316 | [Count Unreachable Pairs of Nodes in an Undirected Graph](./problems/2300-2399/2316/README.md)                         |        | Medium |             |      |
| 2317 | [Maximum XOR After Operations ](./problems/2300-2399/2317/README.md)                                                   |        | Medium |             |      |
| 2318 | [Number of Distinct Roll Sequences](./problems/2300-2399/2318/README.md)                                               |        | Hard   |             |      |
| 2319 | [Check if Matrix Is X-Matrix](./problems/2300-2399/2319/README.md)                                                     |        | Easy   |             |      |
| 2320 | [Count Number of Ways to Place Houses](./problems/2300-2399/2320/README.md)                                            |        | Medium |             |      |
| 2321 | [2321](./problems/2300-2399/2321/README.md)                                                                            |        | Easy   |             |      |
| 2322 | [Minimum Score After Removals on a Tree](./problems/2300-2399/2322/README.md)                                          |        | Hard   |             |      |
| 2323 | [Find Minimum Time to Finish All Jobs II](./problems/2300-2399/2323/README.md)                                         | :lock: | Medium |             |      |
| 2324 | [Product Sales Analysis IV](./problems/2300-2399/2324/README.md)                                                       | :lock: | Medium |             |      |
| 2325 | [Decode the Message](./problems/2300-2399/2325/README.md)                                                              |        | Easy   |             |      |
| 2326 | [Spiral Matrix IV](./problems/2300-2399/2326/README.md)                                                                |        | Medium |             |      |
| 2327 | [Number of People Aware of a Secret](./problems/2300-2399/2327/README.md)                                              |        | Medium |             |      |
| 2328 | [Number of Increasing Paths in a Grid](./problems/2300-2399/2328/README.md)                                            |        | Hard   |             |      |
| 2329 | [Product Sales Analysis V](./problems/2300-2399/2329/README.md)                                                        | :lock: | Easy   |             |      |
| 2330 | [Valid Palindrome IV](./problems/2300-2399/2330/README.md)                                                             | :lock: | Medium |             |      |
| 2331 | [Evaluate Boolean Binary Tree](./problems/2300-2399/2331/README.md)                                                    |        | Easy   |             |      |
| 2332 | [The Latest Time to Catch a Bus](./problems/2300-2399/2332/README.md)                                                  |        | Medium |             |      |
| 2333 | [Minimum Sum of Squared Difference](./problems/2300-2399/2333/README.md)                                               |        | Medium |             |      |
| 2334 | [Subarray With Elements Greater Than Varying Threshold](./problems/2300-2399/2334/README.md)                           |        | Hard   |             |      |
| 2335 | [Minimum Amount of Time to Fill Cups](./problems/2300-2399/2335/README.md)                                             |        | Easy   |             |      |
| 2336 | [Smallest Number in Infinite Set](./problems/2300-2399/2336/README.md)                                                 |        | Medium |             |      |
| 2337 | [Move Pieces to Obtain a String](./problems/2300-2399/2337/README.md)                                                  |        | Medium |             |      |
| 2338 | [Count the Number of Ideal Arrays](./problems/2300-2399/2338/README.md)                                                |        | Hard   |             |      |
| 2339 | [All the Matches of the League](./problems/2300-2399/2339/README.md)                                                   | :lock: | Easy   |             |      |
| 2340 | [Minimum Adjacent Swaps to Make a Valid Array](./problems/2300-2399/2340/README.md)                                    | :lock: | Medium |             |      |
| 2341 | [Maximum Number of Pairs in Array](./problems/2300-2399/2341/README.md)                                                |        | Easy   |             |      |
| 2342 | [Max Sum of a Pair With Equal Sum of Digits](./problems/2300-2399/2342/README.md)                                      |        | Medium |             |      |
| 2343 | [Query Kth Smallest Trimmed Number](./problems/2300-2399/2343/README.md)                                               |        | Medium |             |      |
| 2344 | [Minimum Deletions to Make Array Divisible](./problems/2300-2399/2344/README.md)                                       |        | Hard   |             |      |
| 2345 | [Finding the Number of Visible Mountains](./problems/2300-2399/2345/README.md)                                         | :lock: | Medium |             |      |
| 2346 | [Compute the Rank as a Percentage](./problems/2300-2399/2346/README.md)                                                | :lock: | Medium |             |      |
| 2347 | [Best Poker Hand](./problems/2300-2399/2347/README.md)                                                                 |        | Easy   |             |      |
| 2348 | [Number of Zero-Filled Subarrays](./problems/2300-2399/2348/README.md)                                                 |        | Medium |             |      |
| 2349 | [Design a Number Container System](./problems/2300-2399/2349/README.md)                                                |        | Medium |             |      |
| 2350 | [Shortest Impossible Sequence of Rolls](./problems/2300-2399/2350/README.md)                                           |        | Hard   |             |      |
| 2351 | [First Letter to Appear Twice](./problems/2300-2399/2351/README.md)                                                    |        | Easy   |             |      |
| 2352 | [Equal Row and Column Pairs](./problems/2300-2399/2352/README.md)                                                      |        | Medium |             |      |
| 2353 | [Design a Food Rating System](./problems/2300-2399/2353/README.md)                                                     |        | Medium |             |      |
| 2354 | [Number of Excellent Pairs](./problems/2300-2399/2354/README.md)                                                       |        | Hard   |             |      |
| 2355 | [Maximum Number of Books You Can Take](./problems/2300-2399/2355/README.md)                                            | :lock: | Hard   |             |      |
| 2356 | [Number of Unique Subjects Taught by Each Teacher](./problems/2300-2399/2356/README.md)                                | :soon: | Easy   |             |      |
| 2357 | [Make Array Zero by Subtracting Equal Amounts](./problems/2300-2399/2357/README.md)                                    |        | Easy   |             |      |
| 2358 | [Maximum Number of Groups Entering a Competition](./problems/2300-2399/2358/README.md)                                 |        | Medium |             |      |
| 2359 | [Find Closest Node to Given Two Nodes](./problems/2300-2399/2359/README.md)                                            |        | Medium |             |      |
| 2360 | [Longest Cycle in a Graph](./problems/2300-2399/2360/README.md)                                                        |        | Hard   |             |      |
| 2361 | [Minimum Costs Using the Train Line](./problems/2300-2399/2361/README.md)                                              | :lock: | Hard   |             |      |
| 2362 | [Generate the Invoice](./problems/2300-2399/2362/README.md)                                                            | :lock: | Hard   |             |      |
| 2363 | [Merge Similar Items](./problems/2300-2399/2363/README.md)                                                             |        | Easy   |             |      |
| 2364 | [Count Number of Bad Pairs](./problems/2300-2399/2364/README.md)                                                       |        | Medium |             |      |
| 2365 | [Task Scheduler II](./problems/2300-2399/2365/README.md)                                                               |        | Medium |             |      |
| 2366 | [Minimum Replacements to Sort the Array](./problems/2300-2399/2366/README.md)                                          |        | Hard   |             |      |
| 2367 | [Number of Arithmetic Triplets](./problems/2300-2399/2367/README.md)                                                   |        | Easy   |             |      |
| 2368 | [Reachable Nodes With Restrictions](./problems/2300-2399/2368/README.md)                                               |        | Medium |             |      |
| 2369 | [Check if There is a Valid Partition For The Array](./problems/2300-2399/2369/README.md)                               |        | Medium |             |      |
| 2370 | [Longest Ideal Subsequence](./problems/2300-2399/2370/README.md)                                                       |        | Medium |             |      |
| 2371 | [Minimize Maximum Value in a Grid](./problems/2300-2399/2371/README.md)                                                | :lock: | Hard   |             |      |
| 2372 | [Calculate the Influence of Each Salesperson](./problems/2300-2399/2372/README.md)                                     | :lock: | Medium |             |      |
| 2373 | [Largest Local Values in a Matrix](./problems/2300-2399/2373/README.md)                                                |        | Easy   |             |      |
| 2374 | [Node With Highest Edge Score](./problems/2300-2399/2374/README.md)                                                    |        | Medium |             |      |
| 2375 | [Construct Smallest Number From DI String](./problems/2300-2399/2375/README.md)                                        |        | Medium |             |      |
| 2376 | [Count Special Integers](./problems/2300-2399/2376/README.md)                                                          |        | Hard   |             |      |
| 2377 | [Sort the Olympic Table](./problems/2300-2399/2377/README.md)                                                          | :lock: | Easy   |             |      |
| 2378 | [Choose Edges to Maximize Score in a Tree](./problems/2300-2399/2378/README.md)                                        | :lock: | Medium |             |      |
| 2379 | [Minimum Recolors to Get K Consecutive Black Blocks](./problems/2300-2399/2379/README.md)                              |        | Easy   |             |      |
| 2380 | [Time Needed to Rearrange a Binary String](./problems/2300-2399/2380/README.md)                                        |        | Medium |             |      |
| 2381 | [Shifting Letters II](./problems/2300-2399/2381/README.md)                                                             |        | Medium |             |      |
| 2382 | [Maximum Segment Sum After Removals](./problems/2300-2399/2382/README.md)                                              |        | Hard   |             |      |
| 2383 | [Minimum Hours of Training to Win a Competition](./problems/2300-2399/2383/README.md)                                  |        | Easy   |             |      |
| 2384 | [Largest Palindromic Number](./problems/2300-2399/2384/README.md)                                                      |        | Medium |             |      |
| 2385 | [Amount of Time for Binary Tree to Be Infected](./problems/2300-2399/2385/README.md)                                   |        | Medium |             |      |
| 2386 | [Find the K-Sum of an Array](./problems/2300-2399/2386/README.md)                                                      |        | Hard   |             |      |
| 2387 | [Median of a Row Wise Sorted Matrix](./problems/2300-2399/2387/README.md)                                              | :lock: | Medium |             |      |
| 2388 | [Change Null Values in a Table to the Previous Value](./problems/2300-2399/2388/README.md)                             | :lock: | Medium |             |      |
| 2389 | [Longest Subsequence With Limited Sum](./problems/2300-2399/2389/README.md)                                            |        | Easy   |             |      |
| 2390 | [Removing Stars From a String](./problems/2300-2399/2390/README.md)                                                    |        | Medium |             |      |
| 2391 | [Minimum Amount of Time to Collect Garbage](./problems/2300-2399/2391/README.md)                                       |        | Medium |             |      |
| 2392 | [Build a Matrix With Conditions](./problems/2300-2399/2392/README.md)                                                  |        | Hard   |             |      |
| 2393 | [Count Strictly Increasing Subarrays](./problems/2300-2399/2393/README.md)                                             | :lock: | Medium |             |      |
| 2394 | [Employees With Deductions](./problems/2300-2399/2394/README.md)                                                       | :lock: | Medium |             |      |
| 2395 | [Find Subarrays With Equal Sum](./problems/2300-2399/2395/README.md)                                                   |        | Easy   |             |      |
| 2396 | [Strictly Palindromic Number](./problems/2300-2399/2396/README.md)                                                     |        | Medium |             |      |
| 2397 | [Maximum Rows Covered by Columns](./problems/2300-2399/2397/README.md)                                                 |        | Medium |             |      |
| 2398 | [Maximum Number of Robots Within Budget](./problems/2300-2399/2398/README.md)                                          |        | Hard   |             |      |
| 2399 | [Check Distances Between Same Letters](./problems/2300-2399/2399/README.md)                                            |        | Easy   |             |      |
| 2400 | [Number of Ways to Reach a Position After Exactly k Steps](./problems/2400-2499/2400/README.md)                        |        | Medium |             |      |
| 2401 | [Longest Nice Subarray](./problems/2400-2499/2401/README.md)                                                           |        | Medium |             |      |
| 2402 | [Meeting Rooms III](./problems/2400-2499/2402/README.md)                                                               |        | Hard   |             |      |
| 2403 | [Minimum Time to Kill All Monsters](./problems/2400-2499/2403/README.md)                                               | :lock: | Hard   |             |      |
| 2404 | [Most Frequent Even Element](./problems/2400-2499/2404/README.md)                                                      |        | Easy   |             |      |
| 2405 | [Optimal Partition of String](./problems/2400-2499/2405/README.md)                                                     |        | Medium |             |      |
| 2406 | [Divide Intervals Into Minimum Number of Groups](./problems/2400-2499/2406/README.md)                                  |        | Medium |             |      |
| 2407 | [Longest Increasing Subsequence II](./problems/2400-2499/2407/README.md)                                               |        | Hard   |             |      |
| 2408 | [Design SQL](./problems/2400-2499/2408/README.md)                                                                      | :lock: | Medium |             |      |
| 2409 | [Count Days Spent Together](./problems/2400-2499/2409/README.md)                                                       |        | Easy   |             |      |
| 2410 | [Maximum Matching of Players With Trainers](./problems/2400-2499/2410/README.md)                                       |        | Medium |             |      |
| 2411 | [Smallest Subarrays With Maximum Bitwise OR](./problems/2400-2499/2411/README.md)                                      |        | Medium |             |      |
| 2412 | [Minimum Money Required Before Transactions](./problems/2400-2499/2412/README.md)                                      |        | Hard   |             |      |
| 2413 | [Smallest Even Multiple](./problems/2400-2499/2413/README.md)                                                          |        | Easy   |             |      |
| 2414 | [Length of the Longest Alphabetical Continuous Substring](./problems/2400-2499/2414/README.md)                         |        | Medium |             |      |
| 2415 | [Reverse Odd Levels of Binary Tree](./problems/2400-2499/2415/README.md)                                               |        | Medium |             |      |
| 2416 | [Sum of Prefix Scores of Strings](./problems/2400-2499/2416/README.md)                                                 |        | Hard   |             |      |
| 2417 | [Closest Fair Integer](./problems/2400-2499/2417/README.md)                                                            | :lock: | Medium |             |      |
| 2418 | [Sort the People](./problems/2400-2499/2418/README.md)                                                                 |        | Easy   |             |      |
| 2419 | [Longest Subarray With Maximum Bitwise AND](./problems/2400-2499/2419/README.md)                                       |        | Medium |             |      |
| 2420 | [Find All Good Indices](./problems/2400-2499/2420/README.md)                                                           |        | Medium |             |      |
| 2421 | [Number of Good Paths](./problems/2400-2499/2421/README.md)                                                            |        | Hard   |             |      |
| 2422 | [Merge Operations to Turn Array Into a Palindrome](./problems/2400-2499/2422/README.md)                                | :lock: | Medium |             |      |
| 2423 | [Remove Letter To Equalize Frequency](./problems/2400-2499/2423/README.md)                                             |        | Easy   |             |      |
| 2424 | [Longest Uploaded Prefix](./problems/2400-2499/2424/README.md)                                                         |        | Medium |             |      |
| 2425 | [Bitwise XOR of All Pairings](./problems/2400-2499/2425/README.md)                                                     |        | Medium |             |      |
| 2426 | [Number of Pairs Satisfying Inequality](./problems/2400-2499/2426/README.md)                                           |        | Hard   |             |      |
| 2427 | [Number of Common Factors](./problems/2400-2499/2427/README.md)                                                        |        | Easy   |             |      |
| 2428 | [Maximum Sum of an Hourglass](./problems/2400-2499/2428/README.md)                                                     |        | Medium |             |      |
| 2429 | [Minimize XOR](./problems/2400-2499/2429/README.md)                                                                    |        | Medium |             |      |
| 2430 | [Maximum Deletions on a String](./problems/2400-2499/2430/README.md)                                                   |        | Hard   |             |      |
| 2431 | [Maximize Total Tastiness of Purchased Fruits](./problems/2400-2499/2431/README.md)                                    | :lock: | Medium |             |      |
| 2432 | [The Employee That Worked on the Longest Task](./problems/2400-2499/2432/README.md)                                    |        | Easy   |             |      |
| 2433 | [Find The Original Array of Prefix Xor](./problems/2400-2499/2433/README.md)                                           |        | Medium |             |      |
| 2434 | [Using a Robot to Print the Lexicographically Smallest String](./problems/2400-2499/2434/README.md)                    |        | Medium |             |      |
| 2435 | [Paths in Matrix Whose Sum Is Divisible by K](./problems/2400-2499/2435/README.md)                                     |        | Hard   |             |      |
| 2436 | [Minimum Split Into Subarrays With GCD Greater Than One](./problems/2400-2499/2436/README.md)                          | :lock: | Medium |             |      |
| 2437 | [Number of Valid Clock Times](./problems/2400-2499/2437/README.md)                                                     |        | Easy   |             |      |
| 2438 | [Range Product Queries of Powers](./problems/2400-2499/2438/README.md)                                                 |        | Medium |             |      |
| 2439 | [Minimize Maximum of Array](./problems/2400-2499/2439/README.md)                                                       |        | Medium |             |      |
| 2440 | [Create Components With Same Value](./problems/2400-2499/2440/README.md)                                               |        | Hard   |             |      |
| 2441 | [Largest Positive Integer That Exists With Its Negative](./problems/2400-2499/2441/README.md)                          |        | Easy   |             |      |
| 2442 | [Count Number of Distinct Integers After Reverse Operations](./problems/2400-2499/2442/README.md)                      |        | Medium |             |      |
| 2443 | [Sum of Number and Its Reverse](./problems/2400-2499/2443/README.md)                                                   |        | Medium |             |      |
| 2444 | [Count Subarrays With Fixed Bounds](./problems/2400-2499/2444/README.md)                                               |        | Hard   |             |      |
| 2445 | [Number of Nodes With Value One](./problems/2400-2499/2445/README.md)                                                  | :lock: | Medium |             |      |
| 2446 | [Determine if Two Events Have Conflict](./problems/2400-2499/2446/README.md)                                           |        | Easy   |             |      |
| 2447 | [Number of Subarrays With GCD Equal to K](./problems/2400-2499/2447/README.md)                                         |        | Medium |             |      |
| 2448 | [Minimum Cost to Make Array Equal](./problems/2400-2499/2448/README.md)                                                |        | Hard   |             |      |
| 2449 | [Minimum Number of Operations to Make Arrays Similar](./problems/2400-2499/2449/README.md)                             |        | Hard   |             |      |
| 2450 | [Number of Distinct Binary Strings After Applying Operations](./problems/2400-2499/2450/README.md)                     | :lock: | Medium |             |      |
| 2451 | [Odd String Difference](./problems/2400-2499/2451/README.md)                                                           |        | Easy   |             |      |
| 2452 | [Words Within Two Edits of Dictionary](./problems/2400-2499/2452/README.md)                                            |        | Medium |             |      |
| 2453 | [Destroy Sequential Targets](./problems/2400-2499/2453/README.md)                                                      |        | Medium |             |      |
| 2454 | [Next Greater Element IV](./problems/2400-2499/2454/README.md)                                                         |        | Hard   |             |      |
| 2455 | [Average Value of Even Numbers That Are Divisible by Three](./problems/2400-2499/2455/README.md)                       |        | Easy   |             |      |
| 2456 | [Most Popular Video Creator](./problems/2400-2499/2456/README.md)                                                      |        | Medium |             |      |
| 2457 | [Minimum Addition to Make Integer Beautiful](./problems/2400-2499/2457/README.md)                                      |        | Medium |             |      |
| 2458 | [Height of Binary Tree After Subtree Removal Queries](./problems/2400-2499/2458/README.md)                             |        | Hard   |             |      |
| 2459 | [Sort Array by Moving Items to Empty Space](./problems/2400-2499/2459/README.md)                                       | :lock: | Hard   |             |      |
| 2460 | [Apply Operations to an Array](./problems/2400-2499/2460/README.md)                                                    |        | Easy   |             |      |
| 2461 | [Maximum Sum of Distinct Subarrays With Length K](./problems/2400-2499/2461/README.md)                                 |        | Medium |             |      |
| 2462 | [Total Cost to Hire K Workers](./problems/2400-2499/2462/README.md)                                                    |        | Medium |             |      |
| 2463 | [Minimum Total Distance Traveled](./problems/2400-2499/2463/README.md)                                                 |        | Hard   |             |      |
| 2464 | [Minimum Subarrays in a Valid Split](./problems/2400-2499/2464/README.md)                                              | :lock: | Medium |             |      |
| 2465 | [Number of Distinct Averages](./problems/2400-2499/2465/README.md)                                                     |        | Easy   |             |      |
| 2466 | [Count Ways To Build Good Strings](./problems/2400-2499/2466/README.md)                                                |        | Medium |             |      |
| 2467 | [Most Profitable Path in a Tree](./problems/2400-2499/2467/README.md)                                                  |        | Medium |             |      |
| 2468 | [Split Message Based on Limit](./problems/2400-2499/2468/README.md)                                                    |        | Hard   |             |      |
| 2469 | [Convert the Temperature](./problems/2400-2499/2469/README.md)                                                         |        | Easy   |             |      |
| 2470 | [Number of Subarrays With LCM Equal to K](./problems/2400-2499/2470/README.md)                                         |        | Medium |             |      |
| 2471 | [Minimum Number of Operations to Sort a Binary Tree by Level](./problems/2400-2499/2471/README.md)                     |        | Medium |             |      |
| 2472 | [Maximum Number of Non-overlapping Palindrome Substrings](./problems/2400-2499/2472/README.md)                         |        | Hard   |             |      |
| 2473 | [Minimum Cost to Buy Apples](./problems/2400-2499/2473/README.md)                                                      | :lock: | Medium |             |      |
| 2474 | [Customers With Strictly Increasing Purchases](./problems/2400-2499/2474/README.md)                                    | :lock: | Hard   |             |      |
| 2475 | [Number of Unequal Triplets in Array](./problems/2400-2499/2475/README.md)                                             |        | Easy   |             |      |
| 2476 | [Closest Nodes Queries in a Binary Search Tree](./problems/2400-2499/2476/README.md)                                   |        | Medium |             |      |
| 2477 | [Minimum Fuel Cost to Report to the Capital](./problems/2400-2499/2477/README.md)                                      |        | Medium |             |      |
| 2478 | [Number of Beautiful Partitions](./problems/2400-2499/2478/README.md)                                                  |        | Hard   |             |      |
| 2479 | [Maximum XOR of Two Non-Overlapping Subtrees](./problems/2400-2499/2479/README.md)                                     | :lock: | Hard   |             |      |
| 2480 | [Form a Chemical Bond](./problems/2400-2499/2480/README.md)                                                            | :lock: | Easy   |             |      |
| 2481 | [Minimum Cuts to Divide a Circle](./problems/2400-2499/2481/README.md)                                                 |        | Easy   |             |      |
| 2482 | [Difference Between Ones and Zeros in Row and Column](./problems/2400-2499/2482/README.md)                             |        | Medium |             |      |
| 2483 | [Minimum Penalty for a Shop](./problems/2400-2499/2483/README.md)                                                      |        | Medium |             |      |
| 2484 | [Count Palindromic Subsequences](./problems/2400-2499/2484/README.md)                                                  |        | Hard   |             |      |
| 2485 | [Find the Pivot Integer](./problems/2400-2499/2485/README.md)                                                          |        | Easy   |             |      |
| 2486 | [Append Characters to String to Make Subsequence](./problems/2400-2499/2486/README.md)                                 |        | Medium |             |      |
| 2487 | [Remove Nodes From Linked List](./problems/2400-2499/2487/README.md)                                                   |        | Medium |             |      |
| 2488 | [Count Subarrays With Median K](./problems/2400-2499/2488/README.md)                                                   |        | Hard   |             |      |
| 2489 | [Number of Substrings With Fixed Ratio](./problems/2400-2499/2489/README.md)                                           | :lock: | Medium |             |      |
| 2490 | [Circular Sentence](./problems/2400-2499/2490/README.md)                                                               |        | Easy   |             |      |
| 2491 | [Divide Players Into Teams of Equal Skill](./problems/2400-2499/2491/README.md)                                        |        | Medium |             |      |
| 2492 | [Minimum Score of a Path Between Two Cities](./problems/2400-2499/2492/README.md)                                      |        | Medium |             |      |
| 2493 | [Divide Nodes Into the Maximum Number of Groups](./problems/2400-2499/2493/README.md)                                  |        | Hard   |             |      |
| 2494 | [Merge Overlapping Events in the Same Hall](./problems/2400-2499/2494/README.md)                                       | :lock: | Hard   |             |      |
| 2495 | [Number of Subarrays Having Even Product](./problems/2400-2499/2495/README.md)                                         | :lock: | Medium |             |      |
| 2496 | [Maximum Value of a String in an Array](./problems/2400-2499/2496/README.md)                                           |        | Easy   |             |      |
| 2497 | [Maximum Star Sum of a Graph](./problems/2400-2499/2497/README.md)                                                     |        | Medium |             |      |
| 2498 | [Frog Jump II](./problems/2400-2499/2498/README.md)                                                                    |        | Medium |             |      |
| 2499 | [Minimum Total Cost to Make Arrays Unequal](./problems/2400-2499/2499/README.md)                                       |        | Hard   |             |      |
| 2500 | [Delete Greatest Value in Each Row](./problems/2500-2599/2500/README.md)                                               |        | Easy   |             |      |
| 2501 | [Longest Square Streak in an Array](./problems/2500-2599/2501/README.md)                                               |        | Medium |             |      |
| 2502 | [Design Memory Allocator](./problems/2500-2599/2502/README.md)                                                         |        | Medium |             |      |
| 2503 | [Maximum Number of Points From Grid Queries](./problems/2500-2599/2503/README.md)                                      |        | Hard   |             |      |
| 2504 | [Concatenate the Name and the Profession](./problems/2500-2599/2504/README.md)                                         | :lock: | Easy   |             |      |
| 2505 | [Bitwise OR of All Subsequence Sums](./problems/2500-2599/2505/README.md)                                              | :lock: | Medium |             |      |
| 2506 | [Count Pairs Of Similar Strings](./problems/2500-2599/2506/README.md)                                                  |        | Easy   |             |      |
| 2507 | [Smallest Value After Replacing With Sum of Prime Factors](./problems/2500-2599/2507/README.md)                        |        | Medium |             |      |
| 2508 | [Add Edges to Make Degrees of All Nodes Even](./problems/2500-2599/2508/README.md)                                     |        | Hard   |             |      |
| 2509 | [Cycle Length Queries in a Tree](./problems/2500-2599/2509/README.md)                                                  |        | Hard   |             |      |
| 2510 | [Check if There is a Path With Equal Number of 0's And 1's](./problems/2500-2599/2510/README.md)                       | :lock: | Medium |             |      |
| 2511 | [Maximum Enemy Forts That Can Be Captured](./problems/2500-2599/2511/README.md)                                        |        | Easy   |             |      |
| 2512 | [Reward Top K Students](./problems/2500-2599/2512/README.md)                                                           |        | Medium |             |      |
| 2513 | [Minimize the Maximum of Two Arrays](./problems/2500-2599/2513/README.md)                                              |        | Medium |             |      |
| 2514 | [Count Anagrams](./problems/2500-2599/2514/README.md)                                                                  |        | Hard   |             |      |
| 2515 | [Shortest Distance to Target String in a Circular Array](./problems/2500-2599/2515/README.md)                          |        | Easy   |             |      |
| 2516 | [Take K of Each Character From Left and Right](./problems/2500-2599/2516/README.md)                                    |        | Medium |             |      |
| 2517 | [Maximum Tastiness of Candy Basket](./problems/2500-2599/2517/README.md)                                               |        | Medium |             |      |
| 2518 | [Number of Great Partitions](./problems/2500-2599/2518/README.md)                                                      |        | Hard   |             |      |
| 2519 | [Count the Number of K-Big Indices](./problems/2500-2599/2519/README.md)                                               | :lock: | Hard   |             |      |
| 2520 | [Count the Digits That Divide a Number](./problems/2500-2599/2520/README.md)                                           |        | Easy   |             |      |
| 2521 | [Distinct Prime Factors of Product of Array](./problems/2500-2599/2521/README.md)                                      |        | Medium |             |      |
| 2522 | [Partition String Into Substrings With Values at Most K](./problems/2500-2599/2522/README.md)                          |        | Medium |             |      |
| 2523 | [Closest Prime Numbers in Range](./problems/2500-2599/2523/README.md)                                                  |        | Medium |             |      |
| 2524 | [Maximum Frequency Score of a Subarray](./problems/2500-2599/2524/README.md)                                           | :lock: | Hard   |             |      |
| 2525 | [Categorize Box According to Criteria](./problems/2500-2599/2525/README.md)                                            |        | Easy   |             |      |
| 2526 | [Find Consecutive Integers from a Data Stream](./problems/2500-2599/2526/README.md)                                    |        | Medium |             |      |
| 2527 | [Find Xor-Beauty of Array](./problems/2500-2599/2527/README.md)                                                        |        | Medium |             |      |
| 2528 | [Maximize the Minimum Powered City](./problems/2500-2599/2528/README.md)                                               |        | Hard   |             |      |
| 2529 | [Maximum Count of Positive Integer and Negative Integer](./problems/2500-2599/2529/README.md)                          |        | Easy   |             |      |
| 2530 | [Maximal Score After Applying K Operations](./problems/2500-2599/2530/README.md)                                       |        | Medium |             |      |
| 2531 | [Make Number of Distinct Characters Equal](./problems/2500-2599/2531/README.md)                                        |        | Medium |             |      |
| 2532 | [Time to Cross a Bridge](./problems/2500-2599/2532/README.md)                                                          |        | Hard   |             |      |
| 2533 | [Number of Good Binary Strings](./problems/2500-2599/2533/README.md)                                                   | :lock: | Medium |             |      |
| 2534 | [Time Taken to Cross the Door](./problems/2500-2599/2534/README.md)                                                    | :lock: | Hard   |             |      |
| 2535 | [Difference Between Element Sum and Digit Sum of an Array](./problems/2500-2599/2535/README.md)                        |        | Easy   |             |      |
| 2536 | [Increment Submatrices by One](./problems/2500-2599/2536/README.md)                                                    |        | Medium |             |      |
| 2537 | [Count the Number of Good Subarrays](./problems/2500-2599/2537/README.md)                                              |        | Medium |             |      |
| 2538 | [Difference Between Maximum and Minimum Price Sum](./problems/2500-2599/2538/README.md)                                |        | Hard   |             |      |
| 2539 | [Count the Number of Good Subsequences](./problems/2500-2599/2539/README.md)                                           | :lock: | Medium |             |      |
| 2540 | [Minimum Common Value](./problems/2500-2599/2540/README.md)                                                            |        | Easy   |             |      |
| 2541 | [Minimum Operations to Make Array Equal II](./problems/2500-2599/2541/README.md)                                       |        | Medium |             |      |
| 2542 | [Maximum Subsequence Score](./problems/2500-2599/2542/README.md)                                                       |        | Medium |             |      |
| 2543 | [Check if Point Is Reachable](./problems/2500-2599/2543/README.md)                                                     |        | Hard   |             |      |
| 2544 | [Alternating Digit Sum](./problems/2500-2599/2544/README.md)                                                           |        | Easy   |             |      |
| 2545 | [Sort the Students by Their Kth Score](./problems/2500-2599/2545/README.md)                                            |        | Medium |             |      |
| 2546 | [Apply Bitwise Operations to Make Strings Equal](./problems/2500-2599/2546/README.md)                                  |        | Medium |             |      |
| 2547 | [Minimum Cost to Split an Array](./problems/2500-2599/2547/README.md)                                                  |        | Hard   |             |      |
| 2548 | [Maximum Price to Fill a Bag](./problems/2500-2599/2548/README.md)                                                     | :lock: | Medium |             |      |
| 2549 | [Count Distinct Numbers on Board](./problems/2500-2599/2549/README.md)                                                 |        | Easy   |             |      |
| 2550 | [Count Collisions of Monkeys on a Polygon](./problems/2500-2599/2550/README.md)                                        |        | Medium |             |      |
| 2551 | [Put Marbles in Bags](./problems/2500-2599/2551/README.md)                                                             |        | Hard   |             |      |
| 2552 | [Count Increasing Quadruplets](./problems/2500-2599/2552/README.md)                                                    |        | Hard   |             |      |
| 2553 | [Separate the Digits in an Array](./problems/2500-2599/2553/README.md)                                                 |        | Easy   |             |      |
| 2554 | [Maximum Number of Integers to Choose From a Range I](./problems/2500-2599/2554/README.md)                             |        | Medium |             |      |
| 2555 | [Maximize Win From Two Segments](./problems/2500-2599/2555/README.md)                                                  |        | Medium |             |      |
| 2556 | [Disconnect Path in a Binary Matrix by at Most One Flip](./problems/2500-2599/2556/README.md)                          |        | Medium |             |      |
| 2557 | [Maximum Number of Integers to Choose From a Range II](./problems/2500-2599/2557/README.md)                            | :lock: | Medium |             |      |
| 2558 | [Take Gifts From the Richest Pile](./problems/2500-2599/2558/README.md)                                                |        | Easy   |             |      |
| 2559 | [Count Vowel Strings in Ranges](./problems/2500-2599/2559/README.md)                                                   |        | Medium |             |      |
| 2560 | [House Robber IV](./problems/2500-2599/2560/README.md)                                                                 |        | Medium |             |      |
| 2561 | [Rearranging Fruits](./problems/2500-2599/2561/README.md)                                                              |        | Hard   |             |      |
| 2562 | [Find the Array Concatenation Value](./problems/2500-2599/2562/README.md)                                              |        | Easy   |             |      |
| 2563 | [Count the Number of Fair Pairs](./problems/2500-2599/2563/README.md)                                                  |        | Medium |             |      |
| 2564 | [Substring XOR Queries](./problems/2500-2599/2564/README.md)                                                           |        | Medium |             |      |
| 2565 | [Subsequence With the Minimum Score](./problems/2500-2599/2565/README.md)                                              |        | Hard   |             |      |
| 2566 | [Maximum Difference by Remapping a Digit](./problems/2500-2599/2566/README.md)                                         |        | Easy   |             |      |
| 2567 | [Minimum Score by Changing Two Elements](./problems/2500-2599/2567/README.md)                                          |        | Medium |             |      |
| 2568 | [Minimum Impossible OR](./problems/2500-2599/2568/README.md)                                                           |        | Medium |             |      |
| 2569 | [Handling Sum Queries After Update](./problems/2500-2599/2569/README.md)                                               |        | Hard   |             |      |
| 2570 | [Merge Two 2D Arrays by Summing Values](./problems/2500-2599/2570/README.md)                                           |        | Easy   |             |      |
| 2571 | [Minimum Operations to Reduce an Integer to 0](./problems/2500-2599/2571/README.md)                                    |        | Medium |             |      |
| 2572 | [Count the Number of Square-Free Subsets](./problems/2500-2599/2572/README.md)                                         |        | Medium |             |      |
| 2573 | [Find the String with LCP](./problems/2500-2599/2573/README.md)                                                        |        | Hard   |             |      |
| 2574 | [Left and Right Sum Differences](./problems/2500-2599/2574/README.md)                                                  |        | Easy   |             |      |
| 2575 | [Find the Divisibility Array of a String](./problems/2500-2599/2575/README.md)                                         |        | Medium |             |      |
| 2576 | [Find the Maximum Number of Marked Indices](./problems/2500-2599/2576/README.md)                                       |        | Medium |             |      |
| 2577 | [Minimum Time to Visit a Cell In a Grid](./problems/2500-2599/2577/README.md)                                          |        | Hard   |             |      |
| 2578 | [Split With Minimum Sum](./problems/2500-2599/2578/README.md)                                                          |        | Easy   |             |      |
| 2579 | [Count Total Number of Colored Cells](./problems/2500-2599/2579/README.md)                                             |        | Medium |             |      |
| 2580 | [Count Ways to Group Overlapping Ranges](./problems/2500-2599/2580/README.md)                                          |        | Medium |             |      |
| 2581 | [Count Number of Possible Root Nodes](./problems/2500-2599/2581/README.md)                                             |        | Hard   |             |      |
| 2582 | [Pass the Pillow](./problems/2500-2599/2582/README.md)                                                                 |        | Easy   |             |      |
| 2583 | [Kth Largest Sum in a Binary Tree](./problems/2500-2599/2583/README.md)                                                |        | Medium |             |      |
| 2584 | [Split the Array to Make Coprime Products](./problems/2500-2599/2584/README.md)                                        |        | Hard   |             |      |
| 2585 | [Number of Ways to Earn Points](./problems/2500-2599/2585/README.md)                                                   |        | Hard   |             |      |
| 2586 | [Count the Number of Vowel Strings in Range](./problems/2500-2599/2586/README.md)                                      |        | Easy   |             |      |
| 2587 | [Rearrange Array to Maximize Prefix Score](./problems/2500-2599/2587/README.md)                                        |        | Medium |             |      |
| 2588 | [Count the Number of Beautiful Subarrays](./problems/2500-2599/2588/README.md)                                         |        | Medium |             |      |
| 2589 | [Minimum Time to Complete All Tasks](./problems/2500-2599/2589/README.md)                                              |        | Hard   |             |      |
| 2590 | [Design a Todo List](./problems/2500-2599/2590/README.md)                                                              | :lock: | Medium |             |      |
| 2591 | [Distribute Money to Maximum Children](./problems/2500-2599/2591/README.md)                                            |        | Easy   |             |      |
| 2592 | [Maximize Greatness of an Array](./problems/2500-2599/2592/README.md)                                                  |        | Medium |             |      |
| 2593 | [Find Score of an Array After Marking All Elements](./problems/2500-2599/2593/README.md)                               |        | Medium |             |      |
| 2594 | [Minimum Time to Repair Cars](./problems/2500-2599/2594/README.md)                                                     |        | Medium |             |      |
| 2595 | [Number of Even and Odd Bits](./problems/2500-2599/2595/README.md)                                                     |        | Easy   |             |      |
| 2596 | [Check Knight Tour Configuration](./problems/2500-2599/2596/README.md)                                                 |        | Medium |             |      |
| 2597 | [The Number of Beautiful Subsets](./problems/2500-2599/2597/README.md)                                                 |        | Medium |             |      |
| 2598 | [Smallest Missing Non-negative Integer After Operations](./problems/2500-2599/2598/README.md)                          |        | Medium |             |      |
| 2599 | [Make the Prefix Sum Non-negative](./problems/2500-2599/2599/README.md)                                                | :lock: | Medium |             |      |
| 2600 | [K Items With the Maximum Sum](./problems/2600-2699/2600/README.md)                                                    |        | Easy   |             |      |
| 2601 | [Prime Subtraction Operation](./problems/2600-2699/2601/README.md)                                                     |        | Medium |             |      |
| 2602 | [Minimum Operations to Make All Array Elements Equal](./problems/2600-2699/2602/README.md)                             |        | Medium |             |      |
| 2603 | [Collect Coins in a Tree](./problems/2600-2699/2603/README.md)                                                         |        | Hard   |             |      |
| 2604 | [Minimum Time to Eat All Grains](./problems/2600-2699/2604/README.md)                                                  | :lock: | Hard   |             |      |
| 2605 | [Form Smallest Number From Two Digit Arrays](./problems/2600-2699/2605/README.md)                                      |        | Easy   |             |      |
| 2606 | [Find the Substring With Maximum Cost](./problems/2600-2699/2606/README.md)                                            |        | Medium |             |      |
| 2607 | [Make K-Subarray Sums Equal](./problems/2600-2699/2607/README.md)                                                      |        | Medium |             |      |
| 2608 | [Shortest Cycle in a Graph](./problems/2600-2699/2608/README.md)                                                       |        | Hard   |             |      |
| 2609 | [Find the Longest Balanced Substring of a Binary String](./problems/2600-2699/2609/README.md)                          |        | Easy   |             |      |
| 2610 | [Convert an Array Into a 2D Array With Conditions](./problems/2600-2699/2610/README.md)                                |        | Medium |             |      |
| 2611 | [Mice and Cheese](./problems/2600-2699/2611/README.md)                                                                 |        | Medium |             |      |
| 2612 | [Minimum Reverse Operations](./problems/2600-2699/2612/README.md)                                                      |        | Hard   |             |      |
| 2613 | [Beautiful Pairs](./problems/2600-2699/2613/README.md)                                                                 | :lock: | Hard   |             |      |
| 2614 | [Prime In Diagonal](./problems/2600-2699/2614/README.md)                                                               |        | Easy   |             |      |
| 2615 | [Sum of Distances](./problems/2600-2699/2615/README.md)                                                                |        | Medium |             |      |
| 2616 | [Minimize the Maximum Difference of Pairs](./problems/2600-2699/2616/README.md)                                        |        | Medium |             |      |
| 2617 | [Minimum Number of Visited Cells in a Grid](./problems/2600-2699/2617/README.md)                                       |        | Hard   |             |      |
| 2618 | [2618](./problems/2600-2699/2618/README.md)                                                                            |        | Easy   |             |      |
| 2619 | [2619](./problems/2600-2699/2619/README.md)                                                                            |        | Easy   |             |      |
| 2620 | [2620](./problems/2600-2699/2620/README.md)                                                                            |        | Easy   |             |      |
| 2621 | [2621](./problems/2600-2699/2621/README.md)                                                                            |        | Easy   |             |      |
| 2622 | [2622](./problems/2600-2699/2622/README.md)                                                                            |        | Easy   |             |      |
| 2623 | [2623](./problems/2600-2699/2623/README.md)                                                                            |        | Easy   |             |      |
| 2624 | [2624](./problems/2600-2699/2624/README.md)                                                                            |        | Easy   |             |      |
| 2625 | [2625](./problems/2600-2699/2625/README.md)                                                                            |        | Easy   |             |      |
| 2626 | [2626](./problems/2600-2699/2626/README.md)                                                                            |        | Easy   |             |      |
| 2627 | [2627](./problems/2600-2699/2627/README.md)                                                                            |        | Easy   |             |      |
| 2628 | [2628](./problems/2600-2699/2628/README.md)                                                                            |        | Easy   |             |      |
| 2629 | [2629](./problems/2600-2699/2629/README.md)                                                                            |        | Easy   |             |      |
| 2630 | [2630](./problems/2600-2699/2630/README.md)                                                                            |        | Easy   |             |      |
| 2631 | [2631](./problems/2600-2699/2631/README.md)                                                                            |        | Easy   |             |      |
| 2632 | [2632](./problems/2600-2699/2632/README.md)                                                                            |        | Easy   |             |      |
| 2633 | [2633](./problems/2600-2699/2633/README.md)                                                                            |        | Easy   |             |      |
| 2634 | [2634](./problems/2600-2699/2634/README.md)                                                                            |        | Easy   |             |      |
| 2635 | [2635](./problems/2600-2699/2635/README.md)                                                                            |        | Easy   |             |      |
| 2636 | [2636](./problems/2600-2699/2636/README.md)                                                                            |        | Easy   |             |      |
| 2637 | [2637](./problems/2600-2699/2637/README.md)                                                                            |        | Easy   |             |      |
| 2638 | [Count the Number of K-Free Subsets](./problems/2600-2699/2638/README.md)                                              | :lock: | Medium |             |      |
| 2639 | [Find the Width of Columns of a Grid](./problems/2600-2699/2639/README.md)                                             |        | Easy   |             |      |
| 2640 | [Find the Score of All Prefixes of an Array](./problems/2600-2699/2640/README.md)                                      |        | Medium |             |      |
| 2641 | [Cousins in Binary Tree II](./problems/2600-2699/2641/README.md)                                                       |        | Medium |             |      |
| 2642 | [Design Graph With Shortest Path Calculator](./problems/2600-2699/2642/README.md)                                      |        | Hard   |             |      |
| 2643 | [Row With Maximum Ones](./problems/2600-2699/2643/README.md)                                                           |        | Easy   |             |      |
| 2644 | [Find the Maximum Divisibility Score](./problems/2600-2699/2644/README.md)                                             |        | Easy   |             |      |
| 2645 | [Minimum Additions to Make Valid String](./problems/2600-2699/2645/README.md)                                          |        | Medium |             |      |
| 2646 | [Minimize the Total Price of the Trips](./problems/2600-2699/2646/README.md)                                           |        | Hard   |             |      |
| 2647 | [Color the Triangle Red](./problems/2600-2699/2647/README.md)                                                          | :lock: | Hard   |             |      |
| 2648 | [2648](./problems/2600-2699/2648/README.md)                                                                            |        | Easy   |             |      |
| 2649 | [2649](./problems/2600-2699/2649/README.md)                                                                            |        | Easy   |             |      |
| 2650 | [2650](./problems/2600-2699/2650/README.md)                                                                            |        | Easy   |             |      |
| 2651 | [Calculate Delayed Arrival Time](./problems/2600-2699/2651/README.md)                                                  |        | Easy   |             |      |
| 2652 | [Sum Multiples](./problems/2600-2699/2652/README.md)                                                                   |        | Easy   |             |      |
| 2653 | [Sliding Subarray Beauty](./problems/2600-2699/2653/README.md)                                                         |        | Medium |             |      |
| 2654 | [Minimum Number of Operations to Make All Array Elements Equal to 1](./problems/2600-2699/2654/README.md)              |        | Medium |             |      |
| 2655 | [Find Maximal Uncovered Ranges](./problems/2600-2699/2655/README.md)                                                   | :lock: | Medium |             |      |
| 2656 | [Maximum Sum With Exactly K Elements ](./problems/2600-2699/2656/README.md)                                            |        | Easy   |             |      |
| 2657 | [Find the Prefix Common Array of Two Arrays](./problems/2600-2699/2657/README.md)                                      |        | Medium |             |      |
| 2658 | [Maximum Number of Fish in a Grid](./problems/2600-2699/2658/README.md)                                                |        | Medium |             |      |
| 2659 | [Make Array Empty](./problems/2600-2699/2659/README.md)                                                                |        | Hard   |             |      |
| 2660 | [Determine the Winner of a Bowling Game](./problems/2600-2699/2660/README.md)                                          |        | Easy   |             |      |
| 2661 | [First Completely Painted Row or Column](./problems/2600-2699/2661/README.md)                                          |        | Medium |             |      |
| 2662 | [Minimum Cost of a Path With Special Roads](./problems/2600-2699/2662/README.md)                                       |        | Medium |             |      |
| 2663 | [Lexicographically Smallest Beautiful String](./problems/2600-2699/2663/README.md)                                     |        | Hard   |             |      |
| 2664 | [The Knight’s Tour](./problems/2600-2699/2664/README.md)                                                               | :lock: | Medium |             |      |
| 2665 | [2665](./problems/2600-2699/2665/README.md)                                                                            |        | Easy   |             |      |
| 2666 | [2666](./problems/2600-2699/2666/README.md)                                                                            |        | Easy   |             |      |
| 2667 | [2667](./problems/2600-2699/2667/README.md)                                                                            |        | Easy   |             |      |
| 2668 | [Find Latest Salaries](./problems/2600-2699/2668/README.md)                                                            | :lock: | Easy   |             |      |
| 2669 | [Count Artist Occurrences On Spotify Ranking List](./problems/2600-2699/2669/README.md)                                | :lock: | Easy   |             |      |
| 2670 | [Find the Distinct Difference Array](./problems/2600-2699/2670/README.md)                                              |        | Easy   |             |      |
| 2671 | [Frequency Tracker](./problems/2600-2699/2671/README.md)                                                               |        | Medium |             |      |
| 2672 | [Number of Adjacent Elements With the Same Color](./problems/2600-2699/2672/README.md)                                 |        | Medium |             |      |
| 2673 | [Make Costs of Paths Equal in a Binary Tree](./problems/2600-2699/2673/README.md)                                      |        | Medium |             |      |
| 2674 | [Split a Circular Linked List](./problems/2600-2699/2674/README.md)                                                    | :lock: | Medium |             |      |
| 2675 | [2675](./problems/2600-2699/2675/README.md)                                                                            |        | Easy   |             |      |
| 2676 | [2676](./problems/2600-2699/2676/README.md)                                                                            |        | Easy   |             |      |
| 2677 | [2677](./problems/2600-2699/2677/README.md)                                                                            |        | Easy   |             |      |
| 2678 | [Number of Senior Citizens](./problems/2600-2699/2678/README.md)                                                       |        | Easy   |             |      |
| 2679 | [Sum in a Matrix](./problems/2600-2699/2679/README.md)                                                                 |        | Medium |             |      |
| 2680 | [Maximum OR](./problems/2600-2699/2680/README.md)                                                                      |        | Medium |             |      |
| 2681 | [Power of Heroes](./problems/2600-2699/2681/README.md)                                                                 |        | Hard   |             |      |
| 2682 | [Find the Losers of the Circular Game](./problems/2600-2699/2682/README.md)                                            |        | Easy   |             |      |
| 2683 | [Neighboring Bitwise XOR](./problems/2600-2699/2683/README.md)                                                         |        | Medium |             |      |
| 2684 | [Maximum Number of Moves in a Grid](./problems/2600-2699/2684/README.md)                                               |        | Medium |             |      |
| 2685 | [Count the Number of Complete Components](./problems/2600-2699/2685/README.md)                                         |        | Medium |             |      |
| 2686 | [Immediate Food Delivery III](./problems/2600-2699/2686/README.md)                                                     | :lock: | Medium |             |      |
| 2687 | [Bikes Last Time Used ](./problems/2600-2699/2687/README.md)                                                           | :lock: | Easy   |             |      |
| 2688 | [Find Active Users](./problems/2600-2699/2688/README.md)                                                               | :lock: | Medium |             |      |
| 2689 | [Extract Kth Character From The Rope Tree](./problems/2600-2699/2689/README.md)                                        | :lock: | Easy   |             |      |
| 2690 | [2690](./problems/2600-2699/2690/README.md)                                                                            |        | Easy   |             |      |
| 2691 | [2691](./problems/2600-2699/2691/README.md)                                                                            |        | Easy   |             |      |
| 2692 | [2692](./problems/2600-2699/2692/README.md)                                                                            |        | Easy   |             |      |
| 2693 | [2693](./problems/2600-2699/2693/README.md)                                                                            |        | Easy   |             |      |
| 2694 | [2694](./problems/2600-2699/2694/README.md)                                                                            |        | Easy   |             |      |
| 2695 | [2695](./problems/2600-2699/2695/README.md)                                                                            |        | Easy   |             |      |
| 2696 | [Minimum String Length After Removing Substrings](./problems/2600-2699/2696/README.md)                                 |        | Easy   |             |      |
| 2697 | [Lexicographically Smallest Palindrome](./problems/2600-2699/2697/README.md)                                           |        | Easy   |             |      |
| 2698 | [Find the Punishment Number of an Integer](./problems/2600-2699/2698/README.md)                                        |        | Medium |             |      |
| 2699 | [Modify Graph Edge Weights](./problems/2600-2699/2699/README.md)                                                       |        | Hard   |             |      |
| 2700 | [2700](./problems/2700-2799/2700/README.md)                                                                            |        | Easy   |             |      |
| 2701 | [Consecutive Transactions with Increasing Amounts](./problems/2700-2799/2701/README.md)                                | :lock: | Hard   |             |      |
| 2702 | [Minimum Operations to Make Numbers Non-positive](./problems/2700-2799/2702/README.md)                                 | :lock: | Hard   |             |      |
| 2703 | [2703](./problems/2700-2799/2703/README.md)                                                                            |        | Easy   |             |      |
| 2704 | [2704](./problems/2700-2799/2704/README.md)                                                                            |        | Easy   |             |      |
| 2705 | [2705](./problems/2700-2799/2705/README.md)                                                                            |        | Easy   |             |      |
| 2706 | [Buy Two Chocolates](./problems/2700-2799/2706/README.md)                                                              |        | Easy   |             |      |
| 2707 | [Extra Characters in a String](./problems/2700-2799/2707/README.md)                                                    |        | Medium |             |      |
| 2708 | [Maximum Strength of a Group](./problems/2700-2799/2708/README.md)                                                     |        | Medium |             |      |
| 2709 | [Greatest Common Divisor Traversal](./problems/2700-2799/2709/README.md)                                               |        | Hard   |             |      |
| 2710 | [Remove Trailing Zeros From a String](./problems/2700-2799/2710/README.md)                                             |        | Easy   |             |      |
| 2711 | [Difference of Number of Distinct Values on Diagonals](./problems/2700-2799/2711/README.md)                            |        | Medium |             |      |
| 2712 | [Minimum Cost to Make All Characters Equal](./problems/2700-2799/2712/README.md)                                       |        | Medium |             |      |
| 2713 | [Maximum Strictly Increasing Cells in a Matrix](./problems/2700-2799/2713/README.md)                                   |        | Hard   |             |      |
| 2714 | [Find Shortest Path with K Hops](./problems/2700-2799/2714/README.md)                                                  | :lock: | Hard   |             |      |
| 2715 | [2715](./problems/2700-2799/2715/README.md)                                                                            |        | Easy   |             |      |
| 2716 | [Minimize String Length](./problems/2700-2799/2716/README.md)                                                          |        | Easy   |             |      |
| 2717 | [Semi-Ordered Permutation](./problems/2700-2799/2717/README.md)                                                        |        | Easy   |             |      |
| 2718 | [Sum of Matrix After Queries](./problems/2700-2799/2718/README.md)                                                     |        | Medium |             |      |
| 2719 | [Count of Integers](./problems/2700-2799/2719/README.md)                                                               |        | Hard   |             |      |
| 2720 | [Popularity Percentage](./problems/2700-2799/2720/README.md)                                                           | :lock: | Hard   |             |      |
| 2721 | [2721](./problems/2700-2799/2721/README.md)                                                                            |        | Easy   |             |      |
| 2722 | [2722](./problems/2700-2799/2722/README.md)                                                                            |        | Easy   |             |      |
| 2723 | [2723](./problems/2700-2799/2723/README.md)                                                                            |        | Easy   |             |      |
| 2724 | [2724](./problems/2700-2799/2724/README.md)                                                                            |        | Easy   |             |      |
| 2725 | [2725](./problems/2700-2799/2725/README.md)                                                                            |        | Easy   |             |      |
| 2726 | [2726](./problems/2700-2799/2726/README.md)                                                                            |        | Easy   |             |      |
| 2727 | [2727](./problems/2700-2799/2727/README.md)                                                                            |        | Easy   |             |      |
| 2728 | [Count Houses in a Circular Street](./problems/2700-2799/2728/README.md)                                               | :lock: | Easy   |             |      |
| 2729 | [Check if The Number is Fascinating](./problems/2700-2799/2729/README.md)                                              |        | Easy   |             |      |
| 2730 | [Find the Longest Semi-Repetitive Substring](./problems/2700-2799/2730/README.md)                                      |        | Medium |             |      |
| 2731 | [Movement of Robots](./problems/2700-2799/2731/README.md)                                                              |        | Medium |             |      |
| 2732 | [Find a Good Subset of the Matrix](./problems/2700-2799/2732/README.md)                                                |        | Hard   |             |      |
| 2733 | [Neither Minimum nor Maximum](./problems/2700-2799/2733/README.md)                                                     |        | Easy   |             |      |
| 2734 | [Lexicographically Smallest String After Substring Operation](./problems/2700-2799/2734/README.md)                     |        | Medium |             |      |
| 2735 | [Collecting Chocolates](./problems/2700-2799/2735/README.md)                                                           |        | Medium |             |      |
| 2736 | [Maximum Sum Queries](./problems/2700-2799/2736/README.md)                                                             |        | Hard   |             |      |
| 2737 | [Find the Closest Marked Node](./problems/2700-2799/2737/README.md)                                                    | :lock: | Medium |             |      |
| 2738 | [Count Occurrences in Text](./problems/2700-2799/2738/README.md)                                                       | :lock: | Medium |             |      |
| 2739 | [Total Distance Traveled](./problems/2700-2799/2739/README.md)                                                         |        | Easy   |             |      |
| 2740 | [Find the Value of the Partition](./problems/2700-2799/2740/README.md)                                                 |        | Medium |             |      |
| 2741 | [Special Permutations](./problems/2700-2799/2741/README.md)                                                            |        | Medium |             |      |
| 2742 | [Painting the Walls](./problems/2700-2799/2742/README.md)                                                              |        | Hard   |             |      |
| 2743 | [Count Substrings Without Repeating Character](./problems/2700-2799/2743/README.md)                                    | :lock: | Medium |             |      |
| 2744 | [Find Maximum Number of String Pairs](./problems/2700-2799/2744/README.md)                                             |        | Easy   |             |      |
| 2745 | [Construct the Longest New String](./problems/2700-2799/2745/README.md)                                                |        | Medium |             |      |
| 2746 | [Decremental String Concatenation](./problems/2700-2799/2746/README.md)                                                |        | Medium |             |      |
| 2747 | [Count Zero Request Servers](./problems/2700-2799/2747/README.md)                                                      |        | Medium |             |      |
| 2748 | [Number of Beautiful Pairs](./problems/2700-2799/2748/README.md)                                                       |        | Easy   |             |      |
| 2749 | [Minimum Operations to Make the Integer Zero](./problems/2700-2799/2749/README.md)                                     |        | Medium |             |      |
| 2750 | [Ways to Split Array Into Good Subarrays](./problems/2700-2799/2750/README.md)                                         |        | Medium |             |      |
| 2751 | [Robot Collisions](./problems/2700-2799/2751/README.md)                                                                |        | Hard   |             |      |
| 2752 | [Customers with Maximum Number of Transactions on Consecutive Days](./problems/2700-2799/2752/README.md)               | :lock: | Hard   |             |      |
| 2753 | [Count Houses in a Circular Street II](./problems/2700-2799/2753/README.md)                                            | :lock: | Hard   |             |      |
| 2754 | [2754](./problems/2700-2799/2754/README.md)                                                                            |        | Easy   |             |      |
| 2755 | [2755](./problems/2700-2799/2755/README.md)                                                                            |        | Easy   |             |      |
| 2756 | [2756](./problems/2700-2799/2756/README.md)                                                                            |        | Easy   |             |      |
| 2757 | [2757](./problems/2700-2799/2757/README.md)                                                                            |        | Easy   |             |      |
| 2758 | [2758](./problems/2700-2799/2758/README.md)                                                                            |        | Easy   |             |      |
| 2759 | [2759](./problems/2700-2799/2759/README.md)                                                                            |        | Easy   |             |      |
| 2760 | [Longest Even Odd Subarray With Threshold](./problems/2700-2799/2760/README.md)                                        |        | Easy   |             |      |
| 2761 | [Prime Pairs With Target Sum](./problems/2700-2799/2761/README.md)                                                     |        | Medium |             |      |
| 2762 | [Continuous Subarrays](./problems/2700-2799/2762/README.md)                                                            |        | Medium |             |      |
| 2763 | [Sum of Imbalance Numbers of All Subarrays](./problems/2700-2799/2763/README.md)                                       |        | Hard   |             |      |
| 2764 | [Is Array a Preorder of Some ‌Binary Tree](./problems/2700-2799/2764/README.md)                                         | :lock: | Medium |             |      |
| 2765 | [Longest Alternating Subarray](./problems/2700-2799/2765/README.md)                                                    |        | Easy   |             |      |
| 2766 | [Relocate Marbles](./problems/2700-2799/2766/README.md)                                                                |        | Medium |             |      |
| 2767 | [Partition String Into Minimum Beautiful Substrings](./problems/2700-2799/2767/README.md)                              |        | Medium |             |      |
| 2768 | [Number of Black Blocks](./problems/2700-2799/2768/README.md)                                                          |        | Medium |             |      |
| 2769 | [Find the Maximum Achievable Number](./problems/2700-2799/2769/README.md)                                              |        | Easy   |             |      |
| 2770 | [Maximum Number of Jumps to Reach the Last Index](./problems/2700-2799/2770/README.md)                                 |        | Medium |             |      |
| 2771 | [Longest Non-decreasing Subarray From Two Arrays](./problems/2700-2799/2771/README.md)                                 |        | Medium |             |      |
| 2772 | [Apply Operations to Make All Array Elements Equal to Zero](./problems/2700-2799/2772/README.md)                       |        | Medium |             |      |
| 2773 | [Height of Special Binary Tree](./problems/2700-2799/2773/README.md)                                                   | :lock: | Medium |             |      |
| 2774 | [2774](./problems/2700-2799/2774/README.md)                                                                            |        | Easy   |             |      |
| 2775 | [2775](./problems/2700-2799/2775/README.md)                                                                            |        | Easy   |             |      |
| 2776 | [2776](./problems/2700-2799/2776/README.md)                                                                            |        | Easy   |             |      |
| 2777 | [2777](./problems/2700-2799/2777/README.md)                                                                            |        | Easy   |             |      |
| 2778 | [Sum of Squares of Special Elements ](./problems/2700-2799/2778/README.md)                                             |        | Easy   |             |      |
| 2779 | [Maximum Beauty of an Array After Applying Operation](./problems/2700-2799/2779/README.md)                             |        | Medium |             |      |
| 2780 | [Minimum Index of a Valid Split](./problems/2700-2799/2780/README.md)                                                  |        | Medium |             |      |
| 2781 | [Length of the Longest Valid Substring](./problems/2700-2799/2781/README.md)                                           |        | Hard   |             |      |
| 2782 | [Number of Unique Categories](./problems/2700-2799/2782/README.md)                                                     | :lock: | Medium |             |      |
| 2783 | [Flight Occupancy and Waitlist Analysis](./problems/2700-2799/2783/README.md)                                          | :lock: | Medium |             |      |
| 2784 | [Check if Array is Good](./problems/2700-2799/2784/README.md)                                                          |        | Easy   |             |      |
| 2785 | [Sort Vowels in a String](./problems/2700-2799/2785/README.md)                                                         |        | Medium |             |      |
| 2786 | [Visit Array Positions to Maximize Score](./problems/2700-2799/2786/README.md)                                         |        | Medium |             |      |
| 2787 | [Ways to Express an Integer as Sum of Powers](./problems/2700-2799/2787/README.md)                                     |        | Medium |             |      |
| 2788 | [Split Strings by Separator](./problems/2700-2799/2788/README.md)                                                      |        | Easy   |             |      |
| 2789 | [Largest Element in an Array after Merge Operations](./problems/2700-2799/2789/README.md)                              |        | Medium |             |      |
| 2790 | [Maximum Number of Groups With Increasing Length](./problems/2700-2799/2790/README.md)                                 |        | Hard   |             |      |
| 2791 | [Count Paths That Can Form a Palindrome in a Tree](./problems/2700-2799/2791/README.md)                                |        | Hard   |             |      |
| 2792 | [Count Nodes That Are Great Enough](./problems/2700-2799/2792/README.md)                                               | :lock: | Hard   |             |      |
| 2793 | [Status of Flight Tickets](./problems/2700-2799/2793/README.md)                                                        | :lock: | Hard   |             |      |
| 2794 | [2794](./problems/2700-2799/2794/README.md)                                                                            |        | Easy   |             |      |
| 2795 | [2795](./problems/2700-2799/2795/README.md)                                                                            |        | Easy   |             |      |
| 2796 | [2796](./problems/2700-2799/2796/README.md)                                                                            |        | Easy   |             |      |
| 2797 | [2797](./problems/2700-2799/2797/README.md)                                                                            |        | Easy   |             |      |
| 2798 | [Number of Employees Who Met the Target](./problems/2700-2799/2798/README.md)                                          |        | Easy   |             |      |
| 2799 | [Count Complete Subarrays in an Array](./problems/2700-2799/2799/README.md)                                            |        | Medium |             |      |
| 2800 | [Shortest String That Contains Three Strings](./problems/2800-2899/2800/README.md)                                     |        | Medium |             |      |
| 2801 | [Count Stepping Numbers in Range](./problems/2800-2899/2801/README.md)                                                 |        | Hard   |             |      |
| 2802 | [Find The K-th Lucky Number](./problems/2800-2899/2802/README.md)                                                      | :lock: | Medium |             |      |
| 2803 | [2803](./problems/2800-2899/2803/README.md)                                                                            |        | Easy   |             |      |
| 2804 | [2804](./problems/2800-2899/2804/README.md)                                                                            |        | Easy   |             |      |
| 2805 | [2805](./problems/2800-2899/2805/README.md)                                                                            |        | Easy   |             |      |
| 2806 | [Account Balance After Rounded Purchase](./problems/2800-2899/2806/README.md)                                          |        | Easy   |             |      |
| 2807 | [Insert Greatest Common Divisors in Linked List](./problems/2800-2899/2807/README.md)                                  |        | Medium |             |      |
| 2808 | [Minimum Seconds to Equalize a Circular Array](./problems/2800-2899/2808/README.md)                                    |        | Medium |             |      |
| 2809 | [Minimum Time to Make Array Sum At Most x](./problems/2800-2899/2809/README.md)                                        |        | Hard   |             |      |
| 2810 | [Faulty Keyboard](./problems/2800-2899/2810/README.md)                                                                 |        | Easy   |             |      |
| 2811 | [Check if it is Possible to Split Array](./problems/2800-2899/2811/README.md)                                          |        | Medium |             |      |
| 2812 | [Find the Safest Path in a Grid](./problems/2800-2899/2812/README.md)                                                  |        | Medium |             |      |
| 2813 | [Maximum Elegance of a K-Length Subsequence](./problems/2800-2899/2813/README.md)                                      |        | Hard   |             |      |
| 2814 | [Minimum Time Takes to Reach Destination Without Drowning](./problems/2800-2899/2814/README.md)                        | :lock: | Hard   |             |      |
| 2815 | [Max Pair Sum in an Array](./problems/2800-2899/2815/README.md)                                                        |        | Easy   |             |      |
| 2816 | [Double a Number Represented as a Linked List](./problems/2800-2899/2816/README.md)                                    |        | Medium |             |      |
| 2817 | [Minimum Absolute Difference Between Elements With Constraint](./problems/2800-2899/2817/README.md)                    |        | Medium |             |      |
| 2818 | [Apply Operations to Maximize Score](./problems/2800-2899/2818/README.md)                                              |        | Hard   |             |      |
| 2819 | [Minimum Relative Loss After Buying Chocolates](./problems/2800-2899/2819/README.md)                                   | :lock: | Hard   |             |      |
| 2820 | [Election Results](./problems/2800-2899/2820/README.md)                                                                | :lock: | Medium |             |      |
| 2821 | [2821](./problems/2800-2899/2821/README.md)                                                                            |        | Easy   |             |      |
| 2822 | [2822](./problems/2800-2899/2822/README.md)                                                                            |        | Easy   |             |      |
| 2823 | [2823](./problems/2800-2899/2823/README.md)                                                                            |        | Easy   |             |      |
| 2824 | [Count Pairs Whose Sum is Less than Target](./problems/2800-2899/2824/README.md)                                       |        | Easy   |             |      |
| 2825 | [Make String a Subsequence Using Cyclic Increments](./problems/2800-2899/2825/README.md)                               |        | Medium |             |      |
| 2826 | [Sorting Three Groups](./problems/2800-2899/2826/README.md)                                                            |        | Medium |             |      |
| 2827 | [Number of Beautiful Integers in the Range](./problems/2800-2899/2827/README.md)                                       |        | Hard   |             |      |
| 2828 | [Check if a String Is an Acronym of Words](./problems/2800-2899/2828/README.md)                                        |        | Easy   |             |      |
| 2829 | [Determine the Minimum Sum of a k-avoiding Array](./problems/2800-2899/2829/README.md)                                 |        | Medium |             |      |
| 2830 | [Maximize the Profit as the Salesman](./problems/2800-2899/2830/README.md)                                             |        | Medium |             |      |
| 2831 | [Find the Longest Equal Subarray](./problems/2800-2899/2831/README.md)                                                 |        | Medium |             |      |
| 2832 | [Maximal Range That Each Element Is Maximum in It](./problems/2800-2899/2832/README.md)                                | :lock: | Medium |             |      |
| 2833 | [Furthest Point From Origin](./problems/2800-2899/2833/README.md)                                                      |        | Easy   |             |      |
| 2834 | [Find the Minimum Possible Sum of a Beautiful Array](./problems/2800-2899/2834/README.md)                              |        | Medium |             |      |
| 2835 | [Minimum Operations to Form Subsequence With Target Sum](./problems/2800-2899/2835/README.md)                          |        | Hard   |             |      |
| 2836 | [Maximize Value of Function in a Ball Passing Game](./problems/2800-2899/2836/README.md)                               |        | Hard   |             |      |
| 2837 | [Total Traveled Distance](./problems/2800-2899/2837/README.md)                                                         | :lock: | Easy   |             |      |
| 2838 | [Maximum Coins Heroes Can Collect](./problems/2800-2899/2838/README.md)                                                | :lock: | Medium |             |      |
| 2839 | [Check if Strings Can be Made Equal With Operations I](./problems/2800-2899/2839/README.md)                            |        | Easy   |             |      |
| 2840 | [Check if Strings Can be Made Equal With Operations II](./problems/2800-2899/2840/README.md)                           |        | Medium |             |      |
| 2841 | [Maximum Sum of Almost Unique Subarray](./problems/2800-2899/2841/README.md)                                           |        | Medium |             |      |
| 2842 | [Count K-Subsequences of a String With Maximum Beauty](./problems/2800-2899/2842/README.md)                            |        | Hard   |             |      |
| 2843 | [  Count Symmetric Integers](./problems/2800-2899/2843/README.md)                                                      |        | Easy   |             |      |
| 2844 | [Minimum Operations to Make a Special Number](./problems/2800-2899/2844/README.md)                                     |        | Medium |             |      |
| 2845 | [Count of Interesting Subarrays](./problems/2800-2899/2845/README.md)                                                  |        | Medium |             |      |
| 2846 | [Minimum Edge Weight Equilibrium Queries in a Tree](./problems/2800-2899/2846/README.md)                               |        | Hard   |             |      |
| 2847 | [Smallest Number With Given Digit Product](./problems/2800-2899/2847/README.md)                                        | :lock: | Medium |             |      |
| 2848 | [Points That Intersect With Cars](./problems/2800-2899/2848/README.md)                                                 |        | Easy   |             |      |
| 2849 | [Determine if a Cell Is Reachable at a Given Time](./problems/2800-2899/2849/README.md)                                |        | Medium |             |      |
| 2850 | [Minimum Moves to Spread Stones Over Grid](./problems/2800-2899/2850/README.md)                                        |        | Medium |             |      |
| 2851 | [String Transformation](./problems/2800-2899/2851/README.md)                                                           |        | Hard   |             |      |
| 2852 | [Sum of Remoteness of All Cells](./problems/2800-2899/2852/README.md)                                                  | :lock: | Medium |             |      |
| 2853 | [Highest Salaries Difference](./problems/2800-2899/2853/README.md)                                                     | :lock: | Easy   |             |      |
| 2854 | [Rolling Average Steps](./problems/2800-2899/2854/README.md)                                                           | :lock: | Medium |             |      |
| 2855 | [Minimum Right Shifts to Sort the Array](./problems/2800-2899/2855/README.md)                                          |        | Easy   |             |      |
| 2856 | [Minimum Array Length After Pair Removals](./problems/2800-2899/2856/README.md)                                        |        | Medium |             |      |
| 2857 | [Count Pairs of Points With Distance k](./problems/2800-2899/2857/README.md)                                           |        | Medium |             |      |
| 2858 | [Minimum Edge Reversals So Every Node Is Reachable](./problems/2800-2899/2858/README.md)                               |        | Hard   |             |      |
| 2859 | [Sum of Values at Indices With K Set Bits](./problems/2800-2899/2859/README.md)                                        |        | Easy   |             |      |
| 2860 | [Happy Students](./problems/2800-2899/2860/README.md)                                                                  |        | Medium |             |      |
| 2861 | [Maximum Number of Alloys](./problems/2800-2899/2861/README.md)                                                        |        | Medium |             |      |
| 2862 | [Maximum Element-Sum of a Complete Subset of Indices](./problems/2800-2899/2862/README.md)                             |        | Hard   |             |      |
| 2863 | [Maximum Length of Semi-Decreasing Subarrays](./problems/2800-2899/2863/README.md)                                     | :lock: | Medium |             |      |
| 2864 | [Maximum Odd Binary Number](./problems/2800-2899/2864/README.md)                                                       |        | Easy   |             |      |
| 2865 | [Beautiful Towers I](./problems/2800-2899/2865/README.md)                                                              |        | Medium |             |      |
| 2866 | [Beautiful Towers II](./problems/2800-2899/2866/README.md)                                                             |        | Medium |             |      |
| 2867 | [Count Valid Paths in a Tree](./problems/2800-2899/2867/README.md)                                                     |        | Hard   |             |      |
| 2868 | [The Wording Game](./problems/2800-2899/2868/README.md)                                                                | :lock: | Hard   |             |      |
| 2869 | [Minimum Operations to Collect Elements](./problems/2800-2899/2869/README.md)                                          |        | Easy   |             |      |
| 2870 | [Minimum Number of Operations to Make Array Empty](./problems/2800-2899/2870/README.md)                                |        | Medium |             |      |
| 2871 | [Split Array Into Maximum Number of Subarrays](./problems/2800-2899/2871/README.md)                                    |        | Medium |             |      |
| 2872 | [Maximum Number of K-Divisible Components](./problems/2800-2899/2872/README.md)                                        |        | Hard   |             |      |
| 2873 | [Maximum Value of an Ordered Triplet I](./problems/2800-2899/2873/README.md)                                           |        | Easy   |             |      |
| 2874 | [Maximum Value of an Ordered Triplet II](./problems/2800-2899/2874/README.md)                                          |        | Medium |             |      |
| 2875 | [Minimum Size Subarray in Infinite Array](./problems/2800-2899/2875/README.md)                                         |        | Medium |             |      |
| 2876 | [Count Visited Nodes in a Directed Graph](./problems/2800-2899/2876/README.md)                                         |        | Hard   |             |      |
| 2877 | [2877](./problems/2800-2899/2877/README.md)                                                                            |        | Easy   |             |      |
| 2878 | [2878](./problems/2800-2899/2878/README.md)                                                                            |        | Easy   |             |      |
| 2879 | [2879](./problems/2800-2899/2879/README.md)                                                                            |        | Easy   |             |      |
| 2880 | [2880](./problems/2800-2899/2880/README.md)                                                                            |        | Easy   |             |      |
| 2881 | [2881](./problems/2800-2899/2881/README.md)                                                                            |        | Easy   |             |      |
| 2882 | [2882](./problems/2800-2899/2882/README.md)                                                                            |        | Easy   |             |      |
| 2883 | [2883](./problems/2800-2899/2883/README.md)                                                                            |        | Easy   |             |      |
| 2884 | [2884](./problems/2800-2899/2884/README.md)                                                                            |        | Easy   |             |      |
| 2885 | [2885](./problems/2800-2899/2885/README.md)                                                                            |        | Easy   |             |      |
| 2886 | [2886](./problems/2800-2899/2886/README.md)                                                                            |        | Easy   |             |      |
| 2887 | [2887](./problems/2800-2899/2887/README.md)                                                                            |        | Easy   |             |      |
| 2888 | [2888](./problems/2800-2899/2888/README.md)                                                                            |        | Easy   |             |      |
| 2889 | [2889](./problems/2800-2899/2889/README.md)                                                                            |        | Easy   |             |      |
| 2890 | [2890](./problems/2800-2899/2890/README.md)                                                                            |        | Easy   |             |      |
| 2891 | [2891](./problems/2800-2899/2891/README.md)                                                                            |        | Easy   |             |      |
| 2892 | [Minimizing Array After Replacing Pairs With Their Product](./problems/2800-2899/2892/README.md)                       | :lock: | Medium |             |      |
| 2893 | [Calculate Orders Within Each Interval](./problems/2800-2899/2893/README.md)                                           | :lock: | Medium |             |      |
| 2894 | [Divisible and Non-divisible Sums Difference](./problems/2800-2899/2894/README.md)                                     |        | Easy   |             |      |
| 2895 | [Minimum Processing Time](./problems/2800-2899/2895/README.md)                                                         |        | Medium |             |      |
| 2896 | [Apply Operations to Make Two Strings Equal](./problems/2800-2899/2896/README.md)                                      |        | Medium |             |      |
| 2897 | [Apply Operations on Array to Maximize Sum of Squares](./problems/2800-2899/2897/README.md)                            |        | Hard   |             |      |
| 2898 | [Maximum Linear Stock Score](./problems/2800-2899/2898/README.md)                                                      | :lock: | Medium |             |      |
| 2899 | [Last Visited Integers](./problems/2800-2899/2899/README.md)                                                           |        | Easy   |             |      |
| 2900 | [Longest Unequal Adjacent Groups Subsequence I](./problems/2900-2999/2900/README.md)                                   |        | Easy   |             |      |
| 2901 | [Longest Unequal Adjacent Groups Subsequence II](./problems/2900-2999/2901/README.md)                                  |        | Medium |             |      |
| 2902 | [Count of Sub-Multisets With Bounded Sum](./problems/2900-2999/2902/README.md)                                         |        | Hard   |             |      |
| 2903 | [Find Indices With Index and Value Difference I](./problems/2900-2999/2903/README.md)                                  |        | Easy   |             |      |
| 2904 | [Shortest and Lexicographically Smallest Beautiful String](./problems/2900-2999/2904/README.md)                        |        | Medium |             |      |
| 2905 | [Find Indices With Index and Value Difference II](./problems/2900-2999/2905/README.md)                                 |        | Medium |             |      |
| 2906 | [Construct Product Matrix](./problems/2900-2999/2906/README.md)                                                        |        | Medium |             |      |
| 2907 | [Maximum Profitable Triplets With Increasing Prices I](./problems/2900-2999/2907/README.md)                            | :lock: | Medium |             |      |
| 2908 | [Minimum Sum of Mountain Triplets I](./problems/2900-2999/2908/README.md)                                              |        | Easy   |             |      |
| 2909 | [Minimum Sum of Mountain Triplets II](./problems/2900-2999/2909/README.md)                                             |        | Medium |             |      |
| 2910 | [Minimum Number of Groups to Create a Valid Assignment](./problems/2900-2999/2910/README.md)                           |        | Medium |             |      |
| 2911 | [Minimum Changes to Make K Semi-palindromes](./problems/2900-2999/2911/README.md)                                      |        | Hard   |             |      |
| 2912 | [Number of Ways to Reach Destination in the Grid](./problems/2900-2999/2912/README.md)                                 | :lock: | Hard   |             |      |
| 2913 | [Subarrays Distinct Element Sum of Squares I](./problems/2900-2999/2913/README.md)                                     |        | Easy   |             |      |
| 2914 | [Minimum Number of Changes to Make Binary String Beautiful](./problems/2900-2999/2914/README.md)                       |        | Medium |             |      |
| 2915 | [Length of the Longest Subsequence That Sums to Target](./problems/2900-2999/2915/README.md)                           |        | Medium |             |      |
| 2916 | [Subarrays Distinct Element Sum of Squares II](./problems/2900-2999/2916/README.md)                                    |        | Hard   |             |      |
| 2917 | [Find the K-or of an Array](./problems/2900-2999/2917/README.md)                                                       |        | Easy   |             |      |
| 2918 | [Minimum Equal Sum of Two Arrays After Replacing Zeros](./problems/2900-2999/2918/README.md)                           |        | Medium |             |      |
| 2919 | [Minimum Increment Operations to Make Array Beautiful](./problems/2900-2999/2919/README.md)                            |        | Medium |             |      |
| 2920 | [Maximum Points After Collecting Coins From All Nodes](./problems/2900-2999/2920/README.md)                            |        | Hard   |             |      |
| 2921 | [Maximum Profitable Triplets With Increasing Prices II](./problems/2900-2999/2921/README.md)                           | :lock: | Hard   |             |      |
| 2922 | [Market Analysis III](./problems/2900-2999/2922/README.md)                                                             | :lock: | Medium |             |      |
| 2923 | [Find Champion I](./problems/2900-2999/2923/README.md)                                                                 |        | Easy   |             |      |
| 2924 | [Find Champion II](./problems/2900-2999/2924/README.md)                                                                |        | Medium |             |      |
| 2925 | [Maximum Score After Applying Operations on a Tree](./problems/2900-2999/2925/README.md)                               |        | Medium |             |      |
| 2926 | [Maximum Balanced Subsequence Sum](./problems/2900-2999/2926/README.md)                                                |        | Hard   |             |      |
| 2927 | [Distribute Candies Among Children III](./problems/2900-2999/2927/README.md)                                           | :lock: | Hard   |             |      |
| 2928 | [Distribute Candies Among Children I](./problems/2900-2999/2928/README.md)                                             |        | Easy   |             |      |
| 2929 | [Distribute Candies Among Children II](./problems/2900-2999/2929/README.md)                                            |        | Medium |             |      |
| 2930 | [Number of Strings Which Can Be Rearranged to Contain Substring](./problems/2900-2999/2930/README.md)                  |        | Medium |             |      |
| 2931 | [Maximum Spending After Buying Items](./problems/2900-2999/2931/README.md)                                             |        | Hard   |             |      |
| 2932 | [Maximum Strong Pair XOR I](./problems/2900-2999/2932/README.md)                                                       |        | Easy   |             |      |
| 2933 | [High-Access Employees](./problems/2900-2999/2933/README.md)                                                           |        | Medium |             |      |
| 2934 | [Minimum Operations to Maximize Last Elements in Arrays](./problems/2900-2999/2934/README.md)                          |        | Medium |             |      |
| 2935 | [Maximum Strong Pair XOR II](./problems/2900-2999/2935/README.md)                                                      |        | Hard   |             |      |
| 2936 | [Number of Equal Numbers Blocks](./problems/2900-2999/2936/README.md)                                                  | :lock: | Medium |             |      |
| 2937 | [Make Three Strings Equal](./problems/2900-2999/2937/README.md)                                                        |        | Easy   |             |      |
| 2938 | [Separate Black and White Balls](./problems/2900-2999/2938/README.md)                                                  |        | Medium |             |      |
| 2939 | [Maximum Xor Product](./problems/2900-2999/2939/README.md)                                                             |        | Medium |             |      |
| 2940 | [Find Building Where Alice and Bob Can Meet](./problems/2900-2999/2940/README.md)                                      |        | Hard   |             |      |
| 2941 | [Maximum GCD-Sum of a Subarray](./problems/2900-2999/2941/README.md)                                                   | :lock: | Hard   |             |      |
| 2942 | [Find Words Containing Character](./problems/2900-2999/2942/README.md)                                                 |        | Easy   |             |      |
| 2943 | [Maximize Area of Square Hole in Grid](./problems/2900-2999/2943/README.md)                                            |        | Medium |             |      |
| 2944 | [Minimum Number of Coins for Fruits](./problems/2900-2999/2944/README.md)                                              |        | Medium |             |      |
| 2945 | [Find Maximum Non-decreasing Array Length](./problems/2900-2999/2945/README.md)                                        |        | Hard   |             |      |
| 2946 | [Matrix Similarity After Cyclic Shifts](./problems/2900-2999/2946/README.md)                                           |        | Easy   |             |      |
| 2947 | [Count Beautiful Substrings I](./problems/2900-2999/2947/README.md)                                                    |        | Medium |             |      |
| 2948 | [Make Lexicographically Smallest Array by Swapping Elements](./problems/2900-2999/2948/README.md)                      |        | Medium |             |      |
| 2949 | [Count Beautiful Substrings II](./problems/2900-2999/2949/README.md)                                                   |        | Hard   |             |      |
| 2950 | [Number of Divisible Substrings](./problems/2900-2999/2950/README.md)                                                  | :lock: | Medium |             |      |
| 2951 | [Find the Peaks](./problems/2900-2999/2951/README.md)                                                                  |        | Easy   |             |      |
| 2952 | [Minimum Number of Coins to be Added](./problems/2900-2999/2952/README.md)                                             |        | Medium |             |      |
| 2953 | [Count Complete Substrings](./problems/2900-2999/2953/README.md)                                                       |        | Hard   |             |      |
| 2954 | [Count the Number of Infection Sequences](./problems/2900-2999/2954/README.md)                                         |        | Hard   |             |      |
| 2955 | [Number of Same-End Substrings](./problems/2900-2999/2955/README.md)                                                   | :lock: | Medium |             |      |
| 2956 | [Find Common Elements Between Two Arrays](./problems/2900-2999/2956/README.md)                                         |        | Easy   |             |      |
| 2957 | [Remove Adjacent Almost-Equal Characters](./problems/2900-2999/2957/README.md)                                         |        | Medium |             |      |
| 2958 | [Length of Longest Subarray With at Most K Frequency](./problems/2900-2999/2958/README.md)                             |        | Medium |             |      |
| 2959 | [Number of Possible Sets of Closing Branches](./problems/2900-2999/2959/README.md)                                     |        | Hard   |             |      |
| 2960 | [Count Tested Devices After Test Operations](./problems/2900-2999/2960/README.md)                                      |        | Easy   |             |      |
| 2961 | [Double Modular Exponentiation](./problems/2900-2999/2961/README.md)                                                   |        | Medium |             |      |
| 2962 | [Count Subarrays Where Max Element Appears at Least K Times](./problems/2900-2999/2962/README.md)                      |        | Medium |             |      |
| 2963 | [Count the Number of Good Partitions](./problems/2900-2999/2963/README.md)                                             |        | Hard   |             |      |
| 2964 | [Number of Divisible Triplet Sums](./problems/2900-2999/2964/README.md)                                                | :lock: | Medium |             |      |
| 2965 | [Find Missing and Repeated Values](./problems/2900-2999/2965/README.md)                                                |        | Easy   |             |      |
| 2966 | [Divide Array Into Arrays With Max Difference](./problems/2900-2999/2966/README.md)                                    |        | Medium |             |      |
| 2967 | [Minimum Cost to Make Array Equalindromic](./problems/2900-2999/2967/README.md)                                        |        | Medium |             |      |
| 2968 | [Apply Operations to Maximize Frequency Score](./problems/2900-2999/2968/README.md)                                    |        | Hard   |             |      |
| 2969 | [Minimum Number of Coins for Fruits II](./problems/2900-2999/2969/README.md)                                           | :lock: | Hard   |             |      |
| 2970 | [Count the Number of Incremovable Subarrays I](./problems/2900-2999/2970/README.md)                                    |        | Easy   |             |      |
| 2971 | [Find Polygon With the Largest Perimeter](./problems/2900-2999/2971/README.md)                                         |        | Medium |             |      |
| 2972 | [Count the Number of Incremovable Subarrays II](./problems/2900-2999/2972/README.md)                                   |        | Hard   |             |      |
| 2973 | [Find Number of Coins to Place in Tree Nodes](./problems/2900-2999/2973/README.md)                                     |        | Hard   |             |      |
| 2974 | [Minimum Number Game](./problems/2900-2999/2974/README.md)                                                             |        | Easy   |             |      |
| 2975 | [Maximum Square Area by Removing Fences From a Field](./problems/2900-2999/2975/README.md)                             |        | Medium |             |      |
| 2976 | [Minimum Cost to Convert String I](./problems/2900-2999/2976/README.md)                                                |        | Medium |             |      |
| 2977 | [Minimum Cost to Convert String II](./problems/2900-2999/2977/README.md)                                               |        | Hard   |             |      |
| 2978 | [Symmetric Coordinates](./problems/2900-2999/2978/README.md)                                                           | :lock: | Medium |             |      |
| 2979 | [Most Expensive Item That Can Not Be Bought](./problems/2900-2999/2979/README.md)                                      | :lock: | Medium |             |      |
| 2980 | [Check if Bitwise OR Has Trailing Zeros](./problems/2900-2999/2980/README.md)                                          |        | Easy   |             |      |
| 2981 | [Find Longest Special Substring That Occurs Thrice I](./problems/2900-2999/2981/README.md)                             |        | Medium |             |      |
| 2982 | [Find Longest Special Substring That Occurs Thrice II](./problems/2900-2999/2982/README.md)                            |        | Medium |             |      |
| 2983 | [Palindrome Rearrangement Queries](./problems/2900-2999/2983/README.md)                                                |        | Hard   |             |      |
| 2984 | [Find Peak Calling Hours for Each City](./problems/2900-2999/2984/README.md)                                           | :lock: | Medium |             |      |
| 2985 | [Calculate Compressed Mean](./problems/2900-2999/2985/README.md)                                                       | :lock: | Easy   |             |      |
| 2986 | [Find Third Transaction](./problems/2900-2999/2986/README.md)                                                          | :lock: | Medium |             |      |
| 2987 | [Find Expensive Cities](./problems/2900-2999/2987/README.md)                                                           | :lock: | Easy   |             |      |
| 2988 | [Manager of the Largest Department](./problems/2900-2999/2988/README.md)                                               | :lock: | Medium |             |      |
| 2989 | [Class Performance](./problems/2900-2999/2989/README.md)                                                               | :lock: | Medium |             |      |
| 2990 | [Loan Types](./problems/2900-2999/2990/README.md)                                                                      | :lock: | Easy   |             |      |
| 2991 | [Top Three Wineries ](./problems/2900-2999/2991/README.md)                                                             | :lock: | Hard   |             |      |
| 2992 | [Number of Self-Divisible Permutations](./problems/2900-2999/2992/README.md)                                           | :lock: | Medium |             |      |
| 2993 | [Friday Purchases I](./problems/2900-2999/2993/README.md)                                                              | :lock: | Medium |             |      |
| 2994 | [Friday Purchases II ](./problems/2900-2999/2994/README.md)                                                            | :lock: | Hard   |             |      |
| 2995 | [Viewers Turned Streamers](./problems/2900-2999/2995/README.md)                                                        | :lock: | Hard   |             |      |
| 2996 | [Smallest Missing Integer Greater Than Sequential Prefix Sum](./problems/2900-2999/2996/README.md)                     |        | Easy   |             |      |
| 2997 | [Minimum Number of Operations to Make Array XOR Equal to K](./problems/2900-2999/2997/README.md)                       |        | Medium |             |      |
| 2998 | [Minimum Number of Operations to Make X and Y Equal](./problems/2900-2999/2998/README.md)                              |        | Medium |             |      |
| 2999 | [Count the Number of Powerful Integers](./problems/2900-2999/2999/README.md)                                           |        | Hard   |             |      |
| 3000 | [Maximum Area of Longest Diagonal Rectangle](./problems/3000-3099/3000/README.md)                                      |        | Easy   |             |      |
| 3001 | [Minimum Moves to Capture The Queen](./problems/3000-3099/3001/README.md)                                              |        | Medium |             |      |
| 3002 | [Maximum Size of a Set After Removals](./problems/3000-3099/3002/README.md)                                            |        | Medium |             |      |
| 3003 | [Maximize the Number of Partitions After Operations](./problems/3000-3099/3003/README.md)                              |        | Hard   |             |      |
| 3004 | [Maximum Subtree of the Same Color](./problems/3000-3099/3004/README.md)                                               | :lock: | Medium |             |      |
| 3005 | [Count Elements With Maximum Frequency](./problems/3000-3099/3005/README.md)                                           |        | Easy   |             |      |
| 3006 | [Find Beautiful Indices in the Given Array I](./problems/3000-3099/3006/README.md)                                     |        | Medium |             |      |
| 3007 | [Maximum Number That Sum of the Prices Is Less Than or Equal to K](./problems/3000-3099/3007/README.md)                |        | Medium |             |      |
| 3008 | [Find Beautiful Indices in the Given Array II](./problems/3000-3099/3008/README.md)                                    |        | Hard   |             |      |
| 3009 | [Maximum Number of Intersections on the Chart](./problems/3000-3099/3009/README.md)                                    | :lock: | Hard   |             |      |
| 3010 | [Divide an Array Into Subarrays With Minimum Cost I](./problems/3000-3099/3010/README.md)                              |        | Easy   |             |      |
| 3011 | [Find if Array Can Be Sorted](./problems/3000-3099/3011/README.md)                                                     |        | Medium |             |      |
| 3012 | [Minimize Length of Array Using Operations](./problems/3000-3099/3012/README.md)                                       |        | Medium |             |      |
| 3013 | [Divide an Array Into Subarrays With Minimum Cost II](./problems/3000-3099/3013/README.md)                             |        | Hard   |             |      |
| 3014 | [Minimum Number of Pushes to Type Word I](./problems/3000-3099/3014/README.md)                                         |        | Easy   |             |      |
| 3015 | [Count the Number of Houses at a Certain Distance I](./problems/3000-3099/3015/README.md)                              |        | Medium |             |      |
| 3016 | [Minimum Number of Pushes to Type Word II](./problems/3000-3099/3016/README.md)                                        |        | Medium |             |      |
| 3017 | [Count the Number of Houses at a Certain Distance II](./problems/3000-3099/3017/README.md)                             |        | Hard   |             |      |
| 3018 | [Maximum Number of Removal Queries That Can Be Processed I](./problems/3000-3099/3018/README.md)                       | :lock: | Hard   |             |      |
| 3019 | [Number of Changing Keys](./problems/3000-3099/3019/README.md)                                                         |        | Easy   |             |      |
| 3020 | [Find the Maximum Number of Elements in Subset](./problems/3000-3099/3020/README.md)                                   |        | Medium |             |      |
| 3021 | [Alice and Bob Playing Flower Game](./problems/3000-3099/3021/README.md)                                               |        | Medium |             |      |
| 3022 | [Minimize OR of Remaining Elements Using Operations](./problems/3000-3099/3022/README.md)                              |        | Hard   |             |      |
| 3023 | [Find Pattern in Infinite Stream I](./problems/3000-3099/3023/README.md)                                               | :lock: | Medium |             |      |
| 3024 | [Type of Triangle](./problems/3000-3099/3024/README.md)                                                                |        | Easy   |             |      |
| 3025 | [Find the Number of Ways to Place People I](./problems/3000-3099/3025/README.md)                                       |        | Medium |             |      |
| 3026 | [Maximum Good Subarray Sum](./problems/3000-3099/3026/README.md)                                                       |        | Medium |             |      |
| 3027 | [Find the Number of Ways to Place People II](./problems/3000-3099/3027/README.md)                                      |        | Hard   |             |      |
| 3028 | [Ant on the Boundary](./problems/3000-3099/3028/README.md)                                                             |        | Easy   |             |      |
| 3029 | [Minimum Time to Revert Word to Initial State I](./problems/3000-3099/3029/README.md)                                  |        | Medium |             |      |
| 3030 | [Find the Grid of Region Average](./problems/3000-3099/3030/README.md)                                                 |        | Medium |             |      |
| 3031 | [Minimum Time to Revert Word to Initial State II](./problems/3000-3099/3031/README.md)                                 |        | Hard   |             |      |
| 3032 | [Count Numbers With Unique Digits II](./problems/3000-3099/3032/README.md)                                             | :lock: | Easy   |             |      |
| 3033 | [Modify the Matrix](./problems/3000-3099/3033/README.md)                                                               |        | Easy   |             |      |
| 3034 | [Number of Subarrays That Match a Pattern I](./problems/3000-3099/3034/README.md)                                      |        | Medium |             |      |
| 3035 | [Maximum Palindromes After Operations](./problems/3000-3099/3035/README.md)                                            |        | Medium |             |      |
| 3036 | [Number of Subarrays That Match a Pattern II](./problems/3000-3099/3036/README.md)                                     |        | Hard   |             |      |
| 3037 | [Find Pattern in Infinite Stream II](./problems/3000-3099/3037/README.md)                                              | :lock: | Hard   |             |      |
| 3038 | [Maximum Number of Operations With the Same Score I](./problems/3000-3099/3038/README.md)                              |        | Easy   |             |      |
| 3039 | [Apply Operations to Make String Empty](./problems/3000-3099/3039/README.md)                                           |        | Medium |             |      |
| 3040 | [Maximum Number of Operations With the Same Score II](./problems/3000-3099/3040/README.md)                             |        | Medium |             |      |
| 3041 | [Maximize Consecutive Elements in an Array After Modification](./problems/3000-3099/3041/README.md)                    |        | Hard   |             |      |
| 3042 | [Count Prefix and Suffix Pairs I](./problems/3000-3099/3042/README.md)                                                 |        | Easy   |             |      |
| 3043 | [Find the Length of the Longest Common Prefix](./problems/3000-3099/3043/README.md)                                    |        | Medium |             |      |
| 3044 | [Most Frequent Prime](./problems/3000-3099/3044/README.md)                                                             |        | Medium |             |      |
| 3045 | [Count Prefix and Suffix Pairs II](./problems/3000-3099/3045/README.md)                                                |        | Hard   |             |      |
| 3046 | [Split the Array](./problems/3000-3099/3046/README.md)                                                                 |        | Easy   |             |      |
| 3047 | [Find the Largest Area of Square Inside Two Rectangles](./problems/3000-3099/3047/README.md)                           |        | Medium |             |      |
| 3048 | [Earliest Second to Mark Indices I](./problems/3000-3099/3048/README.md)                                               |        | Medium |             |      |
| 3049 | [Earliest Second to Mark Indices II](./problems/3000-3099/3049/README.md)                                              |        | Hard   |             |      |
| 3050 | [Pizza Toppings Cost Analysis](./problems/3000-3099/3050/README.md)                                                    | :lock: | Medium |             |      |
| 3051 | [Find Candidates for Data Scientist Position](./problems/3000-3099/3051/README.md)                                     | :lock: | Easy   |             |      |
| 3052 | [Maximize Items](./problems/3000-3099/3052/README.md)                                                                  | :lock: | Hard   |             |      |
| 3053 | [Classifying Triangles by Lengths](./problems/3000-3099/3053/README.md)                                                | :lock: | Easy   |             |      |
| 3054 | [Binary Tree Nodes](./problems/3000-3099/3054/README.md)                                                               | :lock: | Medium |             |      |
| 3055 | [Top Percentile Fraud](./problems/3000-3099/3055/README.md)                                                            | :lock: | Medium |             |      |
| 3056 | [Snaps Analysis](./problems/3000-3099/3056/README.md)                                                                  | :lock: | Medium |             |      |
| 3057 | [Employees Project Allocation](./problems/3000-3099/3057/README.md)                                                    | :lock: | Hard   |             |      |
| 3058 | [Friends With No Mutual Friends](./problems/3000-3099/3058/README.md)                                                  | :lock: | Medium |             |      |
| 3059 | [Find All Unique Email Domains](./problems/3000-3099/3059/README.md)                                                   | :lock: | Easy   |             |      |
| 3060 | [User Activities within Time Bounds](./problems/3000-3099/3060/README.md)                                              | :lock: | Hard   |             |      |
| 3061 | [Calculate Trapping Rain Water](./problems/3000-3099/3061/README.md)                                                   | :lock: | Hard   |             |      |
| 3062 | [Winner of the Linked List Game](./problems/3000-3099/3062/README.md)                                                  | :lock: | Easy   |             |      |
| 3063 | [Linked List Frequency](./problems/3000-3099/3063/README.md)                                                           | :lock: | Easy   |             |      |
| 3064 | [Guess the Number Using Bitwise Questions I](./problems/3000-3099/3064/README.md)                                      | :lock: | Medium |             |      |
| 3065 | [Minimum Operations to Exceed Threshold Value I](./problems/3000-3099/3065/README.md)                                  |        | Easy   |             |      |
| 3066 | [Minimum Operations to Exceed Threshold Value II](./problems/3000-3099/3066/README.md)                                 |        | Medium |             |      |
| 3067 | [Count Pairs of Connectable Servers in a Weighted Tree Network](./problems/3000-3099/3067/README.md)                   |        | Medium |             |      |
| 3068 | [Find the Maximum Sum of Node Values](./problems/3000-3099/3068/README.md)                                             |        | Hard   |             |      |
| 3069 | [Distribute Elements Into Two Arrays I](./problems/3000-3099/3069/README.md)                                           |        | Easy   |             |      |
| 3070 | [Count Submatrices with Top-Left Element and Sum Less Than k](./problems/3000-3099/3070/README.md)                     |        | Medium |             |      |
| 3071 | [Minimum Operations to Write the Letter Y on a Grid](./problems/3000-3099/3071/README.md)                              |        | Medium |             |      |
| 3072 | [Distribute Elements Into Two Arrays II](./problems/3000-3099/3072/README.md)                                          |        | Hard   |             |      |
| 3073 | [Maximum Increasing Triplet Value](./problems/3000-3099/3073/README.md)                                                | :lock: | Medium |             |      |
| 3074 | [Apple Redistribution into Boxes](./problems/3000-3099/3074/README.md)                                                 |        | Easy   |             |      |
| 3075 | [Maximize Happiness of Selected Children](./problems/3000-3099/3075/README.md)                                         |        | Medium |             |      |
| 3076 | [Shortest Uncommon Substring in an Array](./problems/3000-3099/3076/README.md)                                         |        | Medium |             |      |
| 3077 | [Maximum Strength of K Disjoint Subarrays](./problems/3000-3099/3077/README.md)                                        |        | Hard   |             |      |
| 3078 | [Match Alphanumerical Pattern in Matrix I](./problems/3000-3099/3078/README.md)                                        | :lock: | Medium |             |      |
| 3079 | [Find the Sum of Encrypted Integers](./problems/3000-3099/3079/README.md)                                              |        | Easy   |             |      |
| 3080 | [Mark Elements on Array by Performing Queries](./problems/3000-3099/3080/README.md)                                    |        | Medium |             |      |
| 3081 | [Replace Question Marks in String to Minimize Its Value](./problems/3000-3099/3081/README.md)                          |        | Medium |             |      |
| 3082 | [Find the Sum of the Power of All Subsequences](./problems/3000-3099/3082/README.md)                                   |        | Hard   |             |      |
| 3083 | [Existence of a Substring in a String and Its Reverse](./problems/3000-3099/3083/README.md)                            |        | Easy   |             |      |
| 3084 | [Count Substrings Starting and Ending with Given Character](./problems/3000-3099/3084/README.md)                       |        | Medium |             |      |
| 3085 | [Minimum Deletions to Make String K-Special](./problems/3000-3099/3085/README.md)                                      |        | Medium |             |      |
| 3086 | [Minimum Moves to Pick K Ones](./problems/3000-3099/3086/README.md)                                                    |        | Hard   |             |      |
| 3087 | [Find Trending Hashtags](./problems/3000-3099/3087/README.md)                                                          | :lock: | Medium |             |      |
| 3088 | [Make String Anti-palindrome](./problems/3000-3099/3088/README.md)                                                     | :lock: | Hard   |             |      |
| 3089 | [Find Bursty Behavior](./problems/3000-3099/3089/README.md)                                                            | :lock: | Medium |             |      |
| 3090 | [Maximum Length Substring With Two Occurrences](./problems/3000-3099/3090/README.md)                                   |        | Easy   |             |      |
| 3091 | [Apply Operations to Make Sum of Array Greater Than or Equal to k](./problems/3000-3099/3091/README.md)                |        | Medium |             |      |
| 3092 | [Most Frequent IDs](./problems/3000-3099/3092/README.md)                                                               |        | Medium |             |      |
| 3093 | [Longest Common Suffix Queries](./problems/3000-3099/3093/README.md)                                                   |        | Hard   |             |      |
| 3094 | [Guess the Number Using Bitwise Questions II](./problems/3000-3099/3094/README.md)                                     | :lock: | Medium |             |      |
| 3095 | [Shortest Subarray With OR at Least K I](./problems/3000-3099/3095/README.md)                                          |        | Easy   |             |      |
| 3096 | [Minimum Levels to Gain More Points](./problems/3000-3099/3096/README.md)                                              |        | Medium |             |      |
| 3097 | [Shortest Subarray With OR at Least K II](./problems/3000-3099/3097/README.md)                                         |        | Medium |             |      |
| 3098 | [Find the Sum of Subsequence Powers](./problems/3000-3099/3098/README.md)                                              |        | Hard   |             |      |
| 3099 | [Harshad Number](./problems/3000-3099/3099/README.md)                                                                  |        | Easy   |             |      |
| 3100 | [Water Bottles II](./problems/3100-3199/3100/README.md)                                                                |        | Medium |             |      |
| 3101 | [Count Alternating Subarrays](./problems/3100-3199/3101/README.md)                                                     |        | Medium |             |      |
| 3102 | [Minimize Manhattan Distances](./problems/3100-3199/3102/README.md)                                                    |        | Hard   |             |      |
| 3103 | [Find Trending Hashtags II ](./problems/3100-3199/3103/README.md)                                                      | :lock: | Hard   |             |      |
| 3104 | [Find Longest Self-Contained Substring](./problems/3100-3199/3104/README.md)                                           | :lock: | Hard   |             |      |
| 3105 | [Longest Strictly Increasing or Strictly Decreasing Subarray](./problems/3100-3199/3105/README.md)                     |        | Easy   |             |      |
| 3106 | [Lexicographically Smallest String After Operations With Constraint](./problems/3100-3199/3106/README.md)              |        | Medium |             |      |
| 3107 | [Minimum Operations to Make Median of Array Equal to K](./problems/3100-3199/3107/README.md)                           |        | Medium |             |      |
| 3108 | [Minimum Cost Walk in Weighted Graph](./problems/3100-3199/3108/README.md)                                             |        | Hard   |             |      |
| 3109 | [Find the Index of Permutation](./problems/3100-3199/3109/README.md)                                                   | :lock: | Medium |             |      |
| 3110 | [Score of a String](./problems/3100-3199/3110/README.md)                                                               |        | Easy   |             |      |
| 3111 | [Minimum Rectangles to Cover Points](./problems/3100-3199/3111/README.md)                                              |        | Medium |             |      |
| 3112 | [Minimum Time to Visit Disappearing Nodes](./problems/3100-3199/3112/README.md)                                        |        | Medium |             |      |
| 3113 | [Find the Number of Subarrays Where Boundary Elements Are Maximum](./problems/3100-3199/3113/README.md)                |        | Hard   |             |      |
| 3114 | [Latest Time You Can Obtain After Replacing Characters](./problems/3100-3199/3114/README.md)                           |        | Easy   |             |      |
| 3115 | [Maximum Prime Difference](./problems/3100-3199/3115/README.md)                                                        |        | Medium |             |      |
| 3116 | [Kth Smallest Amount With Single Denomination Combination](./problems/3100-3199/3116/README.md)                        |        | Hard   |             |      |
| 3117 | [Minimum Sum of Values by Dividing Array](./problems/3100-3199/3117/README.md)                                         |        | Hard   |             |      |
| 3118 | [Friday Purchase III ](./problems/3100-3199/3118/README.md)                                                            | :lock: | Medium |             |      |
| 3119 | [Maximum Number of Potholes That Can Be Fixed](./problems/3100-3199/3119/README.md)                                    | :lock: | Medium |             |      |
| 3120 | [Count the Number of Special Characters I](./problems/3100-3199/3120/README.md)                                        |        | Easy   |             |      |
| 3121 | [Count the Number of Special Characters II](./problems/3100-3199/3121/README.md)                                       |        | Medium |             |      |
| 3122 | [Minimum Number of Operations to Satisfy Conditions](./problems/3100-3199/3122/README.md)                              |        | Medium |             |      |
| 3123 | [Find Edges in Shortest Paths](./problems/3100-3199/3123/README.md)                                                    |        | Hard   |             |      |
| 3124 | [Find Longest Calls](./problems/3100-3199/3124/README.md)                                                              | :lock: | Medium |             |      |
| 3125 | [Maximum Number That Makes Result of Bitwise AND Zero](./problems/3100-3199/3125/README.md)                            | :lock: | Medium |             |      |
| 3126 | [Server Utilization Time](./problems/3100-3199/3126/README.md)                                                         | :lock: | Medium |             |      |
| 3127 | [Make a Square with the Same Color](./problems/3100-3199/3127/README.md)                                               |        | Easy   |             |      |
| 3128 | [Right Triangles](./problems/3100-3199/3128/README.md)                                                                 |        | Medium |             |      |
| 3129 | [Find All Possible Stable Binary Arrays I](./problems/3100-3199/3129/README.md)                                        |        | Medium |             |      |
| 3130 | [Find All Possible Stable Binary Arrays II](./problems/3100-3199/3130/README.md)                                       |        | Hard   |             |      |
| 3131 | [Find the Integer Added to Array I](./problems/3100-3199/3131/README.md)                                               |        | Easy   |             |      |
| 3132 | [Find the Integer Added to Array II](./problems/3100-3199/3132/README.md)                                              |        | Medium |             |      |
| 3133 | [Minimum Array End](./problems/3100-3199/3133/README.md)                                                               |        | Medium |             |      |
| 3134 | [Find the Median of the Uniqueness Array](./problems/3100-3199/3134/README.md)                                         |        | Hard   |             |      |
| 3135 | [Equalize Strings by Adding or Removing Characters at Ends](./problems/3100-3199/3135/README.md)                       | :lock: | Medium |             |      |
| 3136 | [Valid Word](./problems/3100-3199/3136/README.md)                                                                      |        | Easy   |             |      |
| 3137 | [Minimum Number of Operations to Make Word K-Periodic](./problems/3100-3199/3137/README.md)                            |        | Medium |             |      |
| 3138 | [Minimum Length of Anagram Concatenation](./problems/3100-3199/3138/README.md)                                         |        | Medium |             |      |
| 3139 | [Minimum Cost to Equalize Array](./problems/3100-3199/3139/README.md)                                                  |        | Hard   |             |      |
| 3140 | [Consecutive Available Seats II](./problems/3100-3199/3140/README.md)                                                  | :lock: | Medium |             |      |
| 3141 | [Maximum Hamming Distances](./problems/3100-3199/3141/README.md)                                                       | :lock: | Hard   |             |      |
| 3142 | [Check if Grid Satisfies Conditions](./problems/3100-3199/3142/README.md)                                              |        | Easy   |             |      |
| 3143 | [Maximum Points Inside the Square](./problems/3100-3199/3143/README.md)                                                |        | Medium |             |      |
| 3144 | [Minimum Substring Partition of Equal Character Frequency](./problems/3100-3199/3144/README.md)                        |        | Medium |             |      |
| 3145 | [Find Products of Elements of Big Array](./problems/3100-3199/3145/README.md)                                          |        | Hard   |             |      |
| 3146 | [Permutation Difference between Two Strings](./problems/3100-3199/3146/README.md)                                      |        | Easy   |             |      |
| 3147 | [Taking Maximum Energy From the Mystic Dungeon](./problems/3100-3199/3147/README.md)                                   |        | Medium |             |      |
| 3148 | [Maximum Difference Score in a Grid](./problems/3100-3199/3148/README.md)                                              |        | Medium |             |      |
| 3149 | [Find the Minimum Cost Array Permutation](./problems/3100-3199/3149/README.md)                                         |        | Hard   |             |      |
| 3150 | [Invalid Tweets II](./problems/3100-3199/3150/README.md)                                                               | :lock: | Easy   |             |      |
| 3151 | [Special Array I](./problems/3100-3199/3151/README.md)                                                                 |        | Easy   |             |      |
| 3152 | [Special Array II](./problems/3100-3199/3152/README.md)                                                                |        | Medium |             |      |
| 3153 | [Sum of Digit Differences of All Pairs](./problems/3100-3199/3153/README.md)                                           |        | Medium |             |      |
| 3154 | [Find Number of Ways to Reach the K-th Stair](./problems/3100-3199/3154/README.md)                                     |        | Hard   |             |      |
| 3155 | [Maximum Number of Upgradable Servers](./problems/3100-3199/3155/README.md)                                            | :lock: | Medium |             |      |
| 3156 | [Employee Task Duration and Concurrent Tasks](./problems/3100-3199/3156/README.md)                                     | :lock: | Hard   |             |      |
| 3157 | [Find the Level of Tree with Minimum Sum](./problems/3100-3199/3157/README.md)                                         | :lock: | Medium |             |      |
| 3158 | [Find the XOR of Numbers Which Appear Twice](./problems/3100-3199/3158/README.md)                                      |        | Easy   |             |      |
| 3159 | [Find Occurrences of an Element in an Array](./problems/3100-3199/3159/README.md)                                      |        | Medium |             |      |
| 3160 | [Find the Number of Distinct Colors Among the Balls](./problems/3100-3199/3160/README.md)                              |        | Medium |             |      |
| 3161 | [Block Placement Queries](./problems/3100-3199/3161/README.md)                                                         |        | Hard   |             |      |
| 3162 | [Find the Number of Good Pairs I](./problems/3100-3199/3162/README.md)                                                 |        | Easy   |             |      |
| 3163 | [String Compression III](./problems/3100-3199/3163/README.md)                                                          |        | Medium |             |      |
| 3164 | [Find the Number of Good Pairs II](./problems/3100-3199/3164/README.md)                                                |        | Medium |             |      |
| 3165 | [Maximum Sum of Subsequence With Non-adjacent Elements](./problems/3100-3199/3165/README.md)                           |        | Hard   |             |      |
| 3166 | [Calculate Parking Fees and Duration](./problems/3100-3199/3166/README.md)                                             | :lock: | Medium |             |      |
| 3167 | [Better Compression of String](./problems/3100-3199/3167/README.md)                                                    | :lock: | Medium |             |      |
| 3168 | [Minimum Number of Chairs in a Waiting Room](./problems/3100-3199/3168/README.md)                                      |        | Easy   |             |      |
| 3169 | [Count Days Without Meetings](./problems/3100-3199/3169/README.md)                                                     |        | Medium |             |      |
| 3170 | [Lexicographically Minimum String After Removing Stars](./problems/3100-3199/3170/README.md)                           |        | Medium |             |      |
| 3171 | [Find Subarray With Bitwise OR Closest to K](./problems/3100-3199/3171/README.md)                                      |        | Hard   |             |      |
| 3172 | [Second Day Verification](./problems/3100-3199/3172/README.md)                                                         | :lock: | Easy   |             |      |
| 3173 | [Bitwise OR of Adjacent Elements](./problems/3100-3199/3173/README.md)                                                 | :lock: | Easy   |             |      |
| 3174 | [Clear Digits](./problems/3100-3199/3174/README.md)                                                                    |        | Easy   |             |      |
| 3175 | [Find The First Player to win K Games in a Row](./problems/3100-3199/3175/README.md)                                   |        | Medium |             |      |
| 3176 | [Find the Maximum Length of a Good Subsequence I](./problems/3100-3199/3176/README.md)                                 |        | Medium |             |      |
| 3177 | [Find the Maximum Length of a Good Subsequence II](./problems/3100-3199/3177/README.md)                                |        | Hard   |             |      |
| 3178 | [Find the Child Who Has the Ball After K Seconds](./problems/3100-3199/3178/README.md)                                 |        | Easy   |             |      |
| 3179 | [Find the N-th Value After K Seconds](./problems/3100-3199/3179/README.md)                                             |        | Medium |             |      |
| 3180 | [Maximum Total Reward Using Operations I](./problems/3100-3199/3180/README.md)                                         |        | Medium |             |      |
| 3181 | [Maximum Total Reward Using Operations II](./problems/3100-3199/3181/README.md)                                        |        | Hard   |             |      |
| 3182 | [Find Top Scoring Students](./problems/3100-3199/3182/README.md)                                                       | :lock: | Medium |             |      |
| 3183 | [The Number of Ways to Make the Sum](./problems/3100-3199/3183/README.md)                                              | :lock: | Medium |             |      |
| 3184 | [Count Pairs That Form a Complete Day I](./problems/3100-3199/3184/README.md)                                          |        | Easy   |             |      |
| 3185 | [Count Pairs That Form a Complete Day II](./problems/3100-3199/3185/README.md)                                         |        | Medium |             |      |
| 3186 | [Maximum Total Damage With Spell Casting](./problems/3100-3199/3186/README.md)                                         |        | Medium |             |      |
| 3187 | [Peaks in Array](./problems/3100-3199/3187/README.md)                                                                  |        | Hard   |             |      |
| 3188 | [Find Top Scoring Students II](./problems/3100-3199/3188/README.md)                                                    | :lock: | Hard   |             |      |
| 3189 | [Minimum Moves to Get a Peaceful Board](./problems/3100-3199/3189/README.md)                                           | :lock: | Medium |             |      |
| 3190 | [Find Minimum Operations to Make All Elements Divisible by Three](./problems/3100-3199/3190/README.md)                 |        | Easy   |             |      |
| 3191 | [Minimum Operations to Make Binary Array Elements Equal to One I](./problems/3100-3199/3191/README.md)                 |        | Medium |             |      |
| 3192 | [Minimum Operations to Make Binary Array Elements Equal to One II](./problems/3100-3199/3192/README.md)                |        | Medium |             |      |
| 3193 | [Count the Number of Inversions](./problems/3100-3199/3193/README.md)                                                  |        | Hard   |             |      |
| 3194 | [Minimum Average of Smallest and Largest Elements](./problems/3100-3199/3194/README.md)                                |        | Easy   |             |      |
| 3195 | [Find the Minimum Area to Cover All Ones I](./problems/3100-3199/3195/README.md)                                       |        | Medium |             |      |
| 3196 | [Maximize Total Cost of Alternating Subarrays](./problems/3100-3199/3196/README.md)                                    |        | Medium |             |      |
| 3197 | [Find the Minimum Area to Cover All Ones II](./problems/3100-3199/3197/README.md)                                      |        | Hard   |             |      |
| 3198 | [Find Cities in Each State](./problems/3100-3199/3198/README.md)                                                       | :lock: | Easy   |             |      |
| 3199 | [Count Triplets with Even XOR Set Bits I](./problems/3100-3199/3199/README.md)                                         | :lock: | Easy   |             |      |
| 3200 | [Maximum Height of a Triangle](./problems/3200-3299/3200/README.md)                                                    |        | Easy   |             |      |
| 3201 | [Find the Maximum Length of Valid Subsequence I](./problems/3200-3299/3201/README.md)                                  |        | Medium |             |      |
| 3202 | [Find the Maximum Length of Valid Subsequence II](./problems/3200-3299/3202/README.md)                                 |        | Medium |             |      |
| 3203 | [Find Minimum Diameter After Merging Two Trees](./problems/3200-3299/3203/README.md)                                   |        | Hard   |             |      |
| 3204 | [Bitwise User Permissions Analysis](./problems/3200-3299/3204/README.md)                                               | :lock: | Medium |             |      |
| 3205 | [Maximum Array Hopping Score I](./problems/3200-3299/3205/README.md)                                                   | :lock: | Medium |             |      |
| 3206 | [Alternating Groups I](./problems/3200-3299/3206/README.md)                                                            |        | Easy   |             |      |
| 3207 | [Maximum Points After Enemy Battles](./problems/3200-3299/3207/README.md)                                              |        | Medium |             |      |
| 3208 | [Alternating Groups II](./problems/3200-3299/3208/README.md)                                                           |        | Medium |             |      |
| 3209 | [Number of Subarrays With AND Value of K](./problems/3200-3299/3209/README.md)                                         |        | Hard   |             |      |
| 3210 | [Find the Encrypted String](./problems/3200-3299/3210/README.md)                                                       |        | Easy   |             |      |
| 3211 | [Generate Binary Strings Without Adjacent Zeros](./problems/3200-3299/3211/README.md)                                  |        | Medium |             |      |
| 3212 | [Count Submatrices With Equal Frequency of X and Y](./problems/3200-3299/3212/README.md)                               |        | Medium |             |      |
| 3213 | [Construct String with Minimum Cost](./problems/3200-3299/3213/README.md)                                              |        | Hard   |             |      |
| 3214 | [Year on Year Growth Rate](./problems/3200-3299/3214/README.md)                                                        | :lock: | Hard   |             |      |
| 3215 | [Count Triplets with Even XOR Set Bits II](./problems/3200-3299/3215/README.md)                                        | :lock: | Medium |             |      |
| 3216 | [Lexicographically Smallest String After a Swap](./problems/3200-3299/3216/README.md)                                  |        | Easy   |             |      |
| 3217 | [Delete Nodes From Linked List Present in Array](./problems/3200-3299/3217/README.md)                                  |        | Medium |             |      |
| 3218 | [Minimum Cost for Cutting Cake I](./problems/3200-3299/3218/README.md)                                                 |        | Medium |             |      |
| 3219 | [Minimum Cost for Cutting Cake II](./problems/3200-3299/3219/README.md)                                                |        | Hard   |             |      |
| 3220 | [Odd and Even Transactions](./problems/3200-3299/3220/README.md)                                                       | :soon: | Medium |             |      |
| 3221 | [Maximum Array Hopping Score II](./problems/3200-3299/3221/README.md)                                                  | :lock: | Medium |             |      |
| 3222 | [Find the Winning Player in Coin Game](./problems/3200-3299/3222/README.md)                                            |        | Easy   |             |      |
| 3223 | [Minimum Length of String After Operations](./problems/3200-3299/3223/README.md)                                       |        | Medium |             |      |
| 3224 | [Minimum Array Changes to Make Differences Equal](./problems/3200-3299/3224/README.md)                                 |        | Medium |             |      |
| 3225 | [Maximum Score From Grid Operations](./problems/3200-3299/3225/README.md)                                              |        | Hard   |             |      |
| 3226 | [Number of Bit Changes to Make Two Integers Equal](./problems/3200-3299/3226/README.md)                                |        | Easy   |             |      |
| 3227 | [Vowels Game in a String](./problems/3200-3299/3227/README.md)                                                         |        | Medium |             |      |
| 3228 | [Maximum Number of Operations to Move Ones to the End](./problems/3200-3299/3228/README.md)                            |        | Medium |             |      |
| 3229 | [Minimum Operations to Make Array Equal to Target](./problems/3200-3299/3229/README.md)                                |        | Hard   |             |      |
| 3230 | [Customer Purchasing Behavior Analysis](./problems/3200-3299/3230/README.md)                                           | :lock: | Medium |             |      |
| 3231 | [Minimum Number of Increasing Subsequence to Be Removed](./problems/3200-3299/3231/README.md)                          | :lock: | Hard   |             |      |
| 3232 | [Find if Digit Game Can Be Won](./problems/3200-3299/3232/README.md)                                                   |        | Easy   |             |      |
| 3233 | [Find the Count of Numbers Which Are Not Special](./problems/3200-3299/3233/README.md)                                 |        | Medium |             |      |
| 3234 | [Count the Number of Substrings With Dominant Ones](./problems/3200-3299/3234/README.md)                               |        | Medium |             |      |
| 3235 | [Check if the Rectangle Corner Is Reachable](./problems/3200-3299/3235/README.md)                                      |        | Hard   |             |      |
| 3236 | [CEO Subordinate Hierarchy](./problems/3200-3299/3236/README.md)                                                       | :lock: | Hard   |             |      |
| 3237 | [Alt and Tab Simulation](./problems/3200-3299/3237/README.md)                                                          | :lock: | Medium |             |      |
| 3238 | [Find the Number of Winning Players](./problems/3200-3299/3238/README.md)                                              |        | Easy   |             |      |
| 3239 | [Minimum Number of Flips to Make Binary Grid Palindromic I](./problems/3200-3299/3239/README.md)                       |        | Medium |             |      |
| 3240 | [Minimum Number of Flips to Make Binary Grid Palindromic II](./problems/3200-3299/3240/README.md)                      |        | Medium |             |      |
| 3241 | [Time Taken to Mark All Nodes](./problems/3200-3299/3241/README.md)                                                    |        | Hard   |             |      |
| 3242 | [Design Neighbor Sum Service](./problems/3200-3299/3242/README.md)                                                     |        | Easy   |             |      |
| 3243 | [Shortest Distance After Road Addition Queries I](./problems/3200-3299/3243/README.md)                                 |        | Medium |             |      |
| 3244 | [Shortest Distance After Road Addition Queries II](./problems/3200-3299/3244/README.md)                                |        | Hard   |             |      |
| 3245 | [Alternating Groups III](./problems/3200-3299/3245/README.md)                                                          |        | Hard   |             |      |
| 3246 | [Premier League Table Ranking](./problems/3200-3299/3246/README.md)                                                    | :lock: | Easy   |             |      |
| 3247 | [Number of Subsequences with Odd Sum](./problems/3200-3299/3247/README.md)                                             | :lock: | Medium |             |      |
| 3248 | [Snake in Matrix](./problems/3200-3299/3248/README.md)                                                                 |        | Easy   |             |      |
| 3249 | [Count the Number of Good Nodes](./problems/3200-3299/3249/README.md)                                                  |        | Medium |             |      |
| 3250 | [Find the Count of Monotonic Pairs I](./problems/3200-3299/3250/README.md)                                             |        | Hard   |             |      |
| 3251 | [Find the Count of Monotonic Pairs II](./problems/3200-3299/3251/README.md)                                            |        | Hard   |             |      |
| 3252 | [Premier League Table Ranking II](./problems/3200-3299/3252/README.md)                                                 | :lock: | Medium |             |      |
| 3253 | [Construct String with Minimum Cost (Easy)](./problems/3200-3299/3253/README.md)                                       | :lock: | Medium |             |      |
| 3254 | [Find the Power of K-Size Subarrays I](./problems/3200-3299/3254/README.md)                                            |        | Medium |             |      |
| 3255 | [Find the Power of K-Size Subarrays II](./problems/3200-3299/3255/README.md)                                           |        | Medium |             |      |
| 3256 | [Maximum Value Sum by Placing Three Rooks I](./problems/3200-3299/3256/README.md)                                      |        | Hard   |             |      |
| 3257 | [Maximum Value Sum by Placing Three Rooks II](./problems/3200-3299/3257/README.md)                                     |        | Hard   |             |      |
| 3258 | [Count Substrings That Satisfy K-Constraint I](./problems/3200-3299/3258/README.md)                                    |        | Easy   |             |      |
| 3259 | [Maximum Energy Boost From Two Drinks](./problems/3200-3299/3259/README.md)                                            |        | Medium |             |      |
| 3260 | [Find the Largest Palindrome Divisible by K](./problems/3200-3299/3260/README.md)                                      |        | Hard   |             |      |
| 3261 | [Count Substrings That Satisfy K-Constraint II](./problems/3200-3299/3261/README.md)                                   |        | Hard   |             |      |
| 3262 | [Find Overlapping Shifts](./problems/3200-3299/3262/README.md)                                                         | :lock: | Medium |             |      |
| 3263 | [Convert Doubly Linked List to Array I](./problems/3200-3299/3263/README.md)                                           | :lock: | Easy   |             |      |
| 3264 | [Final Array State After K Multiplication Operations I](./problems/3200-3299/3264/README.md)                           |        | Easy   |             |      |
| 3265 | [Count Almost Equal Pairs I](./problems/3200-3299/3265/README.md)                                                      |        | Medium |             |      |
| 3266 | [Final Array State After K Multiplication Operations II](./problems/3200-3299/3266/README.md)                          |        | Hard   |             |      |
| 3267 | [Count Almost Equal Pairs II](./problems/3200-3299/3267/README.md)                                                     |        | Hard   |             |      |
| 3268 | [Find Overlapping Shifts II](./problems/3200-3299/3268/README.md)                                                      | :lock: | Hard   |             |      |
| 3269 | [Constructing Two Increasing Arrays](./problems/3200-3299/3269/README.md)                                              | :lock: | Hard   |             |      |
| 3270 | [Find the Key of the Numbers](./problems/3200-3299/3270/README.md)                                                     |        | Easy   |             |      |
| 3271 | [Hash Divided String](./problems/3200-3299/3271/README.md)                                                             |        | Medium |             |      |
| 3272 | [Find the Count of Good Integers](./problems/3200-3299/3272/README.md)                                                 |        | Hard   |             |      |
| 3273 | [Minimum Amount of Damage Dealt to Bob](./problems/3200-3299/3273/README.md)                                           |        | Hard   |             |      |
| 3274 | [Check if Two Chessboard Squares Have the Same Color](./problems/3200-3299/3274/README.md)                             |        | Easy   |             |      |
| 3275 | [K-th Nearest Obstacle Queries](./problems/3200-3299/3275/README.md)                                                   |        | Medium |             |      |
| 3276 | [Select Cells in Grid With Maximum Score](./problems/3200-3299/3276/README.md)                                         |        | Hard   |             |      |
| 3277 | [Maximum XOR Score Subarray Queries](./problems/3200-3299/3277/README.md)                                              |        | Hard   |             |      |
| 3278 | [Find Candidates for Data Scientist Position II](./problems/3200-3299/3278/README.md)                                  | :lock: | Medium |             |      |
| 3279 | [Maximum Total Area Occupied by Pistons](./problems/3200-3299/3279/README.md)                                          | :lock: | Hard   |             |      |
| 3280 | [Convert Date to Binary](./problems/3200-3299/3280/README.md)                                                          |        | Easy   |             |      |
| 3281 | [Maximize Score of Numbers in Ranges](./problems/3200-3299/3281/README.md)                                             |        | Medium |             |      |
| 3282 | [Reach End of Array With Max Score](./problems/3200-3299/3282/README.md)                                               |        | Medium |             |      |
| 3283 | [Maximum Number of Moves to Kill All Pawns](./problems/3200-3299/3283/README.md)                                       |        | Hard   |             |      |
| 3284 | [Sum of Consecutive Subarrays](./problems/3200-3299/3284/README.md)                                                    | :lock: | Medium |             |      |
| 3285 | [Find Indices of Stable Mountains](./problems/3200-3299/3285/README.md)                                                |        | Easy   |             |      |
| 3286 | [Find a Safe Walk Through a Grid](./problems/3200-3299/3286/README.md)                                                 |        | Medium |             |      |
| 3287 | [Find the Maximum Sequence Value of Array](./problems/3200-3299/3287/README.md)                                        |        | Hard   |             |      |
| 3288 | [Length of the Longest Increasing Path](./problems/3200-3299/3288/README.md)                                           |        | Hard   |             |      |
| 3289 | [The Two Sneaky Numbers of Digitville](./problems/3200-3299/3289/README.md)                                            |        | Easy   |             |      |
| 3290 | [Maximum Multiplication Score](./problems/3200-3299/3290/README.md)                                                    |        | Medium |             |      |
| 3291 | [Minimum Number of Valid Strings to Form Target I](./problems/3200-3299/3291/README.md)                                |        | Medium |             |      |
| 3292 | [Minimum Number of Valid Strings to Form Target II](./problems/3200-3299/3292/README.md)                               |        | Hard   |             |      |
| 3293 | [Calculate Product Final Price](./problems/3200-3299/3293/README.md)                                                   | :lock: | Medium |             |      |
| 3294 | [Convert Doubly Linked List to Array II](./problems/3200-3299/3294/README.md)                                          | :lock: | Medium |             |      |
| 3295 | [Report Spam Message](./problems/3200-3299/3295/README.md)                                                             |        | Medium |             |      |
| 3296 | [Minimum Number of Seconds to Make Mountain Height Zero](./problems/3200-3299/3296/README.md)                          |        | Medium |             |      |
| 3297 | [Count Substrings That Can Be Rearranged to Contain a String I](./problems/3200-3299/3297/README.md)                   |        | Medium |             |      |
| 3298 | [Count Substrings That Can Be Rearranged to Contain a String II](./problems/3200-3299/3298/README.md)                  |        | Hard   |             |      |
| 3299 | [Sum of Consecutive Subsequences](./problems/3200-3299/3299/README.md)                                                 | :lock: | Hard   |             |      |
| 3300 | [Minimum Element After Replacement With Digit Sum](./problems/3300-3399/3300/README.md)                                |        | Easy   |             |      |
| 3301 | [Maximize the Total Height of Unique Towers](./problems/3300-3399/3301/README.md)                                      |        | Medium |             |      |
| 3302 | [Find the Lexicographically Smallest Valid Sequence](./problems/3300-3399/3302/README.md)                              |        | Medium |             |      |
| 3303 | [Find the Occurrence of First Almost Equal Substring](./problems/3300-3399/3303/README.md)                             |        | Hard   |             |      |
| 3304 | [Find the K-th Character in String Game I](./problems/3300-3399/3304/README.md)                                        |        | Easy   |             |      |
| 3305 | [Count of Substrings Containing Every Vowel and K Consonants I](./problems/3300-3399/3305/README.md)                   |        | Medium |             |      |
| 3306 | [Count of Substrings Containing Every Vowel and K Consonants II](./problems/3300-3399/3306/README.md)                  |        | Medium |             |      |
| 3307 | [Find the K-th Character in String Game II](./problems/3300-3399/3307/README.md)                                       |        | Hard   |             |      |
| 3308 | [Find Top Performing Driver](./problems/3300-3399/3308/README.md)                                                      | :lock: | Medium |             |      |
| 3309 | [Maximum Possible Number by Binary Concatenation](./problems/3300-3399/3309/README.md)                                 |        | Medium |             |      |
| 3310 | [Remove Methods From Project](./problems/3300-3399/3310/README.md)                                                     |        | Medium |             |      |
| 3311 | [Construct 2D Grid Matching Graph Layout](./problems/3300-3399/3311/README.md)                                         |        | Hard   |             |      |
| 3312 | [Sorted GCD Pair Queries](./problems/3300-3399/3312/README.md)                                                         |        | Hard   |             |      |
| 3313 | [Find the Last Marked Nodes in Tree](./problems/3300-3399/3313/README.md)                                              | :lock: | Hard   |             |      |
| 3314 | [Construct the Minimum Bitwise Array I](./problems/3300-3399/3314/README.md)                                           |        | Easy   |             |      |
| 3315 | [Construct the Minimum Bitwise Array II](./problems/3300-3399/3315/README.md)                                          |        | Medium |             |      |
| 3316 | [Find Maximum Removals From Source String](./problems/3300-3399/3316/README.md)                                        |        | Medium |             |      |
| 3317 | [Find the Number of Possible Ways for an Event](./problems/3300-3399/3317/README.md)                                   |        | Hard   |             |      |
| 3318 | [Find X-Sum of All K-Long Subarrays I](./problems/3300-3399/3318/README.md)                                            |        | Easy   |             |      |
| 3319 | [K-th Largest Perfect Subtree Size in Binary Tree](./problems/3300-3399/3319/README.md)                                |        | Medium |             |      |
| 3320 | [Count The Number of Winning Sequences](./problems/3300-3399/3320/README.md)                                           |        | Hard   |             |      |
| 3321 | [Find X-Sum of All K-Long Subarrays II](./problems/3300-3399/3321/README.md)                                           |        | Hard   |             |      |
| 3322 | [Premier League Table Ranking III](./problems/3300-3399/3322/README.md)                                                | :lock: | Medium |             |      |
| 3323 | [Minimize Connected Groups by Inserting Interval](./problems/3300-3399/3323/README.md)                                 | :lock: | Medium |             |      |
| 3324 | [Find the Sequence of Strings Appeared on the Screen](./problems/3300-3399/3324/README.md)                             |        | Medium |             |      |
| 3325 | [Count Substrings With K-Frequency Characters I](./problems/3300-3399/3325/README.md)                                  |        | Medium |             |      |
| 3326 | [Minimum Division Operations to Make Array Non Decreasing](./problems/3300-3399/3326/README.md)                        |        | Medium |             |      |
| 3327 | [Check if DFS Strings Are Palindromes](./problems/3300-3399/3327/README.md)                                            |        | Hard   |             |      |
| 3328 | [Find Cities in Each State II](./problems/3300-3399/3328/README.md)                                                    | :lock: | Medium |             |      |
| 3329 | [Count Substrings With K-Frequency Characters II](./problems/3300-3399/3329/README.md)                                 | :lock: | Hard   |             |      |
| 3330 | [Find the Original Typed String I](./problems/3300-3399/3330/README.md)                                                |        | Easy   |             |      |
| 3331 | [Find Subtree Sizes After Changes](./problems/3300-3399/3331/README.md)                                                |        | Medium |             |      |
| 3332 | [Maximum Points Tourist Can Earn](./problems/3300-3399/3332/README.md)                                                 |        | Medium |             |      |
| 3333 | [Find the Original Typed String II](./problems/3300-3399/3333/README.md)                                               |        | Hard   |             |      |
| 3334 | [Find the Maximum Factor Score of Array](./problems/3300-3399/3334/README.md)                                          |        | Medium |             |      |
| 3335 | [Total Characters in String After Transformations I](./problems/3300-3399/3335/README.md)                              |        | Medium |             |      |
| 3336 | [Find the Number of Subsequences With Equal GCD](./problems/3300-3399/3336/README.md)                                  |        | Hard   |             |      |
| 3337 | [Total Characters in String After Transformations II](./problems/3300-3399/3337/README.md)                             |        | Hard   |             |      |
| 3338 | [Second Highest Salary II](./problems/3300-3399/3338/README.md)                                                        | :lock: | Medium |             |      |
| 3339 | [Find the Number of K-Even Arrays](./problems/3300-3399/3339/README.md)                                                | :lock: | Medium |             |      |
| 3340 | [Check Balanced String](./problems/3300-3399/3340/README.md)                                                           |        | Easy   |             |      |
| 3341 | [Find Minimum Time to Reach Last Room I](./problems/3300-3399/3341/README.md)                                          |        | Medium |             |      |
| 3342 | [Find Minimum Time to Reach Last Room II](./problems/3300-3399/3342/README.md)                                         |        | Medium |             |      |
| 3343 | [Count Number of Balanced Permutations](./problems/3300-3399/3343/README.md)                                           |        | Hard   |             |      |
| 3344 | [Maximum Sized Array](./problems/3300-3399/3344/README.md)                                                             | :lock: | Medium |             |      |
| 3345 | [Smallest Divisible Digit Product I](./problems/3300-3399/3345/README.md)                                              |        | Easy   |             |      |
| 3346 | [Maximum Frequency of an Element After Performing Operations I](./problems/3300-3399/3346/README.md)                   |        | Medium |             |      |
| 3347 | [Maximum Frequency of an Element After Performing Operations II](./problems/3300-3399/3347/README.md)                  |        | Hard   |             |      |
| 3348 | [Smallest Divisible Digit Product II](./problems/3300-3399/3348/README.md)                                             |        | Hard   |             |      |
| 3349 | [Adjacent Increasing Subarrays Detection I](./problems/3300-3399/3349/README.md)                                       |        | Easy   |             |      |
| 3350 | [Adjacent Increasing Subarrays Detection II](./problems/3300-3399/3350/README.md)                                      |        | Medium |             |      |
| 3351 | [Sum of Good Subsequences](./problems/3300-3399/3351/README.md)                                                        |        | Hard   |             |      |
| 3352 | [Count K-Reducible Numbers Less Than N](./problems/3300-3399/3352/README.md)                                           |        | Hard   |             |      |
| 3353 | [Minimum Total Operations](./problems/3300-3399/3353/README.md)                                                        | :lock: | Easy   |             |      |
| 3354 | [Make Array Elements Equal to Zero](./problems/3300-3399/3354/README.md)                                               |        | Easy   |             |      |
| 3355 | [Zero Array Transformation I](./problems/3300-3399/3355/README.md)                                                     |        | Medium |             |      |
| 3356 | [Zero Array Transformation II](./problems/3300-3399/3356/README.md)                                                    |        | Medium |             |      |
| 3357 | [Minimize the Maximum Adjacent Element Difference](./problems/3300-3399/3357/README.md)                                |        | Hard   |             |      |
| 3358 | [Books with NULL Ratings](./problems/3300-3399/3358/README.md)                                                         | :lock: | Easy   |             |      |
| 3359 | [Find Sorted Submatrices With Maximum Element at Most K](./problems/3300-3399/3359/README.md)                          | :lock: | Hard   |             |      |
| 3360 | [Stone Removal Game](./problems/3300-3399/3360/README.md)                                                              |        | Easy   |             |      |
| 3361 | [Shift Distance Between Two Strings](./problems/3300-3399/3361/README.md)                                              |        | Medium |             |      |
| 3362 | [Zero Array Transformation III](./problems/3300-3399/3362/README.md)                                                   |        | Medium |             |      |
| 3363 | [Find the Maximum Number of Fruits Collected](./problems/3300-3399/3363/README.md)                                     |        | Hard   |             |      |
| 3364 | [Minimum Positive Sum Subarray ](./problems/3300-3399/3364/README.md)                                                  |        | Easy   |             |      |
| 3365 | [Rearrange K Substrings to Form Target String](./problems/3300-3399/3365/README.md)                                    |        | Medium |             |      |
| 3366 | [Minimum Array Sum](./problems/3300-3399/3366/README.md)                                                               |        | Medium |             |      |
| 3367 | [Maximize Sum of Weights after Edge Removals](./problems/3300-3399/3367/README.md)                                     |        | Hard   |             |      |
| 3368 | [First Letter Capitalization](./problems/3300-3399/3368/README.md)                                                     | :lock: | Hard   |             |      |
| 3369 | [Design an Array Statistics Tracker ](./problems/3300-3399/3369/README.md)                                             | :lock: | Hard   |             |      |
| 3370 | [Smallest Number With All Set Bits](./problems/3300-3399/3370/README.md)                                               |        | Easy   |             |      |
| 3371 | [Identify the Largest Outlier in an Array](./problems/3300-3399/3371/README.md)                                        |        | Medium |             |      |
| 3372 | [Maximize the Number of Target Nodes After Connecting Trees I](./problems/3300-3399/3372/README.md)                    |        | Medium |             |      |
| 3373 | [Maximize the Number of Target Nodes After Connecting Trees II](./problems/3300-3399/3373/README.md)                   |        | Hard   |             |      |
| 3374 | [First Letter Capitalization II](./problems/3300-3399/3374/README.md)                                                  | :soon: | Hard   |             |      |
| 3375 | [Minimum Operations to Make Array Values Equal to K](./problems/3300-3399/3375/README.md)                              |        | Easy   |             |      |
| 3376 | [Minimum Time to Break Locks I](./problems/3300-3399/3376/README.md)                                                   |        | Medium |             |      |
| 3377 | [Digit Operations to Make Two Integers Equal](./problems/3300-3399/3377/README.md)                                     |        | Medium |             |      |
| 3378 | [Count Connected Components in LCM Graph](./problems/3300-3399/3378/README.md)                                         |        | Hard   |             |      |
| 3379 | [Transformed Array](./problems/3300-3399/3379/README.md)                                                               |        | Easy   |             |      |
| 3380 | [Maximum Area Rectangle With Point Constraints I](./problems/3300-3399/3380/README.md)                                 |        | Medium |             |      |
| 3381 | [Maximum Subarray Sum With Length Divisible by K](./problems/3300-3399/3381/README.md)                                 |        | Medium |             |      |
| 3382 | [Maximum Area Rectangle With Point Constraints II](./problems/3300-3399/3382/README.md)                                |        | Hard   |             |      |
| 3383 | [Minimum Runes to Add to Cast Spell](./problems/3300-3399/3383/README.md)                                              | :lock: | Hard   |             |      |
| 3384 | [Team Dominance by Pass Success](./problems/3300-3399/3384/README.md)                                                  | :lock: | Hard   |             |      |
| 3385 | [Minimum Time to Break Locks II](./problems/3300-3399/3385/README.md)                                                  | :lock: | Hard   |             |      |
| 3386 | [Button with Longest Push Time](./problems/3300-3399/3386/README.md)                                                   |        | Easy   |             |      |
| 3387 | [Maximize Amount After Two Days of Conversions](./problems/3300-3399/3387/README.md)                                   |        | Medium |             |      |
| 3388 | [Count Beautiful Splits in an Array](./problems/3300-3399/3388/README.md)                                              |        | Medium |             |      |
| 3389 | [Minimum Operations to Make Character Frequencies Equal](./problems/3300-3399/3389/README.md)                          |        | Hard   |             |      |
| 3390 | [Longest Team Pass Streak](./problems/3300-3399/3390/README.md)                                                        | :lock: | Hard   |             |      |
| 3391 | [Design a 3D Binary Matrix with Efficient Layer Tracking](./problems/3300-3399/3391/README.md)                         | :lock: | Medium |             |      |
