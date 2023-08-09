import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { useTasksContext } from '../hooks/useTasksContext';
import { useAuthContext } from '../hooks/useAuthContext';

const TaskDetails = ({ task }) => {
  const {user} = useAuthContext()
  const { dispatch} = useTasksContext()
  const handleDelete=async()=>{
    const response = await fetch('/api/tasks/' + task._id,{
      method : 'DELETE',
      headers:{
        'Authorization': `Bearer ${user.token}`
      }
    })

    const json = await response.json()

    if(response.ok){
      dispatch({type:'DELETE_TASK', payload: json})
    }
  }

  const handleToggleCompleted = async () => {
    if(!user){
      return
    }
    try {
      // Call the API to update the task's completed status
      const response = await fetch(`/api/tasks/${task._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({ completed: !completedStatus }),
      });

      if (response.ok) {
        const json = await response.json()
        // If the API call was successful, update the local state
        dispatch({type:'COMPLETE_TASK', payload:json})
      } else {
        console.error('Error updating completed status:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  const priorityClass = task.priority === 'high' ? 'border-rose-500' : task.priority === 'medium' ? 'border-orange-500' : 'border-green-500';
  const [completedStatus, setCompletedStatus] = useState(task.completed)
  return (
    <div className={`py-16 lg:py-8 relative w-full md:w-[70%]  text-white font-primary text-lg h-auto rounded-lg border-l-4 ${priorityClass}  ${task.completed ? 'bg-gradient-to-r from-[#0f190d] to-zinc-900' : 'bg-gradient-to-r from-[#231010] to-zinc-900'} shadow-lg shadow-[#00000020] my-6 px-4 py-2 `}>
      <h4 className='flex items-center'>
         <p className='text-2xl font-semibold'>{task.title}</p>
      </h4>
      <p className='text-zinc-300'>
        {task.description}
      </p>
      <p className={`${task.priority === 'high' ? 'border-rose-600' : task.priority === 'medium' ? 'border-yellow-600' : task.priority === 'low' ? 'border-green-600' : ''} rounded-full border px-4 max-w-[8rem] text-center text-sm absolute right-12 top-3 py-1`}>
         {task.priority}
      </p>
      <label className='flex items-center text-md'>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleCompleted}
          className='mr-2 cursor-pointer '
        />
        Completed
      </label>
      <p className='absolute right-3 bottom-2 text-sm text-zinc-500'>
         {new Date(task.createdAt).toLocaleString()} {/* Format createdAt date */}
      </p>
      <button onClick={handleDelete} className='delete absolute right-3 top-3 text-2xl text-rose-600 '><MdDelete/></button>
    </div>
  );
};

export default TaskDetails;
