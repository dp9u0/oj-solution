# [2868] 单词游戏

## Description


```md
https://leetcode.cn/problems/the-wording-game/description/
* algorithms
* Hard (40.44%)
* Dislikes: -
* Testcase Example:  '["avokado","dabar"]\n["brazil"]'
Alice 和 Bob 分别拥有一个 按字典序排序 的字符串数组，分别命名为 a 和 b。
他们正在玩一个单词游戏，遵循以下规则：
每一轮，当前玩家应该从他的列表中选择一个单词，并且选择的单词比上一个单词 紧邻大；然后轮到另一名玩家。
如果一名玩家在自己的回合中无法选择单词，则输掉比赛。
Alice 通过选择在 字典序最小 的单词开始游戏。
给定 a 和 b，已知两名玩家都按最佳策略玩游戏，如果 Alice 可以获胜，则返回 true ，否则返回 false。
如果满足以下条件，则称一个单词 w 比另一个单词 z 紧邻大：
w 在 字典序上大于 z。
如果 w1 是 w 的第一个字母，z1 是 z 的第一个字母，那么 w1 应该 等于 z1 或者是字母表中 z1 后面相邻 的字母。
例如，单词 "care" 比 "book" 和 "car" 紧邻大，但不比 "ant" 或 "cook" 紧邻大。
如果在 s 和 t 不同的第一个位置处，字符串 s 的字母比字符串 t 的字母在字母表中的顺序更靠后，则称为字符串 s 在 字典序上大于 字符串 t。如果前 min(s.length, t.length) 个字符没有区别，那么较长的字符串是在字典序上较大的那一个。

示例 1：
输入: a = ["avokado","dabar"], b = ["brazil"]
输出: false
解释: Alice 必须从单词 "avokado" 来开始游戏，因为这是她最小的单词，然后 Bob 使用他唯一的单词 "brazil"，他可以使用它因为它的第一个字母 'b' 在 Alice 的单词的第一个字母 'a' 之后。
Alice 无法出牌，因为剩下的唯一单词的第一个字母既不等于 'b' 也不是 'b' 之后的字母 'c'。
所以，Alice 输了，游戏结束。
示例 2：
输入: a = ["ananas","atlas","banana"], b = ["albatros","cikla","nogomet"]
输出: true
解释: Alice 必须从单词 "ananas" 来开始游戏。
Bob 无法出牌，因为他唯一拥有的以字母 'a' 或 'b' 开头的单词是 "albatros"，而它比 Alice 的单词小。
所以，Alice 获胜，游戏结束。
示例 3：
输入: a = ["hrvatska","zastava"], b = ["bijeli","galeb"]
输出: true
解释: Alice 必须从单词 "hrvatska" 来开始游戏。
Bob 无法出牌，因为他的两个单词的第一个字母都比 Alice 的单词的第一个字母 'h' 小。
所以，Alice 获胜，游戏结束。

约束条件：
1 <= a.length, b.length <= 105
a[i] 和 b[i] 仅包含小写英文字母。
a 和 b 按 字典序排序。
a 和 b 中所有的单词都是 不同的。
a 和 b 中所有单词的长度之和不超过 106。
Hint 1: If both Alice and Bob for each letter of the alphabet have at least one word beginning with that letter, then the winner is the player who has the lexicographically greatest word.
Hint 2: What happens if both have words that begin with the first x letters of the alphabet, but only one of them has a word beginning with the x + 1th letter?
Hint 3: Suppose Alice has a word beginning with the x + 1th letter. Note that if Alice has the lexicographically greatest word beginning with one of the first x letters, then she is the winner. But if Bob has such a word, then the game continues.
Hint 4: Now, we can conclude the winner is determined by the first letter which a player doesn’t have a word beginning with, and the other player has the lexicographically greatest word among all the words beginning with the letters before that letter.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Alice and Bob hold lexicographically sorted word lists. Alice must open with her smallest word. Each move: play an own word that is lexicographically greater than the last played one AND whose first letter equals the last word's first letter or is the immediate successor. Player unable to move loses. Does Alice win with optimal play?

Key reduction: within a letter the fight is a war of increasing words — the owner of the letter's maximum word controls the letter (can always answer). Game theory per letter c with T to move:
- If T owns max_c: T wins outright if the opponent has NO (c+1)-words (trap); otherwise T chooses who faces letter c+1 (play max → opponent escapes → T faces; or escape now → opponent faces, if T has (c+1)-words).
- If opponent owns max_c: T loses outright if T has NO (c+1)-words; otherwise the opponent chooses who faces c+1.

DP over 26 letters backwards (fT[c] = does T win when to move at c), only per-letter max words and presence needed. Start state: Bob to move at letter of a[0]; Alice wins iff fB[c0] is false. O(total length).

Verified by hand on all three examples (false, true, true).

## 思路 (修正后终版)

Problem (EN): Alice opens with her smallest word; each move plays an own word lexicographically greater than the last, with first letter equal to the last word's first letter or its immediate successor; player unable to move loses. Return whether Alice wins.

Game-theory DP over 26 letters. Only each letter's maximum word owner and letter presence matter. fT[c] = "T wins when to move at letter c":
- If T owns the letter's max word: trap-win if the opponent has no (c+1)-words; else fT[c+1] (keep fighting, opponent must eventually flee, handing T the move at c+1) OR (T has (c+1)-words AND opponent loses at c+1) — fleeing first.
- Otherwise (opponent owns the max, or T has no c-words): playing a c-word only cedes the choice to the opponent and never beats fleeing; the sole useful move is fleeing: f = has-(c+1)-words AND opponent loses at c+1 (!fO[c+1]).

Start: Bob to move at letter of a[0]; Alice wins iff fB[c0] is false. O(total length). Correctness cross-checked against a brute-force minimax on 3000 random small inputs (0 mismatches).
