const express = require("express");
const { Student } = require("../models");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  Student.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: "Erro interno no servidor!" });
    });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
