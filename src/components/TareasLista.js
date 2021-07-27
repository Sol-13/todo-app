import React, {useState} from 'react';
import TareasForm from './TareasForm';
import Tareas from './Tareas';

function TareasLista() {
    const [tareas, setTareas] = useState ([]);
    
   
    const addTarea = tarea => {
     if (!tarea.text || /^\s*$/.test(tarea.text)) {
            return;
        }
    /*revisar esto que no anda*/
    const newTareas = [...tareas, tarea];
    
    setTareas(newTareas);
    console.log(...tareas);
        
};
     /*Revisar ese if*/ 
    const updateTarea=(tareaId,newValue)=>{
        if (!newValue.text || /^\s*$/.test
            (newValue.text)) {
            return;
    }
    
    setTareas(prev => prev.map 
   (item =>(item.id===tareaId ? newValue : item)));
  };


    /*Remover tareas*/
    const removeTarea = id => {
        const removeArr = [...tareas].filter
        (tarea=>tarea.id !==id);
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
            <TareasForm onSubmit={addTarea}/>
            <Tareas
             tareas={tareas} 
            completeTarea={completeTarea} 
            removeTarea={removeTarea} 
            updateTarea={updateTarea}
            />
        </>
    );
}

export default TareasLista;
