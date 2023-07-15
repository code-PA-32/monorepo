// src/context/index.ts
function createContext({ req, res }) {
  return {
    req,
    res
  };
}

// src/routes/example.ts
import { z } from "zod";

// src/utils/trpc.ts
import { initTRPC } from "@trpc/server";
var t = initTRPC.create();
var router = t.router;
var middleware = t.middleware;
var publicProcedure = t.procedure;

// src/routes/example.ts
var exampleRouter = router({
  hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`
    };
  })
});

// src/root.ts
var appRouter = router({
  example: exampleRouter
});
export {
  appRouter,
  createContext,
  exampleRouter
};
//# sourceMappingURL=index.js.map