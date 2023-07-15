import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    connectionString:
      'mysql://wo42s11j4dx97aoa08a0:pscale_pw_fg4q2ph5UH6zdoksVASCWkEW8aD7HFUQNmpfg2OYWJ5@aws.connect.psdb.cloud/test?ssl={"rejectUnauthorized":true}',
  },
} satisfies Config;
