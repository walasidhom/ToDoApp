import { useSelector } from 'react-redux';
import Task from './Task'

const TaskList = ({ markDone, setUpdateData, filter }) => {
  const tasks = useSelector((store) => store.toDoReducer.Tasks);
    
    

  return (
      <>
          {tasks && tasks.length ? '' : 'No Tasks...'}
      { filter==='Done' ? tasks.sort((a, b) => a.id > b.id ? 1 : -1).filter( (task) => task.isDone === true).map((task, index) => {
          return (

            <Task key={index} task={task} index={index} markDone={markDone} setUpdateData={setUpdateData} />

          )
          
      })
        :
        filter==='unDone' ? tasks.sort((a, b) => a.id > b.id ? 1 : -1).filter( (task) => task.isDone === false).map((task, index) => {
          return (

            <Task key={index} task={task} index={index} markDone={markDone} setUpdateData={setUpdateData} />

          )
          
        }) : 
          tasks.sort((a, b) => a.id > b.id ? 1 : -1).map((task, index) => 
            <Task key={index} task={task} index={index} markDone={markDone} setUpdateData={setUpdateData} />
        )
        }
      </>
  )
}

export default TaskList