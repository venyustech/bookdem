import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import * as M from '@mui/material'
import logo from '../../assets/logo.png'
import * as S from '../../assets/IconsStyles'
import { BsPersonCircle } from 'react-icons/bs';
import PasswordInput from '../../components/PasswordInput';
import { signUp } from '../../services/api';
import createThemes from '../../components/themes';
import Copyright from '../../components/Copyright';
import { useAuth } from '../../context/Auth';

function SignUp() {
    const navigate = useNavigate();
    const { token } = useAuth();

    React.useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token, navigate])


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
            if (error.response.status === 409) {
                alert("Credenciais já cadastradas! Tente novamente")
            }
            else {
                alert("Erro no sistema! Tente novamente.")
            }
        })

    }

    return (
        <M.ThemeProvider theme={createThemes()} >
            <M.Container component="main" maxWidth="xs" height="xs" >
                <M.CssBaseline />
                <M.Box
                    sx={{
                        marginTop: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <S.ImgLogo src={logo} alt="logoimg" />
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

                            <M.Link variant="body2"
                                sx={{ cursor: "pointer" }}
                                onClick={() => { navigate('/sign-in') }}
                            >
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

export default SignUp;