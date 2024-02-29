import React,{useState} from 'react'
import { useParams } from 'react-router-dom'

import postsData from './Dtatas'

export default function MainPost() {
    let params = useParams()
    const [posts,setPosts] = useState(postsData)


    console.log('params: ',params);

  return (
    <div>
    Main Post: {params.postId}
    <hr />
    MainPost: { posts.find(post => post.id == params.postId).title}
    </div>
  )
}
