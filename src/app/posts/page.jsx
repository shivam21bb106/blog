'use client'
import { useContext, useEffect, useState } from "react"

import axios from "axios"
import BlogList from "@/components/BlogList";
import { SearchContext } from "@/context/SearchContext";
export default function BlogDisplay(){
const [posts,setPosts]=useState([])
const { searchTerm } = useContext(SearchContext);




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

 const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.toLowerCase().includes(searchTerm.toLowerCase())
  );
    return(
        <>
 <div className="bg-gray-900 py-10 px-4 text-white">
    {searchTerm ? (
      filteredPosts.length > 0 ? (
        <BlogList post={filteredPosts} />
      ) : (
        <div className="text-center text-gray-400 text-lg mt-10">
          No results found for "<span className="font-semibold">{searchTerm}</span>"
        </div>
      )
    ) : (
      <BlogList post={posts} />
    )}
  </div>



        </>
    )
}