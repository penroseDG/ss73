import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchTasks } from '../store/reducers/tasksReducer';
import Task from './Task';
export default function TaskList() {
  const dispatch: AppDispatch = useDispatch();
  const tasks:any = useSelector((state: RootState) => state.tasks.tasks);
  const taskStatus = useSelector((state: RootState) => state.tasks.status);

  useEffect(() => {
    if (taskStatus === 'idle') {
      dispatch(fetchTasks());
    }
  }, [taskStatus, dispatch]);

  return (
    <ul>
      {tasks.map((task:any) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  )
}
