import React, { useState } from 'react'
import { useTasksContext } from '../hooks/useTasksContext'
import { useAuthContext } from '../hooks/useAuthContext'
const TaskForm = () => {
    const {dispatch} = useTasksContext()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('medium')
    const [completed, setCompleted] = useState(false)
    const [error, setError] = useState(null)
    const {user} = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!user){
          setError('You must be logged in')
          return
        }
        const task = { title, description, priority, completed };
    
        const response = await fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
        });
        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
        } 
        if(response.ok) {
            setTitle('');
            setDescription('');
            setPriority('medium');
            setCompleted(false);
            setError(null);
            dispatch({type:'ADD_TASK', payload: json})
            console.log('new task added', response);
        }
    };
  return (
    <form className='flex flex-col text-white font-primary w-full lg:w-[50%] ' onSubmit={handleSubmit}>
        <h3 className='text-2xl font-semibold my-8    py-2'>Add a new task</h3>

        <label className='font-medium text-xl'>Task Title </label>
        <input
        className='block py-2 px-4 my-2 rounded-lg bg-zinc-800'
        type='text'
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
        />
        <div className='my-4'>
        <label className='font-medium text-xl'>Task Description </label>
        <input
        className='block w-full py-2 px-4 my-2 rounded-lg bg-zinc-800'
        type='text'
        onChange={(e)=>setDescription(e.target.value)}
        value={description}
        />
        </div>

       <div className='my-4'>
    <label className='font-medium text-xl  '>Task Priority</label>
        <select
        className='block py-2 px-4 my-2 w-full rounded-lg bg-zinc-800'
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
    >
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
    </select>
    </div>

    <label className='my-1 font-medium text-xl'>Task Status</label>
<div className=''>
  <input
   className=' '
    type="radio"
    id="completed"
    name="status"
    value="true"
    checked={completed === true}
    onChange={(e) => setCompleted(e.target.value === "true")}
  />
  <label className='px-2' htmlFor="completed">Completed</label>
</div>
<div>
  <input
    type="radio"
    id="not-completed"
    name="status"
    value="false"
    checked={completed === false}
    onChange={(e) => setCompleted(e.target.value === "true")}
  />
  <label className='px-2' htmlFor="not-completed">Not Completed</label>

  <button className='bg-indigo-700 px-4 py-2 rounded-xl hover:bg-indigo-900 block my-4' type='submit'>Add Task</button>
</div>
    {error && <div className='px-2 py-2 bg-[#432c2c] border border-rose-700'>{error}</div>}
    </form>
  )
}

export default TaskForm