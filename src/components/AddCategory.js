import React, {useState} from 'react'

import PropTypes from 'prop-types';

const AddCategory = ({setCategorias}) => {
    //Zona para programar

    const [inputValue, setInputValue]= useState('');

    
    const cambioInput = (e)=>{
        setInputValue(e.target.value);
    }

    const cambioForm = (e)=>{
        e.preventDefault()

        if(inputValue.trim().length > 2){
            setCategorias(cate => [inputValue, ...cate ]);
            setInputValue('');
        }

    }


    //fin zona para programar

    return (
        <form onSubmit = {cambioForm}>
            <h2>Agregar Categoría</h2>

            <input
             type ="text"
             value = {inputValue} 
             onChange = {cambioInput} // Con esta forma tengo que hacer la función fuera
             /*
             la otra forma es hacer la función en el mismo input
             onChange = { (e)=> setInputeValue(e.target.value) }
              */
             >
             

             </input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}




export default AddCategory
