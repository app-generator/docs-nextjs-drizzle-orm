"use server"

import { db } from "@/drizzle/db"
import { todos, TNewTodo } from "@/drizzle/schema/todos"
import { revalidatePath } from "next/cache";

export const createTodo = async (data: TNewTodo) => {
	await db.insert(todos).values(data);
	revalidatePath("/posts");
};
