import BlogList from "./BlogList";
import { useContext, useEffect } from "react";
import Header from "./Header";
import Load from "../../public/Images/loading.gif";
import { mycontext } from "../context";

const Blog = () => {
  const { data, setData, loading, steLoading } = useContext(mycontext);

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
    <>
      <Header text="Blog" />
      {loading && <img className="LoadImg" alt="Loading..." src={Load} />}
      {data && <BlogList data={data} />}
    </>
  );
};

export default Blog;
