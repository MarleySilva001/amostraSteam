import { FaBasketball, FaVolleyball } from "react-icons/fa6";
import { PiSoccerBall } from "react-icons/pi";

const NavEsporte = () => {
    return(
        <ul>
            <li>
                <PiSoccerBall/>
                <p>futebol</p>
            </li>
            <li>
                <FaVolleyball/>
                <p>volei</p>
            </li>
            <FaBasketball/>
            <li>basquete</li>
        </ul>
    );
}

export default NavEsporte;