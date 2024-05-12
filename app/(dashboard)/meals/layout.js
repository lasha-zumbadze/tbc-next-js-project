import Footer from "@/components/Footer";
import Header from "@/components/Header";

function StoreLayout({ children }) {
  return (
    <div>
      <Header pageClass="menu" title="The Venue" subtitle="Meals" />
      {children}
      <Footer />
    </div>
  );
}

export default StoreLayout;
