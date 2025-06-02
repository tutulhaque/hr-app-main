import { Link, useLocation } from "react-router-dom";

const Banner = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const getPageTitle = (path) => {
    if (path === "/") return "Welcome To HR Application";
    return path.replace("/", "").toUpperCase();
  };

  return (
    <div>
      <div
        className="hero min-h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url(./banner.jpg)" }}
      >
        <div className="hero-overlay bg-[#412ad5]/60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              {getPageTitle(pathname)}
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/employees">
              <button className="btn btn-primary">All Employee</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
