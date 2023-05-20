import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  colors: {
    blue: '#345FF6',
    gunmetal: '#253347',
    darkElectricBlue: '#5E6E85',
    borders: '#D8E2E7',
    white: '#fff',
  },
  text: {
    fontWeight: {
      regular: 400,
      semibold: 600
    },
    lineHeight: {
      heading: '110%',
      body: '150%'
    },
    letterSpacing: '-0.05em'
  }
};

export { defaultTheme };
