import React from "react";
import { useForm } from "react-hook-form";

export const CreateClassForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div>
            <form
                onSubmit={handleSubmit(
                    (data) => console.log(data),
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
