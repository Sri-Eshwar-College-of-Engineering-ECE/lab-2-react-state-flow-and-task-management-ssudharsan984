import { useDispatch } from 'react-redux';
import { updateTask, deleteTask } from '../store/taskSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const toggleStatus = () => {
    dispatch(updateTask({
      id: task.id,
      updates: { status: task.status === 'pending' ? 'completed' : 'pending' }
    }));
  };

  return (
    <div style={styles.task}>
      <span style={{ ...styles.title, textDecoration: task.status === 'completed' ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <div style={styles.actions}>
        <button onClick={toggleStatus} style={styles.statusBtn}>
          {task.status === 'pending' ? 'Complete' : 'Reopen'}
        </button>
        <button onClick={() => dispatch(deleteTask(task.id))} style={styles.deleteBtn}>
          Delete
        </button>
      </div>
    </div>
  );
};

const styles = {
  task: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '4px', marginBottom: '10px' },
  title: { flex: 1, fontSize: '16px' },
  actions: { display: 'flex', gap: '10px' },
  statusBtn: { padding: '8px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  deleteBtn: { padding: '8px 15px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default TaskItem;
