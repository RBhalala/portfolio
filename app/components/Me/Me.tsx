import React from 'react';
import styles from './Me.module.scss';
import Image from 'next/image';

const Me = () => {
  return (
    <div className={styles['me']}>
      <div className={styles['me-cover']}>
        <Image src="/cover.png" width={700} height={375} alt="Cover Image" layout="responsive" />
      </div>
      <div className={styles['me-data']}>
        <div className={styles['me-data-profile-pic']}>
          <Image
            src="/profile.jpeg"
            alt="Cover Image"
            width={400} height={400}
            className={styles['image']}
          />
        </div>
        <div className={styles['name-container']}>
          <h2 className={styles['name']}>Ravi Bhalala</h2>
          <h4 className={styles['profession']}>
            Staff Software Engineer | Full-Stack | Fintech | Payments Expert | Get Things Done
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Me;