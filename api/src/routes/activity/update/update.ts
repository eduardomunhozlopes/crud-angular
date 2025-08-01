import { eq } from "drizzle-orm";
import type { Request, Response } from "express";
import { db } from "src/db";
import { activities } from "src/db/schema";

export const updateActivity = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { title, description, status } = req.body;

		const updated = await db
			.update(activities)
			.set({ title, description, status, updatedAt: new Date().toISOString() })
			.where(eq(activities.id, Number(id)))
			.returning();

		res.json(updated[0]);
	} catch (_err) {
		res.status(400).json({ error: "Erro ao atualizar atividade." });
	}
};
