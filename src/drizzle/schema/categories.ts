import { relations } from "drizzle-orm";
import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core"
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import * as zod from "zod";
import { todos } from "@/drizzle/schema";
import { TTodo } from "@/drizzle/schema/todos";

export const categories = pgTable("categories", {
	id: serial("id").primaryKey().notNull().unique(),
	name: varchar("name", { length: 90, }).notNull().unique(),
	description: text("description"),
	
	createdAt: timestamp("created_at", { mode: "string"}).notNull().defaultNow(),
	updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});

export const categoriesRelations = relations(categories, ({ many }) => ({
	todos: many(todos),
}));

export const CategorySchema = createSelectSchema(categories);

export const NewCategorySchema = createInsertSchema(categories).pick({
	name: true,
	description: true,
});

type TTodosArray = {
	todos: TTodo[];
};

export type TCategory = zod.infer<typeof CategorySchema>;
export type TCategoryWithTodos = TCategory & TTodosArray;
export type TNewCategory = zod.infer<typeof NewCategorySchema>;
