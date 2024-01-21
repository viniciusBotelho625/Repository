import "./app.scss";
import AnimationHome from "./components/AnimationHome";
import Navbar from "./components/NavBar";


const App = () => {
  return(
    <div>
      <section id="Homepage">
        <Navbar />
        <AnimationHome />
      </section>
      <section id="Sobre">Paralex</section>
      <section>Sobre</section>
      <section id="Portifolio">Paralex</section>
      <section>Portifolio 1</section>
      <section>Portifolio 2</section>
      <section>Portifolio 3</section>
      <section>Paralex</section>
      <section id="Contato">Contato</section>
    </div>
  );
};

export default App;
