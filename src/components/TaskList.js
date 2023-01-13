import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete, selectedCategory }) {
  // Neat use of the ternary operator with an OR statement
  const filteredTasks = tasks.filter(task => task.category === selectedCategory || selectedCategory === "All")
  const myTasks = filteredTasks.map(task => (
    <Task
      text={task.text}
      category={task.category}
      key={task.text}
      handleDelete={handleDelete}
    />
  ))

  return (
    <div className="tasks">
      {myTasks}
    </div>
  );
}

export default TaskList;
 