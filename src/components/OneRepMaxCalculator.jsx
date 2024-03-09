import React from 'react'
import HandDumbellIcon from '../images/hand_dumbell_icon.png'

export default function OneRepMaxCalculator() {
    return (
        <div className='one-rep-max-card'>
            <div className='one-rep-max-header'>
                <h4 className='one-rep-max-header-title'>1rm</h4>
                <img className='one-rep-max-header-icon' src={HandDumbellIcon} alt="" srcset="" />
            </div>
            <form className='one-rep-max-card-form' action="submit">
                <div className='select-wrap'>
                    <label className='select-label' htmlFor="unit">Unit</label>
                    <select className='one-rep-max-select select-unit' name="unit" id="unit">
                        <option selected value="lb">lb</option>
                        <option value="lb">kg</option>
                    </select>
                </div>

                <div className='select-wrap'>
                    <label className='select-label' htmlFor="unit">Lift</label>
                    <select className='one-rep-max-select select-unit' name="lift" id="lift">
                        <option value="bench">Bench</option>
                        <option value="squat">Squat</option>
                        <option value="deadlift">Deadlift</option>
                    </select>
                </div>

                <div className='input-wrap'>
                    <label htmlFor="weight">Weight</label>
                    <input type="text" name="weight" id="weight" />
                </div>

                <div className='input-wrap'>
                    <label htmlFor="reps">Repetitions</label>
                    <input type="text" name="reps" id="reps" />
                </div>

            </form>

        </div>
    )
}