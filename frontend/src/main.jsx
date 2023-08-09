import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TasksContextProvider } from './context/TaskContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <TasksContextProvider>
    <App />
    </TasksContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
