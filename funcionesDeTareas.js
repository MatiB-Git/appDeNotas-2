let fs = require("fs")


module.exports = moduloTareas = {

    leer : () => {
        let listaDeTareas = fs.readFileSync("./tareas.json", "utf-8")
        return JSON.parse(listaDeTareas)
    },

    escribir : (titulo, estado) => {
        let nuevaTarea = {
            titulo : titulo,
            estado: estado

        }
        let tareasAnteriores = moduloTareas.leer();

        tareasAnteriores.push(nuevaTarea);

        moduloTareas.guardar(tareasAnteriores)

    },

    guardar : (info) => {
        let nuevoJSON = JSON.stringify(info);
        fs.writeFileSync("./tareas.json", nuevoJSON, "utf-8")
    },

    deshacer : () => {
        let tareas = moduloTareas.leer();
        tareas.pop();
        moduloTareas.guardar(tareas);


    },

    filtrar : (estado) => {
        let tareas = moduloTareas.leer();
        let tareasFiltradas = tareas.filter(tarea => {
            return tarea.estado.toLowerCase() === estado.toLowerCase()
        })

        return tareasFiltradas;



    }
}
