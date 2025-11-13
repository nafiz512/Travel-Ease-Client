import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import RecentlyAdded from "../components/RecentlyAdded";
import TopRatedAndOwners from "../components/TopRatedAndOwners";
import AboutSection from "../components/AboutSection";
import ScrollMotion from "../components/ScrollMotion";
import LoadingEffect from "../components/LoadingEffect";
import useAxios from "../hooks/useAxios";
import useSectureAxios from "../hooks/useSecureAxios";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [vehicles, setVehicles] = useState([]);
    const [topVehicles, setTopVehicles] = useState([]);
    // const axios = useAxios();
    const axios = useSectureAxios();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [recentRes, topRes] = await Promise.all([
                    axios.get("/filtered-vehicle?sortby=createdAt&limit=6"),
                    axios.get("/filtered-vehicle?sortby=ratings&limit=3"),
                ]);
                setVehicles(recentRes.data);
                setTopVehicles(topRes.data);
            } catch (error) {
                console.error("Error fetching vehicles:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [axios]);

    if (loading) return <LoadingEffect />;

    return (
        <div>
            <ScrollMotion />
            <Hero />
            <RecentlyAdded vehicles={vehicles} />
            <TopRatedAndOwners topVehicles={topVehicles} />
            <AboutSection />
        </div>
    );
};

export default Home;
