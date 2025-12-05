import { use, useEffect, useState } from "react";
import { NavLink } from "react-router";
import avater from "/avater.png";
import { AuthContext } from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { FaCar } from "react-icons/fa";

const notifySuccess = (message) => toast.success(message);
const notifyError = (message) => toast.error(message);

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext);

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Apply theme to HTML tag
    useEffect(() => {
        document.querySelector("html").setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                notifySuccess("Sign-out Successful");
            })
            .catch(() => {
                notifyError("Sign-out Unsuccessful");
            });
    };
    const baseLinks = [
        { path: "/", label: "Home" },
        { path: "/allvehicles", label: "All Vehicles" },
        { path: "/about", label: "About" },
        { path: "/contact", label: "Contact" },
    ];

    const authenticatedLinks = [
        { path: "/myvehicle", label: "My Vehicles" },
        { path: "/mybookings", label: "My Bookings" },
        { path: "/addvehicle", label: "Add Vehicle" },
    ];
    const allLinks = user ? [...baseLinks, ...authenticatedLinks] : baseLinks;

    const links = (
        <>
            {allLinks.map((link) => (
                <li key={link.path} className="font-medium relative">
                    <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                            `px-2 py-1 inline-block transition-colors duration-300 ${
                                isActive
                                    ? "text-primary font-semibold"
                                    : "text-base-content hover:text-primary/80"
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <span className="group relative">
                                {link.label}
                                <div
                                    className={`absolute left-0 bottom-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                                        isActive
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                    }`}
                                ></div>
                            </span>
                        )}
                    </NavLink>
                </li>
            ))}
        </>
    );

    return (
        <div>
            <div className=" sm:px-[8%] navbar shadow rounded-md">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
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
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <NavLink to={"/"} className=" font-bold text-xl">
                        <div className="flex items-center">
                            <FaCar size={24} className="text-blue-800"></FaCar>
                            <h2 className="text-2xl font-bold">TravelEase</h2>
                        </div>
                    </NavLink>
                </div>
                <div className="navbar-center hidden sm:flex">
                    <ul className="menu hidden lg:flex sm:flex-row menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-3 md:space-x-4">
                    <button onClick={toggleTheme}>
                        {theme === "light" ? (
                            <svg
                                className="swap-off h-5 md:h-10 w-5 md:w-10 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        ) : (
                            <svg
                                className="swap-on h-8 md:h-10 w-8 md:w-10 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>
                        )}
                    </button>

                    {!user ? (
                        <div className="space-x-2 py-2 flex">
                            <NavLink to={"/login"}>
                                <button className="btn bg-blue-500 text-white h-9 rounded-3xl">
                                    Log in
                                </button>
                            </NavLink>
                            {/* <NavLink
                                to={"/signup"}
                                className={`hidden sm:flex`}
                            >
                                <button className="btn h-9 border bg-accent rounded-3xl text-gray-50 ">
                                    Sign up
                                </button>
                            </NavLink> */}
                        </div>
                    ) : (
                        <div>
                            <div
                                className="dropdown dropdown-start dropdown-hover"
                                onMouseEnter={() => setIsDropdownOpen(true)}
                                onMouseLeave={() => setIsDropdownOpen(false)}
                            >
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="flex justify-center gap-3  items-center "
                                >
                                    <img
                                        src={user?.photoURL || avater}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = avater;
                                        }}
                                        className="size-12 p-0.5 border-2 border-secondary rounded-full cursor-pointer"
                                        alt="profile avatar"
                                    />
                                </div>

                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.ul
                                            tabIndex={-1}
                                            className="dropdown-content menu bg-gray-500 z-50 rounded-box -ml-20 w-34 md:w-32 p-2 shadow-sm"
                                            initial={{
                                                opacity: 0,
                                                y: -10,
                                                scale: 0.95,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: -10,
                                                scale: 0.95,
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                <p className="text-lg text-white md:text-xl font-semibold mb-2">
                                                    {user.displayName}
                                                </p>
                                                <motion.li
                                                    className="rounded-lg font-semibold hover:bg-accent text-white mb-1"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <NavLink to={"/myprofile"}>
                                                        My Profile
                                                    </NavLink>
                                                </motion.li>
                                                <motion.li
                                                    onClick={handleSignOut}
                                                    className="rounded-lg font-semibold hover:bg-accent text-white"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <a className="cursor-pointer">
                                                        Sign-Out
                                                    </a>
                                                </motion.li>
                                            </motion.div>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
