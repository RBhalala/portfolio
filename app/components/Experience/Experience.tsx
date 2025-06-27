import { Card } from '@mui/material';
import React from 'react';

import styles from './Experience.module.scss';
import ExperienceCard from '../Common/ExperianceCard/ExperianceCard';
const NiumLogo = './NiumLogo.png';
const ServifyLogo = './ServifyLogo.png'
const B2xLogo = './B2xLogo.png'

const ExperienceData = {
  Nium_EU: {
    company: 'Nium EU BV',
    logo: NiumLogo,
    country: 'Amsterdam, North Holland, Netherlands',
    positions: [
      {
        title: 'Staff Software Engineer',
        details: [
          `Finalizing feature flag solution to reduce DevOps dependency by 40%, shorten deployment time by 10%, and enable seamless feature toggling.`,
          `Led FX capabilities rollout in APAC, increasing monthly revenue by $30M.`
        ],
        timeFrom: 'August 2023',
        timeTo: 'Present',
      }],
  },
  Nium_IN: {
    company: 'Nium PVT LTD',
    logo: NiumLogo,
    country: 'Mumbai, India',
    positions: [
      {
        title: 'Principal Software Engineer',
        details: [
          `Strategically optimized API performance, resulting in an 80% increase in overall efficiency and a 95% improvement in user experience, ensuring seamless interactions.`,
          `Designed FIFO queue system for payments, increasing volume by 50%, and reducing customer tickets by 40%.`,
          `Built Swift microservices (Lambda based) for rapid financial integrations (MT940 & account statements).`,
          `Migrated MongoDB from 3.3 to 4.2 Atlas for improved data integrity and stability.`
        ],
        timeFrom: 'July 2021',
        timeTo: 'August 2023'
      },
      {
        title: 'Senior Software Engineer',
        details: [
          `Led development of the Payin Module, enabling seamless payment acceptance. Designing and implementation took over several months in close collaboration with a dedicated team.`,
          `Took ownership of a monolithic app, led its transition to microservices under high load, and earned a promotion for the impact.`,
        ],
        timeFrom: 'December 2019',
        timeTo: 'July 2021'
      }
    ],
  },
  Servify: {
    company: 'Servify',
    logo: ServifyLogo,
    country: 'Mumbai, India',
    positions: [
      {
        title: 'Senior Product Engineer',
        details: [
          `Built Trade-In flow for Mobile devices for (Apple, Paytm, Vodafone, and Airtel), increasing revenue by 15%.`,
          `Integrated inventory system with Oracle NetSuite at OnePlus HQ (Shenzhen), improving operational efficiency by 20%.`
        ],
        timeFrom: 'April 2019',
        timeTo: 'December 2019',
      },
      {
        title: 'Product Engineer',
        details:
          [`Developed after-sales service platform for Micromax, adding $2M in revenue, boosting customer satisfaction by 25%`],
        timeFrom: 'April 2018',
        timeTo: 'March 2019',
      },
    ],
  },
  B2x: {
    company: 'B2X Care Solutions',
    logo: B2xLogo,
    country: 'Mumbai, India',
    positions: [
      {
        title: 'Solution Engineer',
        details: [
          `Delivered Google foolproof phone repair system in 60 days, exceeding service goals.`,
          `Engineered call center and FST modules for Google & Amazon.`,
          `Integrated partner portal with Salesforce for improved data flow.`,
          `Onboarded 8 enterprise clients to a new support platform, driving growth.`,
          `Strengthened security across 3 systems and led security workshops.`
        ],
        timeFrom: 'January 2021',
        timeTo: 'March 2021',
      }
    ],
  },
};

const Experience = () => {
  
  return (
    <div className={styles['card-container']}>
      <Card variant="outlined">
        <div className={styles['about-container']}>
          <h3 className={styles['about-container-title']}>Experience</h3>
          {Object.entries(ExperienceData).map(([key, value]) => {
            return <ExperienceCard key={key} data={value} />;
          })}
        </div>
      </Card>
    </div>
  );
};

export default Experience;