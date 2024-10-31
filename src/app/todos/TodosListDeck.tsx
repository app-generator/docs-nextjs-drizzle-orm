"use client"

import { TTodo } from "@/drizzle/schema/todos";
import { TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import { deleteTodo } from "./actions";
import { format, formatDate, formatDistanceToNow } from "date-fns";

type TTodosListDeckProps = {
    todosList: TTodo[];
};

const TodosListDeck = ({ todosList }: TTodosListDeckProps) => {
  return (
    <div>
			{
				todosList?.map((todo: TTodo) => {
					const { createdAt } = todo;
						return (
							<div key={todo?.id} className="my-4">
								<div className="card bg-accent text-gray-800">
									<div className="card-body">
										<h2 className="card-title">{todo?.title}</h2>
										<p className="min-h-20 p-4 my-2 bg-slate-50 rounded-md">{todo?.description}</p>
										<div className="card-actions justify-between items-baseline">
											<p className="text-xs text-slate-600">
												Created on &nbsp;
												<span>{ format(new Date(todo?.createdAt), "PP")} --</span> &nbsp;
												<span>{formatDistanceToNow(new Date(createdAt))} ago</span>
											</p>
											<button className="btn btn-sm" onClick={() => deleteTodo(todo?.id)}>
												<TrashIcon height={16} width={16}/>
											</button>
										</div>
								</div>
							</div>
						</div>
					)}
				)
			}
		</div>
  );
};

export default TodosListDeck;
