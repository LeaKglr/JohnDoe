export default function Blog() {
  return (
    <div id="Blog">
      <img
        id="imageblog"
        src="https://media.gettyimages.com/id/1405587720/fr/photo/particle-earth-model-effect-map.jpg?s=612x612&w=0&k=20&c=BLi-OuRY-nOWt6-A4e-PN91iH3fTEt8bAXNF8YumMjY="
        alt="Image représentant la planète Terre entourée de lignes de couleur bleue."
      ></img>
      <div className="PresentationBlog">
        <div id="EnTeteBlog">
          <h1 className="text-uppercase">Blog</h1>
          <p id="p">
            Retrouvez ici quelques articles sur le développement web.
          </p>
          <hr></hr>
        </div>
        <div
          id="Card"
          className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
        >
          <div id="card" className="col">
            <div className="card" style={{ width: "22rem" }}>
              <img
                id="ArticleCard"
                src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076533_640.jpg"
                alt="Partie de code principalement avec du HTML et du CSS de couleurs rouge, vert, jaune, noir et blanc."
              ></img>
              <CardBody
                h2="Coder son site en HTML/CSS"
                cardtext="Some quick example text to build on the card title and make up the bui=lk of the card's content"
              />
              <BoutonCard bouton="Lire la suite" />
              <FooterCard text="Publié le 22 août 2022" />
            </div>
          </div>
          <div id="card" className="col">
            <div className="card" style={{ width: "22rem" }}>
              <img
                src="https://cdn.pixabay.com/photo/2017/08/30/07/56/money-2696228_1280.jpg"
                alt="Pot rempli de pièces de monnaies. On observe aussi 3 colonnes de pièces empilés avec chacune un plant sur le dessus de couleur vert. Le tout est posé sur une strucutre en bois avec un fond de verdure."
              ></img>
              <CardBody
                h2="Vendre ses produits sur le web"
                cardtext="Some quick example text to build on the card title and make up the bui=lk of the card's content"
              />
              <BoutonCard bouton="Lire la suite" />
              <FooterCard text="Publié le 20 août 2022" />
            </div>
          </div>
          <div id="card" className="col">
            <div className="card" style={{ width: "22rem" }}>
              <img
                src="https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg"
                alt="Ordinateur en marche avec un navigateur d'ouvert et le moteur de recherche Google. A côté est posé un téléphone. L'ordinateur et le téléphone sont posés sur une table en bois."
              ></img>
              <CardBody
                h2="Se positionner sur Google"
                cardtext="Some quick example text to build on the card title and make up the bui=lk of the card's content"
              />
              <BoutonCard bouton="Lire la suite" />
              <FooterCard text="Publié le 1 août 2022" />
            </div>
          </div>
          <div id="card" className="col">
            <div className="card" style={{ width: "22rem" }}>
              <img
                src="https://cdn.pixabay.com/photo/2021/11/16/15/35/technology-6801334_640.jpg"
                alt="3 technologies différentes : téléphone, ordinateur et tablette. L'ordinateur de couleur noir est posé sur une structure en bois. La tablette de couleur noir est posé sur l'ordinateur et le téléphone de couleur blanc sur la tablette."
              ></img>
              <CardBody
                h2="Coder en responsive design"
                cardtext="Some quick example text to build on the card title and make up the bui=lk of the card's content"
              />
              <BoutonCard bouton="Lire la suite" />
              <FooterCard text="Publié le 31 juillet 2022" />
            </div>
          </div>
          <div id="card" className="col">
            <div className="card" style={{ width: "22rem" }}>
              <img
                src="https://cdn.pixabay.com/photo/2022/06/13/00/12/seo-7259068_1280.jpg"
                alt="Mot SEO et à l'intérieur de ce mot, d'autres mots y sont associés pour représenter sa définition"
              ></img>
              <CardBody
                h2="Techniques de référencement"
                cardtext="Some quick example text to build on the card title and make up the bui=lk of the card's content"
              />
              <BoutonCard bouton="Lire la suite" />
              <FooterCard text="Publié le 30 juillet 2022" />
            </div>
          </div>
          <div id="card" className="col">
            <div className="card" style={{ width: "22rem" }}>
              <img
                src="https://cdn.pixabay.com/photo/2018/04/03/23/29/wordpress-3288414_1280.png"
                alt="Différents logos de langages, plateformes, marques et systèmes d'exploitation"
              ></img>
              <CardBody
                h2="Apprendre à coder"
                cardtext="Some quick example text to build on the card title and make up the bui=lk of the card's content"
              />
              <BoutonCard bouton="Lire la suite" />
              <FooterCard text="Publié le 12 juillet 2022" />
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
      <button type="button" className="btn btn-primary mb-2">
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
