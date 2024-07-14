import React from 'react';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobsListings from './components/JobsListings';
import ViewAllJobs from './components/ViewAllJobs';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <HomeCards />
      <JobsListings />
      <ViewAllJobs />
    </>
  );
};

export default App;
