import AddNote from './AddNote';
import { Link } from "react-router-dom";
export const Home = (props) => {
    return (

        <div className='container my-5'>

            {localStorage.getItem('token') ? <><AddNote showAlert={props.showAlert} /> </> : <><h2>Kindly Login or SignUp to Add your Notes or to view home Page</h2><Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link></>}
        </div>
    )
}
