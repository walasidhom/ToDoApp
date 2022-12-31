import React, { useState } from 'react'
import Task from './Task'

const TaskList = ({ toDo, markDone, setUpdateData , filter }) => {
    
    

  return (
      <>
          {toDo && toDo.length ? '' : 'No Tasks...'}
      { filter==='Done' ? toDo.sort((a, b) => a.id > b.id ? 1 : -1).filter( (task) => task.isDone === true).map((task, index) => {
          return (

            <Task task={task} index={index} markDone={markDone} setUpdateData={setUpdateData} />

          )
          
      })
        :
        filter==='unDone' ? toDo.sort((a, b) => a.id > b.id ? 1 : -1).filter( (task) => task.isDone === false).map((task, index) => {
          return (

            <Task task={task} index={index} markDone={markDone} setUpdateData={setUpdateData} />

          )
          
        }) : 
          toDo.sort((a, b) => a.id > b.id ? 1 : -1).map((task, index) => 
            <Task task={task} index={index} markDone={markDone} setUpdateData={setUpdateData} />
        )
        }
      </>
  )
}

export default TaskList