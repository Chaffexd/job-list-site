import React, { useState } from 'react';
import Jobs from './Jobs';
import data from '../../../data.json';
import classes from './JobList.module.css';

const JobList = () => {
  // Initialises state for the selected filters to an empty array so I can store multiple
  const [selectedFilters, setSelectedFilters] = useState([]);

  // Filter is the reference to clicking on the filter buttons
  // We create a new array to ensure it's an up to date snapshot
  const handleFilterClick = (filter) => {
    setSelectedFilters([...selectedFilters, filter]);
  };

  // this is the initial data from the json
  let filteredData = data;

  // This then updates when a filter is selected, so if a filter is selected in tags, it will return
  // items that include the filter selected
  if (selectedFilters.length > 0) {
    filteredData = data.filter((jobItem) => {
      const tags = [jobItem.role, jobItem.level, ...jobItem.languages];
      return selectedFilters.every((filter) => tags.includes(filter));
    });
  }

  // selectedFilters.length will only be present when greater than 0
  return (
    <div className={classes.jobListContainer}>
      <div className={classes.filterBar}>
        {selectedFilters.length > 0 && (
          <div className={classes.selectedFilters}>
            {selectedFilters.map((filter) => (
              <div key={filter} className={classes.selectedFilter}>
                <p className={classes.filterText}>{filter}</p>
                <button className={classes.filteredButton} onClick={() => setSelectedFilters(selectedFilters.filter(f => f !== filter))}>
                  <span className={classes.filterCloseIcon}>X</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={classes.jobsContainer}>
        {filteredData.map((jobItem) => (
          <Jobs
            key={jobItem.id}
            jobItem={jobItem}
            handleFilterClick={handleFilterClick}
          />
        ))}
      </div>
    </div>
  );
};

export default JobList;
