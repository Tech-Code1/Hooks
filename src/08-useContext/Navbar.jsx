import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">useContext</Link>
            

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink 
                        to="/"
                        className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`}
                        end
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        to="/about"
                        className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`}
                        end
                    >
                        About
                    </NavLink>

                    <NavLink 
                        to="/login"
                        className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`}
                        end
                    >
                        Login
                    </NavLink>
                </ul>
            </div>
        </div>
    </nav>
  )
}
