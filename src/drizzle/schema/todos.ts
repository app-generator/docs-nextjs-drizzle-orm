import { relations } from "drizzle-orm";
import { integer, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core"
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { categories } from "@/drizzle/schema";
import * as zod from "zod";

export const todos = pgTable("todos", {
	id: serial("id").primaryKey().unique(),
	title: varchar("title", { length: 255, }).notNull(),
	description: varchar("subtitle", { length: 500, }),
	categoryId: integer("category_id").references(() => categories.id, { onDelete: "cascade" }),

	createdAt: timestamp("created_at", { mode: "string"}).notNull().defaultNow(),
	updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});

export const todosRelations = relations(todos, ({ one }) => ({
	category: one(categories, {
		fields: [todos.categoryId],
		references: [categories.id],
	}),
}));

export const TodoSchema = createSelectSchema(todos);
export const TodosListSchema = zod.array(TodoSchema);
export const NewTodoSchema = createInsertSchema(todos).pick({
	title: true,
	description: true,
	categoryId: true,
});

export type TTodo = zod.infer<typeof TodoSchema>;
export type TNewTodo = zod.infer<typeof NewTodoSchema>;
