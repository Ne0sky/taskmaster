import React, { createContext, useReducer } from "react";

export const TasksContext = createContext();

export const tasksReducer = (state,action)=>{
    switch(action.type){
        case 'SET_TASKS':
        return {
            tasks: action.payload
        }
        case 'ADD_TASK':
            return{
                tasks:[action.payload, ...state.tasks] // add the new json and spead the remaining array
            }
        case 'DELETE_TASK':
            return{
                tasks:state.tasks.filter((t)=>t._id!== action.payload._id)
            }
        case 'COMPLETE_TASK':
            return {
                tasks: state.tasks.map((task) =>
                  task._id === action.payload._id
                    ? { ...task, completed: !task.completed }
                    : task
                ),
              };
        default:
            return state

    }
}

export const TasksContextProvider = ({ children }) => { // represents the App in the main.jsx

    const [state, dispatch] = useReducer(tasksReducer,{ // similar to use state and we get a state value
        tasks : null
    })

    

    return (
        <TasksContext.Provider value={{...state, dispatch}}> {/* this prop is given to the children components */}
            {children}
        </TasksContext.Provider>
    );
};

//...state is because we want the state rathar than the object
