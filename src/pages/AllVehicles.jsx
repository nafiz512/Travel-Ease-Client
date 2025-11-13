import React, { use, useEffect, useState } from "react";
import ScrollMotion from "../components/ScrollMotion";
import useAxios from "../hooks/useAxios";
import { NavLink } from "react-router";
import { BsQuestionDiamondFill } from "react-icons/bs";
import { AuthContext } from "../context/AuthContext";
import LoadingEffect from "../components/LoadingEffect";
import { SkeletonLoader } from "../components/SkeletonLoader ";
import VehicleCard from "../components/VehicleCard";

const AllVehicles = () => {
    const axios = useAxios();
    const { setLoading } = use(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [allVehicle, setData] = useState([]);
    const [vehiclesData, setVehicles] = useState([]);

    useEffect(() => {
        setLoading(true);
        setIsLoading(true);
        axios
            .get("/allvehicles")
            .then((data) => {
                setData(data.data);
                setVehicles(data.data);
            })
            .catch((error) => {
                console.error("Error fetching bookings:", error);
            })
            .finally(() => {
                setLoading(false);
                setIsLoading(false);
            });
    }, [axios, setLoading]);

    // Vehicles data
    const categories = [
        ...new Set(allVehicle.map((vehicle) => vehicle.category)),
    ];
    const locations = [
        ...new Set(allVehicle.map((vehicle) => vehicle.location)),
    ];

    const priceRanges = [
        { label: "Under $20", min: 0, max: 20 },
        { label: "$21 - $40", min: 21, max: 40 },
        { label: "$41 - $60", min: 41, max: 60 },
        { label: "$61 - $100", min: 61, max: 100 },
        { label: "$101 - $150", min: 101, max: 150 },
        { label: "Over $150", min: 151, max: Infinity },
    ];

    const handleFilter = (type, value) => {
        let filteredData = [];

        if (type === "category") {
            filteredData = allVehicle.filter(
                (vehicle) => vehicle.category === value
            );
            setVehicles(filteredData);
        } else if (type === "location") {
            filteredData = allVehicle.filter(
                (vehicle) => vehicle.location === value
            );
            setVehicles(filteredData);
        } else if (type === "price") {
            // Handle price range filter
            const priceRange = priceRanges.find(
                (range) => range.label === value
            );
            if (priceRange) {
                filteredData = allVehicle.filter((vehicle) => {
                    const price = vehicle.pricePerDay;
                    if (priceRange.max === Infinity) {
                        return price >= priceRange.min;
                    }
                    return price >= priceRange.min && price <= priceRange.max;
                });
                setVehicles(filteredData);
            }
        } else if (type === "clear") {
            setVehicles(allVehicle);
        } else {
            console.log("invalid filter type");
        }
    };
    const handleSort = (type) => {
        let sortedList = [...vehiclesData];
        if (type == "asc") {
            sortedList = sortedList.sort(
                (a, b) => a.pricePerDay - b.pricePerDay
            );
        } else {
            sortedList = sortedList.sort(
                (a, b) => b.pricePerDay - a.pricePerDay
            );
        }
        setVehicles(sortedList);
    };

    // Clear all filters
    const clearFilters = () => {
        setVehicles(allVehicle);
    };
    if (isLoading) {
        return (
            <div className="px-4 md:px-40">
                {/* <LoadingEffect></LoadingEffect> */}
                <SkeletonLoader></SkeletonLoader>
            </div>
        );
    }
    return (
        <div>
            <ScrollMotion></ScrollMotion>
            <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    {/* Header */}
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                        <p className="text-base-content tracking-light text-2xl md:text-4xl font-bold leading-tight min-w-72">
                            All Vehicles
                        </p>
                    </div>
                    <div className="flex justify-between w-full">
                        {/* Filter Buttons */}
                        <div className="flex gap-3 p-3 flex-wrap pr-4">
                            <h2 className="text-base-content font-semibold">
                                Filter :
                            </h2>
                            <div className="dropdown">
                                <div tabIndex={0} role="button">
                                    <Button label={"Category"}></Button>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="dropdown-content menu rounded-box z-1 w-52 p-2 shadow-sm bg-base-100 max-h-[300px] overflow-y-auto scrollbar-thin"
                                >
                                    {categories.map((el) => (
                                        <li
                                            onClick={() =>
                                                handleFilter("category", el)
                                            }
                                            key={el}
                                        >
                                            <a>{el}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="dropdown">
                                <div tabIndex={0} role="button">
                                    <Button label={"Location"}></Button>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="dropdown-content menu rounded-box z-1 w-52 p-2 shadow-sm bg-base-100 max-h-[300px] overflow-y-auto scrollbar-thin"
                                >
                                    {locations.map((el) => (
                                        <li
                                            onClick={() =>
                                                handleFilter("location", el)
                                            }
                                            key={el}
                                        >
                                            <a>{el}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="dropdown">
                                <div tabIndex={0} role="button">
                                    <Button label={"Price"}></Button>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm max-h-60 overflow-y-auto"
                                >
                                    {priceRanges.map((range) => (
                                        <li
                                            key={range.label}
                                            onClick={() =>
                                                handleFilter(
                                                    "price",
                                                    range.label
                                                )
                                            }
                                        >
                                            <a>{range.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Clear Filters Button */}
                            {vehiclesData.length !== allVehicle.length && (
                                <button
                                    onClick={clearFilters}
                                    className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-error text-error-content pl-4 pr-2 hover:bg-error/80 transition-colors"
                                >
                                    <p className="text-sm font-medium leading-normal">
                                        Clear Filters
                                    </p>
                                </button>
                            )}
                        </div>

                        <div className="flex justify-center gap-2 items-center">
                            <h2 className="text-base-content font-semibold">
                                Sort :
                            </h2>
                            <div className="dropdown">
                                <div tabIndex={0} role="button">
                                    <Button label={"Sortby"}></Button>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm max-h-60 overflow-y-auto"
                                >
                                    <li onClick={() => handleSort("asc")}>
                                        <a>asc</a>
                                    </li>
                                    <li onClick={() => handleSort("dsc")}>
                                        <a>dsc</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Vehicles Grid */}
                    <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3  gap-4 p-4">
                        {vehiclesData.map((vehicle) => (
                            <VehicleCard
                                key={vehicle._id}
                                vehicle={vehicle}
                            ></VehicleCard>
                        ))}
                    </div>

                    {/* Empty State */}
                    {vehiclesData.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-16 text-base-content/60">
                            <div className="text-6xl mb-4">
                                <BsQuestionDiamondFill></BsQuestionDiamondFill>
                            </div>
                            <p className="text-xl font-medium mb-2">
                                No vehicles found
                            </p>
                            <p className="text-sm">
                                Try adjusting your filters to see more results
                            </p>
                            <button
                                onClick={clearFilters}
                                className="btn btn-primary mt-4"
                            >
                                Clear Filters
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
