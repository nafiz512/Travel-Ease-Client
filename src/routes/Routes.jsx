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
import VehicleDetails from "../pages/VehicleDetails";
import UpdateVehicle from "../pages/UpdateVehicle";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import NotFoundPage from "../pages/NotFoundPage";

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
                element: (
                    <PrivateRoute>
                        <MyProfile></MyProfile>
                    </PrivateRoute>
                ),
            },
            {
                path: "/myvehiclesicle",
                element: (
                    <PrivateRoute>
                        <MyVehicles></MyVehicles>
                    </PrivateRoute>
                ),
            },
            {
                path: "/mybookings",
                element: (
                    <PrivateRoute>
                        <MyBookings></MyBookings>
                    </PrivateRoute>
                ),
            },
            {
                path: "/addvehicle",
                element: (
                    <PrivateRoute>
                        <AddVehicle></AddVehicle>
                    </PrivateRoute>
                ),
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
            {
                path: "/vehicle-details/:id",
                element: (
                    <PrivateRoute>
                        <VehicleDetails></VehicleDetails>
                    </PrivateRoute>
                ),
            },
            {
                path: "/update-vehicle/:id",
                element: (
                    <PrivateRoute>
                        <UpdateVehicle></UpdateVehicle>
                    </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: "/*",
        element: <NotFoundPage></NotFoundPage>,
    },
]);

export default Routes;
