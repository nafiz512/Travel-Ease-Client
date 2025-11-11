import React from "react";

const RecentlyAdded = () => {
    return (
        <div>
            <section className="py-10 px-6 md:px-20">
                <h2 className="text-2xl font-bold mb-4">
                    Recently Added Vehicles
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {["Luxury Sedan", "Compact Car", "Electric Car", "SUV"].map(
                        (v, i) => (
                            <div
                                key={i}
                                className="card bg-base-200 shadow-md  hover:shadow-lg hover:shadow-base-content transition-all hover:scale-105"
                            >
                                <figure>
                                    <img
                                        src={`https://picsum.photos/400/250?random=${
                                            i + 1
                                        }`}
                                        alt={v}
                                        className="object-cover"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h3 className="font-semibold">{v}</h3>
                                    <p className="text-sm text-gray-500">
                                        Location: California
                                    </p>
                                    <p className="text-primary font-bold">
                                        $80/day
                                    </p>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </section>
        </div>
    );
};

export default RecentlyAdded;
