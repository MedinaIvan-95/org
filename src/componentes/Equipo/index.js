import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"
const Equipo = (props) => {
    const {colorPrincipal,colorSecundario,titulo, id} = props.datos

    const colorAct = {borderColor:hexToRgba(colorPrincipal,0.6)}

    const colorSec = {backgroundColor:hexToRgba(colorPrincipal,0.6)}

    const {colaboradores,eliminarColaborador,actualizarColor, like} = props

    return <>{ colaboradores.length > 0 &&
            <section className="equipo" style={colorSec}>
                <input type="color"
                className="input-color"
                value={colorPrincipal}
                onChange={(e)=>{
                    actualizarColor(e.target.value,id)
                }}
                />
                <h3 style={colorAct}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador,index) => <Colaborador eliminarColaborador={eliminarColaborador}colorPrincipal={colorPrincipal} datos={colaborador} key={index} like={like}/>)
                    }
                </div>
            </section>
    }
    </>
}

export default Equipo