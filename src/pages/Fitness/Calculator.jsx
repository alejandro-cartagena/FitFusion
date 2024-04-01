import React from 'react'
import OneRepMaxCalculator from '../../components/OneRepMaxCalculator'

export default function Calculator() {
    return (
        <section className='section-padding'>
            <h2 className='section-heading one-rep-max-heading'>One rep max calculator</h2>
            <OneRepMaxCalculator />
            <h4>Overview</h4>
            <p className='calculator-info-text'>A One Rep Max (1RM) is the maximum weight an individual can lift for a 
            single repetition in a given exercise. Understanding your 1RM provides valuable insights into your strength 
            levels and helps tailor your workout intensities for optimal gains. It's a crucial metric for designing personalized 
            training programs and tracking progress over time. </p>
            <p className='calculator-info-text'>The One Rep Max Calculator simplifies this process by estimating your 1RM 
            based on the weight lifted and the number of repetitions performed. While these values provide useful benchmarks, 
            it's essential to recognize that 1RM calculators offer rough estimates. The true 1RM can vary based on factors
             like fatigue, form, and individual differences.</p>

            <h4>Equations Used</h4>
            <p className='calculator-info-text'></p>
            <p>The utilization of multiple formulas, such as the Epley and Brzycki formulas in the one-rep max (1RM) 
                calculator provides users with a comprehensive perspective on their maximal strength potential. These two
                formulas are the most commonly used to calculate 1RM. The Epley formula was used to calculate the Bench Press
                while the Brzycki was used to calculate the Squat and Deadlift.</p>
            <ul>
                <li><b>Epley Formula: </b>max = weight * (1 + 0.0333 * reps)</li>
                <li><b>Brzycki Formula: </b>max = weight / (1.0278 - 0.0278 * reps)</li>
            </ul>

            <h4>Limitations</h4>
            <p className='calculator-info-text'>While the one-rep max (1RM) calculator offers a convenient
             method for estimating an individual's maximal strength potential, it's important to recognize its limitations. The formulas 
             used provide an estimate based on mathematical models rather than direct measurement. Consequently,
              factors such as individual biomechanics, muscle fiber composition, fatigue levels, and training experience may influence actual 
              performance differently than predicted. </p>
            <p>As such, while the calculator offers a useful tool for programming and tracking strength goals, users should approach its results 
                with awareness of these inherent limitations and use them as a guideline rather than an absolute measure of strength.</p>

            
        </section>
        
    )
}