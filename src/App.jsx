import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Home, Blog, Post } from "./pages";
import { Info } from "./pages/Info";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/post" element={<Post />}></Route>
        <Route path="/info" element={<Info />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
