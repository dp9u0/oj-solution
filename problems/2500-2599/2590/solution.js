/*
 * @lc app=leetcode.cn id=2590 lang=javascript
 *
 * [2590] 设计一个待办事项清单
 */

// @lc code=start

var TodoList = function() {
    this.tasks = new Map();
    this.nextId = 1;
};

/** 
 * @param {number} userId 
 * @param {string} taskDescription 
 * @param {number} dueDate 
 * @param {string[]} tags
 * @return {number}
 */
TodoList.prototype.addTask = function(userId, taskDescription, dueDate, tags) {
    const id = this.nextId++;
    this.tasks.set(id, { userId, desc: taskDescription, dueDate, tags: tags.slice(), done: false });
    return id;
};

/** 
 * @param {number} userId
 * @return {string[]}
 */
TodoList.prototype.getAllTasks = function(userId) {
    const out = [];
    for (const t of this.tasks.values()) {
        if (t.userId === userId && !t.done) out.push(t);
    }
    out.sort((a, b) => a.dueDate - b.dueDate);
    return out.map((t) => t.desc);
};

/** 
 * @param {number} userId 
 * @param {string} tag
 * @return {string[]}
 */
TodoList.prototype.getTasksForTag = function(userId, tag) {
    const out = [];
    for (const t of this.tasks.values()) {
        if (t.userId === userId && !t.done && t.tags.includes(tag)) out.push(t);
    }
    out.sort((a, b) => a.dueDate - b.dueDate);
    return out.map((t) => t.desc);
};

/** 
 * @param {number} userId 
 * @param {number} taskId
 * @return {void}
 */
TodoList.prototype.completeTask = function(userId, taskId) {
    const t = this.tasks.get(taskId);
    if (t && t.userId === userId && !t.done) t.done = true;
};

/** 
 * Your TodoList object will be instantiated and called as such:
 * var obj = new TodoList()
 * var param_1 = obj.addTask(userId,taskDescription,dueDate,tags)
 * var param_2 = obj.getAllTasks(userId)
 * var param_3 = obj.getTasksForTag(userId,tag)
 * obj.completeTask(userId,taskId)
 */
// @lc code=end

// TEST:
const td = new TodoList();
console.log(td.addTask(1, "Task1", 50, [])); // 1
console.log(td.addTask(1, "Task2", 100, ["P1"])); // 2
console.log(JSON.stringify(td.getAllTasks(1))); // ["Task1","Task2"]
console.log(JSON.stringify(td.getAllTasks(5))); // []
console.log(td.addTask(1, "Task3", 30, ["P1"])); // 3
console.log(JSON.stringify(td.getTasksForTag(1, "P1"))); // ["Task3","Task2"]
td.completeTask(5, 1);
td.completeTask(1, 2);
console.log(JSON.stringify(td.getTasksForTag(1, "P1"))); // ["Task3"]
console.log(JSON.stringify(td.getAllTasks(1))); // ["Task3","Task1"]
