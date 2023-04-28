import React from "react";
import { useForm } from "react-hook-form";

export const NewAssignment = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: { priority: 3 },
    });
    const priorityValue = watch("priority");

    return (
        <div>
            <div className="mx-auto my-2 w-1/2 rounded bg-white px-2 py-4 shadow">
                <h1 className="mb-4 text-center text-3xl font-semibold">
                    New Assignment
                </h1>
                <form
                    className="mx-auto w-1/2"
                    onSubmit={handleSubmit(
                        (data) => {
                            console.log(data);
                        },
                        (errors) => console.log(errors)
                    )}
                >
                    <div className="mb-2">
                        <label className="text-base font-medium text-gray-700">
                            Assignment Name
                        </label>
                        <input
                            type="text"
                            className="mt-1 w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-300 focus:ring-blue-500"
                            {...register("assignmentName", {
                                required: "Assignment name is required",
                            })}
                        />
                        {errors.assignmentName && (
                            <p className="text-red-500">
                                {errors.assignmentName.message}
                            </p>
                        )}
                    </div>
                    <div className="mb-2">
                        <label className="text-base font-medium text-gray-700">
                            Due Date
                        </label>
                        <input
                            type="date"
                            className="mt-1 w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-300 focus:ring-blue-500"
                            {...register("dueDate", { required: true })}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="text-base font-medium text-gray-700">
                            Priority - {priorityValue}
                        </label>
                        <input
                            type="range"
                            step="1"
                            max="5"
                            min="1"
                            className="mt-1 w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-300 focus:ring-blue-500"
                            {...register("priority")}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="text-base font-medium text-gray-700">
                            Class
                        </label>
                        <select
                            className="mt-1 w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-300 focus:ring-blue-500"
                            {...register("class")}
                        >
                            <option value="1">Math</option>
                            <option value="2">Science</option>
                            <option value="3">Physics</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded bg-blue-600 px-2 py-2 text-lg font-normal text-white hover:bg-blue-500"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};
