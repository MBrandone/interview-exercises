const express = require("express");
const app = express();
const pg = require("pg");

const client = new pg.Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: process.PGPASSWORD,
})

app.get("/brands", async (req, res, next) => {
    const vehicules = pg
        .query("
    SELECT model
    FROM vehicules
    WHERE brand=${req.query.brand}
        GROUP BY 1;
    ")
        .then((rows) => {
            rows.map((r) => r.model);
        });

    res.json(vehicules);
});

// Vu
// magic strings => mettre dans des variables
// ligne 2, mettre les require en premier puis instancier
// next est pas utilisé donc on peut le supprimer
// risque d'injection sql car on met dans la requête SQL le contenu de la query
// GROUP BY 1 inutile
// .catch a ajouter
// Ajouter await sinon on renvoie .json d'une promesse

// J'aurais du voir
// variable client pas utilisé
// back tick pas présente
// Pas de LIMIT sur la requête
// process.env !

// En plus
// utiliser ORM
// Archi appli http vs BDD
// utiliser ES6
// naming => brands vs models vs vehicles
