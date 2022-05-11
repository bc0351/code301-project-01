import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
