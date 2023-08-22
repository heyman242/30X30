import { Link } from "react-router-dom";
import MainLogo from "../assets/icons/MainIcon";

const Landing = () => {
  return (
    <div>
      <nav className="w-[var(--fluid-width)] max-w-[var(--max-width)] mx-auto h-[var(--nav-height)] flex items-center">
        <MainLogo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1 className="text-5xl">
            30<span className="text-sky-500">X</span>30
          </h1>
          <p className="leading-2 text-sky-500 mb-6 max-w-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil totam
            culpa sunt quae sed, labore similique possimus quibusdam, maiores
            aliquam consectetur, suscipit alias? Repellat, cupiditate expedita.
            Magnam dolore exercitationem earum.
          </p>
          <div className="flex flex-row justify-center">
            <Link
              to="/register"
              className="border border-gray-950 rounded-full p-2 bg-sky-300 mr-2"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="border border-gray-950 rounded-full p-2 bg-white-300"
            >
              login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
