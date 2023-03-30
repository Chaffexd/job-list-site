import React from 'react';
import classes from './Jobs.module.css';

const Jobs = ({ jobItem, handleFilterClick }) => {
  // We store the passed down function in another function to use
  const handleClick = (filter) => {
    handleFilterClick(filter);
  };

  // We use index as a key to refer to where it is to not have a react error
  return (
    <div className={`${classes.jobs} ${jobItem.featured ? classes.featuredJob : ''}`}>
      <div className={classes.jobContainer}>
        <div className={classes.companyLogoContainer}>
          <img src={jobItem.logo} alt="Company logo" />
        </div>
        <div className={classes.companyInfo}>
          <div className={classes.newFeatured}>
            <h3 className={classes.company}>{jobItem.company}</h3>
            {jobItem.new && <span className={classes.new}>NEW!</span>}
            {jobItem.featured && <span className={classes.featured}>FEATURED</span>}
          </div>
          <a href="/" className={classes.position}>
            {jobItem.position}
          </a>
          <div className={classes.metaData}>
            <span className={classes.metaInfo}>{jobItem.postedAt}</span>
            <span className={classes.metaInfo}>{jobItem.contract}</span>
            <span className={classes.metaInfo}>{jobItem.location}</span>
          </div>
        </div>
      </div>
      <div className={classes.jobInfoContainer}>
        <button className={classes.jobInfo} onClick={() => handleClick(jobItem.role)}>
          {jobItem.role}
        </button>
        <button className={classes.jobInfo} onClick={() => handleClick(jobItem.level)}>
          {jobItem.level}
        </button>
        {jobItem.languages.map((language, index) => (
          <button
            key={index}
            className={classes.jobInfo}
            onClick={() => handleClick(language)}
          >
            {language}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Jobs;