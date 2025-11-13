import { SkeletonLoader } from "./SkeletonLoader";
import VehicleCard from "./VehicleCard";

const TopRatedAndOwners = ({ topVehicles }) => {
    if (!topVehicles.length)
        return (
            <div className=" py-10 px-6 md:px-20">
                <h2 className="text-2xl font-bold  px-4 pb-3 pt-5">
                    Top Rated Vehicle
                </h2>
                <SkeletonLoader></SkeletonLoader>
            </div>
        );
    return (
        <div className="min-h-screen w-full bg-base-100 text-base-content font-sans py-5 mb-3 px-6 md:px-20">
            {/* Top Categories Section */}
            <section className="mb-8 w-full">
                <h2 className="text-2xl font-bold  px-4 pb-3 pt-5">
                    Top Rated Vehicle
                </h2>
                <div className="flex flex-wrap justify-between w-full gap-3 p-4">
                    {topVehicles.map((vehicle) => (
                        <VehicleCard key={vehicle._id} vehicle={vehicle} />
                    ))}
                </div>
            </section>

            {/* Featured Owners Section */}
            <section>
                <h2 className="text-2xl font-bold  px-4 pb-3 pt-5">
                    Featured Owners
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-4">
                    {owners.map((owner) => (
                        <div
                            key={owner.id}
                            className="flex flex-col gap-3 text-center items-center pb-3"
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
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFLEK9-vMYJOZcYQoriB7HXlElgFWHE9vTReBZVpMIFqREx1hVki7oNNmTPb7V1q4INMtuF7jPbPmstXvIRay9oq_fcOfj8NjkrZqzIu-mt3Eh40i0wsqFfC2jwt5gr2CY1AvZi842En3-4eJL452ymSRoD7NSRcl_Ul8mfrg1JYR0D8rCK1g1GXWYdgBix2bMOqh-bIGXbgX_lP3lWZUUYxsc4jgET_9SOpTyYAw4HFBbYlAIzmO42u-Vhfo_Ksh_5fAZy5Cqeyw",
    },
    {
        id: 2,
        name: "Ethan Bennett",
        rating: "4.9 stars",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjhx2lN1-XwOQH5PZDMgZv7RUSRq89eivW5XSIaPH8FS9LWEajiteOOAlu9tBHnT333kKkmOb_tm1TYPaC997HiB3LZqdcxjazLfCm4hICQsyYEg4PvP-cbl6RglhOoeFQ9GobLbawstqVq5NdlRWbcQiNw7-JV_aNUte-0pI8TRQ4t4kLpGbIDeNtDF47iBBAjeCpZyFCBbfsvfP8YrN0edWUApiA9Vu85RJ6UOpKN_-ECAvyBeMgUTeKTQwQAoJQEWzzABJMLBw",
    },
    {
        id: 3,
        name: "Olivia Hayes",
        rating: "4.7 stars",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCr9tLyuN4O_goXDvfCeEzmosEhV2JCP7OJleZbVhZe_g7F4OBUrMxNJj0GpYbQZJEya_2TZygWHG9EvaJz5NCMkLB3cCeHT-skSn6F4hpjgfCnIgIRJthKl9tfZwlcuGaharmZjs1HgMmNwk18YlaGmPZoYsLoGzmt6AeFXLNBNHWp58sOpOcgfXxXb2or6vFtCxtPDz9K1uElKn2DEZsHdpnlCawNjmf_BwSkf5YzW1foVnwFDeGDDqXZTQ39Vo2-EtLEd52djdE",
    },
];
