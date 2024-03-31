import React from 'react'
import StrengthImg from '../../images/strength_pic.jpg'
import Table from 'react-bootstrap/Table';

export default function Strength() {
    return (
        <>
            <div className='overview-section-container'>
                <h2 className="section-heading overview-section-heading">Strength</h2>
                <img className='plans-img' src={StrengthImg} alt="" srcset="" />
            </div>

            <div className='progression-section-container'>
                <h2 className='section-heading'>What is strength training?</h2>
                <p>Strength training, also known as resistance training or weightlifting, is a form of exercise focused on increasing muscular strength and power. Unlike other forms of exercise that primarily target cardiovascular fitness or flexibility, strength training emphasizes the development of muscle mass and the ability to generate force against resistance. This resistance can come from various sources, including free weights, weight machines, resistance bands, or even body weight.</p>
                <p>The primary goal of strength training is to progressively overload the muscles by lifting heavier weights or performing more challenging exercises over time. This gradual increase in intensity stimulates muscle fibers to adapt and grow stronger, leading to improvements in overall strength, muscle size, and functional capacity. Strength training can benefit individuals of all ages and fitness levels, from beginners looking to build a foundation of strength to athletes seeking to enhance their performance in sports or competitions.</p>
                <p>In addition to its physical benefits, strength training offers a range of health advantages, including increased bone density, improved joint health, enhanced metabolism, and better body composition. Moreover, strength training can have positive effects on mental well-being, promoting feelings of accomplishment, confidence, and resilience. Whether performed as part of a comprehensive fitness regimen or as a standalone activity, strength training is a cornerstone of any well-rounded exercise program, offering numerous benefits for both physical and mental health.</p>
            </div>

            <div className='progression-section-container'>
                <h2 className='section-heading'>Test your max</h2>
                <p>Before starting the strength program, you will need to know your level of strength. Test and record your 1RM in the following lifts:</p>
                <ul>
                    <li>Bench Press</li>
                    <li>Squat</li>
                    <li>Deadlift</li>
                    <li>Standing Overhead Press</li>
                    <li>Bent Over Rows</li>
                </ul>
                <p><b>All other exercises (accessory movements): </b>Choose weights that allow you 
                    to perform the prescribed number of reps with good form while challenging your muscles.</p>
            </div>

            <div className='progression-section-container'>
                <h2 className='section-heading'>Program</h2>
                <p>The strength program provided follows a classic upper-lower split, a popular training protocol among strength athletes and fitness enthusiasts alike. This structured approach divides training sessions into upper body and lower body workouts, allowing for targeted muscle group training and optimal recovery between sessions. Each week, individuals will engage in four workouts: two focusing on the upper body and two targeting the lower body.</p>
                <p>The upper body workouts are designed to develop strength and muscularity in the chest, back, shoulders, and arms. Exercises such as bench presses, rows, overhead presses, and pull-ups are included to target major muscle groups comprehensively. With a focus on compound movements, these workouts emphasize multi-joint exercises that recruit multiple muscle groups simultaneously, enabling individuals to lift heavier weights and build functional strength effectively.</p>
                <p>On lower body days, the emphasis shifts to developing strength and power in the lower body muscles, including the quadriceps, hamstrings, glutes, and calves. Squats, deadlifts, lunges, and calf raises are among the primary exercises incorporated into these workouts, providing a balanced approach to lower body training</p>
                <p>By progressively increasing the weight lifted and adjusting the number of sets and reps as needed, individuals can challenge their muscles and promote continuous strength gains over the course of the program. Overall, this strength-focused regimen aims to enhance muscular strength, improve body composition, and foster overall physical resilience through structured and progressive training.</p>
            </div>

            <div className='fitness-plan-table-container'>
                <h3 className='fitness-plan-week-text'>Week 1</h3>
                <h4>Monday (Legs)</h4>
                <Table striped bordered hover className='fitness-plan-table'>
                    <thead>
                    <tr>
                        <th>Exercise</th>
                        <th>Sets</th>
                        <th>Reps</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Squats</td>
                            <td>3 sets</td>
                            <td>5 reps (70 - 75% of 1RM)</td>
                        </tr>
                        <tr>
                            <td>Deadlifts</td>
                            <td>3 sets</td>
                            <td>5 reps (70 - 75% of 1RM)</td>
                        </tr>
                        <tr>
                            <td>Leg Press</td>
                            <td>3 sets</td>
                            <td>8 reps (65 - 70% of 1RM)</td>
                        </tr>
                        <tr>
                            <td>Calf Raises</td>
                            <td>3 sets</td>
                            <td>10 reps</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>

            <div className='fitness-plan-table-container'>
                <h4>Tuesday (Upper Body - Push)</h4>
                <Table striped bordered hover className='fitness-plan-table'>
                    <thead>
                    <tr>
                        <th>Exercise</th>
                        <th>Sets</th>
                        <th>Reps</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bench Press</td>
                            <td>3 sets</td>
                            <td>5 reps (70 - 75% of 1RM)</td>
                        </tr>
                        <tr>
                            <td>Overhead Press</td>
                            <td>3 sets</td>
                            <td>5 reps (70 - 75% of 1RM)</td>
                        </tr>
                        <tr>
                            <td>Chest Flyes</td>
                            <td>3 sets</td>
                            <td>8 reps (65 - 70% of 1RM)</td>
                        </tr>
                        <tr>
                            <td>Tricep Dips</td>
                            <td>3 sets</td>
                            <td>10 reps</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>

            <div className='fitness-plan-table-container'>
                <h4>Thursday (Legs)</h4>
                <Table striped bordered hover className='fitness-plan-table'>
                    <thead>
                    <tr>
                        <th>Exercise</th>
                        <th>Sets</th>
                        <th>Reps</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Front Squats</td>
                            <td>3 sets</td>
                            <td>5 reps (70 - 75% of 1RM)</td>
                        </tr>
                        <tr>
                            <td>Romanian Deadlifts</td>
                            <td>3 sets</td>
                            <td>5 reps (70 - 75% of 1RM)</td>
                        </tr>
                        <tr>
                            <td>Lunges</td>
                            <td>3 sets</td>
                            <td>8 reps (65 - 70% of 1RM)</td>
                        </tr>
                        <tr>
                            <td>Leg Curls</td>
                            <td>3 sets</td>
                            <td>10 reps</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>

            <div className='fitness-plan-table-container'>
                <h4>Friday (Upper Body - Pull)</h4>
                <Table striped bordered hover className='fitness-plan-table'>
                    <thead>
                    <tr>
                        <th>Exercise</th>
                        <th>Sets</th>
                        <th>Reps</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Pull-Ups/Assisted Pull-Ups</td>
                            <td>3 sets</td>
                            <td>5 reps (70 - 75% of 1RM)</td>
                        </tr>
                        <tr>
                            <td>Bent Over Rows</td>
                            <td>3 sets</td>
                            <td>5 reps (70 - 75% of 1RM)</td>
                        </tr>
                        <tr>
                            <td>Barbell Shrugs</td>
                            <td>3 sets</td>
                            <td>8 reps (65 - 70% of 1RM)</td>
                        </tr>
                        <tr>
                            <td>Bicep Curls</td>
                            <td>3 sets</td>
                            <td>10 reps</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>

            <div className='progression-section-container fitness-plans-ending-section'>
                <h2 className='section-heading'>Weeks 2 - 8</h2>
                <p>Continue with the same pattern, increasing the weight lifted by 2.5-5% of 1RM each week while maintaining the same rep and 
                    set scheme. Adjustments can be made based on individual fitness levels and progress. Always ensure proper form and
                     consult with a fitness professional if needed.</p>
            </div>
            
            
        </>
        
    )
}