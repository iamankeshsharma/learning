import { useNavigate } from "react-router-dom";
import { ROUTES } from "app/constants/routes";

export default function Contact(){
    const navigate = useNavigate();
    return <>
        <h1>
            Contact
        </h1>
        <button onClick={()=>navigate(ROUTES.about.href)}>Go to About</button>
    </>;
}