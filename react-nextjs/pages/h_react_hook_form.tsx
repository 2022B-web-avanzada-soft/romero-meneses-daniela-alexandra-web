// react_hook_form
import {useState} from "react";
import {useForm} from "react-hook-form";
import {Button} from "@mui/material";
import Layout from "../components/Layout";

type FormularioEjemplo = {
    nombre: string;
}
export default function (){
    const [nombre, setNombre] = useState('Daniela');
    const {handleSubmit} = useForm<FormularioEjemplo>(
        {
            defaultValues:{
                nombre: 'Alexandra',
            },
            mode: 'all'
        }
    )
    const controladorSubmit = (data: FormularioEjemplo) =>{
        console.log(data)
    }
    return(<>
        <Layout title={'Formulario'}>
            <h1>Formulario con react Hook Form</h1>
            <form onSubmit={handleSubmit(controladorSubmit)}>
                <Button type="submit" variant = 'outlined'>Submit</Button>
            </form>
        </Layout>
        </>)
}
