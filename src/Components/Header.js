import { AppBar, MenuItem, Select, Toolbar, Typography } from '@mui/material'
import { dark } from '@mui/material/styles/createPalette';
import {ThemeProvider, createTheme} from '@mui/material/styles'
import { makeStyles} from '@mui/styles'
import { Container } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles(() => ({
    title: {
    flex: 1,
    color: "#fcfffd",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
    }
}));


const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      mode: 'dark',
    },
  });


const Header = () => {

    const classes = useStyles();
    const { currency, setCurrency} = CryptoState();
    const navigate = useNavigate(); //useHistory is replaced by useNavigate

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
        <Container>
            <Toolbar>
                <Typography 
                onClick = {() => navigate("/")} 
                variant="h6"
                className={classes.title}>
                    Crypto Key
                </Typography>

                <Select variant="outlined"
                style={{
                        width: 100,
                        height: 40,
                        marginRight: 15,
                        alignItems: "Right"
                    }}
                    value = {currency}
                    onChange = {(e) => setCurrency(e.target.value)}
                >
                    <MenuItem value={"INR"} >INR</MenuItem>
                    <MenuItem value= {"USD"}>USD</MenuItem>
                </Select>
            </Toolbar>
        </Container>

    </AppBar>
    </ThemeProvider>
  )
}

export default Header
