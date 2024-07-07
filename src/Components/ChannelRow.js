import { CheckCircleOutlineOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import './ChannelRow.css'

function ChannelRow({ image, channel, verified, subs, noOfVideos, description }) {
    return (
        <div className='channelRow'>
            <Avatar
                className='channelRow__logo'
                src={image}
                alt={channel}
            />
            <div className='channelRow__text'>
                {console.log(verified)}
                <h3>
                    <div>
                        {channel}
                    </div>
                    <div className='channelRow__verification'>
                        {verified && <CheckCircleOutlineOutlined />}
                    </div>
                </h3>

                <p>{subs} • {noOfVideos}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
