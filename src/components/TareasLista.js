import React, {useState} from 'react';
import TareasForm from './TareasForm';
import Tareas from './Tareas';

function TareasLista() {

    /*tareas para hacer*/
    const [tareas, setTareas] = useState ([]);
    
   /*agregar tareas, permite se agregue algo para hacer*/
    const addTarea = tarea => {
/*Esto es para que si nadie escribe y solo se dejan espacios vacios no se agregue a la pila de tareas*/
     if (!tarea.text || /^\s*$/.test(tarea.text)) {
            return;
        }
    /*Nuevas tareas o acciones, trae las anteriores*/
    const newTareas = [...tareas, tarea];
    /*Establezco el valor de las nuevas tareas, */
    setTareas(newTareas);
};


     /*Revisar ese if*/ 
    const updateTarea=(tareaId,newValue)=>{
        if (!newValue.text || /^\s*$/.test
            (newValue.text)) {
            return;
    }
    
    setTareas(prev => prev.map(item =>(item.id===tareaId ? newValue : item)));
  };


    /*Remover tareas*/
    const removeTarea = id => {
        const removeArr = [...tareas].filter(tarea => tarea.id !== id);
        setTareas(removeArr);
    };

  /* Aca la logica para completar*/ 
    const completeTarea = id => {
        let updatedTareas = tareas.map (tarea => {
            if (tarea.id===id) {
                tarea.isComplete = !tarea.isComplete;
            }
            return tarea;
        });
        setTareas(updatedTareas);    
    };

    return (
        <>
            <h1>Tareas para hacer</h1>
 
 {/*Esto (onSubmit) se relaciona con el codigo de math()*/}
            <TareasForm onSubmit={addTarea}/> {/*formulario de tareas, agrego esto para que se vea */}
            <Tareas tareas={tareas} completeTarea={completeTarea} removeTarea={removeTarea} 
            updateTarea={updateTarea}
            />
        </>
    );
}

export default TareasLista;
