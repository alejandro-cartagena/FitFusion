import React from 'react'

export default function PlansCard({ imgUrl, title, text}) {
    return (
        <div className='plans-card'>
            <div className='plans-card-circle'>
                <img className='plans-card-icon' src={imgUrl} alt="" srcset="" />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <a className="learn-more-link" href="#">Learn More</a>
        </div>
    )
}