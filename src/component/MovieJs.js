import React, { useEffect } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import PostsBlock from './PostsBlock'
function MovieJs() {            
      const getUsers =  async ()=>{
        let {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        return data;
      }

     let {data, status} = useQuery('getUsers', getUsers )
     console.log(' no data', data);
  
      const renderBlockForUser = () => {
        return data && data.map( (user)  => {
            return <PostsBlock id={user.id} name={user.name} />
         })
      }
  
  
    return (
      <div className='bg-yellow-50'>
          {renderBlockForUser()}
      </div>)
};

export default MovieJs