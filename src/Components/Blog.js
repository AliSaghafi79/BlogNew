import BlogList from "./BlogList";
import { useContext } from "react";
import Header from "./Header";
import Load from "../Images/loading.gif";
import { mycontext } from "../context";

const Blog = () => {
  const { data, loading } = useContext(mycontext);

  return (
    <>
      <Header text="Blog" />
      {loading && <img className="LoadImg" alt="Loading..." src={Load} />}
      {data && <BlogList data={data} />}
    </>
  );
};

export default Blog;
