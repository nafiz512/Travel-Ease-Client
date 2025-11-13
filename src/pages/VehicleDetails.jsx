import React, { useEffect, useState } from "react";
import ScrollMotion from "../components/ScrollMotion";
import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { format } from "date-fns";
import useSecureAxios from "../hooks/useSecureAxios";

const VehicleDetails = () => {
    const { id } = useParams();
    // const axios = useAxios();
    const axios = useSecureAxios();
    const { user, notifySuccess, notifyError } = use(AuthContext);
    const [vehicleData, setData] = useState({});

    useEffect(() => {
        axios.get(`/vehicle/${id}`).then((data) => {
            setData(data.data);
            // console.log(data.data);
        });
    }, [axios, id]);

    // Status color mapping
    const statusColors = {
        Available: "bg-success/20",
        Booked: "bg-warning/20",
        Maintenance: "bg-error/20",
    };

    // Similar vehicles data
    const similarVehicles = [
        {
            id: 1,
            name: "Compact Sedan",
            price: "$45/day",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTXEOyOyVdRVDDYjEh2aPj81LJU1Xl78YBmTGVXOqaZnO51nZrMNp9RFXF2__m31hNVpQcUlt85DkGYrPhINerk71EZ-ukbY3W8hBLeCLjBUxsUMlZFsJqWMzfTC9196dJ6fyO5HzLk2UdR8P6Gw3--FhE97-hvU3hx-MmMrEedB8lFc2Ey2wk-4URkbA_xTmutTXXtHYd0zF4thC08JQZVOVQyw4MRzW1xBzD_aqmBcNpYUPlAbqkatzQxCbBH6rKVFzFexaEulg",
        },
        {
            id: 2,
            name: "SUV",
            price: "$60/day",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9np_BPnYniusvIgyQ48H95uiImQe0DhgAGWcdFePes4BBBE7fmCg-ceJYSIke9gQT4rIjXt1OmhlECYl1RMaX8gtiVbk-u-HRq90diz53PGhiXjGmJ0e_zyAaV4UOs8oyX_NeiChEpi01IjucZTVTuMz52v8tZQHQjwbcf1yxAYYlHc-oMo-0KVUd-HfhjIsFYP12An49qEMhD4UrkeRlUvCg8aiYebowlPRCuYJEZvq7BLKiMhS-agmWt2SJnNI5xIx_Uhy00WM",
        },
        {
            id: 3,
            name: "Luxury Sedan",
            price: "$85/day",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBd_77R-G5jl171Oj-eWIO_7ww65LY_P2lVAgXyV1EY9ftD_x_a6lGiZQqNgsnl3mMVtd5Lko0nPgFLko4-tNlZ1uzU-YPZXeE3_PwVlLJY6Os3O685jhfVgtsRkYlY6VyFoREGUJ0p10i_fc2xC3dEma0zdOIImUZ_GUltMnXLJvSL5k7-Ol-vTGNL2etNEOO2O8VXCsrYoS5H00KWZJ0y9cF89FIy183mi19ptwgdF9EIzYJQQLWylbjgQkWy6DORuSWh647LLc",
        },
    ];

    const handleBookNow = () => {
        const now = new Date();
        const formattedNow = format(now, "yyyy-MM-dd'T'HH:mm:ssXXX");
        const newBooking = {
            userEmail: user?.email,
            vehicleId: vehicleData._id,
            vehicleName: vehicleData.vehicleName,
            coverImage: vehicleData.coverImage,
            ownerEmail: vehicleData.userEmail,
            bookingDate: formattedNow,
            status: "Confirmed",
            pricePerDay: vehicleData.pricePerDay,
            durationDays: 3,
            pickupLocation: "Banani, Dhaka",
            dropLocation: "Dhanmondi, Dhaka",
        };
        axios
            .post("/book-vehicle", newBooking)
            .then((data) => {
                if (data.data.insertedId) {
                    notifySuccess("Booking successful");
                }
            })
            .catch((er) => {
                notifyError(er.message);
            });
    };

    const handleSimilarVehicleClick = (vehicleId) => {
        console.log("View similar vehicle:", vehicleId);
        // Add navigation logic here
    };

    return (
        <div className="md:py-10 py-3 px-6 md:px-20 ">
            <ScrollMotion></ScrollMotion>
            <div className=" flex-1 flex gap-3 md:gap-5 md:flex-row flex-col  w-full ">
                {/* Left Content */}
                <figure className="flex-1 md:flex-7/12">
                    <img
                        src={vehicleData?.coverImage}
                        className="max-h-[400px] w-full rounded-2xl"
                        alt="vehicle image "
                    />
                </figure>
                {/* Right Sidebar */}
                <div className="custom-shadow layout-content-container rounded-2xl flex-1 md:flex-5/12">
                    <h1 className="text-base-content text-[22px] font-bold  px-4 text-left pt-4 pb-1">
                        {vehicleData.vehicleName}
                    </h1>
                    <h1 className="text-base-content font-bold  px-4 text-left py-1">
                        {vehicleData.category}
                    </h1>
                    <p className="text-base-content/70 text-sm font-normal  pb-3 pt-1 px-4">
                        ${vehicleData.pricePerDay}/day
                    </p>
                    <p className="text-base-content/70 text-sm font-normal  pb-3 pt-1 px-4">
                        {vehicleData.location}
                    </p>
                    <button
                        className={` text-base-content ${
                            statusColors[vehicleData.availability]
                        } font-bold leading-tight tracking-[-0.015em] ml-3 px-3 py-2 rounded-sm text-left `}
                    >
                        {vehicleData.availability}
                    </button>
                    {/* Stats */}
                    <div className="flex flex-wrap gap-3 px-4 py-3">
                        <div className="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-base-300 p-3 items-start bg-base-100">
                            <p className="text-base-content tracking-light text-2xl font-bold leading-tight">
                                {vehicleData.ratings}
                            </p>
                            <div className="flex items-center gap-2">
                                <p className="text-base-content/70 text-sm font-normal leading-normal">
                                    Rating
                                </p>
                            </div>
                        </div>
                        <div className="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-base-300 p-3 items-start bg-base-100">
                            <p className="text-base-content tracking-light text-2xl font-bold leading-tight">
                                {vehicleData.trips}
                            </p>
                            <div className="flex items-center gap-2">
                                <p className="text-base-content/70 text-sm font-normal leading-normal">
                                    Trips
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Book Button */}
                    <div className="flex px-4 py-3">
                        <button
                            onClick={handleBookNow}
                            type="submit"
                            className="btn btn-primary text-primary-content tracking-[0.015em] w-full mt-4"
                        >
                            <span className="truncate">Book Now</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div>
                <h2 className="text-base-content text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                    About this vehicle
                </h2>
                <p className=" text-base-content/80 font-normal leading-normal pb-3 pt-1 px-4">
                    {vehicleData.description}
                </p>
            </div>
            {/* Similar Vehicles */}
            <h2 className="text-base-content text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Similar vehicles
            </h2>
            <div className="flex ">
                <div className="flex flex-col md:flex-row items-stretch p-4 gap-3">
                    {similarVehicles.map((vehicle) => (
                        <div
                            key={vehicle.id}
                            onClick={() =>
                                handleSimilarVehicleClick(vehicle.id)
                            }
                            className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40 cursor-pointer hover:shadow-lg transition-shadow"
                        >
                            <div
                                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                                style={{
                                    backgroundImage: `url("${vehicle.image}")`,
                                }}
                            />
                            <div>
                                <p className="text-base-content text-base font-medium leading-normal">
                                    {vehicle.name}
                                </p>
                                <p className="text-base-content/70 text-sm font-normal leading-normal">
                                    {vehicle.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VehicleDetails;
