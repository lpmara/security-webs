import React, { useEffect, useState } from 'react';
import Navbar from '../navbar';
import RootContext, { ContextInterface } from './RootContext';

interface changeLanguageInterface {
  changeLanguage: Function;
}

export const Index = ({changeLanguage}: changeLanguageInterface) => {
  const [language, setLanguage] = useState("TH");

  changeLanguage(language);
  const context: ContextInterface = {
    language: language,
    setLanguage: setLanguage
  };


  return (
    <RootContext.Provider value={context}>
      <Navbar></Navbar>
    </RootContext.Provider>
  );
};

export default Index;
