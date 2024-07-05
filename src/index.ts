import "dotenv/config";
import express from "express";
import cors from "cors";

import logger from "./config/logger";
import router from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  logger.info(`Server start with success in port ${PORT}`);
});
