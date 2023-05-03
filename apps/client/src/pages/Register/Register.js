import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div className="mx-auto my-2 w-1/2 rounded bg-white px-2 py-4 shadow">
            <h1 className="mb-4 text-center text-3xl font-semibold">
                Register
            </h1>
            <Link
                to="/login"
                className=" mx-auto block text-center text-blue-500 underline"
            >
                Already have an account? Log in here.
            </Link>
            <form
                className="mx-auto mt-2 w-1/2"
                onSubmit={handleSubmit(
                    (data) => console.log(data),
                    (errors) => console.log(errors)
                )}
            >
                <div className="mb-2">
                    <label className="text-base font-medium text-gray-700">
                        First Name
                    </label>
                    <input
                        type="text"
                        className="mt-1 w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-300 focus:ring-blue-500"
                        {...register("firstName", {
                            required: "First name is required",
                            minLength: {
                                value: 2,
                                message:
                                    "First name must be atleast 2 characters",
                            },
                        })}
                    />
                    {errors.firstName && (
                        <p className="mt-2 text-red-500">
                            {errors.firstName.message}
                        </p>
                    )}
                </div>
                <div className="mb-2">
                    <label className="text-base font-medium text-gray-700">
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="mt-1 w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-300 focus:ring-blue-500"
                        {...register("lastName", {
                            required: "Last name is required",
                            minLength: {
                                value: 2,
                                message:
                                    "Last name must be atleast 2 characters",
                            },
                        })}
                    />
                    {errors.lastName && (
                        <p className="mt-2 text-red-500">
                            {errors.lastName.message}
                        </p>
                    )}
                </div>
                <div className="mb-2">
                    <label className="text-base font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        className="mt-1 w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-300 focus:ring-blue-500"
                        {...register("email", {
                            required: "Email is required",
                        })}
                    />
                    {errors.email && (
                        <p className="mt-2 text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <div className="mb-2">
                    <label className="text-base font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        className="mt-1 w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-300 focus:ring-blue-500"
                        {...register("password", {
                            required: "Password is required",
                        })}
                    />
                    {errors.password && (
                        <p className="mt-2 text-red-500">
                            {errors.password.message}
                        </p>
                    )}
                </div>
                <div className="mb-2">
                    <label className="text-base font-medium text-gray-700">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="mt-1 w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-300 focus:ring-blue-500"
                        {...register("confirmPassword", {
                            required: "Confirm Password is required",
                        })}
                    />
                    {errors.confirmPassword && (
                        <p className="mt-2 text-red-500">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full rounded bg-blue-600 px-2 py-2 text-lg font-normal text-white hover:bg-blue-500"
                >
                    Register
                </button>
            </form>
        </div>
    );
};
