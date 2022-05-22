import { createTheme } from '@mui/material';
import styled from 'styled-components';
import desktop from '../../assets/desktopClean.png'
import ipad2 from '../../assets/iPad2.png'
import iPhone from '../../assets/iPhone.png'

export default function createThemes() {
    const theme = createTheme({
        palette: {
            primary: {
                light: '#f48fb1',
                dark: '#7c4dff',
                contrastText: '#fff',
                main: '#f50057'
            },
        },
    });
    return theme;
}

export const Container = styled.div`
    min-height:100vh;
    background-image: url(${desktop}) ;
    background-attachment: fixed;
    background-size:cover;
    background-repeat:no-repeat ;
    background-position:center;
    padding-bottom:30px ;
    @media(max-width:1000px){
        background-image: url(${ipad2});
        align-items: center;
    }
     @media(max-width:450px){
        background-image: url(${iPhone});
    }

`;
