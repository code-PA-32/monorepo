import { exampleRouter } from "./routes/example";
import { router } from "./utils/trpc";

export const appRouter = router({
  example: exampleRouter,
});

export type AppRouter = typeof appRouter;
