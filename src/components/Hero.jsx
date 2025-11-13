import React from "react";
import { NavLink } from "react-router";

const Hero = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero min-h-[20vh] md:min-h-[60vh]  relative ">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-1"
                >
                    <source src="/hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="hero-content text-center text-white relative z-10">
                    <div className="max-w-lg">
                        <h1 className="text-4xl font-bold">
                            Find Your Perfect Ride with TravelEase
                        </h1>
                        <p className="py-4">
                            Explore, book, and manage vehicles effortlessly.
                        </p>
                        <div className="flex gap-3 justify-center">
                            <NavLink to={"/allvehicles"}>
                                <button
                                    type="submit"
                                    className="btn btn-primary text-primary-content tracking-[0.015em] w-full mt-4"
                                >
                                    <span className="truncate">
                                        Explore All Vehicles
                                    </span>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
