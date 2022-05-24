import React from 'react';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

const Layout = ({ children }) => {
  

  const absolutePosition = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  };

  return (
    <>
      <Helmet>
        <title>Cars</title>
      </Helmet>
      <main>
          <div>{children}</div>
        
      </main>
    </>
  );
};

export default Layout;
