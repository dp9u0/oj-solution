# 65. Valid Number

## Description

Validate if a given string is numeric.

Note: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one.

Update (2015-02-10):
The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button  to reset your code definition.

## Example

```shell
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
```

## Solution

- 去尾零
- 特殊字符个数 '.' or 'e'
- 特殊字符分割
- 纯数字判断

[SourceCode](./solution.js)