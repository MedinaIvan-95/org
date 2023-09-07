import "./listaOpciones.css"

const ListaOpciones = (props) => {

    /* Metodo map -> arreglo.map( (variable, index) => {
        return <option></option>
    }) */

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccione equipo</option>
            {props.equipos.map( (equipo,index)=> {
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones