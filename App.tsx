import { ActivityIndicator} from 'react-native'
import { ThemeProvider} from 'styled-components'
import theme from './src/theme'
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { Loading } from './src/components/loading'
import { Groups } from './src/Groups';
export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});


  return (
    <ThemeProvider theme={theme}>
      {!fontsLoaded ? <Loading /> : <Loading />}
    </ThemeProvider>
    
  );
}


