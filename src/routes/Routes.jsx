import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home";
import AllVehicles from "../pages/AllVehicles";
import MyProfile from "../pages/MyProfile";
import MyVehicles from "../pages/MyVehicles";
import AddVehicle from "../pages/AddVehicle";
import MyBookings from "../pages/MyBookings";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import Signup from "../pages/Signup";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/allvehicles",
                element: <AllVehicles></AllVehicles>,
            },
            {
                path: "/myprofile",
                element: <MyProfile></MyProfile>,
            },
            {
                path: "/myvehiclesicle",
                element: <MyVehicles></MyVehicles>,
            },
            {
                path: "/mybookings",
                element: <MyBookings></MyBookings>,
            },
            {
                path: "/addvehicle",
                element: <AddVehicle></AddVehicle>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <Signup></Signup>,
            },
            {
                path: "/reset-password",
                element: <ResetPassword></ResetPassword>,
            },
        ],
    },
]);

export default Routes;
