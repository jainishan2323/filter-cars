import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: {
        small: string;
        medium: string;
        large: string;
      },
      colors: {
        primary: string;
        secondary: string;
        text: string;
        background: string;
      },
      fontSize: {
        '14px': string;
        '12px': string;
        '18px': string;
        '32px': string;
      }
  }
}