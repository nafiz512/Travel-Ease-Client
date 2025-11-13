import { useEffect } from "react";
import ScrollMotion from "../components/ScrollMotion";
import useAxios from "../hooks/useAxios";
import { useState } from "react";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router";
import LoadingEffect from "../components/LoadingEffect";
import { SkeletonLoader } from "../components/SkeletonLoader";
import useSecureAxios from "../hooks/useSecureAxios";

const MyBookings = () => {
    const { user } = use(AuthContext);
    const [bookingsData, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Add loading state
    // const axios = useAxios();
    const axios = useSecureAxios();

    useEffect(() => {
        setIsLoading(true); // Start loading
        axios
            .get(`/bookings?email=${user.email}`)
            .then((data) => {
                setData(data.data);
            })
            .catch((error) => {
                console.error("Error fetching bookings:", error);
            })
            .finally(() => {
                setIsLoading(false); // Stop loading regardless of success/error
            });
    }, [axios, user.email]);

    // Status color mapping
    const statusColors = {
        confirmed: "badge-success",
        completed: "badge-secondary",
        cancelled: "badge-error",
        upcoming: "badge-warning",
        success: "badge-success",
        warning: "badge-warning",
        error: "badge-error",
        secondary: "badge-secondary",
    };

    // Show loading effect while data is being fetched
    if (isLoading) {
        return (
            <divs div className="px-4 md:px-40">
                <LoadingEffect />
                <SkeletonLoader></SkeletonLoader>
            </divs>
        );
    }

    return (
        <div>
            <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
                <ScrollMotion />

                <div className="layout-content-container flex flex-col max-w-[860px] flex-1 w-full">
                    {/* Header */}
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                        <p className="text-base-content tracking-light text-2xl md:text-4xl font-bold leading-tight min-w-72">
                            My Bookings
                        </p>
                    </div>

                    {/* Bookings List */}
                    <div className="space-y-3 p-2">
                        {bookingsData.map((booking) => (
                            <div
                                key={booking._id}
                                className="shadow-2xl  shadow-base-content transition-all  flex flex-col md:flex-row items-stretch justify-between gap-6 rounded-xl border border-base-300 bg-base-100 p-5 "
                            >
                                {/* Booking Info */}
                                <div className="flex flex-col-reverse md:flex-row gap-3 justify-between w-full">
                                    <div className="flex flex-col gap-3 ">
                                        {/* Status Badge */}
                                        <div
                                            className={`badge ${
                                                statusColors[
                                                    booking.statusType
                                                ] ||
                                                statusColors[
                                                    booking.status.toLowerCase()
                                                ]
                                            } text-white font-medium`}
                                        >
                                            {booking.status}
                                        </div>

                                        {/* Vehicle Name */}
                                        <p className="text-base-content text-xl font-bold leading-tight">
                                            {booking.vehicleName}
                                        </p>

                                        {/* Location Details */}
                                        <div className="space-y-2 ">
                                            <div className="flex items-start gap-2">
                                                <div>
                                                    <p className="text-base-content/80 text-sm font-medium">
                                                        Pickup:
                                                        {booking.pickupLocation}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <div>
                                                    <p className="text-base-content/80 text-sm font-medium">
                                                        Dropoff:
                                                        {booking.dropLocation}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Booking Details */}
                                        <div className="flex flex-wrap gap-4 ">
                                            <div className="flex items-center gap-2">
                                                <span className="text-base-content/70 text-sm">
                                                    {new Date(
                                                        booking.bookingDate
                                                    ).toLocaleString()}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-base-content/60">
                                                    ⏱️
                                                </span>
                                                <span className="text-base-content/70 text-sm">
                                                    {booking.durationDays}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Vehicle Image */}
                                    <div className="w-[300px] bg-amber-100 rounded-2xl">
                                        <img
                                            src={booking.coverImage}
                                            alt="car image"
                                            className="rounded-lg h-40 w-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {bookingsData.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-16 text-base-content/60">
                            <p className="text-xl font-medium mb-2">
                                No bookings found
                            </p>
                            <p className="text-sm">
                                Your upcoming and past bookings will appear here
                            </p>
                            <NavLink to={"/allvehicles"}>
                                <button className="btn btn-primary mt-4">
                                    Browse Vehicles
                                </button>
                            </NavLink>
                        </div>
                    )}

                    {/* Stats Summary */}
                    <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="stats shadow bg-base-100">
                                <div className="stat">
                                    <div className="stat-title">
                                        Total Bookings
                                    </div>
                                    <div className="stat-value text-primary">
                                        {bookingsData.length}
                                    </div>
                                </div>
                            </div>
                            <div className="stats shadow bg-base-100">
                                <div className="stat">
                                    <div className="stat-title">Confirmed</div>
                                    <div className="stat-value text-warning">
                                        {
                                            bookingsData.filter(
                                                (b) =>
                                                    b.status === "Upcoming" ||
                                                    b.status === "Confirmed"
                                            ).length
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="stats shadow bg-base-100">
                                <div className="stat">
                                    <div className="stat-title">Completed</div>
                                    <div className="stat-value text-success">
                                        {
                                            bookingsData.filter(
                                                (b) => b.status === "Completed"
                                            ).length
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="stats shadow bg-base-100">
                                <div className="stat">
                                    <div className="stat-title">Cancelled</div>
                                    <div className="stat-value text-error">
                                        {
                                            bookingsData.filter(
                                                (b) => b.status === "Cancelled"
                                            ).length
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;
