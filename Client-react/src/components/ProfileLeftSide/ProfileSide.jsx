import React from 'react'
import LogoSearch from '../LogoSearch'
import ProfileCard from '../ProfileCard'
import './ProfileSide.css'
import FollowersCard from '../FollowersCard'

const ProfileSide = () => {
    return (
        <div className="ProfileSide">
            

            <LogoSearch />

            <ProfileCard />

            <FollowersCard />
        </div>
    )
}

export default ProfileSide