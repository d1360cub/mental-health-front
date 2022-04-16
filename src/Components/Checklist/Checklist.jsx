/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getTasks, newTask, updateTask } from '../../services/tasks';
import FormTodo from './Formtodo';
import TaskList from './Tasklist';
import './Checklist.css';

function Checklist() {
  const { token } = useSelector((state) => state.user);
  const [tasks, setTasks] = useState([]);
  const fetchTasks = async (query = {}) => {
    const data = await getTasks(query);
    setTasks(data);
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (_newTask) => {
    try {
      const data = await newTask(_newTask, token);
      setTasks((prev) => [...prev, data]);
    } catch (error) {
      throw new Error(error);
    }
  };
  const handleUpdateTask = async (taskUpdate) => {
    try {
      const data = await updateTask(taskUpdate, token);
      const filterTasks = tasks.filter((task) => task._id !== data._id);
      setTasks(filterTasks);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div>
      <FormTodo handleAddItem={handleAddTask} />
      <TaskList list={tasks} setList={setTasks} updateTask={handleUpdateTask} />
    </div>
  );
}

export default Checklist;
