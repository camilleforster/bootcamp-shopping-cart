import React from 'react';
import PropTypes from 'prop-types';
const { nextRedux } = require('../redux/store');
import '../styles.css'
import { createTheme, Link, ThemeProvider } from '@material-ui/core';
import { BorderAllRounded } from '@material-ui/icons';

// Simple functional App component which can be wrapped
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#017a87'
    },
    text: {
      secondary: {
        color: '#61616'
      }
    }
  },
  typography: {
    h1: {
      fontFamily: 'Palanquin Dark, sans-serif'
    },
    h2: {
      fontFamily: 'Palanquin Dark, sans-serif'
    },
    h3: {
      fontFamily: 'Palanquin Dark, sans-serif'
    },
    h4: {
      fontFamily: 'Palanquin Dark, sans-serif',
      fontSize: '25px'
    },
    h5: {
      fontFamily: 'Yantramanav, sans-serif',
      fontWeight: 300
    },
    h6: {
      fontFamily: 'Yantramanav, sans-serif',
      textDecoration: "line-through",
      fontWeight: 100
    },
    body1: {
      fontFamily: 'Yantramanav, sans-serif',
      fontWeight: 100,
    },
    body2: {
      fontFamily: 'Yantramanav, sans-serif',
      fontWeight: 100,
    },
    button: {
      fontFamily: 'Yantramanav, sans-serif',
      textTransform: 'none',
    },
  },
  overrides: {
      MuiPaper: {
        rounded: {
          borderRadius: '10px',
        },
        elevation1: {
          boxShadow: '0'
        }
      },
      MuiButton: {
        contained: {
          boxShadow: '0'
        },
      },
      MuiBadge: {
        badge: {
          fontFamily: 'Yantramanav, sans-serif'
        }
      },
      MuiOutlinedInput: {
        input: {
          padding: '5px',
          textAlign: 'center'
        }
      }
  },
})

function WrappedApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component { ...pageProps } />
    </ThemeProvider>
  );
}

WrappedApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
};

// wrap the app with higher-order components
export default [
  nextRedux.withRedux,
].reduce((cmp, hoc) => hoc(cmp), WrappedApp);
