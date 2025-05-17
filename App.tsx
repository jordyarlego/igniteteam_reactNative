import { ThemeProvider} from 'styled-components'
import theme from './src/theme'
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'

import { Groups } from './src/Groups';
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
    
  );
}


