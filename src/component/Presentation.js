import "./style/Presentation.css";
import ex from "../assests/ex.jpg";
import prsi from "../assests/presi.jpg";
import fond1 from "../assests/fond1.jpg";
import fond2 from "../assests/fond2.jpg";
import fond3 from "../assests/fond3.jpg";
import com from "../assests/celcom.jpg";
import sgg from "../assests/sgg.jpg"
const Presentation = () => {
  return (
    <div className="presentation_contener">
      <div className="presentation_contener_cont">
        <div>
          <img src={ex} className='imgc' alt="ex" />
        </div>
        <div>
          <p>
            {" "}
            DJAM est une association des jeune dynamique qui agit dans le
            domaine de l'action sociale, culturelle et associative. Elle a pour
            but l'accompagnement, la synergie et l’éducatif des jeunes. Elle
            vise à favoriser leur développement personnel ainsi que leur
            intégration dans la société en tant que citoyens actif critique,
            responsable et solidaire. Elle vise à réaliser son objectif
            notamment à travers les actions de volontariat au bénéfice de la
            collectivité de formation et de soutien de projet individuel,
            s’inscrivant dans des processus d'insertion sociale
            et/professionnelle. ainsi l'association oeuvre dans plusieurs
            domaine tel comme:
            <ul>
              <li>le domaine de la santé</li>
              <li>le domaine de l'education</li>
              <li>le domaine du sport et du loisir</li>
              <li>le domaine de l’agriculture</li>
              <li>le domaine de la paix et sécurité</li>
              <li>le domaine l'entrepreneuriats</li>
            </ul>
          </p>
        </div>
      </div><br></br>
      <p>les membres du bureau</p>
      <div className="presentation_contener_member presentation_contener_cont">
        <div className="membres">
          <div className="membres_item">
            <img src={prsi} alt="prsi" />
            <section>
              <h4>M.EVELE</h4>
              <p>le president</p>
            </section>
          </div>
          <div className="membres_item">
            <img src={fond3} alt="com" />
            <section>
              <h4>M.ALLAHFI HENRY</h4>
              <p>coofondateur</p>
            </section>
          </div>
          <div className="membres_item">
            <img src={sgg} className="center" alt="sg" />
            <section>
              <h4>M.M'HATOUKOU</h4>
              <p>le secretaire generale</p>
            </section>
          </div>
          <div className="membres_item">
            <img src={com} alt="com" />
            <section>
              <div>
                <h4>M.MARAFA</h4>
              </div>
              <div>
                {" "} 
                <p>le charge de com</p>
              </div>
            </section>
          </div>
          <div className="membres">
          <div className="membres_item">
            <img src={fond1} alt="prsi" />
            <section>
              <h4>MATHIEUX</h4>
              <p>Trésorier</p>
            </section>
          </div>
          <div className="membres_item">
            <img src={fond2} className="center" alt="sg" />
            <section>
              <h4>Dr ASSIDAKAI</h4>
              <p>animateur culturel</p>
            </section>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Presentation;
