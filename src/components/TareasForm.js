import React, {useState, useEffect, useRef} from 'react';

/*Pasamos propiedades a la funcion*/
function TareasForm(props) {

  /*Entradas y cambios de estado */
    const [input, setInput] = useState (props.edit ? props.edit.value:'');
    
    /*Con el useRef solo se renderiza el input (?) */
    const inputRef = useRef(null)
    
    /* Se enfoca en la referencia*/ 
    useEffect(()=>{  
        inputRef.current.focus();
    });
 
    /*Con esto ya se pueden escribir cosas*/
    
    const handleChange = e => {
        setInput(e.target.value);
    };
    /*funcion para identificar/contolar el envio, e previene valor predeterminado*/
    const handleSubmit = e => { e.preventDefault();
    
     /*propiedades/accesorios*/  props.onSubmit({
          id: Math.floor(Math.random() * 10000), /*Esta cuenta es para los datos aleatorios podria usar uuid, tal vez*/
          text: input /*el valor de entrada es texto*/ 
        });
        setInput(''); /*establecer entrada*/
      };

    return (
      (/*a la funcion de enviar se le agraga la funcion de manejo de envios */
        <form  onSubmit={handleSubmit} className='tareas-form'>
          {props.edit ? (
       <>
      <input 
      placeholder='Actualiza la tarea'
   value={input} /*valor = entrada*/   
      name='text'
      className='tareas-input edit' /*clase para la edicion de tareas*/
      onChange={handleChange}
      ref={inputRef}
     />
     <button  onClick={handleSubmit}  className='tareas-button edit'>
       Actualizar
       </button>
     
     </>
         
         ) : (
          <>
         <input 
        
         placeholder='Escribe una tarea'
         value={input}
         name='text'
         className='tareas-input'
         onChange={handleChange}
         ref={inputRef}
        />
        <button onClick= {handleSubmit} className='tareas-button'  >Agrega una tarea</button>
      </>
      )}
   </form>
    ));
}

export default TareasForm;
