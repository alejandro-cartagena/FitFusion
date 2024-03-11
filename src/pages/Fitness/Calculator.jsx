import React from 'react'
import OneRepMaxCalculator from '../../components/OneRepMaxCalculator'

export default function Calculator() {
    return (
        <section className='section-padding'>
            <h2 className='section-heading one-rep-max-heading'>One rep max calculator</h2>
            <p className='calculator-info-text'>Welcome to the One Rep Max Calculator – your gateway to optimizing 
            your strength training journey. A One Rep Max (1RM) is the maximum weight an individual can lift for a 
            single repetition in a given exercise. Understanding your 1RM provides valuable insights into your strength 
            levels and helps tailor your workout intensities for optimal gains. It's a crucial metric for designing personalized 
            training programs and tracking progress over time. </p>
            <p className='calculator-info-text'>The One Rep Max Calculator simplifies this process by estimating your 1RM 
            based on the weight lifted and the number of repetitions performed. While these values provide useful benchmarks, 
            it's essential to recognize that 1RM calculators offer rough estimates. The true 1RM can vary based on factors
             like fatigue, form, and individual differences.</p>
            <p className='calculator-info-text'>Calculating your One Rep Max is vital for several reasons. It aids in setting 
            realistic training goals, determining appropriate workout loads, and ensuring progressive overload – a key factor 
            for muscle growth and strength gains. By understanding your 1RM, you can tailor your workout routine to match 
            your fitness goals and maximize your training efficiency. Enjoy exploring the benefits of the One Rep Max 
            Calculator as you embark on your journey toward strength and fitness excellence.</p>

            <OneRepMaxCalculator />
        </section>
        
    )
}