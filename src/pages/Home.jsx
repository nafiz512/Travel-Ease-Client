import React from "react";
import Hero from "../components/Hero";
import RecentlyAdded from "../components/RecentlyAdded";
import CategoriesAndOwners from "../components/CategoriesAndOwners ";
import AboutSection from "../components/AboutSection";
import ScrollMotion from "../components/ScrollMotion";

const Home = () => {
    return (
        <div>
            <ScrollMotion></ScrollMotion>
            {/* components */}
            <Hero></Hero>
            <RecentlyAdded></RecentlyAdded>
            <CategoriesAndOwners></CategoriesAndOwners>
            <AboutSection></AboutSection>
        </div>
    );
};

export default Home;
