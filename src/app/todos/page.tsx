import React from "react";
import Link from "next/link";
import { db } from "@/drizzle/db";
import TodoListDeck from "./TodosListDeck";
import { desc } from "drizzle-orm";
import { todos } from "@/drizzle/schema";

const Todos = async () => {
	const todosList = await db.query.todos.findMany({
		with: {
			category: true,
		},
		orderBy: [desc(todos.id),]
	});
  
  return (
    <div className="page">
			<div className="mt-12 mb-6 flex justify-between items-center">
				<h2 className="text-6xl mb-4">All Todos</h2>
				<Link href="/todos/new" className="btn btn-primary btn-md">Create A Todo</Link>
			</div>
				<TodoListDeck todosList={todosList} />
		</div>
  );
};

export default Todos;
