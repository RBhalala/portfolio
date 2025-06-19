import { Card } from '@mui/material';
import React from 'react';

import styles from './Experience.module.scss';
import ExperienceCard from '../Common/ExperianceCard/ExperianceCard';
import NiumLogo from '../../images/NiumLogo.png'
import ServifyLogo from '../../images/ServifyLogo.png'
import B2xLogo from '../../images/B2xLogo.png'

const ExperienceData = {
  Onramper: {
    company: 'Nium',
    logo: NiumLogo,
    country: 'Amsterdam, North Holland, Netherlands',
    positions: [
      {
        title: 'Staff Software Engineer',
        details:
          "Contributed to the development and enhancement of the Linked Card feature within our flagship product, a staple in the industry for over two decades. Focused on optimizing code quality and implementing best practices to ensure the feature's reliability, security, and maintainability. Played a pivotal role in integrating Anti-Money Laundering (AML) and compliance check functionalities into our product, ensuring full regulatory compliance and safeguarding against fraudulent activitiesContributed to the development and enhancement of the Linked Card feature within our flagship product, a staple in the industry for over two decades. Focused on optimizing code quality and implementing best practices to ensure the feature's reliability, security, and maintainability. Played a pivotal role in integrating Anti-Money Laundering (AML) and compliance check functionalities into our product, ensuring full regulatory compliance and safeguarding against fraudulent activities",
        timeFrom: 'August 2023',
        timeTo: 'Present',
      },
      {
        title: 'Principal Software Engineer',
        details: `Strategically optimized API performance, resulting in an 80% increase in overall efficiency and a 95% improvement in user experience, ensuring seamless interactions.
Designed and implemented a FIFO queue system for transaction processing, ensuring adherence to SQS standards for seamless execution of payment instructions. This advancement led to a notable 50% surge in transaction volume, significantly boosting client satisfaction, while also reducing customer success tickets by 40% and improving operational efficiency.
Pioneered the development of Swift microservices for rapid integrations, efficiently managing teams, sprints, and releases to meet project milestones. Developed functionalities to generate MT940 or other file formats to send account statements & reports using the Swift network.
Successfully transitioned existing monolithic services to a microservices architecture, resulting in a 30% increase in system agility, scalability, and resilience, paving the way for future growth. Implemented a deployment strategy to achieve zero downtime for microservices deployments, ensuring uninterrupted service availability and robustness.
Managed the migration of MongoDB from version 3.3 to 4.2 Atlas, ensuring a smooth transition and leveraging new features to enhance performance and scalability.`,
        timeFrom: 'July 2021',
        timeTo: 'August 2023'
      },
      {
        title: 'Senior Software Engineer',
        details: `Developed the Payin Module for the company, a pivotal component facilitating seamless payment acceptance. This endeavor, achieved through collaborative efforts within a dedicated team, took several months to conceptualize, design, and implement.
Transitioned to a new role by taking ownership of a monolithic application within the organization, inheriting responsibilities from another team. As the volume of transactions increased, the system encountered numerous challenges. Recognizing the need for enhancement, I spearheaded efforts to improve system functionality and scalability.
Assumed the role of Technical Owner for the product, guiding the technological evolution of the system. By addressing critical issues and implementing strategic enhancements, I played a key role in ensuring the system's resilience and adaptability to meet evolving business needs.`,
        timeFrom: 'December 2019',
        timeTo: 'July 2021'
      }
    ],
  },
  SyscoLabs: {
    company: 'Servify',
    logo: ServifyLogo,
    country: 'Mumbai, India',
    positions: [
      {
        title: 'Senior Product Engineer',
        details: `Developed a streamlined Trade-In flow for mobile devices, seamlessly integrating it with prominent partners such as Apple, Paytm, Vodafone, and Airtel, resulting in a notable 15% increase in company revenue. Leveraged partner feedback to continuously improve the system's functionality, fostering trust among customers and partners and leading to the acquisition of new clients. Implemented a program with a two-week product deployment turnaround time for incorporating partner feedback and new requests.

Facilitated collaboration by traveling to Shenzhen to OnePlus Headquarters, where I successfully integrated our Inventory system with Oracle NetSuite, resulting in a remarkable 20% increase in operational efficiency and a 30% improvement in inventory accuracy. This integration significantly reduced manual work and minimized delays in updating stock information, empowering managers with real-time access to inventory stock on their screens for efficient planning.`,
        timeFrom: 'April 2019',
        timeTo: 'December 2019',
      },
      {
        title: 'Product Engineer',
        details:
          'Engineered an innovative after-sale service platform for Micromax, incorporating an Extended Warranty feature, resulting in a significant addition of $2 million in company revenue. This initiative also led to a 25% increase in customer satisfaction ratings and a 20% decrease in service-related inquiries, showcasing the impact of technological solutions on business growth and customer experience.',
        timeFrom: 'April 2018',
        timeTo: 'March 2019',
      },
    ],
  },
  Ifs: {
    company: 'B2X Care Solutions',
    logo: B2xLogo,
    country: 'Mumbai, India',
    positions: [
      {
        title: 'Solution Engineer',
        details: `Secured the Google phone repair contract, necessitating the creation of a foolproof system to ensure a seamless customer experience in case of phone repairs, including comprehensive quality checks. 

Designed, developed, and deployed the system within 60 days, meeting stringent deadlines. Subsequently, engineered a call center and Field Service Technician (FST) module for Google, later extending to Amazon, significantly enhancing their operational capabilities and elevating customer service offerings.

Implemented security enhancements across three major systems/applications, significantly improving the overall security posture. Provided guidance and assistance to other teams to ensure consistent security standards across the organization.

Successfully integrated the B2X partner portal with the Salesforce system, enabling seamless data exchange and enhancing partner collaboration.

Led the development of an Enterprise support portal, facilitating efficient client onboarding processes. Onboarded 8 new clients onto the platform, contributing to business growth and client satisfaction.`,
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
            return <ExperienceCard key={key} company={key} data={value} />;
          })}
        </div>
      </Card>
    </div>
  );
};

export default Experience;