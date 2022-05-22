import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import PostCard from '../PostCard';


type Post = {
    id: String,
    title:String,
    body?:String
}

function PostsBlock({id ,name:userName} : {id:String , name:String}) {
  //posts for user
  const getUsersPosts = async () => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}/posts`;
    const {data} = await axios.get(url);
    console.log(' posts ....', data)
    return data;
}

    //first generic param is the result data
    const {data,status,error} = useQuery<Post[], Error>(
        ["posts", { id}],
        getUsersPosts,
    
      );
    

    if (status === "loading") {
        return <div>laoding...</div>;
    }

    if (status === "error") {
        return <div>{error.message}</div>;
    }

    const renderBlock = () => {
      
      return data && data.map && data.map( post => {
        return < PostCard id={post.id} title ={post.title} />
      }) 
     }

  return (
    <div  className='flex-col' >
       <div className='text-white'> {`${userName}'s posts` }</div>
    <div className='flex flex-nowrap  items-stretch justify-evenly bg-neutral-900 
     hover:overflow-x-scroll border-b-4 m-12 bg-gradient-to-t from-gray-600 '>
      {renderBlock()};
    </div>
  </div>
  
  )
}

export default PostsBlock;