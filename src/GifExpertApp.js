import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);

    // const handleAdd = () => {
        
    //     //DE ESTA FORMA LA ASIGNAMOS AL CATEGORIES LO QUE EL TIENE MAS OTRO ELEMENTO
    //     //ESTA SON DOS FORMAS OPTIMAS DE PUSHEAR ELEMENTO EN UN ARRAY USANDO EL SET DEL
    //     //USESTATE
    //     setCategories([...categories, 'One piece']);
    //     //setCategories(cat => [...cat, 'One piece']);
    
    // };

    return (
        //por desestructuracion podemos pasarle por props a un componente el state de este componente
        //y usarlo alli.
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={ setCategories } categories={ categories } />
            <hr />

            {
                //DE ESTA FORMA PODEMOS ITERAR Y RENDERIZAR ELEMENTOS EN EL COMPONENTE.
                //NO PODEMOS USAR BUCLES NORMALES, YA QUE POR DEFECTOS ESTOS NO RETORNAN NADA,
                //EN CAMBIO EL METODO MAP SI
                categories.map( category => {
                    return <GifGrid 
                                key={ category }
                                category={ category } 
                            />
                    //EL KEY EN LA ETIQUETA ES CASI OBLIGATORIO EN ESTE TIPO DE CASO,
                    //YA QUE ES LO QUE NOS VA A SERVIR PARA IDENTIFICAR UN ELEMENTO DE OTRO,
                    //NORMALMENTE ESTA KEY SERA EL ID DEL ELEMENTO DE LA BASE DE DATOS O ALGO ASI
                })
            }
        </>
    );
}

export default GifExpertApp;