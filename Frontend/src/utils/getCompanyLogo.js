export const getCompanyLogo = (company) => {
    try {
      return require(`../assets/companyLogos/${company.toLowerCase()}.png`);
    } catch (error) {
      console.error(`Failed to load logo for ${company}, using default logo.`, error);
      return require('../assets/Logo.png');
    }
  };
  