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
                        <div className={classes.companyInfo}>
                            <div className={classes.newFeatured}>
                                <h3>{jobItem.company}</h3>
                                {jobItem.new ?<span>NEW!</span> : null}
                                {jobItem.featured ?<span>FEATURED!</span> : null}
                            </div>
                            <h3>{jobItem.position}</h3>
                            <div className={classes.metaData}>
                                <span>{jobItem.postedAt}</span>
                                <span>{jobItem.contract}</span>
                                <span>{jobItem.location}</span>
                            </div>
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