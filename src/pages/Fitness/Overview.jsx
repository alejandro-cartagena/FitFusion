import React from 'react'
import DisplayAnatomyFront from '../../components/AnatomyDisplay/DisplayAnatomyFront'
import DisplayAnatomyBack from '../../components/AnatomyDisplay/DisplayAnatomyBack'
import LearnMoreBtn from '../../components/Buttons/LearnMoreBtn'

export default function Overview() {
    return (
        <section className='section'>
            <div>
                <DisplayAnatomyFront />
                <DisplayAnatomyBack />
            </div>
            <div className='section-text-container'>
                <h2 className='section-heading'>Anatomy</h2>
                <p className='overview-section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className='overview-section-p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                {/* Will add href prop later to Btn */}
                <LearnMoreBtn />
            </div>
            
        </section>
        
    )
}