'use client'
import { useEffect, useState } from "react"

import axios from "axios"
import BlogList from "@/components/BlogList";
export default function BlogDisplay(){

const [posts,setPosts]=useState([''])



  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/posts');
        console.log(res)
        setPosts(res.data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);
    return(
        <>
        <div className=" bg-gray-900 py-10 px-4 text-white ">

       <BlogList post={posts}/>

</div>


        </>
    )
}