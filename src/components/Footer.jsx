import { NavLink } from "react-router";
import { FaCar } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="bg-base-200 border-t mt-10 border-base-300 px-[8%]">
            {/* Main Footer Content */}
            <div className="container pt-2">
                <div className="flex flex-wrap justify-between">
                    {/* Brand Section */}
                    <div className="lg:col-span-1 max-w-[250px]">
                        <div className="flex items-center gap-3 mb-4">
                            <FaCar size={42} className="text-blue-800"></FaCar>
                            <h2 className="text-2xl md:text-4xl font-bold text-base-content">
                                TravelEase
                            </h2>
                        </div>
                        <p className="text-base-content/70 mb-2 leading-relaxed text-sm">
                            Your trusted partner for seamless vehicle rentals.
                            Discover the freedom of the open road with our
                            premium fleet and exceptional service.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-base-content mb-2">
                            Quick Links
                        </h3>
                        <ul className="space-y-0.5">
                            <li>
                                <NavLink
                                    to="/"
                                    className="text-base-content/70  transition-colors text-sm"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/allvehicles"
                                    className="text-base-content/70  transition-colors text-sm"
                                >
                                    Explore
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/"
                                    className="text-base-content/70  transition-colors text-sm"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className="text-base-content/70  transition-colors text-sm"
                                >
                                    Contact us
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Vehicle Types */}
                    <div className="">
                        <h3 className="text-lg font-semibold text-base-content mb-2">
                            Vehicle Types
                        </h3>
                        <ul className="space-y-0.5">
                            <li>
                                <a className="text-base-content/70  transition-colors text-sm">
                                    SUVs & Crossovers
                                </a>
                            </li>
                            <li>
                                <a className="text-base-content/70  transition-colors text-sm">
                                    Luxury Vehicles
                                </a>
                            </li>
                            <li>
                                <a className="text-base-content/70  transition-colors text-sm">
                                    Electric Cars
                                </a>
                            </li>
                            <li>
                                <a className="text-base-content/70  transition-colors text-sm">
                                    Vans & Minivans
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Support */}
                    <div>
                        <h3 className="text-lg font-semibold text-base-content mb-2">
                            Contact Us
                        </h3>
                        <div className="space-y-1">
                            <div className="flex items-start space-x-2">
                                <svg
                                    className="w-5 h-5 text-primary mt-0.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span className="text-base-content/70 text-sm">
                                    Adventure City, AC 12345
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <svg
                                    className="w-5 h-5 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <span className="text-base-content/70 text-sm">
                                    +1 (555) 123-4567
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <svg
                                    className="w-5 h-5 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span className="text-base-content/70 text-sm">
                                    support@travelease.com
                                </span>
                            </div>
                        </div>

                        {/* Newsletter Subscription */}
                        <div className="mt-2">
                            <div className="flex ">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-38 px-2  text-sm border border-base-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                />
                                <button className="bg-primary text-white px-1 py-1.5 rounded-r-lg hover:bg-primary-focus transition-colors text-sm font-medium">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-base-content mb-2">
                            Follow us{" "}
                        </h2>
                        <div className="flex mt-3 space-x-4">
                            <a className="text-base-content/60  transition-colors">
                                <svg
                                    className="w-6 h-6 text-blue-800"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a className="text-base-content/60  transition-colors">
                                <FaXTwitter className="text-2xl text-black"></FaXTwitter>
                            </a>
                            <a className="text-base-content/60  transition-colors">
                                <svg
                                    className="w-6 h-6 text-red-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z" />
                                </svg>
                            </a>
                            <a className="text-base-content/60  transition-colors">
                                <svg
                                    className="w-6 h-6 text-blue-400"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-base-300">
                <div className="container mx-auto px-4 py-2">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-base-content/60 text-sm">
                            © {new Date().getFullYear()} TravelEase. All rights
                            reserved.
                        </div>
                        <div className="flex space-x-2 text-sm">
                            <a className="text-base-content/60  transition-colors">
                                Privacy Policy
                            </a>
                            <a className="text-base-content/60  transition-colors">
                                Terms of Service
                            </a>
                            <a className="text-base-content/60  transition-colors">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
