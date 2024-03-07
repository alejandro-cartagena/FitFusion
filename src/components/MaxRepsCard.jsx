import React from 'react'

export default function MaxRepsCard({ imgUrl, liftType, liftText}) {
    return (
        <div className='max-reps-card'>
            <img className='max-reps-card-img' src={imgUrl} alt="" srcset="" />
            <div className='max-reps-card-text-container'>
                <h4 className='max-reps-card-title'>{liftType}</h4>
                <p className='max-reps-card-p'>{liftText}</p>
            </div>
        </div>
    )
}