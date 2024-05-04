import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Services from "../../components/Services";
import About from "../../components/About";
import Menu from "../../components/MenuContent";

function Home() {
  return (
    <>
      <Header
        pageClass="home"
        title="The Venue is"
        subtitle="An Extraordinary Experience"
      />
      <main>
        <About />
        <Services />
        <Menu />
      </main>
      <Footer />
    </>
  );
}

export default Home;
