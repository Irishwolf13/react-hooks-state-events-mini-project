import React, { useState } from "react";

function NewTaskForm({ categories, addNewTask }) {

  const myCategories = categories.map(category => (
    <option key={ category }>{ category }</option>
  ))

  const [myText, setMyText] = useState("")
  const [myCat, setMyCat] = useState("Code")

  const onTaskFormSubmit = (e) => {
    e.preventDefault()
    addNewTask({
      text: myText,
      category: myCat
    })
  }

  return (
    <form onSubmit={onTaskFormSubmit}className="new-task-form">
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={myText}
          onChange={e => setMyText(e.target.value)}
          />
      </label>
      <label>
        Category
        <select 
          name="category"
          value={myCat}
          onChange={e => setMyCat(e.target.value)}
          >
          {myCategories}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
