import type { Request, Response } from "express";
import { db } from "src/db";
import { activities } from "src/db/schema";

export const getActivity = async (_req: Request, res: Response) => {
	try {
		const all = await db.select().from(activities);
		res.json(all);
	} catch (_err) {
		res.status(500).json({ error: "Erro ao buscar atividades." });
	}
};
