import dotenv from "dotenv";

import express from "express";
import TextProcessing from "./src/TextProcessing/TextProcessing.js";
import summarizeFeedback from "./src/SummerizeService/summerizeService.js";

dotenv.config();
const app = express();

app.use(express.json());

app.post("/summerize", async (req, res) => {
  console.log("req", req.body);
  const getSummerize = await summarizeFeedback(req.body);
  res.send(getSummerize);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
