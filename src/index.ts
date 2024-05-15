import express from "express";

import Logger from "./config/logger";

const app = express();

app.use("/", (req, res) => {
  return res.json("Hello from ChomChamp Backend")
});

app.listen(3000, () => {
  Logger.info("App is listening to the port 3000");
});
