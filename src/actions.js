export let addTask = news => ({type: "ADD_TASK", data: news});
export let deleteTask = id => ({type: "DELETE_TASK", id: id});
export let activeTask = id => ({type: "ACTIVE_TASK", id: id});
