import React, { useState } from "react";
import { NavLink } from "react-router";

const MyVehicles = () => {
    // Table data object for iteration
    let vehicleId = null;
    const vehiclesData = [
        {
            id: 1,
            name: "2023 Sedan",
            location: "San Francisco, CA",
            price: "$50/day",
            status: "Available",
            statusType: "success",
        },
        {
            id: 2,
            name: "2022 SUV",
            location: "Los Angeles, CA",
            price: "$75/day",
            status: "Booked",
            statusType: "warning",
        },
        {
            id: 3,
            name: "2021 Compact",
            location: "San Diego, CA",
            price: "$40/day",
            status: "Available",
            statusType: "success",
        },
        {
            id: 4,
            name: "2024 Electric",
            location: "San Jose, CA",
            price: "$90/day",
            status: "Maintenance",
            statusType: "error",
        },
    ];

    // Status color mapping
    const statusColors = {
        available: "bg-success/20",
        booked: "bg-warning/20",
        maintenance: "bg-error/20",
        success: "bg-success/20",
        warning: "bg-warning/20",
        error: "bg-error/20",
    };

    const handleView = (vehicleId) => {
        console.log("View vehicle:", vehicleId);
        // Add view logic here
    };

    const handleOpenModal = (id) => {
        // Add delete logic here
        vehicleId = id;
        document.getElementById("my_modal_1").showModal();
    };
    const handleDelete = () => {
        if (vehicleId) {
            console.log("going to delete the vehicle", vehicleId);
        }
    };

    return (
        <div className="px-1 md:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1 w-full">
                {/* Header */}
                <div className="flex flex-wrap justify-between gap-3 p-4">
                    <p className="text-base-content tracking-light text-2xl md:text-[32px] font-bold leading-tight min-w-72">
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
                                    <th className="px-4 py-3 text-left text-base-content text-sm font-medium  w-[400px]">
                                        Vehicle
                                    </th>
                                    <th className="px-4 py-3 text-left text-base-content text-sm font-medium  w-[400px]">
                                        Location
                                    </th>
                                    <th className="px-4 py-3 text-left text-base-content text-sm font-medium  w-[400px]">
                                        Price
                                    </th>
                                    <th className="px-4 py-3 text-left text-base-content text-sm font-medium  w-60">
                                        Status
                                    </th>
                                    <th className="px-4 py-3 text-left text-base-content text-sm font-medium  w-60">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {vehiclesData.map((vehicle) => (
                                    <tr
                                        key={vehicle.id}
                                        className="border-t border-base-300 hover:bg-base-200/50 transition-colors"
                                    >
                                        {/* Vehicle Name */}
                                        <td className="h-[72px] px-4 py-2 text-base-content text-sm font-normal leading-normal">
                                            {vehicle.name}
                                        </td>

                                        {/* Location */}
                                        <td className="h-[72px] px-4 py-2 text-base-content/70 text-sm font-normal leading-normal">
                                            {vehicle.location}
                                        </td>

                                        {/* Price */}
                                        <td className="h-[72px] px-4 py-2 text-base-content/70 text-sm font-normal leading-normal">
                                            {vehicle.price}
                                        </td>

                                        {/* Status */}
                                        <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
                                            <button
                                                className={`flex min-w-[84px] max-w-[480px] cursor-default items-center justify-center rounded-sm shadow-xl h-8 px-4 text-sm font-medium leading-normal w-full ${
                                                    statusColors[
                                                        vehicle.statusType
                                                    ] ||
                                                    statusColors[
                                                        vehicle.status.toLowerCase()
                                                    ]
                                                }`}
                                            >
                                                <span className="truncate">
                                                    {vehicle.status}
                                                </span>
                                            </button>
                                        </td>

                                        {/* Actions */}
                                        <td className="h-[72px] px-4 py-2 text-base-content/70 text-sm font-bold leading-normal tracking-[0.015em]">
                                            <div className="flex gap-3">
                                                <button
                                                    onClick={() =>
                                                        handleView(vehicle.id)
                                                    }
                                                    className="text-primary hover:text-primary-focus hover:underline transition-colors"
                                                >
                                                    View
                                                </button>
                                                <span className="text-base-300">
                                                    |
                                                </span>
                                                <NavLink
                                                    to={`/update-vehicle/${vehicle.id}`}
                                                >
                                                    <button className="text-secondary hover:text-secondary-focus hover:underline transition-colors">
                                                        Update
                                                    </button>
                                                </NavLink>

                                                <span className="text-base-300">
                                                    |
                                                </span>
                                                <button
                                                    onClick={() =>
                                                        handleOpenModal(
                                                            vehicle.id
                                                        )
                                                    }
                                                    className="text-error hover:text-error-focus hover:underline transition-colors"
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
                                            (v) => v.status === "Available"
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
                                            (v) => v.status === "Booked"
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
                                            (v) => v.status === "Maintenance"
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
