import * as schema from "@shared/schema";

// Database is optional - only initialize if DATABASE_URL is provided
let db: any = null;

if (process.env.DATABASE_URL) {
  try {
    const { drizzle } = require("drizzle-orm/neon-http");
    const { neon } = require("@neondatabase/serverless");
    const sql = neon(process.env.DATABASE_URL);
    db = drizzle(sql, { schema });
  } catch (e) {
    console.log("Database not available, using in-memory storage");
  }
}

export { db };
