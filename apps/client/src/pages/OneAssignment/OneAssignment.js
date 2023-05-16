import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getOneAssignment } from "../../services/internalApiService";
import { LoadSpinner } from "../../components";

export const OneAssignment = () => {
    const { id } = useParams();
    const { data: assignment, isLoading } = useQuery(["assignment", id], () =>
        getOneAssignment(id)
    );

    let dueDate;
    if (!isLoading) {
        dueDate = new Date(assignment.dueDate);
    }
    return (
        <div className="mx-auto my-2 w-1/2 rounded bg-white p-2 shadow">
            {isLoading ? (
                <LoadSpinner />
            ) : (
                <>
                    <h1 className="mb-4 text-center text-3xl">
                        {assignment.name}
                    </h1>
                    <p className="text-center">
                        <span className="font-semibold">Due Date: </span>
                        {dueDate.toLocaleDateString("en-us")}
                    </p>
                </>
            )}
        </div>
    );
};
