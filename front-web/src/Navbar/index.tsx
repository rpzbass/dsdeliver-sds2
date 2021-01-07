import  './styles.css';
import { ReactComponent as Logo} from './Group.svg';

function Navbar(){

return (

        <nav className="main-navbar">
            <Logo />
            <a href="home" className="logo-text">DS DELIVERY</a>
        </nav>

)

}

export default Navbar;

