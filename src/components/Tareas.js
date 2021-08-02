import React, {useState} from 'react';
import TareasForm from './TareasForm';
/*importo los iconos de react (se instalan en la consola 'npm intall react-icons')*/
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

function Tareas ({tareas, completeTarea, removeTarea, updateTarea}) {
  /*funcion para configurar la edicion*/
    const [edit, setEdit]= useState ({
        id:null, 
        value:''
    });
 
    const submitUpdate = value=> {  
   updateTarea(edit.id, value );
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
 <div className={tarea.isComplete ? 'tareas-row complete' : 'tareas-row'} 
 key={index}
 >

{/*Click y completar tareas*/}
<div key={tarea.id} onClick={()=> completeTarea(tarea.id)}>
  {tarea.text}</div>

{/*Iconos de react*/} 
<div className='icons'>
{/*Identificar y remover las tareas*/}
 <RiCloseCircleLine 
 onClick={()=>removeTarea(tarea.id)}
 className= 'delete-icon'
 />
 
 <TiEdit  
 onClick={()=>setEdit({id: tarea.id, value: tarea.text})}
 className='edit-icon'
 />

</div>
</div>
)}));

}

export default Tareas; 