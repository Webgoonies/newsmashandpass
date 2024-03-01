import React from 'react'
import './HomePage.css'
import ProfileLeftSide from '../../components/ProfileLeftSide'
import PostSide from '../../components/PostSide'
import ProfileRightSide from '../../components/ProfileRightSide'

const HomePage = () => {
    return (
        <div className="HomePage">
            <ProfileLeftSide />

            <PostSide />
            
            <ProfileRightSide />
        </div>
    )
}

export default HomePage