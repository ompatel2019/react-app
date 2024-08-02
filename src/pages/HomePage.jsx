import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards';
import JobsListings from '../components/JobsListings';
import ViewAllJobs from '../components/ViewAllJobs';

export const HomePage = () => {
  return (
    <> 
    <Hero/>
    <HomeCards/>
    <JobsListings isHome={true}/>
    <ViewAllJobs/>
    </>
  )
}

export default HomePage