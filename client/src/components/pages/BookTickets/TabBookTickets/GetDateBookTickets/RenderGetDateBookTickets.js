import React, { useEffect, useState } from 'react'
import moment from 'moment';

const RenderGetDateBookTickets = () => {

    const [dateList, setDateList] = useState([]);
    const [activeDate, setActiveDate] = useState(moment().format('YYYY-MM-DD'));

    useEffect(() => {
        const dates = [];
        for (let i = 0; i < 7; i++) {
            dates.push(moment().add(i, 'days').format('YYYY-MM-DD'));
        }
        setDateList(dates);
    }, []);

    const handleDateClick = (date) => {
        setActiveDate(date);
    };

    return (
        <div>
            {dateList.map((date, index) => (
                <button
                    style={{color: 'black'}}
                    key={index}
                    onClick={() => handleDateClick(date)}
                    className={date === activeDate ? 'active' : ''}
                >
                    {moment(date).format('dddd')}<br/>
                    {moment(date).format('D/MMM')}
                </button>
            ))}
            <div className="tab-content">
                {moment(activeDate).format('dddd, MMMM D')}
            </div>
        </div>
    )
}

export default RenderGetDateBookTickets