import express from "express";

const app = express();

app.use(express.json());

app.listen(3335, () => {
  console.log("Server running");
});
