const Footer = () => {
  return (
    <div className="main-Footer">
      <div className="container">
        <div className="row">
          {/*column1*/}
          <div className="col">
            <h4>text</h4>
            <ul className="list-unstyled">
              <li>324-546-0025</li>
              <li>Surabaya, Jawa Timur</li>
              <li>street</li>
            </ul>
          </div>
          {/*column2*/}
          <div className="col">
            <h4>text</h4>
            <ul className="list-unstyled">
              <li>324-546-0025</li>
              <li>Surabaya, Jawa Timur</li>
              <li>street</li>
            </ul>

            {/*column3*/}
            <div className="col">
              <h4>text</h4>
              <ul className="list-unstyled">
                <li>324-546-0025</li>
                <li>Surabaya, Jawa Timur</li>
                <li>street</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} text | All right reserved | Terms
              of Service | privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
