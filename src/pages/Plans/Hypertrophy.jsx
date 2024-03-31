import React from 'react'
import HypertrophyImg from '../../images/hypertrophy_pic.jpg'
import Table from 'react-bootstrap/Table';

export default function Hypertrophy() {
    return (
        <>
            <div className='overview-section-container'>
                <h2 className="section-heading overview-section-heading">Hypertrophy</h2>
                <img className='plans-img' src={HypertrophyImg} alt="" srcset="" />
            </div>

            <div className='progression-section-container'>
                <h2 className='section-heading'>What is hypertrophy training?</h2>
                <p>Hypertrophy training, often referred to as bodybuilding-style training, is a 
                    resistance training approach focused on stimulating muscle growth and increasing
                     muscle size. The primary goal of hypertrophy training is to induce muscular 
                     hypertrophy, which involves an increase in the size of individual muscle fibers
                      through the accumulation of proteins and other cellular components.</p>
                <p>Key characteristics of hypertrophy training include moderate to high training volume, 
                    moderate to high training intensity, and an emphasis on muscle tension, metabolic stress,
                     and muscle damage. Workouts typically involve performing multiple sets of exercises 
                     targeting specific muscle groups, with repetitions ranging from moderate to high 
                     (typically 6-12 repetitions per set) and short rest intervals between sets to maximize
                      metabolic stress and muscle pump.</p>
                <p>Hypertrophy training programs often incorporate a variety of resistance training 
                    techniques, including progressive overload (gradually increasing the weight lifted 
                    over time), exercise variation (utilizing different exercises to target muscles from
                     different angles), and tempo manipulation (controlling the speed of repetitions to 
                     increase time under tension). Additionally, training frequency and split routines 
                     are carefully structured to allow for adequate recovery and muscle repair between 
                     sessions while ensuring sufficient training stimulus to promote hypertrophy.</p>
                <p>Overall, hypertrophy training is popular among individuals looking to build muscle mass,
                     improve muscular definition, and achieve a more aesthetic physique. Whether for 
                     competitive bodybuilding, athletic performance, or general fitness goals, hypertrophy
                      training offers a systematic approach to sculpting and strengthening the body through
                       targeted resistance exercise.</p>
            </div>

            <div className='progression-section-container'>
                <h2 className='section-heading'>Recommended Percentage of 1RM</h2>
                <p>Here's a breakdown of the recommended percentage of 1RM (one-rep max) 
                    for each exercise in the hypertrophy program:</p>

                <p><b>Push</b></p>
                <ul>
                    <li>Bench Press: 70-75% of 1RM</li>
                    <li>Incline Dumbbell Press: 70-75% of 1RM</li>
                    <li>Shoulder Press: 65-70% of 1RM</li>
                </ul>

                <p><b>Pull</b></p>
                <ul>
                    <li>Deadlifts: 75-80% of 1RM</li>
                    <li>Pull-Ups: Bodyweight or use assistance if necessary to hit 8-10 reps</li>
                    <li>Barbell Rows: 70-75% of 1RM</li>
                </ul>

                <p><b>Legs</b></p>
                <ul>
                    <li>Squats: 70-75% of 1RM</li>
                    <li>Romanian Deadlifts: 70-75% of 1RM</li>
                    <li>Leg Press: 65-70% of 1RM</li>
                    <li>Front Squats: 70-75% of 1RM</li>
                    <li>Bulgarian Split Squats: 70-75% of 1RM</li>
                </ul>

                <p><b>All other exercises (accessory movements): </b>Choose weights that allow you 
                    to perform the prescribed number of reps with good form while challenging your muscles.</p>
            </div>

            <div className='progression-section-container'>
                <h2 className='section-heading'>Program</h2>
                <p>The hypertrophy program outlined is designed to optimize muscle growth and development over 
                    an 8-week period. Structured around a push-pull-legs (PPL) split, the program 
                    strategically targets different muscle groups on separate training days, allowing for 
                    sufficient recovery while ensuring a balanced approach to muscular development.</p>
                <p>Each week consists of six training sessions, with a focus on compound exercises supplemented
                     by targeted isolation movements to effectively stimulate muscle hypertrophy. The program
                      emphasizes progressive overload, with an emphasis on increasing training volume over 
                      time to continually challenge the muscles and promote adaptation.</p>
                <p>The workouts are meticulously crafted to incorporate a variety of exercises, rep ranges, and
                     intensity levels to maximize muscle stimulation and adaptation. Compound lifts such as squats, 
                     deadlifts, bench presses, and pull-ups form the foundation of the program, while isolation
                      exercises like bicep curls, tricep extensions, and lateral raises target specific muscle groups 
                      for enhanced definition and symmetry.</p>
                <p>With its comprehensive approach to muscular development and progressive training methodology,
                     this hypertrophy program is ideal for individuals seeking to build lean muscle mass, increase 
                     strength, and achieve a well-rounded physique.</p>
            </div>

            <div className='fitness-plan-table-container'>
                <h3 className='fitness-plan-week-text'>Week 1</h3>
                <h4>Monday (Push - Chest, Shoulders, Triceps)</h4>
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
                            <td>4 sets</td>
                            <td>8-10 reps</td>
                        </tr>
                        <tr>
                            <td>Incline Dumbbell Press</td>
                            <td>4 sets</td>
                            <td>8-10 reps</td>
                        </tr>
                        <tr>
                            <td>Shoulder Press</td>
                            <td>3 sets</td>
                            <td>10-12 reps</td>
                        </tr>
                        <tr>
                            <td>Lateral Raises</td>
                            <td>3 sets</td>
                            <td>10-12 reps</td>
                        </tr>
                        <tr>
                            <td>Tricep Dips</td>
                            <td>3 sets</td>
                            <td>10-12 reps</td>
                        </tr>
                        <tr>
                            <td>Tricep Pushdowns</td>
                            <td>3 sets</td>
                            <td>10-12 reps</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>

            <div className='fitness-plan-table-container'>
                <h4>Tuesday (Pull - Back, Biceps)</h4>
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
                            <td>Deadlifts</td>
                            <td>4 sets</td>
                            <td>6-8 reps</td>
                        </tr>
                        <tr>
                            <td>Pull-Ups</td>
                            <td>4 sets</td>
                            <td>8-10 reps</td>
                        </tr>
                        <tr>
                            <td>Barbell Rows</td>
                            <td>3 sets</td>
                            <td>8-10 reps</td>
                        </tr>
                        <tr>
                            <td>Seated Cable Rows</td>
                            <td>3 sets</td>
                            <td>10-12 reps</td>
                        </tr>
                        <tr>
                            <td>Dumbbell Bicep Curls</td>
                            <td>3 sets</td>
                            <td>10-12 reps</td>
                        </tr>
                        <tr>
                            <td>Hammer Curls</td>
                            <td>3 sets</td>
                            <td>10-12 reps</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>

            <div className='fitness-plan-table-container'>
                <h4>Wednesday (Legs - Quads, Hamstrings, Calves)</h4>
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
                            <td>4 sets</td>
                            <td>8-10 reps</td>
                        </tr>
                        <tr>
                            <td>Romanian Deadlifts</td>
                            <td>4 sets</td>
                            <td>8-10 reps</td>
                        </tr>
                        <tr>
                            <td>Leg Press</td>
                            <td>3 sets</td>
                            <td>10-12 reps</td>
                        </tr>
                        <tr>
                            <td>Leg Curls</td>
                            <td>3 sets</td>
                            <td>10 reps</td>
                        </tr>
                        <tr>
                            <td>Calf Raises</td>
                            <td>3 sets</td>
                            <td>12-15 reps</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>

            <div className='fitness-plan-table-container'>
                <h4>Thursday (Push)</h4>
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
                            <td>Incline Bench Press</td>
                            <td>4 sets</td>
                            <td>8-10 reps</td>
                        </tr>
                        <tr>
                            <td>Dumbell Shoulder Press</td>
                            <td>4 sets</td>
                            <td>8-10 reps</td>
                        </tr>
                        <tr>
                            <td>Chest Flyes</td>
                            <td>3 sets</td>
                            <td>10-12 reps</td>
                        </tr>
                        <tr>
                            <td>Front Raises</td>
                            <td>3 sets</td>
                            <td>10-12 reps</td>
                        </tr>
                        <tr>
                            <td>Tricep Skull Crushers</td>
                            <td>3 sets</td>
                            <td>10-12 reps</td>
                        </tr>
                        <tr>
                            <td>Cable Tricep Extensions</td>
                            <td>3 sets</td>
                            <td>10-12 reps</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>

            <div className='fitness-plan-table-container'>
                <h4>Friday (Pull)</h4>
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
                            <td>T-Bar Rows</td>
                            <td>4 sets</td>
                            <td>8-10 reps</td>
                        </tr>
                        <tr>
                            <td>Lat Pulldowns</td>
                            <td>4 sets</td>
                            <td>10-12 reps</td>
                        </tr>
                        <tr>
                            <td>Seated Rows</td>
                            <td>3 sets</td>
                            <td>10-12 reps</td>
                        </tr>
                        <tr>
                            <td>Face Pulls</td>
                            <td>3 sets</td>
                            <td>10-12 reps</td>
                        </tr>
                        <tr>
                            <td>Reverse Curls</td>
                            <td>3 sets</td>
                            <td>10-12 reps</td>
                        </tr>
                        <tr>
                            <td>Concentration Curls</td>
                            <td>3 sets</td>
                            <td>10-12 reps</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>

            <div className='fitness-plan-table-container'>
                <h4>Saturday (Legs)</h4>
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
                            <td>4 sets</td>
                            <td>8-10 reps</td>
                        </tr>
                        <tr>
                            <td>Bulgarian Split Squats</td>
                            <td>4 sets</td>
                            <td>10-12 reps</td>
                        </tr>
                        <tr>
                            <td>Leg Extensions</td>
                            <td>3 sets</td>
                            <td>10-12 reps</td>
                        </tr>
                        <tr>
                            <td>Romanian Deadlifts</td>
                            <td>3 sets</td>
                            <td>10-12 reps</td>
                        </tr>
                        <tr>
                            <td>Seated Calf Raises</td>
                            <td>3 sets</td>
                            <td>12-15 reps</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>

            <div className='progression-section-container fitness-plans-ending-section'>
                <h2 className='section-heading'>Weeks 2 - 8</h2>
                <p>To ensure progressive overload and continued hypertrophy gains, you can adjust 
                    the weight and reps every other week in several ways:</p>
                
                <p><b>Increase Weight Gradually: </b>As you become stronger and more proficient
                 in each exercise, gradually increase the weight lifted. Aim to increase the 
                 weight by small increments, such as 2.5-5 lbs for upper body exercises and 
                 5-10 lbs for lower body exercises.</p>

                <p><b>Adjust Repetition Range: </b>Varying the repetition range can help stimulate
                 muscle growth. For example, you can cycle between lower reps (4-6) with heavier 
                 weights and higher reps (8-12) with lighter weights. This variation ensures that 
                 you're targeting different muscle fibers and promoting overall muscle development.</p>
            </div>
            
            
        </>
    )
}