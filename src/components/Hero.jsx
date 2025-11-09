import React from "react";
import { NavLink } from "react-router";

const Hero = () => {
    return (
        <div>
            {/* Hero Section */}
            <section
                className="hero min-h-[60vh] bg-cover bg-center"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url('https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde')",
                }}
            >
                <div className="hero-content text-center text-white">
                    <div className="max-w-lg">
                        <h1 className="text-4xl font-bold">
                            Find Your Perfect Ride with TravelEase
                        </h1>
                        <p className="py-4">
                            Explore, book, and manage vehicles effortlessly.
                        </p>
                        <div className="flex gap-3 justify-center">
                            <button className="btn bg-[#e7eef3] text-[#0e151b] rounded-xl px-5 font-bold">
                                <NavLink to={"/allvehicles"}>
                                    Explore All Vehicles
                                </NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
