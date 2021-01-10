import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import Filter from './components/Filter';
function App() {
  return (
    <div className="App-header">
      <Filter/>
      <AddToDo/>
      <ToDoList/>
    </div>
  );
}

export default App;
