import "./style/Actualite.css";
import "./style/Presentation.css";
import act1 from "../assests/act1.jpg";
import act3 from "../assests/act3.jpg";
import act5 from "../assests/act5.jpg";
const Actualite = () => {
  return (
    <div className="actualite_contener">
      <h2>Actualite</h2>
      <div className="presentation_contener_member">
        <div className="presentation_contener_cont">
          <div className="membres_item">
            <img src={act5} className="center" alt="sg" />
            <section>
              <p>participation de djam à #thinkB4UClick </p>
            </section>
          </div>
          <div className="membres_item cache">
            <img src={act3} alt="prsi" className="actImg"/>
            <section>
              <p>cloture de la campagne #thinkB4UClick</p>
            </section>
          </div>
        
          <p>
            Contribution de DJAM à une campagne de lutte contre la
            désinformation et les discours de haine en ligne, plusieurs points
            sont a retenir:
            <ul>
              <li>Détecter les infox en développant son esprit critique</li>
              <li>
                Protéger sa vie privée en ligne pour éviter la désinformation
              </li>
              <li>Faire aussi le tri sur les réseaux sociaux</li>
            </ul>
          </p>
        </div>
       
      </div>
      <div className="presentation_contener_member">
        <div className="presentation_contener_cont">
        <div className="membres_item">
          <img src={act1} alt="com" className="actImg" />
          <section>
            <div>
              {" "}
              <p>sensibilisation covid-19</p>
            </div>
          </section>
        </div>
          <p>
            Contribution de DJAM à une sensibilisation covid-19, quelques mesure
            à respecter
            <ul>
              <li>
                Laissez une distance d’au moins un mètre entre vous et les
                autres
              </li>
              <li>
                Considérez le port du masque comme normal lorsque vous êtes avec
                d'autres personnes
              </li>
              <li>
                Lavez-vous les mains avant de mettre votre masque, ainsi
                qu'avant de l’enlever et après l'avoir fait.
              </li>
              <li>N’utilisez pas de masques avec des valves d’expiration.</li>
            </ul>
          </p>
        </div>
        
      </div>
    </div>
  );
};
export default Actualite;
