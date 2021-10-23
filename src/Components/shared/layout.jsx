import Navbar from '../../components/Navbar.js';
import Footer from '../../components/Footer.js';
import "./layout.styles.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
        <main>
          {
            children
          }
        </main>
      <div className="div-lay">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;