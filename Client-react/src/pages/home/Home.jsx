import React from 'react'
import './Home.css'
import ProfileSide from '../../components/ProfileSide'

const Home = () => {
    return (
        <div className="Home">
            <ProfileSide />
            <div className="postSide">Posts</div>
            <div className="RightSide">RightSide</div>
        </div>
    )
}

export default Home