import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <footer className="container py-5">
              <div className="row">
                <div className="col-12 col-md">
                  <p>Guild Code LTD</p>
                  <small className="d-block mb-3 text-muted">&copy; 2021</small>
                </div>
                <div className="col-6 col-md">
                  <h5>Careers</h5>
                  <ul className="list-unstyled text-small">
                    <li><a className="link-secondary" href="#">UI/UX Designers</a></li>
                    <li><a className="link-secondary" href="#">Frontend Engineers</a></li>
                    <li><a className="link-secondary" href="#">Backend Engineers</a></li>
                    <li><a className="link-secondary" href="#">Fullstack Engineers</a></li>
                    <li><a className="link-secondary" href="#">Graphics/Creative Designers</a></li>
                    <li><a className="link-secondary" href="#">Photography/Video Master</a></li>
                  </ul>
                </div>
                <div className="col-6 col-md">
                  <h5>Our Departments</h5>
                  <ul className="list-unstyled text-small">
                    <li><a className="link-secondary" href="#">Marketing</a></li>
                    <li><a className="link-secondary" href="#">Human Resource</a></li>
                    <li><a className="link-secondary" href="#">Sales</a></li>
                    <li><a className="link-secondary" href="#">Engineers</a></li>
                  </ul>
                </div>
                <div className="col-6 col-md">
                  <h5>Partners/Investors</h5>
                  <ul className="list-unstyled text-small">
                    <li><a className="link-secondary" href="#">Swahilipot Hub</a></li>
                    <li><a className="link-secondary" href="#">Seacom</a></li>
                    <li><a className="link-secondary" href="#">Mombasa County Government</a></li>
                    <li><a className="link-secondary" href="#">Qatar Airways</a></li>
                  </ul>
                </div>
                <div className="col-6 col-md">
                  <h5>About</h5>
                  <ul className="list-unstyled text-small">
                    <li><a className="link-secondary" href="#">Team</a></li>
                    <li><a className="link-secondary" href="#">Locations</a></li>
                    <li><a className="link-secondary" href="#">Privacy</a></li>
                    <li><a className="link-secondary" href="#">Terms</a></li>
                  </ul>
                </div>
              </div>
            </footer>
          );
    }
}

export default Footer;