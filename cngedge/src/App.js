import './App.css';
import Navbar from './components/navbar';
import './components/navbar.css';
import Home from './components/home';
import './components/home.css';
import Product from './components/product';
import './components/product.css';
import './components/background.css';
import './components/faq.css';
import Faq from './components/faq';
import './components/last.css';
import Last from './components/last';
import './components/aboutus.css';
import About from './components/aboutus';
import Contactus from './components/contactus';
import Footer from './components/footer';
import './components/contactus.css';
import './components/footer.css';

function App() {
  return (
    <>
      <div className="big">
          <Navbar/>
        <div className="comps">
          <Home/>
          <Product/>
          <Faq/>
          <Last/>
          <About/>
          <Contactus/>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;