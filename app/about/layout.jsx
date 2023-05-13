import React from 'react';

const AboutLayout = ({children}) => {
  return (
    <>
      <div>
        <h1 className="">this is about layout</h1>
        {children}
      </div>
    </>
  );
}

export default AboutLayout;