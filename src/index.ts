import app from "./api";
import Logger from "./config/logger";

const port = process.env.PORT;

app.listen(port, () => {
  Logger.info(`You're connected on port ${port}`);
});
