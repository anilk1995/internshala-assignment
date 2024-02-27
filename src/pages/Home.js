import { Link, Navigate, redirect } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Navigate to="home/hosting-for-all/hosting/hosting6/hosting5" />
      <Link to="/home/hosting-for-all/hosting6/hosting5">Go to Hosting</Link>
    </div>
  );
}

export default Home;
