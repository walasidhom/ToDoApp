import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck , faPen } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { finishToDo } from '../JS/actions/toDoActions';

const Task = ({ task, index, setUpdateData }) => {
  const dispatch = useDispatch();

  const markDone = () => {
    dispatch(finishToDo(task.id));
  }

  
  return (
    <>
        
        
            
              
              <React.Fragment key={task.id}>
                
                  <div className="col taskBg">
                    <div className={ task.isDone ? 'done' : '' }>
                      <span className="taskNumber">{index + 1}</span>
                      <span className="taskText">{task.description}</span>
                    </div>
                    <div className="iconsWrap">
                      <span title="Completed / Not Completed"
                        onClick={ (e) => markDone(task.id) }
                      >
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>
                    {/*  if task isDone then don't show edit icon */}
                      {task.isDone ? null : (
                        <span title="Edit"
                          onClick={ () => setUpdateData({ 
                            id: task.id, 
                            description: task.description, 
                            isDone: task.isDone ? true : false
                          }) }
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </span>
                      )}

                    </div>
                  </div>
              </React.Fragment>
              
              
            
          
    </>
  )
}

export default Task