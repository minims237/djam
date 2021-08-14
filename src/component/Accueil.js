import pro from '../assests/pro.jpg'
import './style/Accueil.css'
const Accueil=()=>{
    return(
        <div className='accueil_contener' >
            <p>dynamique des jeunes de l'arrondissement de maga</p>
            <img src={pro} className='acc_img' alt='pro'/>
        </div>
    )
}
export default Accueil