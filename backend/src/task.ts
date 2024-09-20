interface Task {
  id: number,
  name: string,
  creator: string,
  description: string,
  dateTime?: Date,
}

export  function addTask (tasks: Array<Task>,id: number, name: string, creator: string, description: string, dateTime: Date): Array<Task> {
    let newTask: Task = {
        id: id,
        name: name,
        creator: creator,
        description: description,
        dateTime: dateTime,
    }
    tasks.push(newTask)
    return tasks
}

export function removeTask (tasks: Array<Task>, id: number): void {
  const index = tasks.findIndex(task => task.id === id)
  tasks.splice(index)
}

export function updateTask(tasks: Array<Task>, iTask: number, id: number, name: string, creator: string, description: string){
  tasks[iTask] = {
      id: id,
      name : name,
      description: description,
      creator: creator
  }
  return tasks
}

export function mergeTaskLists(tasks: Array<Task>): void {
  let id = 0
  for (let i in tasks) {
    if (tasks[i].id == id) {
        tasks.splice(Number(i))
        return
      }
    id = tasks[i].id

  }
}



