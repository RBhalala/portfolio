'use client';
import React from 'react';
import styles from './ExperianceCard.module.scss';
import Image from 'next/image';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';

import TimelineDot from '@mui/lab/TimelineDot';

import { TimelineCard } from './TimelineCard';
import { Paper, styled } from '@mui/material';
type MyPExperianceProps = {
  data: {
    company: string,
    country: string,
    logo: string,
    positions: []
  },
  company: object;
};

const StyledTimelineItem = styled(TimelineItem)({
  '&::before': {
    flex: 0,
    padding: 0,
  },
});

const ExperienceCard = ({ company, data }: MyPExperianceProps) => {
  return (
    <Paper variant="outlined" className={styles['experience-card-container']}>
      <div className={styles['company-section']}>
        <div className={styles['company-image-container']}>
          <Image
            className={styles['company-image']}
            src={data.logo}
            alt={`${company} logo`}
            objectFit="contain"
            fill={true}
          />
        </div>

        <div className={styles['company-data']}>
          <p className={styles['company-name']}>{data.company}</p>
          <p className={styles['company-location']}>{data.country}</p>

          <Timeline className={styles['timeline-root']}>
            {data.positions.map((position, index) => {
              return (
                <StyledTimelineItem key={index} >
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <TimelineCard data={position} />
                  </TimelineContent>
                </StyledTimelineItem>
              );
            })}
          </Timeline>
        </div>
      </div>
    </Paper>
  );
};

export default ExperienceCard;