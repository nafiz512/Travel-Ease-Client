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
        <div className="flex-1 justify-center items-center flex">
            <div className="px-5 md:px-40 py-3 md:py-5 w-4xl">
                <div className="layout-content-container py-5">
                    <p className="text-base-content tracking-light text-[32px] font-bold leading-tight min-w-72">
                        Add a New Vehicle
                    </p>
                    <div className="max-w-[480px] items-end grid gap-4 px-4 py-3">
                        <form onSubmit={handleAddVehicle} className="space-y-4">
                            {/* Vehicle Name */}
                            <label className="min-w-40 block">
                                <p className="text-base-content text-base font-medium leading-normal pb-2">
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
                                <p className="text-base-content text-base font-medium leading-normal pb-2">
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
                                <p className="text-base-content text-base font-medium leading-normal pb-2">
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
                                <p className="text-base-content text-base font-medium leading-normal pb-2">
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
                                    <option value="Electric">Electric</option>
                                    <option value="Van">Van</option>
                                </select>
                            </label>

                            {/* Price per Day */}
                            <label className="min-w-40 block">
                                <p className="text-base-content text-base font-medium leading-normal pb-2">
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
                                <p className="text-base-content text-base font-medium leading-normal pb-2">
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
                                <p className="text-base-content text-base font-medium leading-normal pb-2">
                                    Availability
                                </p>
                                <select
                                    name="availability"
                                    className="select select-bordered w-full bg-base-100 text-base-content"
                                    required
                                >
                                    <option value="Available">Available</option>
                                    <option value="Booked">Booked</option>
                                    <option value="Maintenance">
                                        Maintenance
                                    </option>
                                </select>
                            </label>

                            {/* Description */}
                            <label className="w-full block">
                                <p className="text-base-content text-base font-medium leading-normal pb-2">
                                    Description
                                </p>
                                <textarea
                                    name="description"
                                    placeholder="Enter vehicle description"
                                    className="textarea textarea-bordered w-full bg-base-100 text-base-content placeholder-base-content/70 h-24"
                                    required
                                />
                            </label>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="btn btn-primary text-primary-content tracking-[0.015em] w-full mt-4"
                            >
                                <span className="truncate">Add Vehicle</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddVehicle;
