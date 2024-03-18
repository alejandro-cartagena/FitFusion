import React from 'react'
import BmiCalculator from '../../components/BmiCalculator'

export default function Bmi() {
    return (
        <>
            <section className='section-padding'>
            <h2 className='section-heading one-rep-max-heading'>BMI calculator</h2>
            <p className='calculator-info-text'>Body Mass Index (BMI) is a measure used to assess an individual's body weight 
            relative to their height. It provides a simple numerical representation of a person's body composition, indicating 
            whether their weight falls within a healthy range for their height. BMI is calculated differently depending on the region. 
            In the US, it's calculated by dividing a person's weight in pounds by the square of their height in inches, multiplied by a 
            conversion factor of 703. Using the metric system, BMI is calculated by dividing a person's weight in kilograms by the square 
            of their height in meters. The resulting number categorizes individuals into different BMI ranges, such as underweight, normal 
            weight, overweight, and obese, providing insight into their overall health status. </p>
            <p className='calculator-info-text'>While BMI is a widely used tool for assessing an individual's body composition and 
            potential health risks associated with weight, it does have limitations that users should be aware of. One notable limitation 
            is that BMI does not differentiate between muscle mass and fat mass. Therefore, individuals with high muscle mass, such as 
            athletes or bodybuilders, may register as overweight or even obese according to BMI standards, despite being in excellent 
            physical condition. Additionally, BMI does not take into account factors such as bone density, age, gender, or distribution 
            of fat, which can vary widely among individuals and influence overall health outcomes. As a result, while BMI can provide a 
            general indication of weight status, it should be interpreted cautiously and in conjunction with other assessments for a 
            comprehensive understanding of an individual's health profile.</p>
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

// #bc2020
