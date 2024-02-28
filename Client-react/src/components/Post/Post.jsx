import React from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'

const Post = ({data}) => {
    return (
        <div className="Post">
           <img className='postMainImg' src={data?.img} alt='' />

           <div className="postActions">
                <img src={data.liked?Heart: NotLike} alt='' />
                <img src={Comment} alt='' />
                <img src={Share} alt='' />
                
           </div>

           <span>
            {data.likes} likes
           </span>

           <span className='detail'>
                <span><strong>{data.name}</strong></span>
                <span>{data.desc}</span> 
           </span>

        </div>
    )
}

export default Post