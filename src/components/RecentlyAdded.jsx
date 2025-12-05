import { SkeletonLoader } from "./SkeletonLoader";
import VehicleCard from "./VehicleCard";
const RecentlyAdded = ({ vehicles }) => {
    if (!vehicles.length)
        return (
            <div className="">
                <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">
                    Top Rated Vehicle
                </h2>
                <SkeletonLoader></SkeletonLoader>
            </div>
        );
    return (
        <div className="w-full">
            <section className="w-full">
                <h2 className="text-2xl font-bold mb-4">
                    Recently Added Vehicles
                </h2>
                <div className="flex w-full">
                    <div className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                        {vehicles.map((vehicle) => (
                            <VehicleCard
                                key={vehicle._id}
                                vehicle={vehicle}
                            ></VehicleCard>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RecentlyAdded;
