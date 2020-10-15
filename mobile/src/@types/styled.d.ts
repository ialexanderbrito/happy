import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    isLighten?: boolean;
    primary: string;
    secondary: string;
    primaryDarken: string;
    textColor: string;
    textSecondary: string;
    overlay: string;
  }
}
