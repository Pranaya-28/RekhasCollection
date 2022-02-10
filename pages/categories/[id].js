import React from 'react'
// import {Places} from '../data'
import { useRouter } from 'next/router'
import { route } from 'next/dist/server/router';
const Place = () => {
    const router = useRouter();
    console.log(router)
    
  return (
    <div>{router.query.id}</div>
  )
}

export default Place