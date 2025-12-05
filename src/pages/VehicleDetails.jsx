import React, { useEffect, useState } from "react";
import ScrollMotion from "../components/ScrollMotion";
import { useNavigate, useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { format } from "date-fns";

const VehicleDetails = () => {
    const { id } = useParams();
    const axios = useAxios();
    const navigate = useNavigate();
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

    const handleBookNow = () => {
        if (!user) {
            return navigate("/login");
        }
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

    return (
        <div className="px-[8%] mt-1">
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
                <div className="shadow-xl layout-content-container rounded-2xl flex-1 md:flex-5/12">
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
                <h2 className="text-base-content text-[22px] font-bold leading-tight tracking-[-0.015em]  pb-3 pt-5">
                    Description
                </h2>
                <p className=" text-base-content/80 font-normal leading-normal pb-3 pt-1 ">
                    {vehicleData.description}
                </p>
            </div>
        </div>
    );
};

export default VehicleDetails;
