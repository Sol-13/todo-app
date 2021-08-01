import React, {useState} from 'react';
import TareasForm from './TareasForm';
/*importo los iconos de react (se instalan en la consola 'npm intall react-icons')*/
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

function Tareas ({tareas, completeTareas, removeTareas, updateTareas}) {
  /*funcion para configurar la edicion*/
    const [edit, setEdit]= useState ({
        id:null, 
        value:''
    });
 
   /*Revisar si el problema esta aca*/ /*Envio de actualizacion, NO ACTUALIZA*/ 
    const submitUpdate = (value)=> {
  /*le agregue let pero va const?*/  
   let updateTareas=(edit.id, value);
    setEdit({ 
     id: null,  
     value:''  
    });
    };

/*Con esto se puede actualizar/editar, habilita la edicion*/
if (edit.id) {
return <TareasForm edit={edit} onSubmit={submitUpdate}/>;
 }
    
return(

 tareas.map((tarea, index) => {
  /*Si la tarea esta completa hacer la fila*/ /*Verifica que lo que debe hacer se completo o no y lo devuelve al formulario*/
return(
 <div className={tarea.isComplete ? 'tareas-row complete' : 'tareas-row'} key={index}>

{/*Click y completar tareas*/}
<div key={tarea.id} onClick={()=> completeTareas(tarea.id)}>{tarea.text}</div>

{/*Iconos de react*/} 
<div className='icons'>
 <RiCloseCircleLine /*Identificar y remover las tareas*/
 onclick={()=>removeTareas(tarea.id)}
 className= 'delete-icon'/>
 <TiEdit  
 onClick={()=> setEdit ({id: tarea.id, value: tarea.text})}
 className='edit-icon'
 />

</div>
</div>
)}));

}

export default Tareas; 