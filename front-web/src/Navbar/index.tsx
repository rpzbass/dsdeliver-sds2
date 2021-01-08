import  './styles.css';
import { ReactComponent as Logo} from './Group.svg';
import { Link } from 'react-router-dom';

function Navbar(){

return (

        <nav className="main-navbar">
            <Logo />
            <Link to="/" className="logo-text">DS DELIVERY</Link>
        </nav>

)

}

export default Navbar;

