import React, { useRef, useEffect } from 'react';
import companyLogo1 from '../assets/companyLogos/dialog.png'; 
import companyLogo2 from '../assets/Logo.png'; 
import companyLogo3 from '../assets/companyLogos/optum.png';
import companyLogo4 from '../assets/companyLogos/codegen_logo.png';
import companyLogo5 from '../assets/companyLogos/ifs.png'; 
import companyLogo6 from '../assets/companyLogos/creative software.png'; 
import companyLogo7 from '../assets/companyLogos/HCL.png'; 
import companyLogo8 from '../assets/companyLogos/lseg.png'; 
import companyLogo9 from '../assets/companyLogos/mobitel.png'; 
import companyLogo10 from '../assets/companyLogos/orel.png'; 
import companyLogo11 from '../assets/companyLogos/sysco lab.png'; 
import companyLogo12 from '../assets/companyLogos/virtusa.png'; 
import companyLogo13 from '../assets/companyLogos/wavenet.png'; 
import companyLogo14 from '../assets/companyLogos/mas.png'; 
import '../css/JobCategories.css';

const companies = [
  {
    logo: companyLogo1,
    name: "Dialog",
    location: "Sri Lanka",
  },
  {
    logo: companyLogo2,
    name: "SLIBTEC",
    location: "Homagama",
  },
  {
    logo: companyLogo3,
    name: "Optum",
    location: "Sri Lanka",
  },
  {
    logo: companyLogo4,
    name: "Codegen",
    location: "Sri Lanka",
  },
  {
    logo: companyLogo5,
    name: "IFS",
    location: "Sri Lanka",
  },
  {
    logo: companyLogo12,
    name: "Virtusa",
    location: "Sri Lanka",
  },
  {
    logo: companyLogo9,
    name: "Mobitel",
    location: "Sri Lanka",
  },
  {
    logo: companyLogo10,
    name: "Orel IT",
    location: "Sri Lanka",
  },
  {
    logo: companyLogo8,
    name: "LSEG",
    location: "Sri Lanka",
  },
  {
    logo: companyLogo7,
    name: "HCL",
    location: "Sri Lanka",
  },
  {
    logo: companyLogo6,
    name: "Creative Software",
    location: "Sri Lanka",
  },
  {
    logo: companyLogo13,
    name: "Wavenet",
    location: "Sri Lanka",
  },
  {
    logo: companyLogo14,
    name: "MAS",
    location: "Sri Lanka",
  },
  {
    logo: companyLogo11,
    name: "Sysco Lab",
    location: "Sri Lanka",
  },
  
  // Add more companies as needed
];

const JobCategories = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth / 2;
      const animationDuration = scrollWidth / 50; // Adjust speed as needed

      scrollContainer.style.setProperty('--scroll-width', `${scrollWidth}px`);
      scrollContainer.style.setProperty('--animation-duration', `${animationDuration}s`);
    }
  }, []);

  return (
    <section className="job-categories">
      <h2>TOP COMPANIES</h2>
      <div className="companies-container">
        <div className="companies-list" ref={scrollRef}>
          {[...companies, ...companies].map((company, index) => (
            <div key={index} className="company-item">
              <img src={company.logo} alt={`${company.name} logo`} className="company-logo" />
              <div className="company-info">
                <h3 className="company-name">{company.name}</h3>
                <p className="company-location">{company.location}</p>
                <button className="open-positions-button">Open Positions</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;