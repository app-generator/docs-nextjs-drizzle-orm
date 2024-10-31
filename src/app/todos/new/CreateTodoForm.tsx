"use client"

import React, { ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewTodoSchema, TNewTodo } from "@/drizzle/schema/todos";
import { TCategory } from "@/drizzle/schema/categories";
import { createTodo } from "./actions";
import { useRouter } from "next/navigation";

type TCreateTodoFormProps = {
	categories?: TCategory[];
};

const CreateTodoForm = ({ categories }: TCreateTodoFormProps) => {
	const router = useRouter();
	
	const { reset, register, handleSubmit, formState: { errors } } = useForm<TNewTodo>({
    resolver: zodResolver(NewTodoSchema),
    mode: "onChange",
    criteriaMode: "all",
    shouldFocusError: true,
    reValidateMode: "onSubmit",
  });  
  
  
	const createNewTodo: SubmitHandler<TNewTodo> = async (data: TNewTodo) => {
		await createTodo(data);
		reset({});
		router.push("/");
	};

	return (
    <form onSubmit={handleSubmit(createNewTodo)}>
			<div className="mb-4">
				<label
					className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
				>
					Title
				</label>
			<input
				type="text"
				{...register("title")}
				className="text-field"
				placeholder="Todo title"
			/>
			{
				errors?.title && (
					<span className="text-sm text-red-700">{errors?.title?.message as ReactNode}</span>
				)
			}
			</div>
			
			<div className="mb-4">
				<label
					className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2"
				>
					Description
				</label>
				<textarea
					{...register("description")}
					className="text-field"
					rows={6}
					placeholder="Add todo description"
				>
				</textarea>
				{
				errors?.description && (
					<span className="text-xs text-red-700">{errors?.description?.message as ReactNode}</span>
				)
			}
			</div>
			<div className="flex justify-between">
				<button
					type="submit"
					className="w-40 btn btn-primary"
				>
					Create Todo
				</button>
			</div>
		</form>
  );
};

export default CreateTodoForm;
