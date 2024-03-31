import React from "react"
import Container from 'react-bootstrap/Container';
import HomeCard from "../components/HomeCard";
import PlansCard from "../components/PlansCard";
import { NavLink } from 'react-router-dom'
// Images Imports
import HomeLifting from '../images/home_lifting.jpg'
import NutritionPic from '../images/nutrition_pic.jpg'
import FlexIconRed from '../images/flex_icon_red.png'
import NutritionIconRed from '../images/nutrition_icon_red.png'

export default function Home() {

    const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"

    return (
        <>
            <div className="home-hero">
                <Container>
                    <h1 className="home-title">Transform your body. Transform your <span style={{color: '#E73539'}}>life</span></h1>
                </Container>
            </div>
            <Container>
                <HomeCard />
            </Container>
            
            <main>
                <section className="home-section-fitness">
                    <Container className="section home-section">
                        <div className="section-text-container home-section-text-container">    
                            <h2 className="section-heading home-section-heading">Fitness</h2>
                            <p className="home-section-text">Unlock your fitness potential through three distinct sub-tabs. 
                            Dive into Anatomy for muscle-specific lifts, calculate your one-rep max in Calculator,
                             and master progressive overload in Progression. Everything you need for a well-rounded 
                             fitness experience, all in one place.</p>
                            {/* Will add href prop later to Btn */}
                            <NavLink to={'fitness'} className="learn-more-link">Learn More</NavLink>
                            {/* <a className="learn-more-link" href="/fitness">Learn More</a> */}
                        </div>  
                        <img className="home-section-img home-section-fitness-img" src={HomeLifting} alt="" srcset="" />
                    </Container>
                </section>

                <section className="home-section-nutrition">
                    <Container className="section home-section">
                        <div className="section-text-container home-section-text-container">    
                            <h2 className="section-heading home-section-heading">Nutrition</h2>
                            <p className="home-section-text">Dive into a world of health and vitality with our Nutrition page. Whether 
                            you're curious about your BMI or striving for balanced macronutrients, we've got you covered. Calculate your 
                            BMI to track your fitness journey or fine-tune your diet with our Macro Nutrient Calculator.</p>
                            {/* Will add href prop later to Btn */}
                            <NavLink to={'nutrition'} className="learn-more-link">Learn More</NavLink>
                        </div>  
                        <img className="home-section-img home-section-nutrition-img" src={NutritionPic} alt="" srcset="" />
                    </Container>
                </section>

                <section>
                    <Container className="section home-section home-section-plans">
                        <h2 className="section-heading home-section-heading home-section-plans-heading">Plans</h2>
                        <div className="plans-cards-container">
                            <PlansCard imgUrl={FlexIconRed} title={'Fitness Plans'} text={"Whether you're aiming to build muscle, increase power, or enhance your strength, our plans offer tailored workouts designed to help you achieve your fitness goals effectively."}/>
                        </div>
                        <NavLink to={'plans'} className="learn-more-link learn-more-link-plans">Learn More</NavLink>
                    </Container>
                </section>
            </main>
           
            
            

        </>
        
    )
}