import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e)=>{
        e.preventDefault()
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEnvio = (e) => {
        e.preventDefault()
        crearEquipo({titulo,colorPrincipal: color})
    }

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo,actualizarEquipo] = useState("")

    const [titulo,actualizarTitulo] = useState("")

    const [color,actualizarColor] = useState("")

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena El Formulario Para Crear El Colaborador</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="ingrese nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="ingrese puesto" 
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <CampoTexto 
                titulo="Foto" 
                placeholder="ingrese enlace de foto" 
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarValor={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEnvio}>
            <h2>Rellena El Formulario Para Crear El Colaborador</h2>
            <CampoTexto 
                titulo="Titulo" 
                placeholder="ingrese titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <CampoTexto 
                titulo="color" 
                placeholder="ingrese color Hex" 
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>Registrar Equipo</Boton>
        </form>
    </section>
}

export default Formulario