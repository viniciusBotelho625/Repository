import AnimationHome from "./components/AnimationHome";
import "./app.scss";
import Navbar from "./components/NavBar/NavBar";

const App = () => {
  return(
    <div>
      <section>
        <Navbar />
      </section>
      <section>
        <AnimationHome />
      </section>
      <section>Paralex</section>
      <section>Hero</section>
      <section>Services</section>
      <section>Portifolio</section>
      <section>Contact</section>
      
    </div>
  );
};

export default App;
