import React from 'react'
import BmiCalculator from '../../components/BmiCalculator'

export default function Bmi() {
    return (
        <>
            <section className='section-padding'>
                <h2 className='section-heading one-rep-max-heading'>BMI calculator</h2>
                <BmiCalculator />
                <h4>Overview</h4>
                <p className='calculator-info-text'>Body Mass Index (BMI) is a measure used to assess an individual's body weight 
                relative to their height. It provides a simple numerical representation of a person's body composition, indicating 
                whether their weight falls within a healthy range for their height. The resulting number categorizes individuals into 
                different BMI ranges, such as underweight, normal weight, overweight, and obese, providing insight into their 
                overall health status. </p>
                <p className='calculator-info-text'>Our BMI calculator offers a convenient way to determine your BMI and assess your current 
                body weight status. Simply input your height and weight into the calculator, and it will instantly provide your BMI score 
                along with the corresponding BMI category.</p>

                <h4>Equations Used</h4>
                <p>The equations used to calculate BMI are:</p>
                <ul>
                    <li><b>U.S Units: </b><var>703</var> * (<var>weight(lb)</var> / <var>height(inches)<sup>2</sup></var>)</li>
                    <li><b>Metric Units: </b><var>10000</var> * (<var>weight(kg)</var> / <var>height(cm)<sup>2</sup></var>)</li>
                </ul>

                <h4>Limitations</h4>
                <p className='calculator-info-text'>While BMI is a widely used tool for assessing an individual's body composition and 
                potential health risks associated with weight, it does have limitations that users should be aware of. One notable limitation 
                is that BMI does not differentiate between muscle mass and fat mass. Therefore, individuals with high muscle mass, such as 
                athletes or bodybuilders, may register as overweight or even obese according to BMI standards, despite being in excellent 
                physical condition. Additionally, BMI does not take into account factors such as bone density, age, gender, or distribution 
                of fat, which can vary widely among individuals and influence overall health outcomes. As a result, while BMI can provide a 
                general indication of weight status, it should be interpreted cautiously and in conjunction with other assessments for a 
                comprehensive understanding of an individual's health profile.</p>
            </section>
        </>
    )
}

// #bc2020
