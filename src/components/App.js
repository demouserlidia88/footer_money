import React, { Component } from 'react';
import Footer from './Footer/Footer';

class Dashboard extends Component {
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
      <main>
        <h1>React Modal primapagina</h1>
        <Footer></Footer>
      </main>
    );
  }
}

export default Dashboard;
