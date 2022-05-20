import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./assets/GlobalStyles";
import AuthProvider from "./context/Auth";
import Books from "./pages/Books";
import Groups from "./pages/Groups";
import HomePage from "./pages/HomePage";
import MyGroups from "./pages/MyGroups";
import NewGroup from "./pages/NewGroup";
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
            <Route path="/groups" element={<Groups />} />
            <Route path="/books" element={<Books />} />
            <Route path="/myGroups" element={<MyGroups />} />
            <Route path="/newGroup" element={<NewGroup />} />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}