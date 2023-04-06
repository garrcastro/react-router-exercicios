import { useNavigate } from "react-router-dom"
import { goToHome, goToProfile } from "../routes/Coordinator";
import { useParams } from "react-router-dom";

export function Header () {
    const navigate = useNavigate()
    
    return(
        <>
            <button onClick={()=>{goToHome(navigate)}}>Ir para página inicial</button>
            <button onClick={()=>{goToProfile(navigate)}}>Ir para página de perfil</button>
        </>
    )
}