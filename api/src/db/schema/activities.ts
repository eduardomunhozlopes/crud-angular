import {
	pgEnum,
	pgTable,
	serial,
	text,
	timestamp,
	varchar,
} from "drizzle-orm/pg-core";

export const activityStatusEnum = pgEnum("activity_status", [
	"in_progress",
	"completed",
	"canceled",
]);

export const activities = pgTable("activities", {
	id: serial("id").primaryKey(),
	title: varchar("title", { length: 255 }).notNull(),
	description: text("description"),
	status: activityStatusEnum("status").notNull().default("in_progress"),
	createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
		.notNull()
		.defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" })
		.notNull()
		.defaultNow(),
});
