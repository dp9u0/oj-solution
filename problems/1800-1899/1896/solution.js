/*
 * @lc app=leetcode id=1896 lang=javascript
 *
 * [1896] Minimum Cost to Change the Final Value of Expression
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {number}
 */
var minOperationsToFlip = function(expression) {
    const stack = [];
    for (const ch of expression) {
        if (ch === '(' || ch === '&') {
            stack.push(ch);
        } else if (ch === '|') {
            stack.push('|');
        } else if (ch === '0' || ch === '1') {
            stack.push([Number(ch), 1]);
        } else if (ch === ')') {
            // Pop until '('
            const temp = [];
            while (stack.length && stack[stack.length - 1] !== '(') {
                temp.push(stack.pop());
            }
            stack.pop(); // remove '('
            temp.reverse();
            const result = evaluate(temp);
            stack.push(result);
        }
    }

    // Evaluate remaining
    if (stack.length > 1) {
        return evaluate(stack)[1];
    }
    return stack[0][1];
};

function evaluate(tokens) {
    let left = tokens[0];
    for (let i = 1; i < tokens.length; i += 2) {
        const op = tokens[i];
        const right = tokens[i + 1];
        left = combine(left, op, right);
    }
    return left;
}

function combine(a, op, b) {
    const [va, ca] = a;
    const [vb, cb] = b;

    if (op === '&') {
        if (va === 1 && vb === 1) {
            // 1&1=1, flip to 0: min(flip left to 0, flip right to 0, flip op to | then 1|1=1 no change)
            // flip op: 1|1=1, still 1, so need to also flip one side
            // best: flip one of them: min(ca, cb)
            return [1, Math.min(ca, cb)];
        } else if (va === 1 && vb === 0) {
            // 1&0=0, flip to 1: flip right (cb), or flip op to | (1|0=1) cost 1
            return [0, Math.min(cb, 1)];
        } else if (va === 0 && vb === 1) {
            // 0&1=0, flip to 1: flip left (ca), or flip op to | (0|1=1) cost 1
            return [0, Math.min(ca, 1)];
        } else {
            // 0&0=0, flip to 1: flip left (ca) + keep right, or flip right (cb) + keep left,
            // or flip op to | (0|0=0 no change)
            // need to flip at least one: min(ca, cb) but op flip doesn't help
            // Actually: flip to 1 means need at least one to become 1: min(ca, cb)
            // But flip op: 0|0=0, still 0. So can't just flip op.
            // Options: flip left (ca, then 1&0=0 still 0, need more), or flip both, or flip op + flip one
            // min(ca + cb, 1 + min(ca, cb)) = min(ca+cb, 1+min(ca,cb))
            // Actually let's think more carefully:
            // To make 0&0 -> 1: need a&b where at least one is 1 and the op gives 1
            // With &: need both to be 1 → ca + cb
            // With | (flip op, cost 1): need at least one to be 1 → 1 + min(ca, cb)
            // Hmm, but actually with |, 0|0=0, 0|1=1, 1|0=1, 1|1=1
            // So to get 1 from 0|?: need at least one to be 1
            // 1 + min(ca, cb) flips op and one operand
            // Or ca + cb flips both operands (still using &)
            return [0, Math.min(ca + cb, 1 + Math.min(ca, cb))];
        }
    } else { // '|'
        if (va === 0 && vb === 0) {
            // 0|0=0, flip to 1: min(flip left to 1, flip right to 1)
            return [0, Math.min(ca, cb)];
        } else if (va === 0 && vb === 1) {
            // 0|1=1, flip to 0: flip right (cb), or flip op to & (0&1=0) cost 1
            return [1, Math.min(cb, 1)];
        } else if (va === 1 && vb === 0) {
            // 1|0=1, flip to 0: flip left (ca), or flip op to & (1&0=0) cost 1
            return [1, Math.min(ca, 1)];
        } else {
            // 1|1=1, flip to 0:
            // With &: 1&1=1, still 1. So flipping op alone doesn't help.
            // Need: both become 0 → ca+cb, or flip op + flip one: 1 + min(ca,cb)
            // Wait: flip op to &: then we need to get 0. 0&1=0, 1&0=0, 0&0=0
            // So flip op (cost 1) + flip one (min(ca,cb)): total 1 + min(ca, cb)
            // Or flip both: ca + cb
            return [1, Math.min(ca + cb, 1 + Math.min(ca, cb))];
        }
    }
}
// @lc code=end

// TEST:
console.log(minOperationsToFlip("1&(0|1)")); // 1
console.log(minOperationsToFlip("(0&0)&(0&0&0)")); // 3
console.log(minOperationsToFlip("(0|(1|0&1))")); // 1
console.log(minOperationsToFlip("0")); // 1
console.log(minOperationsToFlip("1")); // 1
console.log(minOperationsToFlip("1|1")); // 2
console.log(minOperationsToFlip("1&1")); // 1
