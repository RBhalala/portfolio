import React from 'react';
import styles from './EventCard.module.scss';
import Image from 'next/image';

import InsertLinkIcon from '@mui/icons-material/InsertLink';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

type IEventCard = {
  title: string;
  details: string;
  tech: string;
  image: string;
  link?: string;
  awards?: string[];
}
type MyEventProp = {
  data: IEventCard;
}

const EventCard = ({
  data: { title, details, tech, image, link, awards },
}: MyEventProp) => {
  return (
    <div className={styles['project-card']}>
      <div className={styles['project-card-image']}>
        <Image src={image} alt={title} objectFit="cover" fill={true} />
      </div>
      <div className={styles['project-card-data']}>
        <p className={styles['project-card-data-title']}>{title}</p>
        <div className={styles['project-card-data-tech']}>
          {tech.split('|').map((t, index) => {
            return <p key={index}>{t.trim()}</p>;
          })}
        </div>
        <div className={styles['project-card-data-link']}>
          <
            InsertLinkIcon />
          <p className={styles['project-card-data-link-text']}>
            <a target="_blank" rel="noopener noreferrer" href={link}>
              {link}
            </a>
          </p>
        </div>
        <p className={styles['project-card-data-details']}>{details}</p>

        {awards &&
          awards.map((award, key) => {
            return (
              <div key={key} className={styles['project-card-data-award']}>
                <EmojiEventsIcon />
                <p className={styles['project-card-data-award-text']}>{award}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default EventCard;