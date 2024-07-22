import { NavLink } from "react-router-dom";

function Header() {
    return(
      <div className="container-header">
        <NavLink to="/" className="logo">{`</1App>`}</NavLink>
        <nav className="nav-bar">
          {
            localStorage.getItem('@compras/displayname') === null
            ?
          <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          </>
          :
          <>
          <NavLink to="/">Users</NavLink>
          <NavLink to="/logout">Logout</NavLink>
          </>
          }
        </nav>
      </div>  
    )
}

export default Header;