
import styles from './Sobre.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Avatar({
  nome,
  sobre,
  coisa
}) {
  return (
    <>

      <div className={styles.perfil}>
        <figure>
          <img className={styles.img_perfil} src="./profile.svg" alt="Imagem de Home" />
        </figure>
        <div className={styles.info_perfil}>
          <h1>{nome}</h1>
          <p>{sobre}</p>
          <div className={styles.redes}>
            <figure>
              <a href='#'>
                <img className={styles.img_redes} src="./github.png" alt="Logo Github" />
              </a>
              <a href='#'>
                <img className={styles.img_redes} src="./linkedin.png" alt="Logo LinkedIn" />
              </a>
            </figure>
          </div>
        </div>
      </div>
    </>

  );
}


function Sobre() {
  return (
    <>
      <Header />
      <Avatar
        nome="Patrick Augusto"
        sobre="Sistemas para Internet"
        coisa="Universidade Cátolica de Pernambuco"
      />
      <Footer />
    </>
  )
}

export default Sobre
