import React from "react";
import { FaFlag, FaLightbulb } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { AiOutlineGlobal } from "react-icons/ai";

const About = () => {
    const heroImageUrl =
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA4LWjU0UmSC6KH8mPDenct9w0luax4c86RRO4tjWEfl4gPIfj34oMcG_qnDIEAEFETLwDjAmm7uqrXodTGm1_9YOHT2-Yx7kWMU7KoRaCXsOhJBzE1hGMdjaWXEzpLaDioYx0d8P7YFsaBLGHgLU_3zO5OIJ6BbCExNKVb5Qt0TLsfP9t-rrfFqntNA_79XBOiDf288nTy96WrSfb-KB82WuhoDMN8qUYQ4tqCzDqvyFR4jV8GTLM-EjiLfBGLg2_SaONUOaCVsZQ";
    const janeProfileUrl =
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC1HDMRxg1C2-94AJhfSpJHYTstQhzDEt6LQG01qg7bfPwFXZYwzBEATk5sx0n53PdKDDEuLJd6TPu4syk5tGgq-VNhVCRsQcB57o0P3UD18pqM6jDHgFpFLT0LyN-XUmyQZ26BdCWHzU-wYfQKnEH1fFTDT5fzZwdBioHfs5osB3xXjw-rQcA7f5cJG2zYB9V8kSEDdel-xN2liwZB2FOeC0VdgEj4iCACqVXE1NmMbO9WgcteAnpqZ-gd3xvy7F0S_i0K-RdgVWs";
    const johnProfileUrl =
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDaKtsFAFi6-Occ2ao5BOvsZrewH2dlGzg8UGaQhlt2wiFOCV9MfsXiNABEiNMLT5r_Rl4IIMK4Mhjw67U8bQDJ5RxxdphQXuFBOVW-hIP0rTOFn1ooFvohnKF9PHknGLR6Si63h2nyxLzYZegyO1JbQHwZicSPuvaLvNc3906kZGgywHBvHinUrN3c0-ugaEeKjOxLQHTTLJx3GdUKImY22e3T25D0ZQCE-sNUskuz5peJhTYI8cHrx3CtDz0bxOL_YKytEbQcp7Q";
    const emilyProfileUrl =
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDBym2nOjMok2utMursYpLHj1eMf7TVU3iOWDLvgnybb3CIdzWkcEQtUU1tVsWRIt7bqV3VWeq6ntNAU1LTPvKfVrWeGakLkEp8d3xuDQ5OwBFtmwt0XYty6GKkHj1ZyQS6WJMuLvyq77zRG8bISqFWVF7x6QK6TfIMEsv6MdMmQHyZPIYZTKs7sneBwqrnttXwExPRDmZO7JyURJhOPYjKznIWlP__dn54zgYbrffSQKnfb-NEXisjRSmxxU6Kgj2pmzGu3XvQw2E";

    return (
        <div className="w-10/12 mx-auto gap-12 sm:gap-16 md:gap-20 ">
            {/* Hero Section */}
            <div className=" mt-2">
                <div className="@[480px]:p-4">
                    <div
                        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                        data-alt="A scenic road winding through mountains at sunset, symbolizing a journey."
                        style={{
                            backgroundImage: `linear-gradient(rgba(17, 26, 33, 0.6) 0%, rgba(17, 26, 33, 0.9) 100%), url("${heroImageUrl}")`,
                        }}
                    >
                        <div className="flex flex-col gap-4 text-center max-w-2xl">
                            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl font-heading">
                                Our Journey to Redefine Travel
                            </h1>
                            <p className="text-white text-sm font-normal leading-normal @[480px]:text-base">
                                At TravelEase, we're dedicated to simplifying
                                your travel experience, connecting you
                                seamlessly with your next destination. Discover
                                our story and the people making it happen.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Beliefs Section */}
            <div className="flex flex-col gap-10  py-10 ">
                <div className="flex flex-col gap-4 text-center items-center">
                    <h2 className=" tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl font-heading">
                        Our Core Beliefs
                    </h2>
                    <p className="text-base-contse text-base font-normal leading-normal">
                        We are driven by a set of core values that shape our
                        culture, our product, and our commitment to you.
                    </p>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 p-0">
                    {/* Mission Card */}
                    <div className="flex flex-1 gap-4 rounded-lg border border-[#344e65] bg-[#1a2732] p-6 flex-col">
                        <div className="text-primary">
                            <span
                                className="material-symbols-outlined"
                                style={{ fontSize: "32px" }}
                            >
                                rocket_launch
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-base-100 text-lg font-bold leading-tight font-heading">
                                Our Mission
                            </h3>
                            <p className="text-[#93afc8] text-sm font-normal leading-normal">
                                To provide a seamless and reliable platform that
                                empowers travelers to book any vehicle,
                                anywhere, with absolute confidence and ease.
                            </p>
                        </div>
                    </div>
                    {/* Vision Card */}
                    <div className="flex flex-1 gap-4 rounded-lg border border-[#344e65] bg-[#1a2732] p-6 flex-col">
                        <div className="text-primary">
                            <span
                                className="material-symbols-outlined"
                                style={{ fontSize: "32px" }}
                            >
                                visibility
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-base-100 text-lg font-bold leading-tight font-heading">
                                Our Vision
                            </h3>
                            <p className="text-[#93afc8] text-sm font-normal leading-normal">
                                To be the world's most trusted and user-centric
                                platform for vehicle rentals, creating a global
                                community of happy travelers.
                            </p>
                        </div>
                    </div>
                    {/* Values Card */}
                    <div className="flex flex-1 gap-4 rounded-lg border border-[#344e65] bg-[#1a2732] p-6 flex-col">
                        <div className="text-primary">
                            <span
                                className="material-symbols-outlined"
                                style={{ fontSize: "32px" }}
                            >
                                shield
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-base-100 text-lg font-bold leading-tight font-heading">
                                Our Values
                            </h3>
                            <p className="text-[#93afc8] text-sm font-normal leading-normal">
                                We are guided by customer-centricity, a passion
                                for innovation, and an unwavering commitment to
                                safety and trust.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline Section (No change needed, as it didn't use absolute/relative) */}
            <div>
                <h2 className="text-content text-[28px] sm:text-[32px] font-bold pb-5 pt-5 text-center font-heading">
                    The TravelEase Story
                </h2>

                {/* Timeline Grid Container */}
                <div className="grid grid-cols-[40px_1fr] gap-x-2">
                    {/* Timeline Item 1: The Idea Was Born */}
                    <div className="flex flex-col items-center gap-2 pt-3">
                        <div className="text-amber-400 text-2xl">
                            <FaLightbulb />
                        </div>
                        <div className=" bg-[#344e65] h-full grow"></div>
                    </div>
                    <div className="flex flex-1 flex-col py-3 pb-8">
                        <p className="text-[#F59E0B] text-base font-medium leading-normal">
                            January 2021
                        </p>
                        <p className="text-blue-800 text-lg font-bold leading-normal">
                            The Idea Was Born
                        </p>
                        <p className="text-[#93afc8] text-base font-normal leading-normal mt-1">
                            A group of passionate travelers saw a need for a
                            simpler, more reliable way to rent vehicles on the
                            go.
                        </p>
                    </div>

                    {/* Timeline Item 2: Platform Launch */}
                    <div className="flex flex-col items-center gap-2">
                        <div className=" bg-[#344e65] h-2"></div>
                        <div className="text-amber-400">
                            <FaFlag></FaFlag>
                        </div>
                        <div className=" bg-[#344e65] h-full grow"></div>
                    </div>
                    <div className="flex flex-1 flex-col py-3 pb-8">
                        <p className="text-[#F59E0B] text-base font-medium leading-normal">
                            August 2021
                        </p>
                        <p className=" text-lg font-bold leading-normal text-blue-900">
                            Platform Launch
                        </p>
                        <p className="text-[#93afc8] text-base font-normal leading-normal mt-1">
                            TravelEase officially launched, offering a curated
                            selection of vehicles in 5 major cities.
                        </p>
                    </div>

                    {/* Timeline Item 3: 10,000 Happy Travelers */}
                    <div className="flex flex-col items-center gap-2">
                        <div className=" bg-[#344e65] h-2"></div>
                        <div className="text-amber-400">
                            <GrGroup />
                        </div>
                        <div className=" bg-[#344e65] h-full grow"></div>
                    </div>
                    <div className="flex flex-1 flex-col py-3 pb-8">
                        <p className="text-[#F59E0B] text-base font-medium leading-normal">
                            May 2022
                        </p>
                        <p className=" text-lg font-bold leading-normal text-blue-900">
                            10,000 Happy Travelers
                        </p>
                        <p className="text-[#93afc8] text-base font-normal leading-normal mt-1">
                            We celebrated our first major milestone, having
                            served over ten thousand satisfied customers.
                        </p>
                    </div>

                    {/* Timeline Item 4: Global Expansion */}
                    <div className="flex flex-col items-center gap-2 pb-3">
                        <div className=" bg-[#344e65] h-2"></div>
                        <div className="text-amber-400">
                            <AiOutlineGlobal />
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col py-3">
                        <p className="text-[#F59E0B] text-base font-medium leading-normal">
                            December 2023
                        </p>
                        <p className="text-lg font-bold leading-normal text-blue-900">
                            Global Expansion
                        </p>
                        <p className="text-[#93afc8] text-base font-normal leading-normal mt-1">
                            Our services expanded to over 20 countries, making
                            international travel easier than ever.
                        </p>
                    </div>
                </div>
            </div>
            {/* Team Section - Redesigned to remove relative/absolute */}
            <div className="flex flex-col gap-10 px-4 py-10">
                <div className="flex flex-col gap-4 text-center items-center">
                    <h2 className="text-base-content tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl font-heading ">
                        Meet the Team
                    </h2>
                    <p className="text-gray-400 text-base font-normal leading-normal ">
                        The passionate individuals driving TravelEase forward.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Team Member 1 - Jane Doe */}
                    <div className="flex flex-col items-center text-center bg-[#1a2732] border border-[#344e65] rounded-xl p-6">
                        <div className="mb-4">
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-28"
                                data-alt="Profile picture of Jane Doe"
                                style={{
                                    backgroundImage: `url("${janeProfileUrl}")`,
                                }}
                            ></div>
                        </div>
                        <h3 className="text-lg font-bold text-base-100 font-heading">
                            Jane Doe
                        </h3>
                        <p className="text-sm text-amber-400 mb-4">
                            Founder & CEO
                        </p>
                        <p className="text-sm text-base-100/80">
                            Jane's vision is to make travel accessible and
                            enjoyable for everyone, one rental at a time.
                        </p>
                    </div>

                    {/* Team Member 2 - John Smith */}
                    <div className="flex flex-col items-center text-center bg-[#1a2732] border border-[#344e65] rounded-xl p-6">
                        <div className="mb-4">
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-28"
                                data-alt="Profile picture of John Smith"
                                style={{
                                    backgroundImage: `url("${johnProfileUrl}")`,
                                }}
                            ></div>
                        </div>
                        <h3 className="text-lg font-bold text-base-100 font-heading">
                            John Smith
                        </h3>
                        <p className="text-sm text-amber-400 mb-4">
                            Chief Technology Officer
                        </p>
                        <p className="text-sm text-base-100/80">
                            John leads our tech team, building the robust and
                            intuitive platform you love to use.
                        </p>
                    </div>

                    {/* Team Member 3 - Emily White */}
                    <div className="flex flex-col items-center text-center bg-[#1a2732] border border-[#344e65] rounded-xl p-6">
                        <div className="mb-4">
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-28"
                                data-alt="Profile picture of Emily White"
                                style={{
                                    backgroundImage: `url("${emilyProfileUrl}")`,
                                }}
                            ></div>
                        </div>
                        <h3 className="text-lg font-bold text-base-100 font-heading">
                            Emily White
                        </h3>
                        <p className="text-sm text-amber-400 mb-4">
                            Head of Operations
                        </p>
                        <p className="text-sm text-base-100/80">
                            Emily ensures every trip is smooth and every
                            customer is happy, overseeing our global operations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
