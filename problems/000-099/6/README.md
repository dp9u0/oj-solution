# 6. ZigZag Conversion

## Description

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

## Example

```shell
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

```shell
string convert(string text, int nRows);
#convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
```

## Solution

每个index 都 可以根据 rowNuns 找到 确定这个index 属于第几行

[SourceCode](./solution.js)