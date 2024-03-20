import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Home() {
  return (
    <>
      <Header />
      <section className="container">
        <div className="apresentacao">
          <p>
            <span>Trabalho digno </span> <br />
            base para um futuro justo e próspero
          </p>
        </div>
        <figure>
          <img className="img-home" src="./work.svg" alt="Imagem de Home" />
        </figure>
      </section>
      <Footer />
    </>
  );
}

export default Home
