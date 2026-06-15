import { useLocation,Navigate, Outlet } from "react-router-dom"

import { useAppData } from "../context/AppContext"


const ProtectedRoute=()=>{
    const {isauth,user,loading}=useAppData()

    const location =useLocation();

    if(loading) return null;

    

    if(!isauth){
        return <Navigate to={'/login'} replace/>
    }

    if(!user?.role && location.pathname!=="/select-role"){
        return <Navigate to={"/select-role"} replace/>
    }

    if(user?.role && location.pathname==="/select-role"){
        return <Navigate to={"/"} replace/>
    }

    return <Outlet/>
    
}
export default ProtectedRoute
