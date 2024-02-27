import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className="navbar">
      <SearchBar />
      <Link to="categories" className="link text-whiite">
        Categories
      </Link>
      <Link to="website-builders" className="link">
        Website Builders
      </Link>
      <Link to="deals" className="link">
        Today&apos;s deals{" "}
      </Link>
    </div>
  );
}

export default Navbar;
