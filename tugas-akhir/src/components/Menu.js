import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import gal1 from "../assets/gal1.jpg";
import gal2 from "../assets/gal2.jpg";
import gal3 from "../assets/gal3.jpg";
import gal4 from "../assets/gal4.jpg";
import gal6 from "../assets/gal6.jpg";
import gal7 from "../assets/gal7.jpg";
import min1 from "../assets/min1.jpg";
import min2 from "../assets/min2.jpg";
import min3 from "../assets/min3.jpg";
import min4 from "../assets/min4.jpg";
import min5 from "../assets/min5.jpg";
import min6 from "../assets/min6.jpg";

const Menu = () => {
  return (
    <div className="Menu1">
      <div className="Container" id="c_menu1">
        <h1 id="header_menu">MENU</h1>
        <div className="row" id="menu">
          <div id="col1" className="col">
            <Card className="Card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={gal1} height="300" />
              <Card.Body className="CardBody">
                <Card.Title>Souffle Pancake</Card.Title>
                <Card.Text>
                  Pancake merupakan salah satu cemilan populer karena rasanya
                  yang manis dan teksturnya yang lembut.
                </Card.Text>
                <Button id="tombol_menu">Order Sekarang</Button>
              </Card.Body>
            </Card>
          </div>
          <div id="col1" className="col">
            <Card className="Card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={gal2} height="300" />
              <Card.Body className="CardBody">
                <Card.Title>Chicken Ball</Card.Title>
                <Card.Text>
                  Ayam merupakan bahan makanan yang sangat diminati dan sering
                  diolah menjadi bermacam-macam masakan dan camilan tak
                  terkecuali chicken balls ini.
                </Card.Text>
                <Button id="tombol_menu">Order Sekarang</Button>
              </Card.Body>
            </Card>
          </div>
          <div id="col1" className="col">
            <Card className="Card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={gal3} height="300" />
              <Card.Body className="CardBody">
                <Card.Title>Dimsum</Card.Title>
                <Card.Text>
                  Siomai umumnya terbuat dari bungkusan tepung gandum tipis yang
                  diisi dengan daging. Di Tiongkok, daging untuk isian siomai
                  umumnya menggunakan daging babi dan udang.
                </Card.Text>
                <Button id="tombol_menu">Order Sekarang</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row pt-5" id="menu">
          <div id="col1" className="col">
            <Card className="Card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={gal4} height="300" />
              <Card.Body className="CardBody">
                <Card.Title>Potato Crispy</Card.Title>
                <Card.Text>
                  Kentang potong yang melalui tahap penggorengan khusus oleh
                  minyak dan mentega belgia.
                </Card.Text>
                <Button id="tombol_menu">Order Sekarang</Button>
              </Card.Body>
            </Card>
          </div>
          <div id="col1" className="col">
            <Card className="Card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={gal6} height="300" />
              <Card.Body className="CardBody">
                <Card.Title>Long Sushi</Card.Title>
                <Card.Text>
                  Sushi pada dasarnya beras yang diberi cuka disajikan dengan
                  ikan laut di atasnya, atau campuran keduanya. Dibalut dengan
                  nori yang panjang
                </Card.Text>
                <Button id="tombol_menu">Order Sekarang</Button>
              </Card.Body>
            </Card>
          </div>
          <div id="col1" className="col">
            <Card className="Card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={gal7} height="300" />
              <Card.Body className="CardBody">
                <Card.Title>Corn Dog</Card.Title>
                <Card.Text>
                  Corn dog juga memiliki variasi balutan tepung dan saus. Cara
                  membuat corndog sosis mozzarella adalah dengan dilapisi tepung
                  roti halus, tepung panko kasar, atau tepung panko berwarna
                  oranye.
                </Card.Text>
                <Button id="tombol_menu">Order Sekarang</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row pt-5" id="menu">
          <div id="col1" className="col">
            <Card className="Card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={min1} height="300" />
              <Card.Body className="CardBody">
                <Card.Title>Matcha Boba</Card.Title>
                <Card.Text>
                  Jangan lupa sajikan menu minuman untuk menemani perayaan tahun
                  baru Ibu dan keluarga. Matcha Latte Boba bisa menjadi pilihan
                </Card.Text>
                <Button id="tombol_menu">Order Sekarang</Button>
              </Card.Body>
            </Card>
          </div>
          <div id="col1" className="col">
            <Card className="Card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={min2} height="300" />
              <Card.Body className="CardBody">
                <Card.Title>Matcha</Card.Title>
                <Card.Text>
                  Matcha latte dibuat dengan bahan dasar bubuk matcha yang
                  dikocok atau dicampur dengan air panas, lalu dituang dengan
                  froth milk atau susu yang sudah dipanaskan dan berbuih seperti
                  menyajikan latte pada umumnya.
                </Card.Text>
                <Button id="tombol_menu">Order Sekarang</Button>
              </Card.Body>
            </Card>
          </div>
          <div id="col1" className="col">
            <Card className="Card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={min3} height="300" />
              <Card.Body className="CardBody">
                <Card.Title>Coffe MilkShake</Card.Title>
                <Card.Text>
                  Tak cuma kopi hitam atau kopi susu saja, banyak variasi menu
                  kopi kekinian yang memakai topping tambahan guna menambah cita
                  rasa, Kopi Milkshake contohnya
                </Card.Text>
                <Button id="tombol_menu">Order Sekarang</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row pt-5" id="menu">
          <div id="col1" className="col">
            <Card className="Card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={min4} height="300" />
              <Card.Body className="CardBody">
                <Card.Title>Lemon Mojito</Card.Title>
                <Card.Text>
                  Mojito merupakan sajian minuman beralkohol asal Kuba yang juga
                  biasanya menggunakan bahan-bahan segar
                </Card.Text>
                <Button id="tombol_menu">Order Sekarang</Button>
              </Card.Body>
            </Card>
          </div>
          <div id="col1" className="col">
            <Card className="Card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={min5} height="300" />
              <Card.Body className="CardBody">
                <Card.Title>Watermelon Mojito</Card.Title>
                <Card.Text>
                  Rasanya gak perlu dipertanyakan lagi. Ditambah dengan segar
                  dan manisnya semangka yang dipadukan dengan soda
                </Card.Text>
                <Button id="tombol_menu">Order Sekarang</Button>
              </Card.Body>
            </Card>
          </div>
          <div id="col1" className="col">
            <Card className="Card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={min6} height="300" />
              <Card.Body className="CardBody">
                <Card.Title>Boba Tea</Card.Title>
                <Card.Text>
                  Minuman boba berasal dari Taiwan dan dikenal dengan nama
                  zenzhu naicha atau susu teh dengan bola tapioka. Di Indonesia,
                  minuman ini terkenal dengan sebutan bubble tea.
                </Card.Text>
                <Button id="tombol_menu">Order Sekarang</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
