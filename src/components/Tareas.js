import React, {useState} from 'react';
import TareasForm from './TareasForm';
/*importo los iconos de react (se instalan en la consola 'npm intall react-icons')*/
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

const Tareas=({tareas, completeTareas, removeTareas, updateTareas}) =>{
    const [edit, setEdit]= useState ({
        id:null,
        value:''
    });

    const submitUpdate = value => {
        updateTareas(edit.id, value)
        setEdit({
         id: null,
         value:''
        });
    };

    if (edit.id){
        return<TareasForm edit={edit} onSubmit={submitUpdate}/>;
    }
/*Aca esta el problea, use filter o uso map? No funciona nada, HARTA!*/
return tareas.map((tareas, index) => {
 
 /*Si la tarea esta completa hacer la fila*/ 
<div className={tareas.isComplete ? 'tareas-row complete' : 
'tareas-row'} key={index}
>

{/*Click y completar tareas*/}

<div key={tareas.id} onClick={()=> completeTareas(tareas.id)}>
 {tareas.text}
</div>

{/*Baje react-icons pero no se ven los iconos, ni idea ...*/}
<div className='icons'>
 <RiCloseCircleLine 
 onclick={()=>removeTareas(tareas.id)}
 className= 'delete-icon'/>
 <TiEdit  
 onClick={()=> setEdit ({id: tareas.id, value: tareas.text})}
 className='edit-icon'
 />

</div>
</div>
});

}

export default Tareas; 