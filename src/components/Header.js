import Breadcrumb from "./Breadcrumb";
import ContentValidity from "./ContentValidity";
import HeaderNav from "./HeaderNav";
import Title from "./Title";

function Header() {
  return (
    <div className="d-flex flex-column width-1024 mx-auto container gap-5 padded text-white">
      <Title>Best Website builder in the US</Title>
      <ContentValidity />
      <HeaderNav />
      <Breadcrumb />
    </div>
  );
}

export default Header;
