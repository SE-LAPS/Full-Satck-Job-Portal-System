import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from './components/loader/Loader';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';
import SearchForm from './components/SearchForm';
import JobListing from './components/JobListing';
import JobCategories from './components/JobCategories';
import HowWeWork from './components/HowWeWork';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import SearchJobs from './pages/SearchJobs';
import JobAlerts from './pages/job_alert';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import JobDetails from './components/JobDetails';
import ApplyJobs from './pages/ApplyJobs';
import About from './pages/About';
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import PostJobForm from './components/PostJobForm';
import Employers from './pages/Employee';
import ViewJobDetails from './pages/ViewJobDetails';
import WantJob from './pages/WantJob';
import Dashboard from './components/Dashboard';
import JobPositionTable from './components/JobPositionTable';
import ApplyJobHistory from './components/ApplyJobHistory';
import GetMobileApps from './components/GetMobileApps';
import ManageJobs from './components/ManageJobs';
import ChatBotUI from './components/ChatBotUI'; 
import Resume from './pages/Resume';
import UserProfile from './pages/UserProfile';
import EditProfile from './pages/EditProfile';
import HelpDesk from "./components/HelpDesk";

import AdminDashboard from './components/AdminDashboard';
import AdminJobCategory from './components/AdminJobCategory'; 
import AdminRegisterCompany from './components/AdminRegisterCompany';
import LoginMembers from './components/LoginMembers';
import RegisteredMembers from './components/RegisteredMembers';
import UpdateUser from './components/UpdateUser';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';

import logoIcon from './assets/22.png';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [chatVisible, setChatVisible] = useState(false);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };
    fakeDataFetch();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const toggleChatVisibility = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setChatVisible(prev => !prev);
  };

  return (
    <div className="app">
      <SideNav />
      <TopNav />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={
          <>
            <SearchForm />
            <JobCategories />
            <JobListing />
            <HowWeWork />
            <Testimonial />
            <GetMobileApps />
          </>
        } />
        <Route path="/search" element={<SearchJobs />} />
        <Route path="/job_alert" element={<JobAlerts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/job" element={<JobDetails />} />
        <Route path="/apply_job" element={<ApplyJobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/post-job" element={<PostJobForm />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/view-job-details" element={<ViewJobDetails />} />
        <Route path="/job-positions" element={<JobPositionTable />} />
        <Route path="/apply-job-history" element={<ApplyJobHistory/>} />
        <Route path="/want_job" element={<WantJob />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-jobs" element={<ManageJobs />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/user_profile" element={<UserProfile />} />
        <Route path="/edit_profile" element={<EditProfile />} />
        <Route path="/admin_dashboard" element={<AdminDashboard />} />
        <Route path="/adminJobCategory" element={<AdminJobCategory />} />
        <Route path="/register-company" element={<AdminRegisterCompany />} />
        <Route path="/login-members" element={<LoginMembers />} />
        <Route path="/register-members" element={<RegisteredMembers />} />
        <Route path="/admin_dashboard/update_user/:id" element={<UpdateUser />} />
        <Route path="/help" element={<HelpDesk />}/>

      </Routes>
      <Footer />
      <div className="chat-icon" onClick={toggleChatVisibility}>
        <img src={logoIcon} alt="Chatbot" />
      </div>
      <ChatBotUI isVisible={chatVisible} onClose={() => setChatVisible(false)} />
    </div>
  );
};

export default App;
