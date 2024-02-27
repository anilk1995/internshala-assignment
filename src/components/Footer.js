import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="navbar h-452 ">
      <div className="d-flex  justify-content-between width-1024 mx-auto container gap-5">
        <div className="d-flex flex-column gap-10 ">
          <h4 className="link font-s">CATEGORIES</h4>
          <Link className="link font-xs" to="builder">
            Web Builder
          </Link>
          <Link className="link font-xs" to="builder">
            Hosting
          </Link>
          <Link className="link font-xs" to="builder">
            Data Center
          </Link>
          <Link className="link font-xs" to="builder">
            Robotic-Automation
          </Link>
        </div>
        <div className="d-flex flex-column gap-10">
          <h4 className="link font-s">Contact</h4>
          <Link className="link font-xs" to="contact">
            Contact
          </Link>
          <Link className="link font-xs" to="policy">
            Privacy Policy
          </Link>
          <Link className="link font-xs" to="services">
            Terms Of Services
          </Link>
          <Link className="link font-xs" to="services">
            Categories
          </Link>
          <Link className="link font-xs" to="services">
            About
          </Link>
        </div>
        <div className="d-flex align-items-center">
          <h4 className="link font-s">United States</h4>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.96967 8.61091C6.26256 8.32973 6.73744 8.32973 7.03033 8.61091L12.5 13.8617L17.9697 8.61091C18.2626 8.32973 18.7374 8.32973 19.0303 8.61091C19.3232 8.89208 19.3232 9.34796 19.0303 9.62911L13.0303 15.3891C12.7374 15.6703 12.2626 15.6703 11.9697 15.3891L5.96967 9.62911C5.67678 9.34796 5.67678 8.89208 5.96967 8.61091Z"
              fill="#626E79"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Footer;
