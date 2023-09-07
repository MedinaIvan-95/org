import "./MiOrg.css"
import { useState } from "react"

const MiOrg = (props) => {

    //Estado-hook
    //useState
    //useState()
    //const [nombreVariable,funcionActualizar] = useState(valorInicial)
    /* const [mostrar,actualizarMostrar] = useState(true)
    const manejarClick = () => {
        console.log("Prueba")
        actualizarMostrar(!mostrar)
    } */

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/miOrg.svg" alt="miOrg" onClick={props.estadoFormulario}/>
    </section>
}

export default MiOrg