import React from 'react';
export const InfoContext = React.createContext(
  {
    name: '',
    email: '',
    handleInputChange:()=>{},
    handleSubmit:()=>{},
  } // default value
);
