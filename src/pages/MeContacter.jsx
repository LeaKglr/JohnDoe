export default function MeContacter() {
  return (
    <div className="MeContacter">
      <div id="PresentationMeContacter" className="row justify-content-center">
        <div id="EnTeteMeContacter">
          <h1 className="text-uppercase">Me Contacter</h1>
          <p id="p">
            Pour me contacter en vue d'un entretien ou d'une future
            collaboration, merci de remplir le formulaire de contact.
          </p>
          <hr></hr>
        </div>
        <div id="Form" className="col-md-5 col-sm-2">
          <h2 id="TitleForm">Formulaire de contact</h2>
          <hr></hr>
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Votre nom"
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Votre adresse mail"
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Votre numéro de téléphone"
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Sujet"
              ></input>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Votre message"
                rows={5}
              ></textarea>
            </div>
            <div id="Bouton">
              <button type="submit" className="btn btn-primary">
                Envoyer
              </button>
            </div>
          </form>
        </div>
        <div id="Coordonnees" className="col-md-5 col-sm-2">
          <h2>Mes coordonnées</h2>
          <hr></hr>
          <address>
            📍 40 Rue Laure Diebold, 69009 Lyon, France
            <br></br>
            📱 <a href="tel:0620304050">06 20 30 40 50</a>
          </address>
          <div
            id="map-container-google-2"
            className="z-depth-1-half map-container"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11130.508696440678!2d4.78867917706784!3d45.77866153729091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1708188984162!5m2!1sfr!2sfr"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
