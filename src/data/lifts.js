const lifts = [
  // Biceps exercises
  {
    id: 1,
    name: 'Bicep Curls',
    description:
      'Bicep curls are a classic exercise for building strength and size in the biceps muscles.',
    video: 'https://www.youtube.com/watch?v=KVwb7_brG_8',
    muscle: 'Biceps',
  },
  {
    id: 2,
    name: 'Hammer Curls',
    description:
      'Hammer curls target the biceps brachii muscle along with the brachialis and brachioradialis muscles.',
    video: 'https://www.youtube.com/watch?v=KVwb7_brG_8',
    muscle: 'Biceps',
  },
  {
    id: 3,
    name: 'Chin-Ups',
    description:
      'Chin-ups primarily work the biceps, along with the back and shoulders.',
    video: 'https://www.youtube.com/watch?v=KVwb7_brG_8',
    muscle: 'Biceps',
  },
  {
    id: 4,
    name: 'Preacher Curls',
    description:
      'Preacher curls isolate the biceps muscles and are performed using a preacher bench.',
    video: 'https://www.youtube.com/watch?v=wFaEYG-nMh8',
    muscle: 'Biceps',
  },
  {
    id: 5,
    name: 'Concentration Curls',
    description:
      'Concentration curls target the biceps muscles and are performed sitting on a bench with the elbow resting on the inner thigh.',
    video: 'https://www.youtube.com/watch?v=wFaEYG-nMh8',
    muscle: 'Biceps',
  },
  // Chest exercises
  {
    id: 6,
    name: 'Bench Press',
    description:
      'The bench press primarily targets the chest muscles (pectoralis major), but also works the shoulders and triceps.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Chest',
  },
  {
    id: 7,
    name: 'Push-Ups',
    description:
      'Push-ups are a bodyweight exercise that primarily targets the chest muscles, along with the shoulders and triceps.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Chest',
  },
  {
    id: 8,
    name: 'Dumbbell Flyes',
    description:
      'Dumbbell flyes isolate the chest muscles and are performed lying on a bench with dumbbells in hand.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Chest',
  },
  {
    id: 9,
    name: 'Incline Bench Press',
    description:
      'Incline bench press targets the upper chest muscles and is performed on an inclined bench.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Chest',
  },
  {
    id: 10,
    name: 'Chest Dips',
    description:
      'Chest dips primarily target the lower chest muscles and are performed using parallel bars.',
    video: 'https://www.youtube.com/watch?v=KVwb7_brG_8',
    muscle: 'Chest',
  },
  // Front Delt exercises
  {
    id: 11,
    name: 'Shoulder Press',
    description:
      'Shoulder press targets the deltoid muscles and is performed by pressing a weight overhead while seated or standing.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Front Delts',
  },
  {
    id: 12,
    name: 'Lateral Raises',
    description:
      'Lateral raises isolate the lateral deltoid muscles and are performed by raising the arms to the sides against resistance.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Front Delts',
  },
  {
    id: 13,
    name: 'Front Raises',
    description:
      'Front raises target the anterior deltoid muscles and are performed by raising the arms to the front against resistance.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Front Delts',
  },
  {
    id: 14,
    name: 'Military Press',
    description:
      'Military press is a compound exercise that targets the front delts along with other shoulder muscles, such as the triceps and upper back.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Front Delts',
  },
  {
    id: 15,
    name: 'Upright Rows',
    description:
      'Upright rows primarily target the front deltoids and upper traps, along with other muscles of the shoulder and upper back.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Front Delts',
  },
  // Traps exercises
  {
    id: 16,
    name: 'Barbell Shrugs',
    description:
      'Barbell shrugs target the trapezius muscles and are performed by lifting the shoulders in a shrugging motion against resistance.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Traps',
  },
  {
    id: 17,
    name: 'Dumbbell Shrugs',
    description:
      'Dumbbell shrugs isolate the trapezius muscles and are performed by lifting the shoulders in a shrugging motion against resistance using dumbbells.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Traps',
  },
  {
    id: 18,
    name: 'Farmers Walk',
    description:
      'Farmers walk primarily targets the traps, along with other muscles of the upper body, core, and grip strength.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Traps',
  },
  {
    id: 19,
    name: 'Behind The Back Shrug',
    description:
      'Behind the back shrug is a variation of the shrug exercise that targets the traps from a different angle by lifting the shoulders behind the body against resistance.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Traps',
  },
  {
    id: 20,
    name: 'Face Pulls',
    description:
      'Face pulls target the traps, rear delts, and rotator cuff muscles, and are performed using a cable machine with a rope attachment.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Traps',
  },
  // Neck exercises
  {
    id: 21,
    name: 'Placeholder Neck Exercise 1',
    description: 'Placeholder description for neck exercise 1.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Neck',
  },
  {
    id: 22,
    name: 'Placeholder Neck Exercise 2',
    description: 'Placeholder description for neck exercise 2.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Neck',
  },
  {
    id: 23,
    name: 'Placeholder Neck Exercise 3',
    description: 'Placeholder description for neck exercise 3.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Neck',
  },
  {
    id: 24,
    name: 'Placeholder Neck Exercise 4',
    description: 'Placeholder description for neck exercise 4.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Neck',
  },
  {
    id: 25,
    name: 'Placeholder Neck Exercise 5',
    description: 'Placeholder description for neck exercise 5.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Neck',
  },
  // Abs exercises
  {
    id: 26,
    name: 'Crunches',
    description:
      'Crunches target the rectus abdominis muscles and are performed by curling the upper body towards the knees while lying on the back.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Abs',
  },
  {
    id: 27,
    name: 'Leg Raises',
    description:
      'Leg raises primarily target the lower abdominal muscles and are performed by raising the legs while lying on the back.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Abs',
  },
  {
    id: 28,
    name: 'Russian Twists',
    description:
      'Russian twists target the obliques and core muscles and are performed by rotating the torso from side to side while holding a weight or medicine ball.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Abs',
  },
  {
    id: 29,
    name: 'Plank',
    description:
      'Plank is an isometric exercise that targets the entire core, including the rectus abdominis, obliques, and transverse abdominis muscles.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Abs',
  },
  {
    id: 30,
    name: 'Hanging Leg Raises',
    description:
      'Hanging leg raises target the lower abs and hip flexors and are performed by hanging from a bar and raising the legs.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Abs',
  },
  // Forearms exercises
  {
    id: 31,
    name: 'Wrist Curls',
    description:
      'Wrist curls target the forearm muscles and are performed by curling the wrist while holding a weight.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Forearms',
  },
  {
    id: 32,
    name: 'Reverse Wrist Curls',
    description:
      'Reverse wrist curls target the forearm muscles and are performed by curling the wrist in the opposite direction against resistance.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Forearms',
  },
  {
    id: 33,
    name: 'Forearm Pronation and Supination',
    description:
      'Forearm pronation and supination exercises target the muscles responsible for rotating the forearm and are performed by rotating the wrist with a weight in hand.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Forearms',
  },
  {
    id: 34,
    name: 'Barbell Reverse Curls',
    description:
      'Barbell reverse curls target the brachioradialis muscle of the forearms and are performed by curling the barbell with an overhand grip.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Forearms',
  },
  {
    id: 35,
    name: 'Plate Pinch Grip',
    description:
      'Plate pinch grip exercises target the forearm muscles and grip strength and are performed by holding weight plates together with the fingertips.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Forearms',
  },
  // Quads exercises
  {
    id: 36,
    name: 'Squats',
    description:
      'Squats are a compound exercise that primarily target the quadriceps muscles, along with the glutes, hamstrings, and lower back.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Quads',
  },
  {
    id: 37,
    name: 'Leg Press',
    description:
      'Leg press primarily targets the quadriceps muscles and is performed by pressing weight away from the body using the legs while seated.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Quads',
  },
  {
    id: 38,
    name: 'Lunges',
    description:
      'Lunges target the quadriceps, glutes, and hamstrings and are performed by stepping forward or backward into a lunge position while holding weights.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Quads',
  },
  {
    id: 39,
    name: 'Hack Squats',
    description:
      'Hack squats target the quadriceps muscles and are performed using a hack squat machine or a barbell.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Quads',
  },
  {
    id: 40,
    name: 'Step-Ups',
    description:
      'Step-ups primarily target the quadriceps, along with the glutes and hamstrings, and are performed by stepping onto a raised platform with one leg.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Quads',
  },
  // Obliques exercises
  {
    id: 41,
    name: 'Russian Twists',
    description:
      'Russian twists target the obliques and core muscles and are performed by rotating the torso from side to side while holding a weight or medicine ball.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Obliques',
  },
  {
    id: 42,
    name: 'Side Plank',
    description:
      'Side plank primarily targets the obliques and lateral core muscles and is performed by supporting the body on one forearm and the side of the foot.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Obliques',
  },
  {
    id: 43,
    name: 'Woodchoppers',
    description:
      'Woodchoppers target the obliques and core muscles and are performed by rotating the torso while holding a weight or resistance band.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Obliques',
  },
  {
    id: 44,
    name: 'Bicycle Crunches',
    description:
      'Bicycle crunches target the obliques and core muscles and are performed by bringing the elbow to the opposite knee while lying on the back and pedaling the legs in a bicycle motion.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Obliques',
  },
  {
    id: 45,
    name: 'Standing Side Crunches',
    description:
      'Standing side crunches target the obliques and core muscles and are performed by bending sideways at the waist while holding a weight.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Obliques',
  },
  // Upper Back exercises
  {
    id: 46,
    name: 'Pull-Ups',
    description:
      'Pull-ups primarily target the upper back muscles, including the latissimus dorsi and traps, along with the biceps and forearms.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Upper Back',
  },
  {
    id: 47,
    name: 'Seated Cable Rows',
    description:
      'Seated cable rows target the upper back muscles, including the lats and rhomboids, and are performed using a cable machine with a rowing attachment.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Upper Back',
  },
  {
    id: 48,
    name: 'Bent Over Rows',
    description:
      'Bent over rows target the upper back muscles, including the traps and rhomboids, along with the biceps and forearms.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Upper Back',
  },
  {
    id: 49,
    name: 'T-Bar Rows',
    description:
      'T-bar rows target the upper back muscles, including the lats and traps, and are performed using a T-bar rowing machine or a barbell attached to a landmine.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Upper Back',
  },
  {
    id: 50,
    name: 'Face Pulls',
    description:
      'Face pulls target the traps, rear delts, and rotator cuff muscles, and are performed using a cable machine with a rope attachment.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Upper Back',
  },
  // Rear Delts exercises
  {
    id: 51,
    name: 'Reverse Flyes',
    description:
      'Reverse flyes target the rear deltoids and are performed by raising the arms to the sides against resistance while bent over.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Rear Delts',
  },
  {
    id: 52,
    name: 'Face Pulls',
    description:
      'Face pulls target the traps, rear delts, and rotator cuff muscles, and are performed using a cable machine with a rope attachment.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Rear Delts',
  },
  {
    id: 53,
    name: 'Rear Delt Fly Machine',
    description:
      'Rear delt fly machine isolates the rear deltoids and is performed using a specialized machine with a rear delt fly arm.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Rear Delts',
  },
  {
    id: 54,
    name: 'Bent Over Dumbbell Raises',
    description:
      'Bent over dumbbell raises target the rear deltoids and are performed by bending at the waist and raising dumbbells to the sides against resistance.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Rear Delts',
  },
  {
    id: 55,
    name: 'Cable Face Pulls',
    description:
      'Cable face pulls target the rear delts and upper back muscles and are performed using a cable machine with a rope attachment pulled towards the face.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Rear Delts',
  },
  // Lats exercises
  {
    id: 56,
    name: 'Pull-Ups',
    description:
      'Pull-ups primarily target the upper back muscles, including the latissimus dorsi and traps, along with the biceps and forearms.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Lats',
  },
  {
    id: 57,
    name: 'Lat Pulldowns',
    description:
      'Lat pulldowns target the latissimus dorsi muscles and are performed by pulling a bar down to the chest while seated.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Lats',
  },
  {
    id: 58,
    name: 'Bent Over Rows',
    description:
      'Bent over rows target the upper back muscles, including the traps and rhomboids, along with the biceps and forearms.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Lats',
  },
  {
    id: 59,
    name: 'One-Arm Dumbbell Rows',
    description:
      'One-arm dumbbell rows target the latissimus dorsi and other upper back muscles and are performed by rowing a dumbbell to the side of the torso while bent over.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Lats',
  },
  {
    id: 60,
    name: 'Machine Pullovers',
    description:
      'Machine pullovers target the lats and chest muscles and are performed using a machine with a pullover arm.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Lats',
  },
  // Triceps exercises
  {
    id: 61,
    name: 'Tricep Dips',
    description:
      'Tricep dips target the triceps muscles and are performed by lowering and raising the body using parallel bars.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Triceps',
  },
  {
    id: 62,
    name: 'Close Grip Bench Press',
    description:
      'Close grip bench press targets the triceps muscles and is performed by gripping the barbell with hands closer together than shoulder-width and pressing the weight upwards from the chest.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Triceps',
  },
  {
    id: 63,
    name: 'Tricep Pushdowns',
    description:
      'Tricep pushdowns target the triceps muscles and are performed by pushing a cable attachment downwards while standing.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Triceps',
  },
  {
    id: 64,
    name: 'Skull Crushers',
    description:
      'Skull crushers target the triceps muscles and are performed by lowering a weight to the forehead while lying on a bench and then extending the arms.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Triceps',
  },
  {
    id: 65,
    name: 'Overhead Tricep Extensions',
    description:
      'Overhead tricep extensions target the triceps muscles and are performed by extending the arms overhead with a weight.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Triceps',
  },
  // Calves exercises
  {
    id: 66,
    name: 'Calf Raises',
    description:
      'Calf raises target the calf muscles and are performed by raising the heels while standing.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Calves',
  },
  {
    id: 67,
    name: 'Seated Calf Raises',
    description:
      'Seated calf raises target the calf muscles and are performed by raising the heels while seated.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Calves',
  },
  {
    id: 68,
    name: 'Box Jumps',
    description:
      'Box jumps are plyometric exercises that target the calves and are performed by jumping onto and off of a box or platform.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Calves',
  },
  {
    id: 69,
    name: 'Jump Rope',
    description:
      'Jump rope is a cardiovascular exercise that also targets the calf muscles and is performed by jumping over a rope.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Calves',
  },
  {
    id: 70,
    name: 'Standing Calf Machine',
    description:
      'Standing calf machine is a resistance exercise that targets the calf muscles and is performed using a machine with a weighted lever.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Calves',
  },
  // Glutes exercises
  {
    id: 71,
    name: 'Squats',
    description:
      'Squats are a compound exercise that primarily target the glutes, quadriceps, hamstrings, and lower back muscles.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Glutes',
  },
  {
    id: 72,
    name: 'Deadlifts',
    description:
      'Deadlifts target the glutes, hamstrings, lower back, and traps, and are performed by lifting a barbell or other weighted object from the ground to an upright position.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Glutes',
  },
  {
    id: 73,
    name: 'Hip Thrusts',
    description:
      'Hip thrusts target the glutes and hamstrings and are performed by thrusting the hips upward while lying on the ground with the shoulders elevated on a bench.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Glutes',
  },
  {
    id: 74,
    name: 'Lunges',
    description:
      'Lunges target the glutes, quadriceps, and hamstrings and are performed by stepping forward or backward into a lunge position while holding weights.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Glutes',
  },
  {
    id: 75,
    name: 'Bulgarian Split Squats',
    description:
      'Bulgarian split squats target the glutes, quadriceps, and hamstrings and are performed by lowering the body into a lunge position with one foot elevated behind on a bench or platform.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Glutes',
  },
  // Lower Back exercises
  {
    id: 76,
    name: 'Deadlifts',
    description:
      'Deadlifts target the lower back muscles along with the glutes, hamstrings, and traps, and are performed by lifting a barbell or other weighted object from the ground to an upright position.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Lower Back',
  },
  {
    id: 77,
    name: 'Good Mornings',
    description:
      'Good mornings target the lower back muscles and hamstrings and are performed by bending forward at the hips while holding a barbell on the shoulders.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Lower Back',
  },
  {
    id: 78,
    name: 'Hyperextensions',
    description:
      'Hyperextensions target the lower back muscles and are performed by bending forward at the waist while keeping the back straight and then returning to an upright position.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Lower Back',
  },
  {
    id: 79,
    name: 'Back Extensions',
    description:
      'Back extensions primarily target the lower back muscles and are performed by extending the spine while lying face down on a hyperextension bench.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Lower Back',
  },
  {
    id: 80,
    name: 'Reverse Hyperextensions',
    description:
      'Reverse hyperextensions target the lower back muscles and hamstrings and are performed by extending the legs backward against resistance while lying face down on a hyperextension bench.',
    video: 'https://www.youtube.com/watch?v=pihE-4HWZx0',
    muscle: 'Lower Back',
  },
  // Hamstring exercises
  {
    id: 81,
    name: 'Deadlifts',
    description:
      'Deadlifts target the hamstrings along with the glutes, lower back, and traps, and are performed by lifting a barbell or other weighted object from the ground to an upright position.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Ham Strings',
  },
  {
    id: 82,
    name: 'Romanian Deadlifts',
    description:
      'Romanian deadlifts target the hamstrings and lower back and are performed by bending forward at the hips while keeping the knees slightly bent and the back straight, then returning to an upright position.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Ham Strings',
  },
  {
    id: 83,
    name: 'Leg Curls',
    description:
      'Leg curls target the hamstrings and are performed by curling the legs towards the buttocks while lying face down on a leg curl machine.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Ham Strings',
  },
  {
    id: 84,
    name: 'Good Mornings',
    description:
      'Good mornings target the hamstrings and lower back and are performed by bending forward at the hips while holding a barbell on the shoulders.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Ham Strings',
  },
  {
    id: 85,
    name: 'Glute Ham Raises',
    description:
      'Glute ham raises primarily target the hamstrings and glutes and are performed by kneeling on a glute ham raise machine or apparatus and then lowering and raising the body while keeping the torso straight.',
    video: 'https://www.youtube.com/watch?v=2lbvjoIq4kM',
    muscle: 'Ham Strings',
  },
];

export default lifts;
