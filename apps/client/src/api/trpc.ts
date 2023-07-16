import { AppRouter } from "trpc";
import { createTRPCProxyClient, httpBatchLink, loggerLink } from "@trpc/client";

const url = "http://localhost:3131/trcp";

export const client = createTRPCProxyClient<AppRouter>({
  links: [
    loggerLink(),
    httpBatchLink({
      url,
    }),
  ],
});
