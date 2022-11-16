import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import Header1 from './components/Header1';
import About from './components/About';
import Menu from './components/Menu';


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



    </div>



    
      
  );
}

export default App;

