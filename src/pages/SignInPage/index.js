import * as React from "react";
import { useNavigate } from "react-router-dom";
import * as M from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import logo from "../../assets/logo.png";
import * as Icon from "../../assets/IconsStyles";
import { BsPersonCircle } from "react-icons/bs";
import PasswordInput from "../../components/PasswordInput";
import { signIn } from "../../services/api";
import { useAuth } from "../../context/Auth";
import createThemes from "../../components/themes";
import Copyright from "../../components/Copyright";

function SignIn() {
  const navigate = useNavigate();
  const { token, setToken } = useAuth();

  React.useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const [checked, setChecked] = React.useState(true);

  const handleChangeCheckBox = (event) => {
    setChecked(event.target.checked);
  };
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    showPassword: false,
  });
  const handleChangeInput = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.username && values.password) handlePromise();
    else {
      alert("preencha todos os campos");
    }
  };

  function handlePromise() {
    const promise = signIn({
      username: values.username,
      password: values.password,
    });

    promise.then((response) => {
      setToken(response.data.token);
      if (checked) localStorage.setItem("token", response.data.token);
      navigate("/");
    });
    promise.catch((error) => {
      console.log("error:", error.response);
      if (error.response.status === 401)
        alert("Username ou senha incorretos! Tente novamente");
      else {
        alert("Erro no sistema! Tente novamente.");
      }
    });
  }

  return (
    <M.ThemeProvider theme={createThemes()}>
      <M.Container component="main" maxWidth="xs">
        <M.CssBaseline />
        <M.Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Icon.ImgLogo src={logo} alt="logoimg" />
          <Icon.PersonLogo>
            <BsPersonCircle />
            <div>Login</div>
          </Icon.PersonLogo>

          <M.Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <M.TextField
              onChange={handleChangeInput("username")}
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <PasswordInput values={values} setValues={setValues} />

            <M.FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChangeCheckBox}
                  inputProps={{ "aria-label": "controlled" }}
                  value="remember"
                  color="primary"
                />
              }
              label="Remember me"
            />
            <M.Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 3, padding: "12px" }}
            >
              Entrar
            </M.Button>
            <M.Box
              container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <M.Link
                variant="body2"
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/sign-up");
                }}
              >
                {"Não possui uma conta? Cadastre-se"}
              </M.Link>
            </M.Box>
          </M.Box>
        </M.Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </M.Container>
    </M.ThemeProvider>
  );
}
export default SignIn;
