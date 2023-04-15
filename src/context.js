import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const mycontext = createContext({
  data: [],
  setData: [],
  loading: [],
  steLoading: [],
  blog: [],
  setBlog: [],
  title: [],
  setTitle: [],
  text: [],
  setText: [],
});

const Contexts = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, steLoading] = useState(true);
  const [blog, setBlog] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = () => {
    const blog = { title, text };
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(setText(""), setTitle(""), alert("Successfuly"))
      .then(Navigate("/"));
  };

  const Fetching = () => {
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
  };

  return (
    <mycontext.Provider
      value={{
        Fetching,
        data,
        loading,
        steLoading,
        blog,
        setBlog,
        title,
        setTitle,
        setText,
        text,
        handleSubmit,
      }}
    >
      {children}
    </mycontext.Provider>
  );
};

export default Contexts;
