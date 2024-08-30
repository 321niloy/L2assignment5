import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";

import { logout } from "../../Redux/Features/Auth/AuthSlice";

const Navbar = () => {
  const user = useAppSelector((state) => state.auth.user); // Use user from the auth state
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); // Add useNavigate hook

  const logOutHandleButton = () => {
    dispatch(logout());
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div>
      <nav className="bg-black dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center rtl:space-x-reverse">
            <img
              src="https://i.ibb.co/Yd1d682/pngtree-3d-illustration-of-a-blue-lightweight-enduro-motorcycle-for-touring-image-3783100-removebg-p.png"
              className="h-12"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#00A2E2]">
              Rental Bike
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
            {!user && (
              <Link
                to="/login"
                type="button"
                className="text-white me-2 bg-[#00A2E2] hover:bg-[#00A2E2] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#00A2E2] dark:hover:bg-[#00A2E2] dark:focus:ring-blue-800"
              >
                Login
              </Link>
            )}
            {user && (
              <button
                onClick={logOutHandleButton}
                type="button"
                className="text-white bg-[#00A2E2] hover:bg-[#00A2E2] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#00A2E2] dark:hover:bg-[#00A2E2] dark:focus:ring-blue-800"
              >
                Logout
              </button>
            )}
            <Link
              to="/signup"
              type="button"
              className="text-white  bg-[#00A2E2] hover:bg-[#00A2E2] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#00A2E2] dark:hover:bg-[#00A2E2] dark:focus:ring-blue-800"
            >
              SignUp
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white bg-[#00A2E2] rounded md:bg-transparent md:text-[#00A2E2] md:p-0 md:dark:text-[#00A2E2]"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#00A2E2] md:p-0 md:dark:hover:text-[#00A2E2] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>

              <li>
                {user && (
                  <Link
                    to="/dashboard"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#00A2E2] md:p-0 md:dark:hover:text-[#00A2E2] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Dashboard
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
