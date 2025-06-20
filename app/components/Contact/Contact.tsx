import { Button, Card } from '@mui/material';
import React from 'react';

import styles from './Contact.module.scss';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <div className={styles['card-container']}>
      <Card variant="outlined">
        <div className={styles['about-container']}>
          <h3 className={styles['about-container-title']}>Contact Me</h3>

          <div className={styles['about-container-detail']}>
            <LocationOnIcon />
            <p className={styles['about-container-text']}>Amsterdam, Netherland</p>
          </div>
          <div className={styles['about-container-detail']}>
            <CallIcon />
            <p className={styles['about-container-text']}>
              <a href="tel:+31687894401">+31 687894401</a>
            </p>
          </div>
          <div className={styles['about-container-detail']}>
            <EmailIcon />
            <p className={styles['about-container-text']}>
              <a href="mailto:ravi.bhalala.nl@gmail.com">ravi.bhalala.nl@gmail.com</a>
            </p>
          </div>
          <div className={styles['about-container-detail']}>
            <EmailIcon />
            <p className={styles['about-container-text']}>
              <a href="mailto:ravi.bhalala@nium.com">ravi.bhalala@nium.com</a>
            </p>
          </div>

          <div className={styles['social-icons']}>
            <Button
              style={{ textTransform: 'none', backgroundColor: '#0A66C2' }}
              variant="contained"
              endIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/ravi-bhalala/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
            <Button
              style={{ textTransform: 'none', backgroundColor: '#141414' }}
              variant="contained"
              endIcon={<GitHubIcon />}
              href="https://github.com/RBhalala"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Contact;