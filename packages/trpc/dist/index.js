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

// src/lib/test.ts
import { connect } from "@planetscale/database";

// src/db/config.ts
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
var config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD
};

// src/lib/test.ts
import { drizzle } from "drizzle-orm/planetscale-serverless";

// src/db/schema.ts
import {
  mysqlTable,
  unique,
  int,
  varchar,
  index
} from "drizzle-orm/mysql-core";
var authors = mysqlTable(
  "authors",
  {
    id: int("id").autoincrement().primaryKey().notNull(),
    author: varchar("author", { length: 255 }).notNull()
  },
  (table) => {
    return {
      author: unique("author").on(table.author)
    };
  }
);
var categories = mysqlTable(
  "categories",
  {
    id: int("id").autoincrement().primaryKey().notNull(),
    category: varchar("category", { length: 255 }).notNull()
  },
  (table) => {
    return {
      category: unique("category").on(table.category)
    };
  }
);
var quotes = mysqlTable(
  "quotes",
  {
    id: int("id").autoincrement().primaryKey().notNull(),
    quote: varchar("quote", { length: 255 }).notNull(),
    authorId: int("author_id").notNull(),
    categoryId: int("category_id").notNull()
  },
  (table) => {
    return {
      authorIdIdx: index("author_id_idx").on(table.authorId),
      categoryIdIdx: index("category_id_idx").on(table.categoryId),
      quote: unique("quote").on(table.quote)
    };
  }
);

// src/lib/test.ts
import { eq } from "drizzle-orm";
async function getAllData() {
  const conn = connect(config);
  const db = drizzle(conn);
  const res = await db.select({
    quotes: quotes.quote,
    author: authors.author,
    category: categories.category
  }).from(quotes).innerJoin(authors, eq(quotes.authorId, authors.id)).innerJoin(categories, eq(quotes.categoryId, categories.id));
  return res;
}

// src/routes/example.ts
var exampleRouter = router({
  hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
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
export {
  appRouter,
  createContext,
  exampleRouter
};
//# sourceMappingURL=index.js.map