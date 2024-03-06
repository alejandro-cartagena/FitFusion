import React from "react"
import Container from 'react-bootstrap/Container';
import HomeCard from "../components/HomeCard";
import PlansCard from "../components/PlansCard";
import LearnMoreBtn from "../components/Buttons/LearnMoreBtn";
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
                            <p className="home-section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            {/* Will add href prop later to Btn */}
                            <LearnMoreBtn />
                        </div>  
                        <img className="home-section-img home-section-fitness-img" src={HomeLifting} alt="" srcset="" />
                    </Container>
                </section>

                <section className="home-section-nutrition">
                    <Container className="section home-section">
                        <div className="section-text-container home-section-text-container">    
                            <h2 className="section-heading home-section-heading">Nutrition</h2>
                            <p className="home-section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            {/* Will add href prop later to Btn */}
                            <LearnMoreBtn />
                        </div>  
                        <img className="home-section-img home-section-nutrition-img" src={NutritionPic} alt="" srcset="" />
                    </Container>
                </section>

                <section>
                    <Container className="section home-section home-section-plans">
                        <h2 className="section-heading home-section-heading home-section-plans-heading">Plans</h2>
                        <div className="plans-cards-container">
                            <PlansCard imgUrl={FlexIconRed} title={'Fitness Plans'} text={loremText}/>
                            <PlansCard imgUrl={NutritionIconRed} title={'Nutrition Plans'} text={loremText}/>
                        </div>
                    </Container>
                </section>
            </main>
           
            
            

        </>
        
    )
}