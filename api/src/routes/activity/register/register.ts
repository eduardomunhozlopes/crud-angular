import type { Request, Response } from "express";
import { db } from "src/db";
import { activities } from "src/db/schema";

export const registerActivity = async (req: Request, res: Response) => {
	try {
		const { title, description, status } = req.body;
		const inserted = await db
			.insert(activities)
			.values({ title, description, status })
			.returning();
		res.status(201).json(inserted[0]);
	} catch (_err) {
		res.status(400).json({ error: "Erro ao inserir nova atividade." });
	}
};
