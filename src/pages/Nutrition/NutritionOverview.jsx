import React from 'react'
import { NavLink } from 'react-router-dom'
import BmiImage from '../../images/bmi-pic.jpg'
import MacrosImage from '../../images/macros-pic.jpg'

export default function NutritionOverview() {
    return (
        <>
            <div className='overview-section-container'>
                <h2 className="section-heading overview-section-heading">Body Mass Index (BMI)</h2>
                <section className='section overview-page-section'>
                    
                    <div className='section-text-container'>
                        
                        <p className='overview-section-p'>Learn about your body mass index (BMI), a simple yet valuable tool 
                        to assess your body composition and overall health. BMI is calculated based on your height and weight,
                         providing an estimation of whether you are underweight, normal weight, overweight, or obese.</p>
                        <p className='overview-section-p2'>Explore our BMI calculator tab to input your measurements and 
                        discover your BMI category.</p>
                        <NavLink to={'bmi'} className="learn-more-link learn-more-link-plans">Learn More</NavLink>
                    </div>
                    <img className='overview-section-img' src={ BmiImage } alt="" srcset="" />
                    
                </section>
            </div>

            <div className='overview-section-container'>
                <h2 className="section-heading overview-section-heading">Macros</h2>
                <section className='section overview-page-section'>
                    
                    <div className='section-text-container'>
                        
                        <p className='overview-section-p'>Macronutrients, including calories, carbohydrates, proteins, and fats, play essential 
                        roles in fueling your body and supporting various bodily functions. By calculating your macronutrient requirements 
                        based on factors like age, weight, activity level, and goals, you can customize your nutrition plan to meet
                         your individual needs.</p>
                        <p className='overview-section-p2'>Explore our macro calculator tab to delve deeper into your nutritional needs 
                        and optimize your diet for your specific goals.</p>
                        {/* Will add href prop later to Btn */}
                        <NavLink to={'macros'} className="learn-more-link learn-more-link-plans">Learn More</NavLink>
                    </div>
                    <img className='overview-section-img' src={ MacrosImage } alt="" srcset="" />
                    
                </section>
            </div>
        </>
    )
}