const lifts = [
  {
    id: 1,
    name: 'Bicep Curls',
    description: 'Bicep curls are a classic exercise for building strength and size in the biceps muscles.',
    video: 'https://example.com/bicep_curls_video',
    muscle: 'Biceps'
  },
  {
    id: 2,
    name: 'Hammer Curls',
    description: 'Hammer curls target the biceps brachii muscle along with the brachialis and brachioradialis muscles.',
    video: 'https://example.com/hammer_curls_video',
    muscle: 'Biceps'
  },
  {
    id: 3,
    name: 'Chin-Ups',
    description: 'Chin-ups primarily work the biceps, along with the back and shoulders.',
    video: 'https://example.com/chin_ups_video',
    muscle: 'Biceps'
  },
  {
    id: 4,
    name: 'Preacher Curls',
    description: 'Preacher curls isolate the biceps muscles and are performed using a preacher bench.',
    video: 'https://example.com/preacher_curls_video',
    muscle: 'Biceps'
  },
  {
    id: 5,
    name: 'Concentration Curls',
    description: 'Concentration curls target the biceps muscles and are performed sitting on a bench with the elbow resting on the inner thigh.',
    video: 'https://example.com/concentration_curls_video',
    muscle: 'Biceps'
  },
  {
    id: 6,
    name: 'Bench Press',
    description: 'The bench press primarily targets the chest muscles (pectoralis major), but also works the shoulders and triceps.',
    video: 'https://example.com/bench_press_video',
    muscle: 'Chest'
  },
  {
    id: 7,
    name: 'Push-Ups',
    description: 'Push-ups are a bodyweight exercise that primarily targets the chest muscles, along with the shoulders and triceps.',
    video: 'https://example.com/push_ups_video',
    muscle: 'Chest'
  },
  {
    id: 8,
    name: 'Dumbbell Flyes',
    description: 'Dumbbell flyes isolate the chest muscles and are performed lying on a bench with dumbbells in hand.',
    video: 'https://example.com/dumbbell_flyes_video',
    muscle: 'Chest'
  },
  {
    id: 9,
    name: 'Incline Bench Press',
    description: 'Incline bench press targets the upper chest muscles and is performed on an inclined bench.',
    video: 'https://example.com/incline_bench_press_video',
    muscle: 'Chest'
  },
  {
    id: 10,
    name: 'Chest Dips',
    description: 'Chest dips primarily target the lower chest muscles and are performed using parallel bars.',
    video: 'https://example.com/chest_dips_video',
    muscle: 'Chest'
  },
  {
    id: 11,
    name: 'Front Raises',
    description: 'Front raises target the front deltoid muscles (anterior deltoids), which are part of the shoulder muscles.',
    video: 'https://example.com/front_raises_video',
    muscle: 'Front Delts'
  },
  {
    id: 12,
    name: 'Shoulder Press',
    description: 'Shoulder press is an exercise that primarily targets the deltoid muscles, specifically the anterior (front) deltoids.',
    video: 'https://example.com/shoulder_press_video',
    muscle: 'Front Delts'
  },
  {
    id: 13,
    name: 'Arnold Press',
    description: 'Arnold press is a variation of the shoulder press that targets the front and side deltoid muscles.',
    video: 'https://example.com/arnold_press_video',
    muscle: 'Front Delts'
  },
  {
    id: 14,
    name: 'Front Dumbbell Raises',
    description: 'Front dumbbell raises isolate the front deltoid muscles and are performed by raising dumbbells in front of the body.',
    video: 'https://example.com/front_dumbbell_raises_video',
    muscle: 'Front Delts'
  },
  {
    id: 15,
    name: 'Lateral Raises',
    description: 'Lateral raises primarily target the lateral deltoid muscles (side delts), which are part of the shoulder muscles.',
    video: 'https://example.com/lateral_raises_video',
    muscle: 'Front Delts'
  },
  {
    id: 16,
    name: 'Shrugs',
    description: 'Shrugs primarily target the trapezius muscles (traps) located on the upper back and neck.',
    video: 'https://example.com/shrugs_video',
    muscle: 'Traps'
  },
  {
    id: 17,
    name: 'Deadlifts',
    description: 'Deadlifts are compound exercises that primarily target the hamstrings, glutes, lower back, and upper back muscles.',
    video: 'https://example.com/deadlifts_video',
    muscle: 'Lower Back'
  },
  {
    id: 18,
    name: 'Pull-Ups',
    description: 'Pull-ups primarily work the upper back muscles (latissimus dorsi), as well as the biceps and forearms.',
    video: 'https://example.com/pull_ups_video',
    muscle: 'Upper Back'
  },
  {
    id: 19,
    name: 'Lat Pulldowns',
    description: 'Lat pulldowns primarily target the latissimus dorsi muscles (lats), which are large muscles of the back.',
    video: 'https://example.com/lat_pulldowns_video',
    muscle: 'Lats'
  },
  {
    id: 20,
    name: 'Bent Over Rows',
    description: 'Bent over rows are compound exercises that target the upper and middle back muscles, including the lats, rhomboids, and traps.',
    video: 'https://example.com/bent_over_rows_video',
    muscle: 'Upper Back'
  },
  {
    id: 21,
    name: 'Reverse Flyes',
    description: 'Reverse flyes target the rear deltoid muscles (posterior deltoids), which are part of the shoulder muscles.',
    video: 'https://example.com/reverse_flyes_video',
    muscle: 'Rear Delts'
  },
  {
    id: 22,
    name: 'Face Pulls',
    description: 'Face pulls primarily target the rear deltoids and upper back muscles, helping to improve shoulder health and posture.',
    video: 'https://example.com/face_pulls_video',
    muscle: 'Rear Delts'
  },
  {
    id: 23,
    name: 'Lateral Pulldowns',
    description: 'Lateral pulldowns target the rear deltoids and upper back muscles, as well as the biceps and forearms.',
    video: 'https://example.com/lateral_pulldowns_video',
    muscle: 'Rear Delts'
  },
  {
    id: 24,
    name: 'Good Mornings',
    description: 'Good mornings primarily target the lower back muscles (erector spinae), as well as the hamstrings and glutes.',
    video: 'https://example.com/good_mornings_video',
    muscle: 'Lower Back'
  },
  {
    id: 25,
    name: 'Back Extensions',
    description: 'Back extensions strengthen the lower back muscles (erector spinae) and help improve posture.',
    video: 'https://example.com/back_extensions_video',
    muscle: 'Lower Back'
  },
  {
    id: 26,
    name: 'Supermans',
    description: 'Supermans target the lower back muscles (erector spinae) and help strengthen the muscles of the posterior chain.',
    video: 'https://example.com/supermans_video',
    muscle: 'Lower Back'
  },
  {
    id: 27,
    name: 'Glute Bridges',
    description: 'Glute bridges primarily target the gluteus maximus muscles (glutes), as well as the hamstrings and lower back muscles.',
    video: 'https://example.com/glute_bridges_video',
    muscle: 'Glutes'
  },
  {
    id: 28,
    name: 'Hip Thrusts',
    description: 'Hip thrusts target the gluteus maximus muscles (glutes) and are performed by thrusting the hips upward while seated on the floor with the shoulders elevated on a bench.',
    video: 'https://example.com/hip_thrusts_video',
    muscle: 'Glutes'
  },
  {
    id: 29,
    name: 'Walking Lunges',
    description: 'Walking lunges target the glutes, quadriceps, and hamstrings, as well as the calves and core muscles for stability.',
    video: 'https://example.com/walking_lunges_video',
    muscle: 'Glutes'
  },
  {
    id: 30,
    name: 'Glute Kickbacks',
    description: 'Glute kickbacks isolate the gluteus maximus muscles (glutes) and are performed by kicking one leg backward while maintaining a bent-over position.',
    video: 'https://example.com/glute_kickbacks_video',
    muscle: 'Glutes'
  },
  {
    id: 31,
    name: 'Reverse Lunges',
    description: 'Reverse lunges target the glutes, hamstrings, and quadriceps, as well as the calves and core muscles for stability.',
    video: 'https://example.com/reverse_lunges_video',
    muscle: 'Glutes'
  },
  {
    id: 32,
    name: 'Standing Calf Raises',
    description: 'Standing calf raises primarily target the calf muscles (gastrocnemius and soleus), which are located in the lower leg.',
    video: 'https://example.com/standing_calf_raises_video',
    muscle: 'Calves'
  },
  {
    id: 33,
    name: 'Seated Calf Raises',
    description: 'Seated calf raises primarily target the soleus muscle of the calf and are performed while seated with the knees bent.',
    video: 'https://example.com/seated_calf_raises_video',
    muscle: 'Calves'
  },
  {
    id: 34,
    name: 'Single-Leg Calf Raises',
    description: 'Single-leg calf raises target the calf muscles (gastrocnemius and soleus) one leg at a time for improved balance and stability.',
    video: 'https://example.com/single_leg_calf_raises_video',
    muscle: 'Calves'
  },
  {
    id: 35,
    name: 'Box Jumps',
    description: 'Box jumps primarily target the calf muscles (gastrocnemius and soleus), as well as the quadriceps and glutes, for explosive power and strength.',
    video: 'https://example.com/box_jumps_video',
    muscle: 'Calves'
  },
  {
    id: 36,
    name: 'Jump Rope',
    description: 'Jump rope is a cardiovascular exercise that engages the calf muscles (gastrocnemius and soleus) for endurance and strength.',
    video: 'https://example.com/jump_rope_video',
    muscle: 'Calves'
  },
  {
    id: 37,
    name: 'Hamstring Curls',
    description: 'Hamstring curls are isolation exercises that target the hamstring muscles (back of the thigh).',
    video: 'https://example.com/hamstring_curls_video',
    muscle: 'Hamstrings'
  },
  {
    id: 38,
    name: 'Romanian Deadlifts',
    description: 'Romanian deadlifts primarily target the hamstring muscles (back of the thigh), as well as the glutes and lower back muscles.',
    video: 'https://example.com/romanian_deadlifts_video',
    muscle: 'Hamstrings'
  },
  {
    id: 39,
    name: 'Lying Leg Curls',
    description: 'Lying leg curls target the hamstring muscles (back of the thigh) and are performed lying face down on a leg curl machine.',
    video: 'https://example.com/lying_leg_curls_video',
    muscle: 'Hamstrings'
  },
  {
    id: 40,
    name: 'Stiff-Leg Deadlifts',
    description: 'Stiff-leg deadlifts primarily target the hamstring muscles (back of the thigh) and are performed with straight legs and a slight bend at the knees.',
    video: 'https://example.com/stiff_leg_deadlifts_video',
    muscle: 'Hamstrings'
  },
  {
    id: 41,
    name: 'Glute-Ham Raises',
    description: 'Glute-ham raises target the hamstrings and glutes and are performed on a glute-ham developer machine.',
    video: 'https://example.com/glute_ham_raises_video',
    muscle: 'Hamstrings'
  },
  {
    id: 42,
    name: 'Dumbbell Shrugs',
    description: 'Dumbbell shrugs target the trapezius muscles (traps) and are performed by lifting the shoulders upward.',
    video: 'https://example.com/dumbbell_shrugs_video',
    muscle: 'Traps'
  },
  {
    id: 43,
    name: 'Barbell Shrugs',
    description: 'Barbell shrugs target the trapezius muscles (traps) and are performed by lifting the shoulders upward with a barbell.',
    video: 'https://example.com/barbell_shrugs_video',
    muscle: 'Traps'
  },
  {
    id: 44,
    name: 'Dumbbell Pullovers',
    description: 'Dumbbell pullovers primarily target the chest and back muscles and are performed by lying on a bench and lowering a dumbbell behind the head.',
    video: 'https://example.com/dumbbell_pullovers_video',
    muscle: 'Chest'
  },
  {
    id: 45,
    name: 'Cable Flyes',
    description: 'Cable flyes isolate the chest muscles and are performed using a cable machine with handles attached at shoulder height.',
    video: 'https://example.com/cable_flyes_video',
    muscle: 'Chest'
  },
  {
    id: 46,
    name: 'Decline Bench Press',
    description: 'Decline bench press primarily targets the lower chest muscles and is performed on a decline bench with the head lower than the feet.',
    video: 'https://example.com/decline_bench_press_video',
    muscle: 'Chest'
  },
  {
    id: 47,
    name: 'Incline Dumbbell Flyes',
    description: 'Incline dumbbell flyes target the upper chest muscles and are performed lying on an incline bench with dumbbells in hand.',
    video: 'https://example.com/incline_dumbbell_flyes_video',
    muscle: 'Chest'
  },
  {
    id: 48,
    name: 'Dumbbell Bench Press',
    description: 'Dumbbell bench press primarily targets the chest muscles and is performed lying on a bench with dumbbells in hand.',
    video: 'https://example.com/dumbbell_bench_press_video',
    muscle: 'Chest'
  },
  {
    id: 49,
    name: 'Dumbbell Lateral Raises',
    description: 'Dumbbell lateral raises target the lateral deltoid muscles (side delts) and are performed by raising dumbbells out to the sides.',
    video: 'https://example.com/dumbbell_lateral_raises_video',
    muscle: 'Front Delts'
  },
  {
    id: 50,
    name: 'Military Press',
    description: 'Military press is a compound exercise that primarily targets the deltoid muscles, specifically the anterior (front) deltoids.',
    video: 'https://example.com/military_press_video',
    muscle: 'Front Delts'
  },
  {
    id: 51,
    name: 'Upright Rows',
    description: 'Upright rows primarily target the trapezius muscles (traps) and lateral deltoid muscles (side delts).',
    video: 'https://example.com/upright_rows_video',
    muscle: 'Traps'
  },
  {
    id: 52,
    name: 'Dumbbell Shrugs',
    description: 'Dumbbell shrugs target the trapezius muscles (traps) and are performed by lifting the shoulders upward.',
    video: 'https://example.com/dumbbell_shrugs_video',
    muscle: 'Traps'
  },
  {
    id: 53,
    name: 'Barbell Shrugs',
    description: 'Barbell shrugs target the trapezius muscles (traps) and are performed by lifting the shoulders upward with a barbell.',
    video: 'https://example.com/barbell_shrugs_video',
    muscle: 'Traps'
  },
  {
    id: 54,
    name: 'Dumbbell Pullovers',
    description: 'Dumbbell pullovers primarily target the chest and back muscles and are performed by lying on a bench and lowering a dumbbell behind the head.',
    video: 'https://example.com/dumbbell_pullovers_video',
    muscle: 'Chest'
  },
  {
    id: 55,
    name: 'Cable Flyes',
    description: 'Cable flyes isolate the chest muscles and are performed using a cable machine with handles attached at shoulder height.',
    video: 'https://example.com/cable_flyes_video',
    muscle: 'Chest'
  },
  {
    id: 56,
    name: 'Decline Bench Press',
    description: 'Decline bench press primarily targets the lower chest muscles and is performed on a decline bench with the head lower than the feet.',
    video: 'https://example.com/decline_bench_press_video',
    muscle: 'Chest'
  },
  {
    id: 57,
    name: 'Incline Dumbbell Flyes',
    description: 'Incline dumbbell flyes target the upper chest muscles and are performed lying on an incline bench with dumbbells in hand.',
    video: 'https://example.com/incline_dumbbell_flyes_video',
    muscle: 'Chest'
  },
  {
    id: 58,
    name: 'Dumbbell Bench Press',
    description: 'Dumbbell bench press primarily targets the chest muscles and is performed lying on a bench with dumbbells in hand.',
    video: 'https://example.com/dumbbell_bench_press_video',
    muscle: 'Chest'
  },
  {
    id: 59,
    name: 'Dumbbell Lateral Raises',
    description: 'Dumbbell lateral raises target the lateral deltoid muscles (side delts) and are performed by raising dumbbells out to the sides.',
    video: 'https://example.com/dumbbell_lateral_raises_video',
    muscle: 'Front Delts'
  },
  {
    id: 60,
    name: 'Military Press',
    description: 'Military press is a compound exercise that primarily targets the deltoid muscles, specifically the anterior (front) deltoids.',
    video: 'https://example.com/military_press_video',
    muscle: 'Front Delts'
  },
  {
    id: 61,
    name: 'Upright Rows',
    description: 'Upright rows primarily target the trapezius muscles (traps) and lateral deltoid muscles (side delts).',
    video: 'https://example.com/upright_rows_video',
    muscle: 'Traps'
  },
  {
    id: 62,
    name: 'Front Raises',
    description: 'Front raises target the front deltoid muscles (anterior deltoids), which are part of the shoulder muscles.',
    video: 'https://example.com/front_raises_video',
    muscle: 'Front Delts'
  },
  {
    id: 63,
    name: 'Shoulder Press',
    description: 'Shoulder press is an exercise that primarily targets the deltoid muscles, specifically the anterior (front) deltoids.',
    video: 'https://example.com/shoulder_press_video',
    muscle: 'Front Delts'
  },
  {
    id: 64,
    name: 'Arnold Press',
    description: 'Arnold press is a variation of the shoulder press that targets the front and side deltoid muscles.',
    video: 'https://example.com/arnold_press_video',
    muscle: 'Front Delts'
  },
  {
    id: 65,
    name: 'Front Dumbbell Raises',
    description: 'Front dumbbell raises isolate the front deltoid muscles and are performed by raising dumbbells in front of the body.',
    video: 'https://example.com/front_dumbbell_raises_video',
    muscle: 'Front Delts'
  },
  {
    id: 66,
    name: 'Lateral Raises',
    description: 'Lateral raises primarily target the lateral deltoid muscles (side delts), which are part of the shoulder muscles.',
    video: 'https://example.com/lateral_raises_video',
    muscle: 'Front Delts'
  },
  {
    id: 67,
    name: 'Shrugs',
    description: 'Shrugs primarily target the trapezius muscles (traps) and are performed by lifting the shoulders upward.',
    video: 'https://example.com/shrugs_video',
    muscle: 'Traps'
  },
  {
    id: 68,
    name: 'Deadlifts',
    description: 'Deadlifts are compound exercises that primarily target the hamstrings, glutes, lower back, and upper back muscles.',
    video: 'https://example.com/deadlifts_video',
    muscle: 'Lower Back'
  },
  {
    id: 69,
    name: 'Pull-Ups',
    description: 'Pull-ups primarily work the upper back muscles (latissimus dorsi), as well as the biceps and forearms.',
    video: 'https://example.com/pull_ups_video',
    muscle: 'Upper Back'
  },
  {
    id: 70,
    name: 'Lat Pulldowns',
    description: 'Lat pulldowns primarily target the latissimus dorsi muscles (lats), which are large muscles of the back.',
    video: 'https://example.com/lat_pulldowns_video',
    muscle: 'Lats'
  },
  {
    id: 71,
    name: 'Bent Over Rows',
    description: 'Bent over rows are compound exercises that target the upper and middle back muscles, including the lats, rhomboids, and traps.',
    video: 'https://example.com/bent_over_rows_video',
    muscle: 'Upper Back'
  },
  {
    id: 72,
    name: 'Reverse Flyes',
    description: 'Reverse flyes target the rear deltoid muscles (posterior deltoids), which are part of the shoulder muscles.',
    video: 'https://example.com/reverse_flyes_video',
    muscle: 'Rear Delts'
  },
  {
    id: 73,
    name: 'Face Pulls',
    description: 'Face pulls primarily target the rear deltoids and upper back muscles, helping to improve shoulder health and posture.',
    video: 'https://example.com/face_pulls_video',
    muscle: 'Rear Delts'
  },
  {
    id: 74,
    name: 'Lateral Pulldowns',
    description: 'Lateral pulldowns target the rear deltoids and upper back muscles, as well as the biceps and forearms.',
    video: 'https://example.com/lateral_pulldowns_video',
    muscle: 'Rear Delts'
  },
  {
    id: 75,
    name: 'Good Mornings',
    description: 'Good mornings primarily target the lower back muscles (erector spinae), as well as the hamstrings and glutes.',
    video: 'https://example.com/good_mornings_video',
    muscle: 'Lower Back'
  },
  {
    id: 76,
    name: 'Back Extensions',
    description: 'Back extensions strengthen the lower back muscles (erector spinae) and help improve posture.',
    video: 'https://example.com/back_extensions_video',
    muscle: 'Lower Back'
  },
  {
    id: 77,
    name: 'Supermans',
    description: 'Supermans target the lower back muscles (erector spinae) and help strengthen the muscles of the posterior chain.',
    video: 'https://example.com/supermans_video',
    muscle: 'Lower Back'
  },
  {
    id: 78,
    name: 'Glute Bridges',
    description: 'Glute bridges primarily target the gluteus maximus muscles (glutes), as well as the hamstrings and lower back muscles.',
    video: 'https://example.com/glute_bridges_video',
    muscle: 'Glutes'
  },
  {
    id: 79,
    name: 'Hip Thrusts',
    description: 'Hip thrusts target the gluteus maximus muscles (glutes) and are performed by thrusting the hips upward while seated on the floor with the shoulders elevated on a bench.',
    video: 'https://example.com/hip_thrusts_video',
    muscle: 'Glutes'
  },
  {
    id: 80,
    name: 'Walking Lunges',
    description: 'Walking lunges target the glutes, quadriceps, and hamstrings, as well as the calves and core muscles for stability.',
    video: 'https://example.com/walking_lunges_video',
    muscle: 'Glutes'
  },
  {
    id: 81,
    name: 'Glute Kickbacks',
    description: 'Glute kickbacks isolate the gluteus maximus muscles (glutes) and are performed by kicking one leg backward while maintaining a bent-over position.',
    video: 'https://example.com/glute_kickbacks_video',
    muscle: 'Glutes'
  },
  {
    id: 82,
    name: 'Reverse Lunges',
    description: 'Reverse lunges target the glutes, hamstrings, and quadriceps, as well as the calves and core muscles for stability.',
    video: 'https://example.com/reverse_lunges_video',
    muscle: 'Glutes'
  },
  {
    id: 83,
    name: 'Standing Calf Raises',
    description: 'Standing calf raises primarily target the calf muscles (gastrocnemius and soleus), which are located in the lower leg.',
    video: 'https://example.com/standing_calf_raises_video',
    muscle: 'Calves'
  },
  {
    id: 84,
    name: 'Seated Calf Raises',
    description: 'Seated calf raises primarily target the soleus muscle of the calf and are performed while seated with the knees bent.',
    video: 'https://example.com/seated_calf_raises_video',
    muscle: 'Calves'
  },
  {
    id: 85,
    name: 'Single-Leg Calf Raises',
    description: 'Single-leg calf raises target the calf muscles (gastrocnemius and soleus) one leg at a time for improved balance and stability.',
    video: 'https://example.com/single_leg_calf_raises_video',
    muscle: 'Calves'
  },
  {
    id: 86,
    name: 'Box Jumps',
    description: 'Box jumps primarily target the calf muscles (gastrocnemius and soleus), as well as the quadriceps and glutes, for explosive power and strength.',
    video: 'https://example.com/box_jumps_video',
    muscle: 'Calves'
  },
  {
    id: 87,
    name: 'Jump Rope',
    description: 'Jump rope is a cardiovascular exercise that engages the calf muscles (gastrocnemius and soleus) for endurance and strength.',
    video: 'https://example.com/jump_rope_video',
    muscle: 'Calves'
  },
  {
    id: 88,
    name: 'Hamstring Curls',
    description: 'Hamstring curls are isolation exercises that target the hamstring muscles (back of the thigh).',
    video: 'https://example.com/hamstring_curls_video',
    muscle: 'Hamstrings'
  },
  {
    id: 89,
    name: 'Romanian Deadlifts',
    description: 'Romanian deadlifts primarily target the hamstring muscles (back of the thigh), as well as the glutes and lower back muscles.',
    video: 'https://example.com/romanian_deadlifts_video',
    muscle: 'Hamstrings'
  },
  {
    id: 90,
    name: 'Lying Leg Curls',
    description: 'Lying leg curls target the hamstring muscles (back of the thigh) and are performed lying face down on a leg curl machine.',
    video: 'https://example.com/lying_leg_curls_video',
    muscle: 'Hamstrings'
  },
  {
    id: 91,
    name: 'Stiff-Leg Deadlifts',
    description: 'Stiff-leg deadlifts primarily target the hamstring muscles (back of the thigh) and are performed with straight legs and a slight bend at the knees.',
    video: 'https://example.com/stiff_leg_deadlifts_video',
    muscle: 'Hamstrings'
  },
  {
    id: 92,
    name: 'Glute-Ham Raises',
    description: 'Glute-ham raises target the hamstrings and glutes and are performed on a glute-ham developer machine.',
    video: 'https://example.com/glute_ham_raises_video',
    muscle: 'Hamstrings'
  },
  {
    id: 93,
    name: 'Dumbbell Shrugs',
    description: 'Dumbbell shrugs target the trapezius muscles (traps) and are performed by lifting the shoulders upward.',
    video: 'https://example.com/dumbbell_shrugs_video',
    muscle: 'Traps'
  },
  {
    id: 94,
    name: 'Barbell Shrugs',
    description: 'Barbell shrugs target the trapezius muscles (traps) and are performed by lifting the shoulders upward with a barbell.',
    video: 'https://example.com/barbell_shrugs_video',
    muscle: 'Traps'
  },
  {
    id: 95,
    name: 'Dumbbell Pullovers',
    description: 'Dumbbell pullovers primarily target the chest and back muscles and are performed by lying on a bench and lowering a dumbbell behind the head.',
    video: 'https://example.com/dumbbell_pullovers_video',
    muscle: 'Chest'
  }
];


export default lifts;