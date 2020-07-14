import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    //zona para programar

   
    const [categorias, setCategorias] = useState(['Thundercats']);

   
    
    //fin zona para programar
    return (
        <>

            <h2>GifExpertApp</h2>
            <AddCategory setCategorias = {setCategorias}/>
            <hr/>

            <ol>
                {
                    categorias.map(c => (
                         <GifGrid
                         key = {c}
                         categorias = {c}
                         />
                    ))
                }
            </ol>
            
        </>
    )
}

export default GifExpertApp



