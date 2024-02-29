import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import postsData from './User/Dtatas'


export default function Posts() {
    const [posts,setPosts] = useState(postsData)
  return (
    <div>
        {posts.map(post => (
            <>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
                <hr />
            </>
        ))}
    </div>
  )
}
