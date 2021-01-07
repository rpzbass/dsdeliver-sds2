import  './styles.css';
import { ReactComponent as LogoInsta} from './Instagram.svg';
import { ReactComponent as Logolinkedin} from './Linkedin.svg';
import { ReactComponent as Logoyoutube} from './Youtube.svg';
function Footer(){

return (
    <>
    <footer className="main-footer">

            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior 
            <div className="footer-icons"> 
             <a href="https://www.youtube.com" target="_new"><Logoyoutube/></a>   
             <a href="https://www.linkedin.com" target="_new"><Logolinkedin/></a>
             <a href="https://www.instagram.com" target="_new"><LogoInsta/></a>
            </div>               
    </footer>
    </>
)

}

export default Footer;

