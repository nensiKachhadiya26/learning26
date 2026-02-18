import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export const ApiDemoTodo = () => {
  const [todos, setTodos] = useState([])
  const getTodo  = async() =>{
      const response = await axios.get("https://dummyjson.com/todos")
      console.log(response)
      console.log(response.data)
      setTodos(response.data.todos)
  }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Api Demo Todo</h1>
        <button onClick={()=>{getTodo()}}>Get Info..</button>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>TODO</th>
              <th>COMPLETED</th>
              <th>USERID</th>
            </tr>
          </thead>
          <tbody>
            {
              todos.map((todo)=>{
                return <tr>
                  <td>{todo.id}</td>
                  <td>{todo.todo}</td>
                  <td>{todo.completed ? "Done" : "Not Done"}</td>
                  <td>{todo.userId}</td>
                </tr>
              })
            }
          </tbody>
        </table>

    </div>
  )
}
