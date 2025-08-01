import { Router } from "express";
import { deleteActivity } from "./delete/delete";
import { getActivity } from "./get-list/get-list";
import { registerActivity } from "./register/register";
import { updateActivity } from "./update/update";

export const activityRouter = Router();

activityRouter.get("/", getActivity);
activityRouter.post("/", registerActivity);
activityRouter.put("/:id", updateActivity);
activityRouter.delete("/:id", deleteActivity);
