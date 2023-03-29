import React from 'react';
import data from '../../../data.json';

import classes from './Jobs.module.css';

const Jobs = () => {
  return (
    <>
        {data.map(jobItem => (
            <div key={jobItem.id}>
                <div className={classes.jobs}>
                    <div className={classes.jobContainer}>
                        <div className={classes.companyLogoContainer}>
                            <img src={jobItem.logo} alt="Company logo" />
                        </div>
                        <div>
                            <span>{jobItem.company}</span>
                            <span>{jobItem.new}</span>
                            <span>{jobItem.new}</span>
                            <h3>{jobItem.position}</h3>
                            <span>{jobItem.postedAt}</span>
                            <span>{jobItem.contract}</span>
                            <span>{jobItem.location}</span>
                        </div>
                    </div>
                    <div className={classes.jobInfoContainer}>
                        <span className={classes.jobInfo}>{jobItem.role}</span>
                        <span className={classes.jobInfo}>{jobItem.level}</span>
                        {jobItem.languages.map((language, index) => (
                            <span key={index} className={classes.jobInfo}>{language}</span>
                        ))}
                    </div>
                </div>
            </div>
        ))}
    </>
  );
};

export default Jobs;