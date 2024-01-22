import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // If using SSL:
  // ssl: {
  //   rejectUnauthorized: false
  // }
});

export default async function handler(req, res) {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM your_table");
    res.status(200).json(result.rows);
    client.release();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}
