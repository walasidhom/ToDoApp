import React, { useDispatch, useState } from "react";
import { updateToDo } from "../JS/actions/toDoActions";

const UpdateTask = ({ task }) => {
  const [editedText, setEditedText] = useState(task.description);
  const [edit, setEdit] = useState(false);
  console.log(task);
  const dispatch = useDispatch();

  // Cancel update
  ///////////////////////////
  const cancelUpdate = () => {
    setEdit(false);
    setEditedText(task.description);
  };

  // Change task for update
  ///////////////////////////
  // const changeTask = (e) => {
  //   let newEntry = {
  //     id: updateData.id,
  //     description: e.target.value,
  //     isDone: updateData.isDone ? true : false,
  //   };
  //   setUpdateData(newEntry);
  // };

  // Update task
  ///////////////////////////
  // const updateTask = () => {
  //   dispatch(updateToDo(updateData.id, editedDescription));
  // };
  const handleEdit = () => {
    dispatch(updateToDo(task.id, editedText));
    setEdit(false);
  };

  return (
    <>
      {edit && (
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
              <button onClick={cancelUpdate} className="btn btn-lg btn-warning">
                Cancel
              </button>
            </div>
          </div>
          <br />
        </>
      )}
    </>
  );
};

export default UpdateTask;
