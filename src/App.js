import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Addtask from './components/Addtask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
       
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,

    }
])


  const name = ' Ishmael';
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])

}

//delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//toggle reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))


}


  return (
    <div className="container">
      <h1 style={{color: 'red'}}>hello {name}</h1>
      <Header  onAdd={() =>setShowAddTask
        (!showAddTask)} showAdd={showAddTask} />
      { showAddTask  && <Addtask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks}
       onDelete={deleteTask} onToggle={toggleReminder} />: ('No Tasks to Show')}
      

      
    </div>
  );
}

export default App;
