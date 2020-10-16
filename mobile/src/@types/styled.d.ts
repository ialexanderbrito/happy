import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    isLighten?: boolean;
    primary: string;
    secondary: string;
    tertiary: string;
    primaryDarken: string;
    textColor: string;
    textDescription: string;
    textSecondary: string;
    overlay: string;
    headerColor: string;
    headerBorder: string;
  }
}
