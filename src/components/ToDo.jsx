import React, { useState } from 'react'

export default function AddATask() {

  const [taskList, addTask] = useState([])
  const [newTask, addNewTask] = useState('')
  const [doneIndexes, setDoneIndex] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask([
      ...taskList,
      newTask
    ])
  }

  const setDone = (index) => {
    setDoneIndex([
      ...doneIndexes,
      index
    ])
  }

  const deleteTask = (index) => {
    const newTaskList = [ ...taskList.slice(0,index), ...taskList.slice(index + 1) ]
    addTask(newTaskList)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newtask">Define your task</label>&nbsp;
        <input type="text" name="newtask" id="newtask" onChange={(e) => addNewTask(e.target.value)} />&nbsp;
        <button>Add A task</button>
      </form>

      <ul>
        {
          taskList.map((task, index) => (
              !doneIndexes.includes(index) ? (
                  <li key={index}>
                    {task}
                    <button onClick={() => deleteTask(index)}>delete</button>
                    <button onClick={() => setDone(index)}>Set to Done</button>
                  </li>
              ) : (
                <li key={index} className='done'>
                  {task}
                  <button onClick={() => deleteTask(index)}>delete</button>
                </li>
              )
            )
          )
        }
      </ul>

    </>
  )
}
