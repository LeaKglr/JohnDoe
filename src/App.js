import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Realisations from "./pages/Realisations";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import MeContacter from "./pages/MeContacter";
import MentionsLegales from "./pages/MentionsLegales";
import GitHubProfile from "./pages/ProfilGitHubJohnDoe";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("#eee"); // Couleur de fond par défaut

  const handleReturnToTop = () => {
    setBackgroundColor("#298eff"); // Changer la couleur de fond
  };

  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  document.addEventListener("scroll", function () {
    const scrollingLink = document.getElementById("scrolling-link");
    if (window.scrollY > 0) {
      scrollingLink.classList.remove("hidden");
    } else {
      scrollingLink.classList.add("hidden");
    }
  });

  return (
    <div className="App">
      <header id="header" className="">
        <div>
          <nav
            className="navbar navbar-light navbar-expand-lg"
            style={{ backgroundColor: "#1e1e1e" }}
          >
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                JOHN DOE
              </a>
              <button
                id="btn"
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li id="lien" className="nav-item text-uppercase active lien">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/"
                    aria-pressed="true"
                    style={{
                      color: activeLink === "link1" ? "blue" : "#ffffff",
                    }}
                    onClick={() => handleClick("link1")}
                  >
                    Accueil
                  </Link>
                </li>
                <li id="lien" className="nav-item text-uppercase lien">
                  <Link
                    className="nav-link"
                    to="/Services"
                    style={{
                      color: activeLink === "link2" ? "blue" : "#ffffff",
                    }}
                    onClick={() => handleClick("link2")}
                  >
                    Mes services
                  </Link>
                </li>
                <li id="lien" className="nav-item text-uppercase lien">
                  <Link
                    className="nav-link"
                    to="/Realisations"
                    style={{
                      color: activeLink === "link3" ? "blue" : "#ffffff",
                    }}
                    onClick={() => handleClick("link3")}
                  >
                    Réalisations
                  </Link>
                </li>
                <li id="lien" className="nav-item text-uppercase lien">
                  <Link
                    className="nav-link lien"
                    to="/Blog"
                    style={{
                      color: activeLink === "link4" ? "blue" : "#ffffff",
                    }}
                    onClick={() => handleClick("link4")}
                  >
                    Blog
                  </Link>
                </li>
                <li id="lien" className="nav-item text-uppercase lien">
                  <Link
                    className="nav-link lien"
                    to="/MeContacter"
                    style={{
                      color: activeLink === "link5" ? "blue" : "#ffffff",
                    }}
                    onClick={() => handleClick("link5")}
                  >
                    Me contacter
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <main style={{ backgroundColor }}>
        <Routes>
          <Route path="/" element={<Accueil />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Realisations" element={<Realisations />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/MeContacter" element={<MeContacter />}></Route>
          <Route path="/MentionsLegales" element={<MentionsLegales />}></Route>
        </Routes>
      </main>
      <footer className="containter-fluid p-0 overflow-hidden">
        <div className="row justify-content-center">
          <div id="Contact" className="col-lg-3 col-md-6">
            <p>
              <strong>John Doe</strong>
            </p>
            <address>
              40 Rue Laure Diebold
              <br></br>
              69009 Lyon, France
              <br></br>
              <a href="tel:0620304050"> Téléphone : 06.20.30.40.50</a>
            </address>
            <div id="RS">
              <i className="fa-brands fa-github fa-2xl">
                <GitHubProfile />
              </i>

              <a href="#" target="_blank" rel="nofollow">
                <i className="fa-brands fa-twitter fa-2xl"></i>
              </a>
              <a href="#" target="_blank" rel="nofollow">
                <i className="fa-brands fa-linkedin fa-2xl"></i>
              </a>
            </div>
          </div>
          <div id="Pages" className="col-lg-3 col-md-6">
            <p>
              <strong>Liens utiles</strong>
            </p>
            <ul>
              <li id="pages">
                <Link id="link" to="/">
                  Accueil
                </Link>
              </li>
              <li id="pages">
                <Link id="link" to="/">
                  A propos
                </Link>
              </li>
              <li id="pages">
                <Link id="link" to="/Services">
                  Services
                </Link>
              </li>
              <li id="pages">
                <Link id="link" to="/MeContacter">
                  Me contacter
                </Link>
              </li>
              <li id="pages">
                <Link id="link" to="/MentionsLegales">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
          <div id="DernieresRealisations" className="col-lg-3 col-md-6">
            <p>
              <strong>Mes dernières réalisations</strong>
            </p>
            <ul>
              <li id="realisations">
                <Link id="link" to="/Realisations">
                  Fresh food
                </Link>
              </li>
              <li id="realisations">
                <Link id="link" to="/Realisations">
                  Restaurant Akira
                </Link>
              </li>
              <li id="realisations">
                <Link id="link" to="/Realisations">
                  Espace bien-être
                </Link>
              </li>
            </ul>
          </div>
          <div id="DerniersArticlesBlog" className="col-lg-3 col-md-6">
            <p>
              <strong>Mes derniers articles</strong>
            </p>
            <ul>
              <li id="articles">
                <Link id="link" to="/Blog">
                  Coder son site en HTML/CSS
                </Link>
              </li>
              <li id="articles">
                <Link id="link" to="/Blog">
                  Vendre ses produits sur le web
                </Link>
              </li>
              <li id="articles">
                <Link id="link" to="/Blog">
                  Se positionner sur Google
                </Link>
              </li>
            </ul>
          </div>
          <div id="copyright">
            <nav id="scrolling-link" className="hidden">
              <div className="btn">
                <button className="btnCopyright" onClick={handleReturnToTop}>
                  <i
                    className="fa-regular fa-copyright"
                    style={{ color: "#ffffff" }}
                  ></i>
                  <p>Designed by John Doe</p>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

// export default App;
