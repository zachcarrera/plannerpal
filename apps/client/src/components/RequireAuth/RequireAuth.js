import React from "react";
import { useAuth } from "../../hooks";
import { useLocation, Outlet, Navigate } from "react-router-dom";

export const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    return (
        <div>
            {/* {true ? ( */}
            {auth?.user ? (
                <Outlet />
            ) : (
                <Navigate to="/login" state={{ from: location }} replace />
            )}
        </div>
    );
};
