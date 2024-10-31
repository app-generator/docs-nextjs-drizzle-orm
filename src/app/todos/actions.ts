"use server"

import { eq } from "drizzle-orm";
import { db } from "@/drizzle/db";
import { todos } from "@/drizzle/schema";
import { revalidatePath } from "next/cache";

export const deleteTodo = async (id: number) => {
	await db.delete(todos).where(eq(todos.id, id));
	revalidatePath("/todos");
};
