import React, { Component } from 'react';
import LandingHeader from '../../components/LandingHeader/LandingHeader';
import Footer from '../../components/Footer/Footer';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <LandingHeader/>
        <section className="section-1">
            <div className="row">
                <div className="home-texts">
                    <h1>My Diary</h1>
                    <p>Pen down your thoughts and feelings! What more? Its free!</p>
                    <a href="/signup" id="bigRegisterBtn"><span>Get Started</span></a>
                </div>
            </div>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default Home;
