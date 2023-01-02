import React, { useState , useDispatch} from 'react';
import { updateToDo } from '../JS/actions/toDoActions';

const UpdateTask = (updateData, setUpdateData ,tasks) => {

  

  const dispatch = useDispatch();

  

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
    dispatch( updateToDo ( updateData.id , updateData.description))
  }
  return (
    <>
          <div className="row">
            <div className="col">
              <input 
                value={ updateData && updateData.description }
                onChange={ (e) => changeTask(e)}
                className="form-control form-control-lg"
              />
            </div>
            
            <div className="col-auto">
              <button
                onClick={updateTask}
                className="btn btn-lg btn-success mr-20"
              >Update</button>
              <button
                onClick={cancelUpdate}
                className="btn btn-lg btn-warning"
              >Cancel</button>
            </div>
          </div>
          <br />
        </>
  )
}

export default UpdateTask