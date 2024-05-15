import winston from "winston";

const levels = {
  error: 0,
  info: 1,
  debug: 2,
};

const colors = {
  error: "red",
  info: "green",
  debug: "magenta",
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: "DD/MM/YY (HH:mm:ss)" }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

const Logger = winston.createLogger({
  level: "info",
  levels,
  format,
  transports: [
    new winston.transports.Console(), // Configuração essencial que faz o logger aparecer no console
    new winston.transports.File({
      filename: "src/logs/error.log",
      level: "error",
    }),
    new winston.transports.File({ filename: "src/logs/all.log" }),
  ],
});

export default Logger;
