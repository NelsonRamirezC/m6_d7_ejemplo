const { leerArchivo, escribirArchivo } = require("../utils/operaciones.js");

class Usuario {
    constructor(id, nombre, apellido, email) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
    async findAll() {
        return await leerArchivo("personas.json");
    }

    async findById(id) {
        let data = await leerArchivo("personas.json");
        let found = data.usuarios.find((usuario) => usuario.id == id);
        return found;
    }

    findByEmail(email) {
        console.log("Buscando usuario por email");
    }

    async save() {
        let data = await leerArchivo("personas.json");
        let usuario = {
            id: this.id,
            nombre: this.nombre,
            apellido: this.apellido,
            email: this.email,
        };
        data.usuarios.push(usuario);
        return await escribirArchivo("personas.json", data);
    }

    update(usuario) {
        console.log("Actualizar usuario.");
    }

    delete(id) {
        console.log("Eliminar usuario");
    }
}

module.exports = Usuario;
