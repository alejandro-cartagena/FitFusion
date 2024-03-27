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
        {
            imgUrl: BenchPressImg, 
            liftType: 'Bench Press', 
            liftText: 'A foundational compound exercise that targets the chest, shoulders, and triceps. Ready to push your limits? Use our One Rep Max Calculator to determine your maximum lifting potential and tailor your training for optimal gains.'
        },
        
        {
            imgUrl: SquatImg, 
            liftType: 'Squat', 
            liftText: 'A fundamental compound movement essential for developing lower body strength and stability. Looking to optimize your training? Navigate to our One Rep Max Calculator, a powerful tool to gauge your maximum strength potential.'
        },

        {
            imgUrl: DeadliftImg, 
            liftType: 'Deadlift', 
            liftText: 'A pinnacle strength-building exercise that engages multiple muscle groups, promoting overall strength and power. Seeking to measure your strength limits? Navigate to our One Rep Max Calculator, a precise tool to determine your maximum lifting capacity.'
        }
    ]

    const maxRepsCards = maxRepsCardData.map((data, index) => {
        return <MaxRepsCard key={index} imgUrl={data.imgUrl} liftType={data.liftType} liftText={data.liftText}/>
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
                        
                        <p className='overview-section-p'>Explore the intricacies of the human body with our Anatomy tab. 
                        Interact with an image showcasing front and back muscle groups. Click on a specific muscle to 
                        reveal detailed information and discover effective lifts tailored to that muscle.</p>
                        <p className='overview-section-p2'>Elevate your fitness understanding, sculpt your physique 
                        effectively, and embark on a transformative wellness experience</p>
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
                        
                        <p className='overview-section-p'>Unlock the secrets of Progressive Overload, the cornerstone principle
                         for sustainable fitness gains. Discover how consistently challenging your muscles with increasing 
                         intensity leads to strength and muscle growth. Elevate your training by understanding the importance 
                         of progressively increasing resistance, volume, or intensity over time.</p>
                        <p className='overview-section-p2'>Explore our Progressive Overload guide to fine-tune your workouts, 
                        break plateaus, and achieve continuous improvement. </p>
                        {/* Will add href prop later to Btn */}
                        <NavLink to={'progression'} className="learn-more-link learn-more-link-plans">Learn More</NavLink>
                    </div>
                    
                </section>
            </div>
            
        </>
        
    )
}