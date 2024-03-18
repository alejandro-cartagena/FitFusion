import React, { useState } from 'react'
import { CiMedicalClipboard } from "react-icons/ci";
import GaugeChart from 'react-gauge-chart'

export default function BmiCalculator() {

    const activeStyles = {
        backgroundColor: '#000000',
        color: '#E73539',
        pointerEvents: 'none'
    }

    const[unit, setUnit] = useState('us')
    const[formDataUs, setFormDataUs] = useState({
        feet: '',
        inches: '',
        weight: ''
    })
    const[formDataMetric, setFormDataMetric] = useState({
        height: '',
        weight: ''
    })
    const[bmiUs, setBmiUs] = useState(null)
    const[bmiMetric, setBmiMetric] = useState(null)
    const[bmiStatus, setBmiStatus] = useState(null)
    const[isFormSubmitted, setIsFormSubmitted] = useState(false)
    const[warningMessage, setWarningMessage] = React.useState(false)    // For form validation

    // Sets the unit to either US or Metric
    function handleUnitClick(event) {
        event.preventDefault()
        if (event.target.value === 'us') {
            setUnit('us')
        }
        else if (event.target.value === 'metric') {
            setUnit('metric')
        }
    }

    function handleUsChange(event) {
        setFormDataUs(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
            
        })
    }

    function handleMetricChange(event) {
        setFormDataMetric(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function feetToInches(feet) {
        return feet * 12
    }

    function calculateBmiUs(feet, inches, weight) {
        const feetInInches = feetToInches(feet)
        const totalHeightInInches = feetInInches + inches
        const bmi = 703 * (weight / Math.pow(totalHeightInInches, 2))
        return bmi.toFixed(1)
    }

    function calculateBmiMetric(height, weight) {
        const bmi = 10000 * (weight / Math.pow(height, 2))
        return bmi.toFixed(1)
    }

    function calculateBmiStatus(bmi) {
        if (bmi < 18.5) {
            setBmiStatus('Underweight')
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            setBmiStatus('Normal')
        }
        else if (bmi >= 25.0 && bmi <= 29.9) {
            setBmiStatus('Overweight')
        }
        else {
            setBmiStatus('Fat as FUCK')
        }
    }

    function handleUsSubmit(event) {
        event.preventDefault()
        const feet = Number(formDataUs.feet)
        const inches = Number(formDataUs.inches)
        const weight = Number(formDataUs.weight)

        if (feet != '' && inches != '' && weight != '') {
            setWarningMessage(false)
            const bmi = calculateBmiUs(feet, inches, weight)
            setBmiUs(bmi)
            calculateBmiStatus(bmi)
            setIsFormSubmitted(true)
        }
        else {
            setWarningMessage(true)
        }

        
    }

    function handleMetricSubmit(event) {
        event.preventDefault()
        const height = Number(formDataMetric.height)
        const weight = Number(formDataMetric.weight)

        if (height != '' && weight != '') {
            setWarningMessage(false)
            const bmi = calculateBmiMetric(height, weight)
            setBmiMetric(bmi)
            calculateBmiStatus(bmi)
            setIsFormSubmitted(true)
        }
        else {
            setWarningMessage(true)
        }

        
    }

    function clearFormDataUs() {
        setBmiUs(null)
        setFormDataUs({
            feet: '',
            inches: '',
            weight: ''
        });

        
    }

    function clearFormDataMetric() {
        setBmiMetric(null)
        setFormDataMetric({
            height: '',
            weight: ''
        });
    }

    function handleEditClick() {
        setIsFormSubmitted(false)
    }

    function handleResetClickUs() {
        clearFormDataUs()
        setIsFormSubmitted(false)
    }

    function handleResetClickMetric() {
        clearFormDataMetric()
        setIsFormSubmitted(false)
    }

    // GAUGE CHART

    function calculateGaugePercentage(bmi) {
        const maxValue = 40
        const percent = bmi / maxValue
        return percent.toFixed(1)
    }

    const formatTextValue = () => `${unit === 'us' ? bmiUs : bmiMetric}`;


    return (
        <>
            <div className='one-rep-max-card bmi-calculator-card'>
                <div className='one-rep-max-header'>
                    <h4 className='one-rep-max-header-title'>Bmi</h4>
                    <CiMedicalClipboard className='bmi-header-icon'/>
                </div>

                {!isFormSubmitted ? (
                    unit === 'us' ? (
                        <form className='one-rep-max-card-form' onSubmit={handleUsSubmit}>
    
                            <div className='bmi-units'>
                                <button value={'us'} onClick={handleUnitClick} style={unit === 'us' ? activeStyles : null} className='bmi-unit-btn bmi-unit-us'>US Units</button>
                                <button value={'metric'} onClick={handleUnitClick} style={unit === 'metric' ? activeStyles : null} className='bmi-unit-btn bmi-unit-metric'>Metric Units</button>
                            </div>
    
                            {/* HEIGHT */}
                            <p className='bmi-height-text'>Height</p>
                            <div className='bmi-height-container'>
                                <div className='input-wrap bmi-input-feet'>
                                    {/* <label className='input-label' htmlFor="weight">Age</label> */}
                                    <div className='input-container'>
                                        <input  min={1} max={7} onChange={handleUsChange} type="number" name="feet" id="feet" value={formDataUs.feet}/>
                                        <p className='input-text'>feet</p>
                                    </div>
                                </div>
    
                                <div className='input-wrap bmi-input-inches'>
                                    {/* <label className='input-label' htmlFor="weight">Age</label> */}
                                    <div className='input-container'>
                                        <input  min={0} max={11} onChange={handleUsChange} type="number" name="inches" id="inches" value={formDataUs.inches}/>
                                        <p className='input-text'>inches</p>
                                    </div>
                                </div>
                            </div>
                            
    
                            {/* Weight */}
                            <div className='input-wrap bmi-input-text'>
                                <label className='input-label' htmlFor="weight">Weight</label>
                                <div className='input-container'>
                                    <input min={0} max={500} onChange={handleUsChange} type="number" name="weight" id="weight" value={formDataUs.weight}/>
                                    <p className='input-text'>pounds</p>
                                </div>
                            </div>

                            {warningMessage ? <p className='warning-message'>Please fill in all input fields</p> : ''}
    
                            {/* BTN */}
                            <div className='one-rep-max-btn-container'>
                                <button type='submit' className='btn one-rep-max-btn'>Calculate</button>
                            </div>
                        </form>
                    ) : (
                        <form className='one-rep-max-card-form' onSubmit={handleMetricSubmit}>
    
                            <div className='bmi-units'>
                                <button value={'us'} onClick={handleUnitClick} style={unit === 'us' ? activeStyles : null} className='bmi-unit-btn bmi-unit-us'>US Units</button>
                                <button value={'metric'} onClick={handleUnitClick} style={unit === 'metric' ? activeStyles : null} className='bmi-unit-btn bmi-unit-metric'>Metric Units</button>
                            </div>
    
                            {/* HEIGHT */}
                            {/* <p className='bmi-height-text'>Height</p> */}
                            <div className='input-wrap bmi-input-cm'>
                                {/* <label className='input-label' htmlFor="weight">Age</label> */}
                                <label className='input-label' htmlFor="height">Height</label>
                                <div className='input-container'>
                                    <input min={1} max={275} onChange={handleMetricChange} type="number" name="height" id="height" value={formDataMetric.height}/>
                                    <p className='input-text'>cm</p>
                                </div>
                            </div>
                            
    
                            {/* Weight */}
                            <div className='input-wrap bmi-input-text'>
                                <label className='input-label' htmlFor="weight">Weight</label>
                                <div className='input-container'>
                                    <input min={0} max={230} onChange={handleMetricChange} type="number" name="weight" id="weight" value={formDataMetric.weight}/>
                                    <p className='input-text'>kilograms</p>
                                </div>
                            </div>

                            {warningMessage ? <p className='warning-message'>Please fill in all input fields</p> : ''}
    
                            {/* BTN */}
                            <div className='one-rep-max-btn-container'>
                                <button type='submit' className='btn one-rep-max-btn'>Calculate</button>
                            </div>
                        </form>
                    )
                ) : (
                    <div className='bmi-submitted-container'>
                        <h3 className='bmi-result-text'>BMI = {unit === 'us' ? bmiUs : bmiMetric} ({bmiStatus})</h3>
                        <GaugeChart id="gauge-chart2" 
                            nrOfLevels={5} 
                            arcPadding={0}
                            arcsLength={[0.4, 0.0625, 0.16, 0.1225, 0.255 ]}
                            colors={['#e73539', '#ffe400', '#008137', '#ffe400', '#e73539']}
                            percent={calculateGaugePercentage(unit === 'us' ? bmiUs : bmiMetric)}
                            formatTextValue={formatTextValue}
                            textColor={'#212529'}
                        />

                        <div className='one-rep-max-submitted-btns'>
                            <button onClick={handleEditClick} className='btn one-rep-max-btn one-rep-max-edit-btn'>Edit</button>
                            <button onClick={unit === 'us' ? handleResetClickUs : handleResetClickMetric} className='btn one-rep-max-btn one-rep-max-reset-btn'>Reset</button>
                        </div>
                    </div>
                )}

                
                

            </div>
        
        </>
    )
}