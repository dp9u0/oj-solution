/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    if (!words || words.length === 0) return [];
    
    // Initialize character count array with first word
    const charCount = new Array(26).fill(Infinity);
    
    // For each word
    for (let word of words) {
        // Create temporary count array for current word
        const currentCount = new Array(26).fill(0);
        
        // Count characters in current word
        for (let char of word) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            currentCount[index]++;
        }
        
        // Update minimum count for each character
        for (let i = 0; i < 26; i++) {
            charCount[i] = Math.min(charCount[i], currentCount[i]);
        }
    }
    
    // Build result array
    const result = [];
    for (let i = 0; i < 26; i++) {
        // Add character to result based on its count
        while (charCount[i] > 0) {
            result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
            charCount[i]--;
        }
    }
    
    return result;
};

// TEST:
function runTests() {
    const testCases = [
        {
            input: ["bella", "label", "roller"],
            expected: ["e", "l", "l"],
            description: "Test Case 1: Basic case with multiple common characters"
        },
        {
            input: ["cool", "lock", "cook"],
            expected: ["c", "o"],
            description: "Test Case 2: Words with two common characters"
        },
        {
            input: ["abc"],
            expected: ["a", "b", "c"],
            description: "Test Case 3: Single word"
        },
        {
            input: ["abc", "def", "ghi"],
            expected: [],
            description: "Test Case 4: No common characters"
        },
        {
            input: ["aaa", "aa", "aaa"],
            expected: ["a", "a"],
            description: "Test Case 5: Multiple occurrences of same character"
        }
    ];

    let passed = 0;
    let failed = 0;

    for (let test of testCases) {
        const result = commonChars(test.input);
        const sortedResult = result.sort().join('');
        const sortedExpected = test.expected.sort().join('');
        
        if (sortedResult === sortedExpected) {
            console.log(`✅ ${test.description} - PASSED`);
            passed++;
        } else {
            console.log(`❌ ${test.description} - FAILED`);
            console.log(`   Input: ${JSON.stringify(test.input)}`);
            console.log(`   Expected: ${JSON.stringify(test.expected)}`);
            console.log(`   Got: ${JSON.stringify(result)}`);
            failed++;
        }
    }

    console.log(`\nTest Summary:`);
    console.log(`Total Tests: ${testCases.length}`);
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${failed}`);
}

// Run the tests
runTests();
