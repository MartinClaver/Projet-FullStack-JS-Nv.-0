import { test, expect } from 'vitest';
import updateTask from '../task.js';

test('test updateTask', () => {
    const mockTasks = [
        {
            name: "LOL",
            description: "lolol",
        },
        {
            name: "LOL2",
            description: "lolol2",
        },
    ]
    const newTask = {
        name: "LOL3",
        description: "lolol3",
    }
    const updatedTasks = updateTask(mockTasks, 1, newTask.name, newTask.description)
    expect(updatedTasks[1].name).toBe(newTask.name)
})