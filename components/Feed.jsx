"use client";
import PromptCard from "./PromptCard";
import React, { useEffect, useState } from "react";

const PromptCardList = ({data ,handleTagClick})=>{
  return (
    <div className="mt-6 prompt_layout">
      {
        data.map((post)=>(
           <PromptCard key={post.id} post={post} handleTagClick={handleTagClick} />
        ))
      }
    </div>
  )
}

const Feed = () => {
   const [searchText,setSearchText] = useState('')
   const [posts,setPosts] = useState([])

   const handleSearchChange = (e)=>{

   }

   useEffect(()=>{
      const fetchPosts = async() =>{
        const res = await fetch('/api/prompt')
        const data = await res.json()

        setPosts(data)
      }
      fetchPosts()
   },[])


  return (
    <section className = "feed">
      <form className = "relative w-full flex-center">
        <input type = "text" placeholder = "search for user name" value = {searchText} onChange ={handleSearchChange} required className="search_input peer" />
      </form>
      
      <PromptCardList data ={posts} handleTagClick ={()=>{}} />
    </section>
  )
}

export default Feed