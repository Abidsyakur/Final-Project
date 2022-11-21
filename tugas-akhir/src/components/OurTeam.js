import tim from "../assets/tim.png";


const OurTeam = () => {

    return(

        <div className="ourteam">
              <div class="container" >
    <h1 id="header_menu_ourteam">Our TEAM</h1>
      <div class="row  mb-4" id='row_ourteam'>

        <div class="col">
          <div className="fototim">
          <img src={tim}alt="" width="300" id="FotoTim" />
          </div>
          
          <h3 id="header_menu2">Muhammad Abid A Syakur</h3>
        </div>
        <div class="col">
            <div className="fototim">
            <img src={tim}alt="" width="300" />
            </div>
          <h3 id="header_menu2">Dennys Federico Antonika</h3>
        </div>
        <div class="col">
            <div className="fototim">
            <img src={tim}alt="" width="300" />
            </div>
          
          <h3 id="header_menu2">Ibnu Azzam</h3>
        </div>
        

      </div>
       </div>
        </div>
        
  
        
    
    
    );
}

export default OurTeam ;