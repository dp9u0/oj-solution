#
# @lc app=leetcode.cn id=194 lang=bash
#
# [194] 转置文件
#

# @lc code=start
# Read from the file file.txt and print its transposed content to stdout.
# 按双下标 (行,列) 存入哈希表，记录最大列数，END 按列拼接输出（字段以空格分隔）
awk '{
    for (i = 1; i <= NF; i++) {
        a[NR, i] = $i
    }
    if (NF > maxnf) maxnf = NF
}
END {
    for (i = 1; i <= maxnf; i++) {
        s = ""
        for (j = 1; j <= NR; j++) {
            s = s (j > 1 ? " " : "") a[j, i]
        }
        print s
    }
}' file.txt
# @lc code=end
