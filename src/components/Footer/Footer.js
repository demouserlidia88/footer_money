import React, { Component } from 'react';
import './Footer.css';
import Modal from '../Modal/Modal';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <footer>
        <button type="button" onClick={this.showModal}>
          Apasa aici
        </button>
        <div className="footer">
          <div className="sb_footer section_padding">
            <div className="sb_footer-links">
              <div className="sb_footer-links-div">
                <h4>For Business</h4>
                <a href="/employer">
                  <p>Employer</p>
                </a>
                <a href="/healthplan">
                  <p>Health Plan</p>
                </a>
                <a href="/individual">
                  <p>Individual</p>
                </a>
              </div>
              <div className="sb_footer-links_div">
                <h4>Resources</h4>
                <a href="/resource">
                  <p>Resource center</p>
                </a>
                <a href="/resource">
                  <p>Testiomonials</p>
                </a>
                <a href="/resource">
                  <p>STV</p>
                </a>
              </div>
              <div className="sb_footer-links_div">
                <h4>Partners</h4>
                <a href="/employer">
                  <p>Swing Tech</p>
                </a>
              </div>
              <div className="sb_footer-links_div">
                <h4>Company</h4>
                <a href="/about">
                  <p>About</p>
                </a>
                <a href="/press">
                  <p>Press</p>
                </a>
                <a href="/career">
                  <p>Career</p>
                </a>
                <a href="/contact">
                  <p>Contact</p>
                </a>
              </div>
              <div className="sb_footer-links_div">
                <h4>Coming soon on</h4>
                <div className="socialmedia">
                  <p>
                    <img src="" alt="" />
                  </p>
                  <p>
                    <img src="" alt="" />
                  </p>
                  <p>
                    <img src="" alt="" />
                  </p>
                  <p>
                    <img src="" alt="" />
                  </p>
                </div>
              </div>
            </div>

            <hr></hr>

            <div className="sb_footer-below">
              <div className="sb_footer-copyright">
                <p>@{new Date().getFullYear()} CodeInn. All ringt reserved.</p>
              </div>
              <div className="sb_footer-below-links">
                <a href="/terms">
                  <div>
                    <p>Terms & Conditions</p>
                  </div>
                </a>
                <a href="/privacy">
                  <div>
                    <p>Privacy</p>
                  </div>
                </a>
                <a href="/security">
                  <div>
                    <p>Security</p>
                  </div>
                </a>
                <a href="/cookie">
                  <div>
                    <p>Cookie Declaration</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <h4>The project was made by&#8758;</h4>
          <ul>
            {' '}
            <li>
              <img src="./images/Ioana.png" alt="Team leader" />
              <div className="status">
                <span className="name">Marius Birsan</span>
                <span className="position">Team Leader&#44; web developer</span>
                <div>
                  <a href="https://github.com/curelusaioana29">
                    <svg>
                      <use href="images\Cristian.png"></use>
                    </svg>
                  </a>
                  <a href="">
                    <svg>
                      <use href="./images/filmoteka-icons.svg#icon-telegram"></use>
                    </svg>
                  </a>
                  <a href="">
                    <svg>
                      <use href="./images/filmoteka-icons.svg#icon-linkedin"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </Modal>
      </footer>
    );
  }
}

export default Footer;
