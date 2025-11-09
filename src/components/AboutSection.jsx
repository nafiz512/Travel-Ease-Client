import React from "react";

const AboutSection = () => {
    return (
        <div>
            <section className="mb-8 py-10 px-6 md:px-20">
                <h2 className="text-[22px] font-bold  px-4 pb-3 pt-5 text-base-content">
                    About TravelEase
                </h2>
                <p className="text-base font-normal leading-normal pb-3 pt-1 px-4 text-base-content">
                    TravelEase is your go-to platform for seamless vehicle
                    rentals. Whether you're planning a weekend getaway or a
                    cross-country adventure, we connect you with a wide range of
                    vehicles to suit your needs. Our user-friendly interface and
                    secure booking process ensure a hassle-free experience from
                    start to finish.
                </p>
                <div className="w-full p-4">
                    <div
                        className="w-full h-[500px] bg-center bg-no-repeat bg-cover  rounded-xl flex-1"
                        style={{
                            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQ82eprtFqTyowrlsps84EZxFjbbLC-dnI2kJRozZfs63jqfFg7_co50ZhIZSGBxPjb0k9O3h15eOmmJn8wK4n6WJ0EFBJ7t5NBeAw2QXs_ftAnPnBDb18rocDoq1BwYJ-48FcA8iNo9ztX9iWCVwsqhv2HawA6BLw5USl9bZrKgBoffFJ37tU-6sy2grH-ApDVB51fURJGpoVH1u9YIrPPCustvaHcbMptuAn8r9x18xgkwmpnRAXWUTGfvjVp0OL5lp2Kx-uiU0")`,
                        }}
                    ></div>
                </div>
            </section>
        </div>
    );
};

export default AboutSection;
