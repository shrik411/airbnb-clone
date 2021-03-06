import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@material-ui/core'
import { SearchByDate } from '../SearchByDate' 
import { useHistory } from 'react-router-dom'

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner__search">
                { showSearch && <SearchByDate />}
                <Button onClick={() => setShowSearch(!showSearch)} className="banner__searchButton" variend='outlined'>
                    { !showSearch ? 'Seacth Dates' : 'Hide' }
                </Button>
            </div>
            <div className="banner__info">
                <h1>Get out and streatch your imagination</h1>
                <h5>
                    Plan a diffrent kind of gateway to uncover the hidden gems near you.
                </h5>
                <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export { Banner } 
