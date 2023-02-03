import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Forgotpass } from "./pages/Forgotpass";
import { AuthProvider } from "./RealContext";
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/forgot_pass" element={<Forgotpass />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
export default App;
