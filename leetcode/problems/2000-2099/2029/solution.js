/*
 * @lc app=leetcode id=2029 lang=javascript
 *
 * [2029] Stone Game IX
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function(stones) {
    let c0 = 0, c1 = 0, c2 = 0;
    for (const s of stones) {
        const r = s % 3;
        if (r === 0) c0++;
        else if (r === 1) c1++;
        else c2++;
    }
    // Simulate game starting with remainder 1 or 2
    const check = (c1, c2, c0) => {
        // Alice starts with rem 1, then sequence must be 1,2,1,2,...
        // After Alice picks rem 1, sum%3 = 1
        // Next must pick rem 2 (to make sum%3 != 0), then sum%3 = 0
        // Wait, the constraint is sum%3 != 0 after picking
        // Start: sum=0. Pick rem r -> sum=r, lose if r=0.
        // Alice picks first. She picks r1. sum=r1. If r1=0, Alice loses.
        // Bob picks r2. sum=r1+r2. If (r1+r2)%3=0, Bob loses.
        // So Bob must pick r2 such that (r1+r2)%3 != 0.
        // After Alice picks r1, sum%3=r1. Bob needs to pick r2 where (r1+r2)%3 != 0.
        // So r2 != (3-r1)%3. If r1=1, r2 != 2, so r2=1. If r1=2, r2 != 1, so r2=2.
        // Wait, that's not right. Bob can pick any remaining stone.
        // sum after k picks = sum of picked stones. If sum%3 = 0, the player who just picked loses.
        // After Alice picks r1: sum%3 = r1. Alice loses iff r1 = 0.
        // Bob needs to pick r2: (r1+r2)%3 = (sum+r2)%3. Bob loses iff (r1+r2)%3 = 0.
        // So r2 = (3 - r1%3) % 3 makes Bob lose. Bob avoids this.
        // If r1 = 1: Bob avoids r2 = 2 (since (1+2)%3=0). Bob picks r2 in {0, 1}.
        //   Best: Bob picks 0 if available (to waste a turn without changing sum%3), else picks 1.
        // If r1 = 2: Bob avoids r2 = 1 (since (2+1)%3=0). Bob picks r2 in {0, 2}.

        // Let me think of it as a sequence of moves.
        // The current sum%3 determines what the next player can't pick.
        // Let's simulate optimally.

        // Actually, the key insight: c0 stones are "pass" moves. If c0 is odd, the turn order flips.
        // Without c0: sequence alternates 1,2,1,2,... or 2,1,2,1,...
        // With c0: players use c0 to skip turns strategically.

        // Simplified: Alice wins if she can start with rem 1 and c1 > 0, or start with rem 2 and c2 > 0.
        // The game becomes about exhausting c1 and c2 in the right order.

        // Let me use the well-known result:
        // Alice starts with rem 1: needs c1 > 0. Then play goes 1,2,1,2,... until one runs out.
        //   The losing player uses c0 to delay. c0%2 matters.
        //   After initial 1: pairs of (2,1) consume one each. If c1 >= c2, game ends when c2 runs out.
        //     Remaining c1 - c2: next player must pick 1 again (sum%3=2+1=0... hmm)

        // Let me just implement the simulation approach.
        return false;
    };

    // Standard solution for Stone Game IX
    // Alice wins if starting with rem 1 works OR starting with rem 2 works
    const canWin = (first) => {
        let r1 = c1, r2 = c2, z = c0;
        let sum = first;
        if (first === 1) r1--;
        else r2--;
        if ((first === 1 && c1 === 0) || (first === 2 && c2 === 0)) return false;
        let turn = 1; // 0 = Alice, 1 = Bob
        while (true) {
            const need = (3 - sum % 3) % 3; // picking this makes sum%3=0, which is bad
            // Current player avoids picking `need`
            let picked = false;
            if (need === 0) {
                // Can pick either 1 or 2 (both safe). Pick the one with more available.
                // Actually, pick strategically. The opponent analysis is complex.
                // Use c0 to skip if available.
                if (z > 0) {
                    z--;
                    turn = 1 - turn;
                    continue;
                }
                // No c0, must pick 1 or 2
                if (r1 > 0) { r1--; sum += 1; }
                else if (r2 > 0) { r2--; sum += 2; }
                else break; // no stones
            } else if (need === 1) {
                // Can't pick 1. Try c0, then 2.
                if (z > 0) { z--; turn = 1 - turn; continue; }
                if (r2 > 0) { r2--; sum += 2; }
                else break;
            } else {
                // Can't pick 2. Try c0, then 1.
                if (z > 0) { z--; turn = 1 - turn; continue; }
                if (r1 > 0) { r1--; sum += 1; }
                else break;
            }
            turn = 1 - turn;
        }
        // If we broke out, the player whose turn it is can't make a safe move
        // But actually, if no stones remain, Bob wins. If stones remain but no safe pick, current player loses.
        // Hmm, this simulation isn't right because both players play optimally, not greedily.
        return false;
    };

    // Use the known formula:
    // Count c0, c1, c2
    // If c0 is even, c0 doesn't affect parity. If odd, it flips who faces the "shortage".
    // Alice starts with 1: sequence is 1,(2,1)*. If c1 > c2, the (2,1) pairs exhaust c2 first.
    //   After exhausting c2, sum%3 = 2, next pick must be 1 (picking 2 would give sum%3=4%3=1... no)
    //   Hmm, this is getting complex. Let me just use the known result.

    // The answer: Alice wins iff (c0 % 2 == 0 && c1 > 0 && c2 > 0) ||
    //             (c0 % 2 == 1 && abs(c1 - c2) > 2) || ...
    // Actually, the correct known solution:
    // Alice can win starting with rem 1:
    //   Play: 1, then alternating 2,1,2,1,...
    //   If c1 >= c2+1: After c2 pairs of (2,1), c2 is exhausted, c1 remains. sum%3 = 2.
    //     Next player (depends on turn count) must pick 1 or 0.
    //   If c1 == c2: After c2 pairs, both exhausted. Turn count = 1 + 2*c2. If c0 > 0, Bob can't skip...

    // Let me just use the clean mathematical solution:
    // After removing all c0 stones (which just skip turns), the game is about c1 and c2.
    // c0 matters for parity (who gets forced into a bad position).

    // Known solution from editorial:
    if (c1 === 0 && c2 === 0) return false;
    // Check if Alice can win by starting with 1 or 2
    const checkStart = (firstRem) => {
        let r1 = c1, r2 = c2, z = c0;
        if (firstRem === 1 && r1 === 0) return false;
        if (firstRem === 2 && r2 === 0) return false;
        if (firstRem === 1) r1--; else r2--;
        // Now play optimally: Alice started, sum%3 = firstRem
        // The sequence of safe picks alternates: after rem 1, next safe is 1 (rem 2 would make sum%3=0)
        // Wait no. After first pick, sum%3 = firstRem.
        // The next player must avoid making sum%3 = 0. So they avoid (3 - firstRem) % 3.
        // But they also want to play optimally for themselves.

        // Sequence of sum%3: firstRem, then depends on picks.
        // If firstRem=1: sum%3=1. Bob can pick 0 (sum stays 1) or 1 (sum becomes 2).
        //   Bob won't pick 2 (sum becomes 0, Bob loses).
        //   Bob picks 0 if available (best: doesn't change state, wastes Alice's turn).
        //   If no 0: Bob picks 1. sum%3=2.
        // If sum%3=2: next player avoids 1 (sum would be 0). Picks 0 or 2.

        // So the pattern is: starting from sum%3=1, picks alternate between 1 (if available, advancing sum%3 from 1->2) and 2 (if available, advancing from 2->1).
        // But 0s are used to skip.

        // The game without 0s: sequence 1,1,2,1,2,1,2,...
        // Wait, starting with rem=1: sum=1. Next safe pick is 1 (sum=2) or 0. Not 2 (sum=0=lose).
        // After picking 1: sum=2. Next safe: 2 (sum=4%3=1) or 0. Not 1 (sum=3%3=0=lose).
        // After picking 2: sum=1. Pattern repeats: 1,2,1,2,...

        // So starting with 1: the non-zero sequence is 1,1,2,1,2,1,2,...
        // First uses one 1, then pairs of (2,1) or single picks...

        // Hmm wait: starting pick is 1 (by Alice). sum=1.
        // Bob's turn: can pick 1 (sum=2) or 0.
        // If Bob picks 1: sum=2. Alice's turn: can pick 2 (sum=1) or 0.
        // Pattern: 1(A), 1(B), 2(A), 1(B), 2(A), 1(B), 2(A), ...

        // Starting with 1: uses 1 (Alice), then alternating (1,2) pairs starting with Bob.
        // Total 1s used: 1 + ceil(n_pairs). Total 2s used: floor(n_pairs).

        // Without 0s:
        // c1 needs: 1 + floor(count). c2 needs: count. Where count = number of (1,2) or (2,1) alternations.
        // Actually, the sequence is: 1(A), then Bob picks 1(B), Alice picks 2(A), Bob picks 1(B), Alice picks 2(A), ...
        // So after Alice's first 1: the sequence of non-0 picks is: 1(B), 2(A), 1(B), 2(A), ...
        // Each (1,2) pair uses one 1 and one 2.
        // Let p = min(c1-1, c2) (pairs after the initial 1). Wait, c1-1 because one 1 is used initially.
        // If c1-1 > c2: after c2 pairs, c2 exhausted. Remaining 1s = c1-1-c2. Sum%3 after last pair: 2 (if pair count is even... hmm)

        // This is getting too complex. Let me use the well-known concise solution.
        return false;
    };

    // Standard concise solution for Stone Game IX:
    // Only c1 and c2 matter for game outcome; c0 parity affects who "faces" the shortage
    const diff = Math.abs(c1 - c2);
    // Alice wins iff she can start with either 1 or 2 and force Bob into a losing position
    // Starting with 1 works when c2 > 0: game uses pairs (1,2) and the one with fewer loses
    //   After c1 starts: (2,1) pairs = min(c1-1, c2). If c1-1 >= c2: c2 runs out first.
    //     sum%3 at that point: 1 (last was 1). Bob can't pick 2 (none left).
    //     If c0%2==0: Bob's turn, he must pick 1 (if any) which makes sum%3=2... and game continues
    //     This is really about whether the "last" player has a move.

    // I'll just use the clean formula that's known to work:
    // Alice wins = (c0%2==0) ? (c1>0 && c2>0) : (Math.abs(c1-c2) > 2)
    // But this doesn't match examples. Let me think again.

    // Example 3: stones=[5,1,2,4,3], c0=1(3), c1=2(1,4), c2=2(2,5). c0%2=1. |c1-c2|=0. Answer=false.
    // Formula gives: c0%2==1, |c1-c2|=0, not > 2, so false. ✓

    // Example 1: stones=[2,1], c0=0, c1=1, c2=1. Answer=true.
    // c0%2==0, c1>0 && c2>0, so true. ✓

    // Example 2: stones=[2], c0=0, c1=0, c2=1. Answer=false.
    // c0%2==0, c1>0 is false, so need to check other start. c2>0 but c1=0, can only start with 2.
    //   Starting with 2: sum=2. Bob can't pick 1 (none). No c0. Game ends. Bob wins (all stones removed). Alice loses.
    // Formula: c0%2==0, c1>0 && c2>0 is false. But starting with 2 only: c1==0, Alice can only start with 2, then Bob has no safe move (can't pick 1), game ends, Bob wins.
    // So Alice can't win starting with 2 when c1=0.
    // The formula should be: Alice wins if she can win starting with 1 OR starting with 2.
    // Starting with 1: possible if c1 > 0. Win condition depends on remaining game.
    // Starting with 2: possible if c2 > 0. Win condition depends on remaining game.

    // Let me implement the proper simulation. Since only c0, c1, c2 matter, the state is (c0, c1, c2, sum%3, turn).
    // But this could be large. Since n can be up to 10^5, we need a formula.

    // Known result (from competitive programming):
    // Only the counts modulo small numbers matter. The key insight:
    // c0 is used for passing. If c0 is even, it's as if c0=0. If odd, c0=1 (one effective pass).
    // The c1, c2 game: starting with 1, the sequence is 1, (then 2,1,2,1,...) alternating.
    //   The number of pairs is limited by min(c1-1, c2) if c1 > c2, or min(c1, c2-1) if... no.
    //   Starting with 1: c1 decreases by 1. Then pairs of (2,1): each pair uses 1 of each.
    //   After k pairs: c1' = c1-1-k, c2' = c2-k.
    //   Game ends when someone can't make a safe move.

    // Let me just implement the known solution:
    // Simulate both starting options
    const simulate = (startRem) => {
        let r1 = c1, r2 = c2, z = c0;
        // Alice starts
        if (startRem === 1) {
            if (r1 === 0) return false;
            r1--;
        } else {
            if (r2 === 0) return false;
            r2--;
        }
        let cur = startRem; // current sum % 3
        let bobTurn = true;
        while (true) {
            // Current player must avoid picking (3 - cur) % 3
            const bad = (3 - cur) % 3;
            // Prefer to use z (c0) to pass
            // Optimal play: use c0 if it helps, otherwise pick from r1 or r2
            // Both play optimally: Bob tries to force Alice to lose, Alice tries to force Bob to lose

            // The player who can't make any safe move loses (well, the stone is removed, and if sum%3==0 they lose)
            // Actually, the player removes a stone, and if new sum%3==0, they lose.
            // If no stones left, Bob wins.

            // Current player picks a stone that doesn't make sum%3 == 0
            // i.e., avoids picking `bad`

            // With optimal play:
            // - If z > 0 and picking 0 is better than picking the other option, pick 0
            // - Pick 0 to skip turn (pass)
            // - When z runs out, must pick from r1 or r2

            // Key insight: using c0 passes the turn. If c0 is even, net effect is nothing.
            // If c0 is odd, it effectively swaps who faces the critical moment.

            // Without c0, the game is determined by c1 and c2.
            // Starting with 1: c1-1 ones and c2 twos remain.
            //   Safe picks alternate: after 1 (sum=1), safe is 1 (sum→2), then 2 (sum→1), then 1 (sum→2), etc.
            //   So: 1(start), 1, 2, 1, 2, 1, 2, ... (after start, pairs of (1,2))
            //   Total 1s used: 1 + ceil(pairs) = 1 + (if c2 > c1-1: c1-1 pairs; else: c2 pairs)
            //   Total 2s used: floor(pairs)
            //   Pairs = min(c1-1, c2) + ... hmm, it's min(c1-1, c2) pairs of (1,2) after the initial 1.
            //   Wait no. After start with 1: sum=1.
            //   Next (Bob): can pick 1 (sum=2). Uses one more 1.
            //   Next (Alice): can pick 2 (sum=1). Uses one 2.
            //   Next (Bob): can pick 1 (sum=2). Uses one 1.
            //   Pattern: 1(B), 2(A), 1(B), 2(A), ...
            //   Each (1,2) pair uses one 1 and one 2. Bob always picks 1, Alice always picks 2.
            //   Wait, that's the forced pattern if both play optimally.
            //   Bob could pick 0 instead to pass...
            //   OK let me just do: after using c0 for parity, count how many (1,2) pairs fit.
            //   After initial 1 by Alice: remaining = c1-1 ones, c2 twos.
            //   The forced non-0 sequence: 1, 2, 1, 2, ... (Bob picks 1, Alice picks 2, etc.)
            //   Pairs of (1,2) = min(c1-1, c2).
            //   If c1-1 > c2: c2 exhausted first. Last pick was 1 (Bob). sum=2. Alice's turn.
            //     Alice needs to pick something that doesn't make sum%3=0. sum=2, bad=1. No 2s left.
            //     Alice has remaining 1s and 0s. Picking 1 makes sum=3%3=0 (lose). So Alice picks 0 if available.
            //     If c0 > 0: Alice picks 0 (pass). Now Bob's turn. sum still 2. Bob avoids 1.
            //       Bob can pick 0 (pass) or pick 2 (none left). So Bob picks 0.
            //       c0 parity matters. If c0 is even after initial use, Alice faces the shortage. If odd, Bob.
            //     Effectively, with remaining 1s and no 2s: the player whose turn it is and can't pick 2 loses (unless they have 0s).
            //     The remaining c0 0s determine who loses.
            //   If c1-1 == c2: both exhausted together. Last pick was 2 (Alice). sum=1. Bob's turn.
            //     No 1s or 2s left. Bob wins (no stones... wait, c0 might remain).
            //     If c0 > 0: Bob picks 0 (sum stays 1, Alice's turn). Same situation.
            //     If c0 is even: Alice faces empty board → Bob wins. If c0 is odd: Bob faces empty board → Bob still wins (Bob wins when no stones).
            //     Actually, "Bob wins if no remaining stones (even if Alice's turn)". So if all stones used, Bob wins.
            //     If c1-1 == c2: total non-0 moves = 1 + 2*c2. If c0 is even, total moves = 1 + 2*c2 + c0. Last move by Alice or Bob depends on parity.
            //     If total moves = n (all stones used), Bob wins. Otherwise, someone can't make safe move and loses.

            // OK this analysis is way too long. Let me just code the known formula.
            return false; // placeholder
        }
    };

    // I'll use the well-known solution:
    // Remove c0 (they just pass turns; c0%2 matters)
    // Game with only c1, c2: starting with 1 or 2
    // Starting with 1: need c1>0. Game: 1, then 1,2,1,2,...
    //   Total moves without 0: 1 + 2*min(c1-1, c2) + (if c1-1>c2: 1 extra 1, else if c1-1<c2: 1 extra 2... wait)
    // Let me simplify. The known result is:

    const c0even = c0 % 2 === 0;
    // Alice starts with rem 1:
    //   Without 0s: 1(A), then (1,2) pairs: 1(B),2(A),1(B),2(A),...
    //   = min(c1-1, c2) pairs. If c1-1 == c2: all used, Bob wins (game over, no stones for either to lose on)
    //   Wait, total moves = 1 + 2*min(c1-1,c2). If this = c1-1+c2 (i.e., c1-1=c2): all non-0 used.
    //     Remaining: c0 zeros. Players alternate picking 0. If c0 even: back to Bob's turn, no stones → Bob wins.
    //     If c0 odd: Alice's turn, no stones → Bob wins. So Bob always wins in this case.
    //   If c1-1 > c2: after 2*c2+1 moves (using 1+c2 ones and c2 twos), remaining = c1-1-c2 ones and c0 zeros.
    //     sum%3 at this point: after last pair (2), sum%3=1. Next is Alice's turn (if even number of turns since Alice's first).
    //     Let me track: Turn 0: Alice picks 1. Turn 1: Bob picks 1. Turn 2: Alice picks 2. Turn 3: Bob picks 1. Turn 4: Alice picks 2. ...
    //     After 2k+1 turns (k pairs of (1,2) after initial): remaining ones = c1-1-k, twos = c2-k.
    //     If c2 = k: twos exhausted. Last turn was Alice picking 2 (turn 2k). sum%3 = (1+1+2+1+2+...+2)%3.
    //       Pattern: 1,1,2,1,2,...,2. Sum = 1+1+2k = 2+2k. sum%3 = (2+2k)%3.
    //       Hmm, this depends on k. Let me compute differently.
    //       After each (1,2) pair, sum increases by 3, so sum%3 doesn't change. sum%3 stays at (1+1)%3 = 2.
    //       Wait: initial 1: sum=1. Then 1: sum=2. Then 2: sum=4%3=1. Then 1: sum=2. Then 2: sum=1. ...
    //       After initial 1, each (1,2) pair: sum goes 2→1→2→1... So after each complete pair, sum%3 is 1 (even pairs) or 2 (odd pairs).
    //       Actually: after 1+1: sum=2. After 1+1+2: sum=1. After 1+1+2+1: sum=2. After 1+1+2+1+2: sum=1.
    //       Pattern: after Bob's 1: sum=2. After Alice's 2: sum=1.
    //       So after k pairs: sum%3 = 1 if k is complete (Alice just picked 2), or sum%3=2 if Bob just picked 1.
    //       If c2 = k (exhausted after k pairs), the last move was Alice picking 2 (turn 2k).
    //       sum%3 = 1. Turn 2k+1: Bob's turn. Bob needs to avoid (3-1)%3=2. No twos left.
    //       Bob can pick 1 (sum becomes 2, which is safe) or pick 0 (pass).
    //       Wait, picking 1: sum = 1+1 = 2. sum%3=2 != 0. Safe!
    //       So Bob picks 1. sum%3=2. Alice's turn. Alice avoids (3-2)%3=1. No twos left.
    //       Alice picks 1: sum = 2+1 = 3. sum%3=0. Alice LOSES!
    //       But wait, Alice is smart. Can she pick 0 instead? If c0 > 0: yes.
    //       So with remaining ones: each player picks 1 until sum reaches 3. The first player forced to pick 1 that makes sum%3=0 loses.
    //       Starting from sum%3=1, the sequence of picking 1: sum goes 1→2→0(lose).
    //       So only 2 safe 1-picks remain (1→2). The third 1-pick loses.
    //       After Bob picks 1 (sum=2), Alice faces the choice: pick 1 (sum=0, lose) or pick 0.
    //       If Alice has 0s: she picks 0 (pass). Then Bob picks 1 or 0.
    //       This becomes a game of who runs out of 0s first.

    // I think the simplest correct approach: simulate with just the counts.
    // State: (r1, r2, r0, sum%3, isBobTurn). Since r1, r2 can be large, we need to find patterns.
    // But actually, without 0s, the game is simple. With 0s, it's about parity.

    // FINAL known solution:
    // If only c1 and c2 (c0=0):
    //   Alice starts with 1: loses if c1<=c2 (exactly c1 ones, c1-1 twos used... no, this isn't right)
    //   Actually, the well-known solution is:

    // Let me just code the standard competitive programming solution.
    // Based on: https://leetcode.com/problems/stone-game-ix/solutions/
    // The answer depends on:
    // 1. If all stones are %3=0: Bob wins (Alice loses immediately or no stones for Alice to safely pick)
    // 2. c0%2 determines parity of "passes"
    // 3. The difference c1-c2 determines who runs out first

    // Concise known solution:
    const diff12 = c1 - c2;
    // Alice can start with 1 (if c1 > 0) or 2 (if c2 > 0)
    // Starting with 1 works when: (c2 > c1) or (c2 == c1 and c0 is odd) -- hmm not sure
    // Starting with 2 works when: (c1 > c2) or (c1 == c2 and c0 is odd)

    // Actually the simplest known solution that works:
    // Simulate both starting choices
    const sim = (first) => {
        // After Alice picks first, the game state is:
        // sum%3 = first, and the remaining counts
        // The opponent (Bob) wants Alice to lose; Alice wants Bob to lose
        // Without 0s, the game is deterministic
        // With 0s, it's about parity

        let r1 = c1, r2 = c2;
        if (first === 1) { if (r1 === 0) return false; r1--; }
        else { if (r2 === 0) return false; r2--; }

        // Without 0s, starting from sum%3=first:
        // The safe sequence forces alternating picks
        // From sum%3=1: must pick 1 (sum→2). From sum%3=2: must pick 2 (sum→1).
        // So starting with first=1: 1,1,2,1,2,1,2,...
        //   After initial 1: pairs of (1,2). Bob picks 1, Alice picks 2.
        //   Total 1s used: 1 + min(r1_initial-1, r2_initial) (from pairs) + possibly more
        //   Total 2s used: min(r1_initial-1, r2_initial)

        // Let's say r1 ones and r2 twos remain (after Alice's first pick).
        // Sequence: 1(B), 2(A), 1(B), 2(A), ...
        // Each (1,2) pair: Bob picks 1, Alice picks 2.
        // Pairs = min(r1, r2).
        // If r1 > r2: r2 exhausted. Last move was Alice picking 2 (if pairs > 0).
        //   sum%3 after last pair: alternates. After each (1,2): sum increases by 3, sum%3 unchanged.
        //   So sum%3 = first throughout the pair sequence. first=1, sum%3=1 after pairs.
        //   Wait, no. Let me trace: first=1. sum=1. Bob picks 1: sum=2. Alice picks 2: sum=4%3=1.
        //   So after each (1,2) pair, sum%3=1 (same as after first pick).
        //   After pairs exhaust r2: sum%3=1. It's Bob's turn.
        //   Bob must avoid (3-1)%3=2. No twos. Bob picks 1: sum=2. Alice's turn.
        //   Alice must avoid (3-2)%3=1. No twos. Alice picks 1: sum=3%3=0. ALICE LOSES!
        //   Unless Alice has c0 to pass. If c0>0, Alice passes. Then Bob passes (if c0>1), etc.
        //   With c0 passes: if c0 is odd, Bob faces the "pick 1 and lose" situation.
        //     Actually: Alice passes (c0-1 left). Bob passes (c0-2 left). ...
        //     If c0 is even: Alice runs out of passes first. Alice must pick 1. sum=3. LOSE.
        //     If c0 is odd: Bob must pick 1. sum=3. BOB LOSES. ALICE WINS!

        //   So starting with 1, r1 > r2: Alice wins iff c0 is odd.
        //   Wait but Alice might have more 1s remaining. Let me re-check.
        //   After r2 pairs: r1' = r1 - r2 ones remain. And c0 zeros.
        //   Bob's turn, sum%3=1. Bob picks 1: sum=2, r1' decreases. Alice's turn.
        //   Alice picks 1: sum=3%3=0, LOSES. Unless Alice passes with c0.
        //   If Alice passes: Bob's turn, sum=2. Bob picks 1: sum=3%3=0, BOB LOSES.
        //   So: Alice passes → Bob forced to lose. Alice wins IF she has a c0 to pass.
        //   But wait, Bob might also pass if he has c0.
        //   After Bob picks 1 (sum=2, r1'--), Alice's turn:
        //     Alice has r1'-1 ones and c0 zeros. She needs sum%3 != 0.
        //     Picking 1: sum=3%3=0, lose. So she MUST pass (if c0>0) or lose.
        //     If Alice passes (c0--): Bob's turn, sum=2. Bob can pass (c0--) or pick 1 (sum=0, lose).
        //     Bob passes if possible. So passes alternate until c0=0, then the player whose turn it is must pick 1 (lose).
        //     If c0 was even when Alice first needed to pass: Alice used 1 pass, Bob used 1, ..., 0 left, Alice's turn → loses.
        //     If c0 was odd: Alice used 1, Bob used 1, ..., 1 left, Alice passes, Bob's turn, must pick → Bob loses.

        //   Hmm wait. Let me recount. After pairs, Bob picks 1 (forced). r1' ones left. sum=2. Alice's turn.
        //   Alice can't pick 1 (lose). If c0>0: Alice passes.
        //   After Alice passes: c0--. Bob's turn. sum=2. Bob can't pick 1 (lose). If c0>0: Bob passes.
        //   After Bob passes: c0--. Alice's turn. sum=2. Can't pick 1.
        //   This continues until c0=0. Whoever's turn it is loses.
        //   Initially after pairs and Bob's forced 1: Alice's turn with c0 zeros.
        //   If c0 = 0: Alice loses (can't pass, can't pick 1). → Bob wins.
        //   If c0 = 1: Alice passes → Bob's turn, c0=0. Bob can't pass, can't pick 1 (lose). → Alice wins!
        //   If c0 = 2: Alice passes → Bob passes → Alice's turn, c0=0. Alice loses. → Bob wins.
        //   So Alice wins iff c0 is odd!

        //   But wait, I assumed r1' > 0 (there are remaining ones for Bob to pick initially).
        //   What if r1' = 0? After r2 pairs: r1-r2=0. Bob's turn. No ones left either.
        //     sum%3=1. Bob needs to avoid 2. No twos (r2=0). No ones (r1=r2). Only c0 zeros.
        //     Bob picks 0 (if c0>0). Passes to Alice. Same situation.
        //     This continues until c0=0. No stones at all. Bob wins (rules say Bob wins if no stones).
        //     So Alice loses regardless of c0 parity. → Bob wins.
        //   What if r1' = 1? Bob picks 1 (forced), r1'=0. sum=2. Alice's turn. No ones, no twos. Only c0.
        //     Alice picks 0 (if c0>0). Eventually no stones → Bob wins. Alice loses.
        //   What if r1' >= 2? Bob picks 1, Alice passes (or loses), then Bob forced, etc.
        //     As analyzed above: Alice wins iff c0 is odd.

        //   Hmm wait, I need to also consider that after the initial analysis, there might be more than 2 ones remaining.
        //   After pairs, Bob picks 1: sum=2. Alice passes (c0). Bob's turn. sum=2.
        //   Bob can't pick 1 (lose). Passes (c0). Alice's turn. sum=2.
        //   This alternation doesn't use any ones! The ones just sit there.
        //   So the c0 parity game is independent of how many ones remain.
        //   Conclusion: starting with 1, r1 > r2: Alice wins iff c0 is odd AND r1-r2 >= 2.
        //     If r1-r2 = 0: Bob wins (no safe picks left). Hmm, but above I said r1-r2 = 0 means all non-0 used.
        //     If r1-r2 = 1: Bob picks the last 1 (sum=2), then no more ones or twos. Alice can only pass.
        //       After all passes: no stones → Bob wins.

        // Let me also analyze r1 == r2 (starting with 1):
        //   Pairs = r1 = r2. After pairs: 0 ones, 0 twos. sum%3=1.
        //   Bob's turn. No non-0 stones. Only c0 zeros.
        //   All zeros get picked. If c0 even: Bob's turn with no stones → Bob wins.
        //   If c0 odd: Alice's turn with no stones → Bob wins (Bob wins regardless per rules).
        //   So: Bob always wins when r1 == r2 (starting with 1). → Alice loses.

        // And r1 < r2 (starting with 1):
        //   Pairs = r1. After pairs: 0 ones, r2-r1 twos. sum%3=1.
        //   Bob's turn. Needs to avoid 2. Has twos. Can't pick 2 (sum=0, lose).
        //   Bob picks 0 (if c0>0). Passes. Alice's turn. sum=1.
        //   Alice needs to avoid 2. Can pick 2 (sum=3%3=0... lose!). Can't pick 2.
        //   Wait, Alice avoids (3-1)%3 = 2. Picking 2: sum=3%3=0. Lose!
        //   So Alice can't pick 2 either. Only c0 left.
        //   Same parity game. If c0 is odd: Bob forced to pick... but no non-0 stones!
        //   After all passes: no stones → Bob wins. Alice loses.
        //   Hmm wait, I said r2-r1 > 0 twos remain. But neither player can safely pick them!
        //   So both players just use c0 passes until exhausted, then Bob wins (no stones).
        //   So: starting with 1, r1 < r2: Alice always loses.

        // Hmm, that doesn't seem right. Let me re-examine.

        // Starting with 1, r1 < r2: pairs = r1. After r1 pairs:
        //   r1' = r1 - r1 = 0 ones, r2' = r2 - r1 twos.
        //   The last pair was (Bob picks 1, Alice picks 2). After Alice picks 2: sum%3=1.
        //   Bob's turn. sum=1. Bad pick = 2. r2' > 0 twos available. Bob can't pick 2 (lose).
        //   Bob picks 0 (if available). sum stays 1.
        //   Alice's turn. sum=1. Bad pick = 2. Can't pick 2 (lose). Picks 0 (if available).
        //   Both just pass until c0=0. Then Bob's turn. sum=1. Can't pick 2 (lose). No 0s.
        //   No 1s either (r1'=0). No safe pick. Bob can't make any move... Wait, can Bob NOT pick?
        //   The rules say "the player may remove any stone." If they remove a stone and sum%3=0, they lose.
        //   If no stones left, Bob wins. But there ARE twos left. Bob CAN pick a two, but sum becomes 0 → Bob loses.
        //   Does Bob have to pick? Yes, "may remove any stone" — but must remove one.
        //   Actually, "the player who removes a stone loses if the sum is divisible by 3."
        //   So Bob MUST remove a stone. If the only available stones make sum%3=0, Bob loses.
        //   Bob has r2' twos. Picking any makes sum%3=0. Bob LOSES!

        //   So starting with 1, r1 < r2: if c0 is even (Bob's turn after passes), Bob is forced to pick 2 → LOSES.
        //   If c0 is odd (Alice's turn after passes), Alice is forced to pick 2 → LOSES.
        //   Wait, I need to recount. After pairs: Bob's turn. c0 passes available.
        //   If c0 = 0: Bob's turn, forced to pick 2 → loses. Alice wins!
        //   If c0 = 1: Bob passes → Alice's turn. Forced to pick 2 → loses. Bob wins.
        //   If c0 = 2: Bob passes → Alice passes → Bob's turn. Forced to pick 2 → loses. Alice wins!
        //   So: Alice wins iff c0 is even!

        // Great! So for starting with 1:
        //   r1 > r2: Alice wins iff (c0 is odd AND r1-r2 >= 2) -- wait, I need to recheck r1-r2=1
        //     If r1-r2 >= 2: Alice wins iff c0 is odd.
        //     If r1-r2 = 1: Bob always wins (analyzed above).
        //     If r1-r2 = 0: Bob always wins.
        //   r1 < r2: Alice wins iff c0 is even.
        //   r1 == r2: Bob always wins.

        // Wait, but r1 = c1-1 (after Alice's first pick). So:
        //   c1-1 > c2: Alice wins iff c0 is odd AND (c1-1-c2) >= 2, i.e., c1 >= c2+3
        //   c1-1 == c2: Bob always wins
        //   c1-1 < c2: Alice wins iff c0 is even, i.e., c1 < c2+1, i.e., c1 <= c2

        // Simplify for starting with 1:
        //   c1 > c2+2: Alice wins iff c0 is odd
        //   c1 == c2+2: need to check... r1 = c1-1 = c2+1. r1 > r2=c2. r1-r2=1. Bob always wins.
        //     Wait, I said r1-r2=1: Bob picks last 1 (sum=2), then no more non-0. Only c0.
        //     After all passes: no stones → Bob wins. Yes, Bob always wins when r1-r2=1.
        //   c1 == c2+1: r1 = c2. r1 == r2. Bob always wins.
        //   c1 == c2: r1 = c1-1 = c2-1 < c2. Alice wins iff c0 even.
        //   c1 < c2: r1 = c1-1. r1 < c2. Alice wins iff c0 even.
        //   c1 == 0: can't start with 1. Lose.

        // For starting with 2 (by symmetry, swap c1 and c2):
        //   c2 > c1+2: Alice wins iff c0 is odd
        //   c2 == c1+2: Bob always wins (r2-r1=1)
        //   c2 == c1+1: r2 == r1. Bob always wins.
        //   c2 == c1: r2 = c2-1 = c1-1 < c1. Alice wins iff c0 even.
        //   c2 < c1: r2 = c2-1 < c1. Alice wins iff c0 even.

        // This is getting complicated but I think I have the right analysis. Let me code it up.
        // Actually, let me just directly code the known concise solution.
        // The standard solution for Stone Game IX:
        // Alice wins iff she can win starting with 1 OR starting with 2.

        // For starting with 1:
        //   Needs c1 > 0.
        //   The game plays 1, then alternating 1,2.
        //   Let r1 = c1-1, r2 = c2 after Alice's first pick.
        //   Pairs of (1,2) = min(r1, r2).
        //   If r1 > r2: 2s run out. Remaining = r1-r2 ones + c0 zeros.
        //     Bob forced to pick 1 (sum→2). Then Alice can pass or pick 1 (lose).
        //     With passes: Alice wins iff c0 is odd AND r1-r2 >= 2.
        //     If r1-r2 == 1: only one 1 remains. Bob picks it (sum=2). No non-0 left. Pass game. Bob wins.
        //     If r1-r2 >= 2: Alice wins iff c0 is odd.
        //   If r1 < r2: 1s run out. Remaining = r2-r1 twos + c0 zeros.
        //     Bob's turn, sum=1. Bob can't pick 2. Must pass or lose.
        //     Alice wins iff c0 is even.
        //   If r1 == r2: both run out. Only c0 left. Bob wins.

        // For starting with 2 (by symmetry):
        //   Needs c2 > 0.
        //   Let r2 = c2-1, r1 = c1.
        //   If r2 > r1: Alice wins iff c0 is odd AND r2-r1 >= 2.
        //   If r2 < r1: Alice wins iff c0 is even.
        //   If r2 == r1: Bob wins.

        // This is complex. Let me verify with examples:

        // Example 1: c0=0, c1=1, c2=1
        // Start with 1: r1=0, r2=1. r1<r2. Alice wins iff c0 even. c0=0 is even. WIN!
        // Start with 2: r2=0, r1=1. r2<r1. Alice wins iff c0 even. c0=0 is even. WIN!
        // Either way: Alice wins. Answer: true ✓

        // Example 2: c0=0, c1=0, c2=1
        // Start with 1: c1=0, can't. LOSE.
        // Start with 2: r2=0, r1=0. r2==r1. Bob wins. LOSE.
        // Answer: false ✓

        // Example 3: c0=1, c1=2, c2=2
        // Start with 1: r1=1, r2=2. r1<r2. Alice wins iff c0 even. c0=1 is odd. LOSE.
        // Start with 2: r2=1, r1=2. r2<r1. Alice wins iff c0 even. c0=1 is odd. LOSE.
        // Answer: false ✓

        // Let me test more cases mentally.
        // stones=[2,2]: c0=0,c1=0,c2=2. Start with 2: r2=1,r1=0. r2>r1, r2-r1=1. Need c0 odd AND >=2. Fails. LOSE.
        //   Actually Alice picks 2, sum=2. Bob picks 2, sum=4%3=1. No stones. Bob wins. → false.
        //   With our formula: r2=1>r1=0, r2-r1=1 < 2. So the condition "c0 odd AND r2-r1>=2" fails. Also r2>r1 so we check that branch. LOSE. ✓

        // stones=[1,1]: c0=0,c1=2,c2=0. Start with 1: r1=1,r2=0. r1>r2, r1-r2=1. Need c0 odd AND >=2. Fails. LOSE.
        //   Actually: Alice picks 1, sum=1. Bob picks 1, sum=2. No stones. Bob wins. → false.
        //   Our formula: r1>r2, r1-r2=1 < 2. LOSE. ✓

        // stones=[1,1,1]: c0=0,c1=3,c2=0. Start with 1: r1=2,r2=0. r1>r2, r1-r2=2. c0=0 even. Need c0 odd. Fails. LOSE.
        //   Actually: Alice picks 1, sum=1. Bob picks 1, sum=2. Alice picks 1, sum=3%3=0. ALICE LOSES.
        //   Our formula: c0=0, need odd. Fails. LOSE. ✓

        // stones=[1,1,1,1]: c0=0,c1=4,c2=0. Start with 1: r1=3,r2=0. r1>r2, r1-r2=3>=2. c0=0 even. Need c0 odd. Fails. LOSE.
        //   Hmm, but: Alice 1(sum=1), Bob 1(sum=2), Alice 1(sum=0, LOSE). So Bob wins. ✓

        // stones=[1,2]: c0=0,c1=1,c2=1. Same as Example 1. true ✓

        // stones=[3,1,2]: c0=1,c1=1,c2=1.
        //   Start with 1: r1=0,r2=1. r1<r2. Alice wins iff c0 even. c0=1 odd. LOSE.
        //   Start with 2: r2=0,r1=1. r2<r1. Alice wins iff c0 even. c0=1 odd. LOSE.
        //   Answer: false.
        //   Verify: Alice picks 1(sum=1). Bob picks 0(sum=1, pass). Alice picks 2(sum=0, LOSE).
        //   OR: Alice picks 2(sum=2). Bob picks 0(sum=2, pass). Alice picks 1(sum=0, LOSE).
        //   So false ✓

        // stones=[3,3,1,2]: c0=2,c1=1,c2=1.
        //   Start with 1: r1=0,r2=1. r1<r2. c0=2 even. WIN!
        //   Verify: Alice 1(sum=1). Bob 0(sum=1). Alice 0(sum=1). Bob must pick. Can't pick 2(sum=0). Picks 1? sum=2. Safe.
        //     Wait, c1=1 (used by Alice). No more 1s. Bob can't pick 2 (sum=0). Bob has no 0s (used). Bob LOSES!
        //   Hmm, c0=2. After Alice picks 1: c0=2, c1=0, c2=1. Bob's turn.
        //     Bob picks 0(sum=1). c0=1. Alice's turn. Alice picks 0(sum=1). c0=0. Bob's turn.
        //     Bob has only c2=1 two. Picking 2: sum=3%3=0. Bob LOSES. Alice WINS! ✓

        // Great, the formula works! Let me code it.
        return false;
    };

    // Implement the analysis above
    // Starting with rem=1:
    const startOne = () => {
        if (c1 === 0) return false;
        const r1 = c1 - 1, r2 = c2;
        if (r1 > r2) {
            const diff = r1 - r2;
            if (diff >= 2) return c0 % 2 === 1; // Alice wins iff c0 odd
            return false; // diff == 1: Bob wins
        } else if (r1 < r2) {
            return c0 % 2 === 0; // Alice wins iff c0 even
        } else {
            return false; // r1 == r2: Bob wins
        }
    };

    // Starting with rem=2 (swap c1 and c2):
    const startTwo = () => {
        if (c2 === 0) return false;
        const r2 = c2 - 1, r1 = c1;
        if (r2 > r1) {
            const diff = r2 - r1;
            if (diff >= 2) return c0 % 2 === 1;
            return false;
        } else if (r2 < r1) {
            return c0 % 2 === 0;
        } else {
            return false;
        }
    };

    return startOne() || startTwo();
};
// @lc code=end

// TEST:
console.log(stoneGameIX([2,1])); // true
console.log(stoneGameIX([2])); // false
console.log(stoneGameIX([5,1,2,4,3])); // false
