import express from "express";

const app = express();

app.use("/blue", (req, res) => {
  return res.status(200).send("Hello, It's me.");
});

app.listen(8001, () => {
  console.log("app is listening under 8001 port.");
});
