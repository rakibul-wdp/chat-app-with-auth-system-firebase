import React from 'react';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className='footer footer-center p-4 bg-base-300 text-base-content absolute bottom-0'>
      <div>
        <p>Copyright © {date} - All right reserved by ACME Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
