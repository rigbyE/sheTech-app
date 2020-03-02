import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { getPlanetsVisited, getMilestones, getImagePaths } from "./data";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

const port = 8000;

app.get("/planets-visited", (req, res) => {
  const planetsVisited = getPlanetsVisited();
  res.send(planetsVisited);
});

app.get("/milestones", (req, res) => {
  const milestones = getMilestones();
  res.send(milestones);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
