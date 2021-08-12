import "./style/Contact.css";
const Contact = () => {
  return (
    <div className="contact__contener">
      <div className='contact__ent'>
        <div className='contact_item'>
          <p>DYNAMIQUE DES JEUNES DE L'ARRONDISSEMENT DE MAGA</p>
          <span>djamassociation@gmail.com</span>
        </div>
        <div className='contact_item'>
          <p>ASSOCIATION</p>
          <span>a propos</span>
        </div>
        <div className='contact_item'><p>EMPLACEMENT</p>
          <span>Cameroun</span>
        </div>
        <div className='contact_item'>
        <p>NOS PARTENAIRES</p>
        <span>la commune de maga</span>
      </div>
      </div>
      <div className='contact__foot'>
        <div><p>Designer et Développé par le Calviniste</p></div>
        <div><p>Politique de confidentialite</p></div>
        <div><p>Condition d'utilisation</p></div>
        <div><p>© 2021 djam association </p></div>
      </div>
      
    </div>
  );
};

export default Contact;
