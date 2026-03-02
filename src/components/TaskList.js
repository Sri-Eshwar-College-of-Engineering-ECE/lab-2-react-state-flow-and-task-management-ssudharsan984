import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <div>
      <h2>Tasks ({tasks.length})</h2>
      {tasks.length === 0 ? (
        <p style={styles.empty}>No tasks yet. Add one above!</p>
      ) : (
        tasks.map(task => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
};

const styles = {
  empty: { textAlign: 'center', color: '#6c757d', padding: '20px' }
};

export default TaskList;
