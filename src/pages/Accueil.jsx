export default function Accueil() {
  return (
    <div className="container-fluid p-0 overflow-hidden">
      <div id="PresentationBloc1">
        <div id="Bloc1">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>

          <a
            href="#PresentationBloc2"
            className="btn btn-primary mb-2"
            id="EnSavoirPlus"
          >
            En savoir plus
          </a>
        </div>
      </div>
      <div id="PresentationBloc2" className="row justify-content-center">
        <div className="col-md-5 col-sm-2">
          <h1 id="Apropos">A propos</h1>
          <hr></hr>
          <p id="Formation">
            Passionné par l'informatique et les nouvelles technologies, j'ai
            suivi une formation d'<strong>intégrateur-développeur web</strong>{" "}
            au CEF. Au cours de cette formation, j'ai pu acquérir des bases
            solides pour travailler dans le domaine du{" "}
            <strong>développement web</strong>.
          </p>
          <p id="SearchJob">
            Basé à Lyon, je suis en recherche d'une alternance au sein d'une
            agence digitale pour consolider ma formation de{" "}
            <strong>développeur web full stack</strong>.
          </p>
        </div>
        <div id="PresentationBloc3" className="col-md-5 col-sm-2">
          <img
            id="JohnDoe"
            src="https://cdn.pixabay.com/photo/2015/01/12/10/45/man-597178_1280.jpg"
            alt="En premier plan flouté nous pouvons observer un pot de différents crayons et un ciseau. En second plan on observe un homme concentré sur son travail. En arrière plan on peut observer qu'il est dans un bureau avec des placards."
            className="img-fluid img-rounded"
            style={{ maxWidth: "100%" }}
          ></img>
          <div>
            <h2 id="Competences">Mes compétences</h2>
            <Competences text="HTML 90%" />
            <div
              className="progress"
              role="progressbar"
              aria-label="Danger example"
              aria-valuenow={90}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="progress-bar bg-danger"
                style={{ width: "90%" }}
              ></div>
            </div>
            <Competences text="CSS3 80%" />
            <div
              className="progress"
              role="progressbar"
              aria-label="Info example"
              aria-valuenow={80}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="progress-bar bg-info"
                style={{ width: "80%" }}
              ></div>
            </div>
            <Competences text="JAVASCRIPT 70%" />
            <div
              className="progress"
              role="progressbar"
              aria-label="Warning example"
              aria-valuenow={70}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="progress-bar bg-warning"
                style={{ width: "70%" }}
              ></div>
            </div>
            <Competences text="PHP 60%" />
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow={60}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="progress-bar bg-success"
                style={{ width: "60%" }}
              ></div>
            </div>
            <Competences text="REACT 50%" />
            <div
              className="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow={50}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar" style={{ width: "50%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Competences(props) {
  return <p>{props.text}</p>;
}
