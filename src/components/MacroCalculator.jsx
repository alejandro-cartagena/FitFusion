import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import MacroIcon from '../images/calculate_macros_icon_red.png'


export default function MacroCalculator() {
    const activeStyles = {
        backgroundColor: '#000000',
        color: '#E73539',
        pointerEvents: 'none'
    }

    const[unit, setUnit] = useState('us')
    const[formDataUs, setFormDataUs] = useState({
        age: '',
        gender: 'male',
        feet: '',
        inches: '',
        weight: '',
        activity: 'moderately active',
        goal: 'maintain'
    })
    const[formDataMetric, setFormDataMetric] = useState({
        age: '',
        gender: 'male',
        height: '',
        weight: '',
        activity: 'moderately active',
        goal: 'maintain'
    })

    const[isFormSubmitted, setIsFormSubmitted] = useState(false)
    const[warningMessage, setWarningMessage] = useState(false)    // For form validation

    // Macro setters
    const[macros, setMacros] = useState({
        calories: '',
        carbs: '',
        protein: '',
        fats: ''
    })

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

    function handleUsSubmit(event) {
        event.preventDefault()
        const gender = formDataUs.gender
        const age = Number(formDataUs.age)
        const feet = Number(formDataUs.feet)
        const inches = Number(formDataUs.inches)
        const weight = Number(formDataUs.weight)
        const activity = formDataUs.activity
        const goal = formDataUs.goal

        if (age != '' && feet != '' && inches != '' && weight != '') {
            setWarningMessage(false)
            const height = feetInchesToInches(feet, inches)
            const bmr = calculateUsBMR(gender, weight, height, age)
            const tdee = Number(calculateTDEE(activity, bmr))
    
            const caloricGoal = calculateCaloricGoal(goal, tdee)
            // calculateMacros(goal, caloricGoal)
            calculateMacrosUs(activity, weight, caloricGoal)
    
            setIsFormSubmitted(true)
        }
        else {
            setWarningMessage(true)
        }
    }


    function handleMetricSubmit(event) {
        event.preventDefault()
        const gender = formDataMetric.gender
        const age = Number(formDataMetric.age)
        const height = Number(formDataMetric.height)
        const weight = Number(formDataMetric.weight)
        const activity = formDataMetric.activity
        const goal = formDataMetric.goal

        if (age != '' && height != '' && weight != '') {
            setWarningMessage(false)
            const bmr = calculateMetricBMR(gender, weight, height, age)
            const tdee = Number(calculateTDEE(activity, bmr))
    
            const caloricGoal = calculateCaloricGoal(goal, tdee)
            // calculateMacros(goal, caloricGoal)
            calculateMacrosMetric(activity, weight, caloricGoal)
    
            setIsFormSubmitted(true)
        }
        else {
            setWarningMessage(true)
        }
    }

    
    ////////////////
    // EQUATIONS //
    //////////////

    function feetInchesToInches(feet, inches) {
        return (feet * 12) + inches
    }

    // BMR is the number of calories you need to maintain basic
    // life-sustaining functions
    function calculateUsBMR(gender, weight, height, age) {
        if (gender === 'male') {
            return 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age)
        }
        else {
            return 655 + (4.3 * weight) + (4.7 * height) - (4.7 * age)
        }
    }

    function calculateMetricBMR(gender, weight, height, age) {
        if (gender === 'male') {
            return 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age)
        }
        else {
            return 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age)
        }
    }

    // TDEE, which is the total number of calories you burn 
    // including your BMR. Your TDEE equals your maintenance 
    // calories. To calculate your TDEE:
    function calculateTDEE(activity, bmr) {
        if (activity === 'sedentary') {
            const tdee = 1.2 * bmr
            return tdee.toFixed(0)
        }
        else if (activity === 'lightly active') {
            const tdee = 1.375 * bmr
            return tdee.toFixed(0)
        }
        else if (activity === 'moderately active') {
            const tdee = 1.55 * bmr
            return tdee.toFixed(0)
        }
        else if (activity === 'active') {
            const tdee = 1.725 * bmr
            return tdee.toFixed(0)
        }
        else if (activity === 'extremely active') {
            const tdee = 1.9 * bmr
            return tdee.toFixed(0)
        }
    }

    // Calories
    function calculateCaloricGoal(goal, tdee) {
        if (goal === 'lose slightly') {
            return tdee - 250
        }
        else if (goal === 'lose') {
            return tdee - 500
        }
        else if (goal === 'maintain') {
            return tdee
        }
        else if (goal === 'gain slightly') {
            return tdee + 250
        }
        else if (goal === 'gain') {
            return tdee + 500
        }
    }

    // Macros
    function calculateMacrosCalories(goal, calories) {
        let carbsRatio;
        let proteinRatio;
        let fatRatio;

        // Adjust intake ratios based on goal
        if (goal === 'lose slightly' || goal === 'lose') {
            // 40% carbs, 40% protein, and 20% fat.
            carbsRatio = 0.4;
            proteinRatio = 0.4;
            fatRatio = 0.2;
        } else if (goal === 'maintain' || goal === 'gain slightly' || goal === 'gain') {
            // 40% carbs, 30% protein, and 30% fat.
            carbsRatio = 0.4;
            proteinRatio = 0.3;
            fatRatio = 0.3;
        } 

        // Calculate macros based on calories
        const carbsIntake = calories * carbsRatio / 4; // 4 calories per gram of carbs
        const proteinIntake = calories * proteinRatio / 4; // 4 calories per gram of protein
        const fatIntake = calories * fatRatio / 9; // 9 calories per gram of fat

        setMacros({
            calories: calories,
            protein: proteinIntake.toFixed(0),
            carbs: carbsIntake.toFixed(0),
            fats: fatIntake.toFixed(0),
        });

    }

    // Calculates Macros Based off Weight (U.S Units)
    function calculateMacrosUs(activityLevel, weight, calories) {
        let proteinPerPound;
        let fatPerPound;
    
        // Determine intake based on activity
        if (activityLevel === 'sedentary') {
            proteinPerPound = 0.6;
            fatPerPound = 0.3;
        } else if (activityLevel === 'lightly active') {
            proteinPerPound = 0.7;
            fatPerPound = 0.35;
        } else if (activityLevel === 'moderately active') {
            proteinPerPound = 0.8;
            fatPerPound = 0.4;
        } else if (activityLevel === 'active') {
            proteinPerPound = 0.9;
            fatPerPound = 0.45;
        } else if (activityLevel === 'extremely active') {
            proteinPerPound = 1.0;
            fatPerPound = 0.5;
        }

        const recommendedProteinIntake = proteinPerPound * weight;
        const recommendedFatIntake = fatPerPound * weight;

        const proteinCalories = recommendedProteinIntake * 4
        const fatCalories = recommendedFatIntake * 9
        const proteinAndFatCalories = proteinCalories + fatCalories

        const recommendedCarbsIntake = (calories - proteinAndFatCalories) / 4

        setMacros({
            calories: calories,
            protein: recommendedProteinIntake.toFixed(0),
            carbs: recommendedCarbsIntake.toFixed(0),
            fats: recommendedFatIntake.toFixed(0),
        });
    
    }

    // Calculates Macros Based off Weight (Metric Units)
    function calculateMacrosMetric(activityLevel, weight, calories) {
        let proteinPerKg;
        let fatPerKg;
    
        // Determine intake based on activity
        if (activityLevel === 'sedentary') {
            proteinPerKg = 1.32; // grams of protein per kg
            fatPerKg = 0.66; // grams of fat per kg
        } else if (activityLevel === 'lightly active') {
            proteinPerKg = 1.54;
            fatPerKg = 0.77;
        } else if (activityLevel === 'moderately active') {
            proteinPerKg = 1.76;
            fatPerKg = 0.88;
        } else if (activityLevel === 'active') {
            proteinPerKg = 1.98;
            fatPerKg = 0.99;
        } else if (activityLevel === 'extremely active') {
            proteinPerKg = 2.2;
            fatPerKg = 1.1;
        }
    
        const recommendedProteinIntake = proteinPerKg * weight;
        const recommendedFatIntake = fatPerKg * weight;
    
        const proteinCalories = recommendedProteinIntake * 4; // 4 calories per gram of protein
        const fatCalories = recommendedFatIntake * 9; // 9 calories per gram of fat
        const proteinAndFatCalories = proteinCalories + fatCalories;
    
        const recommendedCarbsIntake = (calories - proteinAndFatCalories) / 4; // 4 calories per gram of carbs

    
        setMacros({
            calories: calories,
            protein: recommendedProteinIntake.toFixed(0),
            carbs: recommendedCarbsIntake.toFixed(0),
            fats: recommendedFatIntake.toFixed(0),
        });
    
    }

    ////////////////////////////////////////////
    // FUNCTIONS TO CLEAR AND RESET FORM DATA //
    ///////////////////////////////////////////
    function clearFormDataUs() {
        setMacros({
            calories: '',
            carbs: '',
            protein: '',
            fats: ''
        })
        setFormDataUs({
            age: '',
            gender: 'male',
            feet: '',
            inches: '',
            weight: '',
            activity: 'moderately active',
            goal: 'maintain'
        });

    }

    function clearFormDataMetric() {
        setMacros({
            calories: '',
            carbs: '',
            protein: '',
            fats: ''
        })
        setFormDataMetric({
            age: '',
            gender: 'male',
            height: '',
            weight: '',
            activity: 'moderately active',
            goal: 'maintain'
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
            <div className='one-rep-max-card bmi-calculator-card'>
                <div className='one-rep-max-header macro-calculator-header'>
                    <h4 className='one-rep-max-header-title'>Macros</h4>
                    <img className='one-rep-max-header-icon' src={MacroIcon} alt="" srcset="" /> 
                </div>

                {!isFormSubmitted ? (
                    unit === 'us' ? (
                        <form className='one-rep-max-card-form' onSubmit={handleUsSubmit}>

                            <div className='bmi-units'>
                                <button value={'us'} onClick={handleUnitClick} style={unit === 'us' ? activeStyles : null} className='bmi-unit-btn bmi-unit-us'>US Units</button>
                                <button value={'metric'} onClick={handleUnitClick} style={unit === 'metric' ? activeStyles : null} className='bmi-unit-btn bmi-unit-metric'>Metric Units</button>
                            </div>

                            {/* Age */}
                            <div className='input-wrap bmi-input-text input-wrap-macro'>
                                <label className='input-label' htmlFor="age">Age</label>
                                <div className='input-container'>
                                    <input min={0} max={500} onChange={handleUsChange} type="number" name="age" id="age" value={formDataUs.age}/>
                                    <p className='input-text'>years</p>
                                </div>
                            </div>

                            {/* Gender */}
                            <div className='select-wrap select-wrap-macro'>
                                <label className='select-label' htmlFor="gender">Gender</label>
                                <select onChange={handleUsChange} value={formDataUs.gender} className='one-rep-max-select select-unit' name="gender" id="gender">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
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
                            <div className='input-wrap bmi-input-text input-wrap-macro'>
                                <label className='input-label' htmlFor="weight">Weight</label>
                                <div className='input-container'>
                                    <input min={0} max={500} onChange={handleUsChange} type="number" name="weight" id="weight" value={formDataUs.weight}/>
                                    <p className='input-text'>pounds</p>
                                </div>
                            </div>

                            {/* Activity Level */}
                            <div className='select-wrap select-wrap-macro select-wrap-activity'>
                                <label className='select-label select-label-macro-activity' htmlFor="activity">Activity</label>
                                <select onChange={handleUsChange} value={formDataUs.activity} className='one-rep-max-select select-unit' name="activity" id="activity">
                                    <option value="sedentary">Sedentary (little to no exercise)</option>
                                    <option value="lightly active">Lightly active (light exercise 1 - 3 days per week)</option>
                                    <option value="moderately active">Moderately active (moderate exercise 3 - 5 days per week)</option>
                                    <option value="active">Active (heavy exercise 6 - 7 days per week)</option>
                                    <option value="extremely active">Extremely Active (strenuous training 2 times a day)</option>
                                </select>
                            </div>

                            {/* Goal */}
                            <div className='select-wrap select-wrap-macro'>
                                <label className='select-label' htmlFor="goal">Goal</label>
                                <select onChange={handleUsChange} value={formDataUs.goal} className='one-rep-max-select select-unit' name="goal" id="goal">
                                    <option value="lose slightly">Lose Weight (0.5lb per week)</option>
                                    <option value="lose">Lose Weight (1.0lb per week)</option>
                                    <option value="maintain">Maintain Weight</option>
                                    <option value="gain slightly">Gain Weight (0.5lb per week)</option>
                                    <option value="gain">Gain Weight (1.0lb per week)</option>  
                                </select>
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

                            {/* Age */}
                            <div className='input-wrap bmi-input-text input-wrap-macro'>
                                <label className='input-label' htmlFor="age">Age</label>
                                <div className='input-container'>
                                    <input min={0} max={500} onChange={handleMetricChange} type="number" name="age" id="age" value={formDataMetric.age}/>
                                    <p className='input-text'>years</p>
                                </div>
                            </div>

                            {/* Gender */}
                            <div className='select-wrap select-wrap-macro select-wrap-gender-metric'>
                                <label className='select-label' htmlFor="gender">Gender</label>
                                <select onChange={handleMetricChange} value={formDataMetric.gender} className='one-rep-max-select select-unit' name="gender" id="gender">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
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
                            <div className='input-wrap bmi-input-text input-wrap-macro-weight-metric'>
                                <label className='input-label' htmlFor="weight">Weight</label>
                                <div className='input-container'>
                                    <input min={0} max={230} onChange={handleMetricChange} type="number" name="weight" id="weight" value={formDataMetric.weight}/>
                                    <p className='input-text'>kilograms</p>
                                </div>
                            </div>

                            {/* Activity Level */}
                            <div className='select-wrap select-wrap-macro select-wrap-activity'>
                                <label className='select-label select-label-macro-activity' htmlFor="activity">Activity</label>
                                <select onChange={handleMetricChange} value={formDataMetric.activity} className='one-rep-max-select select-unit' name="activity" id="activity">
                                <option value="sedentary">Sedentary (little to no exercise)</option>
                                    <option value="lightly active">Lightly active (light exercise 1 - 3 days per week)</option>
                                    <option value="moderately active">Moderately active (moderate exercise 3 - 5 days per week)</option>
                                    <option value="active">Active (heavy exercise 6 - 7 days per week)</option>
                                    <option value="extremely active">Extremely Active (strenuous training 2 times a day)</option>
                                </select>
                            </div>

                            {/* Goal */}
                            <div className='select-wrap select-wrap-macro'>
                                <label className='select-label' htmlFor="goal">Goal</label>
                                <select onChange={handleMetricChange} value={formDataMetric.goal} className='one-rep-max-select select-unit' name="goal" id="goal">
                                    <option value="lose slightly">Lose Weight (0.25kg per week)</option>
                                    <option value="lose">Lose Weight (0.5kg per week)</option>
                                    <option value="maintain">Maintain Weight</option>
                                    <option value="gain slightly">Gain Weight (0.25kg per week)</option>
                                    <option value="gain">Gain Weight (0.5kg per week)</option>
                                </select>
                            </div>

                            {warningMessage ? <p className='warning-message'>Please fill in all input fields</p> : ''}

                            {/* BTN */}
                            <div className='one-rep-max-btn-container'>
                                <button type='submit' className='btn one-rep-max-btn'>Calculate</button>
                            </div>
                        </form>
                    )
                ) : (
                    <div className='macro-form-submitted-container'>

                        <Table striped bordered hover className='bmi-table'>
                            <thead>
                            <tr>
                                <th>Nutrients</th>
                                <th>Daily Needs</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Calories</td>
                                    <td>{macros.calories} calories/day</td>
                                </tr>
                                <tr>
                                    <td>Carbs</td>
                                    <td>{macros.carbs} grams/day</td>
                                </tr>
                                <tr>
                                    <td>Protein</td>
                                    <td>{macros.protein} grams/day</td>
                                </tr>
                                <tr>
                                    <td>Fat</td>
                                    <td>{macros.fats} grams/day</td>
                                </tr>      
                            </tbody>
                        </Table>

                        <div className='one-rep-max-submitted-btns'>
                            <button onClick={handleEditClick} className='btn one-rep-max-btn one-rep-max-edit-btn'>Edit</button>
                            <button onClick={unit === 'us' ? handleResetClickUs : handleResetClickMetric} className='btn one-rep-max-btn one-rep-max-reset-btn'>Reset</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}