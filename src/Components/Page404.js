import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="Page404">
      <p className="p1">
        404
        <br />
        <p className="p2">Not Found</p>
        <br />
        <Link className="link404" to={"/"}>
          Home
        </Link>
      </p>
    </div>
  );
};

export default Page404;
