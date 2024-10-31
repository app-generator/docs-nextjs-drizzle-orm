import React from "react";
import Link from "next/link";
import { db } from "@/drizzle/db";
import CategoriesTable from "./CategoriesTable";

const Categories = async () => {
	const categoriesList = await db.query.categories.findMany({
		with: {
			todos: true,
		},
	});

	return (
		<div className="page">
			<div className="mt-12 mb-6 flex justify-between items-center">
				<h2 className="text-6xl mb-4">All Categories</h2>
				<Link href="/categories/new" className="btn btn-primary btn-md">Create Category</Link>
			</div>
			<CategoriesTable categoriesList={categoriesList} />
		</div>
	);
};

export default Categories;
