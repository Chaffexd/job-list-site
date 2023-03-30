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
                                <h3 className={classes.company}>{jobItem.company}</h3>
                                {jobItem.new ?<span className={classes.new}>NEW!</span> : null}
                                {jobItem.featured ?<span className={classes.featured}>FEATURED</span> : null}
                            </div>
                            <a href='/' className={classes.position}>{jobItem.position}</a>
                            <div className={classes.metaData}>
                                <span className={classes.metaInfo}>{jobItem.postedAt}</span>
                                <span className={classes.metaInfo}>{jobItem.contract}</span>
                                <span className={classes.metaInfo}>{jobItem.location}</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.jobInfoContainer}>
                        <button className={classes.jobInfo}>{jobItem.role}</button>
                        <button className={classes.jobInfo}>{jobItem.level}</button>
                        {jobItem.languages.map((language, index) => (
                            <button key={index} className={classes.jobInfo}>{language}</button>
                        ))}
                    </div>
                </div>
            </div>
        ))}
    </>
  );
};

export default Jobs;