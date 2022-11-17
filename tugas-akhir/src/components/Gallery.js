import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Geleri1 from "../assets/geleri1.jpg"
import Geleri2 from "../assets/geleri2.jpg"
import Geleri3 from "../assets/geleri3.jpg"
import Geleri4 from "../assets/geleri4.jpg"
import Geleri5 from "../assets/geleri5.jpg"
import Geleri6 from "../assets/geleri6.jpg"
import Geleri7 from "../assets/geleri7.jpg"



const Gallery = () => {
    return (
        
     <div className="Gall">
    <div class="container">
    <h1 id="header_menu">Gallery</h1>
      <div class="row  mb-4" id='row_gallery'>

        <div class="col">
          <img src={Geleri1}alt="" width="300" />
        </div>
        <div class="col">
          <img src={Geleri2}alt="" width="300" />
        </div>
        <div class="col">
          <img src={Geleri6}alt="" width="300" />
        </div>
        

      </div>
      <div class="row  mb-4">

        <div class="col">
          <img src={Geleri4}alt="" width="300" />
        </div>
        <div class="col">
          <img src={Geleri5}alt="" width="300" />
        </div>
        <div class="col">
          <img src={Geleri3}alt="" width="300" />
        </div>
    
      </div>
       </div>
        
    
    </div>

        
    );
}

export default Gallery ; 