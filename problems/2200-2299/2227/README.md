# [2227] Encrypt and Decrypt Strings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/encrypt-and-decrypt-strings/description/)

* algorithms
* Hard (38.24%)
* Likes:    353
* Dislikes: 80
* Testcase Example:  '["Encrypter","encrypt","decrypt"]\n' +

```md
'[[["a","b","c","d"],["ei","zf","ei","am"],["abcd","acbd","adbc","badc","dacb","cadb","cbda","abad"]],["abcd"],["eizfeiam"]]'
You are given a character array keys containing unique characters and a string array values containing strings of length 2. You are also given another string array dictionary that contains all permitted original strings after decryption. You should implement a data structure that can encrypt or decrypt a 0-indexed string.
A string is encrypted with the following process:

For each character c in the string, we find the index i satisfying keys[i] == c in keys.
Replace c with values[i] in the string.

Note that in case a character of the string is not present in keys, the encryption process cannot be carried out, and an empty string '' is returned.
A string is decrypted with the following process:

For each substring s of length 2 occurring at an even index in the string, we find an i such that values[i] == s. If there are multiple valid i, we choose any one of them. This means a string could have multiple possible strings it can decrypt to.
Replace s with keys[i] in the string.

Implement the Encrypter class:

Encrypter(char[] keys, String[] values, String[] dictionary) Initializes the Encrypter class with keys, values, and dictionary.
String encrypt(String word1) Encrypts word1 with the encryption process described above and returns the encrypted string.
int decrypt(String word2) Returns the number of possible strings word2 could decrypt to that also appear in dictionary.


Example 1:

Input
['Encrypter', 'encrypt', 'decrypt']
[[[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;], ['ei', 'zf', 'ei', 'am'], ['abcd', 'acbd', 'adbc', 'badc', 'dacb', 'cadb', 'cbda', 'abad']], ['abcd'], ['eizfeiam']]
Output
[null, 'eizfeiam', 2]
Explanation
Encrypter encrypter = new Encrypter([[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;], ['ei', 'zf', 'ei', 'am'], ['abcd', 'acbd', 'adbc', 'badc', 'dacb', 'cadb', 'cbda', 'abad']);
encrypter.encrypt('abcd'); // return 'eizfeiam'.
// &#39;a&#39; maps to 'ei', &#39;b&#39; maps to 'zf', &#39;c&#39; maps to 'ei', and &#39;d&#39; maps to 'am'.
encrypter.decrypt('eizfeiam'); // return 2.
// 'ei' can map to &#39;a&#39; or &#39;c&#39;, 'zf' maps to &#39;b&#39;, and 'am' maps to &#39;d&#39;.
// Thus, the possible strings after decryption are 'abad', 'cbad', 'abcd', and 'cbcd'.
// 2 of those strings, 'abad' and 'abcd', appear in dictionary, so the answer is 2.


Constraints:

1 <= keys.length == values.length <= 26
values[i].length == 2
1 <= dictionary.length <= 100
1 <= dictionary[i].length <= 100
All keys[i] and dictionary[i] are unique.
1 <= word1.length <= 2000
2 <= word2.length <= 200
All word1[i] appear in keys.
word2.length is even.
keys, values[i], dictionary[i], word1, and word2 only contain lowercase English letters.
At most 200 calls will be made to encrypt and decrypt in total.


```

## Solution

[SourceCode](./solution.js)

---

### 题目翻译

实现加密解密器。加密时每个字符映射为固定的 2 字符串。解密时每 2 个字符可能映射回多个字符。decrypt 返回解密结果中出现在 dictionary 里的个数。

### 解题思路

**预处理加密映射表**

1. encrypt：用 Map 存储 char → 2字符映射，逐字符转换
2. decrypt 优化：将 dictionary 中每个词预先加密，用 Map<加密串, 计数> 存储。decrypt 时直接查 Map 返回计数
