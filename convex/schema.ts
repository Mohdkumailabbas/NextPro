import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({//table name projects
    name: v.string(),//fields
    ownerId: v.string(),
    updatedAt:v.number(),
    importStatus: v.optional(
      v.union(//one of multiple types
        v.literal("importing"),//literal restriction to specific string values
        v.literal("completed"),
        v.literal("failed"),
      ),
    ),
     exportStatus: v.optional(
      v.union(
        v.literal("exporting"),
        v.literal("completed"),
        v.literal("failed"),
        v.literal("cancelled"),
      ),
    ),
    exportRepoUrl: v.optional(v.string()),
  }).index("by_owner", ["ownerId"]),
});

