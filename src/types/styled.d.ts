import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: string;
      gunmetal: string;
      darkElectricBlue: string;
      borders: string;
      white: string;
    };
    text: {
      fontWeight: {
        regular: number;
        semibold: number;
      },
      lineHeight: {
        heading: string;
        body: string;
      },
      letterSpacing: string
    }
  }
}
