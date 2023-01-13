import React, { useState }from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
  }

  const handleDelete = (id) => {
    setTasks(tasks.filter(tasks => tasks.text !== id))
  }

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} handleSelectedCategory={handleSelectedCategory}/>
      <NewTaskForm addNewTask={addNewTask} categories={CATEGORIES.filter(cat => cat !== "All")}/>
      <TaskList selectedCategory={selectedCategory} tasks={tasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
 