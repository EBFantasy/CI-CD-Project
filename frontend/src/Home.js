import { useNavigate } from "react-router-dom";
import styleHome from './Home.module.css'

export function Home(){
    const navigate = useNavigate()

    function goLogin(){
        navigate('/login')
    }

    function goRegister(){
        navigate('/register')
    }

    return(
        <div>
            Home
            <button onClick={goLogin}>log in</button>
            <button onClick={goRegister}>sign up</button>
        </div>
    )
}