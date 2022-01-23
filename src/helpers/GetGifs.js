export const getGif = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(category)  }&api_key=7FmJGB4bmWrmMu80ODg0Gmnpi2X6mxOt`;

    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifs;
    //EL ASYNC DEL METODO HARA QUE ESTE RETURN SEA UNA PROMESA.
}
