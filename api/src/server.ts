import "dotenv/config";
import express from "express";
import { activityRouter } from "./routes/index";

const app = express();
app.use(express.json());

app.use("/activities", activityRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}`);
});
