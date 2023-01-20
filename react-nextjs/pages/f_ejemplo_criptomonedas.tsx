import Layout from "../components/Layout";
import CryptoFormulario from "../components/f_ejemplo_criptomoneda/CryptoFormulario";
import {useState} from "react";

export default function (){
    const [monedas, setMonedas] = useState({} as any)
    return(
        <>
            <Layout title="Ejemplo Criptomonedas | EPN">
                <CryptoFormulario setMonedas={setMonedas}></CryptoFormulario>
            </Layout>
        </>
    )
}
