import { Helmet } from "react-helmet";

export default function MentionsLegales() {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <Helmet>
        <h1>Mentions Légales</h1>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Éditeur du site
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <h2>John Doe</h2>
            <address>
              📍 40 Rue Laure Diebold
              <br></br>
              69009 Lyon, France
              <br></br>
              📱 <a href="tel:0620304050">06 20 30 40 50</a>
              <br></br>
              📧 <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
            </address>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Hébergeur
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <h2>Always Data</h2>
            <address>
              91 Rue du Faubourg Saint Honoré
              <br></br>
              75008 Paris
            </address>
            🌐 <a href="https://alwaysdata.com">www.alwaysdata.com</a>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Crédits
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <h2>Crédits</h2>
            <p>
              Site développé par John Doe, étudiant du CEF
              <br></br>
              Les images libres de droit sont issues du site{" "}
              <a href="https://pixabay.com/">Pixabay</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
