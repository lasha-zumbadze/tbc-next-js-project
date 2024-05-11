import Footer from "@/components/Footer";
import Header from "@/components/Header";

function StoreLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default StoreLayout;
