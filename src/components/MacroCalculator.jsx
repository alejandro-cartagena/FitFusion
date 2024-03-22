import React, { useState } from 'react';


export default function MacroCalculator() {
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

    function handleUsSubmit(event) {
        event.preventDefault()
    }

    function handleMetricChange(event) {
        setFormDataMetric(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleMetricSubmit(event) {
        event.preventDefault()
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


    return (
        <>
            <div className={isFormSubmitted ? 'one-rep-max-card bmi-calculator-card bmi-calculator-card-submitted' : 'one-rep-max-card bmi-calculator-card'}>
                <div className='one-rep-max-header macro-calculator-header'>
                    <h4 className='one-rep-max-header-title'>Macro</h4>
                    {/* <img className='one-rep-max-header-icon' src={NutritionIconRed} alt="" srcset="" /> */}
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
                                    <div className='input-container'>
                                        <input  min={1} max={7} onChange={handleUsChange} type="number" name="feet" id="feet" value={formDataUs.feet}/>
                                        <p className='input-text'>feet</p>
                                    </div>
                                </div>

                                <div className='input-wrap bmi-input-inches'>
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
                            <div className='input-wrap bmi-input-cm'>
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
                ) : null}
            </div>
        </>
    );
}
