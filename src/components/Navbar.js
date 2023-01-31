import {Link,useLocation} from "react-router-dom"
function Navbar(){
    const pathname=useLocation().pathname;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <h1 id="header">
              Coding <span>Aan</span>
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={pathname === "/" ? "nav-link active" : "nav-link"}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className={
                    pathname === "/business" ? "nav-link active" : "nav-link"
                  }
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/entertainment"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/health" ? "nav-link active" : "nav-link"
                  }
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/science" ? "nav-link active" : "nav-link"
                  }
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/sports" ? "nav-link active" : "nav-link"
                  }
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  className={pathname === "/technology" ? "nav-link active" : "nav-link"}
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
export default Navbar