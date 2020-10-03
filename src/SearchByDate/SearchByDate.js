import React, { useState } from 'react'
import './SearchByDate.css';
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from 'react-router-dom';


import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';

function SearchByDate() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    function handleSelect(rages) {
        setStartDate(rages.selection.startDate);
        setEndDate(rages.selection.endDate);
    }

    return (
        <div className="searchbydate">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>
                Number of guests <PeopleIcon />
            </h2>
            <input min={0} defaultValue={2} type="number" />
            <Button onClick={() => history.push('/search')}>Search Airbnb</Button>
        </div>
    )
}

export  { SearchByDate }