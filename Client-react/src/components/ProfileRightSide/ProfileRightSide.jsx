import React from 'react'
import './ProfileRightSide.css'

import HomeIcon from '../../img/home.png'
import NotiIcon from '../../img/noti.png'
import CommentIcon from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import ProfileTrendCard from '../ProfileTrendCard'

const ProfileRightSide = () => {

    // const handleShareButton = () => {
    //     console.log('handleShareButton clicked')
    // }

    
    return (
        <div className="ProfileRightSide">

            <div className="navIcons">
                
                <img src={HomeIcon} alt="" />

                <UilSetting />

                <img src={NotiIcon} alt="" />

                <img src={CommentIcon} alt="" />

            </div>

            <ProfileTrendCard />


            <button className='button r-button'>
                Share
            </button>

        </div>
    )
}

export default ProfileRightSide