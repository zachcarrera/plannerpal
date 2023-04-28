import React from "react";
import { ProgressBar } from "../../components";

export const Progress = () => {
    return (
        <div className="mx-auto my-4 w-1/2 bg-white py-2">
            <h1 className="text-center text-3xl">Progress</h1>
            {/* map over classes here */}
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
