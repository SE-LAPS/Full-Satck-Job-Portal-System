import React from 'react';
import ifsLogo from '../assets/companyLogos/ifs.png';
import accentureLogo from '../assets/companyLogos/accenture.png';
import codegenLogo from '../assets/companyLogos/codegen_logo.png';
import deloitteLogo from '../assets/companyLogos/deloitte.png';
import infosysLogo from '../assets/companyLogos/infosys.png';
import synopsysLogo from '../assets/companyLogos/synopsys.png';
import optumLogo from '../assets/companyLogos/optum.png';
import sltLogo from '../assets/companyLogos/slt.png';
import orelLogo from '../assets/companyLogos/orel.png';
import oracleLogo from '../assets/companyLogos/oracle.png';
import myntraLogo from '../assets/companyLogos/myntra.png';
import LogoLogo from '../assets/Logo.png';

const Employers = () => {
  const employers = [
    { name: 'IFS', logo: ifsLogo, link: 'https://www.ifs.com/' },
    { name: 'Accenture', logo: accentureLogo, link: 'https://www.accenture.com/us-en' },
    { name: 'CodeGen', logo: codegenLogo, link: 'https://codegen.co.uk/' },
    { name: 'Deloitte', logo: deloitteLogo, link: 'https://www2.deloitte.com/us/en.html' },
    { name: 'Infosys', logo: infosysLogo, link: 'https://www.infosys.com/' },
    { name: 'Synopsys', logo: synopsysLogo, link: 'https://www.synopsys.com/' },
    { name: 'Optum', logo: optumLogo, link: 'https://www.optum.com/en/' },
    { name: 'SLT Mobitel', logo: sltLogo, link: 'https://www.mobitel.lk/' },
    { name: 'OrelIT', logo: orelLogo, link: 'https://www.orelit.com/' },
    { name: 'Oracle', logo: oracleLogo, link: 'https://www.oracle.com/' },
    { name: 'Myntra', logo: myntraLogo, link: 'https://www.myntra.com/' },
    { name: 'SLIBTEC', logo: LogoLogo, link: 'https://slibtec.gov.lk/' },
  ];

  return (
    <div className="employers-container">
      <h2>Employers</h2>
      <div className="employers-grid">
        {employers.map((employer, index) => (
          <div key={index} className="employer-card">
            <img src={employer.logo} alt={employer.name} className="employer-logo" />
            <h3>{employer.name}</h3>
            <a href={employer.link} className="read-more">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employers;
