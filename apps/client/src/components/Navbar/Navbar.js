import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../hooks";
import { http } from "../../services";

export const Navbar = () => {
    const [togglerNav, setTogglerNav] = useState(false);
    const { auth, setAuth } = useAuth();

    const toggleLinks = () => {
        setTogglerNav(!togglerNav);
    };

    return (
        <nav className="border-gray-200 bg-white dark:bg-gray-900">
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-2">
                <Link className="flex items-center">
                    <img
                        src="https://www.clipartmax.com/png/middle/156-1565959_meeting-planner-icon-weekdays-icon.png"
                        className="mr-3 h-10"
                        alt="Planner Icon"
                    />
                    <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                        PlannerPal
                    </span>
                </Link>
                <div className="flex md:order-2">
                    {auth?.token ? (
                        <button
                            onClick={() => {
                                setAuth({});
                                delete http.defaults.headers.common[
                                    "Authorization"
                                ];
                            }}
                            className="mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 md:mr-0"
                        >
                            Log Out
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 md:mr-0"
                        >
                            Log In
                        </Link>
                    )}
                    <button
                        onClick={() => toggleLinks()}
                        type="button"
                        className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    className={
                        (togglerNav ? "hidden" : "") +
                        " w-full md:block md:w-auto"
                    }
                >
                    <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
                        <li>
                            <NavLink
                                to="/"
                                className="relative block rounded py-2 pl-3 pr-4 text-gray-900 transition duration-300 after:absolute after:-bottom-1  after:left-0 after:h-0.5 after:w-0  after:bg-blue-700 after:transition-[width] after:content-[''] hover:bg-gray-100 after:hover:w-full dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/classes"
                                className="relative block rounded py-2 pl-3 pr-4 text-gray-900 transition duration-300 after:absolute after:-bottom-1  after:left-0 after:h-0.5 after:w-0  after:bg-blue-700 after:transition-[width] after:content-[''] hover:bg-gray-100 after:hover:w-full dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                            >
                                Classes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/progress"
                                className="relative block rounded py-2 pl-3 pr-4 text-gray-900 transition duration-300 after:absolute after:-bottom-1  after:left-0 after:h-0.5 after:w-0  after:bg-blue-700 after:transition-[width] after:content-[''] hover:bg-gray-100 after:hover:w-full dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                            >
                                Progress
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/calendar"
                                className="relative block rounded py-2 pl-3 pr-4 text-gray-900 transition duration-300 after:absolute after:-bottom-1  after:left-0 after:h-0.5 after:w-0  after:bg-blue-700 after:transition-[width] after:content-[''] hover:bg-gray-100 after:hover:w-full dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                            >
                                Calendar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/assignments/new"
                                className="relative block rounded py-2 pl-3 pr-4 text-gray-900 transition duration-300 after:absolute after:-bottom-1  after:left-0 after:h-0.5 after:w-0  after:bg-blue-700 after:transition-[width] after:content-[''] hover:bg-gray-100 after:hover:w-full dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                            >
                                + New Assignment
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
