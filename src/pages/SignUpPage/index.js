import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import * as M from '@mui/material'
import { createTheme } from '@mui/material/styles';
import logo from '../../assets/logo.png'
import * as S from './styles';
import { BsPersonCircle } from 'react-icons/bs';
import PasswordInput from '../../components/PasswordInput';
import { signUp } from '../../services/api';

function SignUp() {
    const navigate = useNavigate();
    const [values, setValues] = React.useState({
        username: '',
        email: '',
        password: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.email && values.username && values.password)
            handlePromise()
        else {
            alert("preencha todos os campos")
        }
    };
    function handlePromise() {
        console.log("values: ", values)
        const promise = signUp({
            email: values.email,
            username: values.username,
            password: values.password,
            profileImg: "https://picsum.photos/300/300",
            backgroungImg: "https://picsum.photos/300/300",
            description: "new user",
        });

        promise.then(response => {
            alert("Usuário cadastrado. Faça Login agora")
            navigate('/sign-in')

        })
        promise.catch(error => {
            console.log("mensagem>: ", error.response)
            if (error.response.status === 409) {
                alert("Credenciais já cadastradas! Tente novamente")
            }
            else {
                alert("Erro no sistema! Tente novamente.")
            }
        })

    }

    return (
        <M.ThemeProvider theme={theme} >
            <M.Container component="main" maxWidth="xs" height="xs" >
                <M.CssBaseline />
                <M.Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <S.Img src={logo} alt="logoimg" />
                    <S.PersonLogo>
                        <BsPersonCircle />
                        <div>Cadastro</div>
                    </S.PersonLogo>

                    <M.Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <M.TextField
                            onChange={handleChange('username')}
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <M.TextField
                            onChange={handleChange('email')}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <PasswordInput values={values} setValues={setValues} />
                        <M.Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, mb: 3, padding: '12px' }}
                        >
                            Entrar
                        </M.Button>
                        <M.Box container sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>

                            <M.Link href="#" variant="body2">
                                {"Já possui conta? Faça login"}
                            </M.Link>
                        </M.Box>
                    </M.Box>
                </M.Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </M.Container>
        </M.ThemeProvider >

    );
}
function Copyright() {
    return (
        <M.Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 3, mb: 2 }}>
            {'Copyright © '}
            <M.Link color="inherit" href="https://github.com/venyustech">
                Bookdem by VenyusTECH
            </M.Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </M.Typography>
    );
}

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

export default SignUp;