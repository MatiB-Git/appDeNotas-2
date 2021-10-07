let moduloTareas = require("./funcionesDeTareas");

let process = require("process");

let comando = process.argv[2] ? process.argv[2].toLowerCase() : undefined;



switch (comando){
    case "listar":
       let tareas = (moduloTareas.leer())
       if(tareas.length === 0){
           console.log("La lista de tareas esta vacia")
       }else{
           console.log("----------------------------")
           console.log("Este es tu listado de tareas")
           console.log("----------------------------")

       tareas.forEach((tarea, index)=>{ 
           console.log("Titulo " + index + " :" + tarea.titulo + " - estado: " + tarea.estado);
       })
        break;
    }
        case "agregar":
            let titulo = process.argv[3];
            let estado = process.argv[4];
            moduloTareas.escribir(titulo, estado);
            break;

        case "deshacer":
            moduloTareas.deshacer();
            break;

        case "filtrar":
            let estado2 = process.argv[3];
            let tareasFiltradas = moduloTareas.filtrar(estado2);
            if(tareasFiltradas.length === 0){
                console.log("La lista de tareas esta vacia")
            } else{
                console.log("----------------------------")
                console.log("Este es tu listado de tareas")
                console.log("----------------------------")


                tareasFiltradas.forEach(filtrada => {
                    console.log("Titulo: " + filtrada.titulo + " - estado: " + filtrada.estado);
                    
                    
                });
            }
            
            break;
            
         case undefined:
            console.log("Atencion - Tienes que pasar una accion");
            break;
        
            default:
                console.log("No entiendo que quieres hacer");
                break;

}