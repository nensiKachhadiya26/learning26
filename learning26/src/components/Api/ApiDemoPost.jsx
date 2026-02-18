import axios from 'axios'
import React from 'react'

export const ApiDemoPost = () => {
    const [posts, setPosts] = useState([])
    const getPost =async() =>{
        const response = await axios.get("https://dummyjson.com/posts")
        console.log(response)
        console.log(response.data)
        console.log(response.status)
        setPosts(response.data.posts)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Api Demo Post</h1>
        <button onClick={()=>{getPost()}}>Show Post</button>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>VIEWS</th>
                    <th>TAGS</th>
                    <th>REACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    posts.map((post)=>{
                        return <tr>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.views}</td>
                            <td>{post.tags}</td>
                            <td>{post.reaction.likes}</td>
                        </tr>
                    })
                }
            </tbody>
            
        </table>
    </div>
  )
}
