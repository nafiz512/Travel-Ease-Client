import ScrollMotion from "../components/ScrollMotion";

const MyBookings = () => {
    // Bookings data object for iteration
    const bookingsData = [
        {
            id: 1,
            status: "Confirmed",
            statusType: "success",
            vehicleName: "Toyota Camry",
            pickup: "123 Main Street, Anytown, USA",
            dropoff: "456 Oak Avenue, Anytown, USA",
            date: "2024-01-15",
            price: "$45/day",
            duration: "3 days",
        },
        {
            id: 2,
            status: "Completed",
            statusType: "secondary",
            vehicleName: "Honda Civic",
            pickup: "789 Pine Lane, Anytown, USA",
            dropoff: "101 Elm Street, Anytown, USA",
            date: "2024-01-10",
            price: "$35/day",
            duration: "5 days",
        },
        {
            id: 3,
            status: "Cancelled",
            statusType: "error",
            vehicleName: "Ford Mustang",
            pickup: "222 Maple Drive, Anytown, USA",
            dropoff: "333 Cedar Road, Anytown, USA",
            date: "2024-01-05",
            price: "$65/day",
            duration: "2 days",
        },
        {
            id: 4,
            status: "Upcoming",
            statusType: "warning",
            vehicleName: "Tesla Model 3",
            pickup: "444 Birch Boulevard, Anytown, USA",
            dropoff: "555 Willow Way, Anytown, USA",
            date: "2024-01-20",
            price: "$75/day",
            duration: "4 days",
        },
    ];

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

    const handleViewBooking = (bookingId) => {
        console.log("View booking:", bookingId);
        // Add view booking logic here
    };

    return (
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
            <ScrollMotion></ScrollMotion>

            <div className="layout-content-container flex flex-col max-w-[960px] flex-1 w-full">
                {/* Header */}
                <div className="flex flex-wrap justify-between gap-3 p-4">
                    <p className="text-base-content tracking-light text-2xl md:text-[32px] font-bold leading-tight min-w-72">
                        My Bookings
                    </p>
                </div>

                {/* Bookings List */}
                <div className="space-y-6 p-4">
                    {bookingsData.map((booking) => (
                        <div
                            key={booking.id}
                            className="custom-shadow flex flex-col md:flex-row items-stretch justify-between gap-6 rounded-xl border border-base-300 bg-base-100 p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Booking Info */}
                            <div className="flex flex-[2_2_0px] flex-col gap-4">
                                <div className="flex flex-col gap-3">
                                    {/* Status Badge */}
                                    <div
                                        className={`badge ${
                                            statusColors[booking.statusType] ||
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
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-2">
                                            <div>
                                                <p className="text-base-content/80 text-sm font-medium">
                                                    Pickup
                                                </p>
                                                <p className="text-base-content/70 text-sm">
                                                    {booking.pickup}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div>
                                                <p className="text-base-content/80 text-sm font-medium">
                                                    Dropoff
                                                </p>
                                                <p className="text-base-content/70 text-sm">
                                                    {booking.dropoff}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Booking Details */}
                                    <div className="flex flex-wrap gap-4 pt-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-base-content/70 text-sm">
                                                {booking.date}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-base-content/60">
                                                ⏱️
                                            </span>
                                            <span className="text-base-content/70 text-sm">
                                                {booking.duration}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-base-content/70 text-sm">
                                                {booking.price}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <button
                                    onClick={() =>
                                        handleViewBooking(booking.id)
                                    }
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-6 bg-primary text-primary-content text-sm font-medium leading-normal w-fit hover:bg-primary-focus transition-colors"
                                >
                                    <span className="truncate">
                                        View Booking Details
                                    </span>
                                </button>
                            </div>

                            {/* Vehicle Image Placeholder */}
                            <div className="flex-1 min-w-[200px] bg-amber-100 rounded-2xl">
                                <img src="" alt="car image" />
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
                        <button className="btn btn-primary mt-4">
                            Browse Vehicles
                        </button>
                    </div>
                )}

                {/* Stats Summary */}
                <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="stats shadow bg-base-100">
                            <div className="stat">
                                <div className="stat-title">Total Bookings</div>
                                <div className="stat-value text-primary">
                                    {bookingsData.length}
                                </div>
                            </div>
                        </div>
                        <div className="stats shadow bg-base-100">
                            <div className="stat">
                                <div className="stat-title">Upcoming</div>
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
    );
};

export default MyBookings;
