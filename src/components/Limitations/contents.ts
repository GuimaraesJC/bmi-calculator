import iconGender from '../../assets/images/icon-gender.svg'
import iconAge from '../../assets/images/icon-age.svg'
import iconMuscle from '../../assets/images/icon-muscle.svg'
import iconPregnancy from '../../assets/images/icon-pregnancy.svg'
import iconRace from '../../assets/images/icon-race.svg'

const contents = {
  gender: {
    iconPath: iconGender,
    imgAltText: 'Red icon of genders symbol',
    title: 'Gender',
    text: 'The development and body fat composition of girls and boys vary with age. Consequently, a child\'s age and gender are considered when evaluating their BMI.',
  },
  age: {
    iconPath: iconAge,
    imgAltText: 'Green icon of a cake',
    title: 'Age',
    text: 'In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.',
  },
  muscle: {
    iconPath: iconMuscle,
    imgAltText: 'Purple icon of a strong arm',
    title: 'Muscle',
    text: 'BMI may misclassify muscular individuals as overweight or obese, as it doesn\'t differentiate muscle from fat.',
  },
  pregnancy: {
    iconPath: iconPregnancy,
    imgAltText: 'Yellow icon of a child',
    title: 'Pregnancy',
    text: 'Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.',
  },
  race: {
    iconPath: iconRace,
    imgAltText: 'Pink icon of a man',
    title: 'Race',
    text: 'Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.',
  },
}

export default contents
