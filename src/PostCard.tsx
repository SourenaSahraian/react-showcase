import React from 'react'
type PostCardType = {
    id:String;
    title: String
}

function PostCard({id, title} : PostCardType  ) {
  console.log(' XXX' ,title )
  return (
  <div className='h-40 w-40 bg-yellow-700 rounded-lg text-justify hover:scale-125 text-white m-4 transition  duration-1000 ease-in-out '>
    <h2> {id} </h2>
    <p className='items-center'>{title.substring(1,25) + '...'}</p>
    </div>
  )
}

export default PostCard;