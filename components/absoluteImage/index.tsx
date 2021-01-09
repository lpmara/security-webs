import React from 'react';
import styles from './absoluteImage.less';
import Image from 'next/image';

export const Index = () => {
  return (
    <div className={styles.ContentTwoSize}>
      <div className={styles.mainBackgroundLayer}>
        <div className={styles.flexContainer}>
          <div className={styles.leftSideContent}>
            <div
              className={styles.absoluteImage}
              style={{ marginTop: '-120px' }}
            >
              <Image
loading={'eager'}
                alt={'Professional center image'}
                src={'/images/koo1_preview_rev_1.png'}
                width={418}
                height={599}
              />
            </div>
          </div>
          <div className={styles.rightSideContent}>
            <div className={styles.titleText}>
              <div>Bodyguard VIP And Security Protection</div>
              {/* <div style={{paddingLeft: '15px'}}></div> */}
            </div>
            <div className={styles.detailText}>
              <div className={styles.textDetail}>
                <Image
loading={'eager'}
                  alt={'Professional center image'}
                  src={'/images/video1.png'}
                  width={895}
                  height={480}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
