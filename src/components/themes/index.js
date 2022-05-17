import { createTheme } from '@mui/material';

function createThemes() {
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

export default createThemes;