//components/a_estilos/EstilosEjemplo.tsx
import styles from './estilos.module.css'
export default function (){
    const misEstilos = {
        color: '#FFF',
        backgroundColor: 'black',
        borderBottom: '5px solid yellow',
    };
    return(
        <>
            <h1 style={
                {
                    color: misEstilos.color,
                    backgroundColor: misEstilos.backgroundColor,
                    borderBottom: misEstilos.borderBottom,
                }
            }>
                Estilos en objetos
            </h1>
            <div style={misEstilos}>Otros estilos</div>
            <div className={styles.rojo}>
                Hola
            </div>
        </>
    )
}
