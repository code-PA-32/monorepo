"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  appRouter: () => appRouter,
  createContext: () => createContext,
  exampleRouter: () => exampleRouter
});
module.exports = __toCommonJS(src_exports);

// src/context/index.ts
function createContext({ req, res }) {
  return {
    req,
    res
  };
}

// src/routes/example.ts
var import_zod = require("zod");

// src/utils/trpc.ts
var import_server = require("@trpc/server");
var t = import_server.initTRPC.create();
var router = t.router;
var middleware = t.middleware;
var publicProcedure = t.procedure;

// src/routes/example.ts
var exampleRouter = router({
  hello: publicProcedure.input(import_zod.z.object({ text: import_zod.z.string() })).query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`
    };
  })
});

// src/root.ts
var appRouter = router({
  example: exampleRouter
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  appRouter,
  createContext,
  exampleRouter
});
//# sourceMappingURL=index.cjs.map