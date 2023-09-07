import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinkStyles = ({ isActive }) => {
        return{
             fontWeight: isActive ? 'bold' : 'normal', 
            color: isActive ? 'rgb(255, 196, 72)' : 'rgb(110, 112, 113)',
        }   
    }
 
    return(
        <>
        
        <nav className="nav-bar" id="nav-bar">
            <NavLink className="logo" to={'/'}>
                <img src= 'images/mainlogo.png'  alt="logo"/>
                
            </NavLink>
              <p>Web Developer</p>
                    
                   <ul>
                        <NavLink style={navLinkStyles} to='/'>Home</NavLink>
                        <NavLink style={navLinkStyles} to='/About'>About</NavLink>
                        <NavLink style={navLinkStyles} to='/Skills'>Skills</NavLink>
                        <NavLink style={navLinkStyles} to='/Work'>Work</NavLink>
                        <NavLink style={navLinkStyles} to='/Contact'>Contact</NavLink>
                    </ul>  

                    <div className="logos">
                       <img className="logosfirst" src= 'images/Vector-linkedin.png'  alt="logo"/>
                       <img className="logosfirst" src= 'images/github-logo.png'  alt="logo"/>
                    </div>
               

        </nav>
        
        </>
      
    );
}

export default Navbar; 