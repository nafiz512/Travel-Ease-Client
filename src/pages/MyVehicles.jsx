import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router";
import useAxios from "../hooks/useAxios";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import LoadingEffect from "../components/LoadingEffect";
import { SkeletonLoader } from "../components/SkeletonLoader ";

const MyVehicles = () => {
    const { user, notifySuccess, notifyError } = use(AuthContext);
    const axios = useAxios();
    const [isLoading, setIsLoading] = useState(true);
    const [vehiclesData, setVehicleData] = useState([]);
    let vehicleId = null;

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`/allvehicles?email=${user?.email}`)
            .then((data) => {
                setVehicleData(data.data);
            })
            .catch((error) => {
                notifyError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [axios]);

    // availability color mapping
    const availabilityColors = {
        available: "bg-success/20",
        booked: "bg-warning/20",
        maintenance: "bg-error/20",
    };

    const handleOpenModal = (id) => {
        // Add delete logic here
        vehicleId = id;
        document.getElementById("my_modal_1").showModal();
    };
    const handleDelete = () => {
        if (vehicleId) {
            axios
                .delete(`/vehicle/${vehicleId}`)
                .then((data) => {
                    if (data.data.deletedCount) {
                        notifySuccess("Deleted Successfully");
                        const curentVehicles = vehiclesData.filter(
                            (vehicle) => vehicle._id != vehicleId
                        );
                        setVehicleData(curentVehicles);
                    }
                })
                .catch((er) => {
                    notifyError(er.message);
                });
        }
    };
    if (isLoading)
        return (
            <div className="px-4 md:px-40">
                <LoadingEffect></LoadingEffect>
                <SkeletonLoader></SkeletonLoader>
            </div>
        );

    return (
        <div className="px-1 md:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1 w-full">
                {/* Header */}
                <div className="flex flex-wrap justify-between gap-3 p-4">
                    <p className="text-base-content tracking-light text-2xl md:text-4xl font-bold leading-tight min-w-72">
                        My Vehicles
                    </p>
                </div>
                <div>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <div className="flex justify-between">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <form method="dialog">
                                    <button className="px-2 py-1 rounded-sm hover:bg-accent">
                                        X
                                    </button>
                                </form>
                            </div>
                            <p className="py-4">
                                Are you sure about Delete the Item
                            </p>
                            <div className="modal-action">
                                <form method="dialog" className="space-x-3">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button
                                        onClick={handleDelete}
                                        className="btn btn-success"
                                    >
                                        Confirm
                                    </button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>

                {/* Table Container */}
                <div className="custom-shadow rounded-lg py-3">
                    <div className="flex overflow-auto roundedshadow-xl border border-base-300 bg-base-100">
                        <table className="flex-1 w-full">
                            <thead>
                                <tr className="bg-base-200">
                                    <th className="px-4 py-3 text-left text-base-content text-sm font-medium  w-[250px]">
                                        Vehicle
                                    </th>
                                    <th className="px-4 py-3 text-left text-base-content text-sm font-medium  w-[200px]">
                                        Location
                                    </th>
                                    <th className="px-4 py-3 text-left text-base-content text-sm font-medium  w-[150px]">
                                        Price
                                    </th>
                                    <th className="px-4 py-3 text-left text-base-content text-sm font-medium  w-60">
                                        status
                                    </th>
                                    <th className="px-4 py-3 text-left text-base-content text-sm font-medium  w-60">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {vehiclesData.map((vehicle) => (
                                    <tr
                                        key={vehicle._id}
                                        className="border-t border-base-300 hover:bg-base-200/50 transition-colors"
                                    >
                                        {/* Vehicle Name */}
                                        <td className="h-[72px] px-4 py-2 text-base-content text-sm font-normal leading-normal">
                                            {vehicle.vehicleName}
                                        </td>

                                        {/* Location */}
                                        <td className="h-[72px] px-4 py-2 text-base-content/70 text-sm font-normal leading-normal">
                                            {vehicle.location}
                                        </td>

                                        {/* Price */}
                                        <td className="h-[72px] px-4 py-2 text-base-content/70 text-sm font-normal leading-normal">
                                            {vehicle.pricePerDay}
                                        </td>

                                        {/* availability */}
                                        <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
                                            <button
                                                className={`flex min-w-[84px] max-w-[480px] cursor-default items-center justify-center rounded-sm shadow-xl h-8 px-4 text-sm font-medium leading-normal w-full ${
                                                    availabilityColors[
                                                        vehicle.availabilityType
                                                    ] ||
                                                    availabilityColors[
                                                        vehicle.availability.toLowerCase()
                                                    ]
                                                }`}
                                            >
                                                <span className="truncate">
                                                    {vehicle.availability}
                                                </span>
                                            </button>
                                        </td>

                                        {/* Actions */}
                                        <td className="h-[72px] px-4 py-2 text-base-content/70 text-sm font-bold leading-normal tracking-[0.015em]">
                                            <div className="flex gap-3">
                                                <NavLink
                                                    to={`/vehicle-details/${vehicle._id}`}
                                                >
                                                    <button className="text-primary px-3 py-2 rounded-sm bg-blue-200 hover:text-primary-focus hover:cursor-pointer transition-colors">
                                                        View
                                                    </button>
                                                </NavLink>
                                                <span className="text-base-300"></span>
                                                <NavLink
                                                    to={`/update-vehicle/${vehicle._id}`}
                                                >
                                                    <button className="text-secondary px-3 py-2 rounded-sm bg-green-200 hover:text-secondary-focus hover:cursor-pointer transition-colors">
                                                        Update
                                                    </button>
                                                </NavLink>

                                                <span className="text-base-300"></span>
                                                <button
                                                    onClick={() =>
                                                        handleOpenModal(
                                                            vehicle._id
                                                        )
                                                    }
                                                    className="text-error px-3 py-2 rounded-sm bg-red-200 hover:text-error-focus hover:cursor-pointer transition-colors"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Empty state */}
                    {vehiclesData.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-12 text-base-content/60">
                            <div className="text-6xl mb-4">�</div>
                            <p className="text-lg font-medium">
                                No vehicles found
                            </p>
                            <p className="text-sm">
                                Add your first vehicle to get started
                            </p>
                        </div>
                    )}
                </div>

                {/* Stats Summary */}
                <div className="px-4 py-3">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="stats  shadow-xl bg-base-100">
                            <div className="stat">
                                <div className="stat-title">Total Vehicles</div>
                                <div className="stat-value text-primary">
                                    {vehiclesData.length}
                                </div>
                            </div>
                        </div>
                        <div className="stats  shadow-xl bg-base-100">
                            <div className="stat">
                                <div className="stat-title">Available</div>
                                <div className="stat-value text-success">
                                    {
                                        vehiclesData.filter(
                                            (v) =>
                                                v.availability === "Available"
                                        ).length
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="stats  shadow-xl bg-base-100">
                            <div className="stat">
                                <div className="stat-title">Booked</div>
                                <div className="stat-value text-warning">
                                    {
                                        vehiclesData.filter(
                                            (v) => v.availability === "Booked"
                                        ).length
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="stats  shadow-xl bg-base-100">
                            <div className="stat">
                                <div className="stat-title">Maintenance</div>
                                <div className="stat-value text-error">
                                    {
                                        vehiclesData.filter(
                                            (v) =>
                                                v.availability === "Maintenance"
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

export default MyVehicles;
