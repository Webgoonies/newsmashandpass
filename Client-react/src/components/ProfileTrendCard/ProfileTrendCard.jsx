import React from 'react'
import './ProfileTrendCard.css'
import { TrendData } from '../../Data/TrendData'

const ProfileTrendCard = (props) => {
    
    return (
      <div className='ProfileTrendCard'>

          <div>
              <h3>Interesting Trends</h3>

              {TrendData &&TrendData.map((trend, id) => {
              return( 
                      <div key={id} className='trend'>
                          <span>#{trend?.name}</span>
                          <span>{trend?.shares}k shares</span>
                      </div>
                  )
              })}
          </div>
      </div>
    )
}

export default ProfileTrendCard