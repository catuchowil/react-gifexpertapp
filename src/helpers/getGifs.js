
export const getGifs = async(categorias) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categorias)}&limit=10&api_key=8WEe4yym3oymuUKNAoQDfxnAyv2xugnF`;
    const resp = await fetch( url);
    const { data } = await resp.json();

    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;

}
