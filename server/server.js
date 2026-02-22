import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pg from "pg";
import e from "express";

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

app.get("/ply", async (req, res) => {
  try {
    const ply = (await db.query("SELECT * from ply")).rows;
    res.json(ply);
  } catch (e) {
    res.send("There was an error");
  }
});

app.get("/ply/:id", async (req, res) => {
  try {
    if (Object.keys(req.query).length > 0) {
      const ply = await db.query(
        `
          select ply.*, array_agg(needlesizes.size) as needle_sizes
          from ply
          left join ply_needlesizes
          on ply.id = ply_needlesizes.ply_id
          inner join needlesizes
          on ply_needlesizes.needlesizes_id = needlesizes.id
          where ply.id = $1
          group by ply.id
          `,
        [req.params.id],
      );

      res.status(200).json(ply.rows);
    }
    const ply = (
      await db.query("select * from ply where id = $1", [req.params.id])
    ).rows;
    if (ply.length < 1) {
      res.status(404).json({ error: "Not found" });
    }
    res.status(200).json(ply);
  } catch (e) {
    res.status(500).send("There was an error");
  }
});

app.post("/ply", async (req, res) => {
  try {
    const { name, description, image } = req.body;
    const result = (
      await db.query(
        "insert into ply (name, description, image) VALUES ($1, $2, $3) RETURNING  *",
        [name, description, image],
      )
    ).rows;
    res.status(201).json(result);
  } catch (e) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/needlesizes", async (req, res) => {
  try {
    const needlesizes = (await db.query("SELECT * from needlesizes")).rows;
    res.json(needlesizes);
  } catch (e) {
    res.send("There was an error");
  }
});

app.get("/needlesizes/:id", async (req, res) => {
  try {
    if (Object.keys(req.query).length > 0) {
      const needlesizes = await db.query(
        `
          select needlesizes.*, array_agg(needletype.name) as needle_type
          from needlesizes
          left join needlesizes_needletype
          on needlesizes.id = needlesizes_needletype.needlesizes_id
          inner join needletype
          on needlesizes_needletype.needletype_id = needletype.id
          where needlesizes.id = $1
          group by needlesizes.id
          `,
        [req.params.id],
      );
      res.status(200).json(needlesizes.rows);
    }
    const needlesizes = (
      await db.query("select * from needlesizes where id = $1", [req.params.id])
    ).rows;
    if (needlesizes.length < 1) {
      res.status(404).json({ error: "Not found" });
    }
    res.status(200).json(needlesizes);
  } catch (e) {
    res.status(500).send("There was an error");
  }
});

app.post("/neeldesizes", async (req, res) => {
  try {
    const { name, description } = req.body;
    const result = (
      await db.query(
        "insert into needlesizes (name, description) VALUES ($1, $2) RETURNING  *",
        [name, description],
      )
    ).rows;
    res.status(201).json(result);
  } catch (e) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/needletype", async (req, res) => {
  try {
    const needletype = (await db.query("SELECT * from needletype")).rows;
    res.json(needletype);
  } catch (e) {
    res.send("There was an error");
  }
});

app.get("/needletype/:id", async (req, res) => {
  try {
    if (Object.keys(req.query).length > 0) {
      const needletype = await db.query(
        `
          select needletype.*, array_agg(ply.name) as ply
          from needletype
          left join needletype_ply
          on needletype.id = needletype_ply.needletype_id
          inner join ply
          on needletype_ply.needletype_id = ply.id
          where needletype.id = $1
          group by needletype.id
          `,
        [req.params.id],
      );
      res.status(200).json(needletype.rows);
    }
    const needletype = (
      await db.query("select * from needletype where id = $1", [req.params.id])
    ).rows;
    if (needletype.length < 1) {
      res.status(404).json({ error: "Not found" });
    }
    res.status(200).json(needletype);
  } catch (e) {
    res.status(500).send("There was an error");
  }
});

app.post("/needletype", async (req, res) => {
  try {
    const { name, description, image } = req.body;
    const result = (
      await db.query(
        "insert into needletype (name, description, image) VALUES ($1, $2, $3) RETURNING  *",
        [name, description, image],
      )
    ).rows;
    res.status(201).json(result);
  } catch (e) {
    res.status(500).json({ error: error.message });
  }
});
