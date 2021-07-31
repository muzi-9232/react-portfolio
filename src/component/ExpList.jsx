import React from 'react';

const ExpList = (props) => {
    return (
        <>
            <div className="timeline">
                <div className="icon"></div>
                <div className="date-content">
                    <div className="date-outer">
                        <span className="date">
                            <span className="month">{props.expwithmonth}</span>
                            <span className="year">{props.expwithyears}</span>
                        </span>
                    </div>
                </div>
                <div className="timeline-content">
                    <h5 className="title">{props.company}</h5>
                    <p className="description">
                    {props.description}
                    </p>
                </div>
            </div>

        </>


    )
}

export default ExpList;