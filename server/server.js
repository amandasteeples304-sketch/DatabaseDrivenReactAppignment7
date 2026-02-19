import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pg from "pg";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

const db = new pg.Pool({
  connectionString: process.env.DB_CONN,
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "You've reached the server" });
});

app.listen(8080, () => {
  console.log("sever running on http://localhost:8080/");
});
