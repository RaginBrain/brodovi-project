import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import './index.css';
import App from './App';


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// All `Portal`-related components need to have the main app wrapper element as a container
// so that they are in the subtree under the element used in the `important` option of the Tailwind's config.
const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);

