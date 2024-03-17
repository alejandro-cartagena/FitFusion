import React from 'react'
import Table from 'react-bootstrap/Table';
import { CiMedicalClipboard } from "react-icons/ci";

export default function BmiCalculator() {

    const[unit, setUnit] = React.useState('us')

    function handleUnitClick() {
        
    }

    const activeStyles = {
        backgroundColor: '#000000',
        color: '#E73539'
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <>
            <div className='one-rep-max-card'>
                <div className='one-rep-max-header'>
                    <h4 className='one-rep-max-header-title'>Bmi</h4>
                    <CiMedicalClipboard className='bmi-header-icon'/>
                </div>

                <form className='one-rep-max-card-form' onSubmit={handleSubmit}>

                    <div className='bmi-units'>
                        <button className='bmi-unit-btn bmi-unit-us'>US Units</button>
                        <button className='bmi-unit-btn bmi-unit-metric'>Metric Units</button>
                    </div>

                    {/* HEIGHT */}
                    <p className='bmi-height-text'>Height</p>
                    <div className='bmi-height-container'>
                        <div className='input-wrap bmi-input-feet'>
                            {/* <label className='input-label' htmlFor="weight">Age</label> */}
                            <div className='input-container'>
                                <input  type="number" name="weight" id="weight"/>
                                <p className='input-text'>feet</p>
                            </div>
                        </div>

                        <div className='input-wrap'>
                            {/* <label className='input-label' htmlFor="weight">Age</label> */}
                            <div className='input-container'>
                                <input  type="number" name="weight" id="weight"/>
                                <p className='input-text'>inches</p>
                            </div>
                        </div>
                    </div>
                    

                    {/* Weight */}
                    <div className='input-wrap bmi-input-text'>
                        <label className='input-label' htmlFor="weight">Weight</label>
                        <div className='input-container'>
                            <input  type="number" name="weight" id="weight"/>
                            <p className='input-text'>pounds</p>
                        </div>
                    </div>

                    {/* BTN */}
                    <div className='one-rep-max-btn-container'>
                        <button className='btn one-rep-max-btn'>Calculate</button>
                    </div>
                </form>

            </div>
        
        </>
    )
}