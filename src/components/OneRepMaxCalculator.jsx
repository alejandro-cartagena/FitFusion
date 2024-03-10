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

                <div className='select-inputs-container'>
                    <div className='select-wrap'>
                        <label className='select-label' htmlFor="unit">Unit</label>
                        <select defaultValue={'lb'} className='one-rep-max-select select-unit' name="unit" id="unit">
                            <option value="lb">lb</option>
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
                </div>

                <div className='input-wrap'>
                    <label className='input-label' htmlFor="weight">Weight</label>
                    <div className='input-container'>
                        <input type="text" name="weight" id="weight" />
                        <p className='input-text'>lb</p>
                    </div>
                </div>

                <p className='max-reps-limit-text'>Enter a maximum of 12 reps</p>
                <div className='input-wrap'>
                    <label className='input-label' htmlFor="reps">Repetitions</label>
                    <div className='input-container'>
                        <input type="text" name="reps" id="reps" />
                        <p className='input-text'>reps</p>
                    </div>
                </div>

                <div className='one-rep-max-btn-container'>
                    <button className='btn one-rep-max-btn'>Calculate</button>
                </div>
                

            </form>

        </div>
    )
}