import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import './Api.css'

const Api = () => {

    const [posts,setPosts] = useState([])

    useEffect(()=>{

        let loadPosts = async () =>{
            let comments = await axios.get('https://jsonplaceholder.typicode.com/posts')
            // console.log(comments)
            setPosts(comments.data)
        }
        loadPosts()

        return()=> setPosts([])
    },[])

// console.log(posts)


  return (
 
      <div className="container">

        {
            posts && posts.length > 0 ? posts.map((ele,idx) =>(
                <div className="box" key={idx}>
                <h2>{ele.title}</h2>
                <p>{ele.body}</p>
            </div>
            ))
            :
            (
                <p>no records found</p>
            )
        }
            
      </div>
 
  )
}

export default Api
