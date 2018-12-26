let common = require('./common');
let problem = process.argv[2] || 0;
let tipoc = process.argv[3] || "sql";
common.readme(problem, `[${tipoc}]`, ':soon:', '');