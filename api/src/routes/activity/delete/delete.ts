import { eq } from "drizzle-orm";
import type { Request, Response } from "express";
import { db } from "src/db";
import { activities } from "src/db/schema";

export const deleteActivity = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		await db.delete(activities).where(eq(activities.id, Number(id)));
		res.status(204).send();
	} catch (_err) {
		res.status(400).json({ error: "Erro ao deletar atividade." });
	}
};
