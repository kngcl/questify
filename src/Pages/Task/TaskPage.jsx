import React, { useEffect, useState } from 'react';
import './TaskPage.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { getColumns } from '../../Api/auth';
import ModalAddCurrency from '../../Components/Components/Modal/Modal/ModalTransfer';
import DeleteTask from '../../Components/Components/Modal/Modal/DeleteTask';
import PageLoader from '../Templates/PageLoader/PageLoader';

export default function TaskPage() {
  const [task, setTask] = useState();
  const [AddCurrency, setAddcurrency] = useState(false);
  const [deleteTasks, setDeleteTask] = useState(false);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    getColumns().then(setTask);
    setIsloading(false);
  }, []);
  console.log(task);

  return (
    <div className="taskPage scroll">
      <p>{isloading ? <PageLoader /> : ''}</p>
      {AddCurrency === true && (
        <ModalAddCurrency setAddcurrency={setAddcurrency} />
      )}
      {deleteTasks === true && <DeleteTask setDeleteTask={setDeleteTask} />}
      {task?.map((item) => {
        return (
          <div className="carding" key={item.id}>
            {item.cards?.map((tasks) => {
              return (
                <div className="taskContain">
                  <div className="taskbox">
                    <h3>Task</h3>
                    <p>{tasks.title}</p>
                  </div>
                  <div className="taskbox">
                    <h3>Assignee</h3>
                    <p>assignee</p>
                  </div>
                  <div className="taskbox">
                    <h3>Due date</h3>
                    <p>dueDate</p>
                  </div>
                  <div className="taskbox">
                    <h3>Priority</h3>
                    <p>priority</p>
                  </div>
                  <div className="memberFieldBtn">
                    <button
                      type="button"
                      className="manageElt"
                      onClick={() => {
                        setAddcurrency(true);
                      }}
                    >
                      <FaEdit />
                    </button>
                    <hr />
                    <button
                      type="button"
                      className="manageElt"
                      onClick={() => {
                        setDeleteTask(true);
                      }}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
