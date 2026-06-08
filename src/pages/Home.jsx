import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import VisionMission from '../components/VisionMission';
import Academics from '../components/Academics';
import Stats from '../components/Stats';
import SpecialPrograms from '../components/SpecialPrograms';
import PrincipalMessage from '../components/PrincipalMessage';
import EnquiryForm from '../components/EnquiryForm';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <VisionMission />
      <Academics />
      <Stats />
      <SpecialPrograms />
      <PrincipalMessage />
      <EnquiryForm />
    </>
  );
};

export default Home;
