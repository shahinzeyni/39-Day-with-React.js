import React,{useState} from 'react'
import { useParams,Navigate } from 'react-router-dom'

import postsData from './Dtatas'

export default function MainPost() {
    let params = useParams()
    const [posts,setPosts] = useState(postsData)


    console.log('params: ',params);

    let  hasPost = posts.some(post => post.id == params.postId)
    console.log(hasPost); 

  return (
    <div> 

    {!hasPost ?(
        <Navigate to='/' />
      ):
      (
        <>
            Main Post: {params.postId}
            <hr />
            MainPost: { posts.find(post => post.id == params.postId).title }
        </>
      )
    }

    </div>
  )
}
