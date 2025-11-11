import { use, useEffect, useState } from "react";
import { NavLink } from "react-router";
import avater from "/avater.png";
import { AuthContext } from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

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

    const links = (
        <>
            <li className=" font-medium ">
                <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                        isActive ? "bg-secondary text-white" : ""
                    }
                >
                    Home
                </NavLink>
            </li>
            <li className=" font-medium ">
                <NavLink
                    to={"/allvehicles"}
                    className={({ isActive }) =>
                        isActive ? "bg-secondary text-white" : ""
                    }
                >
                    All Vehicles
                </NavLink>
            </li>

            <li className=" font-medium ">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "bg-secondary text-white" : ""
                    }
                    to={"/myvehiclesicle"}
                >
                    {" "}
                    My Vehicles
                </NavLink>
            </li>
            <li className=" font-medium ">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "bg-secondary text-white" : ""
                    }
                    to={"/mybookings"}
                >
                    My Bookings
                </NavLink>
            </li>
            <li className=" font-medium ">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "bg-secondary text-white" : ""
                    }
                    to={"/addvehicle"}
                >
                    Add Vehicle
                </NavLink>
            </li>
            <li className=" font-medium ">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "bg-secondary text-white" : ""
                    }
                    to={"/vehicle-details"}
                >
                    Vehicle Details
                </NavLink>
            </li>
        </>
    );

    return (
        <div>
            <div className="mx-auto navbar shadow rounded-md">
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
                        <div className="flex items-center gap-3">
                            <svg
                                viewBox="0 0 48 48"
                                fill="currentColor"
                                className="w-6 h-6 text-primary"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                                ></path>
                            </svg>
                            <h2 className="text-lg font-bold">TravelEase</h2>
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
                        <div className="space-x-2 flex">
                            <NavLink to={"/login"}>
                                <button className="btn bg-white text-black h-9 rounded-3xl">
                                    Log in
                                </button>
                            </NavLink>
                            <NavLink
                                to={"/signup"}
                                className={`hidden sm:flex`}
                            >
                                <button className="btn h-9 border border-black rounded-3xl text-gray-50 ">
                                    Sign up
                                </button>
                            </NavLink>
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
                                    className="flex justify-center gap-3 items-center m-1"
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
