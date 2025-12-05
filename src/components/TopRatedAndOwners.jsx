import { SkeletonLoader } from "./SkeletonLoader";
import VehicleCard from "./VehicleCard";

const TopRatedAndOwners = ({ topVehicles }) => {
    if (!topVehicles.length)
        return (
            <div className="">
                <h2 className="text-2xl font-bold">Top Rated Vehicle</h2>
                <SkeletonLoader></SkeletonLoader>
            </div>
        );
    return (
        <div className="min-h-screen w-full bg-base-100 text-base-content ">
            {/* Top Categories Section */}
            <section className=" w-full">
                <h2 className="text-2xl font-bold">Top Rated Vehicle</h2>
                <div className="flex flex-wrap justify-between w-full">
                    {topVehicles.map((vehicle) => (
                        <VehicleCard key={vehicle._id} vehicle={vehicle} />
                    ))}
                </div>
            </section>

            {/* Featured Owners Section */}
            <section>
                <h2 className="text-2xl font-bold">Featured Owners</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ">
                    {owners.map((owner) => (
                        <div
                            key={owner.id}
                            className="flex flex-col gap-3 text-center items-center "
                        >
                            <div className="px-4">
                                <div
                                    className="w-[250px] h-[250px] bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                                    style={{
                                        backgroundImage: `url(${owner.image})`,
                                    }}
                                ></div>
                            </div>
                            <div>
                                <p className="text-base font-medium leading-normal text-base-content">
                                    {owner.name}
                                </p>
                                <p className="text-sm font-normal leading-normal text-base-content">
                                    {owner.rating}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TopRatedAndOwners;

const owners = [
    {
        id: 1,
        name: "Sophia Carter",
        rating: "4.8 stars",
        image: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 2,
        name: "Ethan Bennett",
        rating: "4.9 stars",
        image: "https://plus.unsplash.com/premium_photo-1689629870780-5d0e655383e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 3,
        name: "Olivia Hayes",
        rating: "4.7 stars",
        image: "https://plus.unsplash.com/premium_photo-1690086519096-0594592709d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
];
