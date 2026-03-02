import { Provider } from 'react-redux';
import { store } from './store/store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <Provider store={store}>
      <div style={styles.container}>
        <h1 style={styles.title}>Task Management Dashboard</h1>
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
  );
};

const styles = {
  container: { maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Arial, sans-serif' },
  title: { textAlign: 'center', color: '#333', marginBottom: '30px' }
};

export default App;
