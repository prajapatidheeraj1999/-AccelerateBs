import logo from './logo.svg';
import './App.css';
import ProjectForm from './componet/ProjectForm';
import { useTimeTracking } from './context/TimeTrackingContext';
import ProjectList from './componet/ProjectList';
import TaskForm from './componet/TaskForm';
import TaskList from './componet/TaskList';
import Allroute from './page/Allroute';

function App() {
  const { state } = useTimeTracking();
  return (
    <div >
      <div id='header'>
      <h1 style={{textAlign:'center'}}>Time Tracking App</h1>
      <h3>Total Hours Today: {state.totalHours}</h3>
      </div>
      <Allroute/>
    </div>
  );
}

export default App;
