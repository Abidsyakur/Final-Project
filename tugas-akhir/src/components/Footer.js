
const Footer = () => {
  return (
      <div className="footer">
          <div className="container" id="footer_c">
              <div className="row">
              {/*column1*/}
              <div className="col">
                  <h4>Informasi Kontak</h4>
                  <ul className="list-unstyled">
                      <li>Harap dicatat : Kami akan segera menghubungi anda, biasanya 5-10 menit lamanya.
                          Perhatikan juga jika memesan pesanan pada hari minggu,
                          mungkin kami hanya akan membalas pada hari masuk saja. </li>
                  </ul>
              </div>
              {/*column2*/}
              <div className="col">
                  <h4>Info Kami</h4>
                  <ul className="list-unstyled">
                      <li>Jl. Ahmad Yani Surabaya XII No.5,Surabaya
                          60112
                          Indonesia
                      </li>
                      <li>Surabaya, Jawa Timur</li>
                      <li>+62-852-3466-5782</li>
                  </ul>
              </div>
                  {/*column3*/}
                  <div className="col">
                      <h4>Connect With Us</h4>
                      <ul className="list-unstyled">
                          <li>You don't need to outright say, "our mission is ___", but you should convey the mission of your business
                              in you About Us copy. this is key for attracting talent, as well as leads that have Corporate Social
                              Responsibility (CSR) goals.
                          </li>
                      </ul>
                  </div>
              
              <hr />
              <div className="row">
                  <p className="col-sm">
                      &copy;{new Date().getFullYear()} text | All right reserved | Terms of Service | privacy
                  </p>
              </div>
          </div>
          </div>
          </div>
          );
}

          export default Footer;