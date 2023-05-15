import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { createCourse } from "../../services";

export const CreateClassForm = ({ handleToggle }) => {
    const queryClient = useQueryClient();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { mutate } = useMutation({
        mutationFn: (formData) => createCourse(formData),
        onSuccess: (data) =>
            queryClient.invalidateQueries({ queryKey: ["classes"] }),
    });

    return (
        <div>
            <form
                onSubmit={handleSubmit(
                    (data) => {
                        console.log(data);
                        mutate(data);
                        handleToggle();
                    },
                    (error) => console.log(error)
                )}
            >
                <div className="mb-2">
                    <label
                        htmlFor="name"
                        className="text-base font-medium text-gray-700"
                    >
                        Class Name
                    </label>
                    <input
                        type="text"
                        className="mt-1 w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-300 focus:ring-blue-500"
                        {...register("name", {
                            required: "Class name is required",
                        })}
                    />
                    {errors.name && (
                        <p className="mt-2 text-red-500">
                            {errors.name.message}
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    className="text-ls w-full rounded bg-blue-600 px-2 py-2 font-normal text-white hover:bg-blue-500"
                >
                    Add Class
                </button>
            </form>
        </div>
    );
};
