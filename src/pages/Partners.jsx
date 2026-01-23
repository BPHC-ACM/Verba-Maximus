import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/_partners.scss';

const partners = [
  {
    name: 'Modulus',
    logo: '/assets/2026/Partners/modulus.png',
    url: 'https://www.modulushyd.com/',
  },
  // add more partners here
];

const Partners = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="PARTNERS">
      <Header />

      <div className="heading">
        <h1 id="mainheadingev">Partners</h1>
      </div>

      <div className="partners-wrapper">
        <div className="partners-grid glass">
          {partners.map((partner, index) => (
            <div className="partner-card" key={index}>
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-link"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                />
              </a>
              <p>{partner.name}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Partners;
