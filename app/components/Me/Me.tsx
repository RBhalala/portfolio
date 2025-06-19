import React from 'react';
import styles from './Me.module.scss';
import Image from 'next/image';

import coverImage from '../../images/cover.jpeg';
import profileImage from '../../images/profile.jpeg';

const Me = () => {
  return (
    <div className={styles['me']}>
      <div className={styles['me-cover']}>
        <Image src={coverImage} alt="Cover Image" layout="responsive" />
      </div>
      <div className={styles['me-data']}>
        <div className={styles['me-data-profile-pic']}>
          <Image
            src={profileImage}
            alt="Cover Image"
            className={styles['image']}
          />
        </div>
        <div className={styles['name-container']}>
          <h2 className={styles['name']}>Ravi Bhalala</h2>
          <h4 className={styles['profession']}>
            Staff Software Engineer at Nium | Full-Stack | Fintech | Payments Expert
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Me;