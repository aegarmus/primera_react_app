import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
      <nav>
        <div>LOGO</div>

        <div>
          <ul>
            <li>
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/about"}>Sobre Nostros</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contactanos</Link>
            </li>
          </ul>
        </div>

        <div>
          <button>Login</button>
        </div>
      </nav>
    );
}