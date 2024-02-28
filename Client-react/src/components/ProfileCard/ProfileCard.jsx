import React from 'react'
import Cover from '../../img/cover.jpg'
import ProfileImg from '../../img/profileImg.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
    return (
      <div className='ProfileCard'>
            
        <div className="ProfileImages">
            <img src={Cover} alt='' />
            <img src={ProfileImg} alt='' />
        </div>
    

        <div className="ProfileName">
            <span>
                Zendaya MJ
            </span>
            <span>
                Senior UI/UX Designer
            </span>
        </div>


        <div className="followStatus">
            <hr />

            <div>
                <div className="follow">
                    <span>6,890</span>
                    <span>Following</span>
                </div>
                <div className="vertln"></div>
                <div className="follow">
                    <span>1</span>
                    <span>Followers</span>
                </div>
            </div>
            <hr />
        </div>

        <span>
            View Profile
        </span>

      </div>
    )
}

export default ProfileCard  