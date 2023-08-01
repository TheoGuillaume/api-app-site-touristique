require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mainRoutes = require('./mainRoute');
const db = require('./database/connexion');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
//URL en mode developpement
app.use(morgan("dev"));

//CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");

  next();
});

//console.log(db);

// Routes
app.use('/api', mainRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Le serveur s'exécute sur le port ${process.env.PORT}`);
});