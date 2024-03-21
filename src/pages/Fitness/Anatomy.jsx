import React, { useState } from 'react';
import AnatomyBack from '../../components/AnatomyBack';
import AnatomyFront from '../../components/AnatomyFront';
import { FaArrowRotateRight } from "react-icons/fa6";


export default function Anatomy() {
    const [isFrontView, setIsFrontView] = useState(true);

    const rotate = () => {
        setIsFrontView(!isFrontView);
    };

    return (
        <>
            <div className='anatomy-page-container'>
                <div className='anatomy-section-description-container'>
                    <h2 className='section-heading'>Anatomy</h2>
                    <p>Discover targeted exercises by hovering over various muscle groups and clicking on the 
                        desired muscle to reveal a variety of exercises tailored specifically for that muscle group. </p>
                </div>
                <div className={`anatomy-container ${isFrontView ? 'front' : 'back'}`}>
                    <div className="anatomy-content">
                        {isFrontView ? <AnatomyFront /> : <AnatomyBack />}
                    </div>
                    <button className="btn anatomy-rotate-btn" onClick={rotate}>Rotate <FaArrowRotateRight className='rotate-icon'/></button>
                </div>
            </div>
        </>
    );
}