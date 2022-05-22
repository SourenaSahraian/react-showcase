import React from 'react'


type UsersProps = {
    name: String,
    email:String,
    company : {
        comapnyName:String,
        catchPhrase:String
    }

} 

export default function UserCard({name,email, company:{comapnyName, catchPhrase} }  :UsersProps) {
  return (
      <>
    <div>{name}</div>
    <div>{email}</div>
    <div>{comapnyName}</div>
    <div>{catchPhrase.substring(1,10)}</div>
    </>
  )
}
