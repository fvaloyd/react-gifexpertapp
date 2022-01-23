import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories, categories }) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = ( e ) => {
        //LE ASIGNAMOS COMO VALOR DE ESTO LO ULTIMO QUE SE ESCRIBA EN EL INPUT
        setinputValue(e.target.value);
    }

    const handleSubmit = ( e ) => {
        //CANCELAR LA RECAGA DE LA PAGINA CUANDO SE SUBMITEA UN FORM
        e.preventDefault();


        //setCategories([...categories, inputValue]);

        //DE ESTA FORMA PODEMOS HACER LO MISMO QUE ARRIBA PERO SIN NECESIDAD DE RECIBIR POR PROPS LAS CATEGORIAS COMO TAL
        //ESTE CODIGO FUNCIONA YA QUE EL SETCATEGORIES TRAE IMPLICITAMENTE LAS CATEGORIAS.
        if(inputValue.length <= 2) console.log('Invalid name');

        setCategories( cats => [inputValue, ...cats] );
        setinputValue('');
        
    }

  return (
      <form onSubmit={ handleSubmit }>
        <input 
            type='text'
            value={inputValue}
            //CADA VEZ QUE EL INPUT CAMBIE LLAMARA A LA FUNCION QUE CAMBIA EL ESTADO
            onChange={ handleInputChange }
        />
      </form>
  );
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}