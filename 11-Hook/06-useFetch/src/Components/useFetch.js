import React from "react";
import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [posts, setPosts] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, seterror] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
      .then(res => res.json())
      .then(datas => {
        setPosts(datas)
        setIsPending(false)
        seterror(null)
      })
      .catch(err => console.log(err))
    }, 1000);
  },[]);

  return {posts , isPending , error}
}
