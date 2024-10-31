import React from "react";
import { db } from "@/drizzle/db";
import CreateTodoForm from "./CreateTodoForm";

const CreateTodo = async () => {
  const categories = await db.query.categories.findMany();

  return (
    <div className="mx-auto page">
      <h2 className="text-3xl mb-4 text-center">
        Create a New Todo
      </h2>
      <div className="mx-auto md: w-1/2">
        <CreateTodoForm categories={categories} />
      </div>
    </div>
  );
};

export default CreateTodo;
