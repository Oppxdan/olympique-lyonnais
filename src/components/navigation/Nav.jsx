import logo from '../../logo.png';
import '../../App.css';
import { Link } from 'react-router-dom';
import { NavContainer, NavRight } from './Nav-styles';

function Nav() {
  return (
    <NavContainer>
        <img src={logo} className="App-logo" alt="logo" /> 
        <NavRight>
            <nav>
                    
            </nav>
        </NavRight>           
    </NavContainer>
  );
}

export default Nav;
