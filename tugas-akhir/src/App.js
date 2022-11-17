import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import Header1 from './components/Header1';
import About from './components/About';
import Menu from './components/Menu';
import OurTeam from './components/OurTeam'
import Gallery from './components/Gallery';

function App() {
  return (
    <div>
      {/* Navbar + heeader */}
      <div className='myBG'>
      <NavigationBar />
      <Header1 />
      </div>
      {/* END of nav + header */}

      {/* About section */}
      <div className='AboutUs'>
        <About />
      </div>

      {/* Menu Section */}
      <div className='Menu'>
          <Menu />
      </div>

      {/* Gallery Section */}
      <Gallery />

    </div>



    
      
  );
}

export default App;

