import { Link } from "react-router-dom";
import Button from "./Button";

const headernav = [
  "Tools",
  "AWS Builder",
  "Start Building",
  "Start Build",
  "Build Supplies",
  "Tooling",
  "Blue Hosting",
];
function HeaderNav() {
  return (
    <ul>
      {headernav.map((navItem, index) => (
        <li key={index}>
          <Link className="link-unstyled text-white">{navItem}</Link>
        </li>
      ))}
    </ul>
  );
}

export default HeaderNav;
