import React from 'react';
import { Container, Box, Stack, Typography, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { grey, red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '4rem'
        },
        h2: {
          fontSize: '3rem'
        },
        h3: {
          fontSize: '2rem'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 20,
        },
      },
  },
},
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: red[900],
    },
  },
});

function App() {
  const smallScreen = useMediaQuery('(max-width:600px)');
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 5, mt: smallScreen? 0 : 5}}>
        <Container maxWidth={smallScreen ? 'xl' : 'lg'}>
          <Stack spacing={5} direction="column">
            <Stack 
              justifyContent="center"
              alignItems="center" 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2}

            >
              <img width="200px" alt="Old Xaverian Logo" src="https://res.cloudinary.com/dgpuwpmjk/image/upload/v1691375158/oldxav_jo0wua.png"></img>
              <Typography variant="h1" textAlign="center">
                Old Xaverian Bitcoin Meetup
              </Typography>
            </Stack>
            <Typography variant="h2" textAlign="center">
              A bitcoin meetup group for Old Xaverians.
            </Typography>
            <Typography variant="h3" textAlign="center">
              Inaugural Meetup 12th October 2023
            </Typography>
            <Button target="_blank" href="https://www.eventbrite.com.au/e/inaugural-old-xav-bitcoin-meetup-tickets-695262357427?aff=oddtdtcreator" rel="noreferrer" fullWidth size="large" variant="contained" color="secondary">
              Register
            </Button>
            <Typography variant="body2" textAlign="center">
              Organised by Chris Pollard OX2003 (email cpollard [at] protonmail.com)
            </Typography>
          </Stack>
        </Container>
      </Box>

    </ThemeProvider>
  );
}

export default App;
