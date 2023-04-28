import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    const [togglerNav, setTogglerNav] = useState(false);

    const toggleLinks = () => {
        setTogglerNav(!togglerNav);
    };

    return (
        <nav className="border-gray-200 bg-white dark:bg-gray-900">
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-2">
                <Link className="flex items-center">
                    <img
                        src="https://thenounproject.com/api/private/icons/4042324/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkSdmBh6SHdd2EltnT1bFD4zjXGB9BqHu2WHvwkAnXGOa5igTFqoz-nyOAtFrugzvPLJ232LQ8SqPch8-ZyA55ny_LbQ%3D%3D"
                        className="mr-3 h-14"
                        alt="Planner Icon"
                    />
                    <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                        PlannerPal
                    </span>
                </Link>
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
                <div
                    // className="hidden w-full md:block md:w-auto"
                    className={
                        (togglerNav ? "hidden" : "") +
                        " w-full md:block md:w-auto"
                    }
                >
                    <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
                        <li>
                            <NavLink
                                to="/"
                                className="text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/classes"
                                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                            >
                                Classes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/progress"
                                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                            >
                                Progress
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/calendar"
                                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                            >
                                Calendar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/assignments/new"
                                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
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
