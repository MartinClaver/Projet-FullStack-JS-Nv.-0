"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = addTask;
exports.removeTask = removeTask;
exports.updateTask = updateTask;
exports.mergeTaskLists = mergeTaskLists;
function addTask(tasks, id, name, creator, description, dateTime) {
    var newTask = {
        id: id,
        name: name,
        creator: creator,
        description: description,
        dateTime: dateTime,
    };
    tasks.push(newTask);
    return tasks;
}
function removeTask(tasks, id) {
    var index = tasks.findIndex(function (task) { return task.id === id; });
    tasks.splice(index);
}
function updateTask(tasks, iTask, id, name, creator, description) {
    tasks[iTask] = {
        id: id,
        name: name,
        description: description,
        creator: creator
    };
    return tasks;
}
function mergeTaskLists(tasks) {
    var id = 0;
    for (var i in tasks) {
        if (tasks[i].id == id) {
            tasks.splice(Number(i));
            return;
        }
        id = tasks[i].id;
    }
}
