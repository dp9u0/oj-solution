/*
 * @lc app=leetcode id=2115 lang=javascript
 *
 * [2115] Find All Possible Recipes from Given Supplies
 */

// @lc code=start
/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    const available = new Set(supplies);
    const recipeSet = new Set(recipes);
    const result = [];

    // Build dependency graph: recipe -> count of missing ingredients
    // And reverse: ingredient -> list of recipes that depend on it
    const missingCount = new Map();
    const dependent = new Map();

    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        let missing = 0;
        for (const ing of ingredients[i]) {
            if (!available.has(ing)) {
                missing++;
                if (!dependent.has(ing)) dependent.set(ing, []);
                dependent.get(ing).push(recipe);
            }
        }
        if (missing === 0) {
            result.push(recipe);
            available.add(recipe);
        } else {
            missingCount.set(recipe, missing);
        }
    }

    // BFS from initially available recipes
    let idx = 0;
    while (idx < result.length) {
        const made = result[idx++];
        if (!dependent.has(made)) continue;
        for (const recipe of dependent.get(made)) {
            const cnt = missingCount.get(recipe) - 1;
            missingCount.set(recipe, cnt);
            if (cnt === 0) {
                result.push(recipe);
                available.add(recipe);
            }
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findAllRecipes(["bread"], [["yeast","flour"]], ["yeast","flour","corn"]))); // ["bread"]
console.log(JSON.stringify(findAllRecipes(["bread","sandwich"], [["yeast","flour"],["bread","meat"]], ["yeast","flour","meat"]))); // ["bread","sandwich"]
console.log(JSON.stringify(findAllRecipes(["bread","sandwich","burger"], [["yeast","flour"],["bread","meat"],["sandwich","meat","bread"]], ["yeast","flour","meat"]))); // ["bread","sandwich","burger"]
console.log(JSON.stringify(findAllRecipes(["bread"], [["yeast","flour"]], ["yeast"]))); // []
console.log(JSON.stringify(findAllRecipes(["x"], [["x"]], []))); // []
console.log(JSON.stringify(findAllRecipes(["a","b"], [["b"],["a"]], []))); // [] (circular)
