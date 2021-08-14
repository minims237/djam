import "./style/Actualite.css";
import "./style/Presentation.css";
import act1 from "../assests/act1.jpg";
import act3 from "../assests/act3.jpg";
import act5 from "../assests/act5.jpg";
import actnn from "../assests/actuN1.jpg";
const Actualite = () => {
  return (
    <div className="actualite_contener">
      <h2>Actualite</h2>
      <div className="presentation_contener_member">
        <div className="presentation_contener_cont">
          <div className="membres_item">
            <img src={actnn} alt="com" className="actImg" />
            <section>
              <div>
                {" "}
                <p>sensibilisation covid-19</p>
              </div>
            </section>
          </div>

          <p>
            <div className="titls">
              {" "}
              <h4> ⭕️⭕️⭕️⭕️⭕️⭕️⭕️⭕️⭕️⭕️⭕️</h4>
              <h4>🖊️ Compte rendu de la réunion du samedi 14 Août 2021 🖊️</h4>
            </div>
            En ce jour du samedi 14 Août 2021 s'est tenue au{" "}
            <b>CENTRE D'ÉDUCATION ET D'ACTION COMMUNAUTAIRE DE MAGA</b> (CEAC)
            une réunion extraordinaire. L'ordre du jour était centré sur le
            lancement des activités de la <b>DJAM</b> et ce qui a concerné 03
            domaines :
            <ul>
              <li>
                ❇️<b>Dans le domaine de la santé</b> nous avons retenu les
                activités suivantes :<b>IEC</b> ( Information, l'éducation et la
                Communication) sur la 97.7 de la RADIO LABAR sur les maladies
                telles que le Paludisme, la fièvre typhoïde etc... compte tenu
                du contexte sanitaire en ces moments de pluie !
                <b>Vacances sans SIDA</b> ( Sensibilisation sur le terrain)
              </li>
              <li>
                ❇️ <b>Dans le domaine de l'environnement</b> nous avons :
                <ul>
                  <li>
                    {" "}
                    <b>Le reboisement</b> (site choisi <b>CES DE MADIOGO</b> et
                    Le marché de <b>GUIRVIDIG</b>)
                  </li>
                  <li>
                    <b>L'investissement Humain</b> ( hygiène et salubrité,
                    assainissement et sécurité des aliments)
                  </li>
                </ul>
              </li>
              <li>
                ❇️<b>Dans le domaine de l'agriculture</b> nous allons organiser
                un Séminaire de formation sur le thème :"{" "}
                <b>l'entrepreneuriat agricole</b> " avec l'intervention de :
                <ul>
                  <li>
                    📌
                    <b>
                      <i> La délégation de la jeunesse</i>
                    </b>{" "}
                  </li>
                  <li>
                    📌{" "}
                    <b>
                      <i> D'un Ingénieur agronome</i>
                    </b>
                  </li>
                  <li>
                    📌{" "}
                    <b>
                      <i>
                        De Monsieur le Sous-préfet de l'arrondissement de Maga.
                      </i>
                    </b>
                  </li>
                </ul>
              </li>
            </ul>
            En outre nous avons reçu plusieurs Dons de plants d'arbres:
            <ul>
              <li>
                👉Don de 20 plantes par Monsieur <b>AHMADOU MOUMINE</b>
              </li>
              <li>
                👉Don de 20 plantes par Monsieur <b>Malika Isaac</b>
              </li>
              <li>
                👉Don de 15 plantes par Monsieur <b>MAHAMAT EVELÉ</b> Président
                de l'association DJAM
              </li>
              <li>
                👉Don de 10 plantes par Monsieur <b>DAOUD NASSER</b>{" "}
                Vice-président de l'association
              </li>
            </ul>
            En fin nous avons échangé sur le fonctionnement de l'association en
            statuant sur:
            <ul>
              <li>
                👉les frais d'adhésion qui s'élève à <b>2.000Fcfa</b>
              </li>
              <li>
                👉les cotisations mensuelles qui s'élèvent à <b>500Fcfa</b> et
                qui seront en vigueur à compter du mois de septembre prochain.
              </li>
            </ul>
            <h5>Le Président de l'association</h5>
            <h5>Le Secrétariat général</h5>
            <h5>La cellule de communication</h5>
          </p>
        </div>
      </div>
      <div className="presentation_contener_member">
        <div className="presentation_contener_cont">
          <div className="membres_item">
            <img src={act5} className="center" alt="sg" />
            <section>
              <p>participation de djam à #thinkB4UClick </p>
            </section>
          </div>
          <div className="membres_item cache">
            <img src={act3} alt="prsi" className="actImg" />
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
