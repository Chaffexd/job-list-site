import React from 'react';
import Jobs from './Jobs';

import classes from './JobList.module.css';

const JobList = () => {
  return (
    <div className={classes.jobsContainer}>
        <Jobs />
    </div>
  );
};

export default JobList;