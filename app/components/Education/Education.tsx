import { Card } from '@mui/material';
import React from 'react';

import styles from './Education.module.scss';
import EducationCard from '../Common/EducationCard/EducationCard';
import upgLogo from '../../images/upgLogo.jpg'

const EducationData = [
  {
    institute: 'Usha Pravin Gandhi College of Managements',
    timeFrom: 'June 2013',
    timeTo: 'August 2015',
    degree:
      'B.Sc. Information Technology (Specialization – Software Engineering)',
    logo: upgLogo,
  }
];

const Education = () => {
  
  return (
    <div className={styles['card-container']}>
      <Card variant="outlined">
        <div className={styles['about-container']}>
          <h3 className={styles['about-container-title']}>Education</h3>
          {EducationData.map((value, key) => {
            return <EducationCard key={key} data={value} />;
          })}
        </div>
      </Card>
    </div>
  );
};

export default Education;