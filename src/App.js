import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./assets/GlobalStyles";
import AuthProvider from "./context/Auth";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";

export default function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}