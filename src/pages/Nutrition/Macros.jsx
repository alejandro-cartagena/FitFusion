import React from 'react'
import MacroCalculator from '../../components/MacroCalculator'

export default function Macros() {
    return (
        <>
            <section className='section-padding'>
                <h2 className='section-heading one-rep-max-heading'>Macro calculator</h2>
                <p className='calculator-info-text'>Macronutrients, often referred to as macros, are the essential 
                nutrients that provide energy and support various bodily functions. The three primary macros are 
                carbohydrates, proteins, and fats. Carbohydrates are the body's main source of energy, proteins are 
                crucial for building and repairing tissues, and fats play a vital role in hormone production and 
                nutrient absorption. Each macro provides a certain number of calories per gram: carbohydrates 
                and proteins provide 4 calories per gram, while fats provide 9 calories per gram. </p>
                <p className='calculator-info-text'>Tracking macros is essential for achieving specific health and fitness 
                goals. By monitoring the intake of carbohydrates, proteins, and fats, individuals can ensure they are meeting 
                their nutritional needs and maintaining a balanced diet. For those looking to lose weight, tracking macros can 
                help create a calorie deficit by adjusting the proportion of macros consumed. Conversely, individuals aiming 
                to build muscle or improve athletic performance may need to increase their protein intake while adjusting their 
                carbohydrate and fat intake accordingly.</p>
                <p className='calculator-info-text'>While macro calculators provide valuable insights into daily caloric and 
                macronutrient needs, they have limitations that users should be aware of. These calculators typically provide 
                generalized recommendations based on factors such as age, gender, weight, height, activity level, and goals. However, 
                individual factors such as metabolism, body composition, and dietary preferences may influence actual nutritional 
                requirements. Additionally, macro calculators may not account for specific health conditions or dietary restrictions,
                 leading to potentially inaccurate recommendations. Therefore, while macro calculators can be a helpful tool for 
                 setting dietary targets, it's essential to use them as a starting point and adjust based on personal experience 
                 and feedback from your body.</p>

                <MacroCalculator />
            </section>
        </>
    )
}