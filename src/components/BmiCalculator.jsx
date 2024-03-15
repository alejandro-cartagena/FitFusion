import React from 'react'
import Table from 'react-bootstrap/Table';

export default function BmiCalculator() {

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <>
            <div className='one-rep-max-card'>
                <div className='one-rep-max-header'>
                    <h4 className='one-rep-max-header-title'>Bmi</h4>
                </div>

                <form className='one-rep-max-card-form' onSubmit={handleSubmit}>
                    
                    <div className='select-inputs-container'>
                        <div className='select-wrap'>
                            <label className='select-label' htmlFor="unit">Unit</label>
                            <select className='one-rep-max-select select-unit' name="unit" id="unit">
                                <option value="lb">lb</option>
                                <option value="kg">kg</option>
                            </select>
                        </div>

                    </div>

                    {/* AGE */}
                    <div className='input-wrap'>
                        <label className='input-label' htmlFor="weight">Age</label>
                        <div className='input-container'>
                            <input  type="number" name="weight" id="weight"/>
                            <p className='input-text'>years</p>
                        </div>
                    </div>

                    {/* GENDER */}
                    <div className='select-wrap'>
                        <label className='select-label' htmlFor="unit">Gender</label>
                        <select className='one-rep-max-select select-unit' name="lift" id="lift">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    {/* HEIGHT */}
                    <p>Height</p>
                    <div className='input-wrap'>
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


                    {/* Weight */}
                    <div className='input-wrap'>
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