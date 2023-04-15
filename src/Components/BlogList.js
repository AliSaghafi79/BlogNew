import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";

const BlogList = (props) => {
  const Navigate = useNavigate();

  const Delete = (dlt) => {
    fetch("http://localhost:8000/blogs/" + dlt, {
      method: "DELETE",
    }).then(() => {
      Navigate(0);
    });
  };
  return (
    <div className="blogList">
      {props.data.map((blogsData) => (
        <div className="blogBox" key={blogsData.id}>
          <RiDeleteBin6Line
            onClick={() => Delete(blogsData.id)}
            className="Delete"
          />

          <Link to={`/${blogsData.id}`}>
            <BiLogIn className="login" />
          </Link>

          <div className="blogTitle">
            <p>{blogsData.title} </p>
          </div>
          <div className="blogText">
            <p>{blogsData.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
