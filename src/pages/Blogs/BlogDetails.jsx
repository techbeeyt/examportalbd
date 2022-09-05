import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { posts } from './../../utils/defaultData';

const BlogDetails = () => {
  const [post, setPost] = useState({});
  const params = useParams();
  useEffect(() => {
    setPost(posts.find((item) => item.id === params.blogId));
    console.log(post);
  },[])
  return (
    <div className='w-full flex justify-center items-start'>
      <div className='w-1/5 flex-shrink'></div>      
      <div className='w-2/5 flex-grow'>
        <div className='p-4 flex-col'>
          <div className='bg-base-200'>
            {post?.title}
          </div>
        </div>
      </div>      
      <div className='w-1/5 flex-shrink'></div>      
    </div>
  )
}

export default BlogDetails
