import "./Navbar.css";

const Navbar=()=>{
    return(
        <nav >
        <ul >
          <li >
            <a href="aboutUs.html" class="nav__link nav__link--active">ABOUT US</a>
          </li>
          <li >
            <a href="#" class="nav__link">FOR YOU</a>
          </li>
          <li >
            <a href="#" class="nav__link">SERVİCES</a>
          </li>
          <li >
            <a href="#" class="nav__link">BLOG</a>
          </li>
          <li >
            <a href="#" class="nav__link">VLOG</a>
          </li>
          <li >
            <a href="#" class="nav__link">CONTACT</a>
          </li>
        </ul>
      </nav>
    )
}
export default Navbar;
