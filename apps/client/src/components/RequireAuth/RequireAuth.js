import React from "react";
import { useAuth } from "../../hooks";
import { useLocation, Outlet, Navigate } from "react-router-dom";

export const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    // console.log(auth);
    return (
        <div>
            {/* {true ? ( */}
            {auth?.token ? (
                <Outlet />
            ) : (
                <Navigate to="/login" state={{ from: location }} replace />
            )}
        </div>
    );
};
