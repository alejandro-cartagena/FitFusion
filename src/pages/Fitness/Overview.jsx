import React from 'react'
import DisplayAnatomyFront from '../../components/AnatomyDisplay/DisplayAnatomyFront'
import DisplayAnatomyBack from '../../components/AnatomyDisplay/DisplayAnatomyBack'
import ProgressiveOverloadPic from '../../images/progressive-overload-pic.jpg'
import MaxRepsCard from '../../components/MaxRepsCard'

import { NavLink } from 'react-router-dom'

import BenchPressImg from '../../images/bench-press.jpg'
import SquatImg from '../../images/squat.jpg'
import DeadliftImg from '../../images/deadlift.jpg'

export default function Overview() {

    const maxRepsCardData = [
        {imgUrl: BenchPressImg, liftType: 'Bench Press', liftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et'},
        {imgUrl: SquatImg, liftType: 'Squat', liftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et'},
        {imgUrl: DeadliftImg, liftType: 'Deadlift', liftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et'}
    ]

    const maxRepsCards = maxRepsCardData.map((data) => {
        return <MaxRepsCard imgUrl={data.imgUrl} liftType={data.liftType} liftText={data.liftText}/>
    })


    return (
        <>
            <div className='overview-section-container'>
                <h2 className="section-heading overview-section-heading">Anatomy</h2>
                <section className='section overview-page-section'>
                    <div>
                        <DisplayAnatomyFront />
                        <DisplayAnatomyBack />
                    </div>
                    <div className='section-text-container'>
                        
                        <p className='overview-section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className='overview-section-p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        {/* Will add href prop later to Btn */}
                        <NavLink to={'anatomy'} className="learn-more-link learn-more-link-plans">Learn More</NavLink>
                    </div>
                    
                </section>
            </div>

            <div className='overview-section-container'>
                <h2 className="section-heading overview-section-heading">Max Rep Calculator</h2>
                <div className='max-reps-card-container'>
                    {maxRepsCards}
                </div>
                <div className='max-reps-learn-btn'>
                <NavLink to={'calculator'} className="learn-more-link learn-more-link-plans">Learn More</NavLink>
                </div>
                
            </div>

            <div className='overview-section-container'>
                <h2 className="section-heading overview-section-heading">Progressive Overload</h2>
                <section className='section overview-page-section'>
                    <img className='overview-section-img' src={ProgressiveOverloadPic} alt="" srcset="" />
                    <div className='section-text-container'>
                        
                        <p className='overview-section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className='overview-section-p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        {/* Will add href prop later to Btn */}
                        <NavLink to={'progression'} className="learn-more-link learn-more-link-plans">Learn More</NavLink>
                    </div>
                    
                </section>
            </div>
            
        </>
        
    )
}