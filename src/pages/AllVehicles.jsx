import React, { useState } from "react";
import ScrollMotion from "../components/ScrollMotion";

const AllVehicles = () => {
    // Vehicles data
    const allVehicle = [
        {
            id: 1,
            name: "Luxury Sedan",
            price: "80",
            location: "New York",
            category: "Sedan",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALEr4hR3IN6BPjwwIuckBXAOoY3EFZU59g0IRPqCk_psSR31Y3xXGJDoB5Pdbds8AdcgC-TtAgO38a3F1oAmZECnekIDOZsGeJpI9U4OhW6bBljzmlb_kY-Jnu08bKHTzxlcdJvYhQ0vHW62PzMfduFsgtzgykf-arkzs7uz3CY_733JYxAG6QBLR-8kGXdXemYHkJae_2oZFG6-MzvNbmFql6t1-Ad2O-xYwWHvLYNiE15YpHU6n3WJ8WE2kGZjSdmXVrSxoZ-w8",
        },
        {
            id: 2,
            name: "Spacious SUV",
            price: "120",
            location: "Los Angeles",
            category: "SUV",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVcW_VEoC5cyYu3BbUpyN0yKGc4phsaRuA_CxcAXMGCkHA46Dim_XnLL68c7hY6W3OyZEnKkWh_qkL918Gy_wFP0AN0rj9Tsl0hULl9CSY1OclJ2GjgO_fQgf0WNvNYMCFDPdILuwj7yyj8pArZ0-SPgjORNKxpHpmanQppKSj2gbXBvHl0aCJhIMEawRYhT1zsF2Id0gqopoSxPtFYBMBNXsclqhycQCVhFG0IOdy-LUMTNvWzS97JDZD4Mzmv_67551V1LPlkNQ",
        },
        {
            id: 3,
            name: "Compact Car",
            price: "50",
            location: "Chicago",
            category: "Compact",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMyUcJHWVi6cBYqx8Nd3T1dOL9kU2NzGYdxOfMRAqYJ11vsbhgBaLaFbzgpNMpC3A39wQWcyuOerFImrzMfRVculRRXNZyHdMG9_MAu-XJJf3MtcjZZRKzZUpz3NvGHQ8vhoo0rSPb-JdSMKwCInhamA0pvVRKBAKk2VJq3IeEx6SoPI9Lu2pPqIxs02JMRBrwe0e4W8whKky3T0BvwUTm-RkThk_QSI3sj0mLITyejGfFUKPMQUIGPyoLgcUS-bYA-6AXjaaC0os",
        },
        {
            id: 4,
            name: "Electric Vehicle",
            price: "90",
            location: "San Francisco",
            category: "Electric",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7t8n4dtY1VagEtLBaTW2ARnDSE9jBFwChanEdmHOQu1Fo_wP9d32xZzysubw4rkoXZZWqJylbCQ6G_dv-5c_jB-Si3PIAXzYUv5tkURcOrIQdehvyF_cvSXxRy6oqhj9JADYSp2PHHOSL4TqtfHjmA7LhjSzZ7v7JNLV2gP5seeq61x-7js1GkJZyFDgSth75drftt5mQfky-ndoJNEv2GExa2dZ6XALcLxOixKz5tOcZ51nNddmTrofub_cXbHpcRjqPSWp4qtg",
        },
        {
            id: 5,
            name: "Convertible",
            price: "150",
            location: "Miami",
            category: "Convertible",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3fBXhu0yV5kpowgKp67As9uKiMkFGHj2KB5g-SiCU1DM0Cff1UeeseZUCP2_3-VYYmh-xAnypiScIs4N0u7KjHuvR3TtN8LbncdTkvuvIi0j8y-yaINZPpECVmrYUN5knq2u9kZTzgvM6S4qh5r8GGBSIDT3Um3MDAMF1HmVK6uKH3H7XHR6UwFEvtkvMelf9mKnXwy-Hq2yhjv1D2VRTJreBnp0117mwwgqEjh8K4K12P4o2NPYofCZmdVCtiUK4uiv29ksKPPk",
        },
        {
            id: 6,
            name: "Family Van",
            price: "100",
            location: "Seattle",
            category: "Van",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ-jxNVYq91AbKfVC3pTQnzGdyPqwiPaq-TyoFWqsYp5MWWqP-xR6Z614npkz0cy1BEhL1Qg_PUgNfkxTKKYKzajI7k9G-s4JKFE-vn1GWHJilEnT5ebGvnoCOCq4YCKpBfSD62KupUds2iyIpbUN5imRpunDtlhUVPli68b2Ng6fLd1bD2bAWnqId7VToqwh4ts4-Fx7GA4aM-RwvlHETgMslD_vrOmLcZBEsYP1ASmTX3c5tnMb3bjx4f0siSh3jgkZtfXPCtmA",
        },
        {
            id: 7,
            name: "Off-Road Vehicle",
            price: "130",
            location: "Denver",
            category: "Off-Road",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWWDlH6lJrKMc-KTMd3bauhKCdwXp7E0d7_5AzecIAyZX16jvXdOlsJ7SY46cxIc4louYcZMoRT_YM-o-sM4wwQ1H4RugBXo7GLXP8t0x5ihCthzv0ZYXD-lv6HBEypdHwECP1AA6nYFszzcXFRA5gwLxj0QsQuB_5i1X-yaSAUTvSXe8RcJWQ_IeBQgoUd0HZywTcEOBDhR75nwF26AFQyV83YH3mTaIp-28mFNuUZpL-b7hI4WkEiA_wASyZVEchniWQX77DXco",
        },
        {
            id: 8,
            name: "Sports Car",
            price: "180",
            location: "Austin",
            category: "Sports",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbClBkuKepy-hBmC3yaySP6U-HJGG8Q2_Pb9nxLOt7Ld2IwJ7xrTH3Mu_77T69RBcnNqCG6enA3z_CXMJZ03QOyXhR2svG88JHlEai28cr_8vpnz2eIDPiuuG_0y7xhqveI2p3mOnk0XR1somymibElJkb6ntwl_ePQ_e8CZUB_i-iUDXNlY2QyvjJGLyvmDNE82ffmEilDoumvWO4YPPh7NJvCnVZ1LLmpr3QzDbw2a6t3f7JJJaXJZeNDXidZ8IL08KDCMMo0sY",
        },
        {
            id: 9,
            name: "Hybrid Car",
            price: "70",
            location: "Boston",
            category: "Hybrid",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0vQZGCSOoiLTvIOaqCWvddh4cjwa6tprEvBu78zXOG2FLVxO36PxFr3CkSGjO4y8wkEwCAyFD_Rd-Ev9bx6X5ZMC4XENLT_KYAgEYrkup5b0RvUf_RO785lUiKmhfV7GpU78u2r_GCAwtf6PCoqFwmlAUG82fhGCdNSbqLS7mdlSiHsVZApe5UcZBWDX90S6x4JOQX1yeOl8UP8GIIKu7HiNbv6rOH2jjGcGm4fAVtrDNpGHSbYwoEsBaaJu3m-4niGwqV9SHdVg",
        },
        {
            id: 10,
            name: "Minivan",
            price: "110",
            location: "Atlanta",
            category: "Minivan",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSEg6zg0Hswo8Ts_5R-7Ok2_P6LEFyXsE8Prs2SI-6aGrelmd4OLUHnf3bpSRngI_k6owgBP0KWq8tynNg_PniEByLR7q1YZBwmZz1L8OTf1_MTj2WbL15GWrSx92hn5lmiOxBXJBH9ehI-K2tFmHlKmEyq9q9S3mPsk4GJadl4yw7KsPfDdavF6UzrTWJ4PP_9j9wESR-4VEixuCin4qMwuHPLmXry8OlImvHnsV_hWn9oleWwvgpstiX0lu_oIycIchdImju5wc",
        },
        {
            id: 11,
            name: "Truck",
            price: "140",
            location: "Dallas",
            category: "Truck",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHDItk-5tsfbYSoQiYS8e6vAqMqceEGVWtMDhhv-k0G-WicI1N4AutTBocUmEqKl9ZdU5irWMbSr5jGQSWnLCi9g2CpDeDAmdSw1dIKactbCgMymwkC72GjoUFaBlrJRQLPuHdQ5L5Ma7O6sc3ZzX_huVnpjPPeBTCgvdjT5dtUYaAjkXeE3QqFAQc6YRpbxhxWZlQTn3QoFEaBjSzvmGfgDo2yxYkaCDMF18gUOJbaiIvb497u47T8m-fAy7bx2nK_GMraFCzNtY",
        },
        {
            id: 12,
            name: "Motorcycle",
            price: "60",
            location: "Phoenix",
            category: "Motorcycle",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrwFT_vbJpkPDYyUAF4DhtYGbQct-EqyGcgpUyj3No_O1qh3NIqRpSUmxhebeH0c1kmuTqCAY0lF1jp54DI_H0c-Q3wChkeX7C7aPjdwYTcPs1tPByLQGg03nS1fnqyzwQoI2agyvdh9JHaSX4nSJpF92U_3azKKT1w-RMX5rAVWYcVA0sAzR7jwSvlsR2t2kBrSw9gIaJQiP49oRPvLyw9XWIxGsnPxvNLTChB5zFgvSJQAzR-VhaPg7Gr7kaGArL7CBK4pWWWiY",
        },
    ];
    const [vehiclesData, setVehicles] = useState(allVehicle || []);

    const handleFilter = (category, value) => {
        console.log(category, value);
        // Add navigation to vehicle details logic here
    };

    return (
        <div>
            <ScrollMotion></ScrollMotion>
            <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    {/* Header */}
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                        <p className="text-base-content tracking-light text-2xl md:text-[32px] font-bold leading-tight min-w-72">
                            All Vehicles
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex gap-3 p-3 flex-wrap pr-4">
                        <div className="dropdown">
                            <div tabIndex={0} role="button">
                                <Button label={"Category"}></Button>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                            >
                                <li
                                    onClick={() =>
                                        handleFilter("category", "Sedan")
                                    }
                                >
                                    <a>Sedan</a>
                                </li>
                                <li
                                    onClick={() =>
                                        handleFilter("category", "SUV")
                                    }
                                >
                                    <a>SUV</a>
                                </li>
                                <li
                                    onClick={() =>
                                        handleFilter("category", "Electric")
                                    }
                                >
                                    <a>Electric</a>
                                </li>
                                <li
                                    onClick={() =>
                                        handleFilter("category", "Van")
                                    }
                                >
                                    <a>Van</a>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <div tabIndex={0} role="button">
                                <Button label={"Location"}></Button>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                            >
                                <li>
                                    <a>Sedan</a>
                                </li>
                                <li>
                                    <a>Item 2</a>
                                </li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <div tabIndex={0} role="button">
                                <Button label={"Price"}></Button>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                            >
                                <li>
                                    <a>Sedan</a>
                                </li>
                                <li>
                                    <a>Item 2</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Vehicles Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                        {vehiclesData.map((vehicle) => (
                            <div
                                key={vehicle.id}
                                className="flex flex-col gap-3 pb-3 cursor-pointer hover:shadow-lg hover:shadow-base-content rounded-xl p-3 transition-all hover:scale-105 bg-base-100"
                            >
                                {/* Vehicle Image */}
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                    style={{
                                        backgroundImage: `url("${vehicle.image}")`,
                                    }}
                                />

                                {/* Vehicle Info */}
                                <div className="flex flex-col gap-1">
                                    <p className="text-base-content text-base font-medium leading-normal line-clamp-1">
                                        {vehicle.name}
                                    </p>
                                    <p className="text-base-content/70 text-sm font-normal leading-normal">
                                        ${vehicle.price}/day ·{" "}
                                        {vehicle.location}
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <span className="badge badge-outline badge-sm text-base-content/70">
                                            {vehicle.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {vehiclesData.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-16 text-base-content/60">
                            <div className="text-6xl mb-4">�</div>
                            <p className="text-xl font-medium mb-2">
                                No vehicles found
                            </p>
                            <p className="text-sm">
                                Try adjusting your filters to see more results
                            </p>
                            <button className="btn btn-primary mt-4">
                                Clear Filters
                            </button>
                        </div>
                    )}

                    {/* Load More Button */}
                    {vehiclesData.length > 0 && (
                        <div className="flex justify-center p-4">
                            <button className="btn btn-outline btn-primary">
                                Load More Vehicles
                            </button>
                        </div>
                    )}

                    {/* Stats Summary */}
                    <div className="p-4">
                        <div className="stats shadow bg-base-100 w-full">
                            <div className="stat">
                                <div className="stat-title">Total Vehicles</div>
                                <div className="stat-value text-primary">
                                    {vehiclesData.length}
                                </div>
                                <div className="stat-desc">
                                    Available for booking
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllVehicles;

const Button = ({ label }) => {
    return (
        <>
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-base-200 pl-4 pr-2 hover:bg-base-300 transition-colors">
                <p className="text-base-content text-sm font-medium leading-normal">
                    {label}
                </p>
                <div
                    className="text-base-content"
                    data-icon="CaretDown"
                    data-size="20px"
                    data-weight="regular"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                </div>
            </button>
        </>
    );
};
