# [458] Poor Pigs

## Description

* algorithms
* Easy (44.24%)
* Total Accepted:    13.8K
* Total Submissions: 31.2K
* Testcase Example:  '1000\n15\n60'

```md
There are 1000 buckets, one and only one of them contains poison, the rest are filled with water. They all look the same. If a pig drinks that poison it will die within 15 minutes. What is the minimum amount of pigs you need to figure out which bucket contains the poison within one hour.
Answer this question, and write an algorithm for the follow-up general case.
Follow-up: 
If there are n buckets and a pig drinking poison will die within m minutes, how many pigs (x) you need to figure out the "poison" bucket within p minutes? There is exact one bucket with poison.

```

## Solution

首先计算可以测试几轮 ： ~~(minutesToTest / minutesToDie)

将 buckets 数量表示为 `sn = ~~(minutesToTest / minutesToDie) + 1` 进制 可以用 `x = Math.ceil(Math.log(buckets) / Math.log(sn))` 位数表示，则每个 bucket 编号都可以表示为 x 位 sn 进制的数字

第一轮，用 x 只猪编号为 `i = 0 ~ x-1`，猪 i 喂食 i 位上 等于 1 的 所有bucket 混合的药，如果死了说明有毒的药该位上位 1

第二轮，活下去的猪，猪 i 喂食 i 位上 等于 2 的 所有bucket 混合的药

... ... 依次

最终到 sn -1 轮，只剩下一个数字 0 没有尝试，活下去的猪对应的位上即为0 

[SourceCode](./solution.js)