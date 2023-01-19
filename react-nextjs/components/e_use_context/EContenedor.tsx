import {useEffect, useState} from "react";
import {ContenedorContext, ContenedorContextObject} from "./ContenedorContext";
import EComponenteA from "./EComponenteA";

export default function (){
    const [nombreUsuario, setNombreUsuario] = useState("Adrian")
    const objetoContenedorContext: ContenedorContextObject = { nombreUsuario, setNombreUsuario };

    useEffect(
        ()=>{
            console.log('Cambio en Contenedor',
                objetoContenedorContext.nombreUsuario);
        },
        [objetoContenedorContext.nombreUsuario]
    )
    return (
        <>
            <ContenedorContext.Provider value={objetoContenedorContext}>
                <EComponenteA></EComponenteA>
            </ContenedorContext.Provider>
        </>
    )
}
