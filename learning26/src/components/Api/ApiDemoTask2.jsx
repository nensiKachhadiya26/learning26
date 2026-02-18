import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export const ApiDemoTask2 = () => {
    const [comments, setComments] = useState([])

    const getComments = async() =>{
        const response = await axios.get("https://dummyjson.com/comments")
        console.log(response)
        console.log(response.data)
        console.log(response.data.comments)
        setComments(response.data.comments)
        
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Api Demo Task 2</h1>
        <button onClick={()=>{getComments()}}>Show Comments</button>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>BODY</th>
                    <th>POSTID</th>
                    <th>LIKES</th>
                    <th>USERNAME</th>
                    <th>FULLNAME</th>
                </tr>
            </thead>
            <tbody>
                {
                    comments.map((c)=>{
                        return <tr>
                            <td>{c.id}</td>
                            <td>{c.body}</td>
                            <td>{c.postId}</td>
                            <td>{c.likes}</td>
                            <td>{c.user.username}</td>
                            <td>{c.user.fullName}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
