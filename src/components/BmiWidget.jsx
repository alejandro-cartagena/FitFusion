import React from 'react';

function calculateBMI(feet, inches, weight) {
  // Convert feet and inches to total inches
  let totalInches = feet * 12 + inches;

  // Convert total inches to meters
  let heightInMeters = totalInches * 0.0254;

  // Calculate BMI using the formula: weight (kg) / (height (m))^2
  let bmi = weight / (heightInMeters * heightInMeters);

  // Round BMI to two decimal places
  bmi = parseFloat(bmi.toFixed(2));

  return bmi;
}

export default function BmiWidget() {
  return (
    <div className="Bmi-container">
      <label htmlFor="Feet">
        <input type="text" placeholder="Feet" name="feet" />
      </label>
      <label htmlFor="inches">
        <input type="text" placeholder="Inches" name="inches" />
      </label>
      <label htmlFor="weight">
        <input type="text" placeholder="Weight" />
      </label>
    </div>
  );
}
