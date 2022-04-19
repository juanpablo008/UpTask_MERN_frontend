import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import useProjects from "../hooks/useProjects"
import Browser from "./Browser"

const Header = () => {

  const { logOutAuth } = useAuth()
  const { handleBrowser, logOut } = useProjects()

  const handleLogOut = () => {
    logOut()
    logOutAuth()
    localStorage.removeItem('token')
  }

  return (
    <header className="px-4 py-5 bg-white border-b">
      <div className="md:flex md:justify-between">
        <Link to='/projects' className="text-4xl text-sky-600 font-black text-center mb-5 md:mb-0 cursor-pointer">UpTask</Link>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <button type="button" className="font-bold uppercase" onClick={handleBrowser}>Buscar Proyecto</button>
          <Link to="/projects" className="font-bold uppercase ">Proyectos</Link>
          <button type="button" className="text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold hover:bg-sky-700 transition-colors" onClick={handleLogOut}>Cerrar Sesión</button>
          <Browser />
        </div>
      </div>
    </header>
  )
}

export default Header