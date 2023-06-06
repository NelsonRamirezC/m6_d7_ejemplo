const express = require("express");
const { create } = require("express-handlebars");

//instancia de express.
const app = express();

//crear instancia de handlebars
const hbs = create({
    partialsDir: ["views/partials/"],
});


//configuramos express-handlebars como motor de plantilla del proyecto para renderizar vistas
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

//establecemos el directorio public en modo público.
app.use(express.static("public"));

//publicamos carpeta dist de boostrap
app.use(
    "/bootstrap",
    express.static(__dirname + "/node_modules/bootstrap/dist/")
);

//indicamos el puerto por el cual nuestro servidor escuchará las peticiones
const PORT = 3000;
app.listen(
    PORT,
    console.log("Servidor escuchando en http://localhost:" + PORT)
);

//RUTAS DE VISTAS
app.get(["/", "/home"], (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/products", (req, res) => {
    res.render("products", {
        productos: ["Pera", "Manzana", "Sandia", "Naranja", "Melón"],
    });
});

app.get("/users", (req, res) => {
    res.render("users", {
        usuarios: ["Carlos", "Mauricio", "María", "Juana"],
    });
});
