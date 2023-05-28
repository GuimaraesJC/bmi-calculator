const explanations = {
  underweight: 'BMI suggests underweight. Focus on gradual weight gain. Balanced diet & exercise help.',
  healthy: 'BMI suggests healthy weight. Congrats! Maintain with exercise & balanced diet.',
  overweight: 'BMI indicates overweight. Take steps for healthier weight. Exercise & mindful eating.',
  obesity1: 'BMI suggests 1st class obesity. Prioritize health. Diet & exercise for better weight.',
  obesity2: 'BMI indicates 2nd class obesity. Prioritize well-being. Seek guidance for changes.',
  obesity3: 'BMI suggests severe obesity. Prioritize health. Consult professionals for a plan.',
}

export const bmiRanges = [
  { min: 0, max: 18.5, explanation: explanations.underweight },
  { min: 18.5, max: 25, explanation: explanations.healthy },
  { min: 25, max: 30, explanation: explanations.overweight },
  { min: 30, max: 35, explanation: explanations.obesity1 },
  { min: 35, max: 40, explanation: explanations.obesity2 },
  { min: 40, max: Infinity, explanation: explanations.obesity3 }
];

