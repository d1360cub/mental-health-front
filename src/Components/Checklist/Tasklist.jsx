/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

function TaskList({ list, setList }) {
  const onChangeStatus = (e) => {
    const { name, checked } = e.target;
    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done,
    }));
    setList(updateList);
  };
  const onClickRemoveItem = () => {
    const updateList = list.filter((item) => !item.done);
    setList(updateList);
  };

  const chk = list.map((item) => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
  ));

  return (
    <div className="todo-list">
      {list.length ? chk : 'No tasks'}
      {list.length ? (
        <p>
          <button className="button blue" onClick={onClickRemoveItem}>
            Delete all done
          </button>
        </p>
      ) : null}
    </div>
  );
}

TaskList.propTypes = {
  list: PropTypes.string,
  setList: PropTypes.func,
};

TaskList.defaultProps = {
  list: '',
  setList: () => {},
};

export default TaskList;
