import React, { useMemo, useState } from 'react';
import AddTask from './Components/AddTask';
import UpdateTask from './Components/UpdateTask';
import Task from './Components/Task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import TaskList from './Components/TaskList';

function App() {

  
  const [toDo, setToDo] = useState([
    { "id": 1, "description": "task 1", "isDone": false },
    { "id": 2, "description": "task 2", "isDone": false }
  ]);

 const [filter, setFilter] = useState('All');

  

  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  

  const Card = ({ title, content }) => {
    
		return(
			<div className="card">
				<h2>{title}</h2>
				<div className="line" style={{backgroundColor: '#ae63e4'}}></div>
				<p>{content}</p>
			</div>
		)
	}

  // Add task 
  ///////////////////////////
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1; 
      let newEntry = { id: num, description: newTask, isDone: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }


  // Mark task as done 
  ///////////////////////////
  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if( task.id === id ) {
        return ({ ...task, isDone: !task.isDone })
      }
      return task;
    })
    setToDo(newTask);
  }

  // Cancel update
  ///////////////////////////
  const cancelUpdate = () => {
    setUpdateData('');
  }

  // Change task for update
  ///////////////////////////
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      description: e.target.value,
      isDone: updateData.isDone ? true : false
    }
    setUpdateData(newEntry);
  }

  // Update task
  ///////////////////////////
  const updateTask = () => {
    let filterRecords = toDo.filter( task => task.id !== updateData.id );
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }

  // Filter task 
  ///////////////////////////

  // const filterTaskDone = () => {
  //   let doneTasks = toDo.filter( task => task.isDone === true)
  //   setToDo(doneTasks);
  // }

  // const filterTaskNotDone = () => {
  //   let notDoneTasks = toDo.filter( task => task.isDone !== true)
  //   setToDo(notDoneTasks);
  // }

  // const showAll = () => {
    
  //   setToDo(toDo) ;
  // }

  const filterToDos = () => {
    switch (filter) {
      case 'All':
        { } 
       case 'Done':
         
           
         
         
         case 'unDone':
         
        
          
         
      
        default:
          break;
      }
    
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
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
          
          <AddTask
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />
          
      )}
        

      

      
      {/* Display ToDos */}
      <TaskList toDo={toDo }
        markDone={markDone}
        setUpdateData={setUpdateData}
        filter={filter} />
    </div>
  );
}

export default App;
