import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Compononent/Provider/AuthProvider";
import { baseURL } from "../../config/config";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { currentUser, setCurrentUserUser } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (currentUser) {
        try {
          const response = await fetch(
            `${baseURL}/user-route/getSingleUser/${currentUser.email}`
          );
          const data = await response.json();
          setUser(data.result);
        } catch (error) {
          console.error("Error fetching user data", error);
        }
      }
    };

    fetchData();
  }, [currentUser]);

  const handleLogut = () => {
    setCurrentUserUser(null);
    navigate("/login");
  };

  return (
    <div>
      <div className="navbar bg-slate-50 shadow-xl text-[#636AD9] px-12 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Register</a>
              </li>
              <li>
                <a>Add User</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <Link to='/'><li>
              <a>Register</a>
            </li></Link>
           <Link to='/addUser'> <li>
              <a>Add User</a>
            </li></Link>
            <li>
              <a>Dashboard</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          {currentUser?.email && user ? (
            <div className="flex gap-6 items-center ">
              <p>{user.name}</p>
              <button
                className="border py-1 px-6 bg-slate-100"
                onClick={handleLogut}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              {" "}
              <button className="border py-1 px-6 bg-slate-100">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
