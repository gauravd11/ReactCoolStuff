import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'

const BackButton = (props) => {

    return <div>
        <div className="nav-item">
            <Link to="/">
            <button className="btn btn-primary" onClick={props.onClick}>Back</button>
            </Link>    
        </div>
    </div>  

}

export default BackButton;