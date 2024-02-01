export default function taskReducer(tasks, action) {
  switch (action.type) {
    case "ADDED":
      return [...tasks, action.newTask];
    case "EDIT": {
        return tasks.map((task) => {
          if (task.id === action.newTask.id) {
            return action.newTask;
          }
          return task;
        });
      }
    case "DELETE_ALL":
      return [];
    case "FAV": {
      const taskIndex = tasks.findIndex((task) => task.id === action.taskId);
      const newTasks = [...tasks];
      newTasks[taskIndex] = {
        ...newTasks[taskIndex],
        isFavorite: !tasks[taskIndex].isFavorite,
      };
      return [...newTasks];
    }
    case "DELETE": {
      const filteredTasks = tasks.filter((task) => task.id !== action.taskId);
      return [...filteredTasks];
    }
    default:
      break;
  }
}
