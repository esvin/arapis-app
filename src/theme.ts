import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffad06',
      contrastText: '#000000',
    },
    secondary: {
      main: '#714300',
      contrastText: '#ffffff'
    },
    warning: {
      main: '#FFB547',
    },
    background: {
      default: '#E7EBF0',
    }
  },
});

export default theme;
