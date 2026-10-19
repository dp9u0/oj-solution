#
# @lc app=leetcode.cn id=193 lang=bash
#
# [193] 有效电话号码
#

# @lc code=start
# Read from the file file.txt and output all valid phone numbers to stdout.
# 合法格式：xxx-xxx-xxxx 或 (xxx) xxx-xxxx，POSIX ERE 全行匹配
grep -E '^([0-9]{3}-|\([0-9]{3}\) )[0-9]{3}-[0-9]{4}$' file.txt
# @lc code=end
