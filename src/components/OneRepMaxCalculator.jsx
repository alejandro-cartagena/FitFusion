import React from 'react'
import HandDumbellIcon from '../images/hand_dumbell_icon.png'
import Table from 'react-bootstrap/Table';

export default function OneRepMaxCalculator() {

    const[formData, setFormData] = React.useState({
        unit: "lb",
        lift: "bench",
        weight: '',
        reps: ''
    })

    const[isFormSubmitted, setIsFormSubmitted] = React.useState(false)
    const[oneRepMax, setOneRepMax] = React.useState(null)
    const[warningMessage, setWarningMessage] = React.useState(false)
    

    function handleChange(event) {
    
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (formData.weight != '' && formData.reps != '') {
            setWarningMessage(false)
            const weight = Number(formData.weight);
            const reps = Number(formData.reps);
            calculateOneRepMax(weight, reps);
            setIsFormSubmitted(true)
        } else {
            setWarningMessage(true)
        }

    }

    function calculateOneRepMax(weight, reps) {
    
        if (reps === 1) {
            console.log("YOOOO")
            const max = weight
            setOneRepMax(max)
        }
        else {
            const max = weight * (1 + 0.0333 * reps)
            setOneRepMax(parseFloat(max.toFixed(1)))
        }
        
    }

    function calculatePercentMax(percent, max) {
        const result = percent * max;
        return parseFloat(result.toFixed(1));
    }

    function createPercentTable() {

        const max = oneRepMax
        console.log(max)
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

    function clearFormData() {
        setOneRepMax(null)
        formData.unit = 'lb'
        formData.lift = 'bench'
        formData.weight = ''
        formData.reps = ''
    }

    function handleEditClick() {
        setIsFormSubmitted(false)
    }

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
                            <select onChange={handleChange} defaultValue={'bench'} className='one-rep-max-select select-unit' name="lift" id="lift">
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
                            <input value={formData.reps} onChange={handleChange} type="number" name="reps" id="reps" min={0} max={10}/>
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
