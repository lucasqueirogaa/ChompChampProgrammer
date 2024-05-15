import express from "express";

const app = express();

app.use("/", (req, res) => {
  return res.json("Hello from ChomChamp Backend")
});

app.listen(3000, () => {
  console.log("App is listening to the port 3000");
});
