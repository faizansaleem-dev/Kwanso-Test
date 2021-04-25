import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, {useState} from "react"
import CreateTask from "./Components/addTask";
import ListTask from './Components/listTasks'
import Home from './Components/home'
import NavBar from './Components/navbar'
import DeleteTask from './Components/deleteTask'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks((prevState) => {return [...prevState, task]})
  }
  
  const updateTask = (task) => {
    setTasks(task)
  }
  return (
    <div>
      <NavBar></NavBar>
       <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/create-task" render={() => (
              <CreateTask addTask={addTask} /> 
            )} />
            <Route path="/list-task" render={() => (
              <ListTask tasks={tasks}/>
            )} />
            <Route path="/bulk-delete" render={() => (
              <DeleteTask tasks={tasks} updateTask={updateTask}/>
            )} />
        </Switch>
    </div>
  );
}

export default App;
