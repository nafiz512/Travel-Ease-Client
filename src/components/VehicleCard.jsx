import React from "react";
import { NavLink } from "react-router";

const VehicleCard = ({ vehicle }) => {
    const { coverImage, vehicleName } = vehicle;

    return (
        <div
            key={vehicle._id}
            className="card bg-base-200 max-w-80 shadow-md flex flex-col justify-between hover:shadow-lg hover:shadow-base-content transition-all hover:scale-105"
        >
            <figure>
                <img
                    src={coverImage}
                    alt={vehicleName}
                    className="w-full max-h-50"
                />
            </figure>
            <div>
                <div className="pl-4 mt-2 space-y-2">
                    <h3 className="font-semibold">{vehicle?.vehicleName}</h3>
                    <p className="text-sm text-gray-500">
                        Location: {vehicle?.location}
                    </p>
                    <div className="flex justify-between pr-4">
                        <p>Ratings:{vehicle?.ratings}</p>
                        <p className="text-primary font-bold">
                            ${vehicle.pricePerDay}/day
                        </p>
                    </div>
                </div>
                <div className="px-4 py-2">
                    <NavLink to={`/vehicle-details/${vehicle._id}`}>
                        <button
                            type="submit"
                            className="btn btn-primary text-primary-content tracking-[0.015em] w-full "
                        >
                            <span className="truncate">View Details</span>
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default VehicleCard;
