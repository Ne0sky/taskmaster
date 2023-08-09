import React, { useEffect, useState } from 'react';
import TaskDetails from '../components/TaskDetails';
import TaskForm from '../components/TaskForm';
import { useTasksContext } from '../hooks/useTasksContext';
import {useAuthContext} from '../hooks/useAuthContext'

const Tasks = () => {
    const { tasks, dispatch } = useTasksContext();
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [currentDay, setCurrentDay] = useState('');

    const {user} = useAuthContext()

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch('/api/tasks/',{
                    headers:{
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                if (response.ok) {
                    const json = await response.json();
                    dispatch({ type: 'SET_TASKS', payload: json });
                } else {
                    console.error('Error fetching tasks:', response.statusText);
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        };

        if(user){
            fetchTasks();
        }

        

        // Update the current date and time every second
        const interval = setInterval(() => {
            const now = new Date();
            setCurrentDateTime(now);
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            setCurrentDay(days[now.getDay()]);
        }, 1000);

        
    }, [dispatch,user]);

    return (
        <div className=" mt-24 w-full h-full px-8 md:px-40 overflow-x-hidden">
            <h1 className="text-3xl md:text-4xl py-4 font-medium mb-10 font-primary text-white">Welcome back, its {currentDay}</h1>
            <div className="flex flex-col lg:flex-row-reverse">
                <TaskForm />
                <div className="tasks w-full">
                    <div className="mb-4 text-white text-lg">
                        {currentDateTime.toLocaleString()}
                    </div>
                    {tasks !== null && tasks.length === 0 && <div className='text-white text-2xl'>No tasks to show</div>}
                    {tasks && tasks.map((task) => (
                        <TaskDetails key={task._id} task={task} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;
