import React from 'react';
import styles from './contact-us.less';
import NavBar from '../../components/navbar';
import Image from 'next/image';
export const Index = () => {
  return (
    <>
      <NavBar />
      <div className={styles.MainContainer}>
        <div className={styles.topImage}>
          <div className={styles.headerBannerContactUs}>
            <div className={styles.contactUsTitle}>Contact</div>
            <div className={styles.subTitle}>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </div>
            <div className={styles.subTitle}>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx{' '}
              <span className={styles.callCenter}>
                xxxxxxxxxxxxxA xxxxxxxxxxx
              </span>
            </div>
          </div>
        </div>
        <div className={styles.positionContactForm}>
          <div className={styles.formContactUsContainer}>
            <div className={styles.groupform}>
              <div className={styles.leftForm}>
                <div className={styles.formLeftcontainer}>
                  <div className={styles.gruopListContact}>
                    <div className={styles.contactText}>
                      <div>(+66) 99 496 xxxx (Mr.ken)</div>
                      <div>(+66) 82 283 xxxx (Mr.ken)</div>
                    </div>
                  </div>
                  <div className={styles.gruopListContact}>
                    <div className={styles.contactText}>Line: TeamKen.xxx</div>
                  </div>
                  <div className={styles.gruopListContact}>
                    <div className={styles.contactText}>
                      We chat: wxid_y00g2dxxxxxxxx
                    </div>
                  </div>
                  <div className={styles.gruopListContact}>
                    <div className={styles.contactText}>
                      Email: Contact@xxxxxxx.com
                    </div>
                  </div>
                  <div className={styles.taxID}>
                    เลขที่ประจำตัวผู้เสียภาษี&ensp;0105550122773
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
