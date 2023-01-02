import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPen } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { finishToDo, updateToDo } from "../JS/actions/toDoActions";

const Task = ({ task, index, setUpdateData }) => {
  const dispatch = useDispatch();
  const [editedText, setEditedText] = useState(task.description);
  const [edit, setEdit] = useState(false);
  const markDone = () => {
    dispatch(finishToDo(task.id));
  };
  const handleEdit = () => {
    dispatch(updateToDo(task.id, editedText));
    setEdit(false);
  };
  const cancelUpdate = () => {
    setEdit(false);
    setEditedText(task.description);
  };

  return (
    <>
      <React.Fragment key={task.id}>
        <div className="col taskBg">
          <div className={task.isDone ? "done" : ""}>
            <span className="taskNumber">{index + 1}</span>
            {edit ? (
              <>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="col-auto">
                    <button
                      onClick={handleEdit}
                      className="btn btn-lg btn-success mr-20"
                    >
                      Update
                    </button>
                    <button
                      onClick={cancelUpdate}
                      className="btn btn-lg btn-warning"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
                <br />
              </>
            ) : (
              <span className="taskText">{task.description}</span>
            )}
          </div>
          <div className="iconsWrap">
            <span
              title="Completed / Not Completed"
              onClick={(e) => markDone(task.id)}
            >
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            {/*  if task isDone then don't show edit icon */}

            <span title="Edit" onClick={() => setEdit(true)}>
              <FontAwesomeIcon icon={faPen} />
            </span>
          </div>
        </div>
      </React.Fragment>
    </>
  );
};

export default Task;
