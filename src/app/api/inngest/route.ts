import { serve } from "inngest/next";
import { demoError, demoGenerate } from "@/inngest/functions";
import { inngest } from "../../../inngest/client";
import { processMessage } from "@/features/conversations/inngest/process-message";


export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    demoGenerate,
    demoError,
    processMessage,
  ],
});


