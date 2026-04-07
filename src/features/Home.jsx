import React from 'react';
import './Home.css';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Technologies from './Technologies';
import WorkingProcess from './WorkingProcess';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import CallToAction from './CallToAction';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Technologies />
      <WorkingProcess />
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Home;
