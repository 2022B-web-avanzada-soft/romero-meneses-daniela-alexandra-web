import Layout from "../components/Layout";
import CryptoFormulario from "../components/f_ejemplo_criptomoneda/CryptoFormulario";
import {useState} from "react";

export interface ConsultaMoneda{
    valorMoneda: string;
    valorCriptoMoneda: string;
}

export default function (){
    const [monedas, setMonedas] = useState({} as any)
    return(
        <>
            <Layout title="Ejemplo Criptomonedas | EPN">
                <div className="text-center">
                    <h1>Cripto Exchange Calculator</h1>
                    <img
                        className={'rounded'}
                        src="https://media.ambito.com/p/e2e0836c4f57f5ae2890d784df8de512/adjuntos/239/imagenes/038/723/0038723804/criptomonedasjpg.jpg" alt=""/>
                </div>
                <h2>Seleccion</h2>
                <p>Selecciona tu moneda y criptomoneda</p>
                <div className="row">
                    <div className="col-sm-6">
                        <CryptoFormulario
                            setMonedas={setMonedas}>
                        </CryptoFormulario>
                    </div>
                    <div className="col-sm-6">

                    </div>
                </div>
            </Layout>
        </>
    )
}
