
import React from 'react';
import styles from './ExperianceCard.module.scss';
import { Box } from '@mui/material';

export const TimelineCard = ({ data }) => {
  return (
    <div className={styles['timeline-card']}>
      <p  className={styles['timeline-card-title']}>{data.title}</p>
      <p  className={styles['timeline-card-duration']}>{`${data.timeFrom} - ${data.timeTo}`}</p>
      {/* Sub-bullet list */}
      <Box component="ul" sx={{ pl: 3, m: 0 }}>
        {data.details.map((point, idx) => (
          <Box
            component="li"
            key={idx}
            sx={{ typography: 'body2', mb: 0.5, listStyle: 'disc' }}
          >
            {point}
          </Box>
        ))}
      </Box>
    </div>
  );
};