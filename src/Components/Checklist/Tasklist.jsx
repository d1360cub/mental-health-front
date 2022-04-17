/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

function TaskList({ list, updateTask }) {
  const chk = list.map((item) => (
    <Checkbox key={item._id} data={item} onChange={updateTask} />
  ));

  return (
    <div className="todo-list">
      {list.length ? chk : 'No tasks'}
      {list.length }
    </div>
  );
}

TaskList.propTypes = {
  list: PropTypes.string,
  updateTask: PropTypes.func,
};

TaskList.defaultProps = {
  list: '',
  updateTask: () => {},
};

export default TaskList;
