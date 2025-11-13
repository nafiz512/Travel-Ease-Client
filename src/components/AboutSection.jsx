import React from "react";
import { NavLink } from "react-router";

const AboutSection = () => {
    return (
        <div className="bg-base-100">
            {/* Hero About Section */}
            <section className=" px-4 md:px-8 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-6 md:mb-12">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Why Choose
                            <span className="text-primary">TravelEase</span>?
                        </h2>
                        <p className="text-xl pt-3 text-base-content/50 max-w-3xl mx-auto leading-relaxed">
                            Experience the future of vehicle rentals with our
                            innovative platform designed for modern travelers
                            who value convenience, reliability, and freedom.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        {/* Text Content */}
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className=" w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6 text-primary"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-base-content mb-2">
                                        Instant Booking
                                    </h3>
                                    <p className="text-base-content/70">
                                        Book your perfect vehicle in under 60
                                        seconds with our streamlined process. No
                                        hidden fees, no complicated forms.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className=" w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6 text-secondary"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-base-content mb-2">
                                        Fully Insured & Verified
                                    </h3>
                                    <p className="text-base-content/70">
                                        Every vehicle on our platform is
                                        thoroughly verified and comes with
                                        comprehensive insurance coverage for
                                        your peace of mind.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className=" w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6 text-accent"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-base-content mb-2">
                                        Community Driven
                                    </h3>
                                    <p className="text-base-content/70">
                                        Join thousands of satisfied travelers
                                        and vehicle owners who trust our
                                        platform for their mobility needs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                    alt="Modern car rental experience"
                                    className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0  from-base-100/20 to-transparent"></div>
                            </div>

                            {/* Floating Stats Card */}
                            <div className="absolute -bottom-6 -left-6 bg-base-100 rounded-xl shadow-xl p-6 border border-base-300">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary mb-1">
                                        50K+
                                    </div>
                                    <div className="text-sm text-base-content/70">
                                        Happy Travelers
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-6">
                            <div className="text-3xl font-bold text-primary mb-2">
                                500+
                            </div>
                            <div className="text-base-content/70">
                                Vehicles Available
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="text-3xl font-bold text-secondary mb-2">
                                24/7
                            </div>
                            <div className="text-base-content/70">
                                Customer Support
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="text-3xl font-bold text-accent mb-2">
                                100+
                            </div>
                            <div className="text-base-content/70">
                                Cities Covered
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="text-3xl font-bold text-primary mb-2">
                                4.9★
                            </div>
                            <div className="text-base-content/70">
                                Customer Rating
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary/5 py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl md:text-4xl font-bold text-base-content mb-4">
                        Ready to Start Your Journey?
                    </h3>
                    <p className="text-base-content/70 text-lg mb-8 max-w-2xl mx-auto">
                        Join thousands of travelers who have made TravelEase
                        their preferred choice for vehicle rentals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <NavLink to={"/allvehicles"}>
                            <button className="btn btn-primary btn-lg px-8">
                                Browse Vehicles
                            </button>
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutSection;
