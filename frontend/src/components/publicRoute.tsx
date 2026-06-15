import { useAppData } from "../context/AppContext"
import { Navigate,Outlet } from "react-router-dom"


const PublicRoute=()=>{
    const {isauth,loading}=useAppData()

    if(loading)return null

    return isauth? <Navigate to="/" replace/>:<Outlet/>
}

export default PublicRoute