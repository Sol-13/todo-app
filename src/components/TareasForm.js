import React, {useState, useEffect, useRef} from 'react';

function TareasForm(props) {
    const [input, setInput] = useState (props.edit ? props.edit.value:'');
   
    const inputRef = useRef(null)
 
    useEffect(()=>{  
        inputRef.current.focus();
    });
 
    /*Con esto ya se pueden escribir cosas*/
    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
    /*Esta cuenta es para los datos aleatorios podria usar uuid, tal vez*/
        props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: input
        });
        setInput('');
      };

    return (
        <form  onSubmit={handleSubmit} className='tareas-form'>
          {props.edit ? (
       <>
      <input 
      placeholder='Actualiza la tarea'
      value={input}
      name='text'
      className='tareas-input edit'
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
    );
}

export default TareasForm;
