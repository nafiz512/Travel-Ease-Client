import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { format } from "date-fns";

const AddVehicle = () => {
    const { user } = useContext(AuthContext);

    const handleAddVehicle = (e) => {
        e.preventDefault();
        const form = e.target;

        const now = new Date();
        const formattedNow = format(now, "yyyy-MM-dd'T'HH:mm:ssXXX");

        const newVehicle = {
            vehicleName: form.vehicleName.value,
            ownerName: form.ownerName.value,
            userEmail: user?.email,
            category: form.category.value,
            trips: form.trips.value,
            pricePerDay: parseFloat(form.pricePerDay.value),
            location: form.location.value,
            availability: form.availability.value,
            description: form.description.value,
            coverImage: form.coverImage.value,
            createdAt: formattedNow,
            updatedAt: formattedNow,
            ratings: 0.0,
            totalBookings: 0,
        };
        console.log(newVehicle);

        // Here you would typically send the data to your backend
        // Example: await axios.post('/api/vehicles', newVehicle);
    };

    return (
        <div className="flex-1 ">
            <div className="px-5 md:px-40  ">
                <div className="flex flex-col items-center justify-center ">
                    <p className="text-base-content mt-3 text-[32px] text-center font-bold leading-tight ">
                        Add a New Vehicle
                    </p>
                    <div className="w-[370px] md:w-[900px] custom-shadow rounded-2xl mt-5 gap-4 px-6 py-2">
                        <form onSubmit={handleAddVehicle}>
                            <div className=" flex gap-0 md:gap-10 flex-col md:flex-row pt-3">
                                <div
                                    className="flex-1/2 space-y-2
                            "
                                >
                                    {/* Vehicle Name */}
                                    <label className=" block">
                                        <p className="text-base-content text-base font-medium  pb-2">
                                            Vehicle Name
                                        </p>
                                        <input
                                            type="text"
                                            name="vehicleName"
                                            placeholder="Enter vehicle name"
                                            className="input input-bordered w-full bg-base-100 text-base-content placeholder-base-content/70"
                                            required
                                        />
                                    </label>

                                    {/* Owner Name */}
                                    <label className="min-w-40 block">
                                        <p className="text-base-content text-base font-medium  pb-2">
                                            Owner Name
                                        </p>
                                        <input
                                            type="text"
                                            name="ownerName"
                                            placeholder="Owner full name"
                                            className="input input-bordered w-full bg-base-100 text-base-content placeholder-base-content/70"
                                            required
                                        />
                                    </label>

                                    {/* Cover Image URL */}
                                    <label className="min-w-40 block">
                                        <p className="text-base-content text-base font-medium  pb-2">
                                            Car Image URL
                                        </p>
                                        <input
                                            type="url"
                                            name="coverImage"
                                            placeholder="Enter image URL"
                                            className="input input-bordered w-full bg-base-100 text-base-content placeholder-base-content/70"
                                            required
                                        />
                                    </label>

                                    {/* Category */}
                                    <label className="min-w-40 block">
                                        <p className="text-base-content text-base font-medium  pb-2">
                                            Category
                                        </p>
                                        <select
                                            name="category"
                                            className="select select-bordered w-full bg-base-100 text-base-content"
                                            required
                                        >
                                            <option value="" disabled selected>
                                                Select vehicle type
                                            </option>
                                            <option value="Sedan">Sedan</option>
                                            <option value="SUV">SUV</option>
                                            <option value="Electric">
                                                Electric
                                            </option>
                                            <option value="Van">Van</option>
                                        </select>
                                    </label>
                                    {/* Vehicle Trips */}
                                    <label className=" block">
                                        <p className="text-base-content text-base font-medium  pb-2">
                                            Trips
                                        </p>
                                        <input
                                            type="text"
                                            name="trips"
                                            placeholder="Enter total trips"
                                            className="input input-bordered w-full bg-base-100 text-base-content placeholder-base-content/70"
                                            required
                                        />
                                    </label>
                                </div>
                                <div className="flex-1/2 space-y-2">
                                    {/* Price per Day */}
                                    <label className="min-w-40 block">
                                        <p className="text-base-content text-base font-medium  pb-2">
                                            Price per Day ($)
                                        </p>
                                        <input
                                            type="number"
                                            name="pricePerDay"
                                            placeholder="Enter price per day"
                                            className="input input-bordered w-full bg-base-100 text-base-content placeholder-base-content/70"
                                            min="0"
                                            step="0.01"
                                            required
                                        />
                                    </label>

                                    {/* Location */}
                                    <label className="min-w-40 block">
                                        <p className="text-base-content text-base font-medium  pb-2">
                                            Location
                                        </p>
                                        <input
                                            type="text"
                                            name="location"
                                            placeholder="Enter location"
                                            className="input input-bordered w-full bg-base-100 text-base-content placeholder-base-content/70"
                                            required
                                        />
                                    </label>
                                    {/* Availability */}
                                    <label className="min-w-40 block">
                                        <p className="text-base-content text-base font-medium  pb-2">
                                            Availability
                                        </p>
                                        <select
                                            name="availability"
                                            className="select select-bordered w-full bg-base-100 text-base-content"
                                            required
                                        >
                                            <option value="Available">
                                                Available
                                            </option>
                                            <option value="Booked">
                                                Booked
                                            </option>
                                            <option value="Maintenance">
                                                Maintenance
                                            </option>
                                        </select>
                                    </label>

                                    {/* Description */}
                                    <label className="w-full block">
                                        <p className="text-base-content text-base font-medium  pb-2">
                                            Description
                                        </p>
                                        <textarea
                                            name="description"
                                            placeholder="Enter vehicle description"
                                            className="textarea textarea-bordered w-full bg-base-100 text-base-content placeholder-base-content/70 h-30"
                                            required
                                        />
                                    </label>
                                </div>
                            </div>

                            <div>
                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="btn btn-primary text-primary-content tracking-[0.015em] w-full mt-4"
                                >
                                    <span className="truncate">
                                        Add Vehicle
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddVehicle;
