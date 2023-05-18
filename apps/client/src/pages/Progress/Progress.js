import React from "react";
import { ProgressBar, LoadSpinner } from "../../components";
import { getAllCourses } from "../../services";
import { useQuery } from "@tanstack/react-query";

export const Progress = () => {
    const { data: classes, isLoading } = useQuery(["classes"], () =>
        getAllCourses()
    );
    if (!isLoading) console.log(classes);

    return (
        <div className="mx-auto my-4 w-1/2 bg-white py-2">
            <h1 className="mb-4 text-center text-3xl">Progress</h1>

            {isLoading && <LoadSpinner />}
            {/* map over classes here */}
            {classes?.map((oneClass) => (
                <div key={oneClass.id} className="mx-auto my-2 w-3/4 ">
                    <h2 className="text-center text-2xl">{oneClass.name}</h2>
                    <ProgressBar
                        percentage={Math.floor(
                            (oneClass.assignments.reduce((sum, assignment) => {
                                let increment = 0;
                                if (assignment.completed) increment = 1;
                                return sum + increment;
                            }, 0) /
                                oneClass.assignments.length) *
                                100
                        )}
                    />
                </div>
            ))}
            <div className="mx-auto my-2 w-3/4 ">
                <h2 className="text-center text-2xl">Class 1</h2>
                <ProgressBar percentage={20} />
                <ProgressBar percentage={43} />
                <ProgressBar percentage={67} />
                <ProgressBar percentage={99} />
            </div>
            <div className="mx-auto my-2 w-3/4 ">
                <h2 className="text-center text-2xl">Class 2</h2>
                <ProgressBar percentage={67} />
            </div>
        </div>
    );
};
