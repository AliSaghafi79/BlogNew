import { createContext, useState } from "react";

export const mycontext = createContext({
  data: [],
  setData: [],
  loading: [],
  steLoading: [],
  blog: [],
  setBlog: [],
});

const Contexts = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, steLoading] = useState(true);
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((blog) => {
          setData(blog);

          steLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <mycontext.Provider
      value={{ data , loading, steLoading, blog, setBlog }}
    >
      {children}
    </mycontext.Provider>
  );
};

export default Contexts;
