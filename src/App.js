import React, { useState } from 'react';
import AddTask from './Components/AddTask';
import UpdateTask from './Components/UpdateTask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import TaskList from './Components/TaskList';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo } from './JS/actions/toDoActions';

function App() {

  const tasks = useSelector((store) => store.toDoReducer.Tasks);
  const [updateData, setUpdateData] = useState('');
  const [filter, setFilter] = useState('All');
  const [newTask, setNewTask] = useState('');
  
  const dispatch = useDispatch();
  

  // Add task 
  ///////////////////////////
  const addTask = () => {

  

    dispatch(addToDo({
      id: tasks.length + 1,
      description: newTask,
      isDone: false
    }))
    setNewTask('');
  }



  



  

  return (
    <div className="container App">
      <br /><br />
      <h1>To Do List App</h1>
      <br /><br />
      <div class="row">
        <div className='col'>
          <button className="filter-btn" >
            <span title="Filter">
              <FontAwesomeIcon icon={ faFilter } /> Filter
            </span>
          </button>
        </div>
        
        
      </div>

      <div class="row">
        <div className='col'>

          <button className="done-btn" >
            <span title="not Done" onClick={() => {setFilter('All')} } >
              All
            </span>
          </button>

          <button className="done-btn" >
            <span title="Done" style={{textDecoration: 'line-through'}} onClick={() => { setFilter('Done') } }>
              Done
            </span>
          </button>

          <button className="done-btn" >
            <span title="not Done" onClick={() => { setFilter('unDone')} }>
              unDone
            </span>
          </button>

          
        </div>
        
      </div>
      
      

      
      {/* Update Task */}
      {updateData && updateData ? (
        <UpdateTask
          updateData={updateData}
          setUpdateData = {setUpdateData}
          tasks={tasks}
          
        />
      ) : (
          
          <AddTask
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />
          
      )}
        

      

      
      {/* Display ToDos */}
      <TaskList tasks={tasks }
        
        setUpdateData={setUpdateData}
        filter={filter} />
    </div>
  );
}

export default App;
