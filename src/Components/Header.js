import React from 'react'
import { Apps, Menu, Notifications, Search, VideoCall } from '@mui/icons-material';
import './Header.css'
import Avatar from '@mui/material/Avatar';

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <Menu />
                <img
                    className='header__logo'
                    src='https://streamhub.co.uk/wp-content/uploads/2020/05/SH-Logo.png'
                    alt='logo'

                />
            </div>

            <div className='header__input'>
                <input placeholder='Search' type='text' />
                <Search className='header__inputButton' />
            </div>

            <div className='header__icons'>
                <VideoCall className='header__icon' />
                <Apps className='header__icon' />
                <Notifications className='header__icon' />
                <Avatar
                    src='https://i.etsystatic.com/39152123/r/il/2f705e/5850191672/il_300x300.5850191672_dc1s.jpg'
                    alt='Soumyadeep Chandra'
                />
            </div>

        </div>
    )
}

export default Header
