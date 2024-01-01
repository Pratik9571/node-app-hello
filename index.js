import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.status(200).send(`
  <html>
  <head>
    <style>
      h1 {
        color: gray;
      }
    </style>
  </head>
    <body>
      <h1>Hello my name is pratik</h1>
      <p>This is my website</p>
    </body>
  </html>
  `);
});

app.use("/blue", (req, res) => {
  return res.status(200).send("Hello, It's me.");
});

app.listen(8001, () => {
  console.log("app is listening under 8001 port.");
});
