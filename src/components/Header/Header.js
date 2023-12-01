import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Link to="gryffindor">Gryffindor</Link>
      <Link to="Slytherin">Slytherin</Link>
      <Link to="hufflepuff">Hufflepuff</Link>
      <Link to="ravenclaw">Ravenclaw</Link>
    </div>
  );
};

export default Header;
