import React from 'react';
import { useNavigate } from 'react-router-dom';
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
import '../css/AdminRegisterCompany.css'; 

const Employers = () => {
  const navigate = useNavigate();

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
    <div className="register-company-container">
      <h2>Registered Companies</h2>
      <button className="back-button" onClick={() => navigate('/admin_dashboard')}>Back to Dashboard</button>
      <table className="employers-table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Company Name</th>
            <th>Website</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employers.map((employer, index) => (
            <tr key={index}>
              <td><img src={employer.logo} alt={employer.name} className="employer-logo" /></td>
              <td>{employer.name}</td>
              <td><a href={employer.link} target="_blank" rel="noopener noreferrer">{employer.link}</a></td>
              <td>
                <button className="update-button">Update</button>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employers;
