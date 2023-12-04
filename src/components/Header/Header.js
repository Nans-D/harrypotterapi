import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <img
          className="logo-header"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/HP_-_Harry_Potter_wordmark.svg/438px-HP_-_Harry_Potter_wordmark.svg.png"
          alt=""
        />
      </Link>
      <div className="links">
        <Link className="links-header" to="gryffindor">
          Gryffindor
        </Link>
        <Link className="links-header" to="Slytherin">
          Slytherin
        </Link>
        <Link className="links-header" to="hufflepuff">
          Hufflepuff
        </Link>
        <Link className="links-header" to="ravenclaw">
          Ravenclaw
        </Link>
      </div>
    </div>
  );
};

export default Header;
