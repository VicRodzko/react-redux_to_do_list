const initialState = {
  task: [],
  uniqueId: 1
}

function reducer(state = initialState, action) {

  switch (action.type) {
    case "ADD_TASK":
      let new_publ = {
        title: action.data.title,
        id: state.uniqueId,
        active: false
      };
    
      return {
        task: [...state.task, new_publ],
        uniqueId: state.uniqueId + 1
      };
    
    case "DELETE_TASK":
      return {
        ...state,
        task: state.task.filter(task => task.id != action.id)
      };

    case "ACTIVE_TASK":
      return {
        ...state,
        task: state.task.map( task => {
          if (task.id == action.id) {
            return {...task, active: task.active == true ? false : true};
          }
           return task;
        })
      };

    default:
      return state;
  }
}

export default reducer;
