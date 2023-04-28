import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllCourses } from "../../services";

export const Classes = () => {
    const { data: classes, isLoading } = useQuery(["classes"], () =>
        getAllCourses()
    );

    return (
        <div className="mx-auto my-2 w-1/2 rounded bg-white p-2 shadow">
            <h1 className="text-center text-3xl">Classes</h1>

            {isLoading && <p>Loading... </p>}

            {classes?.map((oneClass) => (
                <div key={oneClass.id} className="mx-auto w-3/4">
                    <h2 className="text-center text-2xl">{oneClass.name}</h2>
                    {oneClass.assignments.length < 1 ? (
                        <p>No assignments </p>
                    ) : (
                        <ul>
                            {oneClass.assignments.map((assignment) => (
                                <li key={assignment.id}>{assignment.name}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}

            {/*<div className="mx-auto w-3/4">
                <h2 className="text-center text-2xl">Class 1</h2>
                <ul>
                    <li>Assignment 1</li>
                    <li>Assignment 2</li>
                    <li>Assignment 3</li>
                </ul>
            </div>*/}
        </div>
    );
};
