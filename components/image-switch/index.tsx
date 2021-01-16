import React from 'react';
import styles from './image-switch.less';
import Image from 'next/image';

interface ImageSwitchInterface {
  imagePath: string;
  title: string;
  titleColor: string;
  detail1: string;
  detail2: string;
  side: number;
}

interface ImageSwitch {
  ImageSwitch: ImageSwitchInterface;
}

export const Index = ({ ImageSwitch }: ImageSwitch) => {
  if (ImageSwitch.side === 1) {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.flexContainer}>
          <div className={styles.leftSideContanier}>
            <Image
              loading={'eager'}
              alt={'Image left side'}
              src={ImageSwitch.imagePath}
              width={872}
              height={1878}
            />
            <Image
              loading={'eager'}
              alt={'Image left side'}
              src={'/images/our-work/231957.jpg'}
              width={872}
              height={1878}
            />
          </div>
          <div className={styles.rightSideContanier}>
            <div
              className={styles.titleText}
              style={{ color: ImageSwitch.titleColor }}
            >
              {ImageSwitch.title}
            </div>
            <div className={styles.detail1}>{ImageSwitch.detail1}</div>
            <div className={styles.detail2}>{ImageSwitch.detail2}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.flexContainer}>
          <div className={styles.leftSideContanier}>
            <div
              className={styles.titleText}
              style={{ color: ImageSwitch.titleColor }}
            >
              {ImageSwitch.title}
            </div>
            <div className={styles.detail1}>{ImageSwitch.detail1}</div>
            <div className={styles.detail2}>{ImageSwitch.detail2}</div>
          </div>
          <div className={styles.rightSideContanier}>
            <Image
loading={'eager'}
              alt={'Image left side'}
              src={ImageSwitch.imagePath}
              width={1876}
              height={872}
            />
          </div>
        </div>
      </div>
    );
  }
};
export default Index;
