import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = () => {
    const { currentUser } = useAuth();

    return currentUser ? (
        <Outlet />
    ) : (
        <Navigate to="/signin" replace />
    );
};

export default PrivateRoute;


