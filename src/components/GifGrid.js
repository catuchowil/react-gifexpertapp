import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

const GifGrid = ({categorias}) => {
    //zona para programar

//    const [images, setImages] = useState([]);
    const {data:imagenes, loading} = useFetchGifs(categorias);
   
        

   // getGifs();
    //fin zona
    return (

        <>
            <h3 className="">{categorias}</h3>

            {loading && <p className="card animate__animated animate__flash">Cargando imágenes...!!!</p>}
           
             <div className="card-grid">
            
            
                    {
                        imagenes.map( ima =>(
                        
                            <GifGridItem 
                            key={ima.id}
                            {...ima}
                            />
                        ))
                    }
            
            </div> 
        </>
    )
}

export default GifGrid
