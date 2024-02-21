function H2(props) {
  return <h2 className="text-uppercase">{props.titre}</h2>;
}

export default function Services() {
  return (
    <div id="Services" className="container-fluid p-0 overflow-hidden">
      <img
        id="imageservices"
        src="https://media.gettyimages.com/id/1405587720/fr/photo/particle-earth-model-effect-map.jpg?s=612x612&w=0&k=20&c=BLi-OuRY-nOWt6-A4e-PN91iH3fTEt8bAXNF8YumMjY="
        alt="Planète Terre entourée de lignes de couleur bleue."
      ></img>
      <div id="PresentationServices" className="row justify-content-center">
        <div id="EnTeteServices">
          <h1 className="text-uppercase">Mon offre de services</h1>
          <p id="p">Voici les prestations sur lesquelles je peux intervenir.</p>
          <hr></hr>
        </div>
        <div id="Article" className="col-md-4 col-sm-2">
          <i id="icon" className="fa-solid fa-display"></i>
          <H2 titre="UX Design" />
          <p>
            L'<strong>UX Design</strong> est une méthode de conception centrée
            sur l'utilisateur. Son but est d'offrir une expérience de navigation
            optimale à l'internaute.
          </p>
        </div>
        <div id="Article" className="col-md-4 col-sm-2">
          <i id="icon" className="fa-solid fa-file-code"></i>
          <H2 titre="Développement web" />
          <p>
            Le <strong>développement de sites web </strong>repose sur
            l'utilisation des langages HTML, CSS, JavaScript et PHP.
          </p>
        </div>
        <div id="Article" className="col-md-4 col-sm-2">
          <i id="icon" className="fa-solid fa-magnifying-glass-dollar"></i>
          <H2 titre="Référencement" />
          <p>
            Le <strong>référencement naturel d'un site,</strong> aussi appelé
            SEO, consiste à mettre des techniques en oeuvre pour{" "}
            <i>améliorer sa position</i> dans les résultats des moteurs de
            recherche.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
