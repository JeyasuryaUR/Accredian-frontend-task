import React, { useState } from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import { Divider } from '@mui/material';

function App() {
  

  return (
    <>
      <Header />
      <MainSection />
      <Divider sx={{mt:4}} />
      <Footer />
    </>
  );
}

export default App;
