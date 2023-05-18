import React from "react";
import { Link } from "react-router-dom";
import { getTop3Assignments } from "../../services";
import { useQuery } from "@tanstack/react-query";

export const Home = () => {
    const { data: assignments, isLoading } = useQuery(
        ["assignments", "top3"],
        () => getTop3Assignments()
    );
    return (
        <>
            <div>
                <h1 className="my-6 text-center text-4xl">
                    Recent Assignments
                </h1>
                <div className="mx-auto flex w-2/3 items-center justify-center gap-8">
                    {assignments?.map((assignment) => (
                        <div
                            key={assignment.id}
                            className="w-full rounded border bg-white p-10 shadow"
                        >
                            <h3 className="text-center text-2xl">
                                {assignment.name}
                            </h3>
                            <Link
                                to={`/assignments/${assignment.id}`}
                                className="mt-3 block rounded-md bg-blue-600 px-1 py-2 text-center text-xl text-white hover:bg-blue-500"
                            >
                                View
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
