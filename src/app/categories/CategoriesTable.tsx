"use client"

import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { TCategoryWithTodos } from "@/drizzle/schema/categories";
import { deleteCategory } from "./actions";

type CategoriesTableProps = {
	categoriesList: TCategoryWithTodos[];
};

const CategoriesTable = ({ categoriesList }: CategoriesTableProps) => {
  return (
    <div className="overflow-x-auto">
			<table className="table table-zebra">
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Posts</th>
						<th className="text-center">Actions</th>
					</tr>
				</thead>
				<tbody>
					{
						categoriesList.map((category: TCategoryWithTodos) => (
							<tr key={category?.id}>
								<td>{category?.id}</td>
								<td>{category?.name}</td>
								<td>{category?.todos?.length}</td>
								<td className="flex gap-2 justify-center items-center">
									<button
										onClick={() => deleteCategory(category?.id)}
										className="btn btn-ghost btn-xs">
										<TrashIcon height={16} width={16} />
									</button>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
  );
};

export default CategoriesTable;
