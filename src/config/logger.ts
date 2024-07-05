import * as log4js from "log4js";

log4js.configure({
  appenders: {
    file: { type: "file", filename: "./src/logs/allLogs.log" },
    console: { type: "console" },
  },
  categories: {
    default: { appenders: ["console", "file"], level: "trace" },
  },
});

const logger = log4js.getLogger("");

export default logger;
