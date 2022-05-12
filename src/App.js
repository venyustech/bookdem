import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./assets/GlobalStyles";
import HomePage from "./pages/HomePage";
import UserContext from "./providers/Auth";

export default function App() {
  const initializing = "initial_structure"

  return (
    <>
      <UserContext.Provider value={{ initializing }}>
        <BrowserRouter>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}