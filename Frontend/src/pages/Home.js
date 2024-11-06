import React from 'react';
import SearchForm from '../components/SearchForm';
import JobCategories from '../components/JobCategories';
import JobListing from '../components/JobListing';
import HowWeWork from '../components/HowWeWork';
import Testimonial from '../components/Testimonial';
import GetMobileApps from '../components/GetMobileApps';

const Home = ({ isLoggedIn, user }) => {
  return (
    <div className="home">
      <SearchForm />
      <JobCategories />
      <JobListing />
      <HowWeWork />
      <Testimonial />
      <GetMobileApps />
      {isLoggedIn && <p>Welcome, {user.name}!</p>}
    </div>
  );
};

export default Home;