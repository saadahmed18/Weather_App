import { Link, NavLink } from "react-router";

export default function Header() {
  return (
    <>
      <header className="py-5">
        <div className="container m-auto px-4 flex justify-between items-center">
          <div className="text-2xl text-white font-bold">
            <Link to="/">Dark Weather</Link>
          </div>
          <nav>
            <ul className="flex gap-5 text-gray-400">
              <li>
                <NavLink to="/" className="active:text-white">Home</NavLink>
              </li>
              <li>
                <NavLink to="/download-app" className="active:text-white">Download App</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className="active:text-white">Contact Us</NavLink>
              </li>
            </ul>
          </nav>
            <Link to="/signup" className="p-3 rounded-lg text-white bg-[#2e5369]"> Sign up</Link>
        </div>
      </header>
    </>
  );
}
