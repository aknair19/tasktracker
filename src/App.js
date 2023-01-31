import { useState } from "react";
import "./css/app.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    // {
    //   id: tasks.length,
    //   text: "",
    //   reminder: false,
    //   day: "",
    // },
  ]);
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Add Task
  const addTask = (task) => {
    const id = task.length;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  //Toggle Reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header
          title="Task Tracker"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        <div className="section">
          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              setReminder={toggleReminder}
            />
          ) : (
            "No tasks to show"
          )}
        </div>
      </div>
    </div>
  );
}

export default App;