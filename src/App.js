import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
function App() {

  const  [mostarFormulario,actualizarFormulario] = useState(true)
  const [colaboradores,actualizarColaboradores] = useState([{
    id: uuidv4(),
    equipo: "Front-End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }])
  const [equipo,actualizarEquipo] = useState( [

    { 
      id:uuidv4(),
      titulo:"Programación",
      colorPrincipal:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    
    {
      id:uuidv4(),
      titulo:"Front-End",
      colorPrincipal:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    
    {
      id:uuidv4(),
      titulo:"Data Science",
      colorPrincipal:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    
    {
      id:uuidv4(),
      titulo:"Devops",
      colorPrincipal:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    
    {
      id:uuidv4(),
      titulo:"UX y Diseño",
      colorPrincipal:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    
    {
      id:uuidv4(),
      titulo:"Móvil",
      colorPrincipal:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    
    {
      id:uuidv4(),
      titulo:"Innovación y Gestión",
      colorPrincipal:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
  ])

  const estadoFormulario = () => {
    actualizarFormulario(!mostarFormulario)
  }

  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores,colaborador])
  }
  // Eliminar Colaborador

  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador")
    const nuevoColaborador = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevoColaborador)
  }
  //Actualizar Color
  const actualizarColor = (color,id) => {
    console.log(color,id)
    const equiposActualizados = equipo.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrincipal = color
      }
      return equipo
    })
    actualizarEquipo(equiposActualizados)
  }

  // Crear Equipo 
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipo([...equipo,{...nuevoEquipo, id: uuidv4()}])
  }

  // Like 
  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaboradores)=> {
      if(colaboradores.id === id){
        colaboradores.fav = !colaboradores.fav
      }
      return colaboradores
    })
    actualizarColaboradores(colaboradoresActualizados)
  }
  return (
    <div>
      <Header />
      { mostarFormulario ? <Formulario registrarColaborador={registrarColaborador} crearEquipo={crearEquipo} equipos={equipo.map((equipo)=> equipo.titulo)}/> : <></>}
      {/* {mostarFormulario && <Formulario/>} */}
      <MiOrg estadoFormulario={estadoFormulario}/>
      {
        equipo.map((equipo) =>{
          return <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
        })
      }
      <Footer/> 
    </div>
  );
}

export default App;
