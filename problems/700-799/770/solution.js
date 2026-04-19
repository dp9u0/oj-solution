/*
 * @lc app=leetcode id=770 lang=javascript
 *
 * [770] Basic Calculator IV
 */

// @lc code=start
/**
 * @param {string} expression
 * @param {string[]} evalvars
 * @param {number[]} evalints
 * @return {string[]}
 */
var basicCalculatorIV = function(expression, evalvars, evalints) {
    const evalMap = {};
    for (let i = 0; i < evalvars.length; i++) evalMap[evalvars[i]] = String(evalints[i]);

    // Tokenize: split by space first, then separate parens from adjacent tokens
    const raw = expression.split(' ');
    const tokens = [];
    for (const t of raw) {
        let s = t;
        while (s.startsWith('(')) { tokens.push('('); s = s.slice(1); }
        let trail = '';
        while (s.endsWith(')')) { trail = ')' + trail; s = s.slice(0, -1); }
        if (s) {
            if (/^[a-z]+$/.test(s) && evalMap[s] !== undefined) tokens.push(evalMap[s]);
            else tokens.push(s);
        }
        for (const c of trail) tokens.push(c);
    }

    const rpn = toRPN(tokens);
    const stack = [];
    for (const tok of rpn) {
        if (tok === '+' || tok === '-' || tok === '*') {
            const b = stack.pop(), a = stack.pop();
            stack.push(calc(a, b, tok));
        } else {
            stack.push(makePoly(tok));
        }
    }
    return formatResult(stack[0] || new Map());
};

function toRPN(tokens) {
    const ops = [], out = [];
    const prec = { '+': 1, '-': 1, '*': 2 };
    for (const t of tokens) {
        if (/^-?\d+$/.test(t) || /^[a-z]+$/.test(t)) {
            out.push(t);
        } else if (t === '(') {
            ops.push(t);
        } else if (t === ')') {
            while (ops.length && ops[ops.length - 1] !== '(') out.push(ops.pop());
            ops.pop();
        } else {
            while (ops.length && ops[ops.length - 1] !== '(' && prec[ops[ops.length - 1]] >= prec[t]) out.push(ops.pop());
            ops.push(t);
        }
    }
    while (ops.length) out.push(ops.pop());
    return out;
}

function makePoly(tok) {
    const m = new Map();
    if (/^-?\d+$/.test(tok)) {
        const v = parseInt(tok);
        if (v !== 0) m.set('', v);
    } else {
        m.set(tok, 1);
    }
    return m;
}

function calc(a, b, op) {
    const result = new Map();
    if (!a || !b) return result;
    if (op === '*') {
        for (const [ka, va] of a) {
            for (const [kb, vb] of b) {
                const key = mergeKey(ka, kb);
                result.set(key, (result.get(key) || 0) + va * vb);
            }
        }
    } else {
        for (const [k, v] of a) result.set(k, (result.get(k) || 0) + v);
        for (const [k, v] of b) result.set(k, (result.get(k) || 0) + (op === '+' ? v : -v));
    }
    for (const [k, v] of result) if (v === 0) result.delete(k);
    return result;
}

function mergeKey(a, b) {
    if (!a) return b;
    if (!b) return a;
    const parts = [...a.split('*'), ...b.split('*')].sort();
    return parts.join('*');
}

function formatResult(poly) {
    const entries = [...poly.entries()].filter(([_, v]) => v !== 0);
    entries.sort((a, b) => {
        const da = a[0] ? a[0].split('*').length : 0;
        const db = b[0] ? b[0].split('*').length : 0;
        if (da !== db) return db - da;
        return a[0].localeCompare(b[0]);
    });
    return entries.map(([vars, coeff]) => vars ? `${coeff}*${vars}` : `${coeff}`);
}
// @lc code=end

// TEST:
// Test 1
console.log(JSON.stringify(basicCalculatorIV('e + 8 - a + 5', ['e'], [1])));
// Expected: ['-1*a','14']

// Test 2
console.log(JSON.stringify(basicCalculatorIV('e - 8 + temperature - pressure', ['e', 'temperature'], [1, 12])));
// Expected: ['-1*pressure','5']

// Test 3
console.log(JSON.stringify(basicCalculatorIV('(e + 8) * (e - 8)', [], [])));
// Expected: ['1*e*e','-64']

// Test 4
console.log(JSON.stringify(basicCalculatorIV('0', [], [])));
// Expected: []

// Test 5
console.log(JSON.stringify(basicCalculatorIV('1 + 2 * 3', [], [])));
// Expected: ['7']