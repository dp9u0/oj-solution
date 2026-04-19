# LeetCode In Javascript

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
pnpm run start 18 # start problem 18
pnpm run test # test by testcase
pnpm run push # push for all test
pnpm run ok [tr] # finished and set topic 'tree'
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
* [bt] : bt
* [bs] : binary_search
* [bit] : bit_manipulation
* [bfs] : breadth_first_search
* [dfs] : depth_first_search
* [des] : design
* [dc] : divide_and_conquer
* [dp] : dp
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

| Range     | Problems                             |
| --------- | ------------------------------------ |
| 0-99      | [0-99](./problems/0000-0099.md)      |
| 100-199   | [100-199](./problems/0100-0199.md)   |
| 200-299   | [200-299](./problems/0200-0299.md)   |
| 300-399   | [300-399](./problems/0300-0399.md)   |
| 400-499   | [400-499](./problems/0400-0499.md)   |
| 500-599   | [500-599](./problems/0500-0599.md)   |
| 600-699   | [600-699](./problems/0600-0699.md)   |
| 700-799   | [700-799](./problems/0700-0799.md)   |
| 800-899   | [800-899](./problems/0800-0899.md)   |
| 900-999   | [900-999](./problems/0900-0999.md)   |
| 1000-1099 | [1000-1099](./problems/1000-1099.md) |
| 1100-1199 | [1100-1199](./problems/1100-1199.md) |
| 1200-1299 | [1200-1299](./problems/1200-1299.md) |
| 1300-1399 | [1300-1399](./problems/1300-1399.md) |
| 1400-1499 | [1400-1499](./problems/1400-1499.md) |
| 1500-1599 | [1500-1599](./problems/1500-1599.md) |
| 1600-1699 | [1600-1699](./problems/1600-1699.md) |
| 1700-1799 | [1700-1799](./problems/1700-1799.md) |
| 1800-1899 | [1800-1899](./problems/1800-1899.md) |
| 1900-1999 | [1900-1999](./problems/1900-1999.md) |
| 2000-2099 | [2000-2099](./problems/2000-2099.md) |
| 2100-2199 | [2100-2199](./problems/2100-2199.md) |
| 2200-2299 | [2200-2299](./problems/2200-2299.md) |
| 2300-2399 | [2300-2399](./problems/2300-2399.md) |
| 2400-2499 | [2400-2499](./problems/2400-2499.md) |
| 2500-2599 | [2500-2599](./problems/2500-2599.md) |
| 2600-2699 | [2600-2699](./problems/2600-2699.md) |
| 2700-2799 | [2700-2799](./problems/2700-2799.md) |
| 2800-2899 | [2800-2899](./problems/2800-2899.md) |
| 2900-2999 | [2900-2999](./problems/2900-2999.md) |
| 3000-3099 | [3000-3099](./problems/3000-3099.md) |
| 3100-3199 | [3100-3199](./problems/3100-3199.md) |
| 3200-3299 | [3200-3299](./problems/3200-3299.md) |
| 3300-3399 | [3300-3399](./problems/3300-3399.md) |
| 3400-3499 | [3400-3499](./problems/3400-3499.md) |
| 3500-3599 | [3500-3599](./problems/3500-3599.md) |
| 3600-3699 | [3600-3699](./problems/3600-3699.md) |
| 3700-3799 | [3700-3799](./problems/3700-3799.md) |
| 3800-3899 | [3800-3899](./problems/3800-3899.md) |
