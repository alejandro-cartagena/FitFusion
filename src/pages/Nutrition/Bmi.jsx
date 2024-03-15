import React from 'react'
import BmiCalculator from '../../components/BmiCalculator'

export default function Bmi() {
    return (
        <>
            <section className='section-padding'>
            <h2 className='section-heading one-rep-max-heading'>BMI calculator</h2>
            <p className='calculator-info-text'>Body Mass Index (BMI) is a measure used to assess an individual's body weight 
            relative to their height. It provides a simple numerical representation of a person's body composition, indicating 
            whether their weight falls within a healthy range for their height. BMI is calculated by dividing a person's weight 
            in kilograms by the square of their height in meters. The resulting number categorizes individuals into different 
            BMI ranges, such as underweight, normal weight, overweight, and obese, providing insight into their overall health status. </p>
            <p className='calculator-info-text'>Maintaining a healthy BMI is crucial for overall well-being and reducing the risk 
            of various health conditions. A healthy BMI is associated with a lower risk of chronic diseases such as heart disease, 
            diabetes, and certain cancers. Additionally, achieving and maintaining a healthy BMI can improve physical fitness, enhance 
            mobility, and increase energy levels. Striving for a healthy BMI also supports mental well-being by boosting self-esteem
             and confidence, leading to a better quality of life.</p>
            <p className='calculator-info-text'>Our BMI calculator offers a convenient way to determine your BMI and assess your current 
            body weight status. Simply input your height and weight into the calculator, and it will instantly provide your BMI score 
            along with the corresponding BMI category. This information can serve as a valuable tool for setting health and fitness goals, 
            monitoring progress, and making informed decisions about diet, exercise, and overall lifestyle choices. Take charge of your 
            health today by using our BMI calculator to gain insights into your body composition and work towards achieving a healthy BMI.</p>

            <BmiCalculator />
        </section>
        </>
    )
}
