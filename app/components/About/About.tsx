import { Card } from '@mui/material';
import React from 'react';

import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles['card-container']}>
      <Card variant="outlined">
        <div className={styles['about-container']}>
          <h3 className={styles['about-container-title']}>STAFF SOFTWARE ENGINEER | DELIVERY LEAD | FINTECH & ENTERPRISE SYSTEMS EXPERT
          </h3>
          <p className={styles['about-container-text']}>
          Innovative and results-driven Staff Software Engineer with 9+ years of experience building scalable fintech platforms and enterprise solutions. Proven expertise in leading global cross-functional teams, coaching Agile delivery, and transforming system architecture for high-impact, revenue-generating features. Adept in cloud-native development, delivery operations, microservices architecture, and engineering excellence. Thrive in fast-paced environments with complex compliance and international dependencies.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default About;