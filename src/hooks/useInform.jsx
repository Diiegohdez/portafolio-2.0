import { useEffect, useState } from 'react'
import { Api } from "../api/api";

export const useInform = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        getDatos();
    }, [])
    
    const getDatos = async () => {
        await Api.get('https://backend-portafol-adu4mt3ba-diiegohdez.vercel.app/api/inform')
            .then(Response => {
                setDatos(Response.data);
            }).catch(error => {
                console.log(error);
            })
    }
    return{
        datos
    }
};
