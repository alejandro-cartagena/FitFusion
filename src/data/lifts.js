const lifts = [
  // Biceps exercises
  {
    id: 1,
    name: 'Bicep Curls',
    description:
      'Bicep curls are a classic exercise for building strength and size in the biceps muscles.',
    video: 'https://example.com/bicep_curls_video',
    muscle: 'biceps',
  },
  {
    id: 2,
    name: 'Hammer Curls',
    description:
      'Hammer curls target the biceps brachii muscle along with the brachialis and brachioradialis muscles.',
    video: 'https://example.com/hammer_curls_video',
    muscle: 'biceps',
  },
  {
    id: 3,
    name: 'Chin-Ups',
    description:
      'Chin-ups primarily work the biceps, along with the back and shoulders.',
    video: 'https://example.com/chin_ups_video',
    muscle: 'biceps',
  },
  {
    id: 4,
    name: 'Preacher Curls',
    description:
      'Preacher curls isolate the biceps muscles and are performed using a preacher bench.',
    video: 'https://example.com/preacher_curls_video',
    muscle: 'biceps',
  },
  {
    id: 5,
    name: 'Concentration Curls',
    description:
      'Concentration curls target the biceps muscles and are performed sitting on a bench with the elbow resting on the inner thigh.',
    video: 'https://example.com/concentration_curls_video',
    muscle: 'biceps',
  },
  // Chest exercises
  {
    id: 6,
    name: 'Bench Press',
    description:
      'The bench press primarily targets the chest muscles (pectoralis major), but also works the shoulders and triceps.',
    video: 'https://example.com/bench_press_video',
    muscle: 'chest',
  },
  {
    id: 7,
    name: 'Push-Ups',
    description:
      'Push-ups are a bodyweight exercise that primarily targets the chest muscles, along with the shoulders and triceps.',
    video: 'https://example.com/push_ups_video',
    muscle: 'chest',
  },
  {
    id: 8,
    name: 'Dumbbell Flyes',
    description:
      'Dumbbell flyes isolate the chest muscles and are performed lying on a bench with dumbbells in hand.',
    video: 'https://example.com/dumbbell_flyes_video',
    muscle: 'chest',
  },
  {
    id: 9,
    name: 'Incline Bench Press',
    description:
      'Incline bench press targets the upper chest muscles and is performed on an inclined bench.',
    video: 'https://example.com/incline_bench_press_video',
    muscle: 'chest',
  },
  {
    id: 10,
    name: 'Chest Dips',
    description:
      'Chest dips primarily target the lower chest muscles and are performed using parallel bars.',
    video: 'https://example.com/chest_dips_video',
    muscle: 'chest',
  },
  // Front Delt exercises
  {
    id: 11,
    name: 'Shoulder Press',
    description:
      'Shoulder press targets the deltoid muscles and is performed by pressing a weight overhead while seated or standing.',
    video: 'https://example.com/shoulder_press_video',
    muscle: 'frontDelt',
  },
  {
    id: 12,
    name: 'Lateral Raises',
    description:
      'Lateral raises isolate the lateral deltoid muscles and are performed by raising the arms to the sides against resistance.',
    video: 'https://example.com/lateral_raises_video',
    muscle: 'frontDelt',
  },
  {
    id: 13,
    name: 'Front Raises',
    description:
      'Front raises target the anterior deltoid muscles and are performed by raising the arms to the front against resistance.',
    video: 'https://example.com/front_raises_video',
    muscle: 'frontDelt',
  },
  {
    id: 14,
    name: 'Military Press',
    description:
      'Military press is a compound exercise that targets the front delts along with other shoulder muscles, such as the triceps and upper back.',
    video: 'https://example.com/military_press_video',
    muscle: 'frontDelt',
  },
  {
    id: 15,
    name: 'Upright Rows',
    description:
      'Upright rows primarily target the front deltoids and upper traps, along with other muscles of the shoulder and upper back.',
    video: 'https://example.com/upright_rows_video',
    muscle: 'frontDelt',
  },
  // Traps exercises
  {
    id: 16,
    name: 'Barbell Shrugs',
    description:
      'Barbell shrugs target the trapezius muscles and are performed by lifting the shoulders in a shrugging motion against resistance.',
    video: 'https://example.com/barbell_shrugs_video',
    muscle: 'traps',
  },
  {
    id: 17,
    name: 'Dumbbell Shrugs',
    description:
      'Dumbbell shrugs isolate the trapezius muscles and are performed by lifting the shoulders in a shrugging motion against resistance using dumbbells.',
    video: 'https://example.com/dumbbell_shrugs_video',
    muscle: 'traps',
  },
  {
    id: 18,
    name: 'Farmers Walk',
    description:
      'Farmers walk primarily targets the traps, along with other muscles of the upper body, core, and grip strength.',
    video: 'https://example.com/farmers_walk_video',
    muscle: 'traps',
  },
  {
    id: 19,
    name: 'Behind The Back Shrug',
    description:
      'Behind the back shrug is a variation of the shrug exercise that targets the traps from a different angle by lifting the shoulders behind the body against resistance.',
    video: 'https://example.com/behind_the_back_shrug_video',
    muscle: 'traps',
  },
  {
    id: 20,
    name: 'Face Pulls',
    description:
      'Face pulls target the traps, rear delts, and rotator cuff muscles, and are performed using a cable machine with a rope attachment.',
    video: 'https://example.com/face_pulls_video',
    muscle: 'traps',
  },
  // Neck exercises
  {
    id: 21,
    name: 'Placeholder Neck Exercise 1',
    description: 'Placeholder description for neck exercise 1.',
    video: 'https://example.com/placeholder_neck_exercise_1_video',
    muscle: 'neck',
  },
  {
    id: 22,
    name: 'Placeholder Neck Exercise 2',
    description: 'Placeholder description for neck exercise 2.',
    video: 'https://example.com/placeholder_neck_exercise_2_video',
    muscle: 'neck',
  },
  {
    id: 23,
    name: 'Placeholder Neck Exercise 3',
    description: 'Placeholder description for neck exercise 3.',
    video: 'https://example.com/placeholder_neck_exercise_3_video',
    muscle: 'neck',
  },
  {
    id: 24,
    name: 'Placeholder Neck Exercise 4',
    description: 'Placeholder description for neck exercise 4.',
    video: 'https://example.com/placeholder_neck_exercise_4_video',
    muscle: 'neck',
  },
  {
    id: 25,
    name: 'Placeholder Neck Exercise 5',
    description: 'Placeholder description for neck exercise 5.',
    video: 'https://example.com/placeholder_neck_exercise_5_video',
    muscle: 'neck',
  },
  // Abs exercises
  {
    id: 26,
    name: 'Crunches',
    description:
      'Crunches target the rectus abdominis muscles and are performed by curling the upper body towards the knees while lying on the back.',
    video: 'https://example.com/crunches_video',
    muscle: 'abs',
  },
  {
    id: 27,
    name: 'Leg Raises',
    description:
      'Leg raises primarily target the lower abdominal muscles and are performed by raising the legs while lying on the back.',
    video: 'https://example.com/leg_raises_video',
    muscle: 'abs',
  },
  {
    id: 28,
    name: 'Russian Twists',
    description:
      'Russian twists target the obliques and core muscles and are performed by rotating the torso from side to side while holding a weight or medicine ball.',
    video: 'https://example.com/russian_twists_video',
    muscle: 'abs',
  },
  {
    id: 29,
    name: 'Plank',
    description:
      'Plank is an isometric exercise that targets the entire core, including the rectus abdominis, obliques, and transverse abdominis muscles.',
    video: 'https://example.com/plank_video',
    muscle: 'abs',
  },
  {
    id: 30,
    name: 'Hanging Leg Raises',
    description:
      'Hanging leg raises target the lower abs and hip flexors and are performed by hanging from a bar and raising the legs.',
    video: 'https://example.com/hanging_leg_raises_video',
    muscle: 'abs',
  },
  // Forearms exercises
  {
    id: 31,
    name: 'Wrist Curls',
    description:
      'Wrist curls target the forearm muscles and are performed by curling the wrist while holding a weight.',
    video: 'https://example.com/wrist_curls_video',
    muscle: 'forearms',
  },
  {
    id: 32,
    name: 'Reverse Wrist Curls',
    description:
      'Reverse wrist curls target the forearm muscles and are performed by curling the wrist in the opposite direction against resistance.',
    video: 'https://example.com/reverse_wrist_curls_video',
    muscle: 'forearms',
  },
  {
    id: 33,
    name: 'Forearm Pronation and Supination',
    description:
      'Forearm pronation and supination exercises target the muscles responsible for rotating the forearm and are performed by rotating the wrist with a weight in hand.',
    video: 'https://example.com/forearm_pronation_supination_video',
    muscle: 'forearms',
  },
  {
    id: 34,
    name: 'Barbell Reverse Curls',
    description:
      'Barbell reverse curls target the brachioradialis muscle of the forearms and are performed by curling the barbell with an overhand grip.',
    video: 'https://example.com/barbell_reverse_curls_video',
    muscle: 'forearms',
  },
  {
    id: 35,
    name: 'Plate Pinch Grip',
    description:
      'Plate pinch grip exercises target the forearm muscles and grip strength and are performed by holding weight plates together with the fingertips.',
    video: 'https://example.com/plate_pinch_grip_video',
    muscle: 'forearms',
  },
  // Quads exercises
  {
    id: 36,
    name: 'Squats',
    description:
      'Squats are a compound exercise that primarily target the quadriceps muscles, along with the glutes, hamstrings, and lower back.',
    video: 'https://example.com/squats_video',
    muscle: 'quads',
  },
  {
    id: 37,
    name: 'Leg Press',
    description:
      'Leg press primarily targets the quadriceps muscles and is performed by pressing weight away from the body using the legs while seated.',
    video: 'https://example.com/leg_press_video',
    muscle: 'quads',
  },
  {
    id: 38,
    name: 'Lunges',
    description:
      'Lunges target the quadriceps, glutes, and hamstrings and are performed by stepping forward or backward into a lunge position while holding weights.',
    video: 'https://example.com/lunges_video',
    muscle: 'quads',
  },
  {
    id: 39,
    name: 'Hack Squats',
    description:
      'Hack squats target the quadriceps muscles and are performed using a hack squat machine or a barbell.',
    video: 'https://example.com/hack_squats_video',
    muscle: 'quads',
  },
  {
    id: 40,
    name: 'Step-Ups',
    description:
      'Step-ups primarily target the quadriceps, along with the glutes and hamstrings, and are performed by stepping onto a raised platform with one leg.',
    video: 'https://example.com/step_ups_video',
    muscle: 'quads',
  },
  // Obliques exercises
  {
    id: 41,
    name: 'Russian Twists',
    description:
      'Russian twists target the obliques and core muscles and are performed by rotating the torso from side to side while holding a weight or medicine ball.',
    video: 'https://example.com/russian_twists_video',
    muscle: 'obliques',
  },
  {
    id: 42,
    name: 'Side Plank',
    description:
      'Side plank primarily targets the obliques and lateral core muscles and is performed by supporting the body on one forearm and the side of the foot.',
    video: 'https://example.com/side_plank_video',
    muscle: 'obliques',
  },
  {
    id: 43,
    name: 'Woodchoppers',
    description:
      'Woodchoppers target the obliques and core muscles and are performed by rotating the torso while holding a weight or resistance band.',
    video: 'https://example.com/woodchoppers_video',
    muscle: 'obliques',
  },
  {
    id: 44,
    name: 'Bicycle Crunches',
    description:
      'Bicycle crunches target the obliques and core muscles and are performed by bringing the elbow to the opposite knee while lying on the back and pedaling the legs in a bicycle motion.',
    video: 'https://example.com/bicycle_crunches_video',
    muscle: 'obliques',
  },
  {
    id: 45,
    name: 'Standing Side Crunches',
    description:
      'Standing side crunches target the obliques and core muscles and are performed by bending sideways at the waist while holding a weight.',
    video: 'https://example.com/standing_side_crunches_video',
    muscle: 'obliques',
  },
  // Upper Back exercises
  {
    id: 46,
    name: 'Pull-Ups',
    description:
      'Pull-ups primarily target the upper back muscles, including the latissimus dorsi and traps, along with the biceps and forearms.',
    video: 'https://example.com/pull_ups_video',
    muscle: 'upper back',
  },
  {
    id: 47,
    name: 'Seated Cable Rows',
    description:
      'Seated cable rows target the upper back muscles, including the lats and rhomboids, and are performed using a cable machine with a rowing attachment.',
    video: 'https://example.com/seated_cable_rows_video',
    muscle: 'upper back',
  },
  {
    id: 48,
    name: 'Bent Over Rows',
    description:
      'Bent over rows target the upper back muscles, including the traps and rhomboids, along with the biceps and forearms.',
    video: 'https://example.com/bent_over_rows_video',
    muscle: 'upper back',
  },
  {
    id: 49,
    name: 'T-Bar Rows',
    description:
      'T-bar rows target the upper back muscles, including the lats and traps, and are performed using a T-bar rowing machine or a barbell attached to a landmine.',
    video: 'https://example.com/t_bar_rows_video',
    muscle: 'upper back',
  },
  {
    id: 50,
    name: 'Face Pulls',
    description:
      'Face pulls target the traps, rear delts, and rotator cuff muscles, and are performed using a cable machine with a rope attachment.',
    video: 'https://example.com/face_pulls_video',
    muscle: 'upper back',
  },
  // Rear Delts exercises
  {
    id: 51,
    name: 'Reverse Flyes',
    description:
      'Reverse flyes target the rear deltoids and are performed by raising the arms to the sides against resistance while bent over.',
    video: 'https://example.com/reverse_flyes_video',
    muscle: 'rear delts',
  },
  {
    id: 52,
    name: 'Face Pulls',
    description:
      'Face pulls target the traps, rear delts, and rotator cuff muscles, and are performed using a cable machine with a rope attachment.',
    video: 'https://example.com/face_pulls_video',
    muscle: 'rear delts',
  },
  {
    id: 53,
    name: 'Rear Delt Fly Machine',
    description:
      'Rear delt fly machine isolates the rear deltoids and is performed using a specialized machine with a rear delt fly arm.',
    video: 'https://example.com/rear_delt_fly_machine_video',
    muscle: 'rear delts',
  },
  {
    id: 54,
    name: 'Bent Over Dumbbell Raises',
    description:
      'Bent over dumbbell raises target the rear deltoids and are performed by bending at the waist and raising dumbbells to the sides against resistance.',
    video: 'https://example.com/bent_over_dumbbell_raises_video',
    muscle: 'rear delts',
  },
  {
    id: 55,
    name: 'Cable Face Pulls',
    description:
      'Cable face pulls target the rear delts and upper back muscles and are performed using a cable machine with a rope attachment pulled towards the face.',
    video: 'https://example.com/cable_face_pulls_video',
    muscle: 'rear delts',
  },
  // Lats exercises
  {
    id: 56,
    name: 'Pull-Ups',
    description:
      'Pull-ups primarily target the upper back muscles, including the latissimus dorsi and traps, along with the biceps and forearms.',
    video: 'https://example.com/pull_ups_video',
    muscle: 'lats',
  },
  {
    id: 57,
    name: 'Lat Pulldowns',
    description:
      'Lat pulldowns target the latissimus dorsi muscles and are performed by pulling a bar down to the chest while seated.',
    video: 'https://example.com/lat_pulldowns_video',
    muscle: 'lats',
  },
  {
    id: 58,
    name: 'Bent Over Rows',
    description:
      'Bent over rows target the upper back muscles, including the traps and rhomboids, along with the biceps and forearms.',
    video: 'https://example.com/bent_over_rows_video',
    muscle: 'lats',
  },
  {
    id: 59,
    name: 'One-Arm Dumbbell Rows',
    description:
      'One-arm dumbbell rows target the latissimus dorsi and other upper back muscles and are performed by rowing a dumbbell to the side of the torso while bent over.',
    video: 'https://example.com/one_arm_dumbbell_rows_video',
    muscle: 'lats',
  },
  {
    id: 60,
    name: 'Machine Pullovers',
    description:
      'Machine pullovers target the lats and chest muscles and are performed using a machine with a pullover arm.',
    video: 'https://example.com/machine_pullovers_video',
    muscle: 'lats',
  },
  // Triceps exercises
  {
    id: 61,
    name: 'Tricep Dips',
    description:
      'Tricep dips target the triceps muscles and are performed by lowering and raising the body using parallel bars.',
    video: 'https://example.com/tricep_dips_video',
    muscle: 'triceps',
  },
  {
    id: 62,
    name: 'Close Grip Bench Press',
    description:
      'Close grip bench press targets the triceps muscles and is performed by gripping the barbell with hands closer together than shoulder-width and pressing the weight upwards from the chest.',
    video: 'https://example.com/close_grip_bench_press_video',
    muscle: 'triceps',
  },
  {
    id: 63,
    name: 'Tricep Pushdowns',
    description:
      'Tricep pushdowns target the triceps muscles and are performed by pushing a cable attachment downwards while standing.',
    video: 'https://example.com/tricep_pushdowns_video',
    muscle: 'triceps',
  },
  {
    id: 64,
    name: 'Skull Crushers',
    description:
      'Skull crushers target the triceps muscles and are performed by lowering a weight to the forehead while lying on a bench and then extending the arms.',
    video: 'https://example.com/skull_crushers_video',
    muscle: 'triceps',
  },
  {
    id: 65,
    name: 'Overhead Tricep Extensions',
    description:
      'Overhead tricep extensions target the triceps muscles and are performed by extending the arms overhead with a weight.',
    video: 'https://example.com/overhead_tricep_extensions_video',
    muscle: 'triceps',
  },
  // Calves exercises
  {
    id: 66,
    name: 'Calf Raises',
    description:
      'Calf raises target the calf muscles and are performed by raising the heels while standing.',
    video: 'https://example.com/calf_raises_video',
    muscle: 'calves',
  },
  {
    id: 67,
    name: 'Seated Calf Raises',
    description:
      'Seated calf raises target the calf muscles and are performed by raising the heels while seated.',
    video: 'https://example.com/seated_calf_raises_video',
    muscle: 'calves',
  },
  {
    id: 68,
    name: 'Box Jumps',
    description:
      'Box jumps are plyometric exercises that target the calves and are performed by jumping onto and off of a box or platform.',
    video: 'https://example.com/box_jumps_video',
    muscle: 'calves',
  },
  {
    id: 69,
    name: 'Jump Rope',
    description:
      'Jump rope is a cardiovascular exercise that also targets the calf muscles and is performed by jumping over a rope.',
    video: 'https://example.com/jump_rope_video',
    muscle: 'calves',
  },
  {
    id: 70,
    name: 'Standing Calf Machine',
    description:
      'Standing calf machine is a resistance exercise that targets the calf muscles and is performed using a machine with a weighted lever.',
    video: 'https://example.com/standing_calf_machine_video',
    muscle: 'calves',
  },
  // Glutes exercises
  {
    id: 71,
    name: 'Squats',
    description:
      'Squats are a compound exercise that primarily target the glutes, quadriceps, hamstrings, and lower back muscles.',
    video: 'https://example.com/squats_video',
    muscle: 'glutes',
  },
  {
    id: 72,
    name: 'Deadlifts',
    description:
      'Deadlifts target the glutes, hamstrings, lower back, and traps, and are performed by lifting a barbell or other weighted object from the ground to an upright position.',
    video: 'https://example.com/deadlifts_video',
    muscle: 'glutes',
  },
  {
    id: 73,
    name: 'Hip Thrusts',
    description:
      'Hip thrusts target the glutes and hamstrings and are performed by thrusting the hips upward while lying on the ground with the shoulders elevated on a bench.',
    video: 'https://example.com/hip_thrusts_video',
    muscle: 'glutes',
  },
  {
    id: 74,
    name: 'Lunges',
    description:
      'Lunges target the glutes, quadriceps, and hamstrings and are performed by stepping forward or backward into a lunge position while holding weights.',
    video: 'https://example.com/lunges_video',
    muscle: 'glutes',
  },
  {
    id: 75,
    name: 'Bulgarian Split Squats',
    description:
      'Bulgarian split squats target the glutes, quadriceps, and hamstrings and are performed by lowering the body into a lunge position with one foot elevated behind on a bench or platform.',
    video: 'https://example.com/bulgarian_split_squats_video',
    muscle: 'glutes',
  },
  // Lower Back exercises
  {
    id: 76,
    name: 'Deadlifts',
    description:
      'Deadlifts target the lower back muscles along with the glutes, hamstrings, and traps, and are performed by lifting a barbell or other weighted object from the ground to an upright position.',
    video: 'https://example.com/deadlifts_video',
    muscle: 'lower back',
  },
  {
    id: 77,
    name: 'Good Mornings',
    description:
      'Good mornings target the lower back muscles and hamstrings and are performed by bending forward at the hips while holding a barbell on the shoulders.',
    video: 'https://example.com/good_mornings_video',
    muscle: 'lower back',
  },
  {
    id: 78,
    name: 'Hyperextensions',
    description:
      'Hyperextensions target the lower back muscles and are performed by bending forward at the waist while keeping the back straight and then returning to an upright position.',
    video: 'https://example.com/hyperextensions_video',
    muscle: 'lower back',
  },
  {
    id: 79,
    name: 'Back Extensions',
    description:
      'Back extensions primarily target the lower back muscles and are performed by extending the spine while lying face down on a hyperextension bench.',
    video: 'https://example.com/back_extensions_video',
    muscle: 'lower back',
  },
  {
    id: 80,
    name: 'Reverse Hyperextensions',
    description:
      'Reverse hyperextensions target the lower back muscles and hamstrings and are performed by extending the legs backward against resistance while lying face down on a hyperextension bench.',
    video: 'https://example.com/reverse_hyperextensions_video',
    muscle: 'lower back',
  },
  // Hamstring exercises
  {
    id: 81,
    name: 'Deadlifts',
    description:
      'Deadlifts target the hamstrings along with the glutes, lower back, and traps, and are performed by lifting a barbell or other weighted object from the ground to an upright position.',
    video: 'https://example.com/deadlifts_video',
    muscle: 'hamstrings',
  },
  {
    id: 82,
    name: 'Romanian Deadlifts',
    description:
      'Romanian deadlifts target the hamstrings and lower back and are performed by bending forward at the hips while keeping the knees slightly bent and the back straight, then returning to an upright position.',
    video: 'https://example.com/romanian_deadlifts_video',
    muscle: 'hamstrings',
  },
  {
    id: 83,
    name: 'Leg Curls',
    description:
      'Leg curls target the hamstrings and are performed by curling the legs towards the buttocks while lying face down on a leg curl machine.',
    video: 'https://example.com/leg_curls_video',
    muscle: 'hamstrings',
  },
  {
    id: 84,
    name: 'Good Mornings',
    description:
      'Good mornings target the hamstrings and lower back and are performed by bending forward at the hips while holding a barbell on the shoulders.',
    video: 'https://example.com/good_mornings_video',
    muscle: 'hamstrings',
  },
  {
    id: 85,
    name: 'Glute Ham Raises',
    description:
      'Glute ham raises primarily target the hamstrings and glutes and are performed by kneeling on a glute ham raise machine or apparatus and then lowering and raising the body while keeping the torso straight.',
    video: 'https://example.com/glute_ham_raises_video',
    muscle: 'hamstrings',
  },
];

export default lifts;
