import React from 'react'
import HandDumbellIcon from '../images/hand_dumbell_icon.png'
import Table from 'react-bootstrap/Table';

export default function OneRepMaxCalculator() {

    // Default state for the form
    const[formData, setFormData] = React.useState({
        unit: "lb",
        lift: "bench",
        weight: '',
        reps: ''
    })

    const[isFormSubmitted, setIsFormSubmitted] = React.useState(false)  // Used to know when to render the result and table
    const[oneRepMax, setOneRepMax] = React.useState(null)               // Keeps track of the One Rep Max
    const[warningMessage, setWarningMessage] = React.useState(false)    // For form validation
    

    // Changes the state of the form everytime there is a change
    function handleChange(event) {
    
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    // Submits the form and checks if all inputs are filled
    function handleSubmit(event) {
        event.preventDefault()

        if (formData.weight != '' && formData.reps != '') {
            setWarningMessage(false)
            const weight = Number(formData.weight);
            const reps = Number(formData.reps);

            if (formData.lift === 'bench') {
                calculateOneRepMaxBench(weight, reps);
            }
            else if (formData.lift === 'squat') {
                calculateOneRepMaxSquat(weight, reps)
            }
            else if (formData.lift === 'deadlift') {
                calculateOneRepMaxDeadlift(weight, reps)
            }
            setIsFormSubmitted(true)
        } else {
            setWarningMessage(true)
        }

    }

    // All formulas are commonly used to calculate 1rm.
    // I used the Lombardi for Bench because it yields 
    // a slightly lower result, since I find it is usually
    // harder to max out on the Bench.

    // The Epley and Brzycki formula yield a slighlty higher
    // result and are both very similar. I used the Epley 
    // formula to calculate the Squat and the Brzycki 
    // formula for the Deadlift.

    // Lombardi Formula Bench
    function calculateOneRepMaxBench(weight, reps) {

        if (reps === 1) {
            const max = weight
            setOneRepMax(max)
        }
        else {
            const max = weight * Math.pow(reps, 0.1)
            setOneRepMax(parseFloat(max.toFixed(1)))
        }
        
    }

    // Epley Formula Squat
    function calculateOneRepMaxSquat(weight, reps) {
    
        if (reps === 1) {
            const max = weight
            setOneRepMax(max)
        }
        else {
            const max = weight * (1 + 0.0333 * reps)
            setOneRepMax(parseFloat(max.toFixed(1)))
        }
        
    }

    // Brzycki Formula Deadlift
    function calculateOneRepMaxDeadlift(weight, reps) {
    
        if (reps === 1) {
            const max = weight
            setOneRepMax(max)
        }
        else {
            const max = weight / (1.0278 - 0.0278 * reps)
            setOneRepMax(parseFloat(max.toFixed(1)))
        }
        
    }

    // Used to calculate percentages for the table
    function calculatePercentMax(percent, max) {
        const result = percent * max;
        return parseFloat(result.toFixed(1));
    }

    // Creates the table showing 1rm - 10rm
    function createPercentTable() {

        const max = oneRepMax
        const liftRepPercentages = [
            {repMax: 2, percentWhole: 97, percentDecimal: 0.97},
            {repMax: 3, percentWhole: 94, percentDecimal: 0.94},
            {repMax: 4, percentWhole: 92, percentDecimal: 0.92},
            {repMax: 5, percentWhole: 89, percentDecimal: 0.89},
            {repMax: 6, percentWhole: 86, percentDecimal: 0.86},
            {repMax: 7, percentWhole: 83, percentDecimal: 0.83},
            {repMax: 8, percentWhole: 81, percentDecimal: 0.81},
            {repMax: 9, percentWhole: 78, percentDecimal: 0.78},
            {repMax: 10, percentWhole: 75, percentDecimal: 0.75},
        ]

        const percentTable = liftRepPercentages.map(item => {
            return <tr>  
                        <td>{item.percentWhole}% - &#40;{item.repMax}-rep max&#41;</td>
                        <td>{calculatePercentMax(item.percentDecimal, max)}</td>
                    </tr>
        })

        return <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>% of 1RM</th>
                        <th>Weight</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>100% - &#40;1-rep max&#41;</td>
                            <td>{oneRepMax}</td>
                        </tr>
                        {percentTable}
                    </tbody>
                </Table>
    }

    // Clears the form data and resets it to its default values
    function clearFormData() {
        setOneRepMax(null)
        formData.unit = 'lb'
        formData.lift = 'bench'
        formData.weight = ''
        formData.reps = ''
    }

    // For when the user clicks the edit button
    function handleEditClick() {
        setIsFormSubmitted(false)
    }

    // For when the user clicks the reset button
    function handleResetClick() {
        clearFormData()
        setIsFormSubmitted(false)
    }

    return (
        <div className='one-rep-max-card'>
            <div className='one-rep-max-header'>
                <h4 className='one-rep-max-header-title'>1rm</h4>
                <img className='one-rep-max-header-icon' src={HandDumbellIcon} alt="" srcset="" />
            </div>

            {isFormSubmitted === false ? (
                <form className='one-rep-max-card-form' onSubmit={handleSubmit}>

                    <div className='select-inputs-container'>
                        <div className='select-wrap'>
                            <label className='select-label' htmlFor="unit">Unit</label>
                            <select onChange={handleChange} defaultValue={formData.unit} className='one-rep-max-select select-unit' name="unit" id="unit">
                                <option value="lb">lb</option>
                                <option value="kg">kg</option>
                            </select>
                        </div>

                        <div className='select-wrap'>
                            <label className='select-label' htmlFor="unit">Lift</label>
                            <select onChange={handleChange} defaultValue={formData.lift} className='one-rep-max-select select-unit' name="lift" id="lift">
                                <option value="bench">Bench</option>
                                <option value="squat">Squat</option>
                                <option value="deadlift">Deadlift</option>
                            </select>
                        </div>
                    </div>

                    <div className='input-wrap'>
                        <label className='input-label' htmlFor="weight">Weight</label>
                        <div className='input-container'>
                            <input value={formData.weight} onChange={handleChange} type="number" min={0} max={formData.unit === 'lb' ? 800 : 400} name="weight" id="weight"/>
                            <p className='input-text'>{formData.unit}</p>
                        </div>
                    </div>

                    <p className='max-reps-limit-text'>Enter a maximum of 10 reps</p>
                    <div className='input-wrap'>
                        <label className='input-label' htmlFor="reps">Repetitions</label>
                        <div className='input-container'>
                            <input value={formData.reps} onChange={handleChange} type="number" name="reps" id="reps" min={1} max={10}/>
                            <p className='input-text'>reps</p>
                        </div>
                    </div>

                    {warningMessage ? <p className='warning-message'>Please fill in all input fields</p> : ''}

                    <div className='one-rep-max-btn-container'>
                        <button className='btn one-rep-max-btn'>Calculate</button>
                    </div>

                </form>
            ) : (
                <div className='one-rep-max-submitted-container'>
                    <div className='one-rep-max-submitted-top'>
                        
                        <h4 className='one-rep-max-submitted-lift-text'>{formData.lift} Results</h4>
                        <h3>1RM = {oneRepMax} {formData.unit}</h3>
                    </div>
                    {createPercentTable()}

                    <div className='one-rep-max-submitted-btns'>
                        <button onClick={handleEditClick} className='btn one-rep-max-btn one-rep-max-edit-btn'>Edit</button>
                        <button onClick={handleResetClick} className='btn one-rep-max-btn one-rep-max-reset-btn'>Reset</button>
                    </div>
                    
                </div>
            )}
            
        </div>
    )
}
