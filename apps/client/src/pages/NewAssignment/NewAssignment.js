import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { createAssignment, getAllCourses } from "../../services";
import { LoadSpinner } from "../../components";
import { useNavigate } from "react-router-dom";

export const NewAssignment = () => {
    const queryClient = useQueryClient();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: { priority: 3 },
    });
    const priorityValue = watch("priority");

    const { data: classes, isLoading } = useQuery(["classes"], () =>
        getAllCourses()
    );

    const mutation = useMutation({
        mutationFn: (newAssignment) => createAssignment(newAssignment),
        onSuccess: (data) =>
            queryClient.invalidateQueries({
                queryKey: ["assignments", "top3"],
            }),
        onError: (error) => console.log(error),
    });

    const navigate = useNavigate();

    return (
        <div>
            <div className="mx-auto my-2 w-1/2 rounded bg-white px-2 py-4 shadow">
                <h1 className="mb-4 text-center text-3xl font-semibold">
                    New Assignment
                </h1>

                {isLoading ? (
                    <LoadSpinner />
                ) : (
                    <form
                        className="mx-auto w-1/2"
                        onSubmit={handleSubmit(
                            (data) => {
                                console.log(data);
                                mutation.mutate(data);
                                navigate("/classes");
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
                                {...register("name", {
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
                                {...register("priority", {
                                    valueAsNumber: true,
                                })}
                            />
                        </div>
                        <div className="mb-2">
                            <label className="text-base font-medium text-gray-700">
                                Class
                            </label>
                            <select
                                className="mt-1 w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-300 focus:ring-blue-500"
                                {...register("courseId", {
                                    valueAsNumber: true,
                                })}
                            >
                                {classes?.map((oneClass) => (
                                    <option
                                        key={oneClass.id}
                                        value={oneClass.id}
                                    >
                                        {oneClass.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full rounded bg-blue-600 px-2 py-2 text-lg font-normal text-white hover:bg-blue-500"
                        >
                            Add
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};
