import React from 'react';

import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );
    
    return (
        <>
            <h3>{category}</h3>

            { loading && <p className='card animate__animated animate__flash'>Loading</p> }

            <div className='card-grid'>
                {
                    images.map(img => {
                        return <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    })
                }
            </div>
        </>
    );
    //DE ESA FORMA { ...img } LE PASAMOS AL COMPONENTE CADA PROPIEDAD DEL ARREGLO IMAGENES COMO PROPIEDADES INDEPENDIENDTES 
    //LO QUE NOS PERMITIRA DESESTRUCRARLO EN EL COMPONENTE HIJO Y USARLO DE UNA MANERA MAS FACIL.
    //NOTA: NO HAY QUE DEFINIR EL NOMBRE DE LA PROP TIPO img={...img}, se le manda directo y ya esta.
}
// //ESTE USE EFFECT LO QUE HACER ES SOLO EJECUTAR EL METODO getGif una sola vez, independientemente de cuantas veces se rederize el componnete.
    // useEffect( () => {
    //     getGif( category )
    //             .then( imgs => {
    //                 setImages( imgs )
    //                 //CUANDO SE RESUELVA LA PROMESA SETEAMOS NUESTRO ESTADO
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //             })
    // //EL CATEGORY EN EL ARRAY INDICA QUE, SI EL CATEGORY CAMBIA, EL USEEFFECT SE EJECUTARA DE NUEVO
    // }, [ category ]);

    // const getGif = async () => {
    //     const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(category)  }&api_key=7FmJGB4bmWrmMu80ODg0Gmnpi2X6mxOt`;

    //     const resp = await fetch( url );
    //     const { data } = await resp.json();

    //     const gifs = data.map( img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images.downsized_medium.url
    //         }
    //     });

    //     console.log(gifs);
    //     setImages( gifs );
    // }