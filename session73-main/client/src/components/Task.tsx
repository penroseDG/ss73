import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { toggleComplete, deleteTask } from '../store/reducers/tasksReducer';
interface TaskProps {
    task: {
      id: number;
      name: string;
      completed: boolean;
    };
}
export default function Task(task:any) {
    const dispatch: AppDispatch = useDispatch();
  return (
  <li>
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => dispatch(toggleComplete(task.id))}
    />
    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.name}
    </span>
    <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
  </li>
  )
}
