/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newTask, updateTask } from '../../services/tasks';
import FormTodo from './Formtodo';
import TaskList from './Tasklist';
import './Checklist.css';
import { showTasksPatient, updateTasks } from '../../store/actions';

function Checklist() {
  const { token } = useSelector((state) => state.user);
  const { tasks } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showTasksPatient(token));
  }, []);

  const handleAddTask = async (_newTask) => {
    try {
      const data = await newTask(_newTask, token);
      dispatch(updateTasks([...tasks, data]));
    } catch (error) {
      throw new Error(error);
    }
  };
  const handleUpdateTask = async (taskUpdate) => {
    try {
      const data = await updateTask(taskUpdate, token);
      const filterTasks = tasks.filter((task) => task._id !== data._id);
      dispatch(updateTasks(filterTasks));
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="chechklist">
      <FormTodo handleAddItem={handleAddTask} />
      <TaskList list={tasks} setList={updateTasks} updateTask={handleUpdateTask} />
    </div>
  );
}

export default Checklist;
