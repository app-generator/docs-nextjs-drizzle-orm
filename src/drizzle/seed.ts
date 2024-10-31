import { db } from "@/drizzle/db";
import { categories, todos } from "@/drizzle/schema";

async function seed() {
	await db.insert(categories).values([
		{ name: "Chores", description: "Household activities. Inlcudes cleaning, rearranging, plumbing, etc." },
		{ name: "Exercise", description: "Perform physical health activities." },
		{ name: "Shopping", description: "Buy stuff for self, family members, gifts for others." },
		{ name: "Build", description: "Build stuff with React." },
		{ name: "Study", description: "Read, educate self, share knowledge with others." },
	]);
	
	await db.insert(todos).values([
		{ title: "Do Drizzle with Next.js", description: "The rain has a database. It's Drizzle. Build with Drizzle", categoryId: 4 },
		{ title: "Go jogging", description: "Start with a walk. Then jog across the park. No sprinting today.", categoryId: 2 },
		{ title: "Buy grocery", description: "See list for details.", categoryId: 3 },
		{ title: "Do the laundry", description: "Have all clothes washed, dried and ironed." },
		{ title: "Write about Drizzle", description: "Drizzle goes on. To the 1000th day we're flooded. The roads are clogged with mud. Slippery", categoryId: 2 },
		{ title: "Rearrange furniture", description: "Rearrange couch, tables and bookshelf in living room. Do cleanups." }
	]);
};

seed();
