import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import LoadingEffect from "../components/LoadingEffect";
// import { LoadingEffect } from "../components/LoadingEffect";

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) return <LoadingEffect></LoadingEffect>;
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
