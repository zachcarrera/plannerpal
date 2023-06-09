import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CreateClassForm, LoadSpinner } from "../../components";
import { getAllCourses } from "../../services";

export const Classes = () => {
    const { data: classes, isLoading } = useQuery(["classes"], () =>
        getAllCourses()
    );
    const [toggleForm, setToggleForm] = useState(false);

    return (
        <div className="mx-auto my-2 w-1/2 rounded bg-white p-2 shadow">
            <h1 className="mb-4 text-center text-3xl">Classes</h1>
            {isLoading && <LoadSpinner />}
            <div className="mx-auto w-3/4">
                {toggleForm ? (
                    <CreateClassForm
                        handleToggle={() => setToggleForm(false)}
                    />
                ) : (
                    <button
                        onClick={() => setToggleForm(true)}
                        className=" ml-auto block rounded bg-blue-600 px-4 py-2 text-lg font-normal text-white hover:bg-blue-500"
                    >
                        + Add
                    </button>
                )}
            </div>

            {classes?.map((oneClass) => (
                <div key={oneClass.id} className="mx-auto w-3/4">
                    <h2 className="text-center text-2xl">{oneClass.name}</h2>
                    {oneClass.assignments.length < 1 ? (
                        <p>No assignments </p>
                    ) : (
                        <ul>
                            {oneClass.assignments.map((assignment) => (
                                <li key={assignment.id}>
                                    <Link
                                        to={`/assignments/${assignment.id}`}
                                        className="text-blue-600 underline underline-offset-2"
                                    >
                                        {assignment.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}

            {/* <div className="mx-auto w-3/4">
                {toggleForm ? (
                    <CreateClassForm
                        handleToggle={() => setToggleForm(false)}
                    />
                ) : (
                    <button
                        onClick={() => setToggleForm(true)}
                        className=" ml-auto block rounded bg-blue-600 px-4 py-2 text-lg font-normal text-white hover:bg-blue-500"
                    >
                        + Add
                    </button>
                )}
                <h2 className="text-center text-2xl">Class 1</h2>
                <ul>
                    <li>Assignment 1</li>
                    <li>Assignment 2</li>
                    <li>Assignment 3</li>
                </ul>
            </div> */}
        </div>
    );
};
