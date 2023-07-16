"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// src/lib/test.ts
var import_database = require("@planetscale/database");

// src/db/config.ts
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config({ path: ".env" });
var config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD
};

// src/lib/test.ts
var import_planetscale_serverless = require("drizzle-orm/planetscale-serverless");

// src/db/schema.ts
var import_mysql_core = require("drizzle-orm/mysql-core");
var authors = (0, import_mysql_core.mysqlTable)(
  "authors",
  {
    id: (0, import_mysql_core.int)("id").autoincrement().primaryKey().notNull(),
    author: (0, import_mysql_core.varchar)("author", { length: 255 }).notNull()
  },
  (table) => {
    return {
      author: (0, import_mysql_core.unique)("author").on(table.author)
    };
  }
);
var categories = (0, import_mysql_core.mysqlTable)(
  "categories",
  {
    id: (0, import_mysql_core.int)("id").autoincrement().primaryKey().notNull(),
    category: (0, import_mysql_core.varchar)("category", { length: 255 }).notNull()
  },
  (table) => {
    return {
      category: (0, import_mysql_core.unique)("category").on(table.category)
    };
  }
);
var quotes = (0, import_mysql_core.mysqlTable)(
  "quotes",
  {
    id: (0, import_mysql_core.int)("id").autoincrement().primaryKey().notNull(),
    quote: (0, import_mysql_core.varchar)("quote", { length: 255 }).notNull(),
    authorId: (0, import_mysql_core.int)("author_id").notNull(),
    categoryId: (0, import_mysql_core.int)("category_id").notNull()
  },
  (table) => {
    return {
      authorIdIdx: (0, import_mysql_core.index)("author_id_idx").on(table.authorId),
      categoryIdIdx: (0, import_mysql_core.index)("category_id_idx").on(table.categoryId),
      quote: (0, import_mysql_core.unique)("quote").on(table.quote)
    };
  }
);

// src/lib/test.ts
var import_drizzle_orm = require("drizzle-orm");
async function getAllData() {
  const conn = (0, import_database.connect)(config);
  const db = (0, import_planetscale_serverless.drizzle)(conn);
  const res = await db.select({
    quotes: quotes.quote,
    author: authors.author,
    category: categories.category
  }).from(quotes).innerJoin(authors, (0, import_drizzle_orm.eq)(quotes.authorId, authors.id)).innerJoin(categories, (0, import_drizzle_orm.eq)(quotes.categoryId, categories.id));
  return res;
}

// src/routes/example.ts
var exampleRouter = router({
  hello: publicProcedure.input(import_zod.z.object({ text: import_zod.z.string() })).query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`
    };
  }),
  getData: publicProcedure.query(async () => {
    const data = await getAllData();
    return data;
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