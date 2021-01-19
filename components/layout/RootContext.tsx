import React from 'react';
export interface ContextInterface {
  language: string;
  setLanguage?: Function;

}

const context = {
    language: "TH"
} as ContextInterface;
const RootContext = React.createContext(context);
export default RootContext;
