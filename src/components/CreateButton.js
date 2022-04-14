import {Link} from 'react-router-dom'
const CreateButton = (props) => {
    return (
                <div className="nav-item">
                        <Link to="/cardform">
                            <button className="btn btn-primary" onClick={props.onClick}>+1 Add Credit Card</button>
                        </Link>    
                </div>
                    
            
       
   
    );
}

export default CreateButton;