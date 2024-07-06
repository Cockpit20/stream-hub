import React from 'react'
import './SearchPage.css'
import { TuneOutlined } from '@mui/icons-material'

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__filter'>
                <TuneOutlined />
                <h2>FILTER</h2>
            </div>
            <hr />
        </div>
    )
}

export default SearchPage
