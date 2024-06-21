import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Services from "../../components/services/Services";
import About from "../../components/About";
import Menu from "../../components/menus/MenuContent";
import Visit from "@/components/Visit";
import BlogSection from "@/components/BlogSection";

function Home() {
  return (
    <>
      <Header
        pageClass="home"
        title="KoKeshI"
        subtitle="An Extraordinary Experience"
      />
      <main>
        <About />
        <Menu />
        {/* <Visit /> */}
        {/* <Services /> */}
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
