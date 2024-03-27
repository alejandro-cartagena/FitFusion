import React from 'react'
import { NavLink } from 'react-router-dom'
import MaxRepsCard from '../../components/MaxRepsCard'

// Image Imports
import StrengthImg from '../../images/strength_pic.jpg'
import HypertrophyImg from '../../images/hypertrophy_pic.jpg'
import CalisthenicsImg from '../../images/calisthenics_pic.jpg'

export default function PlansOverview() {

    const maxRepsCardData = [
        {
            imgUrl: StrengthImg, 
            liftType: 'Strength', 
            liftText: 'A foundational compound exercise that targets the chest, shoulders, and triceps. Ready to push your limits? Use our One Rep Max Calculator to determine your maximum lifting potential and tailor your training for optimal gains.'
        },
        
        {
            imgUrl: HypertrophyImg, 
            liftType: 'Hypertrophy', 
            liftText: 'A fundamental compound movement essential for developing lower body strength and stability. Looking to optimize your training? Navigate to our One Rep Max Calculator, a powerful tool to gauge your maximum strength potential.'
        },

        {
            imgUrl: CalisthenicsImg, 
            liftType: 'Calisthenics', 
            liftText: 'A pinnacle strength-building exercise that engages multiple muscle groups, promoting overall strength and power. Seeking to measure your strength limits? Navigate to our One Rep Max Calculator, a precise tool to determine your maximum lifting capacity.'
        }
    ]

    const maxRepsCards = maxRepsCardData.map((data, index) => {
        return <MaxRepsCard key={index} imgUrl={data.imgUrl} liftType={data.liftType} liftText={data.liftText} className="fitness-plans-card"/>
    })


    return (
        <>
            <div className='overview-section-container'>
                <h2 className="section-heading overview-section-heading">Fitness Plans</h2>
                <div className='max-reps-card-container'>
                    {/* {maxRepsCards} */}
                    <NavLink className='fitness-plans-nav-link' to={'strength'}>
                        <div className='max-reps-card fitness-plans-card'>
                            <img className='max-reps-card-img' src={StrengthImg} alt="" srcset="" />
                            <div className='max-reps-card-text-container'>
                                <h4 className='max-reps-card-title fitness-plans-card-title'>Strength</h4>
                                <p className='max-reps-card-p'>This type of training often involves compound exercises, such as squats, deadlifts, 
                                and bench presses, which engage multiple muscle groups simultaneously. The goal is to progressively lift heavier 
                                weights over time, leading to improvements in overall strength and muscle mass.</p>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink className='fitness-plans-nav-link' to={'hypertrophy'}>
                        <div className='max-reps-card fitness-plans-card'>
                            <img className='max-reps-card-img' src={HypertrophyImg} alt="" srcset="" />
                            <div className='max-reps-card-text-container'>
                                <h4 className='max-reps-card-title fitness-plans-card-title'>Hypertrophy</h4>
                                <p className='max-reps-card-p'>This type of training typically involves moderate to high repetitions and focuses on
                                 isolating specific muscle groups to induce metabolic stress and muscle damage.
                                  Exercises commonly include variations of curls, presses, and leg lifts, targeting individual muscle groups.</p>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink className='fitness-plans-nav-link' to={'calisthenics'}>
                        <div className='max-reps-card fitness-plans-card'>
                            <img className='max-reps-card-img' src={CalisthenicsImg} alt="" srcset="" />
                            <div className='max-reps-card-text-container'>
                                <h4 className='max-reps-card-title fitness-plans-card-title'>Calisthenics</h4>
                                <p className='max-reps-card-p'>Centers around bodyweight exercises that utilize one's own weight for resistance 
                                training. These exercises include movements like push-ups, pull-ups, dips, and bodyweight squats, emphasizing 
                                functional strength, mobility, and control for a well-rounded and functional level of fitness.</p>
                            </div>
                        </div>
                    </NavLink>
                    
                </div>
            
                {/* <NavLink to={'strength'} className="learn-more-link learn-more-link-plans">Learn More</NavLink> */}
                
                
            </div>
        </>
    )
}