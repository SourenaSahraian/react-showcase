import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import PostsBlock from './PostsBlock'

// a Carousel design 

type UserType = {
    id:String;
    name:String
}

type UserResp = {
    data: [UserType];
}

/**
 *  Need a block each containing a few items - flex
 * a layout of blocks - CSS grid 
 * 
 * @returns 
 */
function Movies() {

    const getUsers = async () => {
      const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
       let res = resp.data;
       console.log(' hey1 ', res)
       return res;
    }
    const usersQuery = useQuery<UserResp, Error>('usersList', getUsers);
    console.log('usersList', usersQuery);

    let usersList = usersQuery.data as {
        data: [UserType];
      }


    const renderBlockForUser = () => {
        return usersList.data.map( (user:UserType)  => {
           return <PostsBlock id={user.id} name={user.name} />
        })
    }


  return (
    <div>
        {renderBlockForUser()}
    </div>
  )
}

export default Movies