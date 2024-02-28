import React from 'react'
import './Posts.css'
import { PostsData } from '../../Data/PostData'
import Post from '../Post'

const Posts = () => {
    return (
        
        <div className='Posts'>
            {PostsData && PostsData.map((post, id) => {
                return(
                    <>
                      <Post data={post} id={id} />
                    </>
                )
            })}            
        </div>
    )
}

export default Posts