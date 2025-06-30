import { Card } from '@mui/material';
import React from 'react';

import styles from './Events.module.scss';
import EventCard from '../Common/EventCard/EventCard';

const events = [
  {
    title:
      `Hiring for Nium - IIT Bhubaneswar`,
    details:
      'Part of the recruitment panel at Indian Institute of Technology Bhubaneswar (IIT Bhubaneswar) for recruiting IIT freshers in Nium',
    tech: 'Hiring | Tech',
    awards: [],
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7002248473550966784?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7002248473550966784%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29',
    image: './iit.jpeg',
  },
  {
    title: 'Recognized for Excellence and Successful Project Transition - 2021',
    details:
      'Received multiple awards for outstanding performance in 2020-21. Successfully took over responsibilities from the Lithuania team and enhanced the portal to support increased volume and scalability',
    tech: 'React JS | Node JS | AWS',
    awards: ['NIUM POLYMATH AWARD', 'SUPER STAR AWARD'],
    link: 'https://www.linkedin.com/posts/ravi-bhalala_leadership-motivation-culture-activity-6802477630751850496-a5Dn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB78724BrWbsls8C_CQ4Hi3AOFSln43I7pU',
    image: './polymath.png',
  },
  {
    title: 'Google phone repair workflow',
    details:
      'Build google phone repair workflow completly from scratch, and got award from B2X',
    tech: 'NodeJS | Angular',
    image: './google.jpg',
    link: 'https://store.google.com/us/repair?hl=en-US',
    awards: [],
  }
];

const Events = () => {
  return (
    <div className={styles['card-container']}>
      <Card variant="outlined">
        <div className={styles['about-container']}>
          <h3 className={styles['about-container-title']}>Events</h3>

          <div>
            {events.map((project, index) => {
              return <EventCard data={project} key={index} />;
            })}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Events;