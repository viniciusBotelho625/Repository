import "./app.scss";
import AnimationHome from "./components/AnimationHome";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import Portifolio from "./components/Portifolio";
import SideBar from "./components/SideBar";


const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <AnimationHome />
      <SideBar />
    </section>
    <section id="Perfil"><Parallax type="perfil"/></section>
    <section>Sobre</section>
    <section id="Portifolio"><Parallax type="portifolio"/></section>
    <Portifolio />
    <section id="Contato">Contact</section>
  </div>
  
};

export default App;
