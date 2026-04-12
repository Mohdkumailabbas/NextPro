import { v } from "convex/values";

import { mutation, query } from "./_generated/server";

export const create = mutation({//(write operation,insert,update,delete)
  args: {//input
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    await ctx.db.insert("projects", {
      name: args.name,
      ownerId: identity.subject,
    });
  },
});

export const get = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      return [];
    }

    return await ctx.db
      .query("projects")
      .withIndex("by_owner", (q) => q.eq("ownerId", identity.subject))
      .collect();
  },
})



// ctx = everything Convex gives you to work with
// Flow
// Frontend calls:

// create({ name: "AI App" })

// args receives:

// args.name = "AI App"

// ctx gives DB access:

// ctx.db.insert(...)
// mutation runs → data saved in DB