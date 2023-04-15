import { Route, Routes } from "react-router-dom";
import Blog from "./Components/Blog";
import Create from "./Components/Create";
import "./Stayle/Blog.css";
import Content from "./Components/Content";
import Page404 from "./Components/Page404";
import Contexts from "./context";

const App = () => {
  return (
    <>
      <Contexts>
        <Routes>
          <Route path="/" element={<Blog />} />

          <Route path="/create" element={<Create />} />
          <Route path="/:id" element={<Content />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Contexts>
    </>
  );
};

export default App;
