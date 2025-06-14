
import { ThemeProvider} from 'styled-components/native'
import theme from './src/theme'
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { Loading } from './src/components/loading'
import { Routes } from './src/Routes'
import { StatusBar } from 'react-native'

export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});


  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
        {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
    
  );
}


