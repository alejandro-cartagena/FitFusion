import React from 'react'
import MacroCalculator from '../../components/MacroCalculator'

export default function Macros() {
    return (
        <>
            <section className='section-padding'>
                <h2 className='section-heading one-rep-max-heading'>Macro calculator</h2>
                <MacroCalculator />
                <h4>Overview</h4>
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

                <h4>Calories Calculation</h4>
                {/* BMR */}
                <p>To calculate the calories needed, the first thing you need to do is calculate your BMR (basal metabolic rate). It 
                    is the number of calories you need to maintain basic life-sustaining functions (the amount of calories you burn
                    at rest).
                </p>
                <ul>
                    <li>
                        <b>BMR Equation (U.S Units): </b>
                        <p>BMR = <var>66</var> + (<var>6.23</var> * <var>weight(lb)</var>) + (<var>12.7</var> * <var>height(in)</var>) - (<var>6.8</var> * <var>age</var>)</p>
                    </li>
                    <li>
                        <b>BMR Equation (Metric Units): </b>
                        <p>BMR = <var>655</var> + (<var>4.3</var> * <var>weight(kg)</var>) + (<var>4.7</var> * <var>height(cm)</var>) - (<var>4.7</var> * <var>age</var>)</p>
                    </li>
                </ul>
                {/* TDEE */}
                <p>Once BMR is calculated, the next step is to calculate the TDEE (Total Daily Energy Expenditure). It is an estimate of
                    how many calories you burn when exercise (activity level) is taken into account. Below is how TDEE was calculated:
                </p>
                <ul>
                    <li>
                        <b>Sedentery </b>(little or no exercise): <var>TDEE</var> = <var>BMR</var> * <var>1.2</var>
                    </li>
                    <li>
                        <b>Lightly Active </b>(light exercise 1-3 days a week): <var>TDEE</var> = <var>BMR</var> * <var>1.375</var>
                    </li>
                    <li>
                        <b>Moderately Active </b>(moderate exercise 3-5 days a week): <var>TDEE</var> = <var>BMR</var> * <var>1.55</var>
                    </li>
                    <li>
                        <b>Active </b>(heavy exercise 6-7 days a week): <var>TDEE</var> = <var>BMR</var> * <var>1.725</var>
                    </li>
                    <li>
                        <b>Extremely Active </b>(strenous training 2 times a day): <var>TDEE</var> = <var>BMR</var> * <var>1.9</var>
                    </li>
                </ul>
                {/* Caloric Goal */}
                <p>Lastly, based on what your goal is, the calories are adjusted accordingly:</p>
                <ul>
                    <li>
                        <b>Lose Weight </b>(0.5lb or 0.25kg): <var>Calories</var> = <var>TDEE</var> - <var>250</var>
                    </li>
                    <li>
                        <b>Lose Weight </b>(1.0lb or 0.5kg): <var>Calories</var> = <var>TDEE</var> - <var>500</var>
                    </li>
                    <li>
                        <b>Maintain Weight</b>: <var>Calories</var> = <var>TDEE</var>
                    </li>
                    <li>
                        <b>Gain Weight </b>(0.5lb or 0.25kg): <var>Calories</var> = <var>TDEE</var> + <var>250</var>
                    </li>
                    <li>
                        <b>Lose Weight </b>(1.0lb or 0.5kg): <var>Calories</var> = <var>TDEE</var> + <var>500</var>
                    </li>
                </ul>
                <p>The Calories will be saved for a future calculation</p>

                {/* Protein Calculation */}
                <h4>Protein Calculation</h4>
                <p>Remember, protein provides 4 calories per gram. Protein would be 
                    calculated from 0.7 - 1.1 grams of protein per pound. The number of grams is determined
                    based on activity level and goal. For someone who is moderately active and wants to maintain
                    their weight, protein would be calculated as follows:
                </p>
                <ul>
                    <li>
                        <b>Protein </b>(U.S Units): <var>Protein Per Pound</var> = <var>Weight</var> * <var>0.9(gram/lb)</var>
                        <p><var>Protein Calories</var> = <var>Protein Per Pound</var> * <var>4</var></p>
                    </li>
                    <li>
                        <b>Protein </b>(Metric Units): <var>Protein Per Kg</var> = <var>Weight</var> * <var>1.98(gram/kg)</var>
                        <p><var>Protein Calories</var> = <var>Protein Per kg</var> * <var>4</var></p>
                    </li>
                </ul>
                <p>The Protein Calories will be saved for a future calculation</p>

                {/* Fat Calculation */}
                <h4>Fat Calculation</h4>
                <p>Remember, fats provide 9 calories per gram. Fats would be 
                    calculated from 0.3 - 0.5 grams of fat per pound. The number of grams is determined
                    based on activity level and goal. For someone who is moderately active and wants to maintain
                    their weight, fat would be calculated as follows:
                </p>
                <ul>
                    <li>
                        <b>Fat </b>(U.S Units): <var>Fat Per Pound</var> = <var>Weight</var> * <var>0.4(gram/lb)</var>
                        <p><var>Fat Calories</var> = <var>Fat Per Pound</var> * <var>9</var></p>
                    </li>
                    <li>
                        <b>Fat </b>(Metric Units): <var>Fat Per Kg</var> = <var>Weight</var> * <var>0.88(gram/kg)</var>
                        <p><var>Fat Calories</var> = <var>Protein Per kg</var> * <var>9</var></p>
                    </li>
                </ul>
                <p>The Fat Calories will be saved for a future calculation</p>

                {/* Carbs Calculation */}
                <h4>Carbs Calculation</h4>
                <p>Remember, carbs provide 4 calories per gram. To calculate carbs, add the protein calories and 
                    the fat calories together. Then, subtract the calories obtained from the TDEE calculation by the 
                    added protein and fat calories. Finally, divide by 4 to obtain the recommended carbohydrate intake:
                </p>
                <ul>
                    <li>
                        <b>Protein and Fat </b>: <var>Protein and Fat Calories</var> = <var>Protein Calories</var> + <var>Fat Calories</var>
                        <p><var>Carb Intake</var> = (<var>Calories</var> - <var>Protein and Fat Calories</var>) / <var>4</var></p>
                    </li>
                </ul>
                
                <h4>Summary</h4>
                <p>With all these calculations, you now have the recommended daily intake for: </p>
                <ul>
                    <li>Calories</li>
                    <li>Carbs</li>
                    <li>Protein</li>
                    <li>Fats</li>
                </ul>


                <h4>Limitations</h4>
                <p className='calculator-info-text'>While macro calculators provide valuable insights into daily caloric and 
                macronutrient needs, they have limitations that users should be aware of. These calculators typically provide 
                generalized recommendations based on factors such as age, gender, weight, height, activity level, and goals. However, 
                individual factors such as metabolism, body composition, and dietary preferences may influence actual nutritional 
                requirements. Additionally, macro calculators may not account for specific health conditions or dietary restrictions,
                 leading to potentially inaccurate recommendations. Therefore, while macro calculators can be a helpful tool for 
                 setting dietary targets, it's essential to use them as a starting point and adjust based on personal experience 
                 and feedback from your body.</p>

                
            </section>
        </>
    )
}