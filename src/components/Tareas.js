import React, {useState} from 'react';
import TareasForm from './TareasForm';
/*importo los iconos de react (se instalan en la consola 'npm intall react-icons')*/
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

function Tareas ({tareas, completeTarea, removeTarea,  updateTareas}) {
  /*funcion para configurar la edicion*/
    const [edit, setEdit]= useState ({
        id:null, 
        value:''
    });
 
   /*Revisar si el problema esta aca*/ /*Envio de actualizacion, NO ACTUALIZA*/ 
    const submitUpdate = (value)=> {  
   updateTareas=(edit.id, value );
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
<div onClick={()=> completeTarea(tarea.id)}>{tarea.text}</div>

{/*Iconos de react*/} 
<div className='icons'>
{/*Identificar y remover las tareas*/}
 <RiCloseCircleLine className= 'delete-icon' 
 key={tarea.id} onClick={()=>removeTarea(tarea.id)}
 />
 
 <TiEdit   className='edit-icon'
 key={tarea.id} onClick={()=>  setEdit ({id: tarea.id, value: tarea.text})}

 />

</div>
</div>
)}));

}

export default Tareas; 