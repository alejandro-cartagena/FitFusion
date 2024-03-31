import React from 'react'
import CalisthenicsImg from '../../images/calisthenics_pic.jpg'
import Table from 'react-bootstrap/Table';

export default function Calisthenics() {
    return (
        <>
            <div className='overview-section-container'>
                <h2 className="section-heading overview-section-heading">Calisthenics</h2>
                <img className='plans-img' src={CalisthenicsImg} alt="" srcset="" />
            </div>

            <div className='progression-section-container'>
                <h2 className='section-heading'>What is calisthenic training?</h2>
                <p>Calisthenics training, often referred to as bodyweight training, is a form of
                     exercise that uses only the individual's body weight for resistance. It's a 
                     versatile and accessible approach to fitness that requires minimal equipment, 
                     making it suitable for anyone, anywhere. Calisthenics exercises typically 
                     involve movements that engage multiple muscle groups simultaneously, promoting
                      functional strength, flexibility, and coordination.</p>
                <p>At its core, calisthenics emphasizes mastering fundamental bodyweight exercises 
                    such as push-ups, pull-ups, squats, lunges, and dips. These exercises can be 
                    performed using various grips, stances, and ranges of motion to target different 
                    muscle groups and increase the difficulty as one progresses. Additionally, 
                    calisthenics often incorporates dynamic movements like jumps, hops, and plyometrics
                     to enhance power and explosiveness.</p>
                <p>One of the key principles of calisthenics is progressive overload, which involves 
                    gradually increasing the difficulty or intensity of exercises over time to stimulate
                     muscle growth and strength gains. This can be achieved by progressing to more advanced
                      variations of exercises, increasing the number of repetitions or sets, manipulating 
                      leverage, or incorporating equipment like resistance bands or gymnastics rings. 
                      Overall, calisthenics offers a holistic approach to fitness, combining strength,
                       endurance, mobility, and athleticism in a way that fosters functional movement
                        patterns and overall well-being.</p>
            </div>

            <div className='progression-section-container'>
                <h2 className='section-heading'>1RM in Calisthenics?</h2>
                <p>In calisthenics, you don't typically use a percentage of 1RM (one-rep max) like
                     you would in weightlifting because you're working with your body weight rather 
                     than external loads. Instead, you focus on mastering the movements and 
                     increasing the difficulty or volume over time to continue challenging your
                      muscles.</p>
            </div>

            <div className='progression-section-container'>
                <h2 className='section-heading'>Program</h2>
                <p>The calisthenics program presented is a comprehensive eight-week training regimen 
                    designed to enhance strength, muscular endurance, and overall fitness using bodyweight 
                    exercises. Tailored for individuals seeking to embark on a calisthenics journey 
                    or advance their current training, this program offers a structured approach to 
                    building functional strength, improving mobility, and refining body control.</p>
                <p>Each session includes a combination of foundational calisthenics exercises and 
                    advanced variations, allowing individuals to progressively challenge themselves as
                     they adapt and improve. Additionally, the program incorporates principles of 
                     periodization, alternating between higher-repetition, endurance-focused workouts 
                     and lower-repetition, strength-focused workouts to optimize adaptation and prevent
                      plateaus.</p>
                <p>With a clear emphasis on proper form, technique, and intensity, this calisthenics program 
                    provides a structured framework for individuals to embark on a transformative fitness 
                    journey, cultivating strength, agility, and mastery of bodyweight movements over the 
                    course of eight weeks.</p>
            </div>

            <div className='fitness-plan-table-container'>
                <h3 className='fitness-plan-week-text'>Week 1</h3>
                <h4>Monday (Upper Body and Core)</h4>
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
                            <td>Push-Ups</td>
                            <td>4 sets</td>
                            <td>10-20 reps</td>
                        </tr>
                        <tr>
                            <td>Pull-Ups or Bodyweight Rows</td>
                            <td>4 sets</td>
                            <td>8-12 reps</td>
                        </tr>
                        <tr>
                            <td>Dips</td>
                            <td>3 sets</td>
                            <td>8-15 reps</td>
                        </tr>
                        <tr>
                            <td>Plank</td>
                            <td>3 sets</td>
                            <td>30-60 seconds</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>

            <div className='fitness-plan-table-container'>
                <h4>Tuesday (Lower Body and Conditioning)</h4>
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
                            <td>Bodyweight Squats</td>
                            <td>4 sets</td>
                            <td>10-20 reps</td>
                        </tr>
                        <tr>
                            <td>Lunges</td>
                            <td>4 sets</td>
                            <td>10-12 reps</td>
                        </tr>
                        <tr>
                            <td>Glute Bridges</td>
                            <td>3 sets</td>
                            <td>12-15 reps</td>
                        </tr>
                        <tr>
                            <td>Mountain Climbers</td>
                            <td>3 sets</td>
                            <td>20-30 seconds</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>

            <div className='fitness-plan-table-container'>
                <h4>Thursday (Upper Body and Core)</h4>
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
                            <td>Pike Push-Ups</td>
                            <td>4 sets</td>
                            <td>8-12 reps</td>
                        </tr>
                        <tr>
                            <td>Chin-Ups or Inverted Rows</td>
                            <td>4 sets</td>
                            <td>8-12 reps</td>
                        </tr>
                        <tr>
                            <td>Decline Push-Ups (feet elevated)</td>
                            <td>3 sets</td>
                            <td>8-12 reps</td>
                        </tr>
                        <tr>
                            <td>Russian Twists</td>
                            <td>3 sets</td>
                            <td>12-15 reps</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>

            <div className='fitness-plan-table-container'>
                <h4>Friday (Lower Body and Conditioning)</h4>
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
                            <td>Single-Leg Romanian Deadlifts</td>
                            <td>4 sets</td>
                            <td>8-10 reps</td>
                        </tr>
                        <tr>
                            <td>Bulgarian Split Squats</td>
                            <td>4 sets</td>
                            <td>8-10 reps</td>
                        </tr>
                        <tr>
                            <td>Calf Raises</td>
                            <td>3 sets</td>
                            <td>15-20 reps</td>
                        </tr>
                        <tr>
                            <td>Burpees</td>
                            <td>3 sets</td>
                            <td>10-12 reps</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>

            <div className='fitness-plan-table-container'>
                <h4>Saturday (Full Body Circuit)</h4>
                <p>Perform each exercise in a circuit format with minimal rest between 
                    exercises. Rest for 1-2 minutes between circuits. Repeat for 3-4 
                    circuits.</p>
                <ol>
                    <li>Push-Ups: 12 reps</li>
                    <li>Bodyweight Squats: 15 reps</li>
                    <li>Pull-Ups: 8 reps</li>
                    <li>Plank: 30 seconds</li>
                </ol>
            </div>

            <div className='progression-section-container fitness-plans-ending-section'>
                <h2 className='section-heading'>Weeks 2 - 8</h2>
                <p>You can apply the concept of progressive overload by adjusting the
                     difficulty of the exercises. For example:</p>
                <ul>
                    <li>Increasing the amount of reps</li>
                    <li>Increase the difficulty of push-ups by doing them on an incline or decline.</li>
                    <li>Progress to more challenging variations of pull-ups, such as wide grip, close grip, or one-arm pull-ups.</li>
                    <li>Make bodyweight squats more challenging by performing pistol squats or jumping squats.</li>
                    <li>Increase the range of motion or add explosiveness to exercises like lunges or burpees.</li>
                </ul>
                <p>The goal is to continuously challenge your muscles by making the exercises more
                     difficult as you get stronger. Focus on proper form and technique, and gradually 
                     increase the intensity or volume of your workouts to stimulate muscle growth and 
                     improve strength and endurance.</p>
            </div>
            
            
        </>
    )
}