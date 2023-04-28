import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    const recents = [1, 1, 1];
    return (
        <>
            <div>
                <h1 className="my-6 text-center text-4xl">
                    Recent Assignments
                </h1>
                <div className="mx-auto flex items-center justify-center gap-8">
                    {recents.map((num, index) => (
                        <div
                            key={index}
                            className="rounded border bg-white p-10 shadow"
                        >
                            <h3 className="text-2xl">Assignment Title</h3>
                            <Link
                                to={`/assignments/${num}`}
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
