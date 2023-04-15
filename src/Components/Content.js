import { useParams } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { mycontext } from "../context";
import Page404 from "./Page404";
import Load from "../../public/Images/loading.gif";
import Details from "./Detalis";

const Content = () => {
  const { blog, setBlog, loading, steLoading } = useContext(mycontext);
  const { id } = useParams();
  const ref404 = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs/" + id)
        .then((res) => {
          return res.json();
        })
        .then((x) => {
          setBlog(x);

          steLoading(false);
        });
    }, 1000);

    const blogArr = Object.keys(blog);
    if (blogArr.length === 0) {
      ref404.current = <Page404 />;
    }
  }, []);

  return (
    <>
      {blog.title ? <Details blogDetail={blog} /> : <div>{ref404.current}</div>}
      {loading && <img className="LoadImg" alt="Loading..." src={Load} />}
    </>
  );
};

export default Content;
