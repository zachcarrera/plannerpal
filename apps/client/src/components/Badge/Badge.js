import React from "react";

const colors = {
    gray: "bg-gray-100 text-gray-800",
    red: "bg-red-100 text-red-800",
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
};

export const Badge = ({ children, variant }) => {
    if (!variant) variant = "gray";

    return (
        <span
            className={`rounded px-2.5 py-0.5 text-sm font-medium  ${colors[variant]}`}
        >
            {children}
        </span>
    );
};
