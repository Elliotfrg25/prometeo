import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ element, ...rest }) => {
    const { currentUser } = useAuth();

    return currentUser ? (
        <Route element={element} {...rest} />
    ) : (
        <Navigate to="/signin" replace />
    );
};

export default PrivateRoute;
