export default function Realisations() {
  return (
    <div id="Realisations">
      <img
        id="imagerealisations"
        src="https://media.gettyimages.com/id/1405587720/fr/photo/particle-earth-model-effect-map.jpg?s=612x612&w=0&k=20&c=BLi-OuRY-nOWt6-A4e-PN91iH3fTEt8bAXNF8YumMjY="
        alt="Image représentant la planète Terre entourée de lignes de couleur bleue."
      ></img>
      <div className="PresentationRealisations">
        <div id="EnTeteRealisations">
          <h1 className="text-uppercase">Portfolio</h1>
          <p id="p">Voici quelques-unes de mes réalisations.</p>
          <hr></hr>
        </div>
        <div id="Card" className="row row-cols-1 row-cols-md-3 g-4">
          <div id="card" className="col">
            <div className="card" style={{ width: "22rem" }}>
              <img
                src="https://cdn.pixabay.com/photo/2015/05/30/01/18/vegetables-790022_640.jpg"
                className="card-img-top"
                alt="Légumes : aubergines, salades, poivron jaune et radis."
              ></img>
              <CardBody
                h2="Fresh Food"
                cardtext="Réalisation d'un site avec commande en ligne"
              />
              <BoutonCard bouton="Voir" />
              <FooterCard text="Site réalisé avec PHP et MySQL" />
            </div>
          </div>
          <div id="card" className="col">
            <div className="card" style={{ width: "22rem" }}>
              <img
                src="https://cdn.pixabay.com/photo/2023/07/07/17/47/sushi-8113165_640.jpg"
                className="card-img-top"
                alt="Cuisine japonaise et plus particulièrement des sushis, sauces et baguettes. Le tout sur une planche en bois."
              ></img>
              <CardBody
                h2="Restaurant Akira"
                cardtext="Réalisation d'un site vitrine"
              />
              <BoutonCard bouton="Voir" />
              <FooterCard text="Sité réalisé avec WordPress" />
            </div>
          </div>
          <div id="card" className="col">
            <div className="card" style={{ width: "22rem" }}>
              <img
                src="https://cdn.pixabay.com/photo/2018/05/21/21/29/stones-3419575_640.jpg"
                className="card-img-top"
                alt="Pierres significatives de bien être de couleur noire. En arrière plan se trouve un pot avec des pétales de couleurs roses."
              ></img>
              <CardBody
                h2="Espace bien-être"
                cardtext="Réalisation d'un site vitrine pour un patricien de bien-être"
              />
              <BoutonCard bouton="Voir" />
              <FooterCard text="Site réalisé en HTML/CSS" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardBody(props) {
  return (
    <div id="cardbody" className="card-body">
      <h2 className="card-title">{props.h2}</h2>
      <p className="card-text">{props.cardtext}</p>
    </div>
  );
}

function BoutonCard(props) {
  return (
    <div id="Bouton">
      <button type="button" className="btn btn-outline-primary mb-2">
        {props.bouton}
      </button>
    </div>
  );
}

function FooterCard(props) {
  return (
    <div className="card-footer">
      <p>{props.text}</p>
    </div>
  );
}
