import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div className="mx-auto my-2 w-1/2 rounded bg-white px-2 py-4 shadow">
            <h1 className="mb-4 text-center text-3xl font-semibold">Login</h1>
            <Link
                to="/register"
                className=" mx-auto block text-center text-blue-500 underline"
            >
                Don't have an account? Register here.
            </Link>
            <form className="mx-auto w-1/2">
                <div className="mb-2">
                    <label className="text-base font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="text"
                        className="mt-1 w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-300 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-2">
                    <label className="text-base font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        className="mt-1 w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-300 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full rounded bg-blue-600 px-2 py-2 text-lg font-normal text-white hover:bg-blue-500"
                >
                    Log in
                </button>
            </form>
        </div>
    );
};
