import React from 'react'
import './Home.css'
import ProfileLeftSide from '../../components/ProfileLeftSide'
import PostSide from '../../components/PostSide'
import ProfileRightSide from '../../components/ProfileRightSide'

const Home = () => {
    return (
        <div className="Home">
            <ProfileLeftSide />
            <PostSide />
            <ProfileRightSide />
        </div>
    )
}

export default Home