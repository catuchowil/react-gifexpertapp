import {useState, useEffect} from 'react';
import {getGifs} from '../helpers/getGifs';



export const useFetchGifs = (categorias) => {
   
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{

        getGifs(categorias)
            .then( imgs => {

               
                    setState({
                    
                        data: imgs,
                        loading: false
                    
                    });

            

                
                    
            })

    }, [categorias])


    return state; // {data: [], loading: true}
}

