import { ThemeProvider } from  '@mui/material/styles';
import { Container, GlobalStyle } from '../src/Styles/StyleGeral';
import { theme } from './constants/theme';
import RouteComponent from './routes/RouteComponent';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <RouteComponent />
      </Container>
    </ThemeProvider>
  );
}

export default App;
