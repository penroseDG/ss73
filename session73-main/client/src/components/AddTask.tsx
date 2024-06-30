import React from 'react'
import { useState, } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { addTask } from '../store/reducers/tasksReducer';
export default function AddTask() {
  const [taskName, setTaskName] = useState('');
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName.trim()) {
      dispatch(addTask({ id: 0, name: taskName, completed: false }));
      setTaskName('');
    } else {
      alert('Tên công việc không được để trống');
    }
  };

  return (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      value={taskName}
      onChange={(e) => setTaskName(e.target.value)}
    />
    <button type="submit">Thêm</button>
  </form>
  )
}
