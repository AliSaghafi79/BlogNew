import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <h3>{props.text}</h3>

      <span>
        <Link className="link" to="/">
          <p>Home</p>
        </Link>

        <Link className="link" to="/create">
          <p>Create</p>
        </Link>
      </span>
    </header>
  );
};

export default Header;
