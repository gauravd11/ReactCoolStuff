import React, { createContext, useState, useEffect } from 'react'
import {v1 as uuid} from 'uuid'

export const CardListContext = createContext()

const CardListContextProvider = props => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || []

  const [tasks, setTasks] = useState(initialState)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const [editItem, setEditItem] = useState(null)

  // Add tasks
  const addCard = (title,validTrough,cardHolderName,cvv) => {
    setTasks([...tasks, { title, id: uuid(), validTrough,cardHolderName,cvv }])
  }

  // Remove tasks
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Clear tasks
  const clearList = () => {
    setTasks([])
  }

  // Find task
  const findItem = id => { console.log("in findItem");
    const item = tasks.find(task => task.id === id)

    setEditItem(item)
  }

  // Edit task
  const editTask = (title, id,validTrough,cardHolderName,cvv) => {
    const newTasks = tasks.map(task => (task.id === id ? { title, id, validTrough,cardHolderName,cvv } : task))

    console.log(newTasks)

    setTasks(newTasks)
    setEditItem(null)
  }

  return (
    <CardListContext.Provider
      value={{
        tasks,
        addCard,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem
      }}
    >
      {props.children}
    </CardListContext.Provider>
  )
}

export default CardListContextProvider
