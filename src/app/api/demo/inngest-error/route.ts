import { inngest } from "@/inngest/client";

export async function POST() {
  await inngest.send({ name: "demo/error", data: {} });
//demo/errr(event name)
  return Response.json({ status: "started" });
}


//In Next.js App Router, this means:

// When someone sends a POST request to this route → this function runs.