import "./App.css";
import TodoForm from "./components/Todoform";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo__app">
      <TodoList />
    </div>
  );
}

export default App;
