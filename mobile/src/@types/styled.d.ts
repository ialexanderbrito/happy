import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    isLighten?: boolean;
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    tertiary: string;
    tertiaryLight: string;
    tertiaryDark: string;
    gradientText: string;
    title: string;
    text: string;
    background: string;
    formBackground: string;
    inputBackground: string;
    borderColor: string;
    headerColor: string;
    overlay: string;
  }
}
