import Button from "./Button";

function SignUp() {
  return (
    <div className="d-flex align-items-center justify-content-between width-1024 mx-auto container gap-5 padded text-white mt-page">
      <h3 className="suggestion-heading">
        Sign up and get exclusive special deals
      </h3>
      <div className="d-flex">
        <input type="email" className="email-input" />
        <Button className="main-card-btn signup-btn">Sign Up</Button>
      </div>
    </div>
  );
}

export default SignUp;
