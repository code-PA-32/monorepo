import { z } from "zod";

import { publicProcedure, router } from "../utils/trpc";
import getAllData from "@/lib/test";

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getData: publicProcedure.query(async () => {
    const data = await getAllData();
    return data;
  }),
});
