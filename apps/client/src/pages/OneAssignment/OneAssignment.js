import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getOneAssignment } from "../../services/internalApiService";
import { Badge, LoadSpinner } from "../../components";

export const OneAssignment = () => {
    const { id } = useParams();
    const { data: assignment, isLoading } = useQuery(["assignment", id], () =>
        getOneAssignment(id)
    );

    let dueDate;
    const badge = {};
    if (!isLoading) {
        dueDate = new Date(assignment.dueDate);
        if (assignment.completed) {
            badge.variant = "green";
            badge.text = "Completed";
        } else {
            badge.variant = "gray";
            badge.text = "Not Completed";
        }
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
                    <div className="flex justify-center gap-4">
                        <p className="text-center">
                            <span className="font-semibold">Due Date: </span>
                            {dueDate.toLocaleDateString("en-us")}
                        </p>
                        <Badge variant={badge.variant}>{badge.text}</Badge>
                    </div>
                </>
            )}
        </div>
    );
};
